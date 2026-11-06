---
title: "快速开始"
description: "从下载安装到首次启动 Pine：支持的系统、下载安装包、安装和首次启动。"
order: 10
---

# 快速开始

这份指南写给**第一次安装 Pine 的普通用户**：不需要会写代码，按步骤做即可。如果你想在服务器上运行，或从源码构建，请看[进阶安装](advanced/index.md)。

> [!CAUTION]
> Pine 目前是早期开发者预览版，界面、数据格式和 Agent 行为都可能发生不兼容变更。请不要把唯一一份重要文件交给它处理，先备份再使用。

## 开始之前

### 支持的系统

| 系统 | 状态 |
| --- | --- |
| macOS（Apple 芯片 / Intel） | 已支持 |
| Windows 10 / 11（64 位） | 部分支持 |
| Linux 桌面 | 暂不支持（可用[服务器方式](advanced/server.md)在浏览器中使用） |

不确定自己的 Mac 是哪种芯片：点屏幕左上角  → "关于本机"，看"芯片"一栏。写着 Apple M1/M2/M3/M4 等的是 Apple 芯片，写着 Intel 的是 Intel。

### 你需要准备的

- **一个可用的 AI 模型账号**。Pine 本身不提供模型，也不做中转，模型连接由你自己配置。你需要下列之一：
  - 某个模型服务商的 **API Key**（如 Anthropic、OpenAI、Google、DeepSeek、智谱、Moonshot 等，Pine 内置了多家提供商）；
  - 支持登录授权的订阅账号（OAuth 登录，在 Pine 里点登录即可）；
  - 自建或第三方的 **兼容接口**（需要地址和密钥，可用"自定义提供商"添加）。
- **能访问你选用的模型服务的网络**。部分服务商在某些地区需要代理，请先确认你的网络能打开对应服务商的官网。
- **一个想让 Pine 处理的文件夹**（文档、表格、资料都可以）。

### 关于数据与隐私

- 项目、会话和文件都保存在你的电脑上。
- 你和模型之间的对话内容会发送给**你选择的模型服务商**，Pine 不会经过自己的服务器中转。请按需要选择服务商，不要把不该外发的文件交给 Agent 处理。

## 下载安装包

Pine 的安装包有两个下载来源，内容相同，任选其一。

### 方式一：直接下载（推荐）

下面的链接**始终指向最新版本**，发布新版后不需要换链接，点击即可下载。不需要 GitHub 账号，也不用在页面里找文件：

| 你的系统 | 直接下载 |
| --- | --- |
| macOS，Apple 芯片（M1 / M2 / M3 / M4 等） | [Pine-darwin-arm64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-arm64.dmg) |
| macOS，Intel | [Pine-darwin-x64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-x64.dmg) |
| Windows 64 位 | [Pine-win32-x64.exe](https://dl.phosphoros.works/pine/latest/Pine-win32-x64.exe) |

想确认下载的文件没有损坏，可以打开[校验文件 SHA256SUMS](https://dl.phosphoros.works/pine/latest/SHA256SUMS)，对照里面的 SHA-256 值与自己下载文件的值是否一致。

### 方式二：GitHub Releases

安装包也发布在 GitHub：

**https://github.com/aldinelabs/pine/releases/latest**

打开页面后，在 **Assets** 里选择与你系统对应的文件：

| 你的系统 | 下载文件（文件名中包含） |
| --- | --- |
| macOS，Apple 芯片 | `darwin-arm64.dmg` |
| macOS，Intel | `darwin-x64.dmg` |
| Windows 64 位 | `win32-x64.exe` |

注意：

- 同一页面里的 `.nupkg`、`RELEASES` 等文件是 Windows 自动更新用的，**不要手动下载运行**。
- 页面里的 "Source code (zip / tar.gz)" 是源码，不是安装包。

## 安装

### macOS

1. 双击下载的 `.dmg` 文件。
2. 在弹出的窗口里，把 **Pine** 图标拖到 **Applications（应用程序）** 文件夹。
3. 弹出（推出）安装盘，之后从"启动台"或"应用程序"里打开 Pine。

**第一次打开可能被系统拦截。** Pine 的安装包目前没有经过 Apple 公证，macOS 可能提示"无法验证开发者"或"已损坏"。这是系统对未公证应用的常规拦截，处理方法：

1. 先在"应用程序"里**右键点击 Pine → 打开**，在弹窗里再点"打开"。
2. 如果没有"打开"按钮：到 **系统设置 → 隐私与安全性**，往下找到关于 Pine 的提示，点 **仍要打开**，然后输入电脑密码确认。
3. 如果提示"已损坏，无法打开"，打开"终端"，运行下面这一行后再重新打开（只对你确认来自官方发布页的文件使用）：

   ```bash
   xattr -dr com.apple.quarantine /Applications/Pine.app
   ```

### Windows

1. 双击下载的 `win32-x64.exe` 安装程序。
2. 如果出现蓝色的 **"Windows 已保护你的电脑"（SmartScreen）**：点 **更多信息 → 仍要运行**。这是因为安装包可能未带商业代码签名证书，确认下载来源是官方发布页即可。
3. 安装是一键完成的，不需要选择路径；完成后会自动启动 Pine，并创建桌面 / 开始菜单快捷方式。

## 首次启动

### macOS 首次打开

直接进入主界面。如果之后用到屏幕相关能力（如快速输入框抓取当前窗口、Computer Use），系统会请求"屏幕录制"或"辅助功能"权限，按需在 **系统设置 → 隐私与安全性** 中允许即可，不用这些功能可以一直不授权。

### Windows：沙箱配置

Windows 首次启动时，Pine 会先配置 **Windows 沙箱**（用来把 Agent 的命令限制在授权文件夹内）。

- 会弹出 **UAC（用户账户控制）** 提示，请选择 **是**。
- 这一步需要管理员权限，只在第一次进行。拒绝的话，Pine 无法开始工作；关闭后重新启动 Pine，会再次提示。
- 配置完成前主窗口不会打开，等待几十秒是正常的。

### 选择语言

Pine 的界面支持简体中文、繁体中文、英文、日文、韩文、西班牙文、法文、德文和俄文。如果显示的不是你想要的语言：

1. 点窗口左上或右上角的**齿轮（打开 Pine 设置 / Open Pine settings）**。
2. 进入 **通用（General）→ 语言（Language）**。
3. 在下拉框里选择。

装好之后，继续[连接模型与服务](connect-models/index.md)。
