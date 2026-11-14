---
title: "WeChat remote"
description: "Send Pine tasks from your own WeChat through Tencent's ClawBot: connecting, permission settings and every command."
order: 7
---

# WeChat remote

**WeChat remote** (experimental) lets you use your own WeChat, through Tencent's ClawBot, to send tasks to the Pine on this computer, follow their progress, handle approvals and get files back. Its settings are in **Pine Settings › Remote control › WeChat**.

> [!WARNING]
> With WeChat remote on, anyone who gets into your WeChat account can direct Pine on this computer. Messages pass through Tencent's servers, and the connected account can read session titles, search results and replies of every project. Set the limits below with that in mind.

## Connecting WeChat

1. Click **Connect WeChat**, scan the QR code in the dialog with WeChat on your phone, and confirm on the phone. If WeChat asks, enter the verification code it shows on your phone.
2. In WeChat, send any message (a single dot is enough) to the bot. It replies with a 6-digit pairing code.
3. Enter the code in the six boxes (pasting fills them all); it is sent as soon as the sixth digit is entered. If the code expires, click **Try again**.

Once connected, the settings show **WeChat account XXXX-XXXX** with a status: **Online**, **Connecting**, **Retrying**, **Scan again needed** or **Paused**. When a new scan is needed, click **Scan again**.

One WeChat account connects to one computer. A proxy or an overseas network exit may be blocked.

## Permission settings

| Option | What it does |
| --- | --- |
| **Receive tasks from WeChat** | While off, Pine ignores messages from WeChat. Only this computer can turn it back on |
| **Default project** | Where a new session from WeChat starts, or **No Project** |
| **Highest approval mode** | Sessions driven from WeChat never run with less supervision than this. Choosing **YOLO** asks for confirmation first |
| **Default approval mode** | The mode of sessions started from WeChat, within the highest mode |
| **Allow approving high-risk actions from WeChat** | Native execution outside the sandbox and destructive commands. Off by default; while off, they can be approved only on this computer |
| **Allow sending files to WeChat** | Only the session's artifacts (files the agent submitted), up to 100 MB each. Off by default. When on, up to three files a task submitted or opened are sent right after its result, and the rest are listed with `.o` |

**Disconnect** asks first: sessions that only WeChat holds stop, and the WeChat permission settings return to their defaults.

Other sessions that WeChat-driven work starts or contacts are held to the same limits. Automation approvals, wherever they were requested, are answered only on this computer.

## Using it in WeChat

- **Plain text** goes to the current session. To add to the request while the agent runs, put the text in the steering queue with `.queue`; the agent reads it at its next step.
- **Commands** start with a dot (`.` or the Chinese full stop `。`). Send `.help` (or `.?`) for the common commands and `.h 2` for the rest.
- Replies are formatted as Markdown, with lists and command help as narrow tables; a long reply is cut, with a note on how to see all of it.
- Approval and question cards are numbered; send `.number` to see a card in full. An interactive answer's buttons are numbered too: reply with the number.
- Tasks that reach Pine more than 10 minutes after you sent them wait until you confirm them in WeChat.

### Commands

| Command | Short form | What it does |
| --- | --- | --- |
| `.help [command \| 2]` | `.h` | Common commands; `.h 2` for the rest |
| `.status` | `.s`, or a lone `.` | Current session and open asks |
| `.info` | `.cfg` | This computer and the WeChat remote settings |
| `.lang zh \| en \| auto` | | Reply language |
| `.pause [all]` | | Pause WeChat remote; `all` also stops running sessions. Resume on the computer |
| `.more` | `.0` | Next page |
| `.new [@project] [text]` | `.n` | Start a session; without text, the next message starts one |
| `.sessions [@project]` | `.l` | Recent sessions |
| `.search words` | `.f` | Search all sessions |
| `.use [ref]` | `.u` | Switch the current session (`.u 9` is the latest push) |
| `.last` | `.r` | Final reply of the last turn |
| `.history [n]` | `.hi` | Last turns (default 3, at most 10) |
| `.stop [all]` | `.x` | Stop the current run; `all` stops every run |
| `.queue [text]` | `.q` | Add to the steering queue; without text, list the queue |
| `.unqueue [N]` | `.qx` | Withdraw a queued message (default: the newest) |
| `.rename title` | `.rn` | Rename the current session |
| `.delete ref` | `.del` | Delete a session started from WeChat (confirmed) |
| `.model [ref]` | `.m` | List models, or switch the current session's model |
| `.effort [level]` | `.e` | Reasoning effort |
| `.mode [mode]` | `.mo` | Approval mode (up to the limit set on the computer) |
| `.usage` | `.i` | Context and cost |
| `.compact` | `.c` | Compact the context |
| `.todo` | `.t` | The agent's todo list |
| `.pending` | `.w` | Every approval and question waiting for you |
| `.show ref` | `.number` | Show a card in full |
| `.approve [ref]` | `.y` | Approve or confirm |
| `.reject [ref] [guidance]` | `.d` | Reject or cancel, optionally with guidance |
| `.guide [ref] text` | `.g` | Reject and tell the agent what to do instead |
| `.answer [ref] answers` | `.a` | Answer a question card; separate questions with `;` |
| `.files [N]` | `.o` | Files the agent submitted as artifacts |
| `.file N` | `.send` | Send one file to WeChat |
| `.tasks` | `.b` | Background processes |
| `.task N` | | Output of one background process |
| `.kill N` | `.k` | Stop one background process |
| `.projects [ref]` | `.p` | List projects, or pick the project for new sessions |
| `.autos [@project]` | `.au` | Automations |
| `.auto N [on \| off \| run]` | | One automation: details, on, off or run now |
| `.runs [N]` | `.ar` | Automation runs |
| `.skills` | `.sk` | Skills of the current project |
| `.mcp` | | MCP servers |
| `.drop` | | Discard attachments not sent yet |

## Notifications and the tray

Even with notifications turned off, these always raise a system notification: a session started from WeChat, an existing session first used from WeChat, a high-risk action approved from WeChat, a file sent to WeChat, a session deleted from WeChat, an automation run from WeChat, a session switched to YOLO from WeChat, WeChat needing a new scan, WeChat remote being paused, or its settings being reset. Clicking one brings Pine's window forward.

The **WeChat remote** switch in the tray menu pauses or resumes receiving at any time, the same as **Receive tasks from WeChat** in Settings. Pine asks before quitting while WeChat remote is listening, because tasks sent from WeChat will not arrive after you quit. To keep it online all the time, [run Pine on a server](../advanced/server.md).
