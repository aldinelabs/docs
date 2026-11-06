---
title: "常见问题"
description: "安装、连接模型和使用中最常遇到的问题。"
order: 2
---

# 常见问题

**打开 Pine 时 macOS 说"无法验证开发者"或"已损坏"。**
见[安装 → macOS](../getting-started/install.md#macos)：右键打开，或在"隐私与安全性"里点"仍要打开"，必要时用 `xattr` 命令去掉隔离标记。

**Windows 一直停在启动阶段 / 没有出现主窗口。**
首次启动要配置沙箱，需要在 UAC 弹窗里点"是"。如果之前拒绝过，完全关闭 Pine 后重新启动再允许一次。

**提示没有可用模型，或发送后无响应。**
到 **Pine 设置（Pine Settings） → 模型（Models）** 确认已经配置了提供商且选中了模型；检查 API Key 是否填对、账户是否有余额；确认你的网络能访问对应服务商。

**发送后报网络错误或超时。**
多数是网络问题：确认能打开服务商官网，必要时为系统配置可用的代理后重启 Pine。

**费用涨得比预期快。**
在 Context usage 里查看本次会话的费用，并设置 **会话成本上限（Session cost limit）**。长会话可以点 **立即压缩上下文（Compact context now）** 压缩上下文，或新开一个会话。

**Agent 说没有权限访问某个文件。**
它只能访问项目授权的文件夹。到 **Pine 设置（Pine Settings）→ 项目管理（Projects）→ 编辑（Edit）** 添加该文件夹，并按需选择"只读"或"读写"。

**Agent 修改了不该修改的文件。**
关闭审批更宽松的模式，切回 **让我过目（Let Me Review）**；重要文件先备份，或把资料文件夹设为"只读"。

**想反馈问题。**
到 GitHub 提交 Issue：https://github.com/aldinelabs/pine/issues 。请附上 Pine 版本号、系统版本、问题现象，以及不含敏感信息的截图。**不要**在 Issue 里贴 API Key。
