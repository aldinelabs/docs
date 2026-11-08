---
title: "Using Pine"
description: "Create a project, start a session, understand permissions and approvals, and optional settings."
order: 30
---

# Using Pine

Once a model is connected, start using Pine for real here.

## Create your first project

A **project** is a set of folders the agent can access, plus that project's own sessions, Skills, and settings. The agent can only read and write the folders you authorize.

1. Click **Projects** in the menu at the top of the left sidebar (or press `Cmd/Ctrl + P`), then click **New Project**.
2. Fill in:
   - A **name**, plus an icon and accent color (optional);
   - **Default folder**: the agent's main working folder; pick a folder where you normally keep your material;
   - **Additional context folders** (optional): extra reference folders, each of which can be set to **Read only** or **Read and write**.
3. Save. The project appears in the session list in the left sidebar.

> [!TIP]
> For your first time, choose a **dedicated test folder** containing a few files you can always get back. Once you're familiar with how the agent behaves, authorize real material; if a folder is for reference only, set it to read only.

If you don't want to create a project, you can also just start a new session. These sessions are grouped under **No Project** and suit one-off small questions.

## Start your first session

1. Click **New session** in the left sidebar (or press `Cmd/Ctrl + N`).
2. At the bottom of the input box, confirm the **project** (shown as "Send to {project name}") and the **model** are what you want.
3. Type your task, for example:
   - "Read the files in this folder and tell me what each one is for."
   - "Add up the monthly totals in `sales.xlsx` and put them in a new table."
4. Click send, or press Enter.
5. The session shows the agent's thinking, which files it read, and which tools it called. Click any tool call to expand its details (status, parameters, result).
6. Click a file name to preview the file right in the workspace (text, code, PDF, Office documents, spreadsheets, images, and more). The agent operates on exactly the files you see.

**You can stop at any time**: while the agent works, the send button turns into **Stop response**; you can also type a new message and choose **Steer response** to redirect it without interrupting the task.

**Attachments**: click **Add attachment** in the input box to add files, folders, or other sessions; you can also drag files in or paste images.

## Understand permissions and approvals

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

For **Computer Use**, permission covers computer control for the current task. **Let Me Review** asks once at the first control action; **Auto Approve** and **Autonomous Work** review that task permission automatically. After approval, ordinary clicks, typing, scrolling, switching apps, and browser navigation continue without individual reviews. The permission expires when the run finishes, you use **Stop response**, or you change approval mode; reopening a session does not restore it. OS permission requests and browser extension installation still need separate approval.

The agent is instructed to pause before payments, sending messages, publishing, irreversible deletion, security changes, or sharing sensitive information with a new recipient unless you already authorized the specific action. This relies on the executing model's judgment; Pine does not independently check the risk of each click. Computer control can reach apps and browser content outside the project folders.

Also:

- The agent's local tools are restricted to the folders you authorize.
- For delete and write actions, check that the path on the approval card is what you expect.
- Files you "move to Trash" in a browser aren't deleted outright (the server version moves them into `trash/` under the data directory).

## Optional settings

None of these are required; come back to them when you need them.

| What you want to do | Where |
| --- | --- |
| Change interface language, display currency, completion sound, notifications | Gear → **General** |
| Light / dark mode, accent color, reading font | Gear → **Appearance** |
| Models for title generation, approval, and image generation | Gear → **Models** |
| Web search and fetching (TinyFish key), context compaction, approximate location | Gear → **Agent** |
| Nickname, communication style, custom instructions (so the agent knows you better) | Gear → **User profile** |
| Global shortcut to bring up the quick composer | Gear → **General → Quick composer** |
| Keep running in the background after closing the window (so automations keep working) | Gear → **General → Keep running in the background** |
| Automations (scheduled or folder-change-triggered unattended tasks) | Bottom of the left sidebar: **Automations** |
| Skills (reusable ways of working) | Bottom of the left sidebar: **Skills** |
| MCP servers (connect external tools) | Bottom of the left sidebar: **MCP servers** |
| Use Pine on this computer remotely from a phone or another device | Gear → **Remote control** (QR-code pairing, no port forwarding, end-to-end encrypted; turn on Browser access first) |

**Common shortcuts** (`Cmd` on macOS, `Ctrl` on Windows):

| Shortcut | Action |
| --- | --- |
| `Mod + N` / `Mod + T` | New session tab |
| `Mod + W` | Close tab |
| `Mod + K` | Search all sessions |
| `Mod + P` | Project settings |
| `Mod + B` | Show / hide the left sidebar |
| `Mod + Alt + B` | Show / hide the right workbench |
| `Mod + L` | Focus the input box |

If something goes wrong, see [Maintenance and troubleshooting](maintenance.md).
