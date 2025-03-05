# Shell

## 简介

> 首先，Shell 是一个程序，提供一个与用户对话的环境。这个环境只有一个命令提示符，让用户从键盘输入命令，所以又称为命令行环境（command line interface，简写为 CLI）。Shell 接收到用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。本书中，除非特别指明，Shell 指的就是命令行环境。
>
> 其次，Shell 是一个命令解释器，解释用户输入的命令。它支持变量、条件判断、循环操作等语法，所以用户可以用 Shell 命令写出各种小程序，又称为脚本（script）。这些脚本都通过 Shell 的解释执行，而不通过编译。
>
> 最后，Shell 是一个工具箱，提供了各种小工具，供用户方便地使用操作系统的功能。

## 教程

1. https://www.runoob.com/linux/linux-shell.html - *Shell 教程 | 菜鸟教程*
2. https://gnu-linux.readthedocs.io/zh/latest/TOC/Chapter05.html - *第五章 Shell 编程 — Linux latest 文档*
3. https://www.shellscript.sh/ - *The Shell Scripting Tutorial - The Shell Scripting Tutorial*

## 环境

<https://wangdoc.com/bash/intro#shell-的种类> - *Bash 简介 - Bash 脚本教程 - 网道*

- Bourne Shell（sh）
- [Bourne Again shell](https://www.gnu.org/software/bash/)（bash）
- C Shell（csh）
- TENEX C Shell（tcsh）
- [Korn shell](http://www.kornshell.com/)（ksh）
- [Z Shell](http://www.zsh.org/)（zsh）
- Friendly Interactive Shell（fish）

https://wiki.termux.com/wiki/Shells - *Shells - Termux Wiki*

查看 Shell 版本：

```bash
echo $SHELL
```

### Bash

有关详细信息，请参阅“[Bash](os/tools/developer/shell/bash.md)”。

### Zsh

简介：

> Zsh is a shell designed for interactive use, although it is also a powerful scripting language. Many of the useful features of bash, ksh, and tcsh were incorporated into zsh. - *Zsh 是一种专为交互式使用而设计的 shell，尽管它也是一种功能强大的脚本语言。 Zsh 吸收了 bash、ksh 和 tcsh 的许多有用功能。*
>
> <cite>—— [Shells - Termux Wiki](https://wiki.termux.com/wiki/Shells#ZSH)</cite>

官方：

https://www.zsh.org/ - *Zsh*

插件：

1. Oh My Zsh

    https://github.com/ohmyzsh/ohmyzsh - *GitHub - ohmyzsh/ohmyzsh: 🙃 A delightful community-driven (with 2,200+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+ themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.*
    
    ![GitHub last commit](https://img.shields.io/github/last-commit/ohmyzsh/ohmyzsh?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/ohmyzsh/ohmyzsh?style=social)

用法：

https://du33169.tech/posts/linux/zshconfiguration/ - *Zsh配置与美化 - Lando's Blog*

### Fish

简介：

> fish is a smart and user-friendly command line shell for Linux, macOS, and the rest of the family.

官方：

https://fishshell.com/ - *fish shell*

教程：

http://www.ruanyifeng.com/blog/2017/05/fish_shell.html - *Fish shell 入门教程 - 阮一峰的网络日志*

### PoweShell

有关详细信息，请参阅“[PowerShell](os/tools/developer/shell/powershell.md)”。

## 常见问题

### 交互式非登录shell

<https://cn.bing.com/search?q=交互式非登录shell> - *交互式非登录shell - 搜索*

https://wangdoc.com/bash/startup - *Bash 启动环境 - Bash 脚本教程 - 网道*
