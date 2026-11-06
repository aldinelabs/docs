---
title: "Run from source"
description: "Clone the repository and run the development version of Pine on your machine."
order: 1
---

# Run from source

First install [Bun](https://bun.sh/); see `packageManager` in the repository's `package.json` for the exact version:

```bash
git clone https://github.com/aldinelabs/pine.git
cd pine
bun install --frozen-lockfile
bun run dev
```

If `bun install` hangs on `Resolving dependencies` for a long time and your network goes through a local proxy, temporarily bypass the proxy and lower the concurrency, then retry:

```bash
env -u http_proxy -u https_proxy -u all_proxy \
  -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY \
  bun install --network-concurrency 8
```

For development conventions and the packaging process, see [`AGENTS.md`](https://github.com/aldinelabs/pine/blob/main/AGENTS.md) and [`release.md`](https://github.com/aldinelabs/pine/blob/main/docs/release.md) (both in Chinese) in the repository.
