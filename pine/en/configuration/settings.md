---
title: "Settings reference"
description: "Every option in the General, Appearance, Models, Agent, User profile and Projects sections of Pine Settings."
order: 1
---

# Settings reference

Click the gear in the title bar to open **Pine Settings**. The sections are covered one by one below. **Remote control** has more to it and has pages of its own: [Remote control](remote.md) and [WeChat remote](wechat.md).

## General

### Interface

- **Language**: the interface language. Simplified Chinese, Traditional Chinese, English, Japanese, Korean, Spanish, French, German and Russian are available.
- **Currency**: the currency for conversation cost and cost limits. Defaults to **Follow system**; converted at the European Central Bank's daily rate, and shown in US dollars when rates are unavailable.
- **Monet**: gives Pine a distinctive voice and uses a serif reading font for replies, session titles, headings, input placeholders and the model picker; your own messages, buttons, menus and the sidebar keep the interface font. While it is on, **Communication style** in **User profile** is unavailable, because Monet replaces it.

### Notifications

- **Signal when work is done**: tells you when the agent finishes a turn: **Off**, **Notification**, or **Notification and sound**.
- **Notify for approvals and questions**: while Pine is in the background, shows a system notification when a tool call needs approval or Pine asks you a question; approval notifications have Approve and Deny buttons.

### System

- **Quick composer**: a global shortcut that opens a floating composer from any app to start a new conversation. With the screen recording and accessibility permissions, it can also take the frontmost app's window and selected text as context; files, pasted images and long text can be added before the main window opens.
- **Keep running in the background** (macOS and Windows desktop app): closing the last window keeps Pine in the menu bar (macOS) or notification area (Windows), so automations, remote control and the quick composer stay available. To quit completely, choose **Quit Pine** from the tray icon. The tray menu is described in [Remote control](remote.md).
- **Diagnostic logging**: records errors and sleep recovery events on this computer to help troubleshoot. Keeps the two most recent logs, about 2 MB in total; conversation text is excluded and logs are never uploaded automatically. Turning it off stops recording and keeps existing logs.

## Appearance

- **Color mode**: **System**, **Light** or **Dark**.
- **Pine default color theme**: the app's default theme color: Neutral, Olive, Red, Rose, Orange, Green, Blue, Yellow or Violet (Neutral by default). A project's own accent color takes precedence.
- **Working glow**: while the agent works, a thin light runs clockwise along the composer's border in the project's accent color. On by default and applies to every open window. With the system's reduced motion on, the light stays still at the bottom-right corner.
- **Native sidebar material** (macOS): draws the sidebar with the native translucent macOS material.
- **Invert documents in dark mode**: in dark mode, PDFs, presentations and other documents open with inverted pages for easier reading at night.

## Models

To connect models, see [Connect models](../connect-models/index.md). These options choose which model does Pine's supporting work:

- **Model catalogs**: **Refresh now** fetches the latest model lists from configured providers.
- **Title generation model**: names new sessions.
- **Approval model**: reviews tool calls in **Auto Approve** and **Autonomous Work**, and explains operations plainly when it hands a call to you. See [Approvals and automatic review](approvals.md).
- **Image generation model** and **Video generation model**: used when the agent generates images or video; they need OpenRouter. See [Media generation](../connect-models/media-generation.md).
- **Decisions screening model**: the model that screens calls when the automatic approval path is **Decision model**.

## Agent

### How Pine answers

- **Interactive answers**: lets Pine include interactive checklists, calculators, tables and charts in replies. **Enabled** by default.
- **Interim answers**: lets Pine share a preliminary answer from what it already knows, or each part of a multi-part request as soon as it is solved, before it finishes searching or working. **Enabled** by default; applies from the next message. Sub-sessions and automation runs do not post interim answers.

### Permissions

- **Automatic approval path**: who decides during automatic approval: **Model review** or **Decision model** (Beta). See [Approvals and automatic review](approvals.md) for the difference.

### Context

When a conversation grows close to the model's context limit, Pine compacts the earlier part and keeps the essentials so work can continue.

- **Context compaction strategy**: **Use recommended settings** compacts at 80% context usage, capped at 400K tokens; **Passive compaction** keeps the default behavior and compacts only near the context limit.
- **Context compaction method**: **Model** asks the current model to write the summary; **Semantic algorithm** (Beta) makes no model call, extracting goals, file changes, commits and a brief transcript from the conversation, so it is faster and uses no tokens.

To compact by hand, see the cost, or set a cost limit, see [Working with sessions](sessions.md).

### Tools & privacy

- **TinyFish web tools**: with a TinyFish API key, the agent can search the web and fetch pages. See [Web search](../connect-models/web-search.md).
- **Share approximate location with AI**: Pine gets this computer's public IP address from Cloudflare and estimates your city on this device with its built-in GeoIP database; only the city, region and country reach the AI. A VPN or proxy can make the location inaccurate.

## User profile

These details help Pine understand you. Changes save automatically and apply from the next message in every conversation.

- **Nickname**: what Pine calls you when appropriate.
- **Pronouns**: used when Pine refers to you in the third person, for example in documents or messages it writes for you. **Not specified** (the default), **he/him**, **she/her**, **they/them** or **Custom**.
- **Communication style**: **Calm & professional**, **Neutral** or **Warm & friendly**. Unavailable while Monet mode is on.
- **Technical background**: **General user** avoids jargon and explains in goal-oriented language; **Professional user** gets technical details directly. The plain-language explanations on approval cards follow it too.
- **Other personal details**: your work, interests, preferences or current goals.
- **Custom instructions**: additional ways you want Pine to work. Safety and approval rules still apply.

## Projects

Lists every project with the data Pine keeps for it (sessions, attachments, temporary files, search cache). Project folders themselves are never changed.

- **New Project** and **Edit**: name, icon, accent color (**Pine Default** follows the Appearance setting, or pick a color of its own), default folder, and the access of additional context folders (**Read only** or **Read and write**).
- **Clear temporary files**: deletes the project's temporary files.
- **Clear attachments…**: deletes pasted images and long text. Earlier messages that reference them can no longer preview them; Pine asks before clearing.
