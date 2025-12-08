# Homebrew

## 简介

> <img src="https://brew.sh/assets/img/homebrew.svg" alt="package icon" align="left" width="28" hspace="10" vspace="0"> The missing package manager for macOS (or Linux). Homebrew is the easiest and most flexible way to install the UNIX tools Apple didn´t include with macOS. It can also install software not packaged for your Linux distribution without requiring **sudo**.

![GitHub last commit](https://img.shields.io/github/last-commit/Homebrew/brew?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Homebrew/brew?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Homebrew/brew?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Homebrew/brew?style=social)

## 官方

Website:

1. https://brew.sh/ - *Homebrew — The Missing Package Manager for macOS (or Linux)*

2. https://brew.sh/zh-cn/ - *macOS（或 Linux）缺失的软件包的管理器 — Homebrew*

文档：

- https://docs.brew.sh/ - *Documentation — Homebrew Documentation*

FAQ：

- https://docs.brew.sh/FAQ - *FAQ (Frequently Asked Questions) — Homebrew Documentation*

GitHub:

- https://github.com/Homebrew - *Homebrew · GitHub*

## 安装

### macOS

https://docs.brew.sh/Installation - *Installation — Homebrew Documentation*

方式一：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

方式二：

https://github.com/Homebrew/brew/releases/latest - *Homebrew's latest GitHub release*

### Linux

https://docs.brew.sh/Installation#linux-or-windows-10-subsystem-for-linux - *Installation — Homebrew Documentation*

## 快速入门

操作步骤：

1. [安装](#安装)
2. [设置](#设置)
    1. [镜像源](#镜像源)

## 入门指南

### 目录结构

```tree
root_folder/
├── opt/
│   └── homebrew/
│       └── Cellar/
└── usr/
    └── local/
        └── Cellar/
```

软件包目录:

1. `/opt/homebrew/Cellar/`
2. `/usr/local/Cellar/`

参考：

1. https://blog.csdn.net/chuichuanqin0793/article/details/101049298 - *homebrew不升级指定软件版本-CSDN博客*

### 命令

1. https://docs.brew.sh/Manpage - *brew(1) – The Missing Package Manager for macOS (or Linux) — Homebrew Documentation*
2. https://wangchujiang.com/reference/docs/homebrew.html - *Homebrew 备忘清单 & homebrew cheatsheet & Quick Reference*

`brew`

- Outputs the usage instructions for brew command. Equivalent to brew --help command. - *输出 brew 命令的使用说明。 等同于 brew -help 命令。*

  `brew help` [COMMAND]

- Show lists of built-in and external commands. - *显示内置和外部命令列表。*

  `brew commands`

- 查看 brew 命令手册

  `man brew` (*在线手册：[man brew documentation](https://docs.brew.sh/Manpage)*)

- 查看 brew 版本信息

  `brew -v`

  `brew --version`

#### config

- Show Homebrew and system configuration info useful for debugging. If you file a bug report, you will be required to provide this information. - *显示对调试有用的 Homebrew 和系统配置信息。 如果您提交错误报告，则需要提供这些信息。*

  `brew config`

#### info

- Display brief statistics for your Homebrew installation. If a formula or cask is provided, show summary of information about it. - *显示 Homebrew 安装的简要统计数据。 如果提供了 formula 或 cask，则显示其信息摘要。*

  `brew info` [FORMULA|CASK...]

#### install

- Install formula. formula is usually the name of the formula to install, but it has other syntaxes which are listed in the SPECIFYING FORMULAE section. - *安装 formula。formula 通常是要安装的 formula 的名称，但也有其他语法，详见 SPECIFYING FORMULAE 部分。*

  `brew install` [FORMULA|CASK...]

#### list

- List all installed formulae. - *列出所有已安装的 formulae。*

  `brew list` [FORMULA|CASK...]

  `brew ls` [FORMULA|CASK...]

#### search

- Perform a substring search of cask tokens and formula names for text. If text is flanked by slashes, it is interpreted as a regular expression. - *对 cask 标记和 formula 名称的文本进行子串搜索。 如果文本两侧有斜线，则将其解释为正则表达式。*

  `brew search` TEXT|/REGEX/

#### uninstall

- Uninstall formula. - *卸载 formula。*

  `brew uninstall` [FORMULA|CASK...]

#### update

- Fetch the newest version of Homebrew and all formulae from GitHub using git(1) and perform any necessary migrations. - *使用 git(1) 从 GitHub 获取最新版本的 Homebrew 和所有 formulae，并执行必要的迁移。*

  `brew update`

  https://docs.brew.sh/Manpage#update-options - *brew(1) – The Missing Package Manager for macOS (or Linux) — Homebrew Documentation*

#### upgrade

- Upgrade outdated casks and outdated, unpinned formulae using the same options they were originally installed with, plus any appended brew formula options. If cask or formula are specified, upgrade only the given cask or formula kegs (unless they are pinned; see pin, unpin). - *使用与最初安装时相同的选项，加上任何附加的 brew formula 选项，升级过时的 casks 和过时的未固定 formulae。 如果指定了 cask 或 formulae，则只升级给定的 cask 或formulae（除非它们被固定；见固定、取消固定）。*

  `brew upgrade` [FORMULA|CASK...]

### 安装软件

> [Homebrew Formulae](https://formulae.brew.sh/) is an online package browser for [Homebrew](https://brew.sh/) – the macOS (and Linux) package manager. For more information on how to install and use Homebrew see [our homepage](https://brew.sh/).

官方：

1. https://formulae.brew.sh/ - *Homebrew Formulae*
2. https://docs.brew.sh/Formula-Cookbook#homebrew-terminology - *Formula Cookbook — Homebrew Documentation*

#### Cask

> 🍻 A CLI workflow for the administration of macOS applications distributed as binaries
> 
> Cask 命令用于与图形界面应用程序交互，可以安装和管理 macOS 上的图形界面应用程序

![GitHub last commit](https://img.shields.io/github/last-commit/Homebrew/homebrew-cask?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Homebrew/homebrew-cask?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Homebrew/homebrew-cask?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Homebrew/homebrew-cask?style=social)

官方：

1. https://formulae.brew.sh/cask/ - *homebrew-cask — Homebrew Formulae*
2. https://github.com/Homebrew/homebrew-cask - *Homebrew/homebrew-cask: 🍻 A CLI workflow for the administration of macOS applications distributed as binaries*

用法：

1. https://github.com/Homebrew/homebrew-cask/blob/master/USAGE.md - *homebrew-cask/USAGE.md at master · Homebrew/homebrew-cask · GitHub*

已安装列表：

1. https://formulae.brew.sh/cask/visual-studio-code - *visual-studio-code — Homebrew Formulae*
2. https://formulae.brew.sh/cask/sublime-text - *sublime-text — Homebrew Formulae*
3. https://formulae.brew.sh/cask/clashx - *clashx — Homebrew Formulae*
4. https://formulae.brew.sh/cask/genymotion - *genymotion — Homebrew Formulae*
5. https://formulae.brew.sh/cask/cheatsheet - *cheatsheet — Homebrew Formulae*
6. https://formulae.brew.sh/cask/cyberduck - *cyberduck — Homebrew Formulae*
7. https://formulae.brew.sh/cask/deepl - *deepl — Homebrew Formulae*
8. https://formulae.brew.sh/cask/devtoys#default - *devtoys — Homebrew Formulae*

#### Formulae

已安装列表：

1. https://formulae.brew.sh/formula/tree - *tree — Homebrew Formulae*

## 设置

### 关闭自动更新

```bash
export HOMEBREW_NO_AUTO_UPDATE=true
```

参考：

1. https://blog.csdn.net/HeatDeath/article/details/81705240 - *HomeBrew 关闭自动更新_brew update --auto-update-CSDN博客*
2. https://cloud.tencent.com/developer/article/2349762 - *homebrew禁止执行install命令时自动更新-腾讯云开发者社区-腾讯云*

### 镜像源

https://blog.csdn.net/H_WeiC/article/details/107857302 - *Homebrew更换国内镜像源（中科大、阿里、清华）*

1. https://mirrors.ustc.edu.cn/ - *USTC Open Source Software Mirror*
    - [使用帮助](https://mirrors.ustc.edu.cn/help/brew.git.html)
    - [brew.git](https://mirrors.ustc.edu.cn/help/brew.git.html)
    - [homebrew-bottles](https://mirrors.ustc.edu.cn/help/homebrew-bottles.html)
    - [homebrew-cask.git](https://mirrors.ustc.edu.cn/help/homebrew-cask.git.html)
    - [homebrew-core.git](https://mirrors.ustc.edu.cn/help/homebrew-core.git.html)
    - [homebrew-services.git](https://mirrors.ustc.edu.cn/help/homebrew-services.git.html)
2. https://mirrors.tuna.tsinghua.edu.cn/ - *清华大学开源软件镜像站 | Tsinghua Open Source Mirror*
    - [使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)
    - [homebrew](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)
    - [homebrew-bottles](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew-bottles/)

#### 查看当前源

brew.git：

```bash
cd "$(brew --repo)" && git remote -v
```

homebrew-core.git：

```bash
cd "$(brew --repo homebrew/core)" && git remote -v
```

#### 阿里镜像源

https://mirrors.aliyun.com/homebrew/ - *homebrew安装包下载_开源镜像站-阿里云*
- [使用帮助](https://developer.aliyun.com/mirror/homebrew/)

操作步骤：

1. 替换 brew.git:

    ```bash
    cd "$(brew --repo)" && git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
    ```

2. 替换 homebrew-core.git:

    ```bash
    cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core" && git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
    ```

3. zsh 替换 homebrew-bottles 镜像，Mac OS 在 10.15 系统开始，默认的 shell 都换成了 zsh

    ```bash
    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
    ```

4. 修改使其立即生效

    ```bash
    source ~/.zshrc
    ```

5. bash 替换 homebrew-bottles 镜像

    ```bash
    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
    ```

6. 修改使其立即生效

    ```bash
    source ~/.bash_profile
    ```

7. 刷新源

    ```bash
    brew update
    ```

## 工具

### ~~Cakebrew (deprecated)~~

> Cakebrew - The Mac App for Homebrew

!> 2023/06/24 ，停更（latest version: 1.3.0）。

![GitHub last commit](https://img.shields.io/github/last-commit/brunophilipe/Cakebrew?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/brunophilipe/Cakebrew?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/brunophilipe/Cakebrew?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/brunophilipe/Cakebrew?style=social)

官方：

1. https://www.cakebrew.com/ - *Cakebrew*
2. https://github.com/brunophilipe/Cakebrew - *brunophilipe/Cakebrew: Manage your Homebrew formulas with style using Cakebrew.*

安装：

1. https://formulae.brew.sh/cask/cakebrew - *cakebrew — Homebrew Formulae*

参考：

1. https://zhuanlan.zhihu.com/p/366354601 - *Homebrew 图形化管理软件Cakebrew，我再也不用记命令了 - 知乎*
2. https://blog.csdn.net/weixin_42131316/article/details/113378296 - *cakebrew mysql启动_mac安装常用包和软件 – homebrew、homebrew-cask及cakebrew_蒋叶婷的博客-CSDN博客*

## 参考

1. https://zhuanlan.zhihu.com/p/30704752 - *Homebrew 使用详解，macOS 的第二个 Mac App Store - 知乎*
