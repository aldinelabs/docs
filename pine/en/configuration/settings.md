---
title: "Settings reference"
description: "Every option in the General, Appearance, Models, Agent, User profile, Multiple users, Projects and About sections of Pine Settings."
order: 1
---

# Settings reference

Click the gear in the title bar, or press `Mod + ,`, to open **Pine Settings**. The sections are covered one by one below. **Remote control** has more to it and has pages of its own: [Remote control](remote.md) and [WeChat remote](wechat.md).

## General

### Interface

- **Language**: the interface language. Simplified Chinese, Traditional Chinese, English, Japanese, Korean, Spanish, French, German and Russian are available.
- **Currency**: the currency for conversation cost and cost limits. Defaults to **Follow system**; converted at the European Central Bank's daily rate, and shown in US dollars when rates are unavailable.
- **Guide buttons**: on by default. Pine puts question-mark buttons in the approval mode menu, the model menu, the Context usage popover and beside each manager's title; they open illustrated guides with animated pictures and plain-language steps. **Guides** in the sidebar's **More** menu lists every guide by topic. Turned off, every guide button and one-time tip is hidden in every window.
- **One-time tips**: shown while Guide buttons is on. The first time you meet an approval card, a context compaction, sub-sessions, an automation run, memory, a Skill, an MCP tool and a few other features, a short tip appears beside it and stays away once you click **Got it**. **Show again** brings every tip back.

### Notifications

- **Signal when work is done**: tells you when the agent finishes a turn: **Off**, **Notification**, or **Notification and sound**.
- **Notify for approvals and questions**: while Pine is in the background, shows a system notification when a tool call needs approval or Pine asks you a question; approval notifications have Approve and Deny buttons.

### System

- **Quick composer**: a global shortcut that opens a floating composer from any app to start a new conversation. With the screen recording and accessibility permissions, it can also take the frontmost app's window and selected text as context, which the × at its right end removes; files, pasted images and long text can be added before the main window opens. Enter opens the conversation in a window; `⌃ + Enter` (`Alt + Enter` on Windows and Linux) sends it in the background without bringing a Pine window forward, and a system notification tells you when the answer is ready; clicking it opens the conversation.
- **Keep running in the background** (macOS and Windows desktop app): closing the last window keeps Pine in the menu bar (macOS) or notification area (Windows), so automations, remote control and the quick composer stay available. To quit completely, choose **Quit Pine** from the tray icon. The tray menu is described in [Remote control](remote.md).
- **Diagnostic logging**: records errors and sleep recovery events on this computer to help troubleshoot. Keeps the two most recent logs, about 2 MB in total; conversation text is excluded and logs are never uploaded automatically. Turning it off stops recording and keeps existing logs.

## Appearance

- **Color mode**: **System**, **Light** or **Dark**.
- **Pine default color theme**: the app's default theme color: Neutral, Olive, Red, Rose, Orange, Green, Blue, Yellow or Violet (Neutral by default). A project's own accent color takes precedence.
- **Working glow**: while the agent works, a thin light runs clockwise along the composer's border in the project's accent color. On by default and applies to every open window. With the system's reduced motion on, the light stays still at the bottom-right corner.
- **Native sidebar material** (macOS): draws the sidebar with the native translucent macOS material.
- **Monet font family**: off by default. Turned on, replies, session titles, headings, input placeholders and the model picker use a serif reading font; your own messages, buttons, menus and the sidebar keep the interface font. It only changes how Pine looks, not how it writes.
- **Invert documents in dark mode**: in dark mode, PDFs, presentations and other documents open with inverted pages for easier reading at night.

## Models

To connect models, see [Connect models](../connect-models/index.md). These options choose which model does Pine's supporting work; in the model pickers, each model starts with the icon of the company that makes it, so you can spot it at a glance:

- **Model catalogs**: **Refresh now** fetches the latest model lists from configured providers.
- **Pi providers (CC Switch)** (desktop app only): with **Use providers from Pi** on (off by default), Pine adds the providers in Pi's `models.json` (as set up in Pi or CC Switch) and follows changes to the file within a moment. By default it reads the file under `PI_CODING_AGENT_DIR` or `~/.pi/agent`; **Show in folder** reveals it, **Choose folder…** picks another location, and **Use default folder** switches back. The section shows how many providers were added, and which were skipped and why.
  - Pine only reads this file: these providers cannot be edited, signed in to or removed in Pine; change them in Pi or CC Switch. They carry a "Pi" badge in the model picker, and their IDs start with `pi-`.
  - A provider whose key or header is written as a `!command` is skipped; Pine never runs it.
- **Title generation model**: names new sessions.
- **Approval model**: reviews tool calls in **Auto Approve** and **Autonomous Work**, and explains operations plainly when it hands a call to you. See [Approvals and automatic review](approvals.md).
- **Prompt optimization model**: the composer's **Optimize prompt** uses it to rewrite what you typed into a clearer, more specific prompt, and **Reply suggestions** use it too. Without one, the title generation model is used.
- **Live translation model**: translates each transcribed line while translation is on in Live context. Without one, the title generation model is used.
- **Image generation model**: used when the agent generates images. Pick an OpenRouter image model, or **GPT Image** under the **ChatGPT** group to make pictures on your ChatGPT plan (it needs the OpenAI Codex sign-in, uses the plan's Codex usage, and is never picked automatically). See [Media generation](../connect-models/media-generation.md).
- **Video generation model**: used when the agent generates video; it needs OpenRouter. See [Media generation](../connect-models/media-generation.md).
- **Decisions screening model**: the model that screens calls when the automatic approval path is **Decision model**.

## Agent

### Behavior

- **Interactive answers**: lets Pine include interactive checklists, calculators, tables and charts in replies. On by default.
- **Interim answers**: lets Pine share a preliminary answer from what it already knows, or each part of a multi-part request as soon as it is solved, before it finishes searching or working. On by default; applies from the next message. Sub-sessions and automation runs do not post interim answers.
- **Reply suggestions**: after the agent answers, up to three suggested next messages appear in the composer; press `Tab` to use one, and `↑` / `↓` in the empty composer to switch between them. On by default.
- **Remember across sessions**: on by default; applies from the next message. Pine saves notes about your preferences, decisions and what it has learned, and brings them into later sessions; notes stay on this device. View, edit and delete them in the **More › Memory** window in the sidebar. Turned off, Pine neither reads nor saves notes, and the existing ones can still be managed there.
- **Share approximate location with AI**: Pine gets this computer's public IP address from Cloudflare and estimates your city on this device with its built-in GeoIP database; only the city, region and country reach the AI. A VPN or proxy can make the location inaccurate.
- **Automatic approval path**: who decides during automatic approval: **Model review** or **Decision model** (Beta). See [Approvals and automatic review](approvals.md) for the difference.

When a conversation grows close to the model's context limit, Pine compacts the earlier part and keeps the essentials so work can continue:

- **Context compaction strategy**: **Use recommended settings** compacts at 80% context usage, capped at 400K tokens; **Passive compaction** keeps the default behavior and compacts only near the context limit.
- **Context compaction method**: **Model** asks the current model to write the summary; **Semantic algorithm** (Beta) makes no model call, extracting goals, file changes, commits and a brief transcript from the conversation, so it is faster and uses no tokens.

With Guide buttons on, the question marks beside the approval path and the two compaction settings open a one-page guide comparing the options. To compact by hand, see the cost, or set a cost limit, see [Working with sessions](sessions.md).

### Tools

Choose what Pine can do. Each family of tools has its own switch, all on by default, and a change applies from your next message. With a family off, the agent gets none of its tools and can point you back here when it needs them.

- **Shell commands**: run terminal commands, including approved ones outside the project sandbox and long-running background tasks.
- **Web search**: search the web and read pages through TinyFish. It needs a TinyFish API key, set with **Add key** or **Change key** on this row; without a key it stays unavailable even with the switch on. To get a key, see [Web search](../connect-models/web-search.md).
- **Computer use**: see your screen and operate apps and browser tabs when a task needs it. Computer Use works only while this switch is on; for how it is approved, see [Approvals and automatic review](approvals.md#computer-use).
- **Image and video generation**: create images and videos with the models chosen under **Models**.
- **Artifacts and workbench**: save results as artifacts, preview files, and arrange the workbench beside the conversation.
- **Live Context**: see the live transcript of what is being said, and start listening when you ask. Turned off, Pine also stops seeing the live transcript.
- **Sessions**: search, read and organize your sessions, and start, message and stop sub-sessions.
- **Projects**: list your projects, and create, edit or delete them with your approval.
- **Skills**, **Automations** and **MCP servers**: use them, and create or set them up in a conversation. See [Automations, Skills and MCP](automations.md).

Reading and editing files, the to-do list, the clock and asking you questions have no switch and are always available.

## User profile

These details help Pine understand you. Changes save automatically and apply from the next message in every conversation.

- **Aldine methodology** (Beta): on by default. Pine talks like a clear-headed dialogue partner: candid, specific and light on pleasantries, agreeing only when it means it, saying exactly what it is unsure of, and checking what it can check instead of guessing. The communication style still sets the tone and the work style still sets how much Pine drives.
- **Name and pronouns**: type the name Pine should call you, and pick pronouns from the dropdown at the field's right end: **Not specified** (the default), **he/him**, **she/her**, **they/them** or **Custom**, which shows a text field below. Pine uses the pronouns when it refers to you in the third person, for example in documents or messages it writes for you.
- **Communication style**: **Calm & professional**, **Neutral** or **Warm & friendly**.
- **Technical background**: **General user** avoids jargon, explains in goal-oriented language and looks up the common practice of a field before starting anything non-trivial; **Professional user** gets technical details directly. The plain-language explanations on approval cards follow it too.
- **Work style**: **Full takeover** (the default) has Pine drive the task itself and quote or summarize the parts of a file it discusses, so you don't need the file open beside the chat; **Collaborate** assumes you have the file open, so Pine points to sections, paragraphs or line numbers, keeps you in the loop and asks before key decisions. Automations always run as Full takeover.
- **Other personal details**: your work, interests, preferences or current goals.
- **Custom instructions**: additional ways you want Pine to work. Safety and approval rules still apply.

## Multiple users

Desktop app only. Each person who shares this computer can have their own Pine, with their own conversations, projects, memory, Skills, MCP servers, automations, remote control and WeChat bindings, model connections and settings. Users have no passwords; this keeps things apart, not private. With a single user, nothing changes apart from this section.

- **Add user**: set a name, avatar and color. **Copy my model connections**, on by default, gives them their own copy of your API keys, sign-ins and model choices; nothing else is copied.
- Each user has a row, and the one Pine runs as is marked **Current**. The pencil button edits a user's name, avatar and color; the "…" menu of every other user has **Switch to this user** and **Delete user**. Deleting asks first, then moves their conversations, projects, memory and model connections to the Trash; files in their project folders are not touched.
- **Ask who's using Pine when it opens**: shown with more than one user, on by default. Pine opens on **Who's using Pine?**, where arrow keys or `1`–`9` pick a user; turned off, Pine opens as whoever used it last.

Switching restarts Pine as that user, asking first if sessions are running or remote control is on. With more than one user, the avatar menu at the bottom of the sidebar and the tray menu can switch users too. Only the current user's automations and WeChat remote run.

## Projects

Lists every project with the data Pine keeps for it (sessions, attachments, temporary files, search cache). Project folders themselves are never changed.

- **New Project** and **Edit**: name, icon, accent color (a row of round swatches; **Pine Default**, with a dashed edge, follows the Appearance setting, or pick a color of its own), default folder, and the access of additional context folders (**Read only** or **Read and write**).
- **Clear temporary files**: deletes the project's temporary files.
- **Clear attachments…**: deletes pasted images and long text. Earlier messages that reference them can no longer preview them; Pine asks before clearing.

## About

The last section of Settings, showing Pine's version.

- **Check for updates** (desktop app only): opens the update dialog when a release is available, and otherwise says **Pine is up to date.**
- **Links**: **Documentation**, **Source code**, **Release notes** and **Report an issue** open in the browser.
- **License**: Pine is released under the GNU Affero General Public License v3.0 or later; selecting it opens the full license.
- **Open-source software**: the open-source software Pine ships or adapted, searchable by name or license, with packages grouped by license; selecting any entry opens its project page in the browser.
