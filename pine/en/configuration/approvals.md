---
title: "Approvals and automatic review"
description: "The four approval modes, the automatic approval path, what an approval card shows, and which actions always ask you."
order: 2
---

# Approvals and automatic review

## Approval modes

Each session has an approval mode at the bottom of the composer that decides whether the agent asks you before risky actions. The mode is saved with the conversation and shared between the desktop app and remote devices.

| Mode | Who decides |
| --- | --- |
| **Let Me Review** | Every risky action shows an approval card for you to decide |
| **Auto Approve** | The approval model reviews first; you get a card only when it is unsure or thinks you should confirm |
| **Autonomous Work** | The approval model reviews and tries not to stop for you, except for the actions listed below |
| **YOLO** | No permission constraints; asks you to confirm before enabling |

A session or sub-session the agent starts runs in the same approval mode as the session that started it, or a stricter one, never a looser one.

## Automatic approval path

In **Auto Approve** and **Autonomous Work**, choose who reviews in **Pine Settings › Agent › Automatic approval path**:

- **Model review**: every review goes to the approval model set in **Models**.
- **Decision model** (Beta): the **Decisions screening model** screens first. Calls it allows proceed directly, and calls that need you open a card; denied calls, or calls the screening could not handle, go to the approval model for the final decision and rationale. Needs OpenRouter; model review is used until it is configured.

Every automatic review is recorded. Open a tool call in the conversation, and **Review history** lists each screening or model review with the model actually used, its outcome and its reason. Outcomes are shown in bold with their own icon and color: green "Allowed", amber "Denied", blue "User confirmation required", grey "Sent for model review" and red "Review failed". The records remain when you reopen the conversation.

## Approval cards

When you need to decide, an **Approval required** card takes the composer's place:

- **Approve**, **Reject**, or **Reject with guidance**: type what you want instead; Enter sends, `Shift + Enter` adds a line, and `Esc` returns to the buttons.
- When automatic review hands a call to you, the card starts with one sentence on what the operation does and a short **Risks** list, worded for your **User profile › Technical background**. The **Explained by the approval model** label reminds you that what actually runs is the original parameters.
- **Technical details** (collapsed) holds why Pine asked, the agent's description, the original parameters and the reviewer's notes.
- On the Decision model path, Pine waits up to about 10 seconds for the plain-language account before showing the card; if it is not ready in time, the card appears with Technical details open and the account fills in when it arrives.
- When enabling a new tool would make the provider reprocess a very long context at full price, the card offers **Activate now**, compressing first and then continuing, or stopping the run.

With **Notify for approvals and questions** on, approvals raise a system notification while Pine is in the background, and you can approve or deny right from it.

## Actions that always ask you

These actions show a card in every approval mode, YOLO included:

- **Adding or changing an MCP server**: adding, changing, renaming or turning on an MCP server. The card names the server, the command it runs on this computer with your permissions outside Pine's sandbox (or the address it connects to), where it applies (**All projects** or this project only), and the names of the credentials it receives (values hidden).
- **Deleting a session**: a session open in a tab stops and its tab closes. Deleting a session also deletes its sub-sessions, and the confirmation says how many.
- **Changing a project**: creating, renaming, adding or removing folders, changing the working folder, setting the icon and accent color, or deleting it. The card's details list what will change.

In **Let Me Review**, organizing session folders, starting new sessions, and reading unrelated sessions also ask first.

## Computer Use

The first time the agent controls a desktop app or browser tab, it asks for control **for the current task**: one card in Let Me Review, and an automatic review in Auto Approve and Autonomous Work. Once granted, ordinary clicks, typing, scrolling, app switching and navigation continue without per-action reviews. The grant ends when the run finishes, you click **Stop response**, or the approval mode changes, and it is not restored when you reopen the session. OS permission requests and browser extension installation are approved separately.

> [!WARNING]
> While the grant is active, consequential actions such as payments, sending, publishing, irreversible deletion, security changes or sharing sensitive information with a new recipient rely on the agent choosing to ask you first, not on a separate check of each click. For that kind of work, stay in **Let Me Review**.
