---
title: "Workbench and file previews"
description: "The workbench panels, artifacts and their versions, live context, file details, preview comments, the audio and video player, and enlarging images."
order: 4
---

# Workbench and file previews

## Workbench

The workbench is the panel on the right of the window (`Mod + Alt + B` shows or hides it), kept per session. It holds up to two cards stacked top and bottom, with a handle between them; drag its leading edge to change its width. Each card header has a panel switcher, **Open in tab**, **Add card** and a close button. Closing the last tab closes the workbench too; open a tab and it is back.

| Panel | Contents |
| --- | --- |
| **Artifacts** | The session's deliverables: the result files the agent submitted, newest first, with a title and a one-line description, optionally in folders, with a version kept from each submission (see below). Files the agent only showed to report progress or compare are not listed |
| **Background processes** | Processes the agent started, with their output |
| **Preview** | The file the agent last presented, or one picked from Artifacts |
| **Files** | The project's file tree, with each folder's access |
| **Live context** | Beta, macOS 26 or later. Transcribes a meeting or class as context for the current conversation; see below |
| **Side chat** | A read-only conversation about the current session; see [Working with sessions](sessions.md) |

When the agent opens a card or presents a file in Preview, that card pulses in yellow until you hover it. A file the agent presents fullscreen opens as a pulsing tab behind the current one, never taking focus.

The "Workbench" guide under **More › Guides** in the left sidebar walks through the panels, plus Artifacts' folders, versions and dragging files out, with pictures.

## Artifacts

- **Folders**: when there are many files, the agent files deliverables into folders (such as "Reports › Week 1"), and the list shows a collapsible folder tree whose open folders are remembered per conversation. Folders only organize the list; the files stay where they are on disk. To group them differently, just tell Pine.
- **Dragging out**: drag a file from the list into the composer or the file tree, or onto the desktop, Finder or another app.
- **Versions**: each time the agent submits a file, Pine keeps a copy as it was at that moment (files up to 25 MB; up to 1 GB per project, the oldest removed first). A file with more than one version shows a clock badge with the count; right-click it and choose **Version history** to look. Clicking a submitted file in the conversation opens it as it was when submitted.

### Browsing, comparing and restoring versions

The **Version history** menu, in the **Preview** card's header and in the footer of a file tab opened from Artifacts, starts with **Current file**, then lists the kept versions by time, with what the agent said about each submission and its size; the one matching the file on disk is marked **Current**.

Picking a version opens it read-only, with a bar on top where you can:

- Turn on **Compare with current** to see the changes from that version to the current file. Markdown is compared as rendered, with added and removed blocks tinted and changed words marked; in a file tab, turn off **Rendered** to see line changes.
- **Restore** that version (only for files in a read-write project folder). The current file is first kept as a **Before restore** version, so you can always undo.
- Click × for **Back to current file**.

While a file tab shows a version, **Save as…** at the right end of the footer saves a copy of that version anywhere you like.

## Live context (Beta)

On macOS 26 or later, the workbench's **Live context** card transcribes the microphone and/or system audio on this Mac into text for the current conversation; only the text is saved, never the audio. It is not available on Windows yet.

- **Starting**: choose **Microphone** and/or **System audio** and the spoken language, then click **Start**. While it runs, the card shows the time and a waveform of the last few seconds, and you can pause, resume and stop; only one conversation captures at a time. Clicking **Start** on a new session's page creates a conversation in the project the composer shows and starts capturing into it.
- **Identify speakers**: when on, the transcript labels who is talking as "Speaker 1", "Speaker 2" and so on, using models that run on this Mac; labels arrive a few seconds late. Click a label to rename it or merge it into another speaker; **Speakers** in the card's "…" menu manages them all in one place.
- **Live translation**: with translation on, each finished line gets its translation underneath; the target defaults to the interface language and can be changed in the language menu. The model it uses is chosen under **Pine Settings › Models › Live translation model**.
- **With the agent**: each message you send carries the new transcript since your last one, and the agent can read earlier parts itself, so just ask "what are they discussing?". Ask it to "take notes of this class" and it asks for your approval before it starts capturing, then can pause, resume or stop on its own.
- **Deleting**: **Delete live context** in the card's "…" menu permanently deletes this conversation's transcript, speaker names and translations; it can't be undone.

> [!NOTE]
> If microphone or system audio access is off, the card says so; **Open System Settings** takes you to the matching privacy setting. To keep the agent away from live context, turn off **Live Context** in **Pine Settings › Agent › Tools**.

## File previews

Clicking a file in the file tree, the conversation or Artifacts opens a preview tab. Depending on the format, it offers **Rendered** / **Text** views, page navigation, search, zoom, rotate, invert, sheet and layer pickers, and **Open with default application** at the left end of the footer.

### Comments and Details cards

While a file tab is in front, the right sidebar shows cards for that file instead of the session's cards: for project files that can take comments, **Comments** on top and **Details** below; other files show Details alone. It is closed by default; open it with the **Comments** button in the preview's footer (**Details** for files that cannot take comments), the workbench button in the title bar, or `Mod + Alt + B`.

**Details** lists the type, size, modified and created dates, and location, then what the preview measured (encoding, lines, dimensions, duration, pages, rows and columns) and what the format records, such as a document's title, author, application and word count, a photo's camera, date taken and color mode, a recording's codec and tags, an email's sender and recipients, or an archive's entries.

### Enlarging Markdown images

In the Rendered view of a Markdown file, click an image (or focus it and press Enter): the window blurs and the image moves to the middle. The toolbar at the bottom has previous and next, **Fit to window**, zoom out and zoom in; `Mod + scroll` also zooms, and a zoomed image can be dragged around. Click outside the image, the close button or press `Esc` to return.

### Right-click menu for images and video

Right-clicking an image or video in a file preview, an enlarged Markdown image, or an image in a conversation opens the system menu: copy the image, save the image or video, copy the file path (or the address of a web image), show it in Finder (File Explorer on Windows), and on macOS share it.

### Audio and video player

Audio and video play in Pine's own player: a timeline (click or drag to seek), Play/Pause, the current time and length, **Comment on this moment**, **Loop**, **Playback speed**, mute and volume, and for video **Picture in picture** and full screen. See [Keyboard shortcuts](shortcuts.md) for its keys.

## Preview comments

In a preview of a project file, you can write change requests on parts of the file and send them to a session together.

### What you can comment on

| How | Formats |
| --- | --- |
| Selected text | Text, code, Markdown (Text or Rendered view), HTML, Word and other documents (DOCX, DOC, ODT, RTF, Pages), PDF, slides (PPTX, PPT, Keynote), EPUB e-books, email (EML, MSG) |
| Selected cells | Spreadsheets (XLSX, Numbers), CSV / TSV and other data tables, SQLite tables |
| A boxed area | Images, PDF pages, slides, PSD, OFD, Typst, PostScript, draw.io, Mermaid and other diagrams, mind maps |
| A time span | Audio and video |

### How to comment

- **Text and cells**: select, then choose **Comment** in the floating menu or press `Mod + Alt + M`, and type. Enter saves, `Shift + Enter` adds a line, `Esc` cancels.
- **Areas**: click **Comment on area** in the preview's footer and drag a box on an image, page or slide; `Esc` cancels.
- **Time spans**: **Comment on this moment** in the player comments on the current time; to comment on a span, Shift-drag along the timeline, or press `I` at its start and `O` at its end.

Commented text is highlighted in amber, and commented cells and areas are boxed in amber; clicking one shows its comment in the right sidebar.

### Managing and sending

- The **Comments** card lists every comment in document order with its location (such as "Line 12", "Page 3", "B2:D5" or "0:12–0:30"), the quoted text and the comment, with Edit and Delete. A comment whose passage is no longer in the file after it changed is marked **Original text changed**.
- **Send N comments** at the bottom lists the project's session tabs and a new session. Choose one, and the comments go into that session's composer as comment chips (file, location and comment) and are cleared from the preview.
- **Clear all** asks before removing them.

> [!NOTE]
> A file holds up to 50 comments. Comments are kept in memory until they are sent or cleared; they are not kept when Pine quits.
