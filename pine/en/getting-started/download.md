---
title: "Download the installer"
description: "Download Pine from always-latest direct links or from GitHub Releases."
order: 2
---

# Download the installer

There are two download sources with identical contents. Use either one.

## Option 1: Direct download (recommended)

The links below **always point to the latest version**. When a new version is released you don't need a new link; just click to download. No GitHub account is needed and there's no page to dig through:

| Your system | Direct download |
| --- | --- |
| macOS, Apple silicon (M1 / M2 / M3 / M4, etc.) | [Pine-darwin-arm64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-arm64.dmg) |
| macOS, Intel | [Pine-darwin-x64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-x64.dmg) |
| Windows, 64-bit | [Pine-win32-x64.exe](https://dl.phosphoros.works/pine/latest/Pine-win32-x64.exe) |

To check that your download isn't corrupted, open the [SHA256SUMS checksum file](https://dl.phosphoros.works/pine/latest/SHA256SUMS) and compare the SHA-256 values listed there with the value of the file you downloaded.

## Option 2: GitHub Releases

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
