# Linux 命令

## 使用教程

https://wangdoc.com/bash/ - *Bash 脚本教程 - 网道* [GitHub Repo](https://github.com/wangdoc/bash-tutorial)

![GitHub last commit](https://badgen.net/github/last-commit/wangdoc/bash-tutorial?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/wangdoc/bash-tutorial?style=social)

1. https://wangdoc.com/bash/grammar - *Bash 的基本语法 - Bash 脚本教程 - 网道*

### 操作历史

https://wangdoc.com/bash/history - *操作历史 - Bash 脚本教程 - 网道*

<kbd>Ctrl</kbd> + <kbd>r</kbd>：搜索操作历史，选择以前执行过的命令。

<kbd>Alt</kbd> + <kbd>\<</kbd>：显示第一个命令。

<kbd>Alt</kbd> + <kbd>></kbd>：显示最后一个命令，即当前的命令。

### 行操作

光标移动：

<kbd>Ctrl</kbd> + <kbd>a</kbd>：移到行首。

<kbd>Ctrl</kbd> + <kbd>e</kbd>：移到行尾。

<kbd>Alt</kbd> + <kbd>b</kbd>：移动到当前单词的词首。

<kbd>Alt</kbd> + <kbd>f</kbd>：移动到当前单词的词尾。

编辑操作：

<kbd>Ctrl</kbd> + <kbd>d</kbd>：删除光标位置的字符（delete）。

<kbd>Ctrl</kbd> + <kbd>w</kbd>：删除光标前面的单词。

<kbd>Ctrl</kbd> + <kbd>k</kbd>：剪切光标位置到行尾的文本。

<kbd>Ctrl</kbd> + <kbd>u</kbd>：剪切光标位置到行首的文本。

<kbd>Ctrl</kbd> + <kbd>y</kbd>：在光标位置粘贴文本。

清除屏幕：

<kbd>Ctrl</kbd> + <kbd>l</kbd> 快捷键可以清除屏幕，即将当前行移到屏幕的第一行，与 `clear` 命令作用相同。

更多操作方式，请参见：https://wangdoc.com/bash/readline - *Bash 行操作 - Bash 脚本教程 - 网道*

### 重定向

https://www.runoob.com/linux/linux-shell-io-redirections.html - *Shell 输入/输出重定向 | 菜鸟教程*

https://github.com/wangdoc/bash-tutorial/blob/master/docs%2Farchives%2Fredirection.md - *bash-tutorial/docs/archives/redirection.md at master · wangdoc/bash-tutorial · GitHub*

参考：

1. https://zhuanlan.zhihu.com/p/47765176 - *如何理解Linux shell中的“2>&1” - 知乎*
2. https://www.cnblogs.com/bluestorm/p/10754821.html - *Linux 重定向 2>&1 ， 1>&2 - petercao - 博客园*
3. https://blog.csdn.net/zhaominpro/article/details/82630528 - *Linux shell中2>&1的含义解释 （全网最全，看完就懂）-CSDN博客*

## 命令手册和工具

1. https://tldr.sh/ - *tldr pages* [GitHub](https://github.com/tldr-pages/tldr) [F-Droid](https://f-droid.org/packages/wtf.technodisaster.tldr/) [Web](https://tldr.inbrowser.app/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/tldr-pages/tldr?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/tldr-pages/tldr?style=social)
    
    [安装](https://tldr.sh/#installation)：
    
    ```bash
    npm install -g tldr
    ```

2. https://linuxize.com/ - *Linux Tips, Tricks and Tutorials | Linuxize*

3. https://www.runoob.com/linux/linux-command-manual.html - *Linux 命令大全 | 菜鸟教程*

4. https://wangchujiang.com/linux-command/ - *Linux命令搜索引擎 命令，Linux Linux命令搜索引擎 命令详解：最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。 - Linux 命令搜索引擎*

   - https://github.com/jaywcjlove/linux-command - *GitHub - jaywcjlove/linux-command: Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。https://git.io/linux*
   
       ![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/linux-command?color=blue&logo=github)
       ![GitHub Repo stars](https://img.shields.io/github/stars/jaywcjlove/linux-command?style=social)

5. ✅ [Linux Command Library](https://linuxcommandlibrary.com/) - *Handy cheat sheets with linux tips and terminal basics about System control, Users, Files, Package managers, Video and Audio, Hacking tools, Terminal games and many more categories.*

    ![GitHub last commit](https://badgen.net/github/last-commit/SimonSchubert/LinuxCommandLibrary?icon=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/SimonSchubert/LinuxCommandLibrary?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/SimonSchubert/LinuxCommandLibrary?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/SimonSchubert/LinuxCommandLibrary?style=social)

    - 支持 Android（[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.linuxcommandbibliotheca), [F-Droid](https://f-droid.org/packages/com.inspiredandroid.linuxcommandbibliotheca)）, Web

    - 开源软件（[GitHub](https://github.com/SimonSchubert/LinuxCommandLibrary)）

6. https://gnu-linux.readthedocs.io/zh/latest/index.html - *GNU/Linux 点滴 — Linux latest 文档*

## 语法格式

http://docopt.org/ - *docopt—language for description of command-line interfaces* [GitHub Repo](https://github.com/docopt/docopt)

![GitHub last commit](https://badgen.net/github/last-commit/docopt/docopt?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/docopt/docopt?style=social)

参考：

1. https://blog.csdn.net/wq6ylg08/article/details/88919530 - *Linux命令行帮助文档命令语法公式格式详解和Git命令语法格式解读（最详细解释，关键词:Ubuntu,Terminal,终端,Gtibash,Git,Github,系统,实战,操作,理解）_<command> [inputfile] [outputfile] [<switches>...]-CSDN博客*
2. https://blog.csdn.net/weixin_42683556/article/details/115725069 - *命令行帮助文档语法格式详解*
3. https://blog.csdn.net/u013867301/article/details/103513379 - *命令行格式*
4. https://www.cnblogs.com/haoyufang/p/11762583.html - *linux命令语法格式 - 昊宇方 - 博客园*

## 常用命令

> 以下的命令可以点击对应的链接，进入网页查看使用实例。

### 查看命令帮助文档

6 种方式：

- `<command> --help` - *显示当前指令帮助*

- `man` - *查看Linux中的指令帮助*

    `man -a man`

    https://wangchujiang.com/linux-command/c/man.html - *man 命令，Linux man 命令详解：查看Linux中的指令帮助 - Linux 命令搜索引擎*
    
    https://www.runoob.com/linux/linux-comm-man.html - *Linux man 命令 | 菜鸟教程*
    
    https://www.cnblogs.com/kelamoyujuzhen/p/9807468.html - *【问题】man命令打开的手册上链接怎么展开？ - 克拉默与矩阵 - 博客园*

- `apropos` - *在 whatis 数据库中查找字符串*
    
    `man -a apropos`
    
    https://wangchujiang.com/linux-command/c/apropos.html - *apropos 命令，Linux apropos 命令详解：在 whatis 数据库中查找字符串 - Linux 命令搜索引擎*

- `help` - *该命令是bash内建命令，用于显示bash内建命令的帮助信息。*

    https://wangchujiang.com/linux-command/c/help.html - *help 命令，Linux help 命令详解：该命令是bash内建命令，用于显示bash内建命令的帮助信息。 - Linux 命令搜索引擎*

- `info` - *Linux下 info 格式的帮助指令*

    https://wangchujiang.com/linux-command/c/info.html - *info 命令，Linux info 命令详解：Linux下info格式的帮助指令 - Linux 命令搜索引擎*

- `locate` - *找符合条件的文档，他会去保存文档和目录名称的数据库内，查找合乎范本样式条件的文档或目录*

    https://www.runoob.com/linux/linux-comm-locate.html - *Linux locate命令 | 菜鸟教程*

参考：

1. https://blog.csdn.net/Zhi_osX/article/details/80146259 - *linux命令-查看命令帮助文档_Zhi_osX的博客-CSDN博客*

### 查看命令

- `type` - *显示指定命令的类型*

    `type --help`
    
    `type -t ` - *根据name的类型返回一个单词（别名，关键字，函数，内建，文件），否则返回空值。*
    
    `type -p ` - *显示要执行的磁盘文件的名称*
    
    `type -a ` - *显示包含指定可执行文件的所有位置*

    <https://wangdoc.com/bash/grammar#type-命令> - *Bash 的基本语法 - Bash 脚本教程 - 网道*

    https://wangchujiang.com/linux-command/c/type.html - *type 命令，Linux type 命令详解：显示指定命令的类型。 - Linux 命令搜索引擎*
    
    https://linuxhandbook.com/type-command/ - *Use Type Command in Linux to Get More Info About Commands*
    
    https://www.baeldung.com/linux/hash-command - *The Linux hash Command | Baeldung on Linux*

- `help` - *该命令是bash内建命令，用于显示bash内建命令的帮助信息*

    `help --help`

- `compgen` - *用于在 bash 中自动完成的内置命令，按两次 tab 键即可调用该命令*

    `compgen --help`

    `compgen -c` - *显示所有可以执行的命令*
    
    `compgen -b` -*列出所有内置命令*

    `compgen -a` - *列出所有别名*

    `compgen -k` - *列出所有 shell 的保留关键字*

    `compgen -A function` - *列出所有可以运行的函数*

    https://tldr.inbrowser.app/pages.zh/common/compgen - *compgen | tldr InBrowser.App*

- `command` - *调用并执行指定的命令*

    `command --help`

    https://tldr.inbrowser.app/pages.zh/common/command - *command | tldr InBrowser.App*

    https://wangchujiang.com/linux-command/c/command.html - *command 命令，Linux command 命令详解：调用并执行指定的命令 - Linux 命令搜索引擎*

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

#### 查看当前目录

2 种方式：

- `ls` - 查看目录下面有多少文件以及文件的名字
    
    `ls --help` - *display this help and exit*

    `ls -l` - *查看所有文件的属性*

    `ls -lh` - *以人类可读的方式显示当前目录中的文件和目录大小*

    `ls -a` - *显示所有文件（包含隐藏文件）*

    `ls -R` - *递归显示目录中的所有文件和子目录*
    
    不同颜色代表的文件类型：
    - 蓝色：目录
    - 绿色：可执行文件
    - 白色：一般性文件，如文本文件，配置文件等
    - 红色：压缩文件或归档文件
    - 浅蓝色：链接文件
    - 红色闪烁：链接文件存在问题
    - 黄色：设备文件
    - 青黄色：管道文件

    https://wangchujiang.com/linux-command/c/ls.html - *ls 命令，Linux ls 命令详解：显示目录内容列表 - Linux 命令搜索引擎*

    https://www.runoob.com/linux/linux-comm-ls.html - *Linux ls命令 | 菜鸟教程*

    https://zhuanlan.zhihu.com/p/635083904 - *Linux中的20个基本“ls”命令示例 - 知乎*

- `tree` - 树状图列出目录的内容

    `tree --help` - *打印使用帮助信息*

    `tree -a` - *显示所有文件和目录*

    `tree -d` - *List directories only.*

    `tree -f` - *Print the full path prefix for each file.*

    `tree -F` - *Appends '/', '=', '\*', '@', '|' or '>' as per ls -F.*

    `tree -L 1` - *显示深度达到 “级数” 级的文件和目录（其中 1 表示当前目录）*

    https://www.runoob.com/linux/linux-comm-tree.html - *Linux tree命令 | 菜鸟教程*

    https://wangchujiang.com/linux-command/c/tree.html - *tree 命令，Linux tree 命令详解：树状图列出目录的内容 - Linux 命令搜索引擎*

https://tldr.inbrowser.app/pages.zh/common/tree - *tree | tldr InBrowser.App*

#### 查看文件大小

简介：

`du` 英文全拼：disk usage，用于显示目录或文件的大小。

用法：

https://www.runoob.com/linux/linux-comm-du.html - *Linux du 命令 | 菜鸟教程*

示例：

`du -ach --max-depth=1`

参考：

#### 切换目录

文件及目录以 `.` 开头的为隐藏文件或目录

[cd](https://www.runoob.com/linux/linux-comm-cd.html) - *切换用户当前工作目录*

`cd --help` - *display this help and exit*

`cd ~` - _**~** 表示根目录，目录位于 **/root**_

`cd -` - *切换到上次访问的目录*

https://wangchujiang.com/linux-command/c/cd.html - *cd 命令，Linux cd 命令详解：切换用户当前工作目录。 - Linux 命令搜索引擎*

#### 查看路径

3 种方式：

- [pwd](https://www.runoob.com/linux/linux-comm-pwd.html) - *显示当前工作目录的绝对路径*

    `pwd --help` - *display this help and exit*

    https://wangchujiang.com/linux-command/c/pwd.html - *pwd 命令，Linux pwd 命令详解：显示当前工作目录的绝对路径。 - Linux 命令搜索引擎*

- [whereis](https://www.runoob.com/linux/linux-comm-whereis.html) - *查找二进制程序、代码等相关文件路径*

    `whereis --help` - *display this help and exit*

    实例：
    
    ```bash
    whereis node
    ```
    
    输出：

    `node: /Users/caiyongwen/.nvm/versions/node/v15.14.0/bin/node /Users/caiyongwen/.nvm/versions/node/v15.14.0/share/man/man1/node.1`

- [which](https://www.runoob.com/linux/linux-comm-which.html) - *查找并显示给定命令的绝对路径*

    `which --help` - *display this help and exit*

#### 创建目录

`mkdir [目录名]`

https://wangchujiang.com/linux-command/c/mkdir.html - *mkdir 命令，Linux mkdir 命令详解：用来创建目录 - Linux 命令搜索引擎*

#### 删除目录

`rm -r [目录名]`

https://www.runoob.com/linux/linux-comm-rm.html - *Linux rm 命令 | 菜鸟教程*

#### 创建文件

`touch [文件名]`

#### 删除文件

`rm [文件名]`

https://www.runoob.com/linux/linux-comm-rm.html - *Linux rm 命令 | 菜鸟教程*

#### 对比文件或目录

`diff [文件或目录1] [文件或目录2]`

`diff --help` - *display this help and exit*

`diff -c [文件或目录1] [文件或目录2]` - *以上下文 (context) 模式比较差异*

`diff -u [文件或目录1] [文件或目录2]` - *以联合 (unified) 模式比较差异*

`diff -y -W 50 [文件或目录1] [文件或目录2]` - *并排格式输出*

https://www.runoob.com/linux/linux-comm-diff.html - *Linux diff 命令 | 菜鸟教程*

https://wangchujiang.com/linux-command/c/diff.html - *diff 命令，Linux diff 命令详解：比较给定的两个文件的不同 - Linux 命令搜索引擎*

#### 修改文件名

- `mv` - *为文件或目录改名、或将文件或目录移入其它位置*

    `mv [源文件名] [目标文件名]`

    https://www.runoob.com/linux/linux-comm-mv.html - *Linux mv 命令 | 菜鸟教程*

- `rename` - *用字符串替换的方式批量改变文件名*

    `rename [选项] 表达式 替换的字符 文件...`

    `rename --version` - *显示帮助文本并退出*

    https://wangchujiang.com/linux-command/c/rename.html - *rename 命令，Linux rename 命令详解：用字符串替换的方式批量改变文件名 - Linux 命令搜索引擎*

#### 文本搜索

`grep` - *强大的文本搜索工具*

实例：

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

#### 文件写入

`echo 'runoob.com' > test.txt`

#### 查看文件内容

`cat [文件名] `

https://www.runoob.com/linux/linux-comm-cat.html - *Linux cat 命令 | 菜鸟教程*

#### 实时查看文件内容变化

`tail [参数] [文件]`

参考：

1. https://www.runoob.com/linux/linux-comm-tail.html - *Linux tail 命令 | 菜鸟教程*
2. https://www.cnblogs.com/javabg/p/16813251.html - *Linux实时查看文件内容变化 - 关键步就几步 - 博客园*
3. https://blog.csdn.net/u012581020/article/details/131332490 - *Linux 实时查看文件 tail 命令详解_tail -n-CSDN博客*

#### 查看文件指定行

`head -3 [文件名]`

#### 查看文件属性

2 种方式：

1. `ls -l`

    https://www.runoob.com/linux/linux-comm-ls.html - *Linux ls命令 | 菜鸟教程*

2. `stat [文件或目录]`

    https://www.runoob.com/linux/linux-comm-stat.html - *Linux stat 命令 | 菜鸟教程*

参考：

1. https://www.linuxprobe.com/linux-properties-permissions.html - *Linux文件之属性与权限详解 | 《Linux就该这么学》*
2.  https://blog.csdn.net/p309654858/article/details/127765811 - *Linux如何查看文件的属性_linux查看文件属性_music score的博客-CSDN博客*

#### 复制文件或目录

`cp [选项] [源文件或目录] [目标文件或目录]`

#### 创建文件链接

`ln -s source_file symbolic_link`

https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/ - *Ln Command in Linux (Create Symbolic Links) | Linuxize*

https://wangchujiang.com/linux-command/c/ln.html - *ln 命令，Linux ln 命令详解：用来为文件创建链接 - Linux 命令搜索引擎*

https://www.runoob.com/linux/linux-comm-ln.html - *Linux ln 命令 | 菜鸟教程*

#### 删除文件链接

`rm -i symlink_name`

https://linuxize.com/post/how-to-remove-symbolic-links-in-linux/ - *How to Remove (Delete) Symbolic Links in Linux | Linuxize*

### 系统管理

#### 查看系统信息

`uname -a` - *查看版本和内核信息*

#### 变量

`$SHELL`

https://wangdoc.com/bash/variable - *Bash 变量 - Bash 脚本教程 - 网道*

##### 环境变量

> 环境变量（environment variables）一般是指在[操作系统](https://baike.baidu.com/item/操作系统/192?fromModule=lemma_inlink)中用来指定操作系统运行环境的一些参数，如：[临时文件夹](https://baike.baidu.com/item/临时文件夹/1061467?fromModule=lemma_inlink)位置和[系统文件夹](https://baike.baidu.com/item/系统文件夹/5328647?fromModule=lemma_inlink)位置等。
>
> 环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)是在操作系统中一个具有特定名字的对象，它包含了一个或者多个应用[程序](https://baike.baidu.com/item/程序?fromModule=lemma_inlink)所将使用到的信息。例如[Windows](https://baike.baidu.com/item/Windows/165458?fromModule=lemma_inlink)和[DOS](https://baike.baidu.com/item/DOS/32025?fromModule=lemma_inlink)操作系统中的path环境变量，当要求系统运行一个[程序](https://baike.baidu.com/item/程序/71525?fromModule=lemma_inlink)而没有告诉它程序所在的完整路径时，系统除了在[当前目录](https://baike.baidu.com/item/当前目录/7205107?fromModule=lemma_inlink)下面寻找此程序外，还应到path中指定的路径去找。用户通过设置环境[变量](https://baike.baidu.com/item/变量?fromModule=lemma_inlink)，来更好的运行进程。
>
> —— [环境变量_百度百科](https://baike.baidu.com/item/环境变量/1730949)

https://wangdoc.com/bash/variable#环境变量 - *Bash 变量 - Bash 脚本教程 - 网道*

- 查看环境变量

  方式 1：`env`
  
  方式 2：`printenv`
  
  方式 3：`echo $PATH`
  
  https://wangchujiang.com/linux-command/c/env.html - *env 命令，Linux env 命令详解：显示系统中已存在的环境变量 - Linux 命令搜索引擎*

- 设置环境变量

  `export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/` - *暂时性修改环境变量，终端窗口关闭后会重置*

  `gedit /etc/profile` - *永久修改 linux 环境变量*

  参考：

  1. https://blog.csdn.net/qq_36393978/article/details/130683444 - *Linux 系统修改环境变量的方法_linux 修改环境变量_Imagine Miracle的博客-CSDN博客*
  2. https://m.php.cn/faq/486664.html - *怎样修改linux的环境变量-linux运维-PHP中文网*

- 移除环境变量

  `unset NVM_NODEJS_ORG_MIRROR`

#### 查看 Shell 版本

方式 1：`echo $0`

方式 2：`echo $SHELL`

方式 3：`ps -p $$`

方式 4：`cat /etc/shells`

参考：https://www.dbs724.com/63477.html - *Linux 查看 Shell 版本的方法（linux查看shell版本）-数据库远程运维*

#### 查看当前用户

`whoami` - *显示自身用户名称。*

https://www.runoob.com/linux/linux-comm-whoami.html - *Linux whoami命令 | 菜鸟教程*

#### 修改用户密码

`id` - _查看登录用户信息_

`passwd` - _修改root密码_

`passwd [用户名]` - _修改其他用户密码_

#### 退出登录

`exit`

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

#### export

`export` - *为shell变量或函数设置导出属性*

https://wangchujiang.com/linux-command/c/export.html - *export 命令，Linux export 命令详解：为shell变量或函数设置导出属性。 - Linux 命令搜索引擎*

#### source

`source` - *在当前Shell环境中从指定文件读取和执行命令*

https://linuxize.com/post/bash-source-command/ - *Bash Source Command | Linuxize*

https://wangchujiang.com/linux-command/c/source.html - *source 命令，Linux source 命令详解：在当前Shell环境中从指定文件读取和执行命令。 - Linux 命令搜索引擎*

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

#### nslookup

简介：

查询域名 DNS 信息的工具。

用法：

https://wangchujiang.com/linux-command/c/nslookup.html - *nslookup 命令，Linux nslookup 命令详解：查询域名DNS信息的工具 - Linux 命令搜索引擎*

示例：

`nslookup`

`nslookup github.com`

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

#### traceroute

简介：

显示数据包到主机间的路径。

用法：

http://www.runoob.com/linux/linux-comm-traceroute.html - *Linux traceroute命令 | 菜鸟教程*

示例：

`traceroute www.google.com`

参考：

https://www.cisco.com/c/zh_cn/support/docs/ip/ip-routed-protocols/22826-traceroute.html - *使用操作系统的 traceroute 命令 - Cisco*

### 清屏

`clear` - *清除当前屏幕终端上的任何信息。*

https://wangchujiang.com/linux-command/c/clear.html - *clear 命令，Linux clear 命令详解：清除当前屏幕终端上的任何信息 - Linux 命令搜索引擎*

## 常见问题

### 源码编译安装与一键安装

1. https://www.php.net/manual/zh/install.pecl.phpize.php - *PHP: 用 phpize 编译共享 PECL 扩展库 - Manual*
2. https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=10153 - *安装第三方PHP扩展示例 - Linux面板 - 宝塔面板论坛*
3. https://www.runoob.com/nodejs/nodejs-install-setup.html - *Node.js 安装配置 | 菜鸟教程* （🫱 查看文档标题「CentOS 下源码安装 Node.js」下的内容）

### 通过 Shell 脚本快速进入指定目录

https://blog.csdn.net/han8040laixin/article/details/81268346 - *Linux下通过Shell脚本快速进入指定目录_shell脚本进入指定目录__来信的博客-CSDN博客*

### mv,rm等命令出现unrecognized option提示的解决方法

<https://wangdoc.com/bash/script#配置项参数终止符---> - *Bash 脚本入门 - Bash 脚本教程 - 网道*

https://www.cnblogs.com/codeking100/p/10306028.html - *mv,rm等命令出现unrecognized option提示的解决方法 - leo21sun - 博客园*

### 如何使变量加入全局

操作步骤：

1. 将 `export PATH=$PATH:/some/directory` 追加到 `.bashrc` 文件中
2. 执行 `source ~/.bashrc` 或者 `. ~/.bashrc` 命令立刻加载修改后的设置，使之生效

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
