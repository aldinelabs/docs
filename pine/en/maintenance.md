---
title: "Maintenance and troubleshooting"
description: "Updates, data location, uninstalling, and common problems."
order: 40
---

# Maintenance and troubleshooting

## Updates, data location, and uninstalling

### Updates

When a new version is available, Pine shows an **update dialog** with what's new and lets you install it. You can also go back to the download page at any time, download the latest installer, and install over the old version; your data isn't lost.

### Data location

| What | Where |
| --- | --- |
| Projects, sessions, settings, model credentials | The system's app-data directory (macOS: the Pine folder under `~/Library/Application Support/`; Windows: the Pine folder under `%APPDATA%`) |
| The folders you authorized | Your own folders; Pine never moves them |

> [!NOTE]
> To back up Pine's data, **fully quit** Pine first, then copy the entire app-data directory. Model credentials are inside it, so keep the backup safe.

### Fully quitting

If "keep running in the background" is on, closing the window doesn't quit Pine. To quit completely: click the Pine icon in the menu bar (macOS) or notification area (Windows) → **Quit Pine**. Automations and remote control only work while Pine is running.

### Uninstalling

- **macOS**: drag Pine from Applications to the Trash. To also clear its data, delete the app-data directory above.
- **Windows**: Settings → Apps → Installed apps → Pine → Uninstall. To also clear its data, delete the app-data directory above.

Uninstalling doesn't delete any files in the folders you authorized.

## FAQ

**macOS says "can't verify the developer" or "is damaged" when opening Pine.**
See [Install → macOS](getting-started.md#macos): right-click and open it, or click "Open Anyway" in "Privacy & Security", and if needed remove the quarantine flag with the `xattr` command.

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

To run on a server or build from source, see [Advanced installs](advanced/index.md).
