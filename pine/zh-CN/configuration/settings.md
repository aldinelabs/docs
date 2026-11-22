---
title: "设置详解"
description: "Pine 设置中通用、外观、模型、智能体、自定义、多用户、项目管理和关于各分区的每一个选项。"
order: 1
---

# 设置详解

点标题栏的齿轮图标，或按 `Mod + ,`，打开 **Pine 设置（Pine Settings）**。下面按分区逐项说明。**远程控制（Remote control）** 分区内容较多，单独写在[远程控制](remote.md)和[微信远程](wechat.md)。

## 通用（General）

### 界面（Interface）

- **语言（Language）**：界面语言。支持简体中文、繁体中文、英语、日语、韩语、西班牙语、法语、德语和俄语。
- **货币（Currency）**：显示会话费用和费用上限时使用的货币。默认 **跟随系统（Follow system）**；按欧洲央行每日汇率换算，拿不到汇率时显示美元。
- **图解教程按钮（Guide buttons）**：默认开启。Pine 会在审批模式菜单、模型菜单、上下文用量弹窗和各个管理器标题旁放上带问号的按钮，打开配有动图和白话步骤的图解教程；侧栏 **更多功能（More）** 菜单里的 **指南（Guides）** 按主题列出全部教程。关闭后，所有窗口里的教程按钮和一次性提示都会隐藏。
- **一次性提示（One-time tips）**：开启图解教程按钮时显示。第一次遇到审批卡片、上下文压缩、子会话、自动化运行、记忆、Skill、MCP 工具等功能时，旁边会出现一句简短提示，点 **知道了（Got it）** 后不再出现。点 **重新显示（Show again）** 让所有提示重新出现。

### 通知（Notifications）

- **完成工作后发出信号（Signal when work is done）**：智能体完成一轮工作后提醒你，可选 **关闭（Off）**、**通知（Notification）** 或 **通知和声音（Notification and sound）**。
- **批准和提问时发送通知（Notify for approvals and questions）**：Pine 在后台时，工具调用需要审批或 Pine 向你提问会弹出系统通知；审批通知上直接有批准和拒绝按钮。

### 系统（System）

- **快速提问（Quick composer）**：设置一个全局快捷键，在任何应用里按下即可弹出一个浮动输入框开始新对话。授予屏幕录制和辅助功能权限后，它还能把最前面应用的窗口截图和选中的文字作为上下文，右端的 × 可以去掉这份上下文；也可以在打开主窗口前添加文件、粘贴图片和长文本。回车在窗口中打开对话；`⌃ + 回车`（Windows 和 Linux 上是 `Alt + 回车`）则在后台发送，不调出 Pine 窗口，回答好了会用系统通知告诉你，点通知即可打开这段对话。
- **在后台继续运行（Keep running in the background）**（macOS 和 Windows 桌面端）：关闭最后一个窗口后，Pine 留在菜单栏（macOS）或通知区域（Windows），自动化、远程控制和快速提问继续可用。要彻底退出，从托盘图标选 **退出 Pine（Quit Pine）**。托盘菜单见[远程控制](remote.md)。
- **诊断日志（Diagnostic logging）**：在本机记录错误和睡眠恢复事件，便于排查问题。只保留最近两份日志，合计约 2 MB；不记录对话内容，也不会自动上传。关闭后停止记录，已有日志保留。

## 外观（Appearance）

- **配色模式（Color mode）**：**跟随系统（System）**、**浅色（Light）** 或 **深色（Dark）**。
- **Pine 默认颜色主题（Pine default color theme）**：整个应用的默认主题色，可选 Neutral、Olive、Red、Rose、Orange、Green、Blue、Yellow、Violet，默认 Neutral。项目自己设置的强调色优先于它。
- **工作光效（Working glow）**：智能体工作时，一道细光沿输入框边框顺时针流动，颜色取项目的强调色。默认开启，对所有已打开的窗口生效。系统开启“减少动态效果”时，光停在右下角不动。
- **侧栏原生材质（Native sidebar material）**（macOS）：用 macOS 原生的半透明材质绘制侧栏。
- **Monet 字体系列（Monet font family）**：默认关闭。开启后，回复、会话标题、标题、输入框提示和模型选择器改用衬线阅读字体；你自己的消息、按钮、菜单和侧栏仍用界面字体。它只改变 Pine 的样子，不改变 Pine 的写法。
- **深色模式下反色文档（Invert documents in dark mode）**：深色模式下，PDF、演示文稿等文档以反色页面打开，夜间阅读不刺眼。

## 模型（Models）

模型的连接方法见[连接模型](../connect-models/index.md)。这里的选项决定各种辅助工作由哪个模型完成；模型选择器里，每个模型前都有它所属厂商的图标，一眼就能认出来：

- **模型目录（Model catalogs）**：点 **立即刷新（Refresh now）** 拉取已配置提供商的最新模型列表。
- **Pi 供应商（CC Switch）（Pi providers (CC Switch)）**（仅桌面端）：开启 **使用 Pi 的供应商（Use providers from Pi）**（默认关闭）后，Pine 会添加 Pi 的 `models.json` 中配置的供应商（在 Pi 或 CC Switch 中设置），文件改动后片刻内自动跟随。默认读取 `PI_CODING_AGENT_DIR` 或 `~/.pi/agent` 下的文件；可以 **在文件夹中显示（Show in folder）**，用 **选择文件夹…（Choose folder…）** 换一个位置，再用 **使用默认文件夹（Use default folder）** 改回。这里会显示已添加的供应商数量，以及被跳过的供应商和原因。
  - Pine 只读取这个文件：这些供应商不能在 Pine 中修改、登录或移除，请在 Pi 或 CC Switch 中修改。它们在模型选择器中带有“Pi”标记，ID 以 `pi-` 开头。
  - 密钥或请求头写成 `!命令` 形式的供应商会被跳过，Pine 不会执行其中的命令。
- **标题生成模型（Title generation model）**：为新会话起标题。
- **审批模型（Approval model）**：在 **自动审批（Auto Approve）** 和 **自主工作（Autonomous Work）** 模式下审核工具调用，并在把调用交给你时用白话解读操作。详见[审批与自动审核](approvals.md)。
- **指令优化模型（Prompt optimization model）**：输入框里的 **优化指令（Optimize prompt）** 用它把你写的内容改写成更清楚、更具体的指令，**回复建议（Reply suggestions）** 也用它。未选择时使用标题生成模型。
- **实时翻译模型（Live translation model）**：实时上下文（Live context）开启翻译时，用它翻译转写出的每一句。未选择时使用标题生成模型。
- **图像生成模型（Image generation model）**：智能体生成图片时使用。可以选 OpenRouter 上的图像模型，也可以在 **ChatGPT** 分组里选 **GPT Image**，用 ChatGPT 订阅生成图片（需要登录 OpenAI Codex，消耗订阅的 Codex 用量，不会被自动选用）。见[媒体生成](../connect-models/media-generation.md)。
- **视频生成模型（Video generation model）**：智能体生成视频时使用，需要先配置 OpenRouter，见[媒体生成](../connect-models/media-generation.md)。
- **Decisions 初筛模型（Decisions screening model）**：自动审批路径选择 **基于决策模型（Decision model）** 时用来初筛的模型。

## 智能体（Agent）

### 行为（Behavior）

- **交互式回答（Interactive answers）**：允许 Pine 在回复中放入可交互的清单、计算器、表格和图表。默认开启。
- **中途回答（Interim answers）**：允许 Pine 在搜索或处理完成前，先根据已知信息给出初步答复，或在多部分问题中解决一部分就先回复一部分，然后继续工作。默认开启，从下一条消息开始生效。子会话和自动化运行不会发中途回答。
- **回复建议（Reply suggestions）**：智能体回答后，在输入框里给出最多三条建议的下一条消息，按 `Tab` 采用，空输入框里按 `↑` / `↓` 切换。默认开启。
- **跨会话记忆（Remember across sessions）**：默认开启，从下一条消息起生效。Pine 会把你的偏好、做过的决定和学到的经验记成笔记，带到之后的会话里，笔记只保存在这台设备上。查看、修改和删除笔记在侧栏的 **更多功能（More）› 记忆（Memory）** 窗口中进行；关闭这个开关后，Pine 不再读取或保存笔记，已有笔记仍可在那里管理。
- **向 AI 提供大致位置（Share approximate location with AI）**：Pine 从 Cloudflare 获取本机公网 IP，并用内置的 GeoIP 数据库在本机估算城市；只有城市、地区和国家会发给 AI。使用 VPN 或代理时位置可能不准。
- **自动审批路径（Automatic approval path）**：自动审批时由谁做判断，可选 **大模型审批（Model review）** 或 **基于决策模型（Decision model）**（Beta）。两者的区别见[审批与自动审核](approvals.md)。

对话太长、接近模型的上下文上限时，Pine 会压缩较早的内容，保留要点继续工作：

- **上下文压缩策略（Context compaction strategy）**：**使用推荐设置（Use recommended settings）** 在上下文占用达到 80% 时压缩，上限 40 万 token；**消极压缩（Passive compaction）** 沿用默认行为，接近上下文上限时才压缩。
- **上下文压缩途径（Context compaction method）**：**大模型（Model）** 让当前模型写摘要；**语义化算法（Semantic algorithm）**（Beta）不调用模型，直接从对话中提取目标、文件改动、提交记录和简短记录，更快且不消耗 token。

开启图解教程按钮时，自动审批路径和两项压缩设置旁的问号会打开一页对比各个选项的教程。随时手动压缩、查看费用和设置费用上限，见[会话进阶](sessions.md)。

### 工具（Tools）

选择 Pine 可以做哪些事。每一类工具一个开关，默认全部开启，更改从你的下一条消息起生效；关掉某一类后，智能体拿不到这类工具，并会在需要时提醒你回这里打开。

- **终端命令（Shell commands）**：运行终端命令，包括经批准后在项目沙箱外运行的命令和长时间运行的后台任务。
- **网页搜索（Web search）**：通过 TinyFish 搜索网页并读取页面。需要 TinyFish API 密钥，用这一行的 **添加密钥（Add key）** 或 **更改密钥（Change key）** 设置；没有密钥时即使开关打开也无法使用。获取密钥见[网页搜索](../connect-models/web-search.md)。
- **电脑操作（Computer use）**：任务需要时查看屏幕、操作应用和浏览器标签页。只有这个开关打开时 Computer Use 才能工作，审批方式见[审批与自动审核](approvals.md#computer-use)。
- **图片与视频生成（Image and video generation）**：用 **模型（Models）** 中选择的模型生成图片和视频。
- **产出文件与工作台（Artifacts and workbench）**：把结果保存为产出文件、预览文件，并调整对话旁的工作台。
- **实时上下文（Live Context）**：查看正在进行的实时转写，并在你要求时开始收听。关闭后 Pine 也看不到实时转写。
- **会话（Sessions）**：搜索、读取和整理你的会话，创建子会话、给它们发消息或停止它们。
- **项目（Projects）**：列出你的项目，并在你批准后创建、编辑或删除项目。
- **工作技能（Skills）**、**自动化（Automations）**、**MCP 服务器（MCP servers）**：使用并在对话中创建或配置它们，见[自动化、Skills 与 MCP](automations.md)。

读写文件、待办清单、时钟、向你提问等基础能力没有开关，始终可用。

## 自定义（User profile）

这些信息帮助 Pine 更懂你。改动自动保存，从下一条消息起在所有对话中生效。

- **Aldine 方法论（Aldine methodology）**（Beta）：默认开启。让 Pine 像一位清醒的对话伙伴：坦诚、具体、少客套，真正认同时才附和，说清楚自己不确定的地方，能核实的先核实而不是猜。语气仍由语言风格决定，推进多少仍由工作风格决定。
- **称呼（Name and pronouns）**：在输入框里写下 Pine 该怎么称呼你，在它右端的下拉菜单里选人称代词：**不指定（Not specified）**（默认）、**他（he/him）**、**她（she/her）**、**TA（不区分性别）**（they/them）或 **自定义（Custom）**，选自定义时下方会出现一个输入框。Pine 以第三人称提到你时（例如替你写文档或消息）使用所选代词。
- **语言风格（Communication style）**：**冷静专业（Calm & professional）**、**中性（Neutral）** 或 **热情亲和（Warm & friendly）**。
- **技术背景（Technical background）**：**一般用户（General user）** 少用术语、用目标导向的语言解释，遇到不简单的任务会先了解这一领域的通行做法；**专业用户（Professional user）** 直接讲技术细节。审批卡片上的白话解读也会随它调整措辞。
- **工作风格（Work style）**：**全接管（Full takeover）**（默认）让 Pine 自己推进任务，讨论文件时直接引用或概括相关段落，你不用另开文件对照；**协作（Collaborate）** 假定你在旁边开着文件，Pine 会指出章节、段落或行号，让你随时掌握进展，并在关键决定前征求你的意见。自动化始终按全接管运行。
- **其他个人细节（Other personal details）**：你的工作、兴趣、偏好或当前目标。
- **自定义指令（Custom instructions）**：希望 Pine 遵循的额外工作方式。安全和审批规则不受它影响。

## 多用户（Multiple users）

仅桌面端。共用一台电脑的每个人都可以有自己的 Pine：各自的对话、项目、记忆、Skills、MCP 服务器、自动化、远程控制和微信绑定、模型连接和设置。用户没有密码，这只是把东西分开，并不保密。只有一个用户时，除了这个分区，界面上什么都不会变。

- **添加用户（Add user）**：设置名字、头像和颜色。**复制我的模型连接（Copy my model connections）** 默认开启，会为对方复制一份你的 API 密钥、登录和模型选择，其他内容都不复制。
- 每个用户一行，当前使用的用户标有 **当前（Current）**。铅笔按钮修改名字、头像和颜色；其他用户的“…”菜单里有 **切换到此用户（Switch to this user）** 和 **删除用户（Delete user）**。删除会先确认，然后把对方的对话、项目、记忆和模型连接移到废纸篓，项目文件夹里的文件不受影响。
- **打开 Pine 时询问是谁在使用（Ask who's using Pine when it opens）**：有多个用户时显示，默认开启。Pine 打开时先显示 **谁在使用 Pine？（Who's using Pine?）**，可以用方向键或 `1`–`9` 选择用户；关闭后，Pine 以上次使用的用户打开。

切换用户会以那个用户的身份重启 Pine；有会话正在运行或远程控制开着时会先询问。有多个用户时，侧栏底部的头像菜单和托盘菜单也能切换用户。只有当前用户的自动化和微信远程会运行。

## 项目管理（Projects）

列出所有项目及 Pine 为它们保存的数据占用（会话、附件、临时文件、搜索缓存）。项目文件夹本身不会被改动。

- **新建项目（New Project）**、**编辑（Edit）**：设置名称、图标、强调色（一排圆形色块，**Pine 默认（Pine Default）** 带虚线边，跟随外观设置，也可以选一个自己的颜色）、默认文件夹，以及附加上下文文件夹的访问权限（**只读（Read only）** 或 **读写（Read and write）**）。
- **清理临时文件（Clear temporary files）**：删除项目的临时文件。
- **清理附件…（Clear attachments…）**：删除粘贴的图片和长文本。之前引用它们的消息将无法再预览这些附件，操作前会再次确认。

## 关于（About）

设置的最后一个分区，显示 Pine 的版本号。

- **检查更新（Check for updates）**（仅桌面端）：有新版本时打开更新对话框，否则提示 **Pine 已是最新版本。（Pine is up to date.）**。
- **链接（Links）**：在浏览器中打开 **使用文档（Documentation）**、**源代码（Source code）**、**更新日志（Release notes）** 和 **反馈问题（Report an issue）**。
- **许可证（License）**：Pine 以 GNU Affero 通用公共许可证 v3.0 或更高版本发布，点它打开许可证全文。
- **开源软件（Open-source software）**：Pine 使用和移植的开源软件，可按名称或许可证搜索，依赖包按许可证分组；选择任意一项会在浏览器中打开它的项目主页。
