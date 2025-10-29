# Man pages

## 简介

> "Man pages" (short for "manual pages") are a form of software documentation found on Unix-like operating systems. They provide detailed information about commands, system calls, libraries, and other aspects of the system. Each man page is organized into sections, and each section covers a specific topic.

## 官方

1. https://manned.org/ - *Man Pages Archive - manned.org*
2. https://www.kernel.org/doc/man-pages/ - *The Linux man-pages project*
    - https://www.man7.org/linux/man-pages/ - *Linux man pages online*

## 教程

https://github.com/man-pages-zh/manpages-zh - *GitHub - man-pages-zh/manpages-zh: Chinese Manual Pages*

![GitHub last commit](https://img.shields.io/github/last-commit/man-pages-zh/manpages-zh?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/man-pages-zh/manpages-zh?style=social)

### Arch Linux

https://wiki.archlinux.org/title/Man_page - *man page - ArchWiki*
- 👏 https://wiki.archlinux.org/title/Man_page#Online_man_pages - *6Online man pages*
- https://man.archlinux.org/man/man.1.zh_CN - *man(1) — Arch manual pages*

### Debain

https://manpages.debian.org/ - *index — Debian Manpages*

### Ubuntu

https://manpages.ubuntu.com/ - *Ubuntu Manpage: Welcome*

## 入门指南

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
