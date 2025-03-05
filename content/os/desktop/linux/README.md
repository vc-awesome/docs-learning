# GNU/Linux

## 简介

> <img src="https://www.kernel.org/theme/images/logos/tux.png" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" /> Linux 是一种自由和开放源码的类 UNIX 操作系统。
>
> Linux 英文解释为 **Linux is not Unix**。
>
> Linux 是在 1991 由林纳斯·托瓦兹在赫尔辛基大学上学时创立的，主要受到 Minix 和 Unix 思想的启发。
>
> <cite>—— [Linux 教程 | 菜鸟教程](https://www.runoob.com/linux/linux-tutorial.html)</cite>

![GitHub last commit](https://badgen.net/github/last-commit/torvalds/linux?icon=github&color=blue)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/torvalds/linux?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/torvalds/linux?style=social)

## 官方

Wesite:

1. https://www.linux.org/ - *Linux.org*
2. https://www.kernel.org/ - *The Linux Kernel Archives*
3. https://www.kernel.org/doc/html/latest/ - *The Linux Kernel documentation — The Linux Kernel documentation*

GitHub:

1. https://github.com/torvalds/linux - *GitHub - torvalds/linux: Linux kernel source tree*

## 教程

1. https://www.runoob.com/linux/linux-tutorial.html - *Linux 教程 | 菜鸟教程*

2. https://linuxjourney.com/ - *Home | Linux Journey*
    - https://github.com/cindyq/linuxjourney - *GitHub - cindyq/linuxjourney: Courses and lesson content for linuxjourney.com*
        ![GitHub last commit](https://img.shields.io/github/last-commit/cindyq/linuxjourney?logo=github&color=blue)
        ![GitHub Repo stars](https://img.shields.io/github/stars/cindyq/linuxjourney?style=social)

3. https://gnu-linux.readthedocs.io/zh/latest/index.html - *GNU/Linux 点滴 — Linux latest 文档*

4. https://linux.vbird.org/ - *鳥哥私房菜 - 鳥哥的首頁*

5. https://github.com/Linux-CN - *Linux 中国 · GitHub*

6. https://linux.die.net/ - *Linux Documentation*

## 安装(发行版)

https://www.linux.org/pages/download/ - *Download Linux | Linux.org*

http://mirrors.kernel.org/ - *mirrors.kernel.org*

https://flathub.org/setup - *Set Up Flathub | Flathub*

### Archlinux

官方：

https://archlinux.org/ - *Arch Linux*

### Debian

官方：

https://www.debian.org/ - *Debian -- 通用操作系统*

https://www.debian.org/distrib/packages - *Debian -- 软件包*

https://manpages.debian.org/ - *index — Debian Manpages*

https://www.debian.org/doc/manuals/debian-handbook/index.zh-cn.html - *Debian 管理员手册*

#### Ubuntu

官方：

https://ubuntu.com/ - *Enterprise Open Source and Linux | Ubuntu*

https://wiki.ubuntu.com.cn/UbuntuManual - *UbuntuManual - Ubuntu中文*

### openSUSE

官方：

https://www.opensuse.org/ - *openSUSE - Linux OS. The makers' choice for sysadmins, developers and desktop users.*

### Red Hat

官方：

https://www.redhat.com/ - *Red Hat - We make open source technologies for the enterprise*

#### CentOS

官方：

https://www.centos.org/ - *The CentOS Project*

镜像：

https://mirrors.aliyun.com/centos/ - *阿里云开源镜像站资源目录*

https://developer.aliyun.com/mirror/centos/ - *centos镜像-centos下载地址-centos安装教程-阿里巴巴开源镜像站*

https://www.cnblogs.com/boonya/p/7373395.html - *List of CentOS Mirrors - boonya - 博客园*

#### Fedora

官方：

https://fedoraproject.org/ - *Fedora Linux | The Fedora Project*

## 入门指南

### 启动流程

1. https://www.runoob.com/linux/linux-system-boot.html - *Linux 系统启动过程 | 菜鸟教程*
2. https://www.ruanyifeng.com/blog/2013/02/booting.html - *计算机是如何启动的？ - 阮一峰的网络日志*
3. https://ruanyifeng.com/blog/2013/08/linux_boot_process.html - *Linux 的启动流程 - 阮一峰的网络日志*

#### 用户登录

一般来说，用户的登录方式有 3 种：

1. 命令行登录
2. ssh 登录
3. 图形界面登录

https://wangdoc.com/bash/startup - *Bash 启动环境 - Bash 脚本教程 - 网道*

#### 进入 login shell

暂无

#### 打开 non-login shell

暂无

### 目录结构

https://www.runoob.com/linux/linux-system-contents.html - *Linux 系统目录结构 | 菜鸟教程*

https://www.ruanyifeng.com/blog/2012/02/a_history_of_unix_directory_structure.html - *Unix目录结构的来历 - 阮一峰的网络日志*

https://www.pathname.com/fhs/pub/fhs-2.3.html - *Filesystem Hierarchy Standard*

```tree
/
├── bin/
├── etc/
├── home/ #存放用户的数据
├── lib/
├── opt/ #在某些系统，用于存放第三方厂商开发的程序，所以取名为option，意为"选装"
├── sbin/
├── tmp/
├── usr/ #存放用户的程序
│   ├── bin/
│   ├── lib/
│   ├── local/ #存放用户自己安装的程序
│   │   └── bin/
│   ├── sbin/
│   └── tmp/
├── var/
│   └── log/
```

以下是对这些目录的解释：

- `/bin`：bin 是 Binaries (二进制文件) 的缩写，这个目录存放着最经常使用的命令。
- `/etc`：etc 是 Etcetera(等等) 的缩写，这个目录用来存放所有的系统管理所需要的配置文件和子目录。
- `/home`：用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。
- `/lib`：lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。
- `/opt`：opt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个 ORACLE 数据库则就可以放到这个目录下。默认是空的。
- `/sbin`：s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。
- `/tmp`：tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。
- `/usr`：usr 是 unix system resources(unix 系统资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。
  - `/usr/bin`：系统用户使用的应用程序。
  - `/usr/sbin`：超级用户使用的比较高级的管理程序和系统守护程序。
- `/var`：var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

### 快捷键

https://cn.linux-console.net/?p=8222 - *如何在 Linux 的 Bash Shell 中复制和粘贴文本*

https://blog.csdn.net/NiNi_suanfa/article/details/134724232 - *【Linux】如何在 Linux 终端中复制粘贴_linux命令行中复制粘贴-CSDN博客*

### Man pages

"Man pages" (short for "manual pages") are a form of software documentation found on Unix-like operating systems. They provide detailed information about commands, system calls, libraries, and other aspects of the system. Each man page is organized into sections, and each section covers a specific topic. Here's an overview of what man pages are and how they are generally structured:

#### What Are Man Pages?

Man pages are designed to provide users with comprehensive information about the usage, options, and functionality of a particular command or program. They are often used by system administrators, developers, and users who need detailed information on how to use specific commands or understand system behavior.

#### How to Access Man Pages

To access a man page, you typically use the `man` command followed by the name of the command or topic you want to learn about. For example:

```bash
man ls
```

This command will display the manual page for the `ls` command.

#### Structure of Man Pages

Man pages are generally organized into sections, which may include:

1. **NAME**: The name of the command or function and a brief description.
2. **SYNOPSIS**: A summary of the command's syntax, showing how it is used.
3. **DESCRIPTION**: A detailed description of the command or function, including its purpose and behavior.
4. **OPTIONS**: A list of command-line options, if applicable, that modify the behavior of the command.
5. **EXAMPLES**: Practical examples demonstrating how to use the command or function.
6. **SEE ALSO**: References to related commands, functions, or documentation.
7. **AUTHOR**: Information about the author or maintainer of the man page.
8. **COPYRIGHT**: Information about the licensing of the command or software.
9. **BUGS**: Known issues or bugs related to the command or function.

#### Sections of the Man Pages

Man pages are divided into numbered sections, each covering different types of documentation:

1. **User Commands**: General commands available to all users.
2. **System Calls**: Functions provided by the kernel.
3. **Library Functions**: Functions provided by programming libraries.
4. **Special Files**: Device files and other special files like `/dev/null`.
5. **File Formats and Conventions**: Formats for files like `/etc/passwd`.
6. **Games**: Documentation for games and amusements.
7. **Miscellaneous**: Various other types of documentation.
8. **System Administration**: Commands for administrative use.
9. **Kernel Routines**: Functions for kernel developers.

To access a specific section, you can specify the section number with the `man` command. For example, to access the man page for the `open` system call (typically in section 2) rather than the `open` command (in section 1), you would use:

```bash
man 2 open
```

#### Searching Man Pages

If you are unsure about the exact name of the command or topic, you can use the `man -k` or `apropos` command to search for keywords:

```bash
man -k keyword
```

or

```bash
apropos keyword
```

These commands will list all man pages that contain the specified keyword.

#### Summary

Man pages are an essential resource for anyone working on Unix-like systems. They provide a comprehensive, on-system reference for commands, functions, and configuration files. Understanding how to navigate and read man pages can greatly enhance your ability to work efficiently in a Unix environment.

https://manned.org/ - *Man Pages Archive - manned.org*

https://manpages.org/ - *Linux Man Pages*

https://www.man7.org/linux/man-pages/ - *Linux man pages online*

https://wiki.archlinux.org/title/Man_page - *man page - ArchWiki*

https://manpages.debian.org/ - *index — Debian Manpages*

👏 https://wiki.archlinux.org/title/Man_page#Online_man_pages - *6Online man pages*

- https://man.archlinux.org/man/man.1.zh_CN - *man(1) — Arch manual pages*

### 守护进程

https://www.ruanyifeng.com/blog/2016/02/linux-daemon.html - *Linux 守护进程的启动方法 - 阮一峰的网络日志*

#### Systemd

http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html - *Systemd 入门教程：命令篇 - 阮一峰的网络日志*

http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-part-two.html - *Systemd 入门教程：实战篇 - 阮一峰的网络日志*

http://www.ruanyifeng.com/blog/2018/03/systemd-timer.html - *Systemd 定时器教程 - 阮一峰的网络日志*

#### Tmux

http://www.ruanyifeng.com/blog/2019/10/tmux.html - *Tmux 使用教程 - 阮一峰的网络日志*

## 工具

### 包管理器

1. https://www.cnblogs.com/fungitive/p/9136254.html - *linux软件安装之详解apt、yum、dnf 和 pkg包安装 - 菲宇 - 博客园*
2. https://cn.linux-console.net/?p=12011 - *如何列出 Linux 上已安装的软件包*
3. https://fishshell.com/ - *fish shell*
4. https://htop.dev/downloads.html - *htop - an interactive process viewer*
5. https://linux.cn/article-8782-1.html - *技术|Linux 包管理基础：apt、yum、dnf 和 pkg*

#### apt (Debian / Ubuntu)

https://manpages.debian.org/bookworm/apt/apt.8.en.html - *apt(8) — apt — Debian bookworm — Debian Manpages*

https://www.debian.org/distrib/packages - *Debian -- 软件包*

https://blog.csdn.net/yongwan5637/article/details/99872840 - *Liunx 使用 apt 安装本地 deb 软件包_sudo apt-get install 本地 deb 文件 - CSDN 博客*

https://www.cnblogs.com/yeziwinone/p/18083396 - *手动安装 deb 包，用 dpkg 和 ap-get 方式 - 叶子在行动 - 博客园*

https://cn.linux-console.net/?p=13691 - *如何在 Ubuntu 22.04 上安装 DEB 软件包*

https://cn.linux-console.net/?p=23463 - *3 个用于安装本地 Debian (.DEB) 软件包的命令行工具*

#### yum (Red Hat / CentOS)

暂无

#### dnf (Fedora)

暂无

#### pkg (FreeBSD)

暂无

#### pacman (Arch)

暂无

#### dpkg

https://manpages.debian.org/bookworm/dpkg/dpkg.1.en.html - *dpkg(1) — dpkg — Debian bookworm — Debian Manpages*

### SSH

有关详细信息，请参阅“[SSH](os/ssh.md)”。

## 资源

### 图标

https://www.linux.org/pages/download/ - *Download Linux | Linux.org*

<https://software.opensuse.org//download.html?project=isv:ownCloud:server:10&package=owncloud-complete-files> - *安装软件包 isv:ownCloud:server:10 /owncloud-complete-files*
