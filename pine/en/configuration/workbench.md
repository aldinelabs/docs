---
title: "Workbench and file previews"
description: "The workbench panels, file details, preview comments, the audio and video player, and enlarging images."
order: 4
---

# Workbench and file previews

## Workbench

The workbench is the panel on the right of the window (`Mod + Alt + B` shows or hides it), kept per session. It holds up to two cards stacked top and bottom, with a handle between them; drag its leading edge to change its width. Each card header has a panel switcher, **Open in tab**, **Add card** and a close button.

| Panel | Contents |
| --- | --- |
| **Artifacts** | The session's deliverables: the result files the agent submitted, newest first, with a title and a one-line description. Files the agent only showed to report progress or compare are not listed |
| **Background processes** | Processes the agent started, with their output |
| **Preview** | The file the agent last presented, or one picked from Artifacts |
| **Files** | The project's file tree, with each folder's access |
| **Side chat** | A read-only conversation about the current session; see [Working with sessions](sessions.md) |

When the agent opens a card or presents a file in Preview, that card pulses in yellow until you hover it. A file the agent presents fullscreen opens as a pulsing tab behind the current one, never taking focus.

## File previews

Clicking a file in the file tree, the conversation or Artifacts opens a preview tab. Depending on the format, it offers **Rendered** / **Text** views, page navigation, search, zoom, rotate, invert, sheet and layer pickers, and **Open with default application**.

### Details and Comments cards

While a file tab is in front, the right sidebar shows two cards for that file instead of the session's cards: **Details** on top and **Comments** below (for project files that can take comments). It is closed by default; open it with the **Comments** button in the preview's footer (**Details** for files that cannot take comments), the workbench button in the title bar, or `Mod + Alt + B`.

**Details** lists the type, size, modified and created dates, and location, then what the preview measured (encoding, lines, dimensions, duration, pages, rows and columns) and what the format records, such as a document's title, author, application and word count, a photo's camera, date taken and color mode, a recording's codec and tags, an email's sender and recipients, or an archive's entries.

### Enlarging Markdown images

In the Rendered view of a Markdown file, click an image (or focus it and press Enter): the window blurs and the image moves to the middle. The toolbar at the bottom has previous and next, **Fit to window**, zoom out and zoom in; `Mod + scroll` also zooms, and a zoomed image can be dragged around. Click outside the image, the close button or press `Esc` to return.

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
