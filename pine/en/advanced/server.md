---
title: "Run on a server"
description: "Run Pine without a window and use it from a browser, with all options, deployment advice, and differences from the desktop app."
order: 2
---

# Run on a server

Pine can run without a window on a macOS or Linux server and provide only the browser interface. It is the same application core as the desktop app; the only difference is the host capabilities: there is no window, system notifications, quick composer, auto-update, or Computer Use.

## Build and run

- Needs Node.js 22.13 or later (the session index uses `node:sqlite`).
- Needs the source and dependencies prepared as in [Run from source](run-from-source.md).
- On Linux, the sandbox for the agent's tools also needs bubblewrap, socat, and ripgrep:

```sh
sudo apt install bubblewrap socat ripgrep   # Debian / Ubuntu
```

```sh
bun install --frozen-lockfile
bun run build:server
PINE_PASSWORD='at least 8 characters' node apps/desktop/.vite/server/server.mjs
```

The build output is in `apps/desktop/.vite/server/` and consists of:

- `server.mjs`
- The agent worker (`agent.mjs` and its chunks)
- The browser interface (`renderer/`)

Runtime dependencies such as Pi are loaded from the repository's `node_modules`, so run it from inside the repository, or deploy the repository together with its dependencies.

`node apps/desktop/.vite/server/server.mjs --help` lists all options:

| Option | Environment variable | Default |
| --- | --- | --- |
| `--data-dir` | `PINE_DATA_DIR` | `$XDG_DATA_HOME/pine-server` (`~/.local/share/pine-server`) |
| `--port` | `PINE_PORT` | `9415` |
| `--lan` | `PINE_LAN=1` | Listens only on `127.0.0.1` |
| `--public-origin` | `PINE_PUBLIC_ORIGIN` | None |
| `--remember-for` | `PINE_REMEMBER_FOR` | `7d` |
| `--password-file` | `PINE_PASSWORD_FILE` / `PINE_PASSWORD` | None; required |
| `--no-password` | `PINE_REQUIRE_PASSWORD=0` | Password required |
| `--remote` | `PINE_REMOTE=1` (`0` turns it off) | Keeps the last state; off by default |
| `--pair` | `PINE_PAIR=1` | Don't pair |

- The access password must be at least 8 characters. It is read only from an environment variable or a file, never from a command-line argument, so it doesn't show up in the process list. If the password is unchanged at startup, browsers that are already signed in stay signed in; changing it signs every browser out.
- `--no-password` is only for when a login gateway (such as Cloudflare Access) already sits in front and the server listens only on the local machine; it can't be combined with `--lan`.
- On `SIGTERM` / `SIGINT` it first stops the agent and its tools before exiting; a second signal exits immediately.

## Deployment advice

Listen only on the local machine (the default is `127.0.0.1:9415`), put a TLS-terminating reverse proxy in front, and set `--public-origin` to the proxy's public address. Always use HTTPS for public access. A systemd example:

```ini
# /etc/systemd/system/pine.service
[Unit]
Description=Pine
After=network-online.target

[Service]
User=pine
WorkingDirectory=/opt/pine
Environment=PINE_PUBLIC_ORIGIN=https://pine.example.com
Environment=PINE_PASSWORD_FILE=/etc/pine/password
ExecStart=/usr/bin/node apps/desktop/.vite/server/server.mjs
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

## Remote control through Aldine

A headless server can be controlled remotely through Aldine just like the desktop app:

- Open `rc.aldine.cn` in the browser on a phone or another computer, pair, and use the Pine on the server.
- The server needs no public address or port forwarding.
- The server's web interface and password keep working as usual (a paired device acts as an already-signed-in browser).

```sh
PINE_PASSWORD=... node apps/desktop/.vite/server/server.mjs --pair
```

- `--remote` turns on and remembers remote control; `PINE_REMOTE=0` turns it off. The state is saved in `agent/remote-control.json` in the data directory (mode `0600`, containing the server's private key) and persists across restarts.
- `--pair` prints a pairing link and QR code in the terminal and turns remote control on. Scan it with the device's camera, or open the link in the device's browser. The link is valid for a few minutes, pairs only one device, and is a secret, so don't forward it.
- There's no graphical interface on which to click "Allow": only someone with access to the server terminal can get the link, so a device holding the link is allowed directly, and its fingerprint is printed in the log.
- When the link expires or you need to add another device, you don't have to restart: send the process `SIGUSR2` (`kill -USR2 <pid>`; under systemd use `systemctl kill -s USR2 pine`), and a new link appears in the log.
- To list or remove paired devices, stop the server first, because a running server keeps the device list in memory:

  ```sh
  node apps/desktop/.vite/server/server.mjs remote list
  node apps/desktop/.vite/server/server.mjs remote remove <id>   # the id may be just its first few characters, as long as it's unique
  ```

  A removed device can never connect again. `--data-dir` / `PINE_DATA_DIR` must match what the server runs with.
- A device can't pair other devices: pairing can only be started from the terminal.

## WeChat remote

A server can also take [WeChat remote](../configuration/wechat.md), so an always-on machine receives tasks from WeChat at any time. Connecting needs an interactive terminal, because it shows a QR code and asks for the code WeChat sends:

```sh
PINE_PASSWORD=... node apps/desktop/.vite/server/server.mjs --wechat-bind
```

The terminal shows a QR code; scan it with WeChat on your phone and confirm, then send any message to the bot in WeChat and type the 6-digit pairing code it replies with into the terminal. When Pine runs as a service, stop the service and run it once in the foreground to connect (with Docker, use `docker run -it`); after that, start it as usual. The connection is kept in the data directory.

Check the status, disconnect and change settings with the `wechat` subcommand; `--data-dir` / `PINE_DATA_DIR` must match what the server runs with:

```sh
node apps/desktop/.vite/server/server.mjs wechat status
node apps/desktop/.vite/server/server.mjs wechat unbind
node apps/desktop/.vite/server/server.mjs wechat config --ceiling auto-approve --default-project none
```

| `wechat config` option | What it does |
| --- | --- |
| `--ceiling <mode>` | Highest approval mode: `let-me-review`, `auto-approve`, `autonomous` or `yolo` |
| `--default-mode <mode>` | Approval mode of sessions started from WeChat, never above the ceiling |
| `--default-project <id or none>` | Project `.new` starts sessions in; `none` is the temporary workspace |
| `--allow-high-risk <yes or no>` | Whether high-risk actions can be approved from WeChat |
| `--allow-files <yes or no>` | Whether files can be sent to WeChat |
| `--language <zh, en or auto>` | Language of the replies in WeChat |
| `--pause` / `--resume` | Stop / resume acting on WeChat messages |

A running server applies a change when it receives `SIGHUP` (`kill -HUP <pid>`) or restarts. When the login expires and WeChat needs a new scan, the log says so; run `--wechat-bind` in a terminal again as above.

> [!WARNING]
> Setting the ceiling or default mode to `yolo` prints a warning: anyone who gets into that WeChat account controls this server.

## Differences from the desktop app

- The data directory is separate from the desktop app's, and projects and sessions aren't shared by default. You can point `--data-dir` at any directory, but don't let the desktop app and the server use the same one at the same time.
- The data directory is created with mode `0700`. A server has no system keychain, so the TinyFish key is stored like model-provider keys, in a file readable only by that user.
- Project folders are paths on the server. Files you move to Trash in the browser go into `trash/` under the data directory and aren't deleted.
- Approximate location is estimated from the server's public IP, which on a cloud host is usually the data center's location; you can turn it off in settings if needed.
- macOS and Linux are supported (tested in a Debian 12 container). Windows isn't supported, because its sandbox needs the desktop app's one-time elevated setup.
- The server is single-user: every signed-in browser shares the same projects, sessions, and settings.

## Linux sandbox

On Linux, ordinary `bash` and file tools run inside bubblewrap:

- They can only read the system runtime directories (`/usr`, `/lib*`, certificates, and a few `/etc` files) and the folders the project authorizes.
- They can only write to writable folders, and have no network.
- Commands use `bash --noprofile --norc` and don't read the user's startup files.

Differences from macOS:

- Files written outside authorized locations, such as `/tmp`, land in a per-command temporary filesystem that disappears when the command ends and is never written to the host; on macOS such writes simply fail. For temporary files inside the project, use `$TMPDIR`.
- bubblewrap needs unprivileged user namespaces. Some hosts and containers forbid them by default; in that case the server prints a notice at startup, and the agent can only run commands through the `privileged_bash` tool, which requires approval. When running in Docker, add:

  ```sh
  docker run --security-opt seccomp=unconfined \
    --security-opt apparmor=unconfined \
    --security-opt systempaths=unconfined ...
  ```
