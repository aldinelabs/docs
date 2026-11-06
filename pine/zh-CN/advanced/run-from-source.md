---
title: "从源码运行"
description: "克隆仓库并在本机运行 Pine 开发版。"
order: 1
---

# 从源码运行

需要先安装 [Bun](https://bun.sh/)，具体版本见仓库 `package.json` 的 `packageManager`：

```bash
git clone https://github.com/aldinelabs/pine.git
cd pine
bun install --frozen-lockfile
bun run dev
```

如果 `bun install` 长时间停在 `Resolving dependencies`，且你的网络经过本地代理，可临时绕过代理并降低并发后重试：

```bash
env -u http_proxy -u https_proxy -u all_proxy \
  -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY \
  bun install --network-concurrency 8
```

开发约定与打包流程见仓库根目录的 [`AGENTS.md`](https://github.com/aldinelabs/pine/blob/main/AGENTS.md) 和 [`release.md`](https://github.com/aldinelabs/pine/blob/main/docs/release.md)。
