---
title: "Working with sessions"
description: "Steering, quotes and follow-ups, attachments, interim answers, interactive answers, context and cost, sub-sessions, and letting the agent organize sessions and projects."
order: 3
---

# Working with sessions

## Working alongside a running agent

- **Steer response**: while the agent works, type a new message and choose Steer response; the agent reads it at its next step without stopping the task. Staged messages sit above the composer, each with **Withdraw** and **Send now** below it.
- **Stop response**: stops the turn at any time.
- **Edit message**: editing one of your messages resends it from that point.
- **Todos**: when the agent keeps a task list, a progress card sits above the composer and opens **All todos** with a dependency graph. Once every task is completed, the card disappears when the turn ends.
- **Background processes**: long-running processes the agent starts appear in a card and in the workbench, with their command and output, and can be stopped while running.
- **Waiting note**: when about 3 seconds pass after sending without any reply, reasoning or tool call, a note says Pine is still waiting for the model provider; if it stays for tens of seconds, check your network and the provider's status.

## Quotes, follow-ups and side chats

Selecting text in the conversation shows two buttons:

- **Quote**: attaches the passage to your next message.
- **Follow up**: opens a side chat about that passage in the workbench. Follow-ups are saved with the session, the passage is highlighted, and clicking the highlight reopens it.

A **Side chat** is a read-only conversation about the current session: it can read files and search the web but cannot change anything, so you can ask questions without disturbing the main task. A side chat about the whole conversation, opened from the workbench's panel switcher or **Add card**, is marked **Not saved** and is discarded when closed.

In long sessions, the **Conversation outline** jumps to an earlier turn.

## Attachments

**Add attachment** in the composer adds a **File**, **Folder** or **Conversation**; you can also drop files and paste images and long text.

- **Attaching a conversation**: drag a session from the left sidebar into the composer, or choose Conversation in the attachment menu. The agent reads that conversation without asking for approval. Once sent, clicking the chip opens it.
- **Sending from a file preview**: **Send to tab…** and **Send selection to tab…** in a file preview attach the whole file or the selection to a session; preview comments can also go to a session in one step. See [Workbench and file previews](workbench.md).
- In a new session with no project, typing `@` chooses the project.

## What answers can contain

- **Interactive answers**: replies can include checklists, tables, charts, calculators and inputs. Turn this off in **Pine Settings › Agent**.
- **Interim answers**: the agent can post a preliminary answer before slow work such as a web search, or answer each part of a multi-part request as soon as it is solved, and keep working. They can be selected, quoted, searched and exported like any reply. Turn them off in the same place.
- **Question cards**: when the agent needs more from you, a questionnaire card takes the composer's place; move between questions with **Previous** and **Next**, or write a free-text answer and **Submit**.

## Context and cost

Click **Context usage** at the bottom of the composer:

- The top part shows tokens used, the context window, utilization and cache hit rate; **Compact context now** compacts by hand. The automatic compaction strategy is set in the [Settings reference](settings.md).
- The bottom part shows this conversation's cost (in the currency set in **General**) and a **Session cost limit** switch and amount. Reaching the limit stops the run and blocks new messages until you raise or clear it. You can set it before a session starts.

The composer's footer also switches this session's **Model** and **Reasoning effort**.

## Sub-sessions and sessions the agent starts

You can ask the agent to start new sessions for independent work:

- **Sub-session**: the usual choice. It belongs to the current session and sits indented under its parent in the left sidebar, joined by a tree line; the chevron at the end of the parent's row expands or collapses it (so does clicking the row of the parent you already have open). A sub-session's tab shows two speech bubbles. Sub-sessions go only one level deep; a sub-session can start only siblings.
- **Sibling session**: an independent session in this or another project that works in the background. It appears in the left sidebar without opening a tab or switching away from your current session.

When a sub-session finishes a turn, fails or waits for an approval, the parent shows a marker (for example "Sub-session {name} finished") that opens it; the parent's agent reads the sub-session's reply and continues, even when the parent has no tab open. A sub-session's approvals are answered in its own tab. A message one session sends another shows in the receiving session under "Started by {name}" or "From {name}", which opens the sender.

The agent can also search your sessions in every project. Reading a session unrelated to the current work is reviewed first: a card in Let Me Review, the approval model in Auto Approve and Autonomous Work, and no review in YOLO. It cannot send messages to those sessions.

## Letting the agent organize sessions and projects

When you ask, the agent can:

- **Organize sessions**: create, rename and delete session folders, move sessions into or out of folders, and rename sessions. Deleting a session always asks you.
- **Manage projects**: create a project from folders, rename it, add or remove folders, change the working folder, set its icon and accent color, or delete it. Every change asks you, in every mode. Deleting a project deletes its sessions but keeps its folders on disk; the agent cannot delete the project it runs in, **No Project**, or a project with a session still working.

**Session titles**: Pine names a session after its first exchange; when a later message starts a different task, the agent may update the title to the work it is now doing. A title you set with Rename stays until you rename it again.

## Managing sessions

- **Search sessions**: `Mod + K` searches titles and content across every project.
- **Session folders**: create a folder from the button on a project's group header; right-click a folder to **Rename folder** or **Delete folder** (its conversations move back to the project).
- **Right-click a session**: **Rename conversation**, **Export conversation** (Markdown), **Move to folder**, **Delete conversation** (permanent).
- In the left sidebar, a running session's title shimmers; a session stopped on an approval shows a shield icon at the end of its row ("Waiting for your approval"); automation runs show a workflow icon; sessions started or used from WeChat show a chat-bubble icon.
