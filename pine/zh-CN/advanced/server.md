---
title: "在服务器上运行"
description: "不开窗口运行 Pine，通过浏览器访问；包含全部选项、部署建议和与桌面端的差异。"
order: 2
---

# 在服务器上运行

Pine 可以不开窗口运行在 macOS 或 Linux 服务器上，只提供浏览器界面。它与桌面端是同一套应用核心，区别只在宿主能力：没有窗口、系统通知、快速输入框、自动更新和 Computer Use。

## 构建与运行

- 需要 Node.js 22.13 或更高版本（会话索引使用 `node:sqlite`）。
- 需要按[从源码运行](run-from-source.md)准备好源码和依赖。
- 在 Linux 上，Agent 工具的沙箱还需要 bubblewrap、socat 和 ripgrep：

```sh
sudo apt install bubblewrap socat ripgrep   # Debian / Ubuntu
```

```sh
bun install --frozen-lockfile
bun run build:server
PINE_PASSWORD='至少 8 个字符' node apps/desktop/.vite/server/server.mjs
```

构建产物在 `apps/desktop/.vite/server/`，包括：

- `server.mjs`
- Agent worker（`agent.mjs` 及其分块）
- 浏览器界面（`renderer/`）

Pi 等运行时依赖从仓库的 `node_modules` 加载，所以要在仓库目录内运行，或把仓库连同依赖一起部署。

`node apps/desktop/.vite/server/server.mjs --help` 列出全部选项：

| 选项 | 环境变量 | 默认值 |
| --- | --- | --- |
| `--data-dir` | `PINE_DATA_DIR` | `$XDG_DATA_HOME/pine-server`（`~/.local/share/pine-server`） |
| `--port` | `PINE_PORT` | `9415` |
| `--lan` | `PINE_LAN=1` | 只监听 `127.0.0.1` |
| `--public-origin` | `PINE_PUBLIC_ORIGIN` | 无 |
| `--remember-for` | `PINE_REMEMBER_FOR` | `7d` |
| `--password-file` | `PINE_PASSWORD_FILE` / `PINE_PASSWORD` | 无，必须提供 |
| `--no-password` | `PINE_REQUIRE_PASSWORD=0` | 需要密码 |
| `--remote` | `PINE_REMOTE=1`（`0` 关闭） | 保持上次的状态，默认关闭 |
| `--pair` | `PINE_PAIR=1` | 不配对 |

- 访问密码至少 8 个字符，只从环境变量或文件读取，不接受命令行参数，避免出现在进程列表里。启动时密码未变则保留已登录的浏览器；换了密码会让所有浏览器重新登录。
- `--no-password` 只用于前面已有登录网关（如 Cloudflare Access）且只监听本机的情况，不能与 `--lan` 同时使用。
- 收到 `SIGTERM` / `SIGINT` 时先停止 Agent 和它的工具再退出，再次收到信号则立即退出。

## 部署建议

推荐只监听本机（默认就是 `127.0.0.1:9415`），前面放一个终止 TLS 的反向代理，并把 `--public-origin` 设成代理的公网地址。公网访问请务必使用 HTTPS。systemd 示例：

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

## 经 Aldine 远程控制

无头服务端可以像桌面端一样经 Aldine 远程控制：

- 手机或另一台电脑的浏览器打开 `rc.aldine.cn`，配对后即可使用服务器上的 Pine。
- 服务器无需公网地址或端口转发。
- 服务端的网页界面和密码照常工作（配对的设备相当于一个已登录的浏览器）。

```sh
PINE_PASSWORD=... node apps/desktop/.vite/server/server.mjs --pair
```

- `--remote` 开启并记住远程控制；`PINE_REMOTE=0` 关闭。状态保存在数据目录的 `agent/remote-control.json`（权限 `0600`，含服务器的私钥），重启后保持。
- `--pair` 在终端打印配对链接和二维码，并开启远程控制。用设备的相机扫描，或在设备浏览器里打开链接。链接几分钟内有效，只能配对一台设备，且是秘密，不要转发。
- 没有图形界面可以点“允许”：能操作服务器终端的人才能拿到链接，所以持有链接的设备会被直接允许，并在日志里打印设备指纹。
- 链接过期或需要再加一台设备时，不必重启：给进程发 `SIGUSR2`（`kill -USR2 <pid>`；systemd 下用 `systemctl kill -s USR2 pine`），日志里会出现新的链接。
- 查看和移除已配对的设备要先停止服务端，因为运行中的服务端在内存里保存着设备列表：

  ```sh
  node apps/desktop/.vite/server/server.mjs remote list
  node apps/desktop/.vite/server/server.mjs remote remove <id>   # id 可以只写开头几位，要唯一
  ```

  移除后设备再也无法连接。`--data-dir` / `PINE_DATA_DIR` 与运行时一致。
- 设备不能再配对其他设备：配对只能由终端发起。

## 微信远程

服务端也可以接入[微信远程](../configuration/wechat.md)，让一台常开的机器随时接收微信里的任务。连接需要交互式终端，因为要显示二维码并输入微信发来的配对码：

```sh
PINE_PASSWORD=... node apps/desktop/.vite/server/server.mjs --wechat-bind
```

终端会显示二维码；用手机微信扫码并确认，再在微信里给机器人发任意一条消息，把它回复的 6 位配对码输入终端。以服务方式运行时，先停止服务，在前台运行一次完成连接（Docker 用 `docker run -it`）；之后正常启动即可，连接保存在数据目录里。

查看状态、断开和修改设置用 `wechat` 子命令，`--data-dir` / `PINE_DATA_DIR` 与运行时一致：

```sh
node apps/desktop/.vite/server/server.mjs wechat status
node apps/desktop/.vite/server/server.mjs wechat unbind
node apps/desktop/.vite/server/server.mjs wechat config --ceiling auto-approve --default-project none
```

| `wechat config` 选项 | 作用 |
| --- | --- |
| `--ceiling <模式>` | 最高审批模式：`let-me-review`、`auto-approve`、`autonomous` 或 `yolo` |
| `--default-mode <模式>` | 从微信新建会话时的审批模式，不能高于最高审批模式 |
| `--default-project <id 或 none>` | `.new` 新建会话所在的项目；`none` 为临时工作区 |
| `--allow-high-risk <yes 或 no>` | 是否允许从微信批准高风险操作 |
| `--allow-files <yes 或 no>` | 是否允许向微信发送文件 |
| `--language <zh、en 或 auto>` | 微信里回复的语言 |
| `--pause` / `--resume` | 暂停 / 恢复处理微信消息 |

运行中的服务端在收到 `SIGHUP`（`kill -HUP <pid>`）或重启时应用修改。登录失效需要重新扫码时，日志会提示，按上面的方式在终端里再运行一次 `--wechat-bind`。

> [!WARNING]
> 最高或默认审批模式设为 `yolo` 时，命令会打印警告：任何进入该微信账号的人都能控制这台服务器。

## 与桌面端的差异

- 数据目录与桌面端分开，默认不共享项目和会话；可以用 `--data-dir` 指向任意目录，但不要让桌面端和服务端同时使用同一个目录。
- 数据目录以 `0700` 创建。服务器没有系统钥匙串，TinyFish 密钥和模型服务密钥一样以仅本用户可读的文件保存。
- 项目文件夹是服务器上的路径。在浏览器里移到废纸篓的文件会移入数据目录下的 `trash/`，不会被删除。
- 近似位置按服务器的公网 IP 估算，在云主机上通常是机房所在地；需要时可在设置里关闭。
- 支持 macOS 和 Linux（已在 Debian 12 容器中实测）。Windows 不支持，因为它的沙箱需要桌面端的一次性提权配置。
- 服务端是单用户的：所有登录的浏览器共享同一组项目、会话和设置。

## Linux 沙箱

Linux 上普通 `bash` 和文件工具在 bubblewrap 里运行：

- 只能读系统运行时目录（`/usr`、`/lib*`、证书和少数 `/etc` 文件）和项目授权的文件夹。
- 只能写可写文件夹，没有网络。
- 命令使用 `bash --noprofile --norc`，不读取用户的启动文件。

和 macOS 的区别：

- 写到 `/tmp` 等授权以外位置的文件落在每次命令独立的临时文件系统里，命令结束即消失，不会写到主机上；macOS 上这类写入直接失败。项目内的临时文件请用 `$TMPDIR`。
- bubblewrap 需要非特权用户命名空间。部分主机和容器默认禁止，此时服务端启动时会打印提示，Agent 只能通过需要审批的 `privileged_bash` 执行命令。在 Docker 中运行时加上：

  ```sh
  docker run --security-opt seccomp=unconfined \
    --security-opt apparmor=unconfined \
    --security-opt systempaths=unconfined ...
  ```
