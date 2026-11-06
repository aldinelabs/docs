---
title: "图片/视频生成与自动审批（OpenRouter）"
description: "配置 OpenRouter，启用图片生成、视频生成和自动审批的筛选模型。"
order: 3
---

# 图片/视频生成与自动审批（OpenRouter）

Pine 里的下面几项，都通过 **OpenRouter** 调用模型：

- **图片生成**
- **视频生成**
- 自动审批里的 **Decisions 初筛模型（Decisions screening model）**

没有 OpenRouter 的 Key 时，这几项在设置里会显示 *尚未配置 OpenRouter（OpenRouter is not configured yet）*。如果你只聊天、处理文件，可以跳过这一页。

OpenRouter 是一个统一的模型接入平台：一个账号、一个 Key，就能调用来自许多厂商的模型，按用量付费，没有订阅。

## 注册 OpenRouter

**第 1 步：打开注册窗口**

- 访问 [openrouter.ai](https://openrouter.ai)，点右上角 **Sign Up**（①）。
- 选一种方式注册：GitHub 或 Google 账号，或者直接用邮箱。
- 用邮箱的话：填邮箱（②）、设置密码（③）、勾选同意条款（④），点 **Continue**（⑤）。姓名可以不填。

![OpenRouter 注册窗口](../../images/getting-started/openrouter-sign-up-modal.webp)

已经有账号的话，点窗口底部的 **Sign in** 直接登录：

![OpenRouter 登录窗口](../../images/getting-started/openrouter-sign-in-modal.webp)

**第 2 步：验证邮箱**

- 用邮箱注册后，OpenRouter 会给你发一封邮件。
- 打开邮件，点里面的注册链接完成验证。
- 链接**有效期只有 10 分钟**，过期就回到注册页重新来一次。

![OpenRouter 的邮箱验证提示](../../images/getting-started/openrouter-verify-email.webp)

**第 3 步：完成欢迎引导**

- 验证通过后会进入 5 步引导，按下面处理即可：

1. 选择使用方式：个人使用选 **Individual**（①），点 **Next**（②）。

   ![引导第 1 步：选择使用方式](../../images/getting-started/openrouter-onboarding-1.webp)

2. 引导会为你自动创建第一个 API Key，**完整内容只在这一页显示一次**。点复制图标（②）把它存好，再点 **Continue**（③）。如果这一步没有复制，之后也可以在 Keys 页面新建（见下）。

   ![引导第 2 步：自动生成并显示一次 Key](../../images/getting-started/openrouter-onboarding-2.webp)

3. 绑定付款方式的页面。**现在不用填**：点 **I'll do this later**（①）。

   ![引导第 3 步：稍后再绑定付款方式](../../images/getting-started/openrouter-onboarding-3.webp)

4. "从哪里听说 OpenRouter"的问卷。点 **Skip**（①）。

   ![引导第 4 步：跳过问卷](../../images/getting-started/openrouter-onboarding-4.webp)

5. 看到 **You're all set!** 说明完成。点 **Go to Dashboard**（①）进入控制台。

   ![引导第 5 步：完成](../../images/getting-started/openrouter-onboarding-5.webp)

> [!NOTE]
> 引导自动创建的 Key 带有 100 美元的额度上限和一年有效期，这是 OpenRouter 的保护设置。账户余额为 0 时，付费模型无法使用，所以下一步需要充值。

## 获取 API Key

如果引导里没有保存 Key，或者想另外创建一个，进入 [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys)，点右上角 **New key**（①）：

![OpenRouter 的 API keys 页面](../../images/getting-started/openrouter-keys.webp)

在 **Create API Key** 对话框里：

- 名称（①）填 `Pine`。
- **Expiration**（②）选一个有效期。
- **Credit limit**（③）选一个额度上限。
- 点 **Create**（④）。

创建后同样**只显示一次**完整 Key，请马上复制。

![创建 API Key 对话框](../../images/getting-started/openrouter-create-key.webp)

> [!WARNING]
> API Key 等同于你账户的付款凭证，不要截图、发给别人或提交到代码仓库。建议设置额度上限，万一泄露损失可控。

## 充值

- 打开 [openrouter.ai/settings/credits](https://openrouter.ai/settings/credits)，点 **Add credits**（①），按页面提示充值。
- 新账号余额为 **$0.00**，可以先小额充值试用。
- **Auto Top-Up** 是自动充值，需要绑定付款方式，不是必需的。

![OpenRouter 的 Credits 页面](../../images/getting-started/openrouter-credits.webp)

> [!NOTE]
> 充值需要填写账单姓名、国家/地区和地址，并使用银行卡等付款方式。这部分请你在 OpenRouter 官网自己完成。费用、可用付款方式和退款规则以 OpenRouter 官网为准。

## 在 Pine 里连接 OpenRouter

**第 1 步：看看现在的状态**

- 点 Pine 右上角齿轮 **打开 Pine 设置（Open Pine settings）**，在左侧点 **模型（Models）**（①）。
- 下面的 **图像生成模型（Image generation model）**（②）和 **视频生成模型（Video generation model）**（③）此时会提示 *尚未配置 OpenRouter（OpenRouter is not configured yet）*：

![“模型（Models）”设置页：OpenRouter 尚未配置](../../images/getting-started/pine-or-01-models.webp)

**第 2 步：添加提供商**

- 关闭设置，点输入框右下角的 **选择模型（Choose model）** → **浏览所有模型…（Browse all models…）** → **管理服务或模型（Manage providers and models）**。
- 在搜索框输入 `openrouter`（①），点出现的 **OpenRouter**（②）：

![搜索 OpenRouter](../../images/getting-started/pine-or-02-search.webp)

**第 3 步：选择认证方式**

- **连接 OpenRouter（Connect OpenRouter）** 对话框里有两种方式：**OpenRouter API key**（①）和 **Sign in with OpenRouter**。
- 这里以 API key 为例，选中后点 **继续（Continue）**（②）：

![选择 OpenRouter API key](../../images/getting-started/pine-or-03-method.webp)

**第 4 步：粘贴 Key**

- 在 **Enter OpenRouter API key** 里粘贴刚才复制的 Key（①），点 **继续（Continue）**（②）：

![粘贴 OpenRouter API Key](../../images/getting-started/pine-or-04-key.webp)

连接成功后：

- 回到 **Pine 设置（Pine Settings） → 模型（Models）**，点 **图像生成模型（Image generation model）** / **视频生成模型（Video generation model）** 旁边的 **选择模型（Choose model）**，选用 OpenRouter 上的图片、视频模型。
- 之后在会话里让 AI 生成图片即可。

- 视频、图片生成按次计费，价格因模型而异，选模型前请在 OpenRouter 的模型页面确认单价。
- 想换 Key：回到 **管理服务或模型（Manage providers and models）**，对 OpenRouter 重新走一遍上面的第 3、4 步。
