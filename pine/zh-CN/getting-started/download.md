---
title: "下载安装包"
description: "用始终指向最新版本的直链，或从 GitHub Releases 下载 Pine 安装包。"
order: 2
---

# 下载安装包

Pine 的安装包有两个下载来源，内容相同，任选其一。

## 方式一：直接下载（推荐）

下面的链接**始终指向最新版本**，发布新版后不需要换链接，点击即可下载。不需要 GitHub 账号，也不用在页面里找文件：

| 你的系统 | 直接下载 |
| --- | --- |
| macOS，Apple 芯片（M1 / M2 / M3 / M4 等） | [Pine-darwin-arm64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-arm64.dmg) |
| macOS，Intel | [Pine-darwin-x64.dmg](https://dl.phosphoros.works/pine/latest/Pine-darwin-x64.dmg) |
| Windows 64 位 | [Pine-win32-x64.exe](https://dl.phosphoros.works/pine/latest/Pine-win32-x64.exe) |

想确认下载的文件没有损坏，可以打开[校验文件 SHA256SUMS](https://dl.phosphoros.works/pine/latest/SHA256SUMS)，对照里面的 SHA-256 值与自己下载文件的值是否一致。

## 方式二：GitHub Releases

安装包也发布在 GitHub：

**https://github.com/aldinelabs/pine/releases/latest**

打开页面后，在 **Assets** 里选择与你系统对应的文件：

| 你的系统 | 下载文件（文件名中包含） |
| --- | --- |
| macOS，Apple 芯片 | `darwin-arm64.dmg` |
| macOS，Intel | `darwin-x64.dmg` |
| Windows 64 位 | `win32-x64.exe` |

注意：

- 同一页面里的 `.nupkg`、`RELEASES` 等文件是 Windows 自动更新用的，**不要手动下载运行**。
- 页面里的 "Source code (zip / tar.gz)" 是源码，不是安装包。
