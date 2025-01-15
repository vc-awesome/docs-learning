# Vim

## 简介

> <img src="https://cdn.jsdelivr.net/gh/vim/vim/runtime/vimlogo.gif" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" /> Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed with most UNIX systems.
> 
> Vim is often called a "programmer's editor," and so useful for programming that many consider it an entire IDE. It's not just for programmers, though. Vim is perfect for all kinds of text editing, from composing email to editing configuration files.
> 
> Despite what the above comic suggests, Vim can be configured to work in a very simple (Notepad-like) way, called evim or Easy Vim.

![GitHub last commit](https://img.shields.io/github/last-commit/vim/vim?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vim/vim?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vim/vim?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vim/vim?style=social)

## 官方

Website:

1. https://www.vim.org/ - *welcome home : vim online*

GitHub:

1. https://github.com/vim/vim - *GitHub - vim/vim: The official Vim repository*

## 教程

### 官方教程

1. https://www.vim.org/docs.php - *Vim documentation : vim online*
    1. https://vimhelp.org/ - *Vim: help.txt*
2. https://github.com/yianwillis/vimcdoc - *GitHub - yianwillis/vimcdoc: Vim 中文文档计划* \
    ![GitHub last commit](https://img.shields.io/github/last-commit/yianwillis/vimcdoc?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/yianwillis/vimcdoc?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/yianwillis/vimcdoc?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/yianwillis/vimcdoc?style=social)
    1. https://yianwillis.github.io/vimcdoc/doc/help.html - *VIM 中文帮助: 总览及快速参考*
        1. https://yianwillis.github.io/vimcdoc/doc/help.html#reference_toc - *VIM 中文帮助: 总览及快速参考*
    2. https://yianwillis.github.io/vimcdoc/doc/usr_toc.html - *VIM 中文用户手册: 目录*
    3. https://yianwillis.github.io/vimcdoc/doc/quickref.html - *VIM 中文帮助: 总览最常用的命令*
        1. https://yianwillis.github.io/vimcdoc/doc/quickref.html#option-list - *VIM 中文帮助: 总览最常用的命令*
    4. https://yianwillis.github.io/vimcdoc/doc/index.html - *VIM 中文帮助: 以字母顺序排列的命令索引*

经常访问：

1. https://yianwillis.github.io/vimcdoc/doc/quickref.html - *VIM 中文帮助: 总览最常用的命令*
2. https://yianwillis.github.io/vimcdoc/doc/usr_toc.html - *VIM 中文用户手册: 目录*

### 第三方教程

1. https://www.runoob.com/linux/linux-vim.html - *Linux vi/vim | 菜鸟教程*

2. https://oi-wiki.org/tools/editor/vim/ - *Vim - OI Wiki*

3. https://segmentfault.com/a/1190000038702606 - *Vim使用全指南 (环境配置，插件推荐，美化) (C++,Python,MarkDown,R...) - 个人文章 - SegmentFault 思否*

4. https://www.bookstack.cn/books/learn-vim - *《Vim 实操教程（Learn Vim）》 - 书栈网 · BookStack*
    - https://github.com/dofy/learn-vim - *GitHub - dofy/learn-vim: Learning Vim. A Hands-On Tutorial of Vim.*

5. https://wangchujiang.com/linux-command/c/vi.html - *vi 命令，Linux vi 命令详解：功能强大的纯文本编辑器 - Linux 命令搜索引擎*

6. https://docs.kilvn.com/vim_zh_cn/ - *前言 · VIM 操作手册*

## 安装

https://www.vim.org/download.php - *download : vim online*

### Windows

暂无

### macOS

#### Homebrew

https://formulae.brew.sh/formula/vim - *vim — Homebrew Formulae*

```bash
brew install vim
```

### Linux

暂无

### Android

#### Termux

安装：

```bash
apt install vim
```

```bash
apt install vim-python
```

## 配置

https://ruanyifeng.com/blog/2018/09/vimrc.html - *Vim 配置入门 - 阮一峰的网络日志*

查询某个配置项是打开还是关闭，可以在命令模式下，输入该配置，并在后面加上问号。

<kbd>:</kbd> + `set number?` - 返回 number 或者 nonumber。

### 显示行号

- <kbd>:</kbd> + `set  nu` - 显示行号
- <kbd>:</kbd> + `set nonu` - 取消显示行号

https://blog.csdn.net/kye055947/article/details/102714686 - *【LINUX-vim命令】设置vim显示行号-CSDN博客*

### 自动折行

- <kbd>:</kbd> + `set wrap` - 自动折行
- <kbd>:</kbd> + `set nowrap` - 取消自动折行

### 自动重载文件

<kbd>:</kbd> + `set autoread` - 打开文件监视。如果在编辑过程中文件发生外部改变（比如被别的编辑器编辑了），就会发出提示。

https://www.cnblogs.com/yeungchie/p/15845052.html - *[ Vim ] 自动重载文件 - YEUNGCHIE - 博客园*

### 自动保存文件

<kbd>:</kbd> + `set autowrite` - 有改动时自动写回文件

https://yianwillis.github.io/vimcdoc/doc/options.html#'autowrite' - *VIM 中文帮助: 所有选项的描述*

### 查找忽略大小写

<kbd>:</kbd> + `set ignorecase` - 搜索时忽略大小写

## 入门指南

### 目录结构

**/*.swp - 交换文件主要用于系统崩溃时恢复文件，文件名的开头是 `.` 、结尾是 `.swp`

https://blog.csdn.net/qq_42200183/article/details/81531422 - *Linux中.swp 文件的产生与解决方法_linux .swp-CSDN博客*

~/.vimrc - 用户配置（对用户个人生效）

/etc/vimrc - 全局配置（对所有用户生效）

.viminfo

.vim/

### 用户界面

暂无

### 速查表

https://wangchujiang.com/reference/docs/vim.html - *Vim 备忘清单 & vim cheatsheet & Quick Reference*

https://zhuanlan.zhihu.com/p/555692820 - *vim基础操作速查（超详细版本） - 知乎*

### 命令

语法：

`vim [arguments] [file ..]` edit specified file(s)

or: `vim [arguments] -` read text from stdin

or: `vim [arguments] -t tag` edit file where tag is defined

or: `vim [arguments] -q [errorfile]` edit file with first error

参数：

`-h` or `--help` - Print Help (this message) and exit

`--version` - Print version information and exit

`-n` - No swap file, use memory only

`-S <session>` - Source file <session> after loading the first file

`-c <command>` - Execute <command> after loading the first file

`-p[N]` - Open N tab pages (default: one for each file)

`-o[N]` - Open N windows (default: one for each file)

`-O[N]` - Like -o but split vertically

`-d` - Diff mode (like "vimdiff")

参考：

1. https://www.cnblogs.com/jiangxianseng/p/15592295.html - *vim 命令记录 - Mr江 - 博客园*

### 帮助文档

```bash
vimtutor
```

https://yianwillis.github.io/vimcdoc/doc/help.html - *VIM 中文帮助: 总览及快速参考*

https://worktile.com/kb/ask/403704.html - *linux退出vim帮助命令 • Worktile社区*

### 模式

#### 命令模式(Command Mode)

进入命令模式：

1. `vim [文件名]`

常用命令：

1. <kbd>i</kbd> 或者 <kbd>I</kbd> - 切换到输入模式
    - <kbd>i</kbd> - 在光标当前位置开始输入文本。
    - <kbd>I</kbd> - 在光标所在行的第一个非空格符处开始输入。
2. <kbd>a</kbd> 或者 <kbd>A</kbd> - 进入插入模式
    - <kbd>a</kbd> - 在光标下一个位置开始输入文本。
    - <kbd>A</kbd> - 在光标所在行的最后一个字符处开始输入。
3. <kbd>o</kbd> 或者 <kbd>O</kbd> - 进入插入模式
    - <kbd>o</kbd> - 在当前行的下方插入一个新行。
    - <kbd>O</kbd> - 在当前行的上方插入一个新行。
4. <kbd>r</kbd> 或者 <kbd>R</kbd> - 进入取代模式（Replace Mode）
    - <kbd>r</kbd> - 只会取代光标所在的那一个字符一次。
    - <kbd>R</kbd> - 会一直取代光标所在的文字，直到按下 <kbd>ESC</kbd> 为止。
5. <kbd>:</kbd> - 切换到底线命令模式，以在最底一行输入命令。
6. <kbd>x</kbd> - 删除当前光标所在处的字符。
7. <kbd>j</kbd> - 将光标所在行与下一行的数据结合成同一行（删除一个换行符）。
8. <kbd>u</kbd> - 撤销上一次操作。
9. <kbd>Ctrl</kbd> + <kbd>r</kbd> - 重做上一次撤销的操作。
10. <kbd>d</kbd> + <kbd>d</kbd> - 剪切当前行。
11. <kbd>y</kbd> + <kbd>y</kbd> - 复制当前行。
12. <kbd>p</kbd> 或者 <kbd>P</kbd> - 粘贴剪贴板内容到光标上下方。
    - <kbd>p</kbd>（小写） - 粘贴剪贴板内容到光标下方。
    - <kbd>P</kbd>（大写） - 粘贴剪贴板内容到光标上方。
13. <kbd>g</kbd> + <kbd>f</kbd> - 跳转到路径指示的文档中。
14. <kbd>Ctrl</kbd> + <kbd>o</kbd> - 返回原文档。
15. <kbd>Ctrl</kbd> + <kbd>i</kbd> - 向前。
16. <kbd>Z</kbd> + <kbd>Z</kbd> - 保存并退出。
17. <kbd>Z</kbd> + <kbd>Q</kbd> - 不保存退出。

##### 移动光标

1. <kbd>0</kbd>（数字 0）或功能键 <kbd>Home</kbd> - 移动到这一行的最前面字符处 (常用)
2. <kbd>$</kbd> 或功能键 <kbd>End</kbd> - 移动到这一行的最后面字符处(常用)
3. <kbd>Shift</kbd> + <kbd>g</kbd> - 移动到这个档案的最后一行(常用)
4. <kbd>n</kbd> + <kbd>G</kbd> - n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行(可配合 `:set nu`)
5. <kbd>g</kbd> + <kbd>g</kbd> - 移动到这个档案的第一行，相当于 1G (常用)

##### 查找与替换

文档内查找

- <kbd>*</kbd> - 向后查找光标当前所在单词
- <kbd>#</kbd> - 向前查找光标当前所在单词
- <kbd>/</kbd> + `<search>` - 向后查找指定字符串
- <kbd>?</kbd> + `<search>` - 向前查找指定字符串
- <kbd>n</kbd> - 继续查找下一个
- <kbd>N</kbd> - 继续查找上一个

行内查找

- <kbd>f</kbd> + `<X>` - 当前行内向行尾方向查找并定位到字符 `X`
- <kbd>t</kbd> + `<X>` - 当前行内向行尾方向查找并定位到字符 X 之前
- <kbd>F</kbd> + `<X>` - 当前行内向行首方向查找并定位到字符 `X`
- <kbd>T</kbd> + `<X>` - 当前行内向行首方向查找并定位到字符 `X` 之后
- <kbd>;</kbd> - 向当前方向查找下一个字符
- <kbd>,</kbd> - 向当前相反方向查找下一个字符

重复查找

- <kbd>/</kbd> + <kbd>/</kbd> - 重复上一个查找

重新执行或编辑搜索历史中的查找

1. 进入搜索模式（按 <kbd>/</kbd>），然后按 <kbd>↑</kbd> 键找到想要的历史搜索记录。
2. 可以对该记录进行编辑后按回车，重新执行修改后的搜索。

清除查找历史

- 如果想要清除搜索历史，可以使用 `:let @/ = ""`，这会清除最后一次的搜索记录。要彻底清除所有搜索历史，需重启 Vim，因为搜索历史在 Vim 中没有直接的清除命令。

替换

- <kbd>:</kbd> + `n1,n2s/word1/word2/g` - 	n1 与 n2 为数字。在第 n1 与 n2 行之间寻找 word1 这个字符串，并将该字符串取代为 word2 ！举例来说，在 100 到 200 行之间搜寻 vbird 并取代为 VBIRD 则：『:100,200s/vbird/VBIRD/g』。(常用)
- <kbd>:</kbd> + `1,$s/word1/word2/g` 或 <kbd>:</kbd> + `%s/word1/word2/g` - 从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！(常用)
- <kbd>:</kbd> + `1,$s/word1/word2/gc` 或 <kbd>:</kbd> + `%s/word1/word2/gc` - 从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！且在取代前显示提示字符给用户确认 (confirm) 是否需要取代！(常用)

重复替换

- <kbd>:</kbd> + <kbd>&</kbd> - 重新执行上一个替换命令，仅在当前行执行。
- <kbd>:</kbd> + <kbd>&</kbd> + <kbd>&</kbd> - 在整个文件或指定范围内重新执行上一次的替换命令。

参考：

1. https://docs.kilvn.com/vim_zh_cn/ch12_search_and_substitute.html - *Ch 12 - 搜索和替换 · VIM 操作手册*
2. https://www.wenjianb.com/zonghe/16188.html - *vim搜索（Vim查找与替换命令大全） - 文件帮百科*

##### 删除、复制与粘贴

1. <kbd>.</kbd> -  不要怀疑！这就是小数点！意思是重复前一个动作的意思。 如果你想要重复删除、重复贴上等等动作，按下小数点『.』就好了！ (常用)

删除（剪切）：

- <kbd>x</kbd> 或 <kbd>X</kbd> - 在一行字当中，x 为向后删除一个字符 (相当于 [del] 按键)， X 为向前删除一个字符 (相当于 [backspace] 亦即是退格键) (常用)
- <kbd>n</kbd> + <kbd>x</kbd> - n 为数字，连续向后删除 n 个字符。举例来说，我要连续删除 10 个字符， 『10x』。
- <kbd>d</kbd> + <kbd>d</kbd> - 剪切游标所在的那一整行 (常用)，用 p/P 可以粘贴。
- <kbd>n</kbd> + <kbd>d</kbd> + <kbd>d</kbd> - n 为数字。剪切光标所在的向下 n 行，例如 20dd 则是剪切 20 行 (常用)，用 p/P 可以粘贴。

复制：

- <kbd>y</kbd> + <kbd>y</kbd> - 复制游标所在的那一行 (常用)
- <kbd>n</kbd> + <kbd>y</kbd> + <kbd>y</kbd> - n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行 (常用)

粘贴：

- <kbd>p</kbd> 或 <kbd>P</kbd> - p 为将已复制的数据在光标下一行贴上，P 则为贴在游标上一行！ 举例来说，我目前光标在第 20 行，且已经复制了 10 行数据。则按下 p 后， 那 10 行数据会贴在原本的 20 行之后，亦即由 21 行开始贴。但如果是按下 P 呢？ 那么原本的第 20 行会被推到变成 30 行。 (常用)

#### 输入模式(Insert Mode)

进入输入模式：

1. <kbd>i</kbd> - 切换到输入模式，在光标当前位置开始输入文本。
2. <kbd>a</kbd> - 进入插入模式，在光标下一个位置开始输入文本。
3. <kbd>o</kbd> - 在当前行的下方插入一个新行，并进入插入模式。

退出输入模式，切换到命令模式：

1. <kbd>ESC</kbd>
2. 在输入模式下按 <kbd>Ctrl</kbd> + <kbd>o</kbd> 即可进入「输入 - 命令模式」，执行完一次操作后又会自动回到输入模式。

#### 命令行模式(Command-Line Mode)

教程：

- https://docs.kilvn.com/vim_zh_cn/ch15_command-line_mode.html - *Ch 15 - 命令行模式 · VIM 操作手册*
- https://zhuanlan.zhihu.com/p/76531156 - *VIM学习笔记 命令行模式 (Command-line Mode) - 知乎*
- https://yianwillis.github.io/vimcdoc/doc/cmdline.html: - *VIM 中文帮助: 命令行编辑*

进入底线命令模式：

1. <kbd>:</kbd> - 命令模式切换到底线命令模式，以在最底一行输入命令。

退出底线命令模式，切换到命令模式（3 种方式）：

1. <kbd>ESC</kbd>
2. <kbd>Ctrl</kbd> + <kbd>c</kbd>
3. <kbd>Ctrl</kbd> + <kbd>[</kbd>

常用命令：

 序号 | 命令 | 描述
:---|:---|:---
1  | `:w` | 保存文件
2  | `:q` | 退出 Vim 编辑器
3  | `:wq` | 保存文件并退出 Vim 编辑器
4  | `:q!` | 强制退出 Vim 编辑器，不保存修改
5  | `:wq!` | 强制退出并且保存
6  | `:help` | 查看帮助
7  | `:e` | 放弃所有修改，从上次保存文件开始再编辑
8  | `:n` | 如果同时打开多个文件，则继续编辑下一个文件
9  | `:f` | 显示当前的文件名、光标所在行的行号以及显示比例
10  | `:set` | Vim 配置项
11  | `:<行号>` | 光标跳转到指定行的行首
12  | `:$` | 光标跳转到最后一行的行首
13  | `:s` | 替换

##### 快捷键

<kbd>:</kbd> + <kbd>Ctrl</kbd> + <kbd>r</kbd> - 插入 Vim 寄存器中的文本

##### 命令历史记录

打开命令历史记录窗口：

1. <kbd>:</kbd> +  <kbd>Ctrl</kbd> + <kbd>f</kbd>

关闭命令历史记录窗口（3 种方式）：

1. <kbd>Ctrl</kbd> + <kbd>c</kbd> + <kbd>ESC</kbd>
2. <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>c</kbd>
3. <kbd>:</kbd> + <kbd>q</kbd>

禁用命令行历史记录：

- 在当前 Vim 会话中禁用

    `:set history=0`

- 在所有 Vim 会话中禁用

    1. 修改 .vimrc 文件：`vim ~/.vimrc`
    2. 在 .vimrc 文件中，添加行：`set history=0`
    3. 保存并退出：`:wq`
    4. 重新启动 Vim

参考：

1. https://cn.linux-console.net/?p=12056 - *如何在 Vim 中访问和使用命令历史记录*

#### 可视模式(Visual Mode)

进入可视模式（3 种方式）：

1. <kbd>v</kbd> - 进入可视模式，多用于选中区域 (visual)。
2. <kbd>V</kbd> 或 <kbd>Shift</kbd> + <kbd>v</kbd> - 进入行可视模式，用于选中行 (visual line)。
3. <kbd>Ctrl</kbd> + <kbd>v</kbd> 或 <kbd>Ctrl</kbd> + <kbd>q</kbd> - 进入块可视模式 (visual block)。

## 用法

### 打开文件或目录

打开文件：

1. `:e <filename>` - 打开名为 filename 的文件，若文件不存在则创建
2. `:Explore`（缩写 `:Ex`） - 在 vim 中打开目录树，光标选中后回车打开对应文件
    - <kbd>-</kbd> - 进入上级目录
    - <kbd>Enter</kbd> - 进入目录或进入文件
    - <kbd>Ctrl</kbd> + <kbd>^</kbd> - 回退到上一次的操作
    - https://cloud.tencent.com/developer/article/1646310 - *vim目录操作-腾讯云开发者社区-腾讯云*

打开目录（Vim 内置文件浏览器）：

1. `:e ./` - 打开当前目录
2. `:e %:h` - 打开当前所编辑的文件所在的目录
    - https://guo-sj.github.io/vim/2023/09/10/vim-open-directory-that-current-editing-file-resides.html - *在 vim 中打开当前所编辑的文件所在的目录 | Guoshijie's Blog*
3. `vim <dir>` - 打开指定目录
4. `vim .` - 打开当前目录

参考：

1. https://www.cnblogs.com/Dev0ps/p/11661394.html - *Vim 中进行文件目录操作 - 西门运维 - 博客园*
2. https://yianwillis.github.io/vimcdoc/doc/usr_22.html - *VIM 中文用户手册: 寻找要编辑的文件*

#### 打开当前文件所在的目录

- <kbd>:</kbd> + `Ex`
- <kbd>:</kbd> + `e %:h`

参考：

1. https://www.sunzhongwei.com/vim-open-the-current-file-directory - *Vim 打开当前文件所在的目录 - Vim - 大象笔记*

#### 查看当前文件所在的路径

在"命令模式"下：

- <kbd>1</kbd> 或 <kbd>2</kbd> + <kbd>Ctrl</kbd> + <kbd>g</kbd>
- <kbd>Ctrl</kbd> + <kbd>g</kbd> - 状态栏会显示当前文件的完整路径

在"命令行模式"下：

- <kbd>:</kbd> + `f`
- <kbd>:</kbd> + `pwd` - 查看当前工作目录的完整路径
- <kbd>:</kbd> + `echo expand('%:p')` - 查看当前文件的完整路径
- <kbd>:</kbd> + `set statusline+=%F` - 把文件的完整路径添加到 Vim 的状态栏中
    - <kbd>:</kbd> + `set laststatus=2` - 如果状态栏不可见，可以启用它

参考：

1. https://stackoverflow.org.cn/questions/10488717 - *vim - 如何在 Vim 中永久显示当前文件的路径？_Stack Overflow中文网*
2. https://blog.csdn.net/u013408061/article/details/81565966 - *vim 查看文件路径_vim查看当前文件路径-CSDN博客*

### 光标移动

https://yianwillis.github.io/vimcdoc/doc/motion.html - *VIM 中文帮助: 有关移动的命令*

#### 位置标记

m{a-zA-Z} - *用标记 {a-zA-Z} 记录当前位置*

`{a-z} - *至当前文件中的标记 {a-z}*

`` - *至前次跳转之前的位置*

`:marks` - *列出活动的标记*

https://yianwillis.github.io/vimcdoc/doc/usr_03.html#03.10 - *VIM 中文用户手册: 移动*

https://yianwillis.github.io/vimcdoc/doc/quickref.html#Q_ma - *VIM 中文帮助: 总览最常用的命令*

https://yianwillis.github.io/vimcdoc/doc/motion.html#mark-motions - *VIM 中文帮助: 有关移动的命令*

#### 跳转

N  CTRL-O - *跳转到跳转表中第 N 个较早的位置*

跳回到上一个光标位置：按 Ctrl + o。这个命令会让你在光标位置的历史记录中向后跳转。

N  CTRL-I - *跳转到跳转表中第 N 个较晚的位置*

跳到下一个光标位置：按 Ctrl + i。这个命令会让你在光标位置的历史记录中向前跳转。

:ju[mps] - *列出跳转表*

:cle[arjumps] - *清除当前窗口的跳转表*

https://yianwillis.github.io/vimcdoc/doc/quickref.html#Q_ma - *VIM 中文帮助: 总览最常用的命令*

https://yianwillis.github.io/vimcdoc/doc/motion.html#jump-motions -*VIM 中文帮助: 有关移动的命令*

### 对比文件

语法：

```bash
vimdiff file1 file2 [file3 [file4]]
```

或者

```bash
vim -d file1 file2 [file3 [file4]]
```

示例：

`man -a vimdiff` - *显示所有匹配的手册页面*

参考：

1. https://yianwillis.github.io/vimcdoc/doc/diff.html - *VIM 中文帮助: 编辑同一文本的两到八个版本*
2. https://blog.csdn.net/2401_85760095/article/details/140018164 - *探索Vim的diff模式：代码差异的终极可视化工具_vimdiff-CSDN博客*

### 查看文件改动

在 Vim 中查看当前文件的改动（即哪些地方发生了修改），可以使用以下方法：

1. **使用 `:diffthis` 命令**

   如果你只是想查看当前缓冲区中的改动，Vim 并不会自动展示未保存的改动。你可以手动启用比较模式：

   - 进入命令模式并输入：
     ```bash
     :w
     ```
     保存当前修改。

   - 然后输入：
     ```bash
     :vsp | diffthis
     ```
     这会垂直分割窗口并启用差异比较。

   - 接着输入：
     ```bash
     :vert diffsplit #
     ```
     这将对比当前修改内容和文件的未修改版本。

   **注：** 这个方法适用于对比当前缓冲区和文件原始内容。

2. **使用 `:Gdiff` 命令（结合 Git）**

   如果你的文件在 Git 仓库中并且想查看文件的修改情况，首先确保你安装了 Vim 的 `fugitive.vim` 插件。

   - 使用以下命令查看当前文件与 Git 上次提交的改动：
     ```bash
     :Gdiff
     ```
     这会打开一个差异比较窗口，显示当前文件与 Git 仓库中的差异。

3. **检查未保存的改动**

   - 如果想查看文件中未保存的改动，可以使用：
     ```bash
     :w !diff % -
     ```
     这会将当前未保存的改动与文件最后保存的版本进行比较。

4. **`git diff` 命令（外部查看）**

   如果文件在 Git 仓库中，也可以在 Vim 外部通过命令行使用 `git diff` 查看改动：
   ```bash
   git diff <filename>
   ```

通过这些方法，你可以方便地查看当前文件中的改动，无论是否已保存、是否在 Git 仓库中。

#### `:w !diff % -`

ChatGPT

问：

`解析 vim :w !diff % -`

答：

`:w !diff % -` 是 Vim 中的一个命令，它结合了 Vim 的写命令 `:w` 和 shell 命令来比较文件内容。以下是它的分解和解析：

- `:w`：这是 Vim 中的保存命令，表示将当前缓冲区的内容写入文件。
- `!`：这个符号告诉 Vim 执行外部 shell 命令。
- `diff`：这是 Unix/Linux 系统中的命令，用来比较两个文件的差异。
- `%`：这是 Vim 的一个特殊符号，代表当前编辑的文件。
- `-`：这是 diff 命令中的标准输入符号，表示接受来自标准输入的内容（如管道）。

这个命令的作用：

1. `:w !` 表示将当前文件的内容通过管道传递给后面的 shell 命令。
2. `diff % -` 会将当前文件的内容与标准输入（`-`）进行比较。因为 `:w !` 传递了当前缓冲区的内容，所以 `diff` 会比较文件的保存版本（`%`）和当前缓冲区的内容（未保存的部分）。

总结：

该命令用于比较文件的已保存版本和当前缓冲区内容的差异，也就是用 `diff` 命令比较文件的修改前后的不同点。这是非常有用的一个技巧，尤其在编辑文件时，你想知道当前的改动和已保存版本的区别。

`:w !diff % -` 是在 Vim 中保存文件并使用 `diff` 命令比较当前文件和标准输入的一种命令。让我们逐步解析这个命令：

1. **`:w`** ：这是一个 Vim 命令，用于保存当前文件的内容。

2. **`!`** ：这是一个 Vim 中的特殊符号，用于调用外部命令。当你在 `:w` 后加上 `!` 时，表示保存文件的内容并将其通过管道传递给外部命令。

3. **`diff`** ：这是一个 Unix/Linux 系统中的命令，用于比较两个文件的差异。

4. **`%`** ：在 Vim 中，`%` 是一个特殊符号，代表当前文件的文件名。

5. **`-`** ：在许多命令行工具中，`-` 表示标准输入（stdin）。在这个上下文中，`diff` 命令将读取来自标准输入的数据并与当前文件进行比较。

完整过程解析：

- 这条命令的作用是将当前文件的内容保存，然后使用 `diff` 命令比较当前文件的内容（`%` 代表当前文件名）和标准输入（`-`）。
- 因为 Vim 中没有提供标准输入的直接内容，所以你可以在命令执行后手动输入一些文本，然后按下 `Ctrl+D` 结束输入。
- `diff` 会显示当前文件和你刚输入的文本之间的差异。

例子：

1. 你当前正在编辑文件 `file.txt`。
2. 执行 `:w !diff % -`。
3. Vim 会要求你输入一些文本，例如：
   ```
   This is a new line.
   Another line.
   ```
4. 按下 `Ctrl+D`，`diff` 将比较你刚输入的内容与文件 `file.txt` 的内容并显示差异。

这在快速比较当前文件和你临时输入的一些文本时很有用。

https://cloud.tencent.com/developer/ask/sof/102549204 - *在Vim中保存文件之前，我可以查看更改吗？-腾讯云开发者社区-腾讯云*

#### `:w !colordiff % -`

`colordiff` 是 `diff` 的彩色输出版本，它对原始 `diff` 命令的输出进行着色。

安装 `colordiff`：

```bash
sudo apt install colordiff
```

使用方法（直接用 `colordiff` 替代 `diff`）：

```bash
colordiff file1 file2
```

#### `:w !git diff --no-index % -`

Git 自带彩色差异显示功能，无需额外工具。

命令：

```bash
git diff --color
```

如果是非 Git 文件，也可以用 Git 的 diff 功能：

```bash
git diff --no-index file1 file2
```

#### `-` 表示标准输入

ChatGPT

问：

`- 表示标准输入`

答：

`-` 表示 **标准输入** （stdin），是 Unix/Linux 系统中的一种约定，用来告诉命令从标准输入中读取数据，而不是从文件或其他来源读取数据。许多命令行工具都支持这个符号，它的作用就是简化命令行操作，让工具更加灵活和可组合。

如何理解 `-` 表示标准输入？

1. **标准输入 (stdin)** ：
   标准输入是操作系统提供的一种机制，用于接收用户输入或其他命令的输出。通常，标准输入是从键盘接收输入，但也可以通过管道 (`|`) 将一个命令的输出传递给另一个命令作为其标准输入。

2. **`-` 作为占位符** ：
   在很多命令中，`-` 被约定为表示标准输入（stdin），因此当命令遇到 `-` 时，它就会知道不再从文件或其他资源中读取数据，而是从标准输入获取数据。例如：

   - `cat -`：从标准输入读取内容，而不是从文件读取。你可以通过键盘输入，结束时使用 `Ctrl+D` 发送 EOF 信号。
   - `grep pattern -`：从标准输入中查找匹配的模式，通常与其他命令通过管道组合使用，如 `echo "hello" | grep "h"`。
   - `diff file1 -`：比较 `file1` 和从标准输入接收的内容（如未保存的修改或管道传入的内容）。

示例

1. **直接读取键盘输入** ：
   运行 `cat -` 命令，输入一些文本并按下 `Enter`，然后按 `Ctrl+D` 结束输入，`cat` 会将输入的内容显示出来。

   ```bash
   $ cat -
   hello world
   hello world
   ```

2. **通过管道输入** ：
   将一个命令的输出通过管道传给另一个命令使用标准输入。以下例子将 `echo` 命令的输出通过管道传给 `grep` 来查找字符串：

   ```bash
   $ echo "hello world" | grep "hello"
   hello world
   ```

3. **使用 `diff` 比较内容** ：
   将文件与标准输入的内容进行比较。在 Vim 中执行 `:w !diff % -`，将比较当前文件已保存的版本和未保存的修改。Vim 会将未保存的修改通过标准输入传给 `diff` 命令。

总结

`-` 作为标准输入的表示符号是 Unix/Linux 中的一个约定，它让命令可以从标准输入读取数据，而不必明确指定文件。它为命令行工具提供了极大的灵活性，使用户可以通过管道、用户输入等方式方便地传递数据。

ChatGPT

问：

`为什么 - 表示标准输入`

答：

在 Unix/Linux 系统中，很多命令使用 `-` 来表示 **标准输入** （`stdin`）或者 **标准输出** （`stdout`）。这是 Unix 设计哲学的一部分，旨在让命令行工具能够以一种简单而一致的方式组合和处理数据流。以下是具体原因：

1. **历史原因** ：
早期 Unix 设计的核心原则之一是「一切皆文件」，包括标准输入、标准输出和标准错误。这种设计让工具可以通过管道进行组合，而 `-` 被定义为占位符，代表「从标准输入读取」或「写入到标准输出」。这种设计从 Unix 开始就沿用至今。

2. **方便和简洁** ：
`-` 作为占位符提供了方便的方式，让命令可以更加灵活地处理数据流。比如：
   - `cat file.txt`：从文件 `file.txt` 中读取内容。
   - `cat -`：从标准输入中读取内容，通常是用户通过键盘输入，或者来自其他命令的输出。

通过这种方式，用户不需要每次都明确地指定输入或输出文件，而可以利用管道和重定向符号来处理数据。

3. **普遍性** ：
`-` 作为标准输入的符号已被广泛接受并应用于许多命令。例如：
   - `grep pattern file.txt`：在文件中搜索模式。
   - `grep pattern -`：从标准输入（管道或用户输入）中搜索模式。

   其他类似的例子还有 `sort`、`diff`、`awk`、`sed` 等命令。

在 `diff` 中的使用：

`diff % -` 这个命令中：
- `%` 是 Vim 中表示当前文件名的占位符。
- `-` 则表示将 `diff` 的输入从标准输入读取。

因此，`diff % -` 的意思是比较当前文件的内容和从标准输入接收到的内容（通常是管道传输的内容，或在 Vim 中，未保存的修改内容）。

总结：

`-` 作为标准输入的占位符是 Unix/Linux 中的惯例，旨在简化命令行工具的使用，使它们能够通过管道灵活组合处理数据。这种设计原则不仅简洁，而且非常强大。

### 插入空行

在 Vim 的 **正常模式** 下插入空行，可以使用以下命令：

1. **在当前行的上方插入空行**
   ```bash
   O
   ```
   这是大写的字母 "O"。它会在当前行的上方插入一个空行，并自动进入插入模式。

2. **在当前行的下方插入空行**
   ```bash
   o
   ```
   这是小写的字母 "o"。它会在当前行的下方插入一个空行，并自动进入插入模式。

3. **仅插入空行而不进入插入模式**

   如果你只想插入空行，但不希望 Vim 进入插入模式，可以结合以下命令：
   
   - **在当前行上方插入空行** ：
     ```bash
     :put! _
     ```
     这会在当前行上方插入一行空行，并保持在正常模式中。

   - **在当前行下方插入空行** ：
     ```bash
     :put _
     ```

这些命令都可以帮助你快速在 Vim 中插入空行，并根据需求选择是否进入插入模式。

### 删除行

在 Vim 的正常模式下删除当前行，可以使用以下命令：

1. **删除当前行**
   ```bash
   dd
   ```
   这是最常用的删除当前行的命令，它会将光标所在的整行删除。

2. **删除多行**
   - **向下删除多行** ：
     例如，删除当前行及其下方的 3 行：
     ```bash
     3dd
     ```
     这会删除当前行和接下来的 3 行，共 4 行。

3. **删除但不复制到剪贴板**
   ```bash
   "_dd
   ```
   这会删除当前行，但不将其内容复制到剪贴板，避免替换掉已有的复制内容。

参考：

1. https://cloud.tencent.com/developer/article/1838332 - *在Vim/Vi中删除行、多行、范围、所有行及包含模式的行-腾讯云开发者社区-腾讯云*

### 重复上一次操作

<kbd>.</kbd> - 重复上一次的普通模式命令。

<kbd>@</kbd> + <kbd>:</kbd> - 重复上一次的命令行模式命令。

<kbd>@</kbd> + <kbd>@</kbd> - 重复上一次播放的宏。

参考：

1. <https://oheyu.github.io/zh/posts/tech/vim重复上一次命令/> - *Vim重复上一次命令 | 史玉浩的个人博客*
2. https://learnku.com/articles/21986 - *VIM 中的重复操作与高效率 | Laravel China 社区*

### 命令历史

命令行模式下：

- <kbd>:</kbd> + `history` - 查看所有命令行模式下输入的命令历史
- <kbd>:</kbd> + `history` + `search` 或 `/` 或 `?` - 查看搜索历史
- <kbd>:</kbd> +  <kbd>Ctrl</kbd> + <kbd>f</kbd> - 查看所有命令行模式下输入的命令历史

普通模式下：

- <kbd>q</kbd> + <kbd>/</kbd> - 查看使用 / 输入的搜索历史
- <kbd>q</kbd> + <kbd>?</kbd> - 查看使用 ? 输入的搜索历史
- <kbd>q</kbd> + <kbd>:</kbd> - 查看命令行历史

关闭命令历史记录窗口（3 种方式）：

1. <kbd>Ctrl</kbd> + <kbd>c</kbd> + <kbd>ESC</kbd>
2. <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>c</kbd>
3. <kbd>:</kbd> + <kbd>q</kbd>

参考：

1. https://blog.csdn.net/happycodefly/article/details/86684297 - *vim查看命令历史_vim查看编辑历史-CSDN博客*
2. https://www.cnblogs.com/xy14/p/12787416.html - *VIM - EX 命令行 - 查看历史记录 - 轩辕拾銉 - 博客园*
3. https://cn.linux-console.net/?p=12056 - *如何在 Vim 中访问和使用命令历史记录*
4. http://yyq123.github.io/learn-vim/learn-vi-46-01-History.html - *VIM学习笔记 命令历史记录 (History)*

## 高级用法

### 缓冲区(Buffers)

> buffer 就是当前 vim session 的文件历史记录。

查看 buffer 列表：

`:buffers` 或 `:ls`

打开文件：

`:e [filename]` 或 `:Ex`

打开缓存中下一个文件：

`:bn`

打开缓存中上一个文件：

`:bp`

打开缓存中第 N 个文件：

`:b<N>`

关闭缓存中第 N 个文件：

`:bd<N>`

删除所有缓冲区：

`:%bdelete`

参考：

1. https://www.bookstack.cn/read/learn-vim/file-two.md - *打开文件、查找内容 - 《Vim 实操教程（Learn Vim）》 - 书栈网 · BookStack*

### 标签页(Tabs)

创建标签页：

`:tabnew`（缩写：`:tabe`） 打开新标签页

切换标签页：

<kbd>g</kbd> + <kbd>t</kbd> or `:tabnext` 缩写 `:tabn` 下一个标签页（最后一个会循环到第一个）

<kbd>g</kbd> + <kbd>T</kbd> or `:tabprevious` 缩写 `:tabp` 上一个标签页（第一个会循环到最后一个）

关闭标签页：

`:tabclose` 缩写 `:tabc` 关闭当前标签页

参考：

1. <https://www.bookstack.cn/read/learn-vim/file-five.md#标签页> - *分屏与标签页 - 《Vim 实操教程（Learn Vim）》 - 书栈网 · BookStack*
2. https://docs.kilvn.com/vim_zh_cn/ch02_buffers_windows_tabs.html#tabs - *Ch 2 - 缓冲区，窗口和选项卡 · VIM 操作手册*
3. https://yianwillis.github.io/vimcdoc/doc/tabpage.html - *VIM 中文帮助: 使用多个标签页的命令*

### 窗口(Windows)

打开窗口：

- 命令模式下 <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>v</kbd> 垂直分割
- 命令模式下 <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>s</kbd> 水平分割

关闭窗口：

- 命令模式下 <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>c</kbd> 关闭当前窗口
- 命令模式下 <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>o</kbd> 关闭所有其他窗口

参考：

1. https://cn.linux-console.net/?p=19783 - *如何垂直或水平分割 Vim 工作区*
2. <https://www.bookstack.cn/read/learn-vim/file-five.md#窗口分屏> - *分屏与标签页 - 《Vim 实操教程（Learn Vim）》 - 书栈网 · BookStack*
3. https://docs.kilvn.com/vim_zh_cn/ch02_buffers_windows_tabs.html#windows - *Ch 2 - 缓冲区，窗口和选项卡 · VIM 操作手册*

### 寄存器(Registers)

寄存器分类：

1.  匿名寄存器 - `""`
2.  编号寄存器 - `"0` 到 `"9`
3.  小删除寄存器 - `"-`
4.  26 个命名寄存器 - `"a` 到 `"z`
5.  3 个只读寄存器 - `":`, `".`, `"%`
    1. 上次 insert 模式中插入的字符串 - `".`
    2. 当前文件名，不是全路径，也不是纯文件名，而是从当前 Vim 的工作目录到该文件的路径 - `"%`
    3. 上次命令模式下键入的命令 - `":`
6.  Buffer 交替文件寄存器 - `"#`
7.  表达式寄存器 - `"=`
8.  选区和拖放寄存器 - `"*`, `"+`, `"~`
9.  黑洞寄存器 - `"_`
10.  搜索模式寄存器 - `"/`

查看所有寄存器：

- <kbd>:</kbd> + `register`

粘贴寄存器内容：

- <kbd>"</kbd> + <kbd>0</kbd> + <kbd>p</kbd> - 粘贴编号为 0 的寄存器内容

参考：

1. https://www.cnblogs.com/a3192048/p/12241255.html - *使用 Vim 寄存器（registers）和系统剪贴板（clipboard） - Adano1 - 博客园*
2. https://docs.kilvn.com/vim_zh_cn/ch08_registers_zh.html - *Ch 8 - 寄存器 · VIM 操作手册*
3. https://www.baeldung-cn.com/linux/vim-registers - *使用Vim寄存器 | Baeldung中文网*

### 宏操作(Macro)

操作步骤：

例 `qai'<Esc>a',<Esc>jq7@a`

1. <kbd>q</kbd> 是开启录制宏
2. <kbd>a</kbd> 是给这次宏的录制过程一个存储位置，可以是 0-9 或 a-z；
3. 然后 `I<单引号><Esc>A<单引号><逗号><Esc>j` 是你这次录制的整个宏的操作过程，意思就是行首插入单引号，行尾插入单引号和逗号，跳到下一行；
4. 接下来的 <kbd>q</kbd> 是结束本次宏的录制；
5. <kbd>@</kbd> 是唤起宏，<kbd>a</kbd> 是要唤起的宏的名字（存储位置），前面的 7 你应该明白吧，就是执行 7 次。

Tips：<kbd>@</kbd> + <kbd>@</kbd> 再次唤起最后一次执行的宏。

参考：

1. https://www.bookstack.cn/read/learn-vim/file-seven.md - *vim 中的宏 - 《Vim 实操教程（Learn Vim）》 - 书栈网 · BookStack*

## 插件

官方：

https://www.vim.org/scripts/index.php - *scripts : vim online*

https://github.com/vim-scripts - *vim-scripts (Scrappy Scraper) · GitHub*

教程：

https://www.bookstack.cn/read/learn-vim/plugin.md - *vim 插件 - 《Vim 实操教程（Learn Vim）》 - 书栈网・BookStack*

搜索：

https://vimawesome.com/ - *Vim Awesome*

https://github.com/vim-awesome/vim-awesome - *GitHub - vim-awesome/vim-awesome: Awesome Vim plugins from across the universe*

参考：

1. https://docs.pingcode.com/baike/885094 - *如何让vim支持python3 | PingCode智库*
2. https://blog.csdn.net/guangyacyb/article/details/103310168 - *Vim 开启python/python3支持_vim python3支持-CSDN博客*
3. https://www.cnblogs.com/darksouls/p/9610094.html - *Linux --- vim 安装、支持python3的配置、插件自动补全YCM的安装配置及全过程错误总结 - DarkSoul - 博客园*
4. https://segmentfault.com/a/1190000003962806 - *Vim与Python真乃天作之合：打造强大的Python开发环境 - 编程派 | Coding Python - SegmentFault 思否*

### 插件管理器

#### Vundle

简介：

> Vundle, the plug-in manager for Vim

![GitHub last commit](https://img.shields.io/github/last-commit/VundleVim/Vundle.vim?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/VundleVim/Vundle.vim?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/VundleVim/Vundle.vim?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/VundleVim/Vundle.vim?style=social)

官方：

https://github.com/VundleVim/Vundle.vim - *GitHub - VundleVim/Vundle.vim: Vundle, the plug-in manager for Vim*

https://github.com/vim-scripts/vundle - *GitHub - vim-scripts/vundle: Vundle the Vim package manager*

安装：

```bash
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

配置：

```vim

```

用法：

1. https://linux.cn/article-9416-1.html - *技术|如何在 Linux 上使用 Vundle 管理 Vim 插件*

参考：

1. https://blog.csdn.net/zhangpower1993/article/details/52184581 - *vim插件管理器：Vundle的介绍及安装（很全）_vundle安装youcompleteme-CSDN博客*
2. https://blog.csdn.net/gitblog_00017/article/details/141741790 - *Vundle 插件管理器使用教程-CSDN博客*
3. https://cn.linux-terminal.com/?p=5193 - *如何在 Linux 上使用 Vundle 管理 Vim 插件*
4. https://vim80.readthedocs.io/zh/latest/plugin/vundle.html - *Vundle 插件管理器 — vim8.0 latest 文档*

#### Vim Plugin Manager

简介：

> vim-plug is the de-facto standard plugin manager for Vim. With 10+ years of history, it&rsquo;s no longer new and shiny, but it&rsquo;s extremely reliable and gets the job done with minimal fuss.
Pros. # Minimalist design Just one file with no dependencies. Super easy to set up. Concise, intuitive syntax that you can learn within minutes. No boilerplate code required. No feature bloat Extremely stable with flawless backward compatibility Works perfectly with all versions of Vim since 2006 and all versions of Neovim ever released 1 Super-fast parallel installation/update 2 Creates shallow clones to minimize disk space usage and download time On-demand loading for faster startup time Can review and rollback updates Branch/tag/commit support Post-update hooks Support for externally managed plugins Cons.

![GitHub last commit](https://img.shields.io/github/last-commit/junegunn/vim-plug?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/junegunn/vim-plug?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/junegunn/vim-plug?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/junegunn/vim-plug?style=social)

官方：

https://github.com/junegunn/vim-plug - *GitHub - junegunn/vim-plug: :hibiscus: Minimalist Vim Plugin Manager*

https://junegunn.github.io/vim-plug/ - *vim-plug | junegunn.choi.*

https://gitcode.com/gh_mirrors/vi/vim-plug/overview - *vim-plug::hibiscus: Minimalist Vim Plugin Manager - GitCode*

### 代码片段

https://github.com/honza/vim-snippets - *GitHub - honza/vim-snippets: vim-snipmate default snippets (Previously snipmate-snippets)*

#### UltiSnips

简介：

> UltiSnips is the Ultimate solution for snippets under Vim.

![GitHub last commit](https://img.shields.io/github/last-commit/sirver/ultisnips?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/sirver/ultisnips?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/sirver/ultisnips?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/sirver/ultisnips?style=social)

官方：

https://www.vim.org/scripts/script.php?script_id=2715 - *UltiSnips - The ultimate snippet solution for python enabled Vim. : vim online*

https://github.com/sirver/ultisnips - *GitHub - SirVer/ultisnips: UltiSnips - The ultimate snippet solution for Vim. Send pull requests to SirVer/ultisnips!*

安装：

```vim
" Track the engine.
Plugin 'SirVer/ultisnips'

" Snippets are separated from the engine. Add this if you want them:
Plugin 'honza/vim-snippets'
```

配置：

```vim
" Trigger configuration. You need to change this to something other than <tab> if you use one of the following:
" - https://github.com/Valloric/YouCompleteMe
" - https://github.com/nvim-lua/completion-nvim
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<c-b>"
let g:UltiSnipsJumpBackwardTrigger="<c-z>"

" If you want :UltiSnipsEdit to split your window.
let g:UltiSnipsEditSplit="vertical"
```

用法：

https://github.com/SirVer/ultisnips/blob/master/doc/UltiSnips.txt - *ultisnips/doc/UltiSnips.txt at master · SirVer/ultisnips · GitHub*

参考：

1. https://www.jianshu.com/p/12cdb3364ad1 - *VIM 代码片段插件 ultisnips 使用教程 - keelii - 简书*
2. https://blog.csdn.net/weixin_43985425/article/details/120514312 - *Vim Ultisnips插件中VISUAL的使用技巧_ultisnips visual 怎么用-CSDN博客*
3. https://gitcode.com/gh_mirrors/ul/ultisnips/overview - *ultisnips:UltiSnips - The ultimate snippet solution for Vim. Send pull requests to SirVer/ultisnips! - GitCode*
4. https://keelii.com/2018/08/26/vim-plugin-ultisnips-advanced-tips - *VIM 代码片段插件 ultisnips 使用教程*

### Markdown

#### Markdown syntax

简介：

> Syntax highlighting, matching rules and mappings for the original Markdown and extensions.

![GitHub last commit](https://img.shields.io/github/last-commit/preservim/vim-markdown?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/preservim/vim-markdown?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/preservim/vim-markdown?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/preservim/vim-markdown?style=social)

官方：

https://github.com/preservim/vim-markdown - *GitHub - preservim/vim-markdown: Markdown Vim Mode*

https://vimawesome.com/plugin/markdown-syntax - *Markdown syntax - Vim Awesome*

安装：

If you use Vundle, add the following lines to your `~/.vimrc`:

```vim
Plugin 'godlygeek/tabular'
Plugin 'preservim/vim-markdown'
```

用法：

暂无

### VimWiki

简介：

> VimWiki is a personal wiki for Vim -- a number of linked text files that have their own syntax highlighting.

![GitHub last commit](https://img.shields.io/github/last-commit/vimwiki/vimwiki?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vimwiki/vimwiki?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vimwiki/vimwiki?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vimwiki/vimwiki?style=social)

官方：

https://github.com/vimwiki/vimwiki - *GitHub - vimwiki/vimwiki: Personal Wiki for Vim*

### vim-prettier

简介：

> A vim plugin wrapper for prettier, pre-configured with custom default prettier settings.

![GitHub last commit](https://img.shields.io/github/last-commit/prettier/vim-prettier?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/prettier/vim-prettier?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/prettier/vim-prettier?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/prettier/vim-prettier?style=social)

官方：

https://github.com/prettier/vim-prettier - *GitHub - prettier/vim-prettier: A Vim plugin for Prettier*

## 常见问题

### 如何在不重启 Vim 的情况下重新加载 .vimrc

命令行模式下输入：

<kbd>:</kbd> + `source ~/.vimrc`

参考：

https://linux.cn/article-9392-1.html - *技术|如何在 Linux/Unix 中不重启 Vim 而重新加载 .vimrc 文件*

### 重新加载文件

手动：

<kbd>:</kbd> + <kbd>e</kbd> - 重新载入当前文件

<kbd>:</kbd> + <kbd>e!</kbd> - 强制重新载入当前文件

https://blog.csdn.net/race604/article/details/7314082 - *VIM使用小技巧-重新载入文件_vim 重读-CSDN博客*

自动：

https://www.cnblogs.com/yeungchie/p/15845052.html - *[ Vim ] 自动重载文件 - YEUNGCHIE - 博客园*

### 不退出 Vim 执行 Shell 命令

在"命令行模式"下（2 种方式）：

1. <kbd>:</kbd> + `terminal`
2. <kbd>:</kbd> + `shell`

参考：

1. https://www.jianshu.com/p/90e046930797 - *不退出vim执行shell命令 - 31K - 简书*
2. https://zhuanlan.zhihu.com/p/56381336 - *VIM学习笔记 运行外部命令(shell Command) - 知乎*
3. https://blog.csdn.net/qazw9600/article/details/108023919 - *文本编辑器vim - 不退出vim执行shell命令_不退出vim如何使用shell 命令-CSDN博客*
4. https://blog.csdn.net/Fei20140908/article/details/115371774 - *vim常用操作——vim中执行shell_vim执行shell命令-CSDN博客*

### 快速选中、删除、复制引号或括号中的内容

`ci'`、`ci"`、`ci(`、`ci[`、`ci{`、`ci<` - 分别更改这些配对标点符号中的文本内容

`di'`、`di"`、`di(` 或 `dib`、`di[`、`di{` 或 `diB`、`di<` - 分别删除这些配对标点符号中的文本内容

`yi'`、`yi"`、`yi(`、`yi[`、`yi{`、`yi<` - 分别复制这些配对标点符号中的文本内容

`vi'`、`vi"`、`vi(`、`vi[`、`vi{`、`vi<` - 分别选中这些配对标点符号中的文本内容

参考：

1. https://blog.csdn.net/babys/article/details/70598350 - *Vim 快速选中、删除、复制引号或括号中的内容_vim 选中大括号 - CSDN 博客*
2. https://docs.kilvn.com/vim_zh_cn/ch04_vim_grammar.html - *Ch 4 - Vim 语法 · VIM 操作手册*

### Vim 状态保存跟恢复

创建会话文件：

`:mksession ~/vimbook.vim`

还原会话：

`:source ~/vimbook.vim`

启动 Vim 并还原某个会话：

`vim -nS ~/vimbook.vim`

参考：

1. https://www.cnblogs.com/zhangshuli-1989/p/hq_vim_151019165.html - *vim状态保存跟恢复 - 小白屋 - 博客园*
2. https://blog.csdn.net/2401_85702623/article/details/140102411 - *掌握Vim的会话之道：深度解析会话管理功能_vim make session-CSDN博客*
3. https://yianwillis.github.io/vimcdoc/doc/usr_21.html - *VIM 中文用户手册: 离开和回来*

## 参考

1. https://segmentfault.com/a/1190000016056004 - *Vim (vi) 编辑器快捷键大全【图解】，各种操作，指令大全 | 从无到有 | linux | mac | terminal - 青枫ky - SegmentFault 思否*
2. https://www.freecodecamp.org/chinese/news/how-to-exit-vim/ - *如何退出 Vim——Vim 保存和退出命令教程*
