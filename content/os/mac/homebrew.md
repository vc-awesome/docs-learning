## 简介

> <img src="https://brew.sh/assets/img/homebrew.svg" alt="package icon" align="left" width="28" hspace="10" vspace="0"> The missing package manager for macOS (or Linux). Homebrew is the easiest and most flexible way to install the UNIX tools Apple didn´t include with macOS. It can also install software not packaged for your Linux distribution without requiring **sudo**.

## 官方

GitHub: 

- https://github.com/Homebrew - *Homebrew · GitHub*

Website: 

1. https://brew.sh/ - *Homebrew — The Missing Package Manager for macOS (or Linux)* 

2. https://brew.sh/index_zh-cn - *macOS（或 Linux）缺失的软件包的管理器 — Homebrew*

文档：

- https://docs.brew.sh/ - *Documentation — Homebrew Documentation*

FAQ：

- https://docs.brew.sh/FAQ - *FAQ (Frequently Asked Questions) — Homebrew Documentation*

## 安装

### macOS

https://docs.brew.sh/Installation - *Installation — Homebrew Documentation*

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Linux

https://docs.brew.sh/Installation#linux-or-windows-10-subsystem-for-linux - *Installation — Homebrew Documentation*

## 快速入门

### 命令行

`brew`

`brew help` [COMMAND]

`brew commands`

`man brew` (*[man brew documentation](https://docs.brew.sh/Manpage)*)

- 查看 brew 版本信息

  `brew -v`

  `brew --version`

`brew update`

`brew upgrade` [FORMULA|CASK...]

`brew config`

`brew info` [FORMULA|CASK...]

`brew search` TEXT|/REGEX/

- List all installed formulae.

  `brew list` [FORMULA|CASK...]

  `brew ls` [FORMULA|CASK...]

- Install formula. formula is usually the name of the formula to install, but it has other syntaxes which are listed in the SPECIFYING FORMULAE section.

  `brew install` \<formula>

- Uninstall formula.

  `brew uninstall` \<formula>

#### Homebrew Cask 命令

https://github.com/Homebrew/homebrew-cask - *Homebrew/homebrew-cask: 🍻 A CLI workflow for the administration of macOS applications distributed as binaries*

- 用法：https://github.com/Homebrew/homebrew-cask/blob/master/USAGE.md - *homebrew-cask/USAGE.md at master · Homebrew/homebrew-cask · GitHub*

### 安装软件

> [Homebrew Formulae](https://formulae.brew.sh/) is an online package browser for [Homebrew](https://brew.sh/) – the macOS (and Linux) package manager. For more information on how to install and use Homebrew see [our homepage](https://brew.sh/).

Website:

- https://formulae.brew.sh/ - *Homebrew Formulae*

已安装列表：

1. https://formulae.brew.sh/cask/visual-studio-code - *visual-studio-code — Homebrew Formulae*
2. https://formulae.brew.sh/cask/sublime-text - *sublime-text — Homebrew Formulae*
3. https://formulae.brew.sh/cask/clashx - *clashx — Homebrew Formulae*
4. https://formulae.brew.sh/cask/genymotion - *genymotion — Homebrew Formulae*
5. https://formulae.brew.sh/cask/cheatsheet - *cheatsheet — Homebrew Formulae*
6. https://formulae.brew.sh/cask/cyberduck - *cyberduck — Homebrew Formulae*

## 设置

### 镜像源

https://blog.csdn.net/H_WeiC/article/details/107857302 - *Homebrew更换国内镜像源（中科大、阿里、清华）*

- https://mirrors.ustc.edu.cn/ - *USTC Open Source Software Mirror* [使用帮助](https://mirrors.ustc.edu.cn/help/brew.git.html)
- https://mirrors.aliyun.com/homebrew/ - *homebrew安装包下载_开源镜像站-阿里云*
- https://mirrors.tuna.tsinghua.edu.cn/ - *清华大学开源软件镜像站 | Tsinghua Open Source Mirror* [使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

#### 查看 brew.git 当前源

```sh
cd "$(brew --repo)" && git remote -v
```

#### 查看 homebrew-core.git 当前源

```sh
cd "$(brew --repo homebrew/core)" && git remote -v
```

#### 切换 Homebrew 镜像源为阿里镜像源

1. 替换 brew.git:

```sh
cd "$(brew --repo)" && git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
```

2. 替换 homebrew-core.git:

```sh
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core" && git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
```

3. zsh 替换 homebrew-bottles 镜像，Mac OS 在 10.15 系统开始，默认的 shell 都换成了 zsh

```sh
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
```

4. 修改使其立即生效

```sh
source ~/.zshrc
```

5. bash 替换 homebrew-bottles 镜像

```sh
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
```

6. 修改使其立即生效

```sh
source ~/.bash_profile
```

7. 刷新源

```sh
brew update
```

## 工具

### ~~Cakebrew~~

!> 2023/06/24 ，停更（latest version: 1.3.0）。

https://formulae.brew.sh/cask/cakebrew - *cakebrew — Homebrew Formulae*

参考：

1. https://zhuanlan.zhihu.com/p/366354601 - *Homebrew 图形化管理软件Cakebrew，我再也不用记命令了 - 知乎*

2. https://blog.csdn.net/weixin_42131316/article/details/113378296 - *cakebrew mysql启动_mac安装常用包和软件 – homebrew、homebrew-cask及cakebrew_蒋叶婷的博客-CSDN博客*

## 参考

1. https://zhuanlan.zhihu.com/p/30704752 - *Homebrew 使用详解，macOS 的第二个 Mac App Store - 知乎*