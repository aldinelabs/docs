---
title: "设置详解"
description: "Pine 设置中通用、外观、模型、智能体、自定义和项目管理各分区的每一个选项。"
order: 1
---

# 设置详解

点标题栏的齿轮图标打开 **Pine 设置（Pine Settings）**。下面按分区逐项说明。**远程控制（Remote control）** 分区内容较多，单独写在[远程控制](remote.md)和[微信远程](wechat.md)。

## 通用（General）

### 界面（Interface）

- **语言（Language）**：界面语言。支持简体中文、繁体中文、英语、日语、韩语、西班牙语、法语、德语和俄语。
- **货币（Currency）**：显示会话费用和费用上限时使用的货币。默认 **跟随系统（Follow system）**；按欧洲央行每日汇率换算，拿不到汇率时显示美元。
- **Monet**：开启后，Pine 换用一种独特的回答语气，并为回复、会话标题、标题、输入框提示和模型选择器使用衬线阅读字体；你自己的消息、按钮、菜单和侧栏仍用界面字体。开启期间，**自定义（User profile）** 里的 **语言风格（Communication style）** 不可用，由 Monet 取代。

### 通知（Notifications）

- **完成工作后发出信号（Signal when work is done）**：智能体完成一轮工作后提醒你，可选 **关闭（Off）**、**通知（Notification）** 或 **通知和声音（Notification and sound）**。
- **批准和提问时发送通知（Notify for approvals and questions）**：Pine 在后台时，工具调用需要审批或 Pine 向你提问会弹出系统通知；审批通知上直接有批准和拒绝按钮。

### 系统（System）

- **快速提问（Quick composer）**：设置一个全局快捷键，在任何应用里按下即可弹出一个浮动输入框开始新对话。授予屏幕录制和辅助功能权限后，它还能把最前面应用的窗口截图和选中的文字作为上下文；也可以在打开主窗口前添加文件、粘贴图片和长文本。
- **在后台继续运行（Keep running in the background）**（macOS 和 Windows 桌面端）：关闭最后一个窗口后，Pine 留在菜单栏（macOS）或通知区域（Windows），自动化、远程控制和快速提问继续可用。要彻底退出，从托盘图标选 **退出 Pine（Quit Pine）**。托盘菜单见[远程控制](remote.md)。
- **诊断日志（Diagnostic logging）**：在本机记录错误和睡眠恢复事件，便于排查问题。只保留最近两份日志，合计约 2 MB；不记录对话内容，也不会自动上传。关闭后停止记录，已有日志保留。

## 外观（Appearance）

- **配色模式（Color mode）**：**跟随系统（System）**、**浅色（Light）** 或 **深色（Dark）**。
- **Pine 默认颜色主题（Pine default color theme）**：整个应用的默认主题色，可选 Neutral、Olive、Red、Rose、Orange、Green、Blue、Yellow、Violet，默认 Neutral。项目自己设置的强调色优先于它。
- **工作光效（Working glow）**：智能体工作时，一道细光沿输入框边框顺时针流动，颜色取项目的强调色。默认开启，对所有已打开的窗口生效。系统开启“减少动态效果”时，光停在右下角不动。
- **侧栏原生材质（Native sidebar material）**（macOS）：用 macOS 原生的半透明材质绘制侧栏。
- **深色模式下反色文档（Invert documents in dark mode）**：深色模式下，PDF、演示文稿等文档以反色页面打开，夜间阅读不刺眼。

## 模型（Models）

模型的连接方法见[连接模型](../connect-models/index.md)。这里的选项决定各种辅助工作由哪个模型完成：

- **模型目录（Model catalogs）**：点 **立即刷新（Refresh now）** 拉取已配置提供商的最新模型列表。
- **标题生成模型（Title generation model）**：为新会话起标题。
- **审批模型（Approval model）**：在 **自动审批（Auto Approve）** 和 **自主工作（Autonomous Work）** 模式下审核工具调用，并在把调用交给你时用白话解读操作。详见[审批与自动审核](approvals.md)。
- **图像生成模型（Image generation model）**、**视频生成模型（Video generation model）**：智能体生成图片或视频时使用，需要先配置 OpenRouter，见[媒体生成](../connect-models/media-generation.md)。
- **Decisions 初筛模型（Decisions screening model）**：自动审批路径选择 **基于决策模型（Decision model）** 时用来初筛的模型。

## 智能体（Agent）

### 回答方式

- **交互式回答（Interactive answers）**：允许 Pine 在回复中放入可交互的清单、计算器、表格和图表。默认 **启用（Enabled）**。
- **中途回答（Interim answers）**：允许 Pine 在搜索或处理完成前，先根据已知信息给出初步答复，或在多部分问题中解决一部分就先回复一部分，然后继续工作。默认 **启用（Enabled）**，从下一条消息开始生效。子会话和自动化运行不会发中途回答。

### 权限（Permissions）

- **自动审批路径（Automatic approval path）**：自动审批时由谁做判断，可选 **大模型审批（Model review）** 或 **基于决策模型（Decision model）**（Beta）。两者的区别见[审批与自动审核](approvals.md)。

### 上下文（Context）

对话太长、接近模型的上下文上限时，Pine 会压缩较早的内容，保留要点继续工作。

- **上下文压缩策略（Context compaction strategy）**：**使用推荐设置（Use recommended settings）** 在上下文占用达到 80% 时压缩，上限 40 万 token；**消极压缩（Passive compaction）** 沿用默认行为，接近上下文上限时才压缩。
- **上下文压缩途径（Context compaction method）**：**大模型（Model）** 让当前模型写摘要；**语义化算法（Semantic algorithm）**（Beta）不调用模型，直接从对话中提取目标、文件改动、提交记录和简短记录，更快且不消耗 token。

随时手动压缩、查看费用和设置费用上限，见[会话进阶](sessions.md)。

### 工具与隐私（Tools & privacy）

- **TinyFish 网络工具（TinyFish web tools）**：添加 TinyFish API 密钥后，智能体可以搜索网页和抓取页面。配置方法见[网页搜索](../connect-models/web-search.md)。
- **向 AI 提供大致位置（Share approximate location with AI）**：Pine 从 Cloudflare 获取本机公网 IP，并用内置的 GeoIP 数据库在本机估算城市；只有城市、地区和国家会发给 AI。使用 VPN 或代理时位置可能不准。

## 自定义（User profile）

这些信息帮助 Pine 更懂你。改动自动保存，从下一条消息起在所有对话中生效。

- **昵称（Nickname）**：Pine 在合适的时候这样称呼你。
- **人称代词（Pronouns）**：Pine 以第三人称提到你时使用，例如替你写文档或消息时。可选 **不指定（Not specified）**（默认）、**他（he/him）**、**她（she/her）**、**TA（they/them）** 或 **自定义（Custom）**。
- **语言风格（Communication style）**：**冷静专业（Calm & professional）**、**中性（Neutral）** 或 **热情亲和（Warm & friendly）**。Monet 模式开启时不可用。
- **技术背景（Technical background）**：**一般用户（General user）** 少用术语、用目标导向的语言解释；**专业用户（Professional user）** 直接讲技术细节。审批卡片上的白话解读也会随它调整措辞。
- **其他个人细节（Other personal details）**：你的工作、兴趣、偏好或当前目标。
- **自定义指令（Custom instructions）**：希望 Pine 遵循的额外工作方式。安全和审批规则不受它影响。

## 项目管理（Projects）

列出所有项目及 Pine 为它们保存的数据占用（会话、附件、临时文件、搜索缓存）。项目文件夹本身不会被改动。

- **新建项目（New Project）**、**编辑（Edit）**：设置名称、图标、强调色（**Pine 默认（Pine Default）** 跟随外观设置，或选一个自己的颜色）、默认文件夹，以及附加上下文文件夹的访问权限（**只读（Read only）** 或 **读写（Read and write）**）。
- **清理临时文件（Clear temporary files）**：删除项目的临时文件。
- **清理附件…（Clear attachments…）**：删除粘贴的图片和长文本。之前引用它们的消息将无法再预览这些附件，操作前会再次确认。
