---
title: "Understand permissions and approvals"
description: "Permission modes, approval cards, and how to stop at any time."
order: 3
---

# Understand permissions and approvals

At the bottom of the input box there is an **approval mode** that decides whether the agent asks you before acting:

| Mode | Meaning | Good for |
| --- | --- | --- |
| **Let Me Review** | Asks before any risky action | **Recommended for first use** |
| **Auto Approve** | A middle ground between autonomy and control | Everyday use once you're familiar |
| **Autonomous Work** | Interrupts you as little as possible | Long tasks you trust it with |
| **YOLO** | No permission limits; asks you to confirm again before turning on | Not recommended for ordinary users |

When a decision is needed, an **Approval required** card appears above the input box:

- **Approve**: allow this action;
- **Reject**: refuse it;
- **Reject with guidance**: refuse and tell it what to do instead.

Also:

- The agent's local tools are restricted to the folders you authorize.
- For delete and write actions, check that the path on the approval card is what you expect.
- Files you "move to Trash" in a browser aren't deleted outright (the server version moves them into `trash/` under the data directory).
