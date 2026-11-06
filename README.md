# Aldine Docs

[简体中文](#简体中文) | [English](#english)

---

## English

User documentation for Aldine Labs software, published at **docs.aldine.cn**.

### Layout

```text
<product>/
  zh-CN/    Simplified Chinese pages
    <group>/index.md   A group's own page: a short intro and links to its pages
    <group>/<page>.md  One topic per page
  en/       English pages, same paths as zh-CN
  images/   Screenshots shared by both languages
```

Keep pages small and focused (one task or topic each). Group related pages in a folder; the folder's `index.md` is the group's page. The sidebar is built from this tree, ordered by `order` in the front matter. Pages link to each other as relative `.md` paths; the site rewrites them to URLs. The language switcher on the site links the two versions, so pages do not link to each other themselves.

| Product | Pages |
| --- | --- |
| Pine | [简体中文](./pine/zh-CN/getting-started/index.md) · [English](./pine/en/getting-started/index.md) |

### Writing rules

- Every page exists in both languages at the same path, with the same sections in the same order.
- Pine's interface text: in Chinese pages write `中文（English）` using the text from Pine's zh-CN language pack; in English pages use the en-US text. Text on third-party sites stays as it appears there.
- Screenshots are WebP, 1400 px wide, with a red box and a number on each element to click (numbers follow the order of the steps). Redact names, emails, balances, keys, and IP addresses before saving.
- Never put API keys, passwords, or personal data in a page or a screenshot.
- Use relative links inside this repository. Link to source files in other repositories with absolute GitHub URLs.
- Callouts use GitHub's syntax: `> [!NOTE]`, `> [!WARNING]`, `> [!CAUTION]`.

### Keeping docs in step with the software

When a change in the software alters the interface or a documented flow, update the page here in the same cycle and link the two pull requests to each other.

### Deploying

The site is static and is hosted on Tencent EdgeOne Pages at **docs.aldine.cn**; every push to `main` is built and published.

| Setting | Value |
| --- | --- |
| Root directory | Repository root |
| Build command | `bun install --frozen-lockfile && bun run check:content && bun run build` |
| Output directory | `dist` |
| Environment variable | `SITE_URL` = `https://docs.aldine.cn` |

Needs Node 22.12 or newer and Bun 1.3.4 (see `engines` and `packageManager` in `package.json`). `SITE_URL` sets canonical URLs and the sitemap at build time. Run `bun run dev` to work locally and `bun run check` for type checks.

---

## 简体中文

Aldine Labs 软件的用户文档，发布在 **docs.aldine.cn**。

### 目录结构

```text
<产品>/
  zh-CN/    简体中文页面
    <分组>/index.md   分组自己的页面：简短介绍和各页面的链接
    <分组>/<页面>.md  每页一个主题
  en/       英文页面，路径与 zh-CN 一致
  images/   两种语言共用的截图
```

页面保持小而聚焦（每页一个任务或主题）。相关页面放进同一个文件夹，文件夹的 `index.md` 就是该分组的页面。侧栏按这棵树生成，顺序由 front matter 的 `order` 决定。页面之间用相对的 `.md` 路径互相链接，站点会改写成网址。站点的语言切换负责连接中英两个版本，页面里不需要互相链接。

| 产品 | 页面 |
| --- | --- |
| Pine | [简体中文](./pine/zh-CN/getting-started/index.md) · [English](./pine/en/getting-started/index.md) |

### 写作约定

- 每个页面都要有中英文两个版本，路径一致、章节和顺序一致。
- Pine 的界面文案：中文页面写成「中文（English）」，中文取自 Pine 的 zh-CN 语言包；英文页面用 en-US 原文。第三方网站上的文案保持它们本来的样子。
- 截图用 WebP，宽 1400 px，在要点击的位置画红框并标上序号（序号就是步骤顺序）。保存前要对姓名、邮箱、余额、密钥和 IP 地址做脱敏。
- 页面和截图里不要出现 API Key、密码或个人数据。
- 仓库内部用相对链接；指向其他仓库源码的链接用 GitHub 绝对地址。
- 提示块使用 GitHub 语法：`> [!NOTE]`、`> [!WARNING]`、`> [!CAUTION]`。

### 与软件保持同步

软件的改动影响了界面或已记录的流程时，在同一个周期内更新这里的对应页面，并让两边的 PR 互相链接。

### 部署

站点是纯静态的，托管在腾讯云 EdgeOne Pages 的 **docs.aldine.cn**；每次推送到 `main` 都会构建并发布。

| 设置 | 值 |
| --- | --- |
| 根目录 | 仓库根目录 |
| 构建命令 | `bun install --frozen-lockfile && bun run check:content && bun run build` |
| 输出目录 | `dist` |
| 环境变量 | `SITE_URL` = `https://docs.aldine.cn` |

需要 Node 22.12 及以上和 Bun 1.3.4（见 `package.json` 的 `engines` 与 `packageManager`）。`SITE_URL` 决定构建时的 canonical 地址和站点地图。本地用 `bun run dev` 开发，`bun run check` 做类型检查。
