---
title: "Remote control"
description: "Browser access, pairing a phone or other device through Aldine, keeping the computer awake, running in the background and the tray menu."
order: 6
---

# Remote control

**Pine Settings › Remote control** (desktop app only) lets you use the Pine on this computer from other devices. Every remote option works only while Pine is running and the computer is awake. To send tasks from WeChat, see [WeChat remote](wechat.md).

## Browser access

**Browser access** serves Pine's full interface to a browser, and is required for remote control through Aldine. Before turning it on, set an **Access password** (at least 8 characters) that browsers sign in with.

| Option | What it does |
| --- | --- |
| **Require password** | On by default. Turn it off only when something in front of Pine, such as Cloudflare Access, already signs people in; once off, anyone who reaches the address controls Pine and can run commands on this computer without signing in |
| **Stay signed in** | How long a browser stays signed in after entering the password: **Until the browser closes**, 1 day, 7 days or 30 days |
| **Allow LAN access** | Other devices on your network can open Pine. Traffic is unencrypted HTTP, so only use networks you trust |
| **Public address** | When a reverse proxy or a tunnel such as Cloudflare Tunnel serves Pine, its address, such as `https://pine.example.com` |
| **Port** | The port Pine listens on; open the access link again after changing it |
| **Access link** | Opens Pine at `127.0.0.1` on this computer; copy it or open it in a browser |
| **Signed-in browsers** | **Sign out all** makes every browser enter the password again. Changing the password also signs them out |

> [!CAUTION]
> Anyone who can sign in through Browser access can read your projects, run agents and run commands on this computer. Don't reuse the access password anywhere else.

## Remote control via Aldine

**Remote control via Aldine** pairs any device by QR code or link, with no port forwarding and end-to-end encryption.

1. Turn on **Browser access** first.
2. Click **Pair a device**, then scan the QR code with the other device's system camera, or open the pairing link in its browser. The dialog shows how long the code and link stay valid; after that, click **New code**.
3. Confirm the pairing on this computer. The dialog shows this computer's fingerprint so you can check it.

> [!TIP]
> Use the system camera and the native browser, not the scanners built into chat or payment apps.

**Paired devices** lists each device with when it was paired and last connected; **Rename** or **Remove** it. A removed device disconnects at once and must pair again.

On a phone:

- After adding the Pine Remote web page to your Home Screen, add computers inside that app with **Scan pairing code** or **Paste pairing link**, so they are saved there. Extra text around a pasted link is ignored.
- With several computers paired, **Switch computer** returns to the list of computers, where you can also add another.
- On a phone, Pine uses a layout for small screens: dialogs fill the screen, and lists and details are shown one at a time.

## Keeping the computer awake

**Keep the computer awake while remote control is on**, at the top of the section, is off by default. When on, the computer does not go to sleep while Browser access is on or WeChat is receiving tasks; the display can still turn off, and closing the lid still sleeps. When no remote control is on, the computer sleeps as usual.

## Running in the background and the tray menu

With **Keep running in the background** on in **General**, closing the last window keeps Pine in the menu bar (macOS) or notification area (Windows). The tray menu has:

- **Open Pine** and **Quick composer**
- Switches for **Browser access**, **Remote Control via Aldine** and **WeChat remote**
- **Keep computer awake for remote control**
- **Manage more settings…**, which opens the Remote control settings
- The number of running sessions, and **Quit Pine**

To stop automations and every kind of remote control, quit Pine from the tray menu. Pine asks before quitting while sessions are running, remote control is on, or WeChat remote is listening.

To keep remote access available on an always-on machine, see [Run on a server](../advanced/server.md).
