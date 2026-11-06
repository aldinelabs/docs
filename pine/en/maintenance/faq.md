---
title: "FAQ"
description: "The most common problems with installing, connecting a model, and using Pine."
order: 2
---

# FAQ

**macOS says "can't verify the developer" or "is damaged" when opening Pine.**
See [Install → macOS](../getting-started/install.md#macos): right-click and open it, or click "Open Anyway" in "Privacy & Security", and if needed remove the quarantine flag with the `xattr` command.

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
