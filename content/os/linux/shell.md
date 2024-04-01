# Linux Shell

## 简介

> 首先，Shell 是一个程序，提供一个与用户对话的环境。这个环境只有一个命令提示符，让用户从键盘输入命令，所以又称为命令行环境（command line interface，简写为 CLI）。Shell 接收到用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。本书中，除非特别指明，Shell 指的就是命令行环境。
>
> 其次，Shell 是一个命令解释器，解释用户输入的命令。它支持变量、条件判断、循环操作等语法，所以用户可以用 Shell 命令写出各种小程序，又称为脚本（script）。这些脚本都通过 Shell 的解释执行，而不通过编译。
>
> 最后，Shell 是一个工具箱，提供了各种小工具，供用户方便地使用操作系统的功能。

## 官方

https://www.runoob.com/linux/linux-shell.html - *Shell 教程 | 菜鸟教程*

## Shell 的种类

<https://wangdoc.com/bash/intro#shell-的种类> - *Bash 简介 - Bash 脚本教程 - 网道*

- Bourne Shell（sh）
- Bourne Again shell（bash）
- C Shell（csh）
- TENEX C Shell（tcsh）
- Korn shell（ksh）
- Z Shell（zsh）
- Friendly Interactive Shell（fish）

https://wiki.termux.com/wiki/Shells - *Shells - Termux Wiki*

### Bash

#### 简介

> Bash is the GNU Project's shell—the Bourne Again SHell. This is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and the C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification.

#### 官方

https://www.gnu.org/software/bash/ - *Bash - GNU Project - Free Software Foundation* [via](https://wangchujiang.com/linux-command/c/help.html)

#### 教程

https://www.wangdoc.com/bash/ - *Bash 脚本教程 - 网道*

- 本教程介绍 Linux 命令行 Bash 的基本用法和脚本编程。

#### 用法

查看 bash 版本：

```sh
bash --version
```

或者

```sh
echo $BASH_VERSION
```

### Zsh

#### 简介

> Zsh is a shell designed for interactive use, although it is also a powerful scripting language. Many of the useful features of bash, ksh, and tcsh were incorporated into zsh.
>
> <cite>—— [Shells - Termux Wiki](https://wiki.termux.com/wiki/Shells#ZSH)</cite>

#### 官方

https://www.zsh.org/ - *Zsh*

#### 插件

1. Oh My Zsh

    https://github.com/ohmyzsh/ohmyzsh - *GitHub - ohmyzsh/ohmyzsh: 🙃 A delightful community-driven (with 2,200+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+ themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.*
    
    ![GitHub last commit](https://badgen.net/github/last-commit/ohmyzsh/ohmyzsh?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/ohmyzsh/ohmyzsh?style=social)

#### 用法

https://du33169.tech/posts/linux/zshconfiguration/ - *Zsh配置与美化 - Lando's Blog*

### PoweShell

