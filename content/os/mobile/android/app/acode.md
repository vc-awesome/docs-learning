# Acode

## 简介

> Acode is a code editor for android. It is a full featured code editor with syntax highlighting, code completion, snippets, code refactoring, code analysis, and much more.

![F-Droid Version](https://img.shields.io/f-droid/v/com.foxdebug.acode)
![GitHub last commit](https://img.shields.io/github/last-commit/deadlyjack/Acode?color=blue&logo=github)
![Platforms](https://img.shields.io/badge/platforms-Android-blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/deadlyjack/Acode?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/deadlyjack/Acode?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/deadlyjack/Acode?style=social)

## 官方

https://github.com/deadlyjack/Acode - *GitHub - deadlyjack/Acode: Acode - powerful text/code editor for android*

https://acode.app/ - *Acode - Code editor for android*

## 入门指南

### 用户界面

- Edit Menu
- Editor
- File Explorer
- Quick Tools
- Sidebar
- Tab Bar
- Title Bar

## 安装

https://f-droid.org/packages/com.foxdebug.acode/ - *Acode | F-Droid - Free and Open Source Android App Repository*

https://github.com/deadlyjack/Acode/releases - *Releases · deadlyjack/Acode · GitHub*

## 设置

- [App settings](#应用设置)
- [Backup/Restore](#备份恢复)
- [Editor settings](#编辑器设置)
- [Preview settings](#网页预览设置)
- Restore default settings
- [Edit settings.json](#编辑-settingsjson)
- [Formatter](#代码格式化工具)
- [Plugins](#插件)
- [Theme](#主题)

### 应用设置

- 快捷键按钮（共 35 个快捷键）：
    - CTRL/COMMAND 键
    - TAB 键
    - SHIFT 键
    - ALT 键
    - ESCAPE 键
    - WINDOWS/META 键
    - [命令面板](#命令面板和快捷键)
- 快捷工具栏：勾选
- 快捷工具栏触发模式：选择 > touch
- [快捷键](#快捷键)
    - 编辑
    - 重置
- 控制台：选择 > legacy
- 悬浮按钮：勾选
- 打开的文件：选择 > 水平标签栏
    - 设置打开的文件标签栏于何处
- 显示侧边按钮：勾选
- 更改语言：选择 > 中文简体
- 检查文件更改：勾选
- 记住打开过的文件：勾选
- 记住打开过的文件夹：勾选
- 退出前确认：勾选
- 默认文本编码：选择 > UTF-8
- 全屏：不勾选
    - 隐藏主屏幕的标题栏

#### 快捷键

文件名：`.key-bindings.json`

### 备份/恢复

- 备份
- 恢复

### 编辑器设置

- 滚动设置
    - 滚动条大小：选择 > 20
- 制表符宽度：填写 > 2
- 字体大小：填写 > 12px
- 强制换行：勾选
- 打印页边距：填写 > 180（默认：80）
- 显示行号：勾选
- 相对行号：不勾选
- 突出显示空格符：勾选
- [编辑器字体](#字体)：选择 > Fira Code

#### 字体

- Fira Code
- Roboto Mono
- Source Code
- Victor Mono Italic
- Victor Mono Medium
- Cascadia Code
- Proggy Clean
- Jetbrains Mono Bold
- Jetbrains Mono Regular
- Poppins
- Righteous
- Noto Mono

### 网页预览设置

预览模式：选择 > 应用内浏览器（inapp）

### 编辑 settings.json

```json
{
  ...
  "textWrap": true,
  ...
}
```

参考：

1. https://github.com/7HR4IZ3/acode-plugin-workspace - *GitHub - 7HR4IZ3/acode-plugin-workspace: Workspace management plugin for github*

### 代码格式化工具

文件类型：
- Css
- Html
- Javascript
- Json
- Markdown
- Vue

插件：

- [acode-plugin-prettier](#acode-plugin-prettier)

### 主题

- App: Ocean
- Editor: Dracula

## 用法

新增路径： *在屏幕左侧边缘向右滑 > 打开左侧导航栏 > 点击最上方的"文件"图标 > 如果已存在文件夹，长按已存在文件夹 2 秒，等待弹出菜单选项后，选择"关闭"选项 > 点击"打开文件夹"进入文件资源浏览器 > 点击顶部工具栏右侧"+"图标 > 添加路径*

### 命令面板和快捷键

> 点击底部「操作按钮（ActionButton）」“ⵈ”，打开命令面板。

- Open command palette - *打开命令面板* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
- Toggle sidebar - *切换侧边栏* <kbd>Ctrl</kbd> + <kbd>B</kbd>
- Toggle full screen mode - *切换全屏模式* <kbd>F11</kbd>
- Toggle edit menu - *切换编辑菜单* <kbd>F3</kbd>
- Toggle edit menu - *切换文件编辑菜单* <kbd>F4</kbd>
- Toggle quick tools - *切换快捷工具栏*
- Show settings menu - *打开设置页* <kbd>Ctrl</kbd> + <kbd>,</kbd>
- Change language mode - *更改语言模式* <kbd>Ctrl</kbd> + <kbd>M</kbd>
- Open Plugins Page - *打开插件页*
- File Explorer - *文件资源浏览器*
- Find a file - *查找文件* <kbd>Ctrl</kbd> + <kbd>P</kbd>

常用：

- Copy - *复制* <kbd>Ctrl</kbd> + <kbd>C</kbd>
- Cut - *剪切* <kbd>Ctrl</kbd> + <kbd>X</kbd>
- Paste - *粘贴* <kbd>Ctrl</kbd> + <kbd>V</kbd>
- Find - *查找* <kbd>Ctrl</kbd> + <kbd>F</kbd>
- Replace - *替换* <kbd>Ctrl</kbd> + <kbd>R</kbd>
- Undo - *撤销* <kbd>Ctrl</kbd> + <kbd>Z</kbd>
- Redo - *重做* <kbd>Ctrl</kbd> + <kbd>Y</kbd>
- Save current file - *保存文件* <kbd>Ctrl</kbd> + <kbd>S</kbd>
- Save as current file - *另存文件* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>

注释相关：

- Toggle comment - *切换注释* <kbd>Ctrl</kbd> + <kbd>/</kbd>
- Toggle block comment - *切换块注释* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd>

行操作：

- Remove line - *删除行*
- Expand to line - *扩展行* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>
- Select line to start - *选择一行到行首*
- Select line to end - *选择一行到行尾*
- Go to line... - *跳转行...* <kbd>Ctrl</kbd> + <kbd>G</kbd>

折叠相关：

- Fold all - *折叠所有内容*
- Fold all comments - *折叠注释内容*
- Fold other - *折叠其它内容*
- Fold To Level 1
- Fold To Level 2
- Fold To Level 3
- Fold To Level 4
- Fold To Level 5
- Fold To Level 6
- Fold To Level 7
- Fold To Level 8
- Fold - *折叠* <kbd>Alt</kbd> + <kbd>L</kbd>
- Unfold - *展开* <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>
- Unfold all

tab 相关：

- Close current tab. - *关闭当前标签* <kbd>Ctrl</kbd> + <kbd>Q</kbd>
- Close all tabs. - *关闭所有标签* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Q</kbd>
- Open next file tab - *打开下一个文件标签* <kbd>Ctrl</kbd> + <kbd>Tab</kbd>
- Open previous file tab - *打开上一个文件标签* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>

## 插件

https://acode.app/plugins - *Acode - Code editor for android*

https://acode.app/plugin-docs - *Acode - Code editor for android*

1. https://github.com/bajrangCoder/MarkdownCompiler - *GitHub - bajrangCoder/MarkdownCompiler: A markdown compiler & styler plugin for acode*

    ![GitHub last commit](https://img.shields.io/github/last-commit/bajrangCoder/MarkdownCompiler?color=blue&logo=github)

2. https://github.com/7HR4IZ3/acode-plugin-workspace - *GitHub - 7HR4IZ3/acode-plugin-workspace: Workspace management plugin for github*

    ![GitHub last commit](https://img.shields.io/github/last-commit/7HR4IZ3/acode-plugin-workspace?color=blue&logo=github)

主题：

暂无

字体：

暂无

### acode-plugin-lint

https://github.com/deadlyjack/acode-plugin-lint - *GitHub - deadlyjack/acode-plugin-lint: Acode linter plugin.*
[Website](https://acode.app/plugin/acode.plugin.lint)

![GitHub last commit](https://img.shields.io/github/last-commit/deadlyjack/acode-plugin-lint?color=blue&logo=github)

### acode-plugin-prettier

https://github.com/deadlyjack/acode-plugin-prettier - *GitHub - deadlyjack/acode-plugin-prettier: Code formatter plugin for Acode editor for Android* [Website](https://acode.app/plugin/acode.plugin.prettier)

![GitHub last commit](https://img.shields.io/github/last-commit/deadlyjack/acode-plugin-prettier?color=blue&logo=github)

设置：

1. Arrow Parens（箭头括号）：\
   _Include parentheses around a sole arrow function parameter._
   - 选择 > `avoid`
2. Bracket Same Line（括号同一行）：\
   _Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements)._
   - 不勾选 > `false`
3. Bracket Spacing（括号间距）：\
   _Print spaces between brackets in object literals._
   - 勾选 > `true`
4. Embedded Language Formatting（嵌入式语言格式）：\
   _Control whether Prettier formats quoted code embedded in the file._
   - 选择 > `auto`
5. End Of Line（行结束）：\
   _For historical reasons, there exist two common flavors of line endings in text files. That is \n (or LF for Line Feed) and \r\n (or CRLF for Carriage Return + Line Feed)._
   - 选择 > `lf`
6. HTML Whitespace Sensitivity（HTML 空格敏感度）：\
   _Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars._
   - 选择 > `css`
7. Insert Pragma（插入杂注）：\
   _Insert '@format' pragma into the docblock, if none is present._
   - 不勾选 > `false`
8. JSX Single Quote（JSX 单引号）：\
   _Use single quotes instead of double quotes in JSX._
   - 不勾选 > `false`
9. Open logs page on error（出错时打开日志页面）：\
   _Open logs page when an error occurs._
   - 勾选 > `true`
10. Print Width（打印宽度）：\
   _The line length where Prettier will try wrap._
   - 填写 > `80`
11. Prose Wrap（散文包装）：\
   _How to wrap prose._
   - 选择 > `preserve`
12. Quote Props（引用属性）：\
   _Change when properties in objects are quoted._
   - 选择 > `as-needed`
13. Range End（范围结束）：\
   _Format only a segment of a file._
   - 填写 > `Infinity`
14. Range Start（范围开始）：\
   _Format only a segment of a file._
   - 填写 > `0`
15. Require Pragma（必需杂注）：\
   _Require either '@prettier' or '@format' to be present in the file's first docblock comment._
   - 不勾选 > `false`
16. Semicolons（分号）：\
   _Print semicolons at the ends of statements._
   - 勾选 > `true`
17. Single Attribute Per Line（每行单个属性）：\
   _Put each attribute in a separate line._
   - 勾选 > `true`
18. Single Quote（单引号）：\
   _Use single quotes instead of double quotes._
   - 勾选 > `true`
19. Tab Width（制表符宽度）：\
   _Number of spaces per indentation level._
   - 填写 > `2`
20. Trailing Comma（结尾逗号）：\
   _Print trailing commas wherever possible._
   - 选择 > `all`
21. Use Tabs（使用制表符）：\
   _Indent lines with tabs instead of spaces._
   - 不勾选 > `false`
22. Vue Indent Script And Style（Vue 缩进脚本和样式）：\
   _Indent script and style tags in Vue files._
   - 不勾选 > `false`

### acode-plugin-snippets

https://github.com/deadlyjack/acode-plugin-snippets - *GitHub - deadlyjack/acode-plugin-snippets: Acode snippets plugin* [Website](https://acode.app/plugin/acode.plugin.snippets)

![GitHub last commit](https://img.shields.io/github/last-commit/deadlyjack/acode-plugin-snippets?color=blue&logo=github)

Supported languages:

1. [CSS](https://github.com/deadlyjack/acode-plugin-snippets/blob/main/dist%2Fsnippets%2Fcss.snippets)
2. [HTML](https://github.com/deadlyjack/acode-plugin-snippets/blob/main/dist%2Fsnippets%2Fhtml.snippets)
3. [JavaScript](https://github.com/deadlyjack/acode-plugin-snippets/blob/main/dist%2Fsnippets%2Fjavascript.snippets)
4. [Markdown](https://github.com/deadlyjack/acode-plugin-snippets/blob/main/dist%2Fsnippets%2Fmarkdown.snippets)
5. [Sh](https://github.com/deadlyjack/acode-plugin-snippets/blob/main/dist%2Fsnippets%2Fsh.snippets)

## 常见问题

以下链接 1 和 链接 2 在 Acode v1.9.0(936) 和 Markor v2.11.1(148) 有差异：

1. https://www.bypasscensorship.org/zh-hans/ - *BypassCensorship* 🪜
2. https://www.bypasscensorship.org/zh-hans/ - *BypassCensorship* 🪜
