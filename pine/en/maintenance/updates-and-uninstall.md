---
title: "Updates, data location, and uninstalling"
description: "How to update Pine, where its data is stored, and how to quit and uninstall it completely."
order: 1
---

# Updates, data location, and uninstalling

## Updates

When a new version is available, Pine shows an **update dialog** with what's new and lets you install it. You can also go back to the download page at any time, download the latest installer, and install over the old version; your data isn't lost.

## Data location

| What | Where |
| --- | --- |
| Projects, sessions, settings, model credentials | The system's app-data directory (macOS: the Pine folder under `~/Library/Application Support/`; Windows: the Pine folder under `%APPDATA%`) |
| The folders you authorized | Your own folders; Pine never moves them |

> [!NOTE]
> To back up Pine's data, **fully quit** Pine first, then copy the entire app-data directory. Model credentials are inside it, so keep the backup safe.

## Fully quitting

If "keep running in the background" is on, closing the window doesn't quit Pine. To quit completely: click the Pine icon in the menu bar (macOS) or notification area (Windows) → **Quit Pine**. Automations and remote control only work while Pine is running.

## Uninstalling

- **macOS**: drag Pine from Applications to the Trash. To also clear its data, delete the app-data directory above.
- **Windows**: Settings → Apps → Installed apps → Pine → Uninstall. To also clear its data, delete the app-data directory above.

Uninstalling doesn't delete any files in the folders you authorized.
