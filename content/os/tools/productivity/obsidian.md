# Obsidian

## 简介

> Obsidian is the private and flexible note‑taking app that adapts to the way you think.

![GitHub last commit](https://img.shields.io/github/last-commit/obsidianmd/obsidian-releases?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/obsidianmd/obsidian-releases?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/obsidianmd/obsidian-releases?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/obsidianmd/obsidian-releases?style=social)

## 官方

https://obsidian.md/ - *Obsidian - Sharpen your thinking*

https://github.com/obsidianmd - *Obsidian.md · GitHub*

## 教程

### 官方教程

1. https://help.obsidian.md/ - *Home - Obsidian Help* [GitHub Repo](https://github.com/obsidianmd/obsidian-help)

    ![GitHub last commit](https://img.shields.io/github/last-commit/obsidianmd/obsidian-help?logo=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/obsidianmd/obsidian-help?style=social)

    1. <https://publish.obsidian.md/help-zh/由此开始> - *由此开始 - Obsidian 中文帮助 - Obsidian Publish*

2. https://docs.obsidian.md/Home - *Home - Developer Documentation* [GitHub Repo](https://github.com/obsidianmd/obsidian-api)

    ![GitHub last commit](https://img.shields.io/github/last-commit/obsidianmd/obsidian-api?logo=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/obsidianmd/obsidian-api?style=social)

### 第三方教程

https://github.com/kmaasrud/awesome-obsidian - *GitHub - kmaasrud/awesome-obsidian: 🕶️ Awesome stuff for Obsidian*

![GitHub last commit](https://img.shields.io/github/last-commit/kmaasrud/awesome-obsidian?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/kmaasrud/awesome-obsidian?style=social)

## 安装

https://obsidian.md/download - *Download - Obsidian*

- 支持 Windows, macOS（[Homebrew](https://formulae.brew.sh/cask/obsidian)）, Linux, Android（[GitHub Releases](https://github.com/obsidianmd/obsidian-releases/releases/), [Google Play](https://play.google.com/store/apps/details?id=md.obsidian)）, iOS（[App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)）

### Web Clipper

https://obsidian.md/clipper - *Obsidian Web Clipper*

- 支持 Chrome, Firefox, Edge, Safari

### Bookmarklet

[Obsidian Web Clipper &mdash; Steph Ango](https://stephango.com/obsidian-web-clipper) - *A bookmarklet that saves web pages to Markdown files in Obsidian.*

## 入门指南

### Markdown Support

https://www.markdownguide.org/tools/obsidian/ - *Obsidian Markdown Reference | Markdown Guide*

### 目录结构

```tree
{vault}/.obsidian/
├── plugins/
│   ├── {plugin_name}/
│   │   ├── data.json
│   │   ├── main.js
│   │   ├── manifest.json
│   │   └── styles.css
│   └── ...
├── themes/
│   ├── {theme_name}/
│   └── ...
├── app.json
├── appearance.json #外观
├── backlink.json #反向链接
├── command-palette.json #命令面板
├── community-plugins.json #第三方插件
├── core-plugins.json #核心插件
├── types.json #属性列表
├── workspaces.json #工作区
└── ...
```

```tree
{vault}/.trash/
└── ...
```

注：`vault` 指仓库名称。

### 用户界面

![commander overview](https://user-images.dgithub.xyz/46250921/177593938-2c3aae81-1bf6-45df-b06a-e51a8b4e4a0e.svg)

<small>*插图来源于：[GitHub - phibr0/obsidian-commander: Commander - Obsidian Plugin | Add Commands to every part of Obsidian's user interface](https://github.com/phibr0/obsidian-commander)*</small>

- [侧边栏](#侧边栏)
- [功能区](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E5%8A%9F%E8%83%BD%E5%8C%BA)
- [外观](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E5%A4%96%E8%A7%82)
- [工作区](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E5%B7%A5%E4%BD%9C%E5%8C%BA)
- [弹出窗口](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E5%BC%B9%E5%87%BA%E7%AA%97%E5%8F%A3)
- [快捷键](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E5%BF%AB%E6%8D%B7%E9%94%AE)
- [拖放](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E6%8B%96%E6%94%BE)
- [标签页](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E6%A0%87%E7%AD%BE%E9%A1%B5)
- [状态栏](#状态栏)
- [语言设置](https://publish.obsidian.md/help-zh/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2/%E8%AF%AD%E8%A8%80%E8%AE%BE%E7%BD%AE)
- [移动端应用](#移动端应用)

#### 侧边栏

<https://publish.obsidian.md/help-zh/用户界面/侧边栏> - *侧边栏 - Obsidian 中文帮助 - Obsidian Publish*

#### 状态栏

<https://publish.obsidian.md/help-zh/用户界面/状态栏> - *状态栏 - Obsidian 中文帮助 - Obsidian Publish*

#### 移动端应用

<https://publish.obsidian.md/help-zh/快速入门/移动端应用> - *移动端应用 - Obsidian 中文帮助 - Obsidian Publish*

- 移动端工具栏
- 导航栏

### 翻译

Settings - 设置
- Options - 选项
  - General - 关于
    - Account - 账户
    - Advanced - 高级
  - Editor - 编辑器
    - Always focus new tabs - 始终聚焦新标签页
      - When you open a link in a new tab, switch to it immediately. - 当你在新标签页打开链接，立即切换至新标签页。
    - Default view for new tabs - 新标签页的默认视图
    - Default editing mode - 默认编辑模式
    - Show editing mode in status bar - 视图状态
    - Display - 显示
      - Show line numbers - 显示行号
      - Show indentation guides - 显示缩进参考线
    - Behavior - 行为
      - Indent visual width - 制表符宽度
    - Advanced - 高级
  - Toolbar - 移动端工具栏
    - 快捷命令
    - Manager toolbar options - 管理工具栏
    - More toolbar options - 更多工具栏选项
    - 添加命令
  - Files and links - 文件与链接
    - 使用 Wiki 链接
    - 检测所有类型文件
    - Advanced - 高级
  - Appearance - 外观
    - Font - 字体
    - Interface - 界面
        - 显示页内标题
            - 在笔记页面内显示笔记标题。
        - 功能区
            - 功能区按钮
    - CSS snippets - CSS 代码片段
  - Hotkeys - 快捷键
  - Core plugins - 核心插件
    - Plugin list - 插件列表
        - Audio recorder - 录音机
        - Backlinks - 反向链接
        - Bookmarks - 书签
        - Canvas - 白板
        - Command palette - 命令面板
        - Daily notes - 日记
        - File recovery - 文件恢复
        - Files - 文件列表
        - Format converter - 格式转换器
        - Graph view - 关系图谱
        - Note composer - 笔记重组
        - Outgoing links - 出链
        - Outline - 大纲
        - Page preview - 页面预览
        - Properties view - 属性列表
        - Publish - 发布
        - Quick switcher - 快速切换
        - Random note - 漫游笔记
        - Search - 搜索
        - Slash commands - 斜杠命令
        - Slides - 幻灯片
        - Sync - 同步
        - Tags view - 标签列表
        - Templates - 模板
        - Unique note creator - 时间戳笔记生成器
        - Word count - 字数统计
        - Workspaces - 工作区
  - Community plugins - 第三方插件
    - Installed plugins - 已安装插件
- Core plugins - 核心插件
  - Backlinks - 反向链接
  - Command palette - 命令面板
  - Quick switcher - 快速切换
  - File recovery - 文件恢复
  - Templates - 模板
  - Daily notes - 日记
  - Canvas - 白板
  - Note composer - 笔记重组
  - Page preview - 页面预览
- Community plugins - 第三方插件

### 主题

设置 > 选项-外观 > 主题

主题列表：

1. https://github.com/kepano/obsidian-minimal - *GitHub - kepano/obsidian-minimal: A distraction-free and highly customizable theme for Obsidian.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/kepano/obsidian-minimal?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kepano/obsidian-minimal?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/kepano/obsidian-minimal?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/kepano/obsidian-minimal?style=social)

### 插件

https://obsidian.md/plugins - *Plugins - Obsidian*

#### 核心插件

设置 > 选项-核心插件

1. 录音机
2. 反向链接
3. 书签
4. 白板
5. [命令面板](#命令面板)
6. 日记
7. 文件恢复
8. [文件列表](#文件列表)
9. Markdown 格式转换器
10. 关系图谱
11. 笔记重组
12. 出链
13. 大纲
14. [页面预览](#页面预览)
15. [属性列表](#属性列表)
16. 发布
17. 快速切换
18. 漫游笔记
19. [搜索](#搜索)
20. 斜杠命令
21. 幻灯片
22. 同步
23. [标签列表](#标签列表)
24. [模板](#模板)
25. 时间戳笔记生成器
26. 字数统计
27. 工作区

##### 命令面板

<https://publish.obsidian.md/help-zh/核心插件/命令面板> - *命令面板 - Obsidian 中文帮助 - Obsidian Publish*

##### 文件列表

<https://publish.obsidian.md/help-zh/核心插件/文件列表> - *文件列表 - Obsidian 中文帮助 - Obsidian Publish*

##### 属性列表

<https://publish.obsidian.md/help-zh/核心插件/属性列表> - *属性列表 - Obsidian 中文帮助 - Obsidian Publish*

##### 搜索

<https://publish.obsidian.md/help-zh/核心插件/搜索> - *搜索 - Obsidian 中文帮助 - Obsidian Publish*

##### 标签列表

<https://publish.obsidian.md/help-zh/核心插件/标签列表> - *标签列表 - Obsidian 中文帮助 - Obsidian Publish*

##### 模板

<https://publish.obsidian.md/help-zh/核心插件/模板> - *模板 - Obsidian 中文帮助 - Obsidian Publish*

##### 页面预览

<https://publish.obsidian.md/help-zh/核心插件/页面预览> - *页面预览 - Obsidian 中文帮助 - Obsidian Publish*

#### 第三方插件

设置 > 选项-第三方插件

插件列表（8个）：

1. https://github.com/friebetill/obsidian-file-diff - *GitHub - friebetill/obsidian-file-diff: View the difference between two files within Obsidian.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/friebetill/obsidian-file-diff?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/friebetill/obsidian-file-diff?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/friebetill/obsidian-file-diff?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/friebetill/obsidian-file-diff?style=social)

2. https://github.com/chenshutian9610/obsidian-pagescroll-plugin - *GitHub - chenshutian9610/obsidian-pagescroll-plugin: Obsidian Page Up|Down|Top|Bottom*

    ![GitHub last commit](https://img.shields.io/github/last-commit/chenshutian9610/obsidian-pagescroll-plugin?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/chenshutian9610/obsidian-pagescroll-plugin?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/chenshutian9610/obsidian-pagescroll-plugin?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/chenshutian9610/obsidian-pagescroll-plugin?style=social)

3. https://github.com/cloudhao1999/obsidian-scroll-to-top-plugin - *GitHub - cloudhao1999/obsidian-scroll-to-top-plugin: This is a plugin for Obsidian that adds a button to scroll to the top of the current note (Not just that).*

    ![GitHub last commit](https://img.shields.io/github/last-commit/cloudhao1999/obsidian-scroll-to-top-plugin?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/cloudhao1999/obsidian-scroll-to-top-plugin?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/cloudhao1999/obsidian-scroll-to-top-plugin?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/cloudhao1999/obsidian-scroll-to-top-plugin?style=social)

4. https://github.com/ebullient/obsidian-show-whitespace-cm6 - *GitHub - ebullient/obsidian-show-whitespace-cm6: Show leading/trailing whitespace*

    ![GitHub last commit](https://img.shields.io/github/last-commit/ebullient/obsidian-show-whitespace-cm6?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ebullient/obsidian-show-whitespace-cm6?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ebullient/obsidian-show-whitespace-cm6?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/ebullient/obsidian-show-whitespace-cm6?style=social)

5. https://github.com/phibr0/obsidian-emoji-shortcodes - *GitHub - phibr0/obsidian-emoji-shortcodes: Emoji Shortcodes - Obsidian Plugin | Adds Support for Emoji Shortcodes to Obsidian*

    ![GitHub last commit](https://img.shields.io/github/last-commit/phibr0/obsidian-emoji-shortcodes?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/phibr0/obsidian-emoji-shortcodes?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/phibr0/obsidian-emoji-shortcodes?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/phibr0/obsidian-emoji-shortcodes?style=social)

6. https://github.com/guopenghui/obsidian-quiet-outline - *GitHub - guopenghui/obsidian-quiet-outline: Improving experience of outline in Obsidian*

    ![GitHub last commit](https://img.shields.io/github/last-commit/guopenghui/obsidian-quiet-outline?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/guopenghui/obsidian-quiet-outline?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/guopenghui/obsidian-quiet-outline?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/guopenghui/obsidian-quiet-outline?style=social)

7. https://github.com/phibr0/obsidian-commander - *GitHub - phibr0/obsidian-commander: Commander - Obsidian Plugin | Add Commands to every part of Obsidian's user interface*

    ![GitHub last commit](https://img.shields.io/github/last-commit/phibr0/obsidian-commander?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/phibr0/obsidian-commander?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/phibr0/obsidian-commander?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/phibr0/obsidian-commander?style=social)

8. https://github.com/isaaclyman/novel-word-count-obsidian - *GitHub - isaaclyman/novel-word-count-obsidian: Obsidian plugin. Displays a word count or other statistic for each file, folder and vault in the File Explorer pane.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/isaaclyman/novel-word-count-obsidian?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/isaaclyman/novel-word-count-obsidian?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/isaaclyman/novel-word-count-obsidian?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/isaaclyman/novel-word-count-obsidian?style=social)

安装教程：

1. https://www.bilibili.com/read/mobile?id=20977735 - *手机版obsidian插件安装（remotely save为例） - 哔哩哔哩*

2. https://forum-zh.obsidian.md/t/topic/134 - *玩转Obsidian的保姆级别教程：如何安装插件？ By Garrett（Wyatt） - 经验分享 - Obsidian 中文论坛*

### Obsidian URI

<https://publish.obsidian.md/help-zh/扩展+Obsidian/Obsidian+URI> - *Obsidian URI - Obsidian 中文帮助 - Obsidian Publish*

## 快速入门

操作步骤：

1. [安装](#安装)

## 设置

### 选项

- 编辑器
    - 始终聚焦新标签页：开启
        - 当你在新标签页打开链接，立即切换至新标签页。
    - 新标签页的默认视图：Reading view - 阅读视图
    - 默认编辑模式：Source mode - 源码模式
    - 视图状态：关闭
    - 显示
        - 显示行号：开启
        - 显示缩进参考线：开启
    - 行为
        - 制表符宽度：4（默认：4）
    - 高级
        - 自动转换 HTML：开启
        - Vim 模式：开启
            - 开启问题“退出而不保存”对应的命令：`:q!`
- 移动端工具栏
    - 快捷命令：打开命令面板
- 文件与链接
    - 使用 Wiki 链接：关闭
    - 检测所有类型文件：开启
- 外观
    - 界面
        - 显示页内标题：关闭
            - 在笔记页面内显示笔记标题。
        - 功能区
            - 功能区按钮：打开功能区
- 核心插件
    - 插件列表
        - 录音机（关闭）
        - 反向链接（开启，选项）
        - 书签（开启）
        - 白板（开启，选项）
        - 命令面板（开启，选项）
        - 日记（开启，选项）
        - 文件恢复（开启，选项）
        - 文件列表（开启）
        - 格式转换器（关闭）
        - 关系图谱（开启）
        - 笔记重组（开启，选项）
        - 出链（开启）
        - 大纲（开启）
        - 页面预览（开启）
        - 属性列表（开启）
        - 发布（关闭）
        - 快速切换（开启，选项）
        - 漫游笔记（关闭）
        - 搜索（开启）
        - 斜杠命令（开启）
        - 幻灯片（关闭）
        - 同步（关闭，选项）
        - 标签列表（开启）
        - 模板（开启，选项）
        - 时间戳笔记生成器（关闭，选项）
        - 字数统计（开启）
        - 工作区（开启）
- 第三方插件
    - 安全模式：关闭

### 核心插件

- 反向链接
- 命令面板
- 快速切换
- 文件恢复
- 模板
- 日记
- 时间戳笔记生成器
- 同步
- 白板
- 笔记重组
- 页面预览

## 常见问题

暂无

## 附录

### 参考

1. https://mp.weixin.qq.com/s/2UVkpplt5pe6FKaQCK8Ddg - *知识管理工具 Obsidian 完整指南和插件推荐*
