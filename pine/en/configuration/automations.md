---
title: "Automations, Skills and MCP"
description: "Unattended automations, reusable Skills, and MCP servers that connect outside tools."
order: 5
---

# Automations, Skills and MCP

All three managers are in the **More** menu at the top of the left sidebar, and each has a shortcut. Each one offers **Manage with Pine**: it starts a new session with the matching authoring tools already on, so you describe what you want and Pine writes it.

Beside each manager's title is a guide button (**How automations work**, **How Skills work**, **How MCP servers work**) that opens an illustrated guide and returns you to the manager when you're done.

Each of the three has a switch in **Pine Settings › Agent › Tools**, on by default: **Automations** lets the agent create, edit and run automations in a conversation; **Skills** lets it use your Skills and create or edit them in a conversation; **MCP servers** lets it use tools from connected servers and set up servers in a conversation. Turn one off and the agent stops using that kind of tool, from your next message.

## Automations

**Automations** (`Mod + U`) are work Pine does on its own when a time, a file change or a website update calls for it. The easiest way to create one is to tell Pine in a conversation what you want done automatically; it shows an automation approval card listing the triggers, what it will read, write and reach, and any warnings, for you to approve.

Triggers: **Schedule**, **Folder change**, **System event**, **Website or feed check** and **Manual**, or several at once.

The manager has three tabs:

- **Activity**: each run with its status, such as **Running**, **Found something**, **Nothing new** or **Failed**. **Refresh**, **Mark all as read**, or turn on **Show runs with nothing new**. Opening a run opens its session.
- **Automations**: each automation's triggers and permissions, with its state **On**, **Off** or **Paused**; **Run now**, **Edit definition** as JSON and **Check** it, or delete it.
- **Secrets**: values automations can use, such as API tokens. They are encrypted on this computer, given only to the automations that reference them, and hidden from what the agent reads; they can be changed only in the Pine desktop app on this computer.

Each run is a session in the project, marked with a workflow icon. Automation runs neither read nor save [memories](sessions.md), and always work in the Full takeover work style.

> [!NOTE]
> Automations run only while Pine is running. To keep them going after you close the window, turn on **Keep running in the background** in **General**. When several people use Pine on this computer, only the current user's automations run.

## Skills

**Skills** (`Mod + S`) are reusable ways of working: instructions that tell the agent how to do a kind of task and which tools it may use.

- **Global** Skills are available to every project but are switched on per project; **Project** Skills belong to the current project only.
- Create, edit, enable per project, or delete them.

## MCP servers

**MCP servers** (`Mod + /`) connect outside tools to the agent through MCP. Each server is available to **All projects** or to the current **Project** only; add, edit, enable, remove and refresh their status.

> [!WARNING]
> A local MCP server runs with your user permissions, outside Pine's sandbox. That is why adding, changing, renaming or turning on an MCP server asks you in every approval mode, with a card that shows the command it runs or the address it connects to. Add only servers you trust.
