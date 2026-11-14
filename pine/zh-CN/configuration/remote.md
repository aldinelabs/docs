---
title: "远程控制"
description: "浏览器访问、经 Aldine 配对手机或其他设备、保持电脑唤醒、后台运行与托盘菜单。"
order: 6
---

# 远程控制

**Pine 设置（Pine Settings）→ 远程控制（Remote control）**（仅桌面端）让你在别的设备上使用这台电脑上的 Pine。所有远程方式都只在 Pine 运行、电脑未睡眠时可用。用微信派任务见[微信远程](wechat.md)。

## 浏览器访问

**浏览器访问（Browser access）** 让 Pine 在浏览器里提供完整界面，是经 Aldine 远程控制的前提。开启前需要先设置 **访问密码（Access password）**（至少 8 个字符），浏览器用它登录。

| 选项 | 说明 |
| --- | --- |
| **要求密码（Require password）** | 默认开启。只有在 Pine 前面已有其他登录手段（例如 Cloudflare Access）时才关闭；关闭后，任何能访问该地址的人无需登录即可控制 Pine，并能在这台电脑上运行命令 |
| **保持登录（Stay signed in）** | 浏览器输入密码后保持登录多久：**直到关闭浏览器**、1 天、7 天或 30 天 |
| **允许局域网访问（Allow LAN access）** | 同一网络中的其他设备可以打开 Pine。流量是未加密的 HTTP，只在可信网络中使用 |
| **公开地址（Public address）** | 通过反向代理或 Cloudflare Tunnel 等隧道提供 Pine 时，填写对外地址，例如 `https://pine.example.com` |
| **端口（Port）** | Pine 监听的端口；修改后需要重新打开访问链接 |
| **访问链接（Access link）** | 在本机用 `127.0.0.1` 打开 Pine，可以复制或直接在浏览器中打开 |
| **已登录的浏览器（Signed-in browsers）** | **全部退出登录（Sign out all）** 让所有浏览器重新输入密码。修改密码也会让它们退出 |

> [!CAUTION]
> 能登录浏览器访问的人可以读取你的项目、运行智能体，并在这台电脑上执行命令。访问密码请勿与其他地方共用。

## 经 Aldine 远程控制

**经 Aldine 远程控制（Remote control via Aldine）** 用二维码或链接配对任意设备，无需端口转发，内容端到端加密。

1. 先开启 **浏览器访问（Browser access）**。
2. 点 **配对新设备（Pair a device）**，用另一台设备的系统相机扫描二维码，或在它的浏览器里打开配对链接。对话框会显示二维码和链接的剩余有效时间，过期后可以 **重新生成（New code）**。
3. 在这台电脑上确认配对。对话框会显示这台电脑的指纹，便于核对。

> [!TIP]
> 请用系统自带的相机和浏览器扫码打开，不要用微信、支付宝、QQ 里的扫一扫。

**已配对的设备（Paired devices）** 列出每台设备的配对和上次连接时间，可以 **重命名（Rename）** 或 **移除（Remove）**；移除后该设备立即断开，需要重新配对。

在手机上：

- 把 Pine 远程控制网页添加到主屏幕后，可以在应用里用 **扫描配对二维码（Scan pairing code）** 或 **粘贴配对链接（Paste pairing link）** 添加电脑，电脑会保存在这个应用里。粘贴时链接前后多余的文字会被忽略。
- 配对了多台电脑时，用 **切换电脑（Switch computer）** 回到电脑列表，也可以从那里再添加一台。
- 在手机上，Pine 使用适合小屏幕的布局：对话框全屏显示，列表和详情分步呈现。

## 保持电脑唤醒

分区顶部的 **远程控制开启时保持电脑唤醒（Keep the computer awake while remote control is on）** 默认关闭。开启后，只要浏览器访问开着或微信正在接收任务，电脑就不会自动睡眠；显示器仍可以关闭，合上笔记本盖子仍会睡眠。没有任何远程控制开启时，电脑照常睡眠。

## 后台运行与托盘菜单

在 **通用（General）** 中开启 **在后台继续运行（Keep running in the background）** 后，关闭最后一个窗口，Pine 会留在菜单栏（macOS）或通知区域（Windows）。托盘菜单包括：

- **打开 Pine（Open Pine）**、**快速输入（Quick composer）**
- **浏览器访问（Browser access）**、**经 Aldine 远程控制（Remote Control via Aldine）**、**微信远程（WeChat remote）** 开关
- **远程控制时保持电脑唤醒（Keep computer awake for remote control）**
- **管理更多设置…（Manage more settings…）**：打开远程控制设置
- 正在运行的会话数，以及 **退出 Pine（Quit Pine）**

要停止自动化和所有远程控制，需要从托盘菜单退出 Pine。有会话仍在运行、远程控制开启或微信远程正在接收时，退出前会再次确认。

想让 Pine 在一台常开的机器上长期提供远程访问，见[在服务器上运行](../advanced/server.md)。
