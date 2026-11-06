# Aldine Docs

[简体中文](#简体中文) | [English](#english)

---

## English

User documentation for Aldine Labs software, published at **docs.aldine.cn**.

### Layout

```text
<product>/
  zh-CN/    Simplified Chinese pages
  en/       English pages
  images/   Screenshots shared by both languages
```

| Product | Pages |
| --- | --- |
| Pine | [简体中文](./pine/zh-CN/getting-started.md) · [English](./pine/en/getting-started.md) |

### Writing rules

- Every page exists in both languages, with the same sections in the same order. Link the two versions to each other at the top of the page.
- Pine's interface text: in Chinese pages write `中文（English）` using the text from Pine's zh-CN language pack; in English pages use the en-US text. Text on third-party sites stays as it appears there.
- Screenshots are WebP, 1400 px wide, with a red box and a number on each element to click (numbers follow the order of the steps). Redact names, emails, balances, keys, and IP addresses before saving.
- Never put API keys, passwords, or personal data in a page or a screenshot.
- Use relative links inside this repository. Link to source files in other repositories with absolute GitHub URLs.
- Callouts use GitHub's syntax: `> [!NOTE]`, `> [!WARNING]`, `> [!CAUTION]`.

### Keeping docs in step with the software

When a change in the software alters the interface or a documented flow, update the page here in the same cycle and link the two pull requests to each other.

---

## 简体中文

Aldine Labs 软件的用户文档，发布在 **docs.aldine.cn**。

### 目录结构

```text
<产品>/
  zh-CN/    简体中文页面
  en/       英文页面
  images/   两种语言共用的截图
```

| 产品 | 页面 |
| --- | --- |
| Pine | [简体中文](./pine/zh-CN/getting-started.md) · [English](./pine/en/getting-started.md) |

### 写作约定

- 每个页面都要有中英文两个版本，章节和顺序一致，页首互相链接。
- Pine 的界面文案：中文页面写成「中文（English）」，中文取自 Pine 的 zh-CN 语言包；英文页面用 en-US 原文。第三方网站上的文案保持它们本来的样子。
- 截图用 WebP，宽 1400 px，在要点击的位置画红框并标上序号（序号就是步骤顺序）。保存前要对姓名、邮箱、余额、密钥和 IP 地址做脱敏。
- 页面和截图里不要出现 API Key、密码或个人数据。
- 仓库内部用相对链接；指向其他仓库源码的链接用 GitHub 绝对地址。
- 提示块使用 GitHub 语法：`> [!NOTE]`、`> [!WARNING]`、`> [!CAUTION]`。

### 与软件保持同步

软件的改动影响了界面或已记录的流程时，在同一个周期内更新这里的对应页面，并让两边的 PR 互相链接。
