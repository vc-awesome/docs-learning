# Linux 命令

## 命令手册和工具

1. [tldr pages](https://tldr.sh/) - *📚 Collaborative cheatsheets for console commands*

    ![GitHub last commit](https://img.shields.io/github/last-commit/tldr-pages/tldr?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/tldr-pages/tldr?style=social)

    - 支持 Android（[F-Droid](https://f-droid.org/packages/wtf.technodisaster.tldr/)）, [Web](https://tldr.inbrowser.app/)

    - 开源软件（[GitHub Repo](https://github.com/tldr-pages/tldr)）

    [安装](https://tldr.sh/#installation)：
    
    ```bash
    npm install -g tldr
    ```

    用法：
    
    ```bash
    tldr tar
    ```

2. https://linuxize.com/ - *Linux Tips, Tricks and Tutorials | Linuxize*

3. https://www.baeldung.com/linux/ - *Baeldung on Linux*

4. https://www.runoob.com/linux/linux-command-manual.html - *Linux 命令大全 | 菜鸟教程*

5. [Linux命令搜索引擎](https://wangchujiang.com/linux-command/) - *Linux命令搜索引擎 命令，Linux Linux命令搜索引擎 命令详解：最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。 - Linux 命令搜索引擎*

    ![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/linux-command?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/jaywcjlove/linux-command?style=social)

    - 支持 [Web](https://wangchujiang.com/linux-command/)

    - 开源软件（[GitHub Repo](https://github.com/jaywcjlove/linux-command)）

6. [Linux Command Library](https://linuxcommandlibrary.com/) - *Handy cheat sheets with linux tips and terminal basics about System control, Users, Files, Package managers, Video and Audio, Hacking tools, Terminal games and many more categories.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/SimonSchubert/LinuxCommandLibrary?color=blue&logo=github)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/SimonSchubert/LinuxCommandLibrary?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/SimonSchubert/LinuxCommandLibrary?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/SimonSchubert/LinuxCommandLibrary?style=social)

    - 支持 Android（[GitHub Releases](https://github.com/SimonSchubert/LinuxCommandLibrary/releases), [Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca), [F-Droid](https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca)）, [Web](https://linuxcommandlibrary.com/)

    - 开源软件（[GitHub Repo](https://github.com/SimonSchubert/LinuxCommandLibrary)）

7. https://gnu-linux.readthedocs.io/zh/latest/index.html - *GNU/Linux 点滴 — Linux latest 文档*

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

- `|` - 互斥

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

1. https://blog.csdn.net/wq6ylg08/article/details/88919530 - *Linux命令行帮助文档命令语法公式格式详解和Git命令语法格式解读（最详细解释，关键词:Ubuntu,Terminal,终端,Gtibash,Git,Github,系统,实战,操作,理解）_<command> [inputfile] [outputfile] [<switches>...]-CSDN博客*
2. https://blog.csdn.net/weixin_42683556/article/details/115725069 - *命令行帮助文档语法格式详解*
3. https://blog.csdn.net/u013867301/article/details/103513379 - *命令行格式*
4. https://www.cnblogs.com/haoyufang/p/11762583.html - *linux命令语法格式 - 昊宇方 - 博客园*

## 常用命令

> 以下的命令可以点击对应的链接，进入网页查看使用实例。

### 查看命令帮助文档

6 种方式：

1. `<command> --help` 或 `<command> -h` - *显示当前指令帮助*（`--help` 或 `-h` 选项）

2. [man](#man) - *查看 Linux 中的指令帮助*

3. [apropos](#apropos) - *在 whatis 数据库中查找字符串*


4. [help](#help) - *该命令是 bash 内建命令，用于显示 bash 内建命令的帮助信息。*

5. [info](#info) - *Linux下 info 格式的帮助指令*

6. [locate](#locate) - *找符合条件的文档，他会去保存文档和目录名称的数据库内，查找合乎范本样式条件的文档或目录*

参考：

1. https://blog.csdn.net/Zhi_osX/article/details/80146259 - *linux命令-查看命令帮助文档_Zhi_osX的博客-CSDN博客*

### 查看命令

- [type](#type) - *显示指定命令的类型*

- [compgen](#compgen) - *用于在 bash 中自动完成的内置命令，按两次 tab 键即可调用该命令*

- [command](#command) - *调用并执行指定的命令*

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

`ls -l` - *查看文件权限*

设置：

- `chmod` - *控制用户对文件的权限的命令*

    `chmod +x ` <文件名> - *给指定文件增加可执行权限*

https://www.runoob.com/linux/linux-comm-chmod.html - *Linux chmod 命令 | 菜鸟教程*

#### 查看目录内容

2 种方式：

- [ls](#ls) - *查看目录下面有多少文件以及文件的名字*

- [tree](#tree) - *树状图列出目录的内容*

#### 查看文件大小

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

语法：

`rm -r [目录名]`

用法：

https://www.runoob.com/linux/linux-comm-rm.html - *Linux rm 命令 | 菜鸟教程*

#### 查找文件或目录

https://www.ruanyifeng.com/blog/2009/10/5_ways_to_search_for_files_using_the_terminal.html - *Linux的五个查找命令 - 阮一峰的网络日志*

#### 创建文件

语法：

`touch [文件名]`

用法：

https://www.runoob.com/linux/linux-comm-touch.html - *Linux touch命令 | 菜鸟教程*

#### 删除文件

语法：

`rm [文件名]`

用法：

https://www.runoob.com/linux/linux-comm-rm.html - *Linux rm 命令 | 菜鸟教程*

#### 对比文件或目录

1. [diff](#diff) - *比较文件的差异*

#### 修改文件名

- `mv` - *为文件或目录改名、或将文件或目录移入其它位置*

    语法：

    `mv [源文件名] [目标文件名]`

    用法：

    https://www.runoob.com/linux/linux-comm-mv.html - *Linux mv 命令 | 菜鸟教程*

- `rename` - *用字符串替换的方式批量改变文件名*

    语法：

    `rename [选项] 表达式 替换的字符 文件...`

    `rename --version` - *显示帮助文本并退出*

    用法：

    https://wangchujiang.com/linux-command/c/rename.html - *rename 命令，Linux rename 命令详解：用字符串替换的方式批量改变文件名 - Linux 命令搜索引擎*

#### 文本搜索

简介：

`grep` - *强大的文本搜索工具*

示例：

`history | grep git` - *搜索命令行历史记录中输入过 `git` 命令的记录*

https://wangchujiang.com/linux-command/c/grep.html - *grep 命令，Linux grep 命令详解：强大的文本搜索工具 - Linux 命令搜索引擎*

#### 编辑文件

3 种方式：

- `vi` - *功能强大的纯文本编辑器*

    https://wangchujiang.com/linux-command/c/vi.html - *vi 命令，Linux vi 命令详解：功能强大的纯文本编辑器 - Linux 命令搜索引擎*

- `vim` - *Vim 是从 vi 发展出来的一个文本编辑器*

    `vim [文件名]`

    https://www.runoob.com/linux/linux-vim.html - *Linux vi/vim | 菜鸟教程*

- `sed` - *功能强大的流式文本编辑器*

    `sed 's/要被取代的字串/新的字串/g'` - *数据查看与替换*
   
     https://wangchujiang.com/linux-command/c/sed.html - *sed 命令，Linux sed 命令详解：功能强大的流式文本编辑器 - Linux 命令搜索引擎*

    https://www.runoob.com/linux/linux-comm-sed.html - *Linux sed 命令 | 菜鸟教程*

#### 去除重复行

不改变顺序去重

```bash
awk '!seen[$0]++' [file]...
```

示例：

```bash
history=$(tac < .bash_history | awk '!seen[$0]++' | tac) && echo "$history" > .bash_history
```

排序去重

```bash
sort [file]... | uniq
```

参考：

1. https://blog.axiaoxin.com/post/original-order-merge-uniq/ - *Linux 去除重复行而不改变顺序 - 阿小信的博客*

#### 文件写入

示例：

`echo 'runoob.com' > test.txt`

`echo 'runoob.com' >> test.txt`

#### 查看文件内容

简介：

cat（英文全拼：concatenate）命令用于连接文件并打印到标准输出设备上，它的主要作用是用于查看和连接文件。

语法：

`cat [选项] [文件] `

参数：

`-n`：显示行号，会在输出的每一行前加上行号。

`-b`：显示行号，但只对非空行进行编号。

用法：

https://www.runoob.com/linux/linux-comm-cat.html - *Linux cat 命令 | 菜鸟教程*

##### 分页显示

1. [more](#more) - *Linux more 命令类似 cat ，不过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能（与 vi 相似），使用中的说明文件，请按 h 。*
2. [less](#less) - *less 与 more 类似，less 可以随意浏览文件，支持翻页和搜索，支持向上翻页和向下翻页。*

#### 实时查看文件内容变化

简介：

tail 命令可用于查看文件的内容，有一个常用的参数 -f 常用于查阅正在改变的日志文件。

语法：

`tail [参数] [文件]`

参数：

`-f`：循环读取

`-q`：不显示处理信息

参考：

1. https://www.runoob.com/linux/linux-comm-tail.html - *Linux tail 命令 | 菜鸟教程*
2. https://www.cnblogs.com/javabg/p/16813251.html - *Linux实时查看文件内容变化 - 关键步就几步 - 博客园*
3. https://blog.csdn.net/u012581020/article/details/131332490 - *Linux 实时查看文件 tail 命令详解_tail -n-CSDN博客*

#### 查看文件指定行

简介：

head 命令可用于查看文件的开头部分的内容，有一个常用的参数 -n 用于显示行数，默认为 10，即显示 10 行的内容。

语法：

`head -3 [文件名]`

参数：

`-q`：隐藏文件名

`-v`：显示文件名

`-c <数目>`：显示的字节数。

`-n <行数>`：显示的行数。

用法：

http://www.runoob.com/linux/linux-comm-head.html - *Linux head 命令 | 菜鸟教程*

#### 查看文件属性

3 种方式：

1. `ls -l [文件或目录...]`

    https://www.runoob.com/linux/linux-comm-ls.html - *Linux ls命令 | 菜鸟教程*

2. `stat [文件或目录]`

    https://www.runoob.com/linux/linux-comm-stat.html - *Linux stat 命令 | 菜鸟教程*

3. `file [文件或目录...]`

    http://www.runoob.com/linux/linux-comm-file.html - *Linux file命令 | 菜鸟教程*

参考：

1. https://www.linuxprobe.com/linux-properties-permissions.html - *Linux文件之属性与权限详解 | 《Linux就该这么学》*
2.  https://blog.csdn.net/p309654858/article/details/127765811 - *Linux如何查看文件的属性_linux查看文件属性_music score的博客-CSDN博客*

#### 复制文件或目录

语法：

`cp [选项] [源文件或目录] [目标文件或目录]`

#### 创建文件链接

简介：

ln（英文全拼：link files）命令是一个非常重要命令，它的功能是为某一个文件在另外一个位置建立一个同步的链接。

语法：

`ln -s <source_file> <symbolic_link>`

示例：

`ln --help` - *display this help and exit*

参考：

1. https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/ - *Ln Command in Linux (Create Symbolic Links) | Linuxize*
2. https://wangchujiang.com/linux-command/c/ln.html - *ln 命令，Linux ln 命令详解：用来为文件创建链接 - Linux 命令搜索引擎*
3. https://www.runoob.com/linux/linux-comm-ln.html - *Linux ln 命令 | 菜鸟教程*

#### 删除文件链接

语法：

`rm -i symlink_name`

参考：

https://linuxize.com/post/how-to-remove-symbolic-links-in-linux/ - *How to Remove (Delete) Symbolic Links in Linux | Linuxize*

### 系统管理

#### 查看系统信息

示例：

`uname -a` - *查看版本和内核信息*

#### 变量

示例：

1. `echo $SHELL`
2. `echo $PATH`
3. `echo $PREFIX`
4. `echo $HOME`

https://wangdoc.com/bash/variable - *Bash 变量 - Bash 脚本教程 - 网道*

##### 环境变量

> 环境变量（environment variables）一般是指在[操作系统](https://baike.baidu.com/item/操作系统/192?fromModule=lemma_inlink)中用来指定操作系统运行环境的一些参数，如：[临时文件夹](https://baike.baidu.com/item/临时文件夹/1061467?fromModule=lemma_inlink)位置和[系统文件夹](https://baike.baidu.com/item/系统文件夹/5328647?fromModule=lemma_inlink)位置等。
>
> 环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)是在操作系统中一个具有特定名字的对象，它包含了一个或者多个应用[程序](https://baike.baidu.com/item/程序?fromModule=lemma_inlink)所将使用到的信息。例如[Windows](https://baike.baidu.com/item/Windows/165458?fromModule=lemma_inlink)和[DOS](https://baike.baidu.com/item/DOS/32025?fromModule=lemma_inlink)操作系统中的path环境变量，当要求系统运行一个[程序](https://baike.baidu.com/item/程序/71525?fromModule=lemma_inlink)而没有告诉它程序所在的完整路径时，系统除了在[当前目录](https://baike.baidu.com/item/当前目录/7205107?fromModule=lemma_inlink)下面寻找此程序外，还应到path中指定的路径去找。用户通过设置环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)，来更好的运行进程。
>
> —— [环境变量_百度百科](https://baike.baidu.com/item/环境变量/1730949)

https://wangdoc.com/bash/variable#环境变量 - *Bash 变量 - Bash 脚本教程 - 网道*

- 查看环境变量（3 种方式）

  1. `env`
  2. `printenv`
  3. `echo $PATH`
  
  https://wangchujiang.com/linux-command/c/env.html - *env 命令，Linux env 命令详解：显示系统中已存在的环境变量 - Linux 命令搜索引擎*

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

#### 查看 Shell 版本

4 种方式：

1. `echo $0`
2. `echo $SHELL`
3. `ps -p $$`
4. `cat /etc/shells`

参考：

1. https://www.dbs724.com/63477.html - *Linux 查看 Shell 版本的方法（linux查看shell版本）-数据库远程运维*

#### 查看当前用户

`whoami` - *显示自身用户名称。*

https://www.runoob.com/linux/linux-comm-whoami.html - *Linux whoami命令 | 菜鸟教程*

#### 修改用户密码

`id` - _查看登录用户信息_

`passwd` - _修改root密码_

`passwd [用户名]` - _修改其他用户密码_

#### 退出 Shell

语法：

`exit`

用法：

https://www.runoob.com/linux/linux-comm-exit.html - *Linux exit命令 | 菜鸟教程*

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

### 进程管理

https://www.cnblogs.com/kaituorensheng/p/3980334.html - *linux后台运行和关闭、查看后台任务 - jihite - 博客园*

#### 查看进程信息

- `ps` - *Information about running processes.*

    语法：

    ```bash
    ps [options] [--help]
    ```

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

    http://www.runoob.com/linux/linux-comm-ps.html - *Linux ps 命令 | 菜鸟教程*

    https://wangchujiang.com/linux-command/c/ps.html - *ps 命令，Linux ps 命令详解：报告当前系统的进程状态 - Linux 命令搜索引擎*

    https://tldr.inbrowser.app/pages.zh/common/ps - *ps | tldr InBrowser.App*

- `pstree` - *A convenient tool to show running processes as a tree.*

    示例：

    ```bash
    pstree --help
    ```

    ```bash
    pstree -al #show command line arguments and don't truncate long lines
    ```

    https://wangchujiang.com/linux-command/c/pstree.html - *pstree 命令，Linux pstree 命令详解：以树状图的方式展现进程之间的派生关系 - Linux 命令搜索引擎*

    https://tldr.inbrowser.app/pages.zh/common/pstree - *pstree | tldr InBrowser.App*

#### 杀死进程

`pkill` - *Signal process by name.Mostly used for stopping processes.*

https://wangchujiang.com/linux-command/c/pkill.html - *pkill 命令，Linux pkill 命令详解：可以按照进程名杀死进程 - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages.zh/common/pkill - *pkill | tldr InBrowser.App*

### 网络通讯

#### ping

简介：

用于检测主机。

用法：

https://www.runoob.com/linux/linux-comm-ping.html - *Linux ping 命令 | 菜鸟教程*

示例：

`ping www.runoob.com` - *ping <主机名称>*

`ping 120.240.82.52` - *ping <IP 地址>*

#### ifconfig

简介：

用于显示或设置网络设备。

 用法：

 https://www.runoob.com/linux/linux-comm-ifconfig.html - *Linux ifconfig命令 | 菜鸟教程*

示例：

`ifconfig`

#### whois

简介：

用于查找并显示用户信息。

用法：

https://www.runoob.com/linux/linux-comm-whois.html - *Linux whois命令 | 菜鸟教程*

示例：

`whois root` - *查找 root 用户信息*

`whois github.com` - *查询域名信息*

#### telnet

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

简介：

显示数据包到主机间的路径。

用法：

http://www.runoob.com/linux/linux-comm-traceroute.html - *Linux traceroute命令 | 菜鸟教程*

示例：

`traceroute www.google.com`

参考：

https://www.cisco.com/c/zh_cn/support/docs/ip/ip-routed-protocols/22826-traceroute.html - *使用操作系统的 traceroute 命令 - Cisco*

#### dnsutils

https://www.isc.org/downloads/bind/ - *BIND 9 - ISC*

##### nslookup

简介：

查询域名 DNS 信息的工具。

用法：

https://wangchujiang.com/linux-command/c/nslookup.html - *nslookup 命令，Linux nslookup 命令详解：查询域名DNS信息的工具 - Linux 命令搜索引擎*

示例：

`nslookup`

`nslookup github.com`

##### dig

简介：

域名查询工具。

用法：

https://wangchujiang.com/linux-command/c/dig.html - *dig 命令，Linux dig 命令详解：域名查询工具 - Linux 命令搜索引擎*

示例：

`dig github.com`

参考：

https://zhuanlan.zhihu.com/p/377555624 - *DNS解析-dig工具的使用*

https://linuxize.com/post/how-to-use-dig-command-to-query-dns-in-linux/ - *Dig Command in Linux (DNS Lookup) | Linuxize*

### 清屏

语法：

`clear` - *清除当前屏幕终端上的任何信息。*

用法：

https://wangchujiang.com/linux-command/c/clear.html - *clear 命令，Linux clear 命令详解：清除当前屏幕终端上的任何信息 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-clear.html - *Linux clear命令 | 菜鸟教程*

## 内建命令

`compgen -b` - *列出所有内置命令*

命令列表：

1. builtin
2. declare
3. hash

### alias

简介：

Define or display aliases.

语法：

alias [-p] [name[=value] ... ]

参数：

`-p` - print all defined aliases in a reusable format

用法：

`help alias`

示例：

`alias -p`

### bind

简介：

Set Readline key bindings and variables.

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

Change the shell working directory.

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

Execute a simple command or display information about commands.

Runs COMMAND with ARGS suppressing  shell function lookup, or display information about the specified COMMANDs.  Can be used to invoke commands on disk when a function with the same name exists.

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

Display possible completions depending on the options.

Intended to be used from within a shell function generating possible completions.  If the optional WORD argument is supplied, matches against WORD are generated.

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


### echo

暂无

### exec

暂无

### exit

暂无

### export

语法：

`export` - *为shell变量或函数设置导出属性*

用法：

https://wangchujiang.com/linux-command/c/export.html - *export 命令，Linux export 命令详解：为shell变量或函数设置导出属性。 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-export.html - *Linux export命令 | 菜鸟教程*

### help

简介：

Display information about builtin commands.

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

Display or manipulate the history list.

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

https://wangchujiang.com/linux-command/c/kill.html - *kill 命令，Linux kill 命令详解：发送信号到进程。 - Linux 命令搜索引擎*

### pwd

简介：

Print the name of the current working directory.

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

### set

暂无

### source

简介：

`source` - *在当前Shell环境中从指定文件读取和执行命令*

语法：

source filename [arguments]

用法：

https://linuxize.com/post/bash-source-command/ - *Bash Source Command | Linuxize*

https://wangchujiang.com/linux-command/c/source.html - *source 命令，Linux source 命令详解：在当前Shell环境中从指定文件读取和执行命令。 - Linux 命令搜索引擎*

### type

简介：

Display information about command type.

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

暂无

### unset

暂无

## GNU 软件包

https://www.gnu.org/software/software.html - *Software - GNU Project - Free Software Foundation*

### Bash

https://www.gnu.org/software/bash/ - *Bash - GNU Project - Free Software Foundation*

#### bash

暂无

### Coreutils

https://www.gnu.org/software/coreutils/ - *Coreutils - GNU core utilities*

```bash
pkg f coreutils
```

#### cat

https://www.gnu.org/software/coreutils/cat

#### chmod

暂无

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

用法：

https://www.runoob.com/linux/linux-comm-du.html - *Linux du 命令 | 菜鸟教程*

示例：

`du -ach --max-depth=1`

`du --help`

#### env

暂无

#### id

暂无

#### ln

暂无

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

#### mv

暂无

#### printenv

暂无

#### pwd

暂无

#### rm

https://www.gnu.org/software/coreutils/rm

#### sort

暂无

#### stat

暂无

#### tac

https://www.gnu.org/software/coreutils/tac

#### tail

https://www.gnu.org/software/coreutils/tail

#### touch

暂无

#### tty

暂无

#### uname

暂无

#### wc

https://www.gnu.org/software/coreutils/wc

```bash
wc --help
```

#### whoami

暂无

### Diffutils

https://www.gnu.org/software/diffutils/ - *Diffutils - GNU Project - Free Software Foundation*

#### diff

简介：

> Compare FILES line by line.

语法：

`diff [文件或目录1] [文件或目录2]`

参数：

`--help` - display this help and exit

用法：

https://www.runoob.com/linux/linux-comm-diff.html - *Linux diff 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/diff.html - *diff 命令，Linux diff 命令详解：比较给定的两个文件的不同 - Linux 命令搜索引擎*

https://phoenixnap.com/kb/linux-diff - *Linux diff Command {Syntax, Options and Examples}*

示例：

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

http://www.runoob.com/linux/linux-comm-find.html - *Linux find 命令 | 菜鸟教程*

示例：

`find / -name inputrc 2>/dev/null`   - 从根目录开始搜索名为 inputrc 的文件，并将错误信息重定向到 /dev/null 以避免显示无权限访问的错误。

#### xargs

暂无

### Gawk

https://www.gnu.org/software/gawk/ - *Gawk - GNU Project - Free Software Foundation (FSF)*

#### awk

暂无

### Grep

> Grep searches one or more input files for lines containing a match to a specified pattern. By default, Grep outputs the matching lines.

https://www.gnu.org/software/grep/ - *Grep - GNU Project - Free Software Foundation*

#### grep

暂无

### Wget

https://www.gnu.org/software/wget/ - *Wget - GNU Project - Free Software Foundation*

### Sed

https://www.gnu.org/software/sed/ - *GNU sed - GNU Project - Free Software Foundation*

### Tar

https://www.gnu.org/software/tar/ - *Tar - GNU Project - Free Software Foundation*

### Texinfo

https://www.gnu.org/software/texinfo/ - *Texinfo - GNU Documentation System - GNU Project - Free Software Foundation (FSF)*

#### info

简介：

语法：

参数：

用法：

https://wangchujiang.com/linux-command/c/info.html - *info 命令，Linux info 命令详解：Linux下info格式的帮助指令 - Linux 命令搜索引擎*

示例：

`info --help`

`man info`

### Inetutils

https://www.gnu.org/software/inetutils/ - *Inetutils - Network utilities - GNU Project - Free Software Foundation*

#### ifconfig

https://www.gnu.org/software/inetutils/manual/html_node/ifconfig-invocation.html - *ifconfig invocation (GNU Inetutils)*

#### ping

https://www.gnu.org/software/inetutils/manual/html_node/ping-invocation.html - *ping invocation (GNU Inetutils)*

#### whois

https://www.gnu.org/software/inetutils/manual/html_node/whois-invocation.html - *whois invocation (GNU Inetutils)*

#### telnet

https://www.gnu.org/software/inetutils/manual/html_node/telnet-invocation.html - *telnet invocation (GNU Inetutils)*

#### traceroute

https://www.gnu.org/software/inetutils/manual/html_node/traceroute-invocation.html - *traceroute invocation (GNU Inetutils)*

## Less

简介：

> Terminal pager program used to view the contents of a text file one screen at a time

官方：

https://www.greenwoodsoftware.com/less/ - *Less*

### less

用法：

http://www.runoob.com/linux/linux-comm-less.html - *Linux less 命令 | 菜鸟教程*

示例：

`less --help`

## man

简介：

> Man page viewer from the mandoc toolset

官方：

https://mandoc.bsd.lv/ - *mandoc | UNIX manpage compiler*

### man

语法：

`man [-acfhklw] [-C file] [-M path] [-m path] [-S subsection]`

参数：

`man -a man` - *显示所有匹配的手册页面。*

`man -h`

`man -k` - *搜索手册页中与关键字匹配的条目。*

`man -w` - *仅显示手册页的位置，而不显示其内容。*

用法：

https://wangchujiang.com/linux-command/c/man.html - *man 命令，Linux man 命令详解：查看Linux中的指令帮助 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-man.html - *Linux man 命令 | 菜鸟教程*

参考：

https://www.cnblogs.com/kelamoyujuzhen/p/9807468.html - *【问题】man命令打开的手册上链接怎么展开？ - 克拉默与矩阵 - 博客园*

### apropos

简介：

语法：

参数：



用法：

https://wangchujiang.com/linux-command/c/apropos.html - *apropos 命令，Linux apropos 命令详解：在 whatis 数据库中查找字符串 - Linux 命令搜索引擎*

示例：

`man -a apropos`

## mlocate

简介：

> Tool to find files anywhere in the filesystem based on their name.

官方：

https://pagure.io/mlocate - *Overview - mlocate - Pagure.io*

### locate

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

## Tree

简介：

> Recursive directory lister producing a depth indented listing of files

官方：

~~http://mama.indstate.edu/users/ice/tree/~~

https://oldmanprogrammer.net/source.php?dir=projects/tree - *Home - Old Man Programmer*

https://gitlab.com/OldManProgrammer/unix-tree - *Old Man Programmer / Tree · GitLab*

### tree

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

`-F` - *Appends '/', '=', '\*', '@', '|' or '>' as per ls -F.*

用法：

https://www.runoob.com/linux/linux-comm-tree.html - *Linux tree命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/tree.html - *tree 命令，Linux tree 命令详解：树状图列出目录的内容 - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages.zh/common/tree - *tree | tldr InBrowser.App*

示例：

`tree --help` - *打印使用帮助信息*

`tree -L 1` - *显示深度达到 “级数” 级的文件和目录（其中 1 表示当前目录）*

## util-linux

简介：

> util-linux is a standard package distributed by the Linux Kernel Organization for use as part of the Linux operating system. A fork, util-linux-ng (with ng meaning "next generation"), was created when development stalled, but as of January 2011 has been renamed back to util-linux, and is the official version of the package.

官方：

https://github.com/util-linux/util-linux - *GitHub - util-linux/util-linux*

https://en.wikipedia.org/wiki/Util-linux - *util-linux - Wikipedia*

### more

简介：

> Linux more 命令类似 cat ，不过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能（与 vi 相似），使用中的说明文件，请按 h 。

示例：

`more --help`

参考：

1. http://www.runoob.com/linux/linux-comm-more.html - *Linux more命令 | 菜鸟教程*
2. https://wangchujiang.com/linux-command/c/more.html - *more 命令，Linux more 命令详解：显示文件内容，每次显示一屏 - Linux 命令搜索引擎*
3. https://blog.csdn.net/K346K346/article/details/102922934 - *more(1) command_linux more命令 跳到最后一行-CSDN博客*
4. https://worktile.com/kb/ask/504184.html - *linux命令more怎么翻到最后一页 • Worktile社区*

### rename

暂无

### whereis

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

## which

### which

简介：

Write the full path of COMMAND(s) to standard output.

语法：

which [options] [--] COMMAND [...]

参数：

`--help` - *display this help and exit*

用法：

https://www.runoob.com/linux/linux-comm-which.html - *Linux which命令 | 菜鸟教程*

## procps

简介：

> Utilities that give information about processes using the /proc filesystem

官方：

https://gitlab.com/procps-ng/procps - *procps-ng / procps · GitLab*

### uptime

暂无

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

[linux两条命令一起执行 - 百度](https://www.baidu.com/s?wd=linux%E4%B8%A4%E6%9D%A1%E5%91%BD%E4%BB%A4%E4%B8%80%E8%B5%B7%E6%89%A7%E8%A1%8C)

选项一：分号（`;`）运算符（推荐使用选项二、三）

例：`ls ; pwd ; whoami`

选项二：逻辑与运算符（`&&`）

例：`mkdir MyFolder && cd MyFolder`

选项三：逻辑或运算符（`||`）

例：`[ -d ~/MyFolder ] || mkdir ~/MyFolder`

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

### 查找字符串所在行

参考：

1. https://blog.csdn.net/Olivia_Vang/article/details/104076272 - *linux查找字符串所在行，输出行号_linux输出关键字所在的文件行-CSDN博客*

### 反转文件的行顺序及字符串的顺序

参考：

1. https://cn.linux-console.net/?p=23504 - *如何在 Linux 中反转文件中的行顺序*
2. https://worktile.com/kb/ask/468280.html - *linux命令查看文件内容倒序 • Worktile社区*
3. https://blog.csdn.net/qingsong3333/article/details/77624288 - *Linux shell：文本的按行逆序和字符串逆序_shell将字符串倒序写入文件-CSDN博客*
