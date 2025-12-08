# 命令行工具

> Before there were graphical user interfaces, command-line interfaces were used to issue commands to a computer. Programs that handle the user interface are called command language interpreters, often known as a shell. A CLI may give a user more control over the computer and programs they wish to execute.
>
> <cite>—— [cli · GitHub Topics · GitHub](https://github.com/topics/cli)</cite>

搜索：

1. https://repology.org/ - *Repology*
2. https://pkgs.org/ - *Packages for Linux and Unix - pkgs.org*
3. https://release-monitoring.org/ - *Anitya*
4. https://formulae.brew.sh/ - *Homebrew Formulae*
5. https://ss64.com/ - *SS64 Command line reference* \
    \> _via https://github.com/rgcr/m-cli - *GitHub - rgcr/m-cli:  Swiss Army Knife for macOS*_
6. https://github.com/agarrharr/awesome-cli-apps - *GitHub - agarrharr/awesome-cli-apps: 🖥 📊 🕹 🛠 A curated list of command line apps*

## 开发者工具

### 编辑器和 IDE

#### 文本编辑器

1. [Vim](https://www.vim.org) - *Vi IMproved - enhanced vi editor* [使用手册](os/tools/developer/editor/vim.md)

### 编程语言

- **GCC (GNU Compiler Collection)**: 适用于 C/C++ 等编程语言的编译器。
     ```bash
     pkg install clang
     ```
- **Python**: Python 编程环境。
     ```bash
     pkg install python
     ```
- **Ruby**: Ruby 编程语言。
     ```bash
     pkg install ruby
     ```
- **Go**: Go 编程语言。
     ```bash
     pkg install golang
     ```
- **Perl**: Perl 编程语言。
     ```bash
     pkg install perl
     ```

### 数据库管理

- **SQLite**: 轻量级数据库。
     ```bash
     pkg install sqlite
     ```
- **MySQL**: 流行的关系型数据库。
     ```bash
     pkg install mariadb
     ```

### Node.js

1. [Node.js — Run JavaScript Everywhere](https://nodejs.org/) - *Open Source, cross-platform JavaScript runtime environment* [使用手册](front-end/nodejs/README.md)

### 网络服务与服务器

- **OpenSSH**: 提供 SSH 客户端和服务器功能。
     ```bash
     pkg install openssh
     ```
- **Apache HTTP Server**: 用于托管网站的 HTTP 服务器。
     ```bash
     pkg install apache2
     ```
- **PHP**: 动态网页开发语言。
     ```bash
     pkg install php
     ```

### 调试和性能分析

- **strace**: 跟踪系统调用和信号的工具。
     ```bash
     pkg install strace
     ```
- **gdb**: GNU 调试器。
     ```bash
     pkg install gdb
     ```

### 版本控制

1. [Git](https://git-scm.com/) - *Fast, scalable, distributed revision control system* [使用手册](os/tools/developer/vcs/git.md)

#### CLI Clients

1. [GitUI by extrawurst](https://extrawurst.itch.io/gitui) - *Blazing 💥 fast terminal-ui for git written in rust 🦀*

    - 支持 Windows, macOS, Linux, Android（Termux）

    - 开源软件（[GitHub Repo](https://github.com/extrawurst/gitui)）

## 网络工具

1. [curl](https://curl.se/) - *Command line tool for transferring data with URL syntax* [使用手册](os/tools/developer/curl.md) \
    \> 用于从网络上获取数据。

2. [Wget - GNU Project - Free Software Foundation](https://www.gnu.org/software/wget/) - *Commandline tool for retrieving files using HTTP, HTTPS and FTP* \
    \> 用于下载文件。

3. [Nmap: the Network Mapper - Free Security Scanner](https://nmap.org/) - *Utility for network discovery and security auditing* \
    \> 网络扫描工具。

## 系统工具

1. [btop - A monitor of resources](https://github.com/aristocratos/btop) - *Resource monitor that shows usage and stats for processor, memory, disks, network and processes.*

    - 支持 macOS, Linux, Android（Termux）
    - 开源软件（[GitHub Repo](https://github.com/aristocratos/btop)）

2. [htop - an interactive process viewer](https://htop.dev/) - *This is htop, a cross-platform interactive process viewer. It is a text-mode application (for console or X terminals) and requires ncurses.* \
    \> 交互式进程查看器，比 top 更强大。

    - 支持 macOS, Linux, Android（Termux）

    - 开源软件（[GitHub Repo](https://github.com/htop-dev/htop)）

## 文件管理

### 文件对比

1. [colordiff](https://www.colordiff.org/) - *The Perl script colordiff is a wrapper for ‘diff’ and produces the same output but with pretty ‘syntax’ highlighting. Colour schemes can be customized.*

    - 支持 macOS, Linux, Android（Termux）

    - 开源软件（[GitHub Repo](https://github.com/daveewart/colordiff)）

### 文件同步

1. [Rclone](https://rclone.org/) - *Rclone syncs your files to cloud storage: Google Drive, S3, Swift, Dropbox, Google Cloud Storage, Azure, Box and many more.* [使用手册](os/tools/developer/rclone.md)

    - 支持 Windows, macOS, Linux, Android（Termux）

    - 开源软件（[GitHub Repo](https://github.com/rclone/rclone)）

2. [rsync](https://rsync.samba.org/) - *Utility that provides fast incremental file transfer* \
    \> _via https://www.ruanyifeng.com/blog/2020/08/rsync.html - *rsync 用法教程 - 阮一峰的网络日志*_

    - 支持 Linux, macOS, Android（Termux）

    - 开源软件（[GitHub Repo](https://github.com/RsyncProject/rsync)）

### 文件查重

1. [FDUPES](https://github.com/adrianlopezroche/fdupes) - *FDUPES is a program for identifying or deleting duplicate files residing within specified directories.* \
    \> _via https://www.cnblogs.com/lihuaichen/p/15410218.html - *Linux中查找和删除重复文件的4种方法*_

    - 支持 macOS（[Homebrew](https://formulae.brew.sh/formula/fdupes)）, Linux, Android（Termux）

    - 开源软件（[GitHub Repo](https://github.com/adrianlopezroche/fdupes)）

## 其它

1. [Tree](http://mama.indstate.edu/users/ice/tree/) - *Recursive directory lister producing a depth indented listing of files*

2. [tmux](https://github.com/tmux/tmux/wiki) - *Terminal multiplexer* \
    \> 终端复用器，可以在一个终端窗口中运行多个会话。

3. [jq](https://jqlang.github.io/jq/) - *Command-line JSON processor*
