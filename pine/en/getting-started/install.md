---
title: "Install"
description: "Install Pine on macOS and Windows."
order: 3
---

# Install

## macOS

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

## Windows

1. Double-click the downloaded `win32-x64.exe` installer.
2. If a blue **"Windows protected your PC" (SmartScreen)** window appears, click **More info → Run anyway**. This happens because the installer may not carry a commercial code-signing certificate; just make sure you downloaded it from the official source.
3. Installation is one click, with no path to choose. When it finishes, Pine starts automatically and creates desktop and Start menu shortcuts.
