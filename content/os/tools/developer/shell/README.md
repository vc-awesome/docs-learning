# Shell

## 简介

> 首先，Shell 是一个程序，提供一个与用户对话的环境。这个环境只有一个命令提示符，让用户从键盘输入命令，所以又称为命令行环境（command line interface，简写为 CLI）。Shell 接收到用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。本书中，除非特别指明，Shell 指的就是命令行环境。
>
> 其次，Shell 是一个命令解释器，解释用户输入的命令。它支持变量、条件判断、循环操作等语法，所以用户可以用 Shell 命令写出各种小程序，又称为脚本（script）。这些脚本都通过 Shell 的解释执行，而不通过编译。
>
> 最后，Shell 是一个工具箱，提供了各种小工具，供用户方便地使用操作系统的功能。

## 教程

1. https://wangdoc.com/bash/ - *Bash 脚本教程 - 网道*
2. https://www.runoob.com/linux/linux-shell.html - *Shell 教程 | 菜鸟教程*
3. https://gnu-linux.readthedocs.io/zh/latest/TOC/Chapter05.html - *第五章 Shell 编程 — Linux latest 文档*
4. https://www.shellscript.sh/ - *The Shell Scripting Tutorial - The Shell Scripting Tutorial*

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

查看系统的默认 Shell：

```bash
echo $SHELL
```

查看 Linux 系统安装的所有 Shell：

```bash
cat /etc/shells
```

改变系统的默认 Shell：

```bash
chsh -s /bin/zsh
```

1. https://wangchujiang.com/linux-command/c/chsh.html - *chsh 命令，Linux chsh 命令详解：用来更换登录系统时使用的shell - Linux 命令搜索引擎*
2. https://www.runoob.com/linux/linux-comm-chsh.html - *Linux chsh命令 | 菜鸟教程*

### Bash

有关详细信息，请参阅“[Bash](os/tools/developer/shell/bash.md)”。

### Fish

简介：

> fish is a smart and user-friendly command line shell for Linux, macOS, and the rest of the family.

官方：

https://fishshell.com/ - *fish shell*

教程：

http://www.ruanyifeng.com/blog/2017/05/fish_shell.html - *Fish shell 入门教程 - 阮一峰的网络日志*

### PoweShell

有关详细信息，请参阅“[PowerShell](os/tools/developer/shell/powershell.md)”。

### Zsh

有关详细信息，请参阅“[Zsh](os/tools/developer/shell/zsh.md)”。

## 启动环境

https://wangdoc.com/bash/startup - *Bash 启动环境 - Bash 脚本教程 - 网道*

### 交互式非登录shell

<https://cn.bing.com/search?q=交互式非登录shell> - *交互式非登录shell - 搜索*

## 设置

### 命令提示符

https://wangdoc.com/bash/prompt - *命令提示符 - Bash 脚本教程 - 网道*

## 变量

1. https://wangdoc.com/bash/variable - *Bash 变量 - Bash 脚本教程 - 网道*
2. https://www.runoob.com/linux/linux-shell-variable.html - *Shell 变量 | 菜鸟教程*

### 环境变量

### 自定义变量

## 命令

有关详细信息，请参阅：
1. [Linux 命令](os/desktop/linux/command.md)；
2. [Windows 命令](os/desktop/windows/command.md)。

## 脚本

暂无

## 行操作

### Bash

有关详细信息，请参阅“[Readline](os/tools/developer/shell/readline.md)”。

### Zsh

暂无

## 常见问题

暂无
