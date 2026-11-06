---
title: "Before you start"
description: "Supported systems, what to prepare, and how Pine handles your data."
order: 1
---

# Before you start

## Supported systems

| System | Status |
| --- | --- |
| macOS (Apple silicon / Intel) | Supported |
| Windows 10 / 11 (64-bit) | Partially supported |
| Linux desktop | Not supported (you can use the [server mode](../advanced/server.md) from a browser) |

Not sure which chip your Mac has? Click the Apple menu in the top-left corner → "About This Mac" and look at the "Chip" line. Apple M1/M2/M3/M4 and so on mean Apple silicon; Intel means Intel.

## What you need

- **An account for an AI model.** Pine doesn't provide models and doesn't relay traffic; you set up the model connection yourself. You need one of these:
  - An **API key** from a model provider (Anthropic, OpenAI, Google, DeepSeek, Zhipu, Moonshot, and others; Pine has many providers built in);
  - A subscription account that supports sign-in authorization (OAuth; just click sign in inside Pine);
  - A self-hosted or third-party **compatible endpoint** (you need its address and key; add it with a custom provider).
- **A network connection that can reach the model service you choose.** Some providers need a proxy in some regions, so first make sure you can open the provider's website.
- **A folder you want Pine to work on** (documents, spreadsheets, and reference material all work).

## About data and privacy

- Projects, sessions, and files are stored on your computer.
- Your conversations with the model are sent to **the model provider you choose**. Pine doesn't relay them through its own servers. Pick providers according to your needs, and don't give the agent files that shouldn't leave your machine.
