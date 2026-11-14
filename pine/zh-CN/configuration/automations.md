---
title: "自动化、Skills 与 MCP"
description: "无人值守的自动化任务、可复用的 Skills，以及接入外部工具的 MCP 服务器。"
order: 5
---

# 自动化、Skills 与 MCP

这三个管理器都在左侧栏顶部的 **更多功能（More）** 菜单里，也可以用快捷键打开。每个管理器都有 **和 Pine 协作管理（Manage with Pine）**：它会开一个新会话，输入框里已经启用了相应的创作工具，你用对话描述需求，Pine 帮你写好。

## 自动化

**自动化（Automations）**（`Mod + U`）是 Pine 在到点、文件变化或网站更新时自己去做的工作。最简单的创建方式是在对话里告诉 Pine 你想自动完成什么，它会弹出自动化审批卡片，列出触发条件、它会读写和访问的内容以及警告，由你批准。

触发方式：**定时（Schedule）**、**文件夹变化（Folder change）**、**系统事件（System event）**、**网站或订阅检查（Website or feed check）**、**手动（Manual）**，也可以组合多个触发。

管理器分三个标签页：

- **动态（Activity）**：每次运行的记录和状态，例如 **运行中（Running）**、**有发现（Found something）**、**没有新内容（Nothing new）**、**失败（Failed）**。可以 **全部标为已读（Mark all as read）**，或勾选 **显示没有新内容的运行（Show runs with nothing new）**。打开一次运行即打开它的会话。
- **自动化（Automations）**：每个自动化的触发条件和权限，状态为 **开启（On）**、**关闭（Off）** 或 **已暂停（Paused）**；可以 **立即运行（Run now）**、以 JSON **编辑定义（Edit definition）** 并 **检查（Check）**，或删除。
- **密钥（Secrets）**：自动化可以使用的值，例如 API 令牌。它们在这台电脑上加密保存，只交给引用它们的自动化，并在智能体读到的内容中隐去；只能在这台电脑的 Pine 桌面端修改。

每次运行都是项目里的一个会话，带工作流图标。

> [!NOTE]
> 自动化只在 Pine 运行时工作。希望关闭窗口后继续运行，请在 **通用（General）** 中开启 **在后台继续运行（Keep running in the background）**。

## Skills

**Skills**（`Mod + S`）是可复用的工作方法：一份说明，告诉智能体某类工作该怎么做，以及可以用哪些工具。

- **全局（Global）** Skill 对所有项目可用，但需要在每个项目里单独打开开关；**项目（Project）** Skill 只属于当前项目。
- 可以新建、编辑、按项目启用或删除。

## MCP 服务器

**MCP 服务器（MCP servers）**（`Mod + /`）通过 MCP 协议把外部工具接入智能体。每个服务器可以设为 **所有项目（All projects）** 可用或只在 **当前项目（Project）** 可用；可以添加、编辑、启用、移除和刷新状态。

> [!WARNING]
> 本地 MCP 服务器以你的用户权限在 Pine 沙箱之外运行。所以智能体新增、修改、重命名或启用 MCP 服务器时，无论处于哪种审批模式都会先问你，卡片会写明它运行的命令或连接的地址。只添加你信任的服务器。
