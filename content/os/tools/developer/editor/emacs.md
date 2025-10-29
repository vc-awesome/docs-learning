# Emacs

## 简介

> An extensible, customizable, free/libre text editor — and more.

## 官方

https://www.gnu.org/software/emacs/ - *GNU Emacs - GNU Project*

https://git.savannah.gnu.org/cgit/emacs.git/ - *emacs.git - Emacs source repository*

- https://git.savannah.gnu.org/cgit/emacs.git/?h=feature/android - *emacs.git - Emacs source repository*

## 教程

### 官方教程

https://www.gnu.org/software/emacs/tour/index.html - *GNU Emacs - Guided Tour - GNU Project*

https://www.gnu.org/software/emacs/documentation.html - *GNU Emacs documentation - GNU Project*
- https://www.gnu.org/software/emacs/manual/html_node/emacs/index.html - *Top (GNU Emacs Manual)*
- https://www.gnu.org/software/emacs/manual/html_mono/emacs.html - *GNU Emacs Manual*

### 第三方教程

https://pavinberg.github.io/emacs-book/zh/ - *专业 Emacs 入门*

https://www.emacswiki.org/ - *EmacsWiki: 網站地圖*

### 社区

https://emacs-china.org/ - *Emacs China*

## 安装

https://www.gnu.org/software/emacs/download.html - *GNU Emacs download - GNU Project*

### macOS

https://www.gnu.org/software/emacs/download.html#nonfree - *GNU Emacs download - GNU Project*

### Android

https://www.emacswiki.org/emacs/EmacsOnAndroid - *EmacsWiki: Emacs On Android*

https://f-droid.org/packages/org.gnu.emacs - *Emacs | F-Droid - Free and Open Source Android App Repository*

#### Termux

查看：

```bash
pkg show emacs
```

安装：

```bash
pkg install emacs
```

## 入门指南

### 目录结构

`/data/data/org.gnu.emacs/files` (`~`)
- .emacs.d/
- .emacs

### 快捷键

https://quickref.cn/docs/emacs.html - *Emacs 备忘清单 & emacs cheatsheet & Quick Reference*

select

<https://quickref.cn/docs/emacs.html#标记> - *Emacs 备忘清单 & emacs cheatsheet & Quick Reference*

<kbd>C</kbd>-<kbd>SPC</kbd> <kbd>M</kbd>-<kbd>b</kbd> - 向光标前标记一个单词

<kbd>C</kbd>-<kbd>SPC</kbd> <kbd>M</kbd>-<kbd>f</kbd> - 向光标后标记一个单词

<kbd>M</kbd>-<kbd>h</kbd> - 标记段落

copy

<kbd>M</kbd>-<kbd>w</kbd>

paste

<kbd>C</kbd>-<kbd>y</kbd>

help

- <kbd>C</kbd>-<kbd>h</kbd> <kbd>t</kbd> - 打开教程
- <kbd>C</kbd>-<kbd>h</kbd> <kbd>C</kbd>-<kbd>h</kbd> - 查看所有帮助功能的列表
- <kbd>C</kbd>-<kbd>h</kbd> <kbd>k</kbd> - 查看菜单项的完整命令名称和文档 [Via](https://www.gnu.org/software/emacs/manual/html_node/emacs/Menu-Bar.html)

### 用户界面

https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Screen - *GNU Emacs Manual*

https://www.gnu.org/software/emacs/manual/html_node/emacs/Screen.html - *Screen (GNU Emacs Manual)*

- Frame - 表示 Emacs 占据的图形窗口或终端屏幕。
- menu bar - 菜单栏
- tool bar - 工具栏
- window - 框架的主要区域，在工具栏下方（如果存在）和回显区域上方
- scroll bar - 滚动条
- mode line - 模式行
- echo area - 回显区域
- buffer - 缓冲区

### 命令

Keyboard

- <kbd>M</kbd> 对应键盘 <kbd>Alt</kbd>
- <kbd>C</kbd> 对应键盘 <kbd>Ctrl</kbd>
- <kbd>RET</kbd> 对应键盘 <kbd>Return</kbd>

执行命令：<kbd>M</kbd> + <kbd>x</kbd>

- `dired` - 文件管理器
- `shell`
- `man`
- `list-packages`

搜索和替换

<kbd>M</kbd>-<kbd>x</kbd> `query-replace` 或者 <kbd>M</kbd>-<kbd>%</kbd>

### 文件管理

<kbd>M</kbd>-<kbd>x</kbd> `recover this file`

https://www.gnu.org/software/emacs/manual/html_node/emacs/Dired-Updating.html - *Dired Updating (GNU Emacs Manual)*

<kbd>M</kbd>-<kbd>x</kbd> `revert-buffer`

### 工具

#### Ediff

https://www.gnu.org/software/emacs/manual/html_mono/ediff.html - *Ediff User’s Manual*

https://blog.csdn.net/hmsiwtv/article/details/16901561 - *Emacs 之 ediff 学习_emacs ediff-CSDN博客*

### 插件

安装方式：

1. 手动安装
2. 使用 package-install 安装

#### 包管理器

参考：

1. https://www.cnblogs.com/k4nz/p/14508524.html - *「GNU Emacs」- 包管理系统（ELPA, Emacs Lisp Package Archive） @20210309 - 研究林纳斯写的 - 博客园*
2. <https://www.emacswiki.org/emacs/ELPA_(中文)> - *EmacsWiki: ELPA (中文)*
3. https://nyk.ma/posts/emacs-write-your-own/ - *Emacs 自力求生指南 ── 来写自己的配置吧 - Nayuki's Archive*
4. https://cloud.tencent.com/developer/article/1966582 - *Emacs的包管理器的使用-腾讯云开发者社区-腾讯云*

##### ELPA

官方：

1. https://elpa.gnu.org/ - *GNU Emacs Lisp Package Archive*
2. https://elpa.gnu.org/devel/index.html - *GNU-devel ELPA Packages*

镜像站：

1. https://mirrors.tuna.tsinghua.edu.cn/help/elpa/ - *elpa | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror*

###### org

> Outline-based notes management and organizer

官方：

https://orgmode.org/ - *Org mode for GNU Emacs*

安装：

https://elpa.gnu.org/packages/org.html - *GNU ELPA - org*

###### YASnippet

[Yet another snippet extension](https://joaotavora.github.io/yasnippet/) - *YASnippet is a template system for Emacs.* [GitHub Repo](https://github.com/joaotavora/yasnippet)

![GitHub last commit](https://img.shields.io/github/last-commit/joaotavora/yasnippet?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/joaotavora/yasnippet?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/joaotavora/yasnippet?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/joaotavora/yasnippet?style=social)

安装：

https://elpa.gnu.org/packages/yasnippet.html - *GNU ELPA - yasnippet*

快速入门：

1. 全局启用 YASnippet：<kbd>M</kbd>-<kbd>x</kbd> `yas-global-mode`

参考：

1. https://www.cnblogs.com/halberd-lee/p/10784494.html - *Emacs yasnippet - halberd.lee - 博客园*
2. https://www.eoebook.com/posts/how-to-use-yasnippet/ - *yasnippet使用简单说明 - 个人知识管理*
3. https://www.coder.work/article/8449398 - *emacs - 如何使用 yasnippet 和 abbrev 进行自动完成工作？ - IT工具网*

##### MELPA

官方：

1. https://melpa.org/ - *MELPA*

###### el-get

> Manage the external elisp bits and pieces upon which you depend!

![GitHub last commit](https://img.shields.io/github/last-commit/dimitri/el-get?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/dimitri/el-get?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/dimitri/el-get?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/dimitri/el-get?style=social)

官方：

https://github.com/dimitri/el-get - *GitHub - dimitri/el-get: Manage the external elisp bits and pieces upon which you depend!*

安装：

https://melpa.org/#/el-get - *el-get - MELPA*

###### jsdoc

> Insert JSDoc comments easily with Emacs.

![GitHub last commit](https://img.shields.io/github/last-commit/isamert/jsdoc.el?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/isamert/jsdoc.el?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/isamert/jsdoc.el?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/isamert/jsdoc.el?style=social)

官方：

https://github.com/isamert/jsdoc.el - *GitHub - isamert/jsdoc.el: Insert JSDoc comments easily with Emacs*

安装：

https://melpa.org/#/jsdoc - *jsdoc - MELPA*

### 框架

#### doomemacs

https://github.com/doomemacs/doomemacs - *GitHub - doomemacs/doomemacs: An Emacs framework for the stubborn martian hacker*

## 设置

https://emacs-china.org/t/centaur-markdown/12170 - *[Centaur] markdown 预览支持语法高亮和各类图 - Emacs-general - Emacs China*

## 用法

### 正则表达式

1. https://www.gnu.org/software/emacs/manual/html_node/emacs/Regexps.html - *Regexps (GNU Emacs Manual)*
2. https://emacs-china.org/t/elisp/2349/39 - *elisp 正则表达式如何匹配中文和英文 - Emacs-general - Emacs China*
3. https://segmentfault.com/q/1010000008383759 - *emacs 如何使用正则查找替换匹配组？ - SegmentFault 思否*
4. https://blog.csdn.net/borderj/article/details/83170259 - *『Emacs 』Emacs中的正则表达式语法-CSDN博客*
5. https://blog.csdn.net/zzllabcd/article/details/5895952 - *Emacs 正则表达式-CSDN博客*
6. https://www.gnu.org/software/emacs/manual/html_node/emacs/Regexp-Replace.html - *Regexp Replace (GNU Emacs Manual)*
7. https://emacs-china.org/t/topic/16397 - *怎么用正则替换 (.*) $1 求正确打开方式 - Emacs-general - Emacs China*
    - https://www.emacswiki.org/emacs/RegularExpression - *EmacsWiki: Regular Expression*

## 常见问题解答

1. https://blog.csdn.net/gyzhe/article/details/46128239 - *[Emacs学习笔记]选中文字_emacs选中文本-CSDN博客*

## 参考

1. https://cn.linux-console.net/?p=12683 - *在 Linux 上编辑文件的 Emacs 终极指南*
2. https://cn.linux-console.net/?p=30365 - *在 Linux 中使用 Emacs 文本编辑器的初学者指南*
3. https://blog.csdn.net/debugfan/article/details/65948515 - *Emacs的剪贴、复制和粘贴_emacs复制粘贴快捷键-CSDN博客*
4. https://www.emacswiki.org/emacs/CopyAndPaste - *EmacsWiki: Copy And Paste*
5. https://www.cnblogs.com/yongjiuzhizhen/p/3419954.html - *Emacs复制粘贴等常用命令 - 永久指针 - 博客园*
6. https://blog.csdn.net/txl199106/article/details/53065220 - *emacs 入门教程，菜单汉化，配置文件等杂乱文章_emacs设置中文菜单-CSDN博客*
