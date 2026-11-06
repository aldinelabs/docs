---
title: "Getting started"
description: "From download to first launch: supported systems, downloading the installer, installing, and launching Pine."
order: 10
---

# Getting started

This guide is for **people installing Pine for the first time**. You don't need to know how to code; just follow the steps. If you want to run Pine on a server or build it from source, see [Advanced installs](advanced/index.md).

> [!CAUTION]
> Pine is an early developer preview. The interface, data formats, and agent behavior may change in incompatible ways. Don't hand it the only copy of an important file; back up first.

## Before you start

### Supported systems

| System | Status |
| --- | --- |
| macOS (Apple silicon / Intel) | Supported |
| Windows 10 / 11 (64-bit) | Partially supported |
| Linux desktop | Not supported (you can use the [server mode](advanced/server.md) from a browser) |

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

## Download the installer

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

## Install

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

## First launch

### First open on macOS

Pine opens straight to the main window. If you later use screen-related features (such as the quick composer capturing the current window, or Computer Use), the system will ask for "Screen Recording" or "Accessibility" permission. Allow it in **System Settings → Privacy & Security** when needed; if you don't use those features, you can leave it ungranted.

### Windows: sandbox setup

On first launch, Pine first sets up the **Windows sandbox** (it keeps the agent's commands inside the folders you authorize).

- A **UAC (User Account Control)** prompt appears; choose **Yes**.
- This step needs administrator rights and only happens once. If you decline, Pine can't start working; close it and start it again to be prompted again.
- The main window doesn't open until setup finishes, so waiting a few dozen seconds is normal.

### Choose a language

Pine's interface supports Simplified Chinese, Traditional Chinese, English, Japanese, Korean, Spanish, French, German, and Russian. If it isn't in the language you want:

1. Click the **gear (Open Pine settings)** at the top-left or top-right of the window.
2. Go to **General → Language**.
3. Pick one from the drop-down.

Once Pine is installed, continue with [Connect models and services](connect-models/index.md).
