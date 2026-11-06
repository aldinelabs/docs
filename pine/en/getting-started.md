# Getting Started with Pine

[简体中文](../zh-CN/getting-started.md) | **English**

This guide is for **people installing Pine for the first time**. You don't need to know how to code; just follow the steps. If you want to run Pine on a server or build it from source, see "Other ways to install" at the end.

> [!CAUTION]
> Pine is an early developer preview. The interface, data formats, and agent behavior may change in incompatible ways. Don't hand it the only copy of an important file; back up first.

## Contents

1. [Before you start](#1-before-you-start)
2. [Download the installer](#2-download-the-installer)
3. [Install](#3-install)
4. [First launch](#4-first-launch)
5. [Connect a model (DeepSeek as the example), web search (TinyFish), and image/video generation (OpenRouter)](#5-connect-a-model-deepseek-as-the-example)
6. [Create your first project](#6-create-your-first-project)
7. [Start your first session](#7-start-your-first-session)
8. [Understand permissions and approvals](#8-understand-permissions-and-approvals)
9. [Optional settings](#9-optional-settings)
10. [Updates, data location, and uninstalling](#10-updates-data-location-and-uninstalling)
11. [FAQ](#11-faq)
12. [Other ways to install](#12-other-ways-to-install)

---

## 1. Before you start

### Supported systems

| System | Status |
| --- | --- |
| macOS (Apple silicon / Intel) | Supported |
| Windows 10 / 11 (64-bit) | Partially supported |
| Linux desktop | Not supported (you can use the [server mode](#122-run-on-a-server-access-from-a-browser) from a browser) |

Not sure which chip your Mac has? Click the Apple menu in the top-left corner → "About This Mac" and look at the "Chip" line. Apple M1/M2/M3/M4 and so on mean Apple silicon; Intel means Intel.

### What you need

- **An account for an AI model.** Pine doesn't provide models and doesn't relay traffic; you set up the model connection yourself. You need one of these:
  - An **API key** from a model provider (Anthropic, OpenAI, Google, DeepSeek, Zhipu, Moonshot, and others; Pine has many providers built in);
  - A subscription account that supports sign-in authorization (OAuth; just click sign in inside Pine);
  - A self-hosted or third-party **compatible endpoint** (you need its address and key; add it with a custom provider).
- **A network connection that can reach the model service you choose.** Some providers need a proxy in some regions, so first make sure you can open the provider's website.
- **A folder you want Pine to work on** (documents, spreadsheets, and reference material all work).

### About data and privacy

- Projects, sessions, and files are stored on your computer.
- Your conversations with the model are sent to **the model provider you choose**. Pine doesn't relay them through its own servers. Pick providers according to your needs, and don't give the agent files that shouldn't leave your machine.

---

## 2. Download the installer

There are two download sources with identical contents. Use either one.

### Option 1: Direct download (recommended)

The links below **always point to the latest version**. When a new version is released you don't need a new link; just click to download. No GitHub account is needed and there's no page to dig through:

| Your system | Direct download |
| --- | --- |
| macOS, Apple silicon (M1 / M2 / M3 / M4, etc.) | [Pine-darwin-arm64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-arm64.dmg) |
| macOS, Intel | [Pine-darwin-x64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-x64.dmg) |
| Windows, 64-bit | [Pine-win32-x64.exe](https://dl.phosphoros.works/pine/latest/Pine-win32-x64.exe) |

To check that your download isn't corrupted, open the [SHA256SUMS checksum file](https://dl.phosphoros.works/pine/latest/SHA256SUMS) and compare the SHA-256 values listed there with the value of the file you downloaded.

### Option 2: GitHub Releases

The installers are also published on GitHub:

**https://github.com/aldinelabs/pine/releases/latest**

On that page, pick the file for your system under **Assets**:

| Your system | File to download (the name contains) |
| --- | --- |
| macOS, Apple silicon | `darwin-arm64.dmg` |
| macOS, Intel | `darwin-x64.dmg` |
| Windows, 64-bit | `win32-x64.exe` |

Notes:

- Files such as `.nupkg` and `RELEASES` on the same page are used by Windows auto-update. **Don't download or run them manually.**
- "Source code (zip / tar.gz)" on the page is source code, not an installer.

---

## 3. Install

### macOS

1. Double-click the downloaded `.dmg` file.
2. In the window that opens, drag the **Pine** icon into the **Applications** folder.
3. Eject the disk image, then open Pine from Launchpad or Applications.

**macOS may block the first launch.** Pine's installer is not yet notarized by Apple, so macOS may say it "can't verify the developer" or that the app "is damaged". This is the system's normal block on un-notarized apps. To get past it:

1. In Applications, **right-click Pine → Open**, then click "Open" in the dialog.
2. If there is no "Open" button: go to **System Settings → Privacy & Security**, scroll down to the message about Pine, click **Open Anyway**, and enter your computer password.
3. If it says the app "is damaged and can't be opened", open Terminal, run the line below, and then open Pine again (only do this for a file you're sure came from the official release page):

   ```bash
   xattr -dr com.apple.quarantine /Applications/Pine.app
   ```

### Windows

1. Double-click the downloaded `win32-x64.exe` installer.
2. If a blue **"Windows protected your PC" (SmartScreen)** window appears, click **More info → Run anyway**. This happens because the installer may not carry a commercial code-signing certificate; just make sure you downloaded it from the official source.
3. Installation is one click, with no path to choose. When it finishes, Pine starts automatically and creates desktop and Start menu shortcuts.

---

## 4. First launch

### macOS

Pine opens straight to the main window. If you later use screen-related features (such as the quick composer capturing the current window, or Computer Use), the system will ask for "Screen Recording" or "Accessibility" permission. Allow it in **System Settings → Privacy & Security** when needed; if you don't use those features, you can leave it ungranted.

### Windows: sandbox setup

On first launch, Pine first sets up the **Windows sandbox** (it keeps the agent's commands inside the folders you authorize).

- A **UAC (User Account Control)** prompt appears; choose **Yes**.
- This step needs administrator rights and only happens once. If you decline, Pine can't start working; close it and start it again to be prompted again.
- The main window doesn't open until setup finishes, so waiting a few dozen seconds is normal.

### Choose a language

Pine's interface supports Simplified Chinese, Traditional Chinese, English, Japanese, Korean, Spanish, French, German, and Russian. If it isn't in the language you want: click the **gear (Open Pine settings)** at the top-left or top-right of the window → **General → Language**, and pick one from the drop-down.

---

## 5. Connect a model (DeepSeek as the example)

Without a connected model Pine can't answer anything, so this is the most important first step. This section walks through the full flow with **DeepSeek**: first get an API key on the DeepSeek platform, then enter it in Pine. Other providers work the same way; only part 1 changes to that provider's website.

> In the screenshots below, the **red boxes and numbers** mark where to click or type; the numbers are the order of the steps. Accounts, balances, and existing keys in the screenshots are redacted.

### 5.1 Get an API key on the DeepSeek platform

DeepSeek's **API platform** (`platform.deepseek.com`) and its web chat (`chat.deepseek.com`) are two separate things. Web chat is free and needs no top-up; the **API is billed by usage, so you top up first and then create a key**.

**Step 1: Sign in or sign up.** Open [platform.deepseek.com](https://platform.deepseek.com). If you already have an account, enter your phone number or email and password to sign in (②); if not, click **Sign up** at the bottom right (①). You can also use "Log in with Google" below.

![DeepSeek platform sign-in page: ① Sign up, ② Log in](../images/getting-started/deepseek-sign-in.webp)

**Step 2: Top up.** After signing in you land in the console. Click **Top up** on the left (①), choose an amount (②; the page offers tiers starting at $2, lets you switch between USD and CNY, or lets you pick Custom), choose a payment method (③), then click **Next step** (④) and follow the page to pay.

![DeepSeek top-up page](../images/getting-started/deepseek-top-up.webp)

- The page may show taxes (for example VAT); what's shown for your account is what applies.
- Credit usually arrives instantly. The page says it may take up to 24–72 hours; if it still hasn't arrived after that, follow the page to contact support.
- A small top-up is enough to start. To see each model's price, click **Pricing** on the left.

**Step 3: Create an API key.** Click **API keys** on the left (①), then **Create new API key** at the top right (②).

![DeepSeek API keys page](../images/getting-started/deepseek-api-keys.webp)

In the dialog, give the key an easy-to-recognize name such as `Pine` (①), then click **Create API key** (②).

![DeepSeek new API key dialog](../images/getting-started/deepseek-create-key.webp)

After it's created, the page shows the full key (starting with `sk-`) **only this once**. Copy it and keep it safe. Once you close the dialog you can't see the full key again; if you lose it, you have to delete it and create a new one.

> [!WARNING]
> An API key is equivalent to your account balance: anyone who has it can spend your money. Don't send it to anyone, don't paste it into chats or screenshots, and don't commit it to a code repository. If you suspect a leak, go back to the API keys page, delete the key (trash icon at the end of the row), and create a new one.

### 5.2 Connect DeepSeek in Pine

**Step 1: Open the model control.** Open a new session and click **Choose model** at the bottom right of the input box (①).

![Choose model at the bottom right of Pine's input box](../images/getting-started/pine-01-choose-model.webp)

**Step 2: Browse all models.** Before any provider is connected, the drop-down contains only **Browse all models…** (②). Click it.

![Choose model drop-down](../images/getting-started/pine-02-model-picker.webp)

**Step 3: Manage providers.** In the window that appears, click **Manage providers and models** (③).

![Model picker window](../images/getting-started/pine-03-manage-providers.webp)

**Steps 4 and 5: Find DeepSeek.** Type `deepseek` in the search box at the top (④), then click **DeepSeek** when it appears (⑤).

![Searching for the DeepSeek provider](../images/getting-started/pine-05-search-deepseek.webp)

**Steps 6 and 7: Paste the key.** In the **Connect DeepSeek** dialog, paste the API key you just copied into the input (⑥) and click **Continue** (⑦).

![Connect DeepSeek dialog](../images/getting-started/pine-06-connect-deepseek.webp)

Once connected, DeepSeek's models appear in the model list. Go back to the session, click **Choose model**, pick a model, and send any message. If you get an answer, the connection works.

### 5.3 Confirm the connection works

- It answers normally: you're done.
- It reports an authentication failure or invalid key: go back to 5.1 and check that the key was copied in full with no extra spaces; create a new one if needed.
- It reports insufficient balance: top up on the **Top up** page of the DeepSeek platform, or check your balance and usage on the **Usage** page.
- It never responds, or shows a network error: make sure your network can reach `platform.deepseek.com`; if needed, set up a proxy and restart Pine.

### 5.4 Tips

- DeepSeek currently offers mainly `deepseek-flash` (fast and cheap) and `deepseek-v4-pro` (more capable). For the latest model names and prices, see the [DeepSeek API docs](https://api-docs.deepseek.com/). Pine's model catalog updates with each release, and the names you see in the list are the ones Pine knows.
- Get the flow working with a cheaper model first, and switch to a stronger one when you need it.
- **Context usage** at the bottom of the input box shows this session's cost and lets you set a **Session cost limit**; when the limit is reached, the session stops automatically.
- If you use a self-hosted gateway or a third-party aggregator that isn't in the built-in list, choose **Add custom model** in the same window and fill in the endpoint address (for example DeepSeek's OpenAI-compatible address `https://api.deepseek.com`), the key, and the model name.
- To use the same key on several computers, create one key per computer (for example `Pine Mac` and `Pine Windows`) so you can disable them individually.

### 5.5 Set up web search and fetching (TinyFish)

Models can't browse the web on their own. To let Pine's AI **search the web and read page contents**, you also need a **TinyFish** API key. This step is optional, but strongly recommended.

**Step 1: Sign up and sign in.** Open [agent.tinyfish.ai](https://agent.tinyfish.ai). You can sign up with GitHub, Google, Microsoft, an X account, or email. If a cookie notice appears at the bottom of the page, choose according to your preference.

**Step 2: Skip the onboarding.** A new account lands on a "Connect TinyFish" onboarding page that asks you to copy a "setup prompt" to some AI agent. **Pine doesn't need this step**; just click **Skip setup** at the top right.

> [!WARNING]
> The setup prompt on that onboarding page contains your full API key. Don't screenshot or share it.

**Step 3: View and copy the key.** Click **API Keys** on the left (①). A new account gets a key automatically, hidden by default; click the eye icon (②) to reveal it and **Copy** (③) to copy it.

![TinyFish API keys page](../images/getting-started/tinyfish-api-key.webp)

**Step 4: Enter it in Pine.** Click the gear **Open Pine settings** at the top right of Pine (①):

![Settings button at the top right of Pine](../images/getting-started/pine-tf-01-settings.webp)

Click **Agent** on the left (②):

![Agent on the left of Pine Settings](../images/getting-started/pine-tf-02-agent-tab.webp)

Scroll to **Tools & privacy**, find **TinyFish web tools** (currently *Not configured*), and click **Add key** (③):

![TinyFish web tools and Add key](../images/getting-started/pine-tf-03-add-key.webp)

In the **Set TinyFish API key** dialog, paste the key (④) and click **Save key** (⑤):

![Set TinyFish API key dialog](../images/getting-started/pine-tf-04-enter-key.webp)

After saving, the status changes to **Configured**, and the AI can use web search and page fetching. Try it: in a session, ask "Search for today's news about something and summarize it."

- TinyFish states that Search and Fetch have a free allowance, with a requests-per-minute limit on the free tier. For exact allowances and prices, see the [TinyFish docs](https://docs.tinyfish.ai/search-api) and its pricing page.
- To change the key later, go back to the same place and click **Change key**.
- The same security rule as any API key applies: don't share it. If it leaks, click **Regenerate key** on TinyFish's API Keys page and enter the new key in Pine.

### 5.6 Set up image/video generation and the automatic-approval model (OpenRouter)

Pine's **image generation**, **video generation**, and the **Decisions screening model** used by automatic approval all call models through **OpenRouter**. Without an OpenRouter key, these items show *OpenRouter is not configured yet* in settings. If you only chat and work with files, you can skip this section.

OpenRouter is a unified model-access platform: one account and one key give you models from many vendors, billed by usage with no subscription.

#### Sign up for OpenRouter

**Step 1: Open the sign-up window.** Go to [openrouter.ai](https://openrouter.ai) and click **Sign Up** at the top right (①). You can use a GitHub or Google account, or just an email: enter your email (②), set a password (③), tick the agreement to the terms (④), and click **Continue** (⑤). Your name is optional.

![OpenRouter sign-up window](../images/getting-started/openrouter-sign-up-modal.webp)

If you already have an account, click **Sign in** at the bottom of the window to sign in directly:

![OpenRouter sign-in window](../images/getting-started/openrouter-sign-in-modal.webp)

**Step 2: Verify your email.** After signing up with email, OpenRouter sends you an email. Open it and click the sign-up link to verify. The link is **valid for only 10 minutes**; if it expires, go back to the sign-up page and start again.

![OpenRouter email verification notice](../images/getting-started/openrouter-verify-email.webp)

**Step 3: Finish the welcome onboarding.** After verification you go through a 5-step onboarding. Handle it like this:

1. Choose how you'll use it: for personal use pick **Individual** (①), then click **Next** (②).

   ![Onboarding step 1: choose how you'll use it](../images/getting-started/openrouter-onboarding-1.webp)

2. The onboarding creates your first API key automatically, and **the full key is shown only once, on this page**. Click the copy icon (②) to save it, then click **Continue** (③). If you don't copy it here, you can create a new one on the Keys page later (see below).

   ![Onboarding step 2: key generated and shown once](../images/getting-started/openrouter-onboarding-2.webp)

3. The page for adding a payment method. **You don't need to fill it in now**: click **I'll do this later** (①).

   ![Onboarding step 3: add a payment method later](../images/getting-started/openrouter-onboarding-3.webp)

4. The "Where did you first hear about OpenRouter?" survey. Click **Skip** (①).

   ![Onboarding step 4: skip the survey](../images/getting-started/openrouter-onboarding-4.webp)

5. **You're all set!** means you're done. Click **Go to Dashboard** (①) to open the console.

   ![Onboarding step 5: done](../images/getting-started/openrouter-onboarding-5.webp)

> [!NOTE]
> The key the onboarding creates has a $100 credit limit and a one-year expiry, which are OpenRouter's protective defaults. With a $0 balance, paid models can't be used, so the next step is to add credits.

#### Get an API key

If you didn't save the key during onboarding, or want to create another, go to [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) and click **New key** at the top right (①):

![OpenRouter API keys page](../images/getting-started/openrouter-keys.webp)

In the **Create API Key** dialog: enter a name (①) such as `Pine`, choose a validity period under **Expiration** (②), choose an upper limit under **Credit limit** (③), and finally click **Create** (④). The full key is again **shown only once** after creation, so copy it right away.

![Create API Key dialog](../images/getting-started/openrouter-create-key.webp)

> [!WARNING]
> An API key works like a payment credential for your account. Don't screenshot it, send it to anyone, or commit it to a code repository. Setting a credit limit keeps the damage bounded if it ever leaks.

#### Add credits

Open [openrouter.ai/settings/credits](https://openrouter.ai/settings/credits) and click **Add credits** (①), then follow the page to pay. A new account's balance is **$0.00**; you can also start with a small top-up to try it out. **Auto Top-Up** refills automatically, needs a payment method on file, and isn't required.

![OpenRouter Credits page](../images/getting-started/openrouter-credits.webp)

> [!NOTE]
> Adding credits requires a billing name, country/region, and address, and a payment method such as a bank card. Please complete this part yourself on the OpenRouter website. Fees, accepted payment methods, and refund rules are as stated on OpenRouter's website.

#### Connect OpenRouter in Pine

**Step 1: Look at the current state.** Click the gear **Open Pine settings** at the top right of Pine, then click **Models** on the left (①). **Image generation model** (②) and **Video generation model** (③) below show *OpenRouter is not configured yet*:

![Models settings page: OpenRouter not configured yet](../images/getting-started/pine-or-01-models.webp)

**Step 2: Add the provider.** Close settings, then click **Choose model** at the bottom right of the input box → **Browse all models…** → **Manage providers and models**. Type `openrouter` in the search box (①) and click **OpenRouter** when it appears (②):

![Searching for OpenRouter](../images/getting-started/pine-or-02-search.webp)

**Step 3: Choose an authentication method.** The **Connect OpenRouter** dialog offers two methods: **OpenRouter API key** (①) and **Sign in with OpenRouter**. This guide uses the API key; select it and click **Continue** (②):

![Choosing OpenRouter API key](../images/getting-started/pine-or-03-method.webp)

**Step 4: Paste the key.** In **Enter OpenRouter API key**, paste the key you copied (①) and click **Continue** (②):

![Pasting the OpenRouter API key](../images/getting-started/pine-or-04-key.webp)

Once connected, go back to **Pine Settings → Models** and click **Choose model** next to **Image generation model** / **Video generation model** to pick image and video models on OpenRouter. After that, just ask the AI to generate an image in a session.

- Image and video generation are billed per use, and prices vary by model. Check the unit price on OpenRouter's model page before choosing.
- To change the key, go back to **Manage providers and models** and repeat steps 3 and 4 above for OpenRouter.

---

## 6. Create your first project

A **project** is a set of folders the agent can access, plus that project's own sessions, Skills, and settings. The agent can only read and write the folders you authorize.

1. Click **Projects** in the menu at the top of the left sidebar (or press `Cmd/Ctrl + P`), then click **New Project**.
2. Fill in:
   - A **name**, plus an icon and accent color (optional);
   - **Default folder**: the agent's main working folder; pick a folder where you normally keep your material;
   - **Additional context folders** (optional): extra reference folders, each of which can be set to **Read only** or **Read and write**.
3. Save. The project appears in the session list in the left sidebar.

> **Tip**: For your first time, choose a **dedicated test folder** containing a few files you can always get back. Once you're familiar with how the agent behaves, authorize real material; if a folder is for reference only, set it to read only.

If you don't want to create a project, you can also just start a new session. These sessions are grouped under **No Project** and suit one-off small questions.

---

## 7. Start your first session

1. Click **New session** in the left sidebar (or press `Cmd/Ctrl + N`).
2. At the bottom of the input box, confirm the **project** (shown as "Send to {project name}") and the **model** are what you want.
3. Type your task, for example:
   - "Read the files in this folder and tell me what each one is for."
   - "Add up the monthly totals in `sales.xlsx` and put them in a new table."
4. Click send, or press Enter.
5. The session shows the agent's thinking, which files it read, and which tools it called. Click any tool call to expand its details (status, parameters, result).
6. Click a file name to preview the file right in the workspace (text, code, PDF, Office documents, spreadsheets, images, and more). The agent operates on exactly the files you see.

**You can stop at any time**: while the agent works, the send button turns into **Stop response**; you can also type a new message and choose **Steer response** to redirect it without interrupting the task.

**Attachments**: click **Add attachment** in the input box to add files, folders, or other sessions; you can also drag files in or paste images.

---

## 8. Understand permissions and approvals

At the bottom of the input box there is an **approval mode** that decides whether the agent asks you before acting:

| Mode | Meaning | Good for |
| --- | --- | --- |
| **Let Me Review** | Asks before any risky action | **Recommended for first use** |
| **Auto Approve** | A middle ground between autonomy and control | Everyday use once you're familiar |
| **Autonomous Work** | Interrupts you as little as possible | Long tasks you trust it with |
| **YOLO** | No permission limits; asks you to confirm again before turning on | Not recommended for ordinary users |

When a decision is needed, an **Approval required** card appears above the input box:

- **Approve**: allow this action;
- **Reject**: refuse it;
- **Reject with guidance**: refuse and tell it what to do instead.

Also:

- The agent's local tools are restricted to the folders you authorize.
- For delete and write actions, check that the path on the approval card is what you expect.
- Files you "move to Trash" in a browser aren't deleted outright (the server version moves them into `trash/` under the data directory).

---

## 9. Optional settings

None of these are required; come back to them when you need them.

| What you want to do | Where |
| --- | --- |
| Change interface language, display currency, completion sound, notifications | Gear → **General** |
| Light / dark mode, accent color, reading font | Gear → **Appearance** |
| Models for title generation, approval, and image generation | Gear → **Models** |
| Web search and fetching (TinyFish key), context compaction, approximate location | Gear → **Agent** |
| Nickname, communication style, custom instructions (so the agent knows you better) | Gear → **User profile** |
| Global shortcut to bring up the quick composer | Gear → **General → Quick composer** |
| Keep running in the background after closing the window (so automations keep working) | Gear → **General → Keep running in the background** |
| Automations (scheduled or folder-change-triggered unattended tasks) | Bottom of the left sidebar: **Automations** |
| Skills (reusable ways of working) | Bottom of the left sidebar: **Skills** |
| MCP servers (connect external tools) | Bottom of the left sidebar: **MCP servers** |
| Use Pine on this computer remotely from a phone or another device | Gear → **Remote control** (QR-code pairing, no port forwarding, end-to-end encrypted; turn on Browser access first) |

**Common shortcuts** (`Cmd` on macOS, `Ctrl` on Windows):

| Shortcut | Action |
| --- | --- |
| `Mod + N` / `Mod + T` | New session tab |
| `Mod + W` | Close tab |
| `Mod + K` | Search all sessions |
| `Mod + P` | Project settings |
| `Mod + B` | Show / hide the left sidebar |
| `Mod + Alt + B` | Show / hide the right workbench |
| `Mod + L` | Focus the input box |

---

## 10. Updates, data location, and uninstalling

### Updates

When a new version is available, Pine shows an **update dialog** with what's new and lets you install it. You can also go back to the download page at any time, download the latest installer, and install over the old version; your data isn't lost.

### Data location

| What | Where |
| --- | --- |
| Projects, sessions, settings, model credentials | The system's app-data directory (macOS: the Pine folder under `~/Library/Application Support/`; Windows: the Pine folder under `%APPDATA%`) |
| The folders you authorized | Your own folders; Pine never moves them |

> To back up Pine's data, **fully quit** Pine first, then copy the entire app-data directory. Model credentials are inside it, so keep the backup safe.

### Fully quitting

If "keep running in the background" is on, closing the window doesn't quit Pine. To quit completely: click the Pine icon in the menu bar (macOS) or notification area (Windows) → **Quit Pine**. Automations and remote control only work while Pine is running.

### Uninstalling

- **macOS**: drag Pine from Applications to the Trash. To also clear its data, delete the app-data directory above.
- **Windows**: Settings → Apps → Installed apps → Pine → Uninstall. To also clear its data, delete the app-data directory above.

Uninstalling doesn't delete any files in the folders you authorized.

---

## 11. FAQ

**macOS says "can't verify the developer" or "is damaged" when opening Pine.**
See [Install → macOS](#macos): right-click and open it, or click "Open Anyway" in "Privacy & Security", and if needed remove the quarantine flag with the `xattr` command.

**Windows stays on the startup stage / the main window never appears.**
The first launch sets up the sandbox, which needs you to click "Yes" in the UAC prompt. If you declined before, fully close Pine, start it again, and allow it this time.

**It says no model is available, or nothing happens after sending.**
Go to **Pine Settings → Models** and confirm a provider is configured and a model is selected; check the API key is correct and the account has balance; make sure your network can reach the provider.

**A network error or timeout after sending.**
Usually a network problem: make sure you can open the provider's website, and if needed set up a working proxy for the system and restart Pine.

**Costs are rising faster than expected.**
Check this session's cost in Context usage and set a **Session cost limit**. For long sessions, click **Compact context now** to compress the context, or start a new session.

**The agent says it has no permission to access a file.**
It can only access the folders the project authorizes. Go to **Pine Settings → Projects → Edit** to add that folder, and choose "Read only" or "Read and write" as needed.

**The agent changed a file it shouldn't have.**
Turn off the looser approval modes and switch back to **Let Me Review**; back up important files first, or set your reference folders to read only.

**I want to report a problem.**
Open an issue on GitHub: https://github.com/aldinelabs/pine/issues. Include the Pine version, your system version, what happened, and a screenshot without sensitive information. **Don't** paste API keys into an issue.

---

## 12. Other ways to install

The two methods below are for users with some technical background; ordinary users should use the installer above.

### 12.1 Run from source

First install [Bun](https://bun.sh/); see `packageManager` in the repository's `package.json` for the exact version:

```bash
git clone https://github.com/aldinelabs/pine.git
cd pine
bun install --frozen-lockfile
bun run dev
```

If `bun install` hangs on `Resolving dependencies` for a long time and your network goes through a local proxy, temporarily bypass the proxy and lower the concurrency, then retry:

```bash
env -u http_proxy -u https_proxy -u all_proxy \
  -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY \
  bun install --network-concurrency 8
```

For development conventions and the packaging process, see [`AGENTS.md`](https://github.com/aldinelabs/pine/blob/main/AGENTS.md) and [`release.md`](https://github.com/aldinelabs/pine/blob/main/docs/release.md) (both in Chinese) in the repository.

### 12.2 Run on a server (access from a browser)

Pine can run without a window on a macOS or Linux server and provide only the browser interface. It is the same application core as the desktop app; the only difference is the host capabilities: there is no window, system notifications, quick composer, auto-update, or Computer Use.

#### Build and run

- Needs Node.js 22.13 or later (the session index uses `node:sqlite`).
- Needs the source and dependencies prepared as in 12.1.
- On Linux, the sandbox for the agent's tools also needs bubblewrap, socat, and ripgrep:

```sh
sudo apt install bubblewrap socat ripgrep   # Debian / Ubuntu
```

```sh
bun install --frozen-lockfile
bun run build:server
PINE_PASSWORD='at least 8 characters' node apps/desktop/.vite/server/server.mjs
```

The build output is in `apps/desktop/.vite/server/`: `server.mjs`, the agent worker (`agent.mjs` and its chunks), and the browser interface (`renderer/`). Runtime dependencies such as Pi are loaded from the repository's `node_modules`, so run it from inside the repository, or deploy the repository together with its dependencies.

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

#### Deployment advice

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

#### Remote control through Aldine

A headless server can be controlled remotely through Aldine just like the desktop app: open `rc.aldine.cn` in the browser on a phone or another computer, pair, and use the Pine on the server, with no public address or port forwarding needed on the server. The server's web interface and password keep working as usual (a paired device acts as an already-signed-in browser).

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

#### Differences from the desktop app

- The data directory is separate from the desktop app's, and projects and sessions aren't shared by default. You can point `--data-dir` at any directory, but don't let the desktop app and the server use the same one at the same time.
- The data directory is created with mode `0700`. A server has no system keychain, so the TinyFish key is stored like model-provider keys, in a file readable only by that user.
- Project folders are paths on the server. Files you move to Trash in the browser go into `trash/` under the data directory and aren't deleted.
- Approximate location is estimated from the server's public IP, which on a cloud host is usually the data center's location; you can turn it off in settings if needed.
- macOS and Linux are supported (tested in a Debian 12 container). Windows isn't supported, because its sandbox needs the desktop app's one-time elevated setup.
- The server is single-user: every signed-in browser shares the same projects, sessions, and settings.

#### Linux sandbox

On Linux, ordinary `bash` and file tools run inside bubblewrap: they can only read the system runtime directories (`/usr`, `/lib*`, certificates, and a few `/etc` files) and the folders the project authorizes, can only write to writable folders, and have no network. Commands use `bash --noprofile --norc` and don't read the user's startup files. Differences from macOS:

- Files written outside authorized locations, such as `/tmp`, land in a per-command temporary filesystem that disappears when the command ends and is never written to the host; on macOS such writes simply fail. For temporary files inside the project, use `$TMPDIR`.
- bubblewrap needs unprivileged user namespaces. Some hosts and containers forbid them by default; in that case the server prints a notice at startup, and the agent can only run commands through the `privileged_bash` tool, which requires approval. When running in Docker, add:

  ```sh
  docker run --security-opt seccomp=unconfined \
    --security-opt apparmor=unconfined \
    --security-opt systempaths=unconfined ...
  ```
