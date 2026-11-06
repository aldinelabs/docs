# Pine 初次部署指南

**简体中文** | [English](../en/getting-started.md)

这份指南写给**第一次安装 Pine 的普通用户**：不需要会写代码，按步骤做即可。如果你想在服务器上运行，或从源码构建，请看文末的"其他安装方式"。

> [!CAUTION]
> Pine 目前是早期开发者预览版，界面、数据格式和 Agent 行为都可能发生不兼容变更。请不要把唯一一份重要文件交给它处理，先备份再使用。

## 目录

1. [开始之前](#1-开始之前)
2. [下载安装包](#2-下载安装包)
3. [安装](#3-安装)
4. [首次启动](#4-首次启动)
5. [连接模型（以 DeepSeek 为例）、网页搜索（TinyFish）与图片/视频生成（OpenRouter）](#5-连接模型以-deepseek-为例)
6. [创建第一个项目](#6-创建第一个项目)
7. [开始第一个会话](#7-开始第一个会话)
8. [了解权限与审批](#8-了解权限与审批)
9. [可选配置](#9-可选配置)
10. [更新、数据位置与卸载](#10-更新数据位置与卸载)
11. [常见问题](#11-常见问题)
12. [其他安装方式](#12-其他安装方式)

---

## 1. 开始之前

### 支持的系统

| 系统 | 状态 |
| --- | --- |
| macOS（Apple 芯片 / Intel） | 已支持 |
| Windows 10 / 11（64 位） | 部分支持 |
| Linux 桌面 | 暂不支持（可用[服务器方式](#122-在服务器上运行浏览器访问)在浏览器中使用） |

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

---

## 2. 下载安装包

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

---

## 3. 安装

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

---

## 4. 首次启动

### macOS

直接进入主界面。如果之后用到屏幕相关能力（如快速输入框抓取当前窗口、Computer Use），系统会请求"屏幕录制"或"辅助功能"权限，按需在 **系统设置 → 隐私与安全性** 中允许即可，不用这些功能可以一直不授权。

### Windows：沙箱配置

Windows 首次启动时，Pine 会先配置 **Windows 沙箱**（用来把 Agent 的命令限制在授权文件夹内）。

- 会弹出 **UAC（用户账户控制）** 提示，请选择 **是**。
- 这一步需要管理员权限，只在第一次进行。拒绝的话，Pine 无法开始工作；关闭后重新启动 Pine，会再次提示。
- 配置完成前主窗口不会打开，等待几十秒是正常的。

### 选择语言

Pine 的界面支持简体中文、繁体中文、英文、日文、韩文、西班牙文、法文、德文和俄文。如果显示的不是你想要的语言：点窗口左上或右上角的**齿轮（打开 Pine 设置 / Open Pine settings）→ 通用（General）→ 语言（Language）**，在下拉框里选择。

---

## 5. 连接模型（以 DeepSeek 为例）

没有连接模型时，Pine 无法回答问题，所以这是首次使用最重要的一步。本节用 **DeepSeek** 走一遍完整流程：先在 DeepSeek 平台拿到 API Key，再填进 Pine。其他提供商的流程相同，只是第 1 部分换成对应服务商的网站。

> 下文截图里的**红框和数字**表示该步要点击或填写的位置，数字就是操作顺序。截图中的账号、余额和已有 Key 已做脱敏。

### 5.1 在 DeepSeek 平台获取 API Key

DeepSeek 的 **API 平台**（`platform.deepseek.com`）和它的网页聊天（`chat.deepseek.com`）是两套东西：网页聊天免费，不需要充值；**API 按用量计费，要先充值，再创建 Key**。

**第 1 步：登录或注册。** 打开 [platform.deepseek.com](https://platform.deepseek.com)。已有账号直接输入手机号或邮箱和密码登录（②）；没有账号点右下的 **Sign up**（①）注册，也可以用下方的 "Log in with Google"。

![DeepSeek 平台登录页，① 为 Sign up，② 为 Log in](../images/getting-started/deepseek-sign-in.webp)

**第 2 步：充值。** 登录后进入控制台。点左侧 **Top up**（①）。如果页面顶部有 **USD / CNY** 的币种切换，选 **CNY**（②）；国内账号可能没有这个切换，直接就是人民币。接着选择金额（③，¥10 起，也可以选 Custom 自定义），选择**支付宝（Alipay）或微信支付（WeChat Pay）**（④），再点 **Next step**（⑤）按页面提示完成支付。

![DeepSeek 充值页（CNY）](../images/getting-started/deepseek-top-up-cny.webp)

- 页面上具体有哪些金额档位和支付方式，以你的账户实际显示为准。
- 到账通常是即时的；如果没有立刻到账，页面注明最长可能需要 24–72 小时，超过时间仍未到账，按页面提示联系支持。
- 充值后可以在左侧 **Billing** 页面申请发票。
- 刚开始试用，充小额即可。想了解各模型的价格，点左侧的 **Pricing**。

**第 3 步：创建 API Key。** 点左侧 **API keys**（①），再点右上的 **Create new API key**（②）。

![DeepSeek API keys 页面](../images/getting-started/deepseek-api-keys.webp)

在弹出的对话框里给 Key 起一个好认的名字，比如 `Pine`（①），然后点 **Create API key**（②）。

![DeepSeek 新建 API Key 对话框](../images/getting-started/deepseek-create-key.webp)

创建后，页面会**只显示这一次**完整的 Key（以 `sk-` 开头），点复制并保存好。关掉对话框后就再也看不到完整内容了，丢了只能删除重建。

> [!WARNING]
> API Key 等同于你账户的余额：任何人拿到它都能花你的钱。不要发给别人，不要贴在聊天或截图里，也不要提交到代码仓库。怀疑泄露时，回到 API keys 页面删除这个 Key（行末的垃圾桶图标）并重新创建。

### 5.2 在 Pine 里连接 DeepSeek

**第 1 步：打开模型控件。** 打开一个新会话，点输入框右下角的 **选择模型（Choose model）**（①）。

![Pine 输入框右下角的“选择模型（Choose model）”](../images/getting-started/pine-01-choose-model.webp)

**第 2 步：浏览全部模型。** 还没有连接任何提供商时，下拉里只有 **浏览所有模型…（Browse all models…）**（②），点它。

![“选择模型（Choose model）”下拉菜单](../images/getting-started/pine-02-model-picker.webp)

**第 3 步：管理提供商。** 在弹出的窗口里点 **管理服务或模型（Manage providers and models）**（③）。

![模型选择窗口](../images/getting-started/pine-03-manage-providers.webp)

**第 4、5 步：找到 DeepSeek。** 在顶部搜索框（④）输入 `deepseek`，点击出现的 **DeepSeek**（⑤）。

![搜索 DeepSeek 提供商](../images/getting-started/pine-05-search-deepseek.webp)

**第 6、7 步：粘贴 Key。** 在 **连接 DeepSeek（Connect DeepSeek）** 对话框里，把刚才复制的 API Key 粘贴到输入框（⑥），点 **继续（Continue）**（⑦）。

![“连接 DeepSeek（Connect DeepSeek）”对话框](../images/getting-started/pine-06-connect-deepseek.webp)

连接成功后，DeepSeek 的模型会出现在模型列表里。回到会话，点 **选择模型（Choose model）** 选一个模型，随便发一句话，收到回答就说明连接成功。

### 5.3 确认连接可用

- 能正常回答：完成。
- 提示认证失败、Key 无效：回到 5.1 检查 Key 是否完整复制、有没有多出的空格，必要时重新创建。
- 提示余额不足：到 DeepSeek 平台的 **Top up** 页面充值，或在 **Usage** 页面查看余额与用量。
- 一直无响应或网络错误：确认网络能访问 `platform.deepseek.com`，必要时配置代理后重启 Pine。

### 5.4 使用提示

- DeepSeek 目前主要有 `deepseek-flash`（速度快、便宜）和 `deepseek-v4-pro`（能力更强）两类模型，官方的最新模型名与价格见 [DeepSeek API 文档](https://api-docs.deepseek.com/)。Pine 的模型目录随版本更新，列表里看到的名字以 Pine 为准。
- 先用较便宜的模型把流程跑通，需要更强能力时再切换。
- 在输入框底部的 **上下文占用（Context usage）** 里可以看到本次会话的费用，并设置 **会话成本上限（Session cost limit）**（会话费用上限），到达上限会自动停止。
- 如果你使用的是自建网关或第三方聚合服务，不在内置列表里，可以在同一个窗口选择 **添加自定义模型（Add custom model）**，填写接口地址（例如 DeepSeek 的 OpenAI 兼容地址 `https://api.deepseek.com`）、Key 和模型名。
- 同一个 Key 想在多台电脑上用，建议为每台电脑分别创建一个 Key（比如 `Pine Mac`、`Pine Windows`），方便单独停用。

### 5.5 配置网页搜索与抓取（TinyFish）

模型本身不能上网。要让 Pine 的 AI 能**搜索网页、读取网页内容**，需要再配置 **TinyFish** 的 API Key。这一步可选，但强烈建议完成。

**第 1 步：注册并登录。** 打开 [agent.tinyfish.ai](https://agent.tinyfish.ai)，可以用 GitHub、Google、Microsoft、X 账号或邮箱注册。如果页面底部弹出 cookie 提示，按你的偏好选择即可。

**第 2 步：跳过引导。** 新账号登录后会进入 "Connect TinyFish" 引导页，让你把一段"setup prompt"复制给某个 AI 代理。**Pine 不需要这一步**，直接点右上角的 **Skip setup**。

> [!WARNING]
> 这个引导页里的 setup prompt 包含你的完整 API Key，不要截图或分享。

**第 3 步：查看并复制 Key。** 在左侧点 **API Keys**（①）。新账号会自动生成一个 Key，默认是隐藏的；点眼睛图标（②）可以显示，点 **Copy**（③）复制。

![TinyFish 的 API Key 页面](../images/getting-started/tinyfish-api-key.webp)

**第 4 步：填进 Pine。** 点 Pine 右上角的齿轮 **打开 Pine 设置（Open Pine settings）**（①）：

![Pine 右上角的设置按钮](../images/getting-started/pine-tf-01-settings.webp)

在左侧点 **智能体（Agent）**（②）：

![Pine 设置（Pine Settings）左侧的“智能体（Agent）”](../images/getting-started/pine-tf-02-agent-tab.webp)

滚动到 **工具与隐私（Tools & privacy）**，找到 **TinyFish 网络工具（TinyFish web tools）**（当前为 *未配置（Not configured）*），点 **添加密钥（Add key）**（③）：

![“TinyFish 网络工具（TinyFish web tools）”与“添加密钥（Add key）”](../images/getting-started/pine-tf-03-add-key.webp)

在 **设置 TinyFish API 密钥（Set TinyFish API key）** 对话框里粘贴 Key（④），点 **保存密钥（Save key）**（⑤）：

![“设置 TinyFish API 密钥（Set TinyFish API key）”对话框](../images/getting-started/pine-tf-04-enter-key.webp)

保存后状态变为 **已配置（Configured）**，AI 就可以使用网络搜索和网页抓取了。试一下：在会话里问"搜索一下今天的某条新闻并总结"。

- 官方说明 TinyFish 的 Search 与 Fetch 有免费额度，免费档有每分钟请求数限制，具体额度和价格以 [TinyFish 文档](https://docs.tinyfish.ai/search-api)和定价页为准。
- 之后想更换 Key，回到同一位置点 **更改密钥（Change key）**。
- 与 API Key 的安全要求相同：不要外传。如果 Key 泄露，在 TinyFish 的 API Keys 页面点 **Regenerate key** 重新生成，再把新 Key 填进 Pine。

### 5.6 配置图片/视频生成与自动审批模型（OpenRouter）

Pine 里的**图片生成、视频生成**，以及自动审批里的 **Decisions 初筛模型（Decisions screening model）**，都通过 **OpenRouter** 调用模型。没有 OpenRouter 的 Key 时，这几项在设置里会显示 *尚未配置 OpenRouter（OpenRouter is not configured yet）*。如果你只聊天、处理文件，可以跳过这一节。

OpenRouter 是一个统一的模型接入平台：一个账号、一个 Key，就能调用来自许多厂商的模型，按用量付费，没有订阅。

#### 注册 OpenRouter

**第 1 步：打开注册窗口。** 访问 [openrouter.ai](https://openrouter.ai)，点右上角 **Sign Up**（①）。可以用 GitHub、Google 账号，或者直接用邮箱：填邮箱（②）、设置密码（③）、勾选同意条款（④），点 **Continue**（⑤）。姓名可以不填。

![OpenRouter 注册窗口](../images/getting-started/openrouter-sign-up-modal.webp)

已经有账号的话，点窗口底部的 **Sign in** 直接登录：

![OpenRouter 登录窗口](../images/getting-started/openrouter-sign-in-modal.webp)

**第 2 步：验证邮箱。** 用邮箱注册后，OpenRouter 会给你发一封邮件。打开邮件，点里面的注册链接完成验证。链接**有效期只有 10 分钟**，过期就回到注册页重新来一次。

![OpenRouter 的邮箱验证提示](../images/getting-started/openrouter-verify-email.webp)

**第 3 步：完成欢迎引导。** 验证通过后会进入 5 步引导，按下面处理即可：

1. 选择使用方式：个人使用选 **Individual**（①），点 **Next**（②）。

   ![引导第 1 步：选择使用方式](../images/getting-started/openrouter-onboarding-1.webp)

2. 引导会为你自动创建第一个 API Key，**完整内容只在这一页显示一次**。点复制图标（②）把它存好，再点 **Continue**（③）。如果这一步没有复制，之后也可以在 Keys 页面新建（见下）。

   ![引导第 2 步：自动生成并显示一次 Key](../images/getting-started/openrouter-onboarding-2.webp)

3. 绑定付款方式的页面。**现在不用填**：点 **I'll do this later**（①）。

   ![引导第 3 步：稍后再绑定付款方式](../images/getting-started/openrouter-onboarding-3.webp)

4. "从哪里听说 OpenRouter"的问卷。点 **Skip**（①）。

   ![引导第 4 步：跳过问卷](../images/getting-started/openrouter-onboarding-4.webp)

5. 看到 **You're all set!** 说明完成。点 **Go to Dashboard**（①）进入控制台。

   ![引导第 5 步：完成](../images/getting-started/openrouter-onboarding-5.webp)

> [!NOTE]
> 引导自动创建的 Key 带有 100 美元的额度上限和一年有效期，这是 OpenRouter 的保护设置。账户余额为 0 时，付费模型无法使用，所以下一步需要充值。

#### 获取 API Key

如果引导里没有保存 Key，或者想另外创建一个，进入 [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys)，点右上角 **New key**（①）：

![OpenRouter 的 API keys 页面](../images/getting-started/openrouter-keys.webp)

在 **Create API Key** 对话框里：名称（①）填 `Pine`，**Expiration**（②）选一个有效期，**Credit limit**（③）选一个额度上限，最后点 **Create**（④）。创建后同样**只显示一次**完整 Key，请马上复制。

![创建 API Key 对话框](../images/getting-started/openrouter-create-key.webp)

> [!WARNING]
> API Key 等同于你账户的付款凭证，不要截图、发给别人或提交到代码仓库。建议设置额度上限，万一泄露损失可控。

#### 充值

打开 [openrouter.ai/settings/credits](https://openrouter.ai/settings/credits)，点 **Add credits**（①）按页面提示充值。新账号余额为 **$0.00**；也可以先小额充值试用。**Auto Top-Up** 是自动充值，需要绑定付款方式，不是必需的。

![OpenRouter 的 Credits 页面](../images/getting-started/openrouter-credits.webp)

> [!NOTE]
> 充值需要填写账单姓名、国家/地区和地址，并使用银行卡等付款方式。这部分请你在 OpenRouter 官网自己完成。费用、可用付款方式和退款规则以 OpenRouter 官网为准。

#### 在 Pine 里连接 OpenRouter

**第 1 步：看看现在的状态。** 点 Pine 右上角齿轮 **打开 Pine 设置（Open Pine settings）**，在左侧点 **模型（Models）**（①）。下面的 **图像生成模型（Image generation model）**（②）和 **视频生成模型（Video generation model）**（③）此时会提示 *尚未配置 OpenRouter（OpenRouter is not configured yet）*：

![“模型（Models）”设置页：OpenRouter 尚未配置](../images/getting-started/pine-or-01-models.webp)

**第 2 步：添加提供商。** 关闭设置，点输入框右下角的 **选择模型（Choose model）** → **浏览所有模型…（Browse all models…）** → **管理服务或模型（Manage providers and models）**。在搜索框输入 `openrouter`（①），点出现的 **OpenRouter**（②）：

![搜索 OpenRouter](../images/getting-started/pine-or-02-search.webp)

**第 3 步：选择认证方式。** 在 **连接 OpenRouter（Connect OpenRouter）** 对话框里有两种方式：**OpenRouter API key**（①）和 **Sign in with OpenRouter**。这里以 API key 为例，选中后点 **继续（Continue）**（②）：

![选择 OpenRouter API key](../images/getting-started/pine-or-03-method.webp)

**第 4 步：粘贴 Key。** 在 **Enter OpenRouter API key** 里粘贴刚才复制的 Key（①），点 **继续（Continue）**（②）：

![粘贴 OpenRouter API Key](../images/getting-started/pine-or-04-key.webp)

连接成功后，回到 **Pine 设置（Pine Settings） → 模型（Models）**，点 **图像生成模型（Image generation model）** / **视频生成模型（Video generation model）** 旁边的 **选择模型（Choose model）**，就能选用 OpenRouter 上的图片、视频模型了。之后在会话里让 AI 生成图片即可。

- 视频、图片生成按次计费，价格因模型而异，选模型前请在 OpenRouter 的模型页面确认单价。
- 想换 Key：回到 **管理服务或模型（Manage providers and models）**，对 OpenRouter 重新走一遍上面的第 3、4 步。

---

## 6. 创建第一个项目

**项目**是一组 Agent 可以访问的文件夹，加上这个项目自己的会话、Skills 和设置。Agent 只能读写你授权的文件夹。

1. 点左侧栏顶部菜单的 **项目（Projects）**（或按 `Cmd/Ctrl + P`），再点 **新建项目（New Project）**。
2. 填写：
   - **名称**，图标与主题色（可选）；
   - **默认文件夹**：Agent 的主要工作目录，选一个你日常存放资料的文件夹；
   - **附加上下文文件夹**（可选）：额外的参考资料文件夹，可分别设为 **Read only（只读）** 或 **Read and write（读写）**。
3. 保存。项目出现在左侧栏的会话列表里。

> **建议**：第一次使用，请选一个**专门的测试文件夹**，里面放几份你能随时重新得到的文件。熟悉 Agent 的行为后，再授权真实资料；资料文件夹如果只需参考，请设为只读。

如果不想建项目，也可以直接新建会话，这类会话归在 **无项目（No Project）** 下，适合一次性的小问题。

---

## 7. 开始第一个会话

1. 点左侧栏的 **新会话（New session）**（或按 `Cmd/Ctrl + N`）。
2. 在输入框底部确认**项目**（显示为“发送到 {项目名}”，英文界面为 Send to {name}）和**模型**已经是你想要的。
3. 输入你的任务，比如：
   - "读一下这个文件夹里的文件，告诉我每个文件是做什么的。"
   - "把 `销售.xlsx` 里每个月的总额汇总，列成一个新表。"
4. 点发送，或按回车。
5. 会话里会显示 Agent 的思考、读了哪些文件、调用了哪些工具。点任意工具调用可以展开细节（状态、参数、结果）。
6. 点击文件名可以在工作区里直接预览文件（文本、代码、PDF、Office 文档、表格、图片等），Agent 操作的就是你看到的文件。

**随时可以中止**：Agent 工作过程中，发送按钮会变成 **停止回答（Stop response）**；你也可以输入新消息并选择 **追加要求（Steer response）**，在不中断任务的情况下给它调整方向。

**附件**：点输入框的 **添加附件（Add attachment）** 可以添加文件、文件夹或其他会话；也可以直接拖入文件或粘贴图片。

---

## 8. 了解权限与审批

输入框底部有一个**审批模式**，决定 Agent 做操作时要不要先问你：

| 模式 | 含义 | 适合 |
| --- | --- | --- |
| **让我过目（Let Me Review）** | 有风险的操作都先询问 | **首次使用推荐** |
| **自动审批（Auto Approve）** | 在自主与控制之间折中 | 熟悉之后的日常使用 |
| **自主工作（Autonomous Work）** | 尽量不打扰你 | 信任度较高的长任务 |
| **干就完了（YOLO）** | 无权限限制，开启前会再次确认 | 不建议普通用户使用 |

需要你决定时，输入框上方会出现 **需要确认（Approval required）** 卡片：

- **批准（Approve）**：同意这次操作；
- **拒绝（Reject）**：拒绝；
- **拒绝并说明要求（Reject with guidance）**：拒绝并告诉它该怎么改。

此外：

- Agent 的本地工具被限制在授权的文件夹内。
- 删除类、写入类操作请留意审批卡片里写的路径是否是你预期的。
- 在浏览器里"移到废纸篓"的文件不会被直接删除（服务器版会移入数据目录下的 `trash/`）。

---

## 9. 可选配置

这些都不是必须的，需要时再回来设置。

| 想做的事 | 在哪里 |
| --- | --- |
| 切换界面语言、显示货币、完成提示音、通知 | 齿轮 → **通用（General）** |
| 浅色 / 深色模式、主题色、阅读字体 | 齿轮 → **外观（Appearance）** |
| 标题生成、审批、图像生成所用的模型 | 齿轮 → **模型（Models）** |
| 网页搜索与抓取（TinyFish 密钥）、上下文压缩、近似位置 | 齿轮 → **智能体（Agent）** |
| 昵称、沟通风格、自定义指令（让 Agent 更懂你） | 齿轮 → **自定义（User profile）** |
| 全局快捷呼出快速输入框 | 齿轮 → **通用（General）→ 快速提问（Quick composer）** |
| 关闭窗口后保持后台运行（让自动化持续工作） | 齿轮 → **通用（General） → 在后台继续运行（Keep running in the background）** |
| 自动化（定时、文件夹变化触发的无人值守任务） | 左侧栏底部 **自动化（Automations）** |
| Skills（可复用的工作方法） | 左侧栏底部 **Skills** |
| MCP 服务器（接入外部工具） | 左侧栏底部 **MCP 服务器（MCP servers）** |
| 用手机或其他设备远程使用这台电脑上的 Pine | 齿轮 → **远程控制（Remote control）**（二维码配对，无需端口转发，端到端加密；需要先开启 Browser access） |

**常用快捷键**（macOS 用 `Cmd`，Windows 用 `Ctrl`）：

| 快捷键 | 作用 |
| --- | --- |
| `Mod + N` / `Mod + T` | 新建会话标签 |
| `Mod + W` | 关闭标签 |
| `Mod + K` | 搜索所有会话 |
| `Mod + P` | 项目设置 |
| `Mod + B` | 显示 / 隐藏左侧栏 |
| `Mod + Alt + B` | 显示 / 隐藏右侧工作台 |
| `Mod + L` | 聚焦输入框 |

---

## 10. 更新、数据位置与卸载

### 更新

有新版本时，Pine 会弹出**更新对话框**，显示更新内容并让你安装。也可以随时回到发布页下载最新安装包，直接覆盖安装，数据不会丢失。

### 数据位置

| 内容 | 位置 |
| --- | --- |
| 项目、会话、设置、模型凭据 | 系统的应用数据目录（macOS：`~/Library/Application Support/` 下的 Pine 目录；Windows：`%APPDATA%` 下的 Pine 目录） |
| 你授权的文件夹 | 就是你自己的文件夹，Pine 不会搬走它 |

> 想备份 Pine 的数据，请先**完全退出** Pine，再复制整个应用数据目录。模型凭据在里面，备份文件请妥善保管。

### 完全退出

如果开启了"后台运行"，关闭窗口并不会退出 Pine。要彻底退出：点菜单栏（macOS）或通知区域（Windows）的 Pine 图标 → **退出 Pine（Quit Pine）**。自动化和远程控制只在 Pine 运行时工作。

### 卸载

- **macOS**：把"应用程序"里的 Pine 拖到废纸篓。需要同时清理数据时，再删除上面的应用数据目录。
- **Windows**：设置 → 应用 → 已安装的应用 → Pine → 卸载。需要同时清理数据时，再删除上面的应用数据目录。

卸载不会删除你授权的文件夹里的任何文件。

---

## 11. 常见问题

**打开 Pine 时 macOS 说"无法验证开发者"或"已损坏"。**
见[安装 → macOS](#macos)：右键打开，或在"隐私与安全性"里点"仍要打开"，必要时用 `xattr` 命令去掉隔离标记。

**Windows 一直停在启动阶段 / 没有出现主窗口。**
首次启动要配置沙箱，需要在 UAC 弹窗里点"是"。如果之前拒绝过，完全关闭 Pine 后重新启动再允许一次。

**提示没有可用模型，或发送后无响应。**
到 **Pine 设置（Pine Settings） → 模型（Models）** 确认已经配置了提供商且选中了模型；检查 API Key 是否填对、账户是否有余额；确认你的网络能访问对应服务商。

**发送后报网络错误或超时。**
多数是网络问题：确认能打开服务商官网，必要时为系统配置可用的代理后重启 Pine。

**费用涨得比预期快。**
在 Context usage 里查看本次会话的费用，并设置 **会话成本上限（Session cost limit）**。长会话可以点 **立即压缩上下文（Compact context now）** 压缩上下文，或新开一个会话。

**Agent 说没有权限访问某个文件。**
它只能访问项目授权的文件夹。到 **Pine 设置（Pine Settings）→ 项目管理（Projects）→ 编辑（Edit）** 添加该文件夹，并按需选择"只读"或"读写"。

**Agent 修改了不该修改的文件。**
关闭审批更宽松的模式，切回 **让我过目（Let Me Review）**；重要文件先备份，或把资料文件夹设为"只读"。

**想反馈问题。**
到 GitHub 提交 Issue：https://github.com/aldinelabs/pine/issues 。请附上 Pine 版本号、系统版本、问题现象，以及不含敏感信息的截图。**不要**在 Issue 里贴 API Key。

---

## 12. 其他安装方式

下面两种方式面向有一定技术基础的用户，普通用户用上面的安装包即可。

### 12.1 从源码运行

需要先安装 [Bun](https://bun.sh/)，具体版本见仓库 `package.json` 的 `packageManager`：

```bash
git clone https://github.com/aldinelabs/pine.git
cd pine
bun install --frozen-lockfile
bun run dev
```

如果 `bun install` 长时间停在 `Resolving dependencies`，且你的网络经过本地代理，可临时绕过代理并降低并发后重试：

```bash
env -u http_proxy -u https_proxy -u all_proxy \
  -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY \
  bun install --network-concurrency 8
```

开发约定与打包流程见仓库根目录的 [`AGENTS.md`](https://github.com/aldinelabs/pine/blob/main/AGENTS.md) 和 [`release.md`](https://github.com/aldinelabs/pine/blob/main/docs/release.md)。

### 12.2 在服务器上运行（浏览器访问）

Pine 可以不开窗口运行在 macOS 或 Linux 服务器上，只提供浏览器界面。它与桌面端是同一套应用核心，区别只在宿主能力：没有窗口、系统通知、快速输入框、自动更新和 Computer Use。

#### 构建与运行

- 需要 Node.js 22.13 或更高版本（会话索引使用 `node:sqlite`）。
- 需要按 12.1 准备好源码和依赖。
- 在 Linux 上，Agent 工具的沙箱还需要 bubblewrap、socat 和 ripgrep：

```sh
sudo apt install bubblewrap socat ripgrep   # Debian / Ubuntu
```

```sh
bun install --frozen-lockfile
bun run build:server
PINE_PASSWORD='至少 8 个字符' node apps/desktop/.vite/server/server.mjs
```

构建产物在 `apps/desktop/.vite/server/`：`server.mjs`、Agent worker（`agent.mjs` 及其分块）和浏览器界面（`renderer/`）。Pi 等运行时依赖从仓库的 `node_modules` 加载，所以要在仓库目录内运行，或把仓库连同依赖一起部署。

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

#### 部署建议

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

#### 经 Aldine 远程控制

无头服务端可以像桌面端一样经 Aldine 远程控制：手机或另一台电脑的浏览器打开 `rc.aldine.cn`，配对后即可使用服务器上的 Pine，服务器无需公网地址或端口转发。服务端的网页界面和密码照常工作（配对的设备相当于一个已登录的浏览器）。

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

#### 与桌面端的差异

- 数据目录与桌面端分开，默认不共享项目和会话；可以用 `--data-dir` 指向任意目录，但不要让桌面端和服务端同时使用同一个目录。
- 数据目录以 `0700` 创建。服务器没有系统钥匙串，TinyFish 密钥和模型服务密钥一样以仅本用户可读的文件保存。
- 项目文件夹是服务器上的路径。在浏览器里移到废纸篓的文件会移入数据目录下的 `trash/`，不会被删除。
- 近似位置按服务器的公网 IP 估算，在云主机上通常是机房所在地；需要时可在设置里关闭。
- 支持 macOS 和 Linux（已在 Debian 12 容器中实测）。Windows 不支持，因为它的沙箱需要桌面端的一次性提权配置。
- 服务端是单用户的：所有登录的浏览器共享同一组项目、会话和设置。

#### Linux 沙箱

Linux 上普通 `bash` 和文件工具在 bubblewrap 里运行：只能读系统运行时目录（`/usr`、`/lib*`、证书和少数 `/etc` 文件）和项目授权的文件夹，只能写可写文件夹，没有网络。命令使用 `bash --noprofile --norc`，不读取用户的启动文件。和 macOS 的区别：

- 写到 `/tmp` 等授权以外位置的文件落在每次命令独立的临时文件系统里，命令结束即消失，不会写到主机上；macOS 上这类写入直接失败。项目内的临时文件请用 `$TMPDIR`。
- bubblewrap 需要非特权用户命名空间。部分主机和容器默认禁止，此时服务端启动时会打印提示，Agent 只能通过需要审批的 `privileged_bash` 执行命令。在 Docker 中运行时加上：

  ```sh
  docker run --security-opt seccomp=unconfined \
    --security-opt apparmor=unconfined \
    --security-opt systempaths=unconfined ...
  ```
