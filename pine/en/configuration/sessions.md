---
title: "Working with sessions"
description: "Steering and stopping, prompt optimization and reply suggestions, quotes and follow-ups, attachments, interactive answers, context and cost, memory, sub-sessions, and letting the agent organize sessions and projects."
order: 3
---

# Working with sessions

> [!TIP]
> Prefer pictures? **More › Guides** in the left sidebar lists every illustrated guide by topic. The first time you meet a feature such as an approval card, a sub-session, memory or stopping, a one-time tip appears beside it: **Show me** opens the matching guide, and **Got it** dismisses it.

## Working alongside a running agent

- **Steer response**: while the agent works, type a new message and choose Steer response; the agent reads it at its next step without stopping the task. Staged messages sit above the composer, each with **Withdraw** and **Send now** below it.
- **Stop response**: stops the turn at any time. Changes made so far are kept, and tool calls that had not finished are marked **Stopped**; just say what's next.
- **Edit message**: editing one of your messages resends it from that point.
- **Todos**: when the agent keeps a task list, a progress card sits above the composer and opens **All todos** with a dependency graph. Once every task is completed, the card disappears when the turn ends.
- **Background processes**: long-running processes the agent starts appear in a card and in the workbench, with their command and output, and can be stopped while running.
- **Waiting note**: when about 5 seconds pass after sending without any reply, reasoning or tool call, a note says Pine is still waiting for the model provider; if it stays for tens of seconds, check your network and the provider's status.

## The composer

- **Sending**: Enter sends and scrolls the conversation to your message; `Alt + Enter` sends without moving the conversation, so you can keep reading earlier messages. `Shift + Enter` adds a line.
- **Optimize prompt**: after typing a request, click **Optimize prompt** or press `Mod + Enter`, and Pine rewrites it into a clearer, more specific prompt; details only you know are left as `[[…]]` blanks, and the first one is selected. The rewrite takes into account the project, the start and the latest turns of the conversation, attachments and quoted passages. Press `Esc` to cancel while it works; afterwards, **Undo optimization** or `Mod + Z` brings back your text. It also works while the agent is running, turning your steering message into a short, direct correction. The model it uses is chosen under **Pine Settings › Models › Prompt optimization model**.
- **Reply suggestions**: when the agent finishes answering, up to three suggested next messages fade into the composer, most likely first. Press `Tab` (or `→` with the cursor at the end) to use the one shown; in an empty composer, `↑` / `↓` switch between them, and the key hint shows which one you're on (such as `Tab | 2/3 ↑↓`). Typing anything sets them aside; unused suggestions stay with the conversation and are still there when you reopen it. Turn them off in **Pine Settings › Agent › Behavior**.
- **Scroll to bottom**: scrolled well up in a conversation, this button appears at the bottom right; click it to jump to the latest content and keep following the reply.

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

- **Interactive answers**: replies can include checklists, tables, charts, calculators, forms, date pickers, countdown timers, timelines, formulas, code with a copy button, accordions, carousels, numbered steps, flashcards and more, and the agent also uses images to show screenshots and generated results. Turn this off in **Pine Settings › Agent › Behavior**.
- **Interim answers**: the agent can post a preliminary answer before slow work such as a web search, or answer each part of a multi-part request as soon as it is solved, and keep working. They can be selected, quoted, searched and exported like any reply. Turn them off in the same place.
- **Question cards**: when the agent needs more from you, a questionnaire card takes the composer's place; move between questions with **Previous** and **Next**, or write a free-text answer and **Submit**.
- **Tool call details**: click a tool call in the conversation to see its status, approval, parameters and result. Parameters, and results that are themselves JSON, show as indented, syntax-highlighted JSON with long lines wrapped; plain text and Markdown results show as usual. A call the approval model or the sandbox blocked offers **Why was this blocked?**, which opens a guide explaining the reason.

## Context and cost

**Context usage** at the bottom of the composer shows how much of the context window is in use and, for priced models, what the conversation has cost so far (such as `10%  ¥0.63`), in the currency chosen in **General**. Click it:

- The top part shows tokens used, the context window, utilization and cache hit rate; **Compact context now** compacts by hand. The automatic compaction strategy is set in the [Settings reference](settings.md).
- The bottom part shows this conversation's cost and a **Session cost limit** switch and amount. Reaching the limit stops the run and blocks new messages until you raise or clear it; **Learn why** in the notice opens a guide on cost. You can set it before a session starts.
- **How context works**, at the top, opens an illustrated guide to context and tokens.

The composer's footer also switches this session's **Model** (`Mod + I`) and **Reasoning effort**. In a narrow window the cost, the reasoning effort and the percentage fold away one by one; they are still shown in the popover and the Model menu.

## Memory

Pine remembers things across sessions. When you ask it to remember something, or it learns your preferences, decisions made or pitfalls hit while working, it saves a memory, and later sessions start with your memories in hand. A memory applies either to the current project or to all projects, and stays on this computer. Pine keeps only what will help other conversations later and merges it into existing memories rather than saving duplicates; saving, reading, changing or deleting a memory shows as its own entry in the conversation, naming the memory.

- **Managing memories**: **More › Memory** in the left sidebar lists memories under **This project** and **All projects**. Each shows its name and a one-line summary, with an **Unverified** badge when Pine hasn't confirmed it. **Edit** changes its **Summary** and **Details**, turns on **Verified**, or deletes it. **How memory works** beside the title opens an illustrated guide.
- **Turning memory off**: **Remember across sessions** in **Pine Settings › Agent › Behavior** is on by default. While it is off, Pine neither reads nor saves memories, and existing ones can still be managed in the Memory window. Automation runs neither read nor save memories.

## Sub-sessions and sessions the agent starts

You can ask the agent to start new sessions for independent work:

- **Sub-session**: the usual choice. It belongs to the current session and sits indented under its parent in the left sidebar, joined by a tree line; the chevron at the end of the parent's row expands or collapses it (so does clicking the row of the parent you already have open). A sub-session's tab shows two speech bubbles. Sub-sessions go only one level deep; a sub-session can start only siblings.
- **Sibling session**: an independent session in this or another project that works in the background. It appears in the left sidebar without opening a tab or switching away from your current session.

If you'd like a new session to use a lighter or a different model, just tell the agent: it picks the model and reasoning effort from the models you've set up, the new session's Model menu shows the choice, and you can change it any time. Otherwise new sessions use your default model.

When a sub-session finishes a turn, fails or waits for an approval, the parent shows a marker (for example "Sub-session {name} finished") that opens it; the parent's agent reads the sub-session's reply and continues, even when the parent has no tab open. A sub-session's approvals are answered in its own tab. When you press Stop in a sub-session, the parent shows "You stopped sub-session {name}" and does not carry on by itself; it asks you whether to resume, redirect, take the work over or drop it. A message one session sends another shows in the receiving session under "Started by {name}" or "From {name}", which opens the sender.

The agent can read and message its sub-sessions and siblings, and search your sessions in every project. Reading a session unrelated to the current work is reviewed first: a card in Let Me Review, the approval model in Auto Approve and Autonomous Work, and no review in YOLO. It can message those sessions too, with every message reviewed the same way; when a message of yours clearly belongs to another session, it forwards it there and tells you where it went.

The agent can also end another session's current turn, just like its **Stop response** button; that session stays in the sidebar and can be messaged again later. Stopping its own sub-sessions needs no approval; stopping any other session is reviewed the same way first.

## Letting the agent organize sessions and projects

When you ask, the agent can:

- **Organize sessions**: create, rename and delete session folders, move sessions into or out of folders, and rename sessions. Deleting a session always asks you.
- **Manage projects**: create a project from folders, rename it, add or remove folders, change the working folder, set its icon and accent color, or delete it. Every change asks you, in every mode. Deleting a project deletes its sessions but keeps its folders on disk; the agent cannot delete the project it runs in, **No Project**, or a project with a session still working.

**Session titles**: Pine names a session after its first exchange; when a later message starts a different task, the agent may update the title to the work it is now doing. A title you set with Rename is never replaced silently: when the agent would like a new title, it suggests one at the end of the conversation ("Rename this session to “…”?"), with **Rename**, **Not now** and **Don't suggest again**.

## Managing sessions

- **Search sessions**: `Mod + K` searches titles and content across every project.
- **Session folders**: create a folder from the button on a project's group header; right-click a folder to **Rename folder** or **Delete folder** (its conversations move back to the project).
- **Right-click a session**: **Rename conversation**, **Export conversation** (Markdown), **Move to folder**, **Delete conversation** (permanent).
- **Session status**: to the left of each title in the sidebar, a breathing amber dot means the session is waiting for you ("Waiting for your approval", "Waiting for your answer"), a small spinner means it's running, and an accent-colored dot means a run finished while you weren't looking ("Unread"; it clears when you open the session and survives a restart). A running session's title also shimmers; automation runs show a workflow icon; sessions started or used from WeChat show a chat-bubble icon.
- **Tabs**: tabs are as wide as their titles, a title that doesn't fit fades out at its end, and the close button appears over the end of the title on hover. When space runs short, the other tabs shrink to their narrowest before the bar scrolls sideways. `Mod + [` and `Mod + ]` switch to the previous and next tab.
