# Bash

## 简介

> Bash is the GNU Project's shell—the Bourne Again SHell. This is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and the C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification. - *Bash 是 GNU 项目的 shell--Bourne Again SHell。 这是一个与 sh 兼容的 shell，融合了 Korn shell (ksh) 和 C shell (csh) 的实用功能。 它符合 IEEE POSIX P1003.2/ISO 9945.2 Shell 和 Tools 标准。 与 sh 相比，它在编程和交互使用方面都有功能上的改进。 此外，大多数 sh 脚本无需修改即可由 Bash 运行。*

## 官方

https://www.gnu.org/software/bash/ - *Bash - GNU Project - Free Software Foundation* [via](https://wangchujiang.com/linux-command/c/help.html)

## 教程

https://wangdoc.com/bash/ - *Bash 脚本教程 - 网道* [GitHub Repo](https://github.com/wangdoc/bash-tutorial)

> 本教程介绍 Linux 命令行 Bash 的基本用法和脚本编程。

![GitHub last commit](https://img.shields.io/github/last-commit/wangdoc/bash-tutorial?color=blue&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/wangdoc/bash-tutorial?style=social)

### 基本语法

https://wangdoc.com/bash/grammar - *Bash 的基本语法 - Bash 脚本教程 - 网道*

### 模式扩展

https://wangdoc.com/bash/expansion - *Bash 的模式扩展 - Bash 脚本教程 - 网道*

### 行操作（快捷键）

光标移动：

<kbd>Ctrl</kbd> + <kbd>a</kbd>：移到行首。

<kbd>Ctrl</kbd> + <kbd>e</kbd>：移到行尾。

<kbd>Alt</kbd> + <kbd>b</kbd>：移动到当前单词的词首（backward，向后移动一个单词）。

<kbd>Alt</kbd> + <kbd>f</kbd>：移动到当前单词的词尾（forward，向前移动一个单词）。

编辑操作：

<kbd>Ctrl</kbd> + <kbd>d</kbd>：删除光标位置的字符（delete）。 - *如果当前行没有任何字符，会导致退出当前 Shell，所以要小心。*

<kbd>Ctrl</kbd> + <kbd>w</kbd>：删除光标前面的单词。

<kbd>Alt</kbd> + <kbd>d</kbd>：剪切光标位置到词尾的文本。

<kbd>Alt</kbd> + <kbd>Backspace</kbd>：剪切光标位置到词首的文本。

<kbd>Ctrl</kbd> + <kbd>k</kbd>：剪切光标位置到行尾的文本（kill）。

<kbd>Ctrl</kbd> + <kbd>u</kbd>：剪切光标位置到行首的文本。

<kbd>Ctrl</kbd> + <kbd>y</kbd>：在光标位置粘贴文本（yank）。

<kbd>Ctrl</kbd> + <kbd>_</kbd>：撤消上一个编辑命令。您可以一直撤消到空行。

清除屏幕：

<kbd>Ctrl</kbd> + <kbd>l</kbd>：快捷键可以清除屏幕，即将当前行移到屏幕的第一行，与 `clear` 命令作用相同。

<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>l</kbd>：清除屏幕，如果可能，清除终端的回滚缓冲区，然后重新绘制当前行，将当前行留在屏幕顶部。

自动补全：

<kbd>Tab</kbd>：完成自动补全。

<kbd>Alt</kbd> + <kbd>?</kbd>：列出可能的补全，与连按两次 Tab 键作用相同。

其他快捷键：

<kbd>Alt</kbd> + <kbd>.</kbd>：插入上一个命令的最后一个词。

更多操作方式，请参见：

1. https://wangdoc.com/bash/readline - *Bash 行操作 - Bash 脚本教程 - 网道*
2. http://www.gnu.org/software/readline/ - *The GNU Readline Library*
    1. https://tiswww.cwru.edu/php/chet/readline/rluserman.html - *GNU Readline Library*
3. https://gnu-linux.readthedocs.io/zh/latest/Chapter05/00_shortcuts.html - *Shell 快捷键 — Linux latest 文档*

#### 操作历史

<kbd>Ctrl</kbd> + <kbd>r</kbd>：搜索操作历史，选择以前执行过的命令。

<kbd>Ctrl</kbd> + <kbd>s</kbd>：向前搜索历史记录。

<kbd>Ctrl</kbd> + <kbd>g</kbd>：中止增量搜索并恢复原始行。

<kbd>Alt</kbd> + <kbd>\<</kbd>：显示第一个命令。

<kbd>Alt</kbd> + <kbd>></kbd>：显示最后一个命令，即当前的命令。

<kbd>Alt</kbd> + <kbd>r</kbd>：清空行（如果命令是从历史列表中复制的，则会恢复到原始命令）。

参考：

1. https://wangdoc.com/bash/history - *操作历史 - Bash 脚本教程 - 网道*
2. https://tiswww.cwru.edu/php/chet/readline/history.html - *GNU History Library*
3. https://wangchujiang.com/linux-command/c/history.html - *history 命令，Linux history 命令详解：显示或操作历史列表。 - Linux 命令搜索引擎*
4. https://linux.cn/article-7575-1.html - *技术|如何隐藏你的 Linux 的命令行历史*
5. <https://ubunlog.com/zh-CN/gnulinux中的命令标签/> - *标签，Gnu / Linux中的命令标签，使工作更轻松*

### 重定向

https://www.runoob.com/linux/linux-shell-io-redirections.html - *Shell 输入/输出重定向 | 菜鸟教程*

https://github.com/wangdoc/bash-tutorial/blob/master/docs/archives/redirection.md - *bash-tutorial/docs/archives/redirection.md at master · wangdoc/bash-tutorial · GitHub*

参考：

1. https://zhuanlan.zhihu.com/p/47765176 - *如何理解Linux shell中的“2>&1” - 知乎*
2. https://www.cnblogs.com/bluestorm/p/10754821.html - *Linux 重定向 2>&1 ， 1>&2 - petercao - 博客园*
3. https://blog.csdn.net/zhaominpro/article/details/82630528 - *Linux shell中2>&1的含义解释 （全网最全，看完就懂）-CSDN博客*

## 安装

https://repology.org/project/bash/versions - *bash package versions - Repology*

## 用法

查看 bash 版本：

```bash
bash --version
```

或者

```bash
echo $BASH_VERSION
```

## 参考

1. https://blog.csdn.net/chenweiaiyanyan/article/details/44835407 - *bash下. : () {} [] [[]] (())的解释_.() { . | . & } .-CSDN博客*
