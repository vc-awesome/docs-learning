# Linux 命令

## 命令手册和工具

1. https://linuxize.com/ - *Linux Tips, Tricks and Tutorials | Linuxize*

2. https://www.baeldung.com/linux/ - *Baeldung on Linux*

3. https://www.runoob.com/linux/linux-command-manual.html - *Linux 命令大全 | 菜鸟教程*

4. [Linux命令搜索引擎](https://wangchujiang.com/linux-command/) - *Linux命令搜索引擎 命令，Linux Linux命令搜索引擎 命令详解：最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。 - Linux 命令搜索引擎*

    ![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/linux-command?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/jaywcjlove/linux-command?style=social)

    - 支持 [Web](https://wangchujiang.com/linux-command/)

    - 开源软件（[GitHub Repo](https://github.com/jaywcjlove/linux-command)）

5. [Linux Command Library](https://linuxcommandlibrary.com/) - *Handy cheat sheets with linux tips and terminal basics about System control, Users, Files, Package managers, Video and Audio, Hacking tools, Terminal games and many more categories.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/SimonSchubert/LinuxCommandLibrary?color=blue&logo=github)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/SimonSchubert/LinuxCommandLibrary?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/SimonSchubert/LinuxCommandLibrary?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/SimonSchubert/LinuxCommandLibrary?style=social)

    - 支持 Android（[GitHub Releases](https://github.com/SimonSchubert/LinuxCommandLibrary/releases), [Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca), [F-Droid](https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca)）, [Web](https://linuxcommandlibrary.com/)

    - 开源软件（[GitHub Repo](https://github.com/SimonSchubert/LinuxCommandLibrary)）

6. https://gnu-linux.readthedocs.io/zh/latest/index.html - *GNU/Linux 点滴 — Linux latest 文档*

### man pages

https://www.kernel.org/doc/man-pages/ - *The Linux man-pages project*

### tldr pages

[tldr pages](https://tldr.sh/) - *📚 Collaborative cheatsheets for console commands*

![GitHub last commit](https://img.shields.io/github/last-commit/tldr-pages/tldr?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/tldr-pages/tldr?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/tldr-pages/tldr?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/tldr-pages/tldr?style=social)

- 支持 Android（[F-Droid](https://f-droid.org/packages/wtf.technodisaster.tldr/)）, CLI（[Node.js](https://www.npmjs.com/package/tldr)）, [Web](https://tldr.inbrowser.app/)

- 开源软件（[GitHub Repo](https://github.com/tldr-pages/tldr)）

[安装](https://tldr.sh/#installation)：

```bash
npm install -g tldr
```

https://github.com/tldr-pages/tldr-node-client - *GitHub - tldr-pages/tldr-node-client: Node.js command-line client for tldr pages 📚*

用法：

tldr command [options]

选项：

`-h`, `--help` - Show this help message

`-u`, `--update` - Update the local cache

`-m`, `--markdown` - Output in markdown format

`-t`, `--theme` [theme] - Color theme (simple, base16, ocean)

`-s`, `--search` [keywords] - Search pages using keywords

示例：

```bash
tldr --help
```

```bash
tldr tar
```

```bash
tldr tar -m
```

## 语法格式

http://docopt.org/ - *docopt—language for description of command-line interfaces* [GitHub Repo](https://github.com/docopt/docopt)

![GitHub last commit](https://img.shields.io/github/last-commit/docopt/docopt?color=blue&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/docopt/docopt?style=social)

Usage - 用法：

```bash
Usage:
  naval_fate ship new <name>...
  naval_fate ship <name> move <x> <y> [--speed=<kn>]
  naval_fate ship shoot <x> <y>
  naval_fate mine (set|remove) <x> <y> [--moored|--drifting]
  naval_fate -h | --help
  naval_fate --version
```

- 子命令（`ship`, `new`, `move` 等）

- `[]` - 可选

- `()` - 必须

- `|` - 互斥（`set`, `remove` 选择其中一个）

- `...` - 重复的元素

- `<argument>` - 位置参数（`<name>`, `<x>`, `<y>`）

Options - 选项：

```bash
Options:
  -h --help     Show this screen.
  --version     Show version.
  --speed=<kn>  Speed in knots [default: 10].
  --moored      Moored (anchored) mine.
  --drifting    Drifting mine.
```

- `-h` - 短选项

- `--help` - 长选项

- `--speed=<kn>` - 选项参数

- `[default： 10]` - 选项参数默认值

- `--` - 配置项参数终止符

    - <https://wangdoc.com/bash/script#配置项参数终止符---> - *Bash 脚本入门 - Bash 脚本教程 - 网道*

参考：

1. https://blog.csdn.net/wq6ylg08/article/details/88919530 - *Linux命令行帮助文档命令语法公式格式详解和Git命令语法格式解读（最详细解释，关键词:Ubuntu,Terminal,终端,Gtibash,Git,Github,系统,实战,操作,理解）_\<command> [inputfile] [outputfile] [\<switches>...]-CSDN博客*
2. https://blog.csdn.net/weixin_42683556/article/details/115725069 - *命令行帮助文档语法格式详解*
3. https://blog.csdn.net/u013867301/article/details/103513379 - *命令行格式*
4. https://www.cnblogs.com/haoyufang/p/11762583.html - *linux命令语法格式 - 昊宇方 - 博客园*

## 常用命令

> 以下的命令可以点击对应的链接，进入网页查看使用实例。

1. <https://github.com/jaywcjlove/linux-command#linux命令分类> - *GitHub - jaywcjlove/linux-command: Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。https://git.io/linux*
2. https://www.runoob.com/linux/linux-command-manual.html - *Linux 命令大全 | 菜鸟教程*

### 命令全拼

https://www.runoob.com/w3cnote/linux-command-full-fight.html - *Linux 常用命令全拼 | 菜鸟教程*

### 查看命令

#### 帮助文档

6 种方式：

1. `<command> --help` 或 `<command> -h` - *显示当前指令帮助*（`--help` 或 `-h` 选项）
2. [help](#help) - *该命令是 bash 内建命令，用于显示 bash 内建命令的帮助信息。*
3. [info](#info) - *Linux下 info 格式的帮助指令*
4. [locate](#locate) - *找符合条件的文档，他会去保存文档和目录名称的数据库内，查找合乎范本样式条件的文档或目录*
5. [man](#man) - *查看 Linux 中的指令帮助*
    - [apropos](#apropos) - *在 whatis 数据库中查找字符串*

参考：

1. https://blog.csdn.net/Zhi_osX/article/details/80146259 - *linux命令-查看命令帮助文档_Zhi_osX的博客-CSDN博客*

#### 信息

3 种方式：

1. [command](#command) - *调用并执行指定的命令*
2. [compgen](#compgen) - *用于在 bash 中自动完成的内置命令，按两次 tab 键即可调用该命令*
3. [type](#type) - *显示指定命令的类型*

参考：

1. https://blog.csdn.net/weixin_39768645/article/details/110813072 - *linux查看系统_如何查看Linux系统上所有可以执行的命令和数量-CSDN博客*
2. https://blog.csdn.net/qq_18846849/article/details/130291960 - *【Linux】怎么在linux中列出可以使用的命令_linux查看可用命令-CSDN博客*
3. https://zhuanlan.zhihu.com/p/33833752 - *如何列出所有的 Bash Shell 内置命令 - 知乎*
4. https://www.linuxcool.com/compgen - *compgen命令 – 列出所有Linux命令 – Linux命令大全(手册)*

### 文件管理

#### 文件基本属性

![](https://www.runoob.com/wp-content/uploads/2014/06/file-llls22.jpg)

![](https://www.runoob.com/wp-content/uploads/2014/06/363003_1227493859FdXT.png)

<small>*插图来源于：[Linux 文件基本属性 | 菜鸟教程](https://www.runoob.com/linux/linux-file-attr-permission.html)*</small>

![](https://www.runoob.com/wp-content/uploads/2014/08/file-permissions-rwx.jpg)

![](https://www.runoob.com/wp-content/uploads/2014/08/rwx-standard-unix-permission-bits.png)

<small>*插图来源于：[Linux chmod 命令 | 菜鸟教程](https://www.runoob.com/linux/linux-comm-chmod.html)*</small>

https://www.runoob.com/linux/linux-file-attr-permission.html - *Linux 文件基本属性 | 菜鸟教程*

##### 文件权限管理

查看：

1. [ls](#ls) - *查看目录下面有多少文件以及文件的名字*

设置：

1. [chgrp](#chgrp) - *Change the group of each FILE to GROUP.*
2. [chmod](#chmod) - *控制用户对文件的权限的命令*
3. [chown](#chown) - *Change the owner and/or group of each FILE to OWNER and/or GROUP.*

#### 查看目录内容

2 种方式：

1. [ls](#ls) - *查看目录下面有多少文件以及文件的名字*

2. [tree](#tree) - *树状图列出目录的内容*

#### 查看文件[夹]大小

1 种方式：

1. [du](#du) - *Summarize device usage of the set of FILEs, recursively for directories.*

#### 切换目录

文件及目录以 `.` 开头的为隐藏文件或目录

1 种方式：

1. [cd](#cd) - *切换用户当前工作目录*

#### 查看路径

3 种方式：

1. [pwd](#pwd) - *显示当前工作目录的绝对路径*

2. [which](#which) - *查找并显示给定命令的绝对路径*

3. [whereis](#whereis) - *查找二进制程序、代码等相关文件路径*

#### 创建目录

1 种方式：

1. [mkdir](#mkdir) - *Linux mkdir（英文全拼：make directory）命令用于创建目录。*

#### 删除目录

2 种方式：

1. [rm](#rm) - *Remove (unlink) the FILE(s).*
2. [rmdir](#rmdir) - *Remove the DIRECTORY(ies), if they are empty.*

#### 查找文件[夹]

2 种方式：

1. [find](#find) - *在指定目录下查找文件和目录*
2. [locate](#locate) - *查找符合条件的文档，他会去保存文档和目录名称的数据库内，查找合乎范本样式条件的文档或目录*

参考：

1. https://www.ruanyifeng.com/blog/2009/10/5_ways_to_search_for_files_using_the_terminal.html - *Linux的五个查找命令 - 阮一峰的网络日志*

#### 创建文件

1 种方式：

1. [touch](#touch) - *Update the access and modification times of each FILE to the current time.*

#### 删除文件

1 种方式：

1. [rm](#rm) - *Remove (unlink) the FILE(s).*

#### 对比文件[夹]

1 种方式：

1. [diff](#diff) - *比较文件的差异*

#### 修改文件[夹]名

2 种方式：

1. [mv](#mv) - *为文件或目录改名、或将文件或目录移入其它位置*

2. [rename](#rename) - *用字符串替换的方式批量改变文件名*

#### 搜索文本

1 种方式：

1. [grep](#grep) - *强大的文本搜索工具*

#### 编辑文件

3 种方式：

1. [vi](os/tools/developer/editor/vim.md) - *功能强大的纯文本编辑器*
2. [vim](os/tools/developer/editor/vim.md) - *Vim 是从 vi 发展出来的一个文本编辑器*
3. [sed](#sed) - *功能强大的流式文本编辑器*

#### 去除重复行

不改变顺序去重

[awk](#awk) - *一种处理文本文件的语言，是一个强大的文本分析工具*

```bash
awk '!seen[$0]++' [file]...
```

示例：

```bash
history=$(tac < .bash_history | awk '!seen[$0]++' | tac) && echo "$history" > .bash_history
```

排序去重

[sort](#sort) - *将文本文件内容加以排序*

[uniq](#uniq) - *检查及删除文本文件中重复出现的行列，一般与 sort 命令结合使用*

```bash
sort [file]... | uniq
```

参考：

1. https://blog.axiaoxin.com/post/original-order-merge-uniq/ - *Linux 去除重复行而不改变顺序 - 阿小信的博客*

#### 写入文件

示例：

`echo 'runoob.com' > test.txt`

`echo 'runoob.com' >> test.txt`

#### 查看文件内容

1 种方式：

1. [cat](#cat) - *Concatenate FILE(s) to standard output.*

##### 分页显示

2 种方式：

1. [more](#more) - *Linux more 命令类似 cat ，不过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能（与 vi 相似），使用中的说明文件，请按 h 。*
2. [less](#less) - *less 与 more 类似，less 可以随意浏览文件，支持翻页和搜索，支持向上翻页和向下翻页。*

#### 实时查看文件内容变化

1 种方式：

1. [tail](#tail) -  命令可用于查看文件的内容，有一个常用的参数 -f 常用于查阅正在改变的日志文件。

#### 查看文件指定行

1 种方式：

1. [head](#head) - *命令可用于查看文件的开头部分的内容，有一个常用的参数 -n 用于显示行数，默认为 10，即显示 10 行的内容。*

#### 查看文件属性

3 种方式：

1. `ls -l [文件或目录...]`

2. [stat](#stat) - *以文字的格式来显示 inode 的内容*

3. [file](#file) - *辨识文件类型*

参考：

1. https://www.linuxprobe.com/linux-properties-permissions.html - *Linux文件之属性与权限详解 | 《Linux就该这么学》*
2.  https://blog.csdn.net/p309654858/article/details/127765811 - *Linux如何查看文件的属性_linux查看文件属性_music score的博客-CSDN博客*

#### 复制文件[夹]

1 种方式：

1. [cp](#cp) - *将文件或目录从一个位置复制到另一个位置，同时可以选择保留原文件的属性（如权限、时间戳等）*

#### 创建文件链接

1 种方式：

1. [ln](#ln) - *为某一个文件在另外一个位置建立一个同步的链接*

#### 删除文件链接

语法：

`rm -i symlink_name`

参考：

https://linuxize.com/post/how-to-remove-symbolic-links-in-linux/ - *How to Remove (Delete) Symbolic Links in Linux | Linuxize*

### 文件传输

暂无

### 系统管理

1. [free](#free) - *用于显示内存状态。*
2. [top](https://www.runoob.com/linux/linux-comm-top.html) - *是一个在 Linux 和其他类 Unix 系统上常用的实时系统监控工具。它提供了一个动态的、交互式的实时视图，显示系统的整体性能信息以及正在运行的进程的相关信息。*

#### 查看系统信息

1 种方式：

1. [uname](#uname) - *Print certain system information.*

示例：

1. `uname -a` - *查看版本和内核信息*

#### 变量

示例：

1. `echo $SHELL`
2. `echo $PATH`
3. `echo $PREFIX`
4. `echo $HOME`

https://wangdoc.com/bash/variable - *Bash 变量 - Bash 脚本教程 - 网道*

##### 环境变量

简介：

> 环境变量（environment variables）一般是指在[操作系统](https://baike.baidu.com/item/操作系统/192?fromModule=lemma_inlink)中用来指定操作系统运行环境的一些参数，如：[临时文件夹](https://baike.baidu.com/item/临时文件夹/1061467?fromModule=lemma_inlink)位置和[系统文件夹](https://baike.baidu.com/item/系统文件夹/5328647?fromModule=lemma_inlink)位置等。
>
> 环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)是在操作系统中一个具有特定名字的对象，它包含了一个或者多个应用[程序](https://baike.baidu.com/item/程序?fromModule=lemma_inlink)所将使用到的信息。例如[Windows](https://baike.baidu.com/item/Windows/165458?fromModule=lemma_inlink)和[DOS](https://baike.baidu.com/item/DOS/32025?fromModule=lemma_inlink)操作系统中的path环境变量，当要求系统运行一个[程序](https://baike.baidu.com/item/程序/71525?fromModule=lemma_inlink)而没有告诉它程序所在的完整路径时，系统除了在[当前目录](https://baike.baidu.com/item/当前目录/7205107?fromModule=lemma_inlink)下面寻找此程序外，还应到path中指定的路径去找。用户通过设置环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)，来更好的运行进程。
>
> —— [环境变量_百度百科](https://baike.baidu.com/item/环境变量/1730949)

教程：

https://wangdoc.com/bash/variable#环境变量 - *Bash 变量 - Bash 脚本教程 - 网道*

用法：

- 查看所有环境变量（2 种方式）

  1. [env](#env)
  2. [printenv](#printenv)
  
  https://wangchujiang.com/linux-command/c/env.html - *env 命令，Linux env 命令详解：显示系统中已存在的环境变量 - Linux 命令搜索引擎*

- 查看指定环境变量

  1. `echo $PATH`
  2. `printenv PATH`

  示例：

  1. `echo $NVM_NODEJS_ORG_MIRROR`
  2. `printenv NVM_NODEJS_ORG_MIRROR`

- 设置环境变量

  示例：

  1. `export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/` - *暂时性修改环境变量，终端窗口关闭后会重置*

  2. `gedit /etc/profile` - *永久修改 linux 环境变量*

  参考：

  1. https://blog.csdn.net/qq_36393978/article/details/130683444 - *Linux 系统修改环境变量的方法_linux 修改环境变量_Imagine Miracle的博客-CSDN博客*
  2. https://m.php.cn/faq/486664.html - *怎样修改linux的环境变量-linux运维-PHP中文网*

- 移除环境变量

  示例：

  `unset NVM_NODEJS_ORG_MIRROR`

##### 自定义变量

https://wangdoc.com/bash/variable#自定义变量 - *Bash 变量 - Bash 脚本教程 - 网道*

- 显示所有变量（包括环境变量和自定义变量），以及所有的 Bash 函数

  `set`

#### 查看当前用户

1 种方式：

1. [whoami](#whoami) - *显示自身用户名称。*

#### 修改用户密码

2 种方式：

1. [id](#id) - _查看登录用户信息_

2. `passwd` - _修改root密码_

    - `passwd [用户名]` - _修改其他用户密码_

#### 查看 Shell

4 种方式：

1. `echo $0`
2. `echo $SHELL`
3. `ps -p $$`
4. `cat /etc/shells`

参考：

1. https://www.dbs724.com/63477.html - *Linux 查看 Shell 版本的方法（linux查看shell版本）-数据库远程运维*

#### 退出 Shell

1 种方式：

1. [exit](#exit) - *Exit the shell.*

#### 定时任务

简介：

用来定期执行程序的命令。

用法：

https://www.runoob.com/linux/linux-comm-crontab.html - *Linux crontab 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/crontab.html - *crontab 命令，Linux crontab 命令详解：提交和管理用户的需要周期性执行的任务 - Linux 命令搜索引擎*

示例：

`* * * * /bin/ls` - *每一分钟执行一次 /bin/ls*

`0 6-12/3 * 12 * /usr/bin/backup` - *在 12 月内, 每天的早上 6 点到 12 点，每隔 3 个小时 0 分钟执行一次 /usr/bin/backup*

参考：

https://www.yisu.com/ask/23224601.html# - *linux中crontab的使用方法是什么 - 问答 - 亿速云*

#### 进程管理

https://www.cnblogs.com/kaituorensheng/p/3980334.html - *linux后台运行和关闭、查看后台任务 - jihite - 博客园*

##### 查看进程信息

2 种方式：

1. [ps](#ps) - *Information about running processes.*

2. [pstree](#pstree) - *A convenient tool to show running processes as a tree.*

##### 杀死进程

1 种方式：

1. [pkill](#pkill) - *Signal process by name.Mostly used for stopping processes.*

### 系统设置

#### 清屏

1 种方式：

1. [clear](#clear) - *清除当前屏幕终端上的任何信息。*

### 网络通讯

1. [Inetutils](#inetutils)
2. [dnsutils](#dnsutils)

### 备份压缩

暂无

## 内建命令

`compgen -b` - *列出所有内置命令*

命令列表：

1. .
2. :
3. [
4. [alias](#alias)
5. [bg](#bg)
6. [bind](#bind)
7. break
8. builtin
9. caller
10. [cd](#cd)
11. [command](#command)
12. [compgen](#compgen)
13. complete
14. compopt
15. continue
16. [declare](#declare)
17. dirs
18. disown
19. [echo](#echo)
20. enable
21. eval
22. [exec](#exec)
23. [exit](#exit)
24. [export](#export)
25. false
26. fc
27. [fg](#fg)
28. [getopts](#getopts)
29. hash
30. [help](#help)
31. [history](#history)
32. jobs
33. [kill](#kill)
34. let
35. local
36. logout
37. mapfile
38. popd
39. printf
40. pushd
41. [pwd](#pwd)
42. [read](#read)
43. readarray
44. readonly
45. return
46. [set](#set)
47. shift
48. [shopt](#shopt)
49. [source](#source)
50. suspend
51. test
52. times
53. [trap](#trap)
54. true
55. [type](#type)
56. typeset
57. ulimit
58. umask
59. [unalias](#unalias)
60. [unset](#unset)
61. wait

### alias

简介：

> Define or display aliases.

语法：

alias [-p] [name[=value] ... ]

参数：

`-p` - print all defined aliases in a reusable format

用法：

`help alias`

示例：

`alias -p`

### bg

简介：

> Move jobs to the background.

语法：

bg [job_spec ...]

参数：

`--help` - display this help and exit

示例：

```bash
bg --help
```

### bind

简介：

> Set Readline key bindings and variables.

语法：

bind [-lpsvPSVX] [-m keymap] [-f filename] [-q name] [-u name] [-r keyseq] [-x keyseq:shell-command] [keyseq:readline-function or readline-command]

参数：

`-l` - List names of functions.

`-p` - List functions and bindings in a form that can be reused as input.

用法：

`help bind`

示例：

`bind -l`

`bind -p`

### cd

简介：

> Change the shell working directory.

Change the current directory to DIR.  The default DIR is the value of the HOME shell variable. If DIR is "-", it is converted to $OLDPWD.

语法：

cd [-L|[-P [-e]] [-@]] [dir]

参数：

`--help` - *display this help and exit*

用法：

https://wangchujiang.com/linux-command/c/cd.html - *cd 命令，Linux cd 命令详解：切换用户当前工作目录。 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-cd.html - *Linux cd 命令 | 菜鸟教程*

示例：

`cd ~` - _**~** 表示当前用户的主目录，可以使用 cd 命令直接切换到主目录。_

`cd -` - *切换到上次访问的目录*

### command

简介：

> Execute a simple command or display information about commands.
>
> Runs COMMAND with ARGS suppressing  shell function lookup, or display information about the specified COMMANDs.  Can be used to invoke commands on disk when a function with the same name exists.

语法：

command [-pVv] command [arg ...]

参数：

`-p` - use a default value for PATH that is guaranteed to find all of the standard utilities

`-v` - print a description of COMMAND similar to the `type' builtin

`-V` - print a more verbose description of each COMMAND

用法：

https://tldr.inbrowser.app/pages.zh/common/command - *command | tldr InBrowser.App*

https://wangchujiang.com/linux-command/c/command.html - *command 命令，Linux command 命令详解：调用并执行指定的命令 - Linux 命令搜索引擎*

https://manned.org/command - *command - manned.org*

示例：

`command --help`

### compgen

简介：

> Display possible completions depending on the options.
>
> Intended to be used from within a shell function generating possible completions.  If the optional WORD argument is supplied, matches against WORD are generated.

语法：

compgen [-abcdefgjksuv] [-o option] [-A action] [-G globpat] [-W wordlist] [-F function] [-C command] [-X filterpat] [-P prefix] [-S suffix] [word]

参数：

`-c` - 显示所有可以执行的命令

`-b` - 列出所有内置命令

`-a` - 列出所有别名

`-k` - 列出所有 shell 的保留关键字

用法：

https://tldr.inbrowser.app/pages.zh/common/compgen - *compgen | tldr InBrowser.App*

示例：

`compgen --help`

`compgen -A function` - *列出所有可以运行的函数*

### declare

简介：

> Set variable values and attributes.
>
> Declare variables and give them attributes. If no NAMEs are given, display the attributes and values of all variables.

语法：

declare [-aAfFgiIlnrtux] [name[=value] ...] or declare -p [-aAfFilnrtux] [name ...]

参数：

`-f` - restrict action or display to function names and definitions

`-F` - restrict display to function names only (plus line number and source file when debugging)

用法：

```bash
declare --help
```

### echo

简介：

> Write arguments to the standard output.
>
> Display the ARGs, separated by a single space character and followed by a newline, on the standard output.

语法：

echo [-neE] [arg ...]

参数：

`-n` - do not append a newline

用法：

https://tldr.inbrowser.app/pages/common/echo - *echo | tldr InBrowser.App*

示例：

`echo "Hello World" >> file.txt` - *Print a message without the trailing newline*


### exec

简介：

> Replace the shell with the given command.

语法：

exec [-cl] [-a name] [command [argument ...]] [redirection ...]

参数：

`-a name` - pass NAME as the zeroth argument to COMMAND

用法：

```bash
exec --help
```

### exit

简介：

> Exit the shell.

语法：

exit [n]

参数：

无

用法：

https://www.runoob.com/linux/linux-comm-exit.html - *Linux exit命令 | 菜鸟教程*

示例：

`exit --help`

### export

简介：

> Set export attribute for shell variables.

语法：

export [-fn] [name[=value] ...] or export -p

`export` - *为shell变量或函数设置导出属性*

参数：

`-f` - refer to shell functions

`-n` - remove the export property from each NAME

`-p` - display a list of all exported variables and functions

用法：

https://wangchujiang.com/linux-command/c/export.html - *export 命令，Linux export 命令详解：为shell变量或函数设置导出属性。 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-export.html - *Linux export命令 | 菜鸟教程*

示例：

```bash
export --help
```

### fg

简介：

> Move job to the foreground.

语法：

fg [job_spec]

参数：

无

用法：

```bash
fg --help
```

### getopts

简介：

> Parse option arguments.
>
> Getopts is used by shell procedures to parse positional parameters as options.

语法：

getopts optstring name [arg ...]

参数：

`--help` - display this help and exit

用法：

```bash
getopts --help
```

### help

简介：

> Display information about builtin commands.

语法：

help [-dms] [pattern ...]

参数：

`-d` - output short description for each topic

`-m` - display usage in pseudo-manpage format

`-s` - output only a short usage synopsis for each topic matching PATTERN

用法：

https://wangchujiang.com/linux-command/c/help.html - *help 命令，Linux help 命令详解：该命令是bash内建命令，用于显示bash内建命令的帮助信息。 - Linux 命令搜索引擎*

示例：

`help --help`

### history

简介：

> Display or manipulate the history list.

语法：

`history [-c] [-d offset] [n]`

or `history -anrw [filename]`

or `history -ps arg [arg...]`

参数：

`-c` - clear the history list by deleting all of the entries

`-r` - read the history file and append the contents to the history list

`-d offset` - delete the history entry at position OFFSET. Negative offsets count back from the end of the history list

用法：

在终端中关闭后不记录历史记录，可以通过以下几种方法来实现：

1. **禁用历史记录**：
   在终端中输入以下命令，可以暂时禁用历史记录：
   ```bash
   unset HISTFILE
   ```

2. **修改 Bash 配置**：
   你可以在 `~/.bashrc` 文件中添加以下行，这样每次打开终端时都会禁用历史记录：
   ```bash
   export HISTFILE=/dev/null
   ```

3. **临时不记录某次会话**：
   如果你只想在当前会话中不记录历史，可以在打开终端时运行：
   ```bash
   set +o history
   ```
   完成后，你可以通过 `set -o history` 恢复记录。

4. **清除历史记录**：
   如果你已经有历史记录并想清除，可以使用：
   ```bash
   history -c
   ```

示例：

`history --help` 或 `help history`

参考：

https://wangchujiang.com/linux-command/c/history.html - *history 命令，Linux history 命令详解：显示或操作历史列表。 - Linux 命令搜索引擎*

https://blog.csdn.net/u012581020/article/details/131635514 - *Linux 系统 history（查看执行命令历史） 命令详解_linux history-CSDN博客*

### kill

简介：

> Send a signal to a job.

语法：

kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]

参数：

`-l` - list the signal names; if arguments follow `-l' they are assumed to be signal numbers for which names should be listed

用法：

https://wangchujiang.com/linux-command/c/kill.html - *kill 命令，Linux kill 命令详解：发送信号到进程。 - Linux 命令搜索引擎*

示例：

`kill --help` - *display this help and exit*

### pwd

简介：

> Print the name of the current working directory.

语法：

pwd [-LP]

参数：

`-L`	print the value of $PWD if it names the current working directory

`-P`	print the physical directory, without any symbolic links

By default, `pwd' behaves as if `-L' were specified.

用法：

https://www.runoob.com/linux/linux-comm-pwd.html - *Linux pwd命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/pwd.html - *pwd 命令，Linux pwd 命令详解：显示当前工作目录的绝对路径。 - Linux 命令搜索引擎*

示例：

`pwd --help` - *display this help and exit*

### read

简介：

> Read a line from the standard input and split it into fields.

语法：

read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [name ...]

参数：

`-a array` - assign the words read to sequential indices of the array variable ARRAY, starting at zero

用法：

```bash
read --help
```

参考：

https://www.runoob.com/linux/linux-comm-read.html - *Linux read 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/read.html - *read 命令，Linux read 命令详解：从键盘读取变量值 - Linux 命令搜索引擎*

https://wangdoc.com/bash/read - *read 命令 - Bash 脚本教程 - 网道*

### set

简介：

> Set or unset values of shell options and positional parameters.

语法：

set [-abefhkmnptuvxBCEHPT] [-o option-name] [--] [-] [arg ...]

参数：

`-a` - Mark variables which are modified or created for export.

用法：

```bash
set --help
```

### shopt

简介：

> Set and unset shell options.
>
> Change the setting of each shell option OPTNAME.  Without any option arguments, list each supplied OPTNAME, or all shell options if no OPTNAMEs are given, with an indication of whether or not each is set.

语法：

shopt [-pqsu] [-o] [optname ...]

参数：

`--help` - display this help and exit

`-o` - restrict OPTNAMEs to those defined for use with `set -o'

`-p` - print each shell option with an indication of its status

`-q` - suppress output

`-s` - enable (set) each OPTNAME

`-u` - disable (unset) each OPTNAME

用法：

```bash
shopt --help
```

### source

简介：

> `source` - *在当前Shell环境中从指定文件读取和执行命令*

语法：

source filename [arguments]

用法：

https://linuxize.com/post/bash-source-command/ - *Bash Source Command | Linuxize*

https://wangchujiang.com/linux-command/c/source.html - *source 命令，Linux source 命令详解：在当前Shell环境中从指定文件读取和执行命令。 - Linux 命令搜索引擎*

### trap

简介：

> Trap signals and other events.
> 
> Defines and activates handlers to be run when the shell receives signals or other conditions.

语法：

trap [-Plp] [[action] signal_spec ...]

参数：

`--help` - display this help and exit

`-l` - print a list of signal names and their corresponding numbers

`-p` - display the trap commands associated with each SIGNAL_SPEC in a form that may be reused as shell input; or for all trapped signals if no arguments are supplied

`-P` - display the trap commands associated with each SIGNAL_SPEC. At least one SIGNAL_SPEC must be supplied. -P and -p cannot be used together.

用法：

```bash
trap --help
```

示例：

```bash
trap -l
```

参考：

<https://wangdoc.com/bash/mktemp#trap-命令> - *mktemp 命令，trap 命令 - Bash 脚本教程 - 网道*

### type

简介：

> Display information about command type.

语法：

type [-afptP] name [name ...]

参数：

`-t` - 根据 name 的类型返回一个单词（别名，关键字，函数，内建，文件），否则返回空值。

`-p` - 显示要执行的磁盘文件的名称

`-a` - 显示包含指定可执行文件的所有位置

用法：

<https://wangdoc.com/bash/grammar#type-命令> - *Bash 的基本语法 - Bash 脚本教程 - 网道*

https://wangchujiang.com/linux-command/c/type.html - *type 命令，Linux type 命令详解：显示指定命令的类型。 - Linux 命令搜索引擎*

https://linuxhandbook.com/type-command/ - *Use Type Command in Linux to Get More Info About Commands*

https://www.baeldung.com/linux/hash-command - *The Linux hash Command | Baeldung on Linux*

示例：

`type --help`

### unalias

简介：

> Remove each NAME from the list of defined aliases.

语法：

unalias [-a] name [name ...]

参数：

`-a` - remove all alias definitions

用法：

```bash
unalias --help
```

### unset

简介：

> Unset values and attributes of shell variables and functions.

语法：

unset [-f] [-v] [-n] [name ...]

参数：

`-f` - treat each NAME as a shell function

`-v` - treat each NAME as a shell variable

`-n` - treat each NAME as a name reference and unset the variable itself rather than the variable it references

用法：

```bash
unset --help
```

## GNU 软件包

https://www.gnu.org/software/software.html - *Software - GNU Project - Free Software Foundation*

### Bash

https://www.gnu.org/software/bash/ - *Bash - GNU Project - Free Software Foundation*

#### bash

简介：

> Bash is an sh-compatible command language interpreter that executes commands read from the standard input or from a file.  Bash also incorporates useful features from the Korn and C shells (ksh and csh).
>
> Bash is intended to be a conformant implementation of the Shell and Utilities portion of the IEEE POSIX specification (IEEE Standard 1003.1).  Bash can be configured to be POSIX-conformant by default.

语法：

bash [GNU long option] [option] ...

bash [GNU long option] [option] script-file ...

参数：

`--help` - Display a usage message on standard output and exit successfully.

`--version` - Show version information for this instance of bash on the standard output and exit successfully.

用法：

https://tldr.inbrowser.app/pages/common/bash - *bash | tldr InBrowser.App*

示例：

`bash --help`

`man -a bash`

### Coreutils

https://www.gnu.org/software/coreutils/ - *Coreutils - GNU core utilities*

```bash
pkg f coreutils
```

#### cat

简介：

> cat（英文全拼：concatenate）命令用于连接文件并打印到标准输出设备上，它的主要作用是用于查看和连接文件。

https://www.gnu.org/software/coreutils/cat

语法：

`cat [选项] [文件] `

参数：

`-n`：显示行号，会在输出的每一行前加上行号。

`-b`：显示行号，但只对非空行进行编号。

用法：

https://www.runoob.com/linux/linux-comm-cat.html - *Linux cat 命令 | 菜鸟教程*

#### chgrp

简介：

> Change the group of each FILE to GROUP.

语法：

chgrp [OPTION]... GROUP FILE...

or:  chgrp [OPTION]... --reference=RFILE FILE...

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-chgrp.html - *Linux chgrp 命令 | 菜鸟教程*

示例：

```bash
chgrp --help
```

#### chmod

简介：

> Change the mode of each FILE to MODE.

语法：

chmod [OPTION]... MODE[,MODE]... FILE...

or:  chmod [OPTION]... OCTAL-MODE FILE...

or:  chmod [OPTION]... --reference=RFILE FILE...

参数：

`-c`, `--changes` - *like verbose but report only when a change is made*

`-R`, `--recursive` - *change files and directories recursively*

用法：

https://www.runoob.com/linux/linux-comm-chmod.html - *Linux chmod 命令 | 菜鸟教程*

示例：

`chmod --help`

`chmod +x ` <文件名> - *给指定文件增加可执行权限*

#### chown

简介：

> Change the owner and/or group of each FILE to OWNER and/or GROUP.

语法：

chown [OPTION]... [OWNER][:[GROUP]] FILE...

or:  chown [OPTION]... --reference=RFILE FILE...

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-chown.html - *Linux chown 命令 | 菜鸟教程*

示例：

```bash
chown --help
```

#### cp

简介：

> Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.

语法：

cp [OPTION]... [-T] SOURCE DEST

or:  cp [OPTION]... SOURCE... DIRECTORY

or:  cp [OPTION]... -t DIRECTORY SOURCE...

`cp [选项] [源文件或目录] [目标文件或目录]`

参数：

`--help` - *display this help and exit*

`--version` - *output version information and exit*

用法：

https://www.runoob.com/linux/linux-comm-cp.html - *Linux cp 命令 | 菜鸟教程*

示例：

`cp --help`

#### du

简介：

`du` 英文全拼：disk usage，用于显示目录或文件的大小。

https://www.gnu.org/software/coreutils/du - *du invocation (GNU Coreutils 9.5)*

语法：

du [OPTION]... [FILE]...

or:  du [OPTION]... --files0-from=F

参数：

`-a`, `--all` - write counts for all files, not just directories

`-c`, `--total` - produce a grand total

`-h`, `--human-readable` - print sizes in human readable format (e.g., 1K 234M 2G)

`-d`, `--max-depth=N` - print the total for a directory (or file, with --all) only if it is N or fewer levels below the command line argument;  --max-depth=0 is the same as --summarize

`-s`, `--summarize` - display only a total for each argument

`--time` - show time of the last modification of any file in the directory, or any of its subdirectories

用法：

https://www.runoob.com/linux/linux-comm-du.html - *Linux du 命令 | 菜鸟教程*

示例：

`du -ach --max-depth=1`

`du -ch *` - *列出当前目录以及子目录下每个文件和文件夹的大小（不包含隐藏文件）*

`du -chs *` - *列出当前目录下每个文件和文件夹的大小（不包含隐藏文件）*

`du -sh` - *统计当前目录的大小*

`du --help`

#### env

简介：

> Set each NAME to VALUE in the environment and run COMMAND.

语法：

env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/env

示例：

```bash
env --help
```

#### head

简介：

> head 命令可用于查看文件的开头部分的内容，有一个常用的参数 -n 用于显示行数，默认为 10，即显示 10 行的内容。

语法：

`head -3 [文件名]`

参数：

`-q`：隐藏文件名

`-v`：显示文件名

`-c <数目>`：显示的字节数。

`-n <行数>`：显示的行数。

用法：

http://www.runoob.com/linux/linux-comm-head.html - *Linux head 命令 | 菜鸟教程*

#### id

简介：

> Print user and group information for each specified USER, or (when USER omitted) for the current process.

语法：

id [OPTION]... [USER]...

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/id

示例：

```bash
id --help
```

#### ln

简介：

ln（英文全拼：link files）命令是一个非常重要命令，它的功能是为某一个文件在另外一个位置建立一个同步的链接。

语法：

`ln -s <source_file> <symbolic_link>`

用法：

https://wangchujiang.com/linux-command/c/ln.html - *ln 命令，Linux ln 命令详解：用来为文件创建链接 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-ln.html - *Linux ln 命令 | 菜鸟教程*

示例：

`ln --help` - *display this help and exit*

参考：

1. https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/ - *Ln Command in Linux (Create Symbolic Links) | Linuxize*

#### ls

简介：

List information about the FILEs (the current directory by default).

https://www.gnu.org/software/coreutils/ls - *ls invocation (GNU Coreutils 9.5)*

语法：

ls [OPTION]... [FILE]...

参数：

`-l` - 查看所有文件的属性

`-lh` - 以人类可读的方式显示当前目录中的文件和目录大小

`-a` - 显示所有文件（包含隐藏文件）

`-R` - 递归显示目录中的所有文件和子目录

`-A` - 显示除 "." 和 ".." 外的所有文件

`-d` - 将目录名像其它文件一样列出，而不是列出它们的内容

`-F` - 在每个文件名后附上一个字符以说明该文件的类型。"*" 表示普通的可执行文件；"/" 表示目录；"@" 表示符号链接；"|" 表示 FIFOs；"=" 表示套接字 (sockets) ；什么也没有则表示普通文件

不同颜色代表的文件类型：
- 蓝色：目录
- 浅蓝色：链接文件
- 绿色：可执行文件
- 白色：一般性文件，如文本文件，配置文件等
- 红色：压缩文件或归档文件
- 红色闪烁：链接文件存在问题
- 黄色：设备文件
- 青黄色：管道文件

用法：

https://wangchujiang.com/linux-command/c/ls.html - *ls 命令，Linux ls 命令详解：显示目录内容列表 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-ls.html - *Linux ls命令 | 菜鸟教程*

https://zhuanlan.zhihu.com/p/635083904 - *Linux中的20个基本“ls”命令示例 - 知乎*

示例：

`ls --help` - *display this help and exit*

`ls -l` - *查看文件权限*

#### md5sum

简介：

Print or check MD5 (128-bit) checksums.

语法：

`md5sum [OPTION]... [FILE]...`

参数：

`--help` - *display this help and exit*

用法：

https://www.gnu.org/software/coreutils/md5sum

示例：

```bash
md5sum --help
```

#### mkdir

简介：

Create the DIRECTORY(ies), if they do not already exist.

https://www.gnu.org/software/coreutils/mkdir - *mkdir invocation (GNU Coreutils 9.5)*

语法：

`mkdir [目录名]`

`mkdir [OPTION]... DIRECTORY...`

参数：

`--help` - *display this help and exit*

用法：

https://www.runoob.com/linux/linux-comm-mkdir.html - *Linux mkdir 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/mkdir.html - *mkdir 命令，Linux mkdir 命令详解：用来创建目录 - Linux 命令搜索引擎*

示例：

```bash
mkdir --help
```

#### mktemp

简介：

Create a temporary file or directory, safely, and print its name.

语法：

`mktemp [OPTION]... [TEMPLATE]`

参数：

`--help` - *display this help and exit*

用法：

https://www.gnu.org/software/coreutils/mktemp

示例：

```bash
mktemp --help
```

#### mv

简介：

> Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.

语法：

`mv [源文件名] [目标文件名]`

mv [OPTION]... [-T] SOURCE DEST

or:  mv [OPTION]... SOURCE... DIRECTORY

or:  mv [OPTION]... -t DIRECTORY SOURCE...

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-mv.html - *Linux mv 命令 | 菜鸟教程*

示例：

```bash
mv --help
```

#### nl

简介：

Write each FILE to standard output, with line numbers added.

With no FILE, or when FILE is -, read standard input.

语法：

nl [OPTION]... [FILE]...

参数：

`--help` - *display this help and exit*

`--version` - *output version information and exit*

用法：

https://wangchujiang.com/linux-command/c/nl.html - *nl 命令，Linux nl 命令详解：为每一个文件添加行号。 - Linux 命令搜索引擎*

示例：

`nl --help`

#### printenv

简介：

> Print the values of the specified environment VARIABLE(s).    If no VARIABLE is specified, print name and value pairs for them all.

语法：

printenv [OPTION]... [VARIABLE]...

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/printenv

示例：

```bash
printenv --help
```

#### pwd

简介：

> Print the name of the current working directory.

语法：

pwd [-LP]

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/pwd

示例：

```bash
pwd --help
```

#### rm

简介：

> Remove (unlink) the FILE(s).

https://www.gnu.org/software/coreutils/rm

语法：

`rm [OPTION]... [FILE]...`

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-rm.html - *Linux rm 命令 | 菜鸟教程*

示例：

`rm -r [目录名]` - *删除目录*

`rm [文件名]` - *删除文件*

#### rmdir

简介：

> Remove the DIRECTORY(ies), if they are empty.

语法：

rmdir [OPTION]... DIRECTORY...

参数：

`-p`, `--parents` - *remove DIRECTORY and its ancestors; e.g., 'rmdir -p a/b' is similar to 'rmdir a/b a'*

用法：

http://www.runoob.com/linux/linux-comm-rmdir.html - *Linux rmdir 命令 | 菜鸟教程*

示例：

`rmdir --help`

#### sha1sum

简介：

Print or check SHA1 (160-bit) checksums.

语法：

`sha1sum [OPTION]... [FILE]...`

参数：

`--help` - *display this help and exit*

用法：

https://www.gnu.org/software/coreutils/sha1sum

示例：

```bash
sha1sum --help
```

#### sha224sum

简介：

Print or check SHA224 (224-bit) checksums.

语法：

`sha224sum [OPTION]... [FILE]...`

参数：

`--help` - *display this help and exit*

用法：

https://www.gnu.org/software/coreutils/sha224sum

示例：

```bash
sha224sum --help
```

#### sha256sum

简介：

Print or check SHA256 (256-bit) checksums.

语法：

`sha256sum [OPTION]... [FILE]...`

参数：

`--help` - *display this help and exit*

用法：

https://www.gnu.org/software/coreutils/sha256sum

示例：

```bash
sha256sum --help
```

#### sha384sum

简介：

Print or check SHA384 (384-bit) checksums.

语法：

`sha384sum [OPTION]... [FILE]...`

参数：

`--help` - *display this help and exit*

用法：

https://www.gnu.org/software/coreutils/sha384sum

示例：

```bash
sha384sum --help
```

#### sha512sum

简介：

Print or check SHA512 (512-bit) checksums.

语法：

`sha512sum [OPTION]... [FILE]...`

参数：

`--help` - *display this help and exit*

用法：

https://www.gnu.org/software/coreutils/sha512sum

示例：

```bash
sha512sum --help
```

#### sort

简介：

> Write sorted concatenation of all FILE(s) to standard output. With no FILE, or when FILE is -, read standard input.

语法：

sort [OPTION]... [FILE]...

or:  sort [OPTION]... --files0-from=F

参数：

`-c`, `--check`, `--check=diagnose-first` - *check for sorted input; do not sort*

`-o`, `--output=FILE` - *write result to FILE instead of standard output*

`-k`, `--key=KEYDEF` - *sort via a key; KEYDEF gives location and type*

`-u`, `--unique` - *with -c, check for strict ordering; without -c, output only the first of an equal run*

用法：

https://www.runoob.com/linux/linux-comm-sort.html - *Linux sort命令 | 菜鸟教程*

示例：

`sort --help`

#### stat

简介：

> Display file or file system status.

语法：

stat [OPTION]... FILE...

参数：

`-f`, `--file-system` - *display file system status instead of file status*

`--help` - *display this help and exit*

`--version` - *output version information and exit*

用法：

https://www.runoob.com/linux/linux-comm-stat.html - *Linux stat 命令 | 菜鸟教程*

示例：

`stat --help`

#### tac

简介：

> Write each FILE to standard output, last line first.

语法：

tac [OPTION]... [FILE]...

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/tac

示例：

```bash
tac --help
```

#### tail

简介：

> tail 命令可用于查看文件的内容，有一个常用的参数 -f 常用于查阅正在改变的日志文件。

https://www.gnu.org/software/coreutils/tail

语法：

`tail [参数] [文件]`

参数：

`-f`：循环读取

`-q`：不显示处理信息

参考：

1. https://www.runoob.com/linux/linux-comm-tail.html - *Linux tail 命令 | 菜鸟教程*
2. https://www.cnblogs.com/javabg/p/16813251.html - *Linux实时查看文件内容变化 - 关键步就几步 - 博客园*
3. https://blog.csdn.net/u012581020/article/details/131332490 - *Linux 实时查看文件 tail 命令详解_tail -n-CSDN博客*

#### touch

简介：

> Update the access and modification times of each FILE to the current time.

语法：

`touch [文件名]`

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-touch.html - *Linux touch命令 | 菜鸟教程*

#### tty

简介：

> Print the file name of the terminal connected to standard input.

语法：

tty [OPTION]...

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/tty

示例：

```bash
tty --help
```

#### uname

简介：

> Print certain system information. With no OPTION, same as -s.

语法：

uname [OPTION]...

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/uname

示例：

```bash
uname --help
```

#### uniq

简介：

> Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output).

语法：

uniq [OPTION]... [INPUT [OUTPUT]]
参数：

`-c`, `--count` - *prefix lines by the number of occurrences*

用法：

https://www.runoob.com/linux/linux-comm-uniq.html - *Linux uniq 命令 | 菜鸟教程*

示例：

`uniq --help`

#### wc

简介：

> Print newline, word, and byte counts for each FILE, and a total line if more than one FILE is specified.

语法：

wc [OPTION]... [FILE]...

or: wc [OPTION]... --files0-from=F

参数：

`-c`, `--bytes` - print the byte counts

`-m`, `--chars` - print the character counts

`-l`, `--lines` - print the newline counts

用法：

https://www.gnu.org/software/coreutils/wc

示例：

```bash
wc --help
```

#### whoami

简介：

> Print the user name associated with the current effective user ID.

语法：

whoami [OPTION]...

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/coreutils/whoami

https://www.runoob.com/linux/linux-comm-whoami.html - *Linux whoami命令 | 菜鸟教程*

示例：

```bash
whoami --help
```

### Diffutils

https://www.gnu.org/software/diffutils/ - *Diffutils - GNU Project - Free Software Foundation*

#### diff

简介：

> Compare FILES line by line.

语法：

`diff [文件或目录1] [文件或目录2]`

diff [OPTION]... FILES

FILES are 'FILE1 FILE2' or 'DIR1 DIR2' or 'DIR FILE' or 'FILE DIR'.                                                         If `--from-file` or `--to-file` is given, there are no restrictions on FILE(s).                                                 If a FILE is '-', read standard input.

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-diff.html - *Linux diff 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/diff.html - *diff 命令，Linux diff 命令详解：比较给定的两个文件的不同 - Linux 命令搜索引擎*

https://phoenixnap.com/kb/linux-diff - *Linux diff Command {Syntax, Options and Examples}*

示例：

`man -a diff`

`diff --help`

`diff -c [文件或目录1] [文件或目录2]` - *以上下文 (context) 模式比较差异*

`diff -u [文件或目录1] [文件或目录2]` - *以联合 (unified) 模式比较差异*

`diff -y -W 50 [文件或目录1] [文件或目录2]` - *并排格式输出*

#### diff3

> Compare three files line by line.

#### sdiff

> Side-by-side merge of differences between FILE1 and FILE2.

#### cmp

> Compare two files byte by byte.

### Findutils

https://www.gnu.org/software/findutils/

#### find

简介：

> search for files in a directory hierarchy.

语法：

find [-H] [-L] [-P] [-Olevel] [-D debugopts] [path...] [expression]

参数：

`--help` - display this help and exit
`--version` - output version information and exit


用法：

https://www.runoob.com/linux/linux-comm-find.html - *Linux find 命令 | 菜鸟教程*

示例：

`find / -name inputrc 2>/dev/null`   - 从根目录开始搜索名为 inputrc 的文件，并将错误信息重定向到 /dev/null 以避免显示无权限访问的错误。

#### xargs

简介：

> Run COMMAND with arguments INITIAL-ARGS and more arguments read from input.

语法：

xargs [OPTION]... COMMAND [INITIAL-ARGS]...

参数：

`--help` - display this help and exit

用法：

https://www.gnu.org/software/findutils/

示例：

```bash
xargs --help
```

### Gawk

https://www.gnu.org/software/gawk/ - *Gawk - GNU Project - Free Software Foundation (FSF)*

#### awk

简介：

> Gawk is the GNU Project's implementation of the AWK programming language.  It conforms to the definition of the language in the POSIX 1003.1 standard.

语法：

gawk [ POSIX or GNU style options ] -f program-file [ -- ] file ...

gawk [ POSIX or GNU style options ] [ -- ] program-text file ...

参数：

`-F fs`, `--field-separator fs` - *Use fs for the input field separator (the value of the FS predefined variable).*

用法：

https://www.runoob.com/linux/linux-comm-awk.html - *Linux awk 命令 | 菜鸟教程*

示例：

`awk --help`

`man -a gawk`

参考：

https://www.ruanyifeng.com/blog/2018/11/awk.html - *awk 入门教程 - 阮一峰的网络日志*

### Grep

> Grep searches one or more input files for lines containing a match to a specified pattern. By default, Grep outputs the matching lines.

https://www.gnu.org/software/grep/ - *Grep - GNU Project - Free Software Foundation*

#### grep

简介：

> Search for PATTERNS in each FILE.

语法：

`grep [OPTION]... PATTERNS [FILE]...`

用法：

https://wangchujiang.com/linux-command/c/grep.html - *grep 命令，Linux grep 命令详解：强大的文本搜索工具 - Linux 命令搜索引擎*

示例：

`history | grep git` - *搜索命令行历史记录中输入过 `git` 命令的记录*

### Inetutils

https://www.gnu.org/software/inetutils/ - *Inetutils - Network utilities - GNU Project - Free Software Foundation*

#### hostname

暂无

#### ifconfig

https://www.gnu.org/software/inetutils/manual/html_node/ifconfig-invocation.html - *ifconfig invocation (GNU Inetutils)*

简介：

用于显示或设置网络设备。

 用法：

 https://www.runoob.com/linux/linux-comm-ifconfig.html - *Linux ifconfig命令 | 菜鸟教程*

示例：

`ifconfig`

#### ping

https://www.gnu.org/software/inetutils/manual/html_node/ping-invocation.html - *ping invocation (GNU Inetutils)*

简介：

用于检测主机。

用法：

https://www.runoob.com/linux/linux-comm-ping.html - *Linux ping 命令 | 菜鸟教程*

示例：

`ping www.runoob.com` - *ping <主机名称>*

`ping 120.240.82.52` - *ping <IP 地址>*

#### ping6

暂无

#### telnet

https://www.gnu.org/software/inetutils/manual/html_node/telnet-invocation.html - *telnet invocation (GNU Inetutils)*

简介：

登录远程主机和管理（测试 ip 端口是否连通）。

用法：

https://wangchujiang.com/linux-command/c/telnet.html - *telnet 命令，Linux telnet 命令详解：登录远程主机和管理(测试ip端口是否连通) - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages/common/telnet - *telnet | tldr InBrowser.App*

示例：

`telnet towel.blinkenlights.nl` - *Telnet to Star Wars animation*

参考：

https://www.easyswoole.com/QuickStart/problem.html - *easyswoole 常见问题*

http://note.iawen.com/note/tools/telnet - *使用 telnet 来调试网络问题 - Iawen's Blog - 我喜欢这样自由的随手涂鸦, 因为我喜欢风......*

#### traceroute

https://www.gnu.org/software/inetutils/manual/html_node/traceroute-invocation.html - *traceroute invocation (GNU Inetutils)*

简介：

显示数据包到主机间的路径。

用法：

http://www.runoob.com/linux/linux-comm-traceroute.html - *Linux traceroute命令 | 菜鸟教程*

示例：

`traceroute www.google.com`

参考：

https://www.cisco.com/c/zh_cn/support/docs/ip/ip-routed-protocols/22826-traceroute.html - *使用操作系统的 traceroute 命令 - Cisco*

#### whois

https://www.gnu.org/software/inetutils/manual/html_node/whois-invocation.html - *whois invocation (GNU Inetutils)*

简介：

用于查找并显示用户信息。

用法：

https://www.runoob.com/linux/linux-comm-whois.html - *Linux whois命令 | 菜鸟教程*

示例：

`whois root` - *查找 root 用户信息*

`whois github.com` - *查询域名信息*

### Sed

https://www.gnu.org/software/sed/ - *GNU sed - GNU Project - Free Software Foundation*

#### sed

简介：

> sed - stream editor for filtering and transforming text

语法：

sed [OPTION]... {script-only-if-no-other-script} [input-file]...

`sed 's/要被取代的字串/新的字串/g'` - *数据查看与替换*

参数：

`--help` - display this help and exit

`--version` - output version information and exit

用法：

https://www.runoob.com/linux/linux-comm-sed.html - *Linux sed 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/sed.html - *sed 命令，Linux sed 命令详解：功能强大的流式文本编辑器 - Linux 命令搜索引擎*

示例：

`sed --help`

`info sed`

`man -a sed`

### Tar

https://www.gnu.org/software/tar/ - *Tar - GNU Project - Free Software Foundation*

#### tar

暂无

### Texinfo

https://www.gnu.org/software/texinfo/ - *Texinfo - GNU Documentation System - GNU Project - Free Software Foundation (FSF)*

#### info

简介：

> Read documentation in Info format.

语法：

info [OPTION]... [MENU-ITEM...]

参数：

`-a`, `--all` - *use all matching manuals*

用法：

https://wangchujiang.com/linux-command/c/info.html - *info 命令，Linux info 命令详解：Linux下info格式的帮助指令 - Linux 命令搜索引擎*

示例：

`info --help`

`man info`

### Wget

https://www.gnu.org/software/wget/ - *Wget - GNU Project - Free Software Foundation*

#### wget

暂无

## 其它软件包

### dnsutils

https://www.isc.org/downloads/bind/ - *BIND 9 - ISC*

#### dig

简介：

域名查询工具。

用法：

https://wangchujiang.com/linux-command/c/dig.html - *dig 命令，Linux dig 命令详解：域名查询工具 - Linux 命令搜索引擎*

示例：

`dig github.com`

参考：

https://zhuanlan.zhihu.com/p/377555624 - *DNS解析-dig工具的使用*

https://linuxize.com/post/how-to-use-dig-command-to-query-dns-in-linux/ - *Dig Command in Linux (DNS Lookup) | Linuxize*

#### nslookup

简介：

查询域名 DNS 信息的工具。

用法：

https://wangchujiang.com/linux-command/c/nslookup.html - *nslookup 命令，Linux nslookup 命令详解：查询域名DNS信息的工具 - Linux 命令搜索引擎*

示例：

`nslookup`

`nslookup github.com`

### file

简介：

> Command-line tool that tells you in words what kind of data a file contains

官方：

https://darwinsys.com/file/ - *Ian Darwin's Fine Free File Command*

#### file

简介：

Determine type of FILEs.

语法：

file [OPTION...] [FILE...]

参数：

`--help` - *display this help and exit*

`-v`, `--version` - *output version information and exit*

用法：

https://www.runoob.com/linux/linux-comm-file.html - *Linux file命令 | 菜鸟教程*

示例：

`file --help`

### Less

简介：

> Terminal pager program used to view the contents of a text file one screen at a time

官方：

https://www.greenwoodsoftware.com/less/ - *Less*

#### less

简介：

> Less is a program similar to more(1), but it has many more features.

语法：

less -?

less --help

less -V

less --version

less [-[+]aABcCdeEfFgGiIJKLmMnNqQrRsSuUVwWX~]\
    [-b space] [-h lines] [-j line] [-k keyfile]\
    [-{oO} lo``gfile] [-p pattern] [-P prompt] [-t tag]\
    [-T tagsfile] [-x tab,...] [-y lines] [-[z] lines]\
    [-# shift] [+[+]cmd] [--] [filename]...

参数：

`-e` - *当文件显示结束后，自动离开*

`-m` - *显示类似 more 命令的百分比*

`-N` - *显示每行的行号*

用法：

http://www.runoob.com/linux/linux-comm-less.html - *Linux less 命令 | 菜鸟教程*

<kbd>h</kbd>, <kbd>H</kbd> - *显示帮助界面*

<kbd>q</kbd> - *退出*

MOVING

<kbd>b</kbd>, <kbd>PGUP</kbd> - *向上翻一页*

<kbd>u</kbd>, <kbd>^U</kbd> - *向上翻半页 Backward one half-window (and set half-window to N).*

<kbd>f</kbd>, <kbd>SPACE</kbd>, <kbd>PGDN</kbd> - *向下翻一页*

<kbd>d</kbd>, <kbd>^D</kbd> - *向下翻半页 Forward  one half-window (and set half-window to N).*

JUMPING

<kbd>g</kbd>, <kbd>\<</kbd>, <kbd>ESC-\<</kbd> - *Go to first line in file (or line N).*

<kbd>G</kbd>, <kbd>></kbd>, <kbd>ESC-></kbd> - *Go to last line in file (or line N).*

<kbd>p</kbd>, <kbd>%</kbd> - *Go to beginning of file (or N percent into file).*

SEARCHING

<kbd>/</kbd><字符串> - *向下搜索"字符串"的功能*

<kbd>?</kbd><字符串> - *向上搜索"字符串"的功能*

<kbd>n</kbd> - *重复前一个搜索（与 / 或 ? 有关）*

<kbd>N</kbd> - *反向重复前一个搜索（与 / 或 ? 有关）*

CHANGING FILES

<kbd>=</kbd>, <kbd>^G</kbd>, <kbd>:f</kbd> - *Print current file name.*

- 先按 <kbd>G</kbd> 键，然后按 <kbd>=</kbd> 键，可以显示当前行号和总行数的状态栏。

示例：

`less --help`

`man -a less`

### man

简介：

> Man page viewer from the mandoc toolset

官方：

https://mandoc.bsd.lv/ - *mandoc | UNIX manpage compiler*

#### apropos

简介：

> The apropos and whatis utilities query manual page databases generated by makewhatis(8), evaluating expression for each file in each database. By default, they display the names, section numbers, and description lines of all matching manuals.

语法：

`apropos [-dalhvV] -e|-[w|-r] [-s section] [-m system[,...]] [-M path] [-L locale] -C [file] keyword ...`

参数：

`-l`, `--long` - *不根据终端宽度缩减输出*

`-a`, `--and` - *只显示匹配所有 keyword 的手册页和描述。默认显示匹配任何 keyword 的项*

用法：

https://wangchujiang.com/linux-command/c/apropos.html - *apropos 命令，Linux apropos 命令详解：在 whatis 数据库中查找字符串 - Linux 命令搜索引擎*

示例：

`man -a apropos`

#### man

简介：

> The man utility displays the manual page entitled name. Pages may be selected according to a specific category (section) or machine architecture (subsection).

语法：

`man [-acfhklw] [-C file] [-M path] [-m path] [-S subsection]`

参数：

`-a` - *在所有的 man 帮助手册中搜索。*

`-k` - *搜索手册页中与关键字匹配的条目。*

`-w` - *仅显示手册页的位置，而不显示其内容。*

用法：

https://wangchujiang.com/linux-command/c/man.html - *man 命令，Linux man 命令详解：查看Linux中的指令帮助 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-man.html - *Linux man 命令 | 菜鸟教程*

示例：

`man -a man` - *显示所有匹配的手册页面*

参考：

https://www.cnblogs.com/kelamoyujuzhen/p/9807468.html - *【问题】man命令打开的手册上链接怎么展开？ - 克拉默与矩阵 - 博客园*

### mlocate

简介：

> Tool to find files anywhere in the filesystem based on their name.

官方：

https://pagure.io/mlocate - *Overview - mlocate - Pagure.io*

#### locate

简介：

Search for entries in a mlocate database.

语法：

locate [OPTION]... [PATTERN]...

参数：

`-A`, `--all` - only print entries that match all patterns

用法：

 https://www.runoob.com/linux/linux-comm-locate.html - *Linux locate命令 | 菜鸟教程*

示例：

`locate --help`

### Ncurses

简介：

> Library for text-based user interfaces in a terminal-independent manner

官方：

https://invisible-island.net/ncurses/ - *NCURSES &ndash; New Curses*

#### clear

简介：

> 清除当前屏幕终端上的任何信息。

语法：

clear

用法：

https://wangchujiang.com/linux-command/c/clear.html - *clear 命令，Linux clear 命令详解：清除当前屏幕终端上的任何信息 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-clear.html - *Linux clear命令 | 菜鸟教程*

### Perl

简介：

> Perl is a highly capable, feature-rich programming language with over 37 years of development.

![GitHub last commit](https://img.shields.io/github/last-commit/Perl/perl5?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Perl/perl5?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Perl/perl5?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Perl/perl5?style=social)

官方：

https://github.com/Perl - *The Perl Programming Language · GitHub*

https://www.perl.org/ - *The Perl Programming Language - www.perl.org*

#### shasum

简介：

Print or check SHA checksums.

语法：

`shasum [OPTION]... [FILE]...`

参数：

`--help` - *display this help and exit*

示例：

```bash
shasum --help
```

### procps

简介：

> Utilities that give information about processes using the /proc filesystem

官方：

https://gitlab.com/procps-ng/procps - *procps-ng / procps · GitLab*

#### free

简介：

> Display amount of free and used memory in the system

语法：

free [options]

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-free.html - *Linux free命令 | 菜鸟教程*

示例：

```bash
free --help
```

#### pkill

简介：

> Signal process by name.Mostly used for stopping processes.

语法：

pkill [options] <pattern>

参数：

`--help` - display this help and exit

用法：

https://wangchujiang.com/linux-command/c/pkill.html - *pkill 命令，Linux pkill 命令详解：可以按照进程名杀死进程 - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages.zh/common/pkill - *pkill | tldr InBrowser.App*

示例：

```bash
pkill --help
```

#### ps

简介：

> Information about running processes.

语法：

ps [options] [--help]

参数：

`--help` - display this help and exit

用法：

http://www.runoob.com/linux/linux-comm-ps.html - *Linux ps 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/ps.html - *ps 命令，Linux ps 命令详解：报告当前系统的进程状态 - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages.zh/common/ps - *ps | tldr InBrowser.App*

示例：

```bash
ps --help
```

```bash
ps -ef #显示所有命令，连带命令行
```

```bash
ps -A #列出所有的进程
```

```bash
ps -w #显示加宽可以显示较多的资讯
```

#### uptime

暂无

### psmisc

简介：

> Some small useful utilities that use the proc filesystem

官方：

https://gitlab.com/psmisc/psmisc - *psmisc / psmisc · GitLab*

#### pstree

简介：

> A convenient tool to show running processes as a tree.

语法：

pstree [-acglpsStTuZ] [ -h | -H PID ] [ -n | -N type ] ​[ -A | -G | -U ] [ PID | USER ]

参数：

`--help` - display this help and exit

用法：

https://wangchujiang.com/linux-command/c/pstree.html - *pstree 命令，Linux pstree 命令详解：以树状图的方式展现进程之间的派生关系 - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages.zh/common/pstree - *pstree | tldr InBrowser.App*

示例：

```bash
pstree --help
```

```bash
pstree -al #show command line arguments and don't truncate long lines
```

```bash
man -s 1 pstree
```

### Tree

简介：

> Recursive directory lister producing a depth indented listing of files

官方：

~~http://mama.indstate.edu/users/ice/tree/~~

https://oldmanprogrammer.net/source.php?dir=projects/tree - *Home - Old Man Programmer*

https://gitlab.com/OldManProgrammer/unix-tree - *Old Man Programmer / Tree · GitLab*

#### tree

语法：

tree [-acdfghilnpqrstuvxACDFJQNSUX] [-L level [-R]] [-H  baseHREF]
	[-T title] [-o filename] [-P pattern] [-I pattern] [--gitignore]
	[--gitfile[=]file] [--matchdirs] [--metafirst] [--ignore-case]
	[--nolinks] [--hintro[=]file] [--houtro[=]file] [--inodes] [--device]
	[--sort[=]<name>] [--dirsfirst] [--filesfirst] [--filelimit #] [--si]
	[--du] [--prune] [--charset[=]X] [--timefmt[=]format] [--fromfile]
	[--fromtabfile] [--fflinks] [--info] [--infofile[=]file] [--noreport]
	[--version] [--help] [--] [directory ...]

参数：

`-a` - *显示所有文件和目录*

`-d` - *List directories only.*

`-f` - *Print the full path prefix for each file.*

`-F` - _Appends '/', '=', '*', '@', '|' or '>' as per ls -F._

用法：

https://www.runoob.com/linux/linux-comm-tree.html - *Linux tree命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/tree.html - *tree 命令，Linux tree 命令详解：树状图列出目录的内容 - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages.zh/common/tree - *tree | tldr InBrowser.App*

示例：

`tree --help` - *打印使用帮助信息*

`tree -L 1` - *显示深度达到 “级数” 级的文件和目录（其中 1 表示当前目录）*

### util-linux

简介：

> util-linux is a standard package distributed by the Linux Kernel Organization for use as part of the Linux operating system. A fork, util-linux-ng (with ng meaning "next generation"), was created when development stalled, but as of January 2011 has been renamed back to util-linux, and is the official version of the package.

官方：

https://github.com/util-linux/util-linux - *GitHub - util-linux/util-linux*

https://en.wikipedia.org/wiki/Util-linux - *util-linux - Wikipedia*

#### more

简介：

> Linux more 命令类似 cat ，不过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能（与 vi 相似），使用中的说明文件，请按 h 。

语法：

more [options] <file>...

参数：

`-c`, `--print-over` - *do not scroll, display text and clean line ends*

`-p`, `--clean-print` - *do not scroll, clean screen and display text*

`-n`, `--lines <number>` - *the number of lines per screenful*

`-h`, `--help` - *display this help*

`-V`, `--version` - *display version*

用法：

1. http://www.runoob.com/linux/linux-comm-more.html - *Linux more命令 | 菜鸟教程*
2. https://wangchujiang.com/linux-command/c/more.html - *more 命令，Linux more 命令详解：显示文件内容，每次显示一屏 - Linux 命令搜索引擎*

示例：

`more --help`

`man -s 1 more`

参考：

1. https://blog.csdn.net/K346K346/article/details/102922934 - *more(1) command_linux more命令 跳到最后一行-CSDN博客*
2. https://worktile.com/kb/ask/504184.html - *linux命令more怎么翻到最后一页 • Worktile社区*

#### rename

简介：

> Rename files.

语法：

`rename [选项] 表达式 替换的字符 文件...`

参数：

`--help` - display this help and exit

用法：

https://wangchujiang.com/linux-command/c/rename.html - *rename 命令，Linux rename 命令详解：用字符串替换的方式批量改变文件名 - Linux 命令搜索引擎*

示例：

`rename --version` - *显示帮助文本并退出*

#### whereis

简介：

Locate the binary, source, and manual-page files for a command.

语法：

```bash
whereis [options] [-BMS <dir>... -f] <name>
```

参数：

`--help` - *display this help and exit*

用法：

https://www.runoob.com/linux/linux-comm-whereis.html - *Linux whereis命令 | 菜鸟教程*

示例：

```bash
whereis node
```

输出：

`node: /Users/caiyongwen/.nvm/versions/node/v15.14.0/bin/node /Users/caiyongwen/.nvm/versions/node/v15.14.0/share/man/man1/node.1`

### which

#### which

简介：

Write the full path of COMMAND(s) to standard output.

语法：

which [options] [--] COMMAND [...]

参数：

`--help` - *display this help and exit*

用法：

https://www.runoob.com/linux/linux-comm-which.html - *Linux which命令 | 菜鸟教程*

## 常见问题

### 通过 Shell 脚本快速进入指定目录

https://blog.csdn.net/han8040laixin/article/details/81268346 - *Linux下通过Shell脚本快速进入指定目录_shell脚本进入指定目录__来信的博客-CSDN博客*

### mv,rm等命令出现unrecognized option提示的解决方法

```bash
mv -- "-browser.md" "browser.md"
```

<https://wangdoc.com/bash/script#配置项参数终止符---> - *Bash 脚本入门 - Bash 脚本教程 - 网道*

https://www.cnblogs.com/codeking100/p/10306028.html - *mv,rm等命令出现unrecognized option提示的解决方法 - leo21sun - 博客园*

### 如何将临时变量加入到全局变量

操作步骤：

1. 将 `export PATH=$PATH:/some/directory` 追加到 `.bashrc` 文件中；
2. 执行 `source ~/.bashrc` 或者 `. ~/.bashrc` 命令立刻加载修改后的设置，使之生效。

参考：

1. https://blog.csdn.net/Mint6/article/details/124156340 - *macos设置环境变量path详解_macos 环境变量-CSDN博客*
2. https://www.cnblogs.com/pansidong/p/15055345.html - *Mac 解决每次新建终端 都要重新运行 source ~/.bash_profile问题 - 盘思动 - 博客园*

### /dev/null

1. https://man7.org/linux/man-pages/man4/zero.4.html - *null(4) - Linux manual page*
2. https://zhuanlan.zhihu.com/p/618530460 - *Linux 中的 /dev/null 是什么？有什么隐藏的作用？ - 知乎*
3. https://www.cnblogs.com/wanng/p/shell-dev-null.html - *shell脚本中 /dev/null 的用途 - Linux开发那些事儿 - 博客园*
4. https://www.cnblogs.com/ultranms/p/9353157.html - *linux下详解shell中>/dev/null 2>&1 - 哪是什么大佬 - 博客园*
5. https://zhuanlan.zhihu.com/p/50879912 - *Linux中/dev/null和/dev/zero两个文件的作用和区别 - 知乎*
6. https://cn.linux-console.net/?p=15788 - *2>/dev/null 到底是做什么的？*

### 两条命令一起执行

3 种方式：

1. 分号（`;`）运算符（推荐使用选项二、三）

    例：`ls ; pwd ; whoami`

2. 逻辑与运算符（`&&`）

    例：`mkdir MyFolder && cd MyFolder`

3. 逻辑或运算符（`||`）

    例：`[ -d ~/MyFolder ] || mkdir ~/MyFolder`

参考：

1. [linux两条命令一起执行 - 百度](https://www.baidu.com/s?wd=linux%E4%B8%A4%E6%9D%A1%E5%91%BD%E4%BB%A4%E4%B8%80%E8%B5%B7%E6%89%A7%E8%A1%8C)

### 如何查看命令是内建命令还是外部命令

3 种方式：

> echo 是内建命令，tac 是外部命令

1. type
    1. `type -a echo`
    2. `type -a tac`

2. command
    1. `command -V echo`
    2. `command -V tac`

3. builtin
    1. `builtin echo`
    2. `builtin tac`

### 如何判断命令是否有 man 手册页

`type -a echo` 有手册页

输出：

echo is a shell builtin
echo is /data/data/com.termux/files/usr/bin/echo（存在此行表示有手册页）

`type -a cd` 无手册页

输出：

cd is a shell builtin

参考：

1. https://wangchujiang.com/linux-command/c/help.html - *help 命令，Linux help 命令详解：该命令是bash内建命令，用于显示bash内建命令的帮助信息。 - Linux 命令搜索引擎*

### 查看文件行号

```bash
cat -n [FILE]...
```

参考：

1. https://www.cnblogs.com/carey9420/p/12691415.html - *【转载】linux查看文件行号的七种方法 - lucky8492 - 博客园*

### 查找文本所在行

参考：

1. https://blog.csdn.net/Olivia_Vang/article/details/104076272 - *linux查找字符串所在行，输出行号_linux输出关键字所在的文件行-CSDN博客*

### 反转文件的行顺序及文本的顺序

参考：

1. https://cn.linux-console.net/?p=23504 - *如何在 Linux 中反转文件中的行顺序*
2. https://worktile.com/kb/ask/468280.html - *linux命令查看文件内容倒序 • Worktile社区*
3. https://blog.csdn.net/qingsong3333/article/details/77624288 - *Linux shell：文本的按行逆序和字符串逆序_shell将字符串倒序写入文件-CSDN博客*
