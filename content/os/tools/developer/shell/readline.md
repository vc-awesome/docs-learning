# Readline

## 简介

> The GNU Readline library provides a set of functions for use by applications that allow users to edit command lines as they are typed in. Both Emacs and vi editing modes are available. The Readline library includes additional functions to maintain a list of previously-entered command lines, to recall and perhaps reedit those lines, and perform csh-like history expansion on previous commands.

## 官方

http://www.gnu.org/software/readline/ - *The GNU Readline Library* （重定向至：<https://tiswww.cwru.edu/php/chet/readline/rltop.html>）
1. https://tiswww.cwru.edu/php/chet/readline/rluserman.html - *GNU Readline Library*

## 教程

1. https://wangdoc.com/bash/readline - *Bash 行操作 - Bash 脚本教程 - 网道*
2. https://gnu-linux.readthedocs.io/zh/latest/Chapter05/00_shortcuts.html - *Shell 快捷键 — Linux latest 文档*

## 安装

暂无

## 入门指南

### 快捷键

1. <https://wangdoc.com/bash/grammar#快捷键> - *Bash 的基本语法 - Bash 脚本教程 - 网道*

### 行操作

光标移动：

1. <kbd>Ctrl</kbd> + <kbd>a</kbd>：移到行首。

2. <kbd>Ctrl</kbd> + <kbd>e</kbd>：移到行尾。

3. <kbd>Alt</kbd> + <kbd>b</kbd> 或 <kbd>Ctrl</kbd> + <kbd>Left Arrow</kbd>：移动到当前单词的词首（backward，向后移动一个单词）。

4. <kbd>Alt</kbd> + <kbd>f</kbd> 或 <kbd>Ctrl</kbd> + <kbd>Right Arrow</kbd>：移动到当前单词的词尾（forward，向前移动一个单词）。

编辑操作：

1. <kbd>Ctrl</kbd> + <kbd>d</kbd>：删除光标位置的字符（delete）。 - *如果当前行没有任何字符，会导致退出当前 Shell，所以要小心。*

2. <kbd>Ctrl</kbd> + <kbd>w</kbd>：删除光标前面的单词。

3. <kbd>Alt</kbd> + <kbd>d</kbd>：剪切光标位置到词尾的文本。

4. <kbd>Alt</kbd> + <kbd>Backspace</kbd>：剪切光标位置到词首的文本。

5. <kbd>Ctrl</kbd> + <kbd>k</kbd>：剪切光标位置到行尾的文本（kill）。

6. <kbd>Ctrl</kbd> + <kbd>u</kbd>：剪切光标位置到行首的文本。

7. <kbd>Ctrl</kbd> + <kbd>y</kbd>：在光标位置粘贴文本（yank）。

8. <kbd>Ctrl</kbd> + <kbd>_</kbd>：撤消上一个编辑命令。您可以一直撤消到空行。

清除屏幕：

1. <kbd>Ctrl</kbd> + <kbd>l</kbd>：快捷键可以清除屏幕，即将当前行移到屏幕的第一行，与 `clear` 命令作用相同。

2. <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>l</kbd>：清除屏幕，如果可能，清除终端的回滚缓冲区，然后重新绘制当前行，将当前行留在屏幕顶部。

自动补全：

1. <kbd>Tab</kbd>：完成自动补全。

2. <kbd>Alt</kbd> + <kbd>?</kbd>：列出可能的补全，与连按两次 Tab 键作用相同。

其他快捷键：

1. <kbd>Alt</kbd> + <kbd>.</kbd>：插入上一个命令的最后一个词。

### 操作历史

1. <kbd>Ctrl</kbd> + <kbd>r</kbd>：搜索操作历史，选择以前执行过的命令。

2. <kbd>Ctrl</kbd> + <kbd>s</kbd>：向前搜索历史记录。

3. <kbd>Ctrl</kbd> + <kbd>g</kbd>：中止增量搜索并恢复原始行。

4. <kbd>Alt</kbd> + <kbd>&lt;</kbd>：显示第一个命令。

5. <kbd>Alt</kbd> + <kbd>></kbd>：显示最后一个命令，即当前的命令。

6. <kbd>Alt</kbd> + <kbd>r</kbd>：清空行（如果命令是从历史列表中复制的，则会恢复到原始命令）。

参考：

1. https://wangdoc.com/bash/history - *操作历史 - Bash 脚本教程 - 网道*
2. https://tiswww.cwru.edu/php/chet/readline/history.html - *GNU History Library*
3. https://wangchujiang.com/linux-command/c/history.html - *history 命令，Linux history 命令详解：显示或操作历史列表。 - Linux 命令搜索引擎*
4. https://linux.cn/article-7575-1.html - *技术|如何隐藏你的 Linux 的命令行历史*
5. <https://ubunlog.com/zh-CN/gnulinux中的命令标签/> - *标签，Gnu / Linux中的命令标签，使工作更轻松*

### 自定义快捷键

1. https://gnu-linux.readthedocs.io/zh/latest/Chapter05/00_shortcuts.html#id5 - *Shell 快捷键 — Linux latest 文档*
2. https://blog.csdn.net/cnds123321/article/details/124815867 - *Linux命令之键绑定bind_linuxbind-CSDN博客*
3. https://wangchujiang.com/linux-command/c/bind.html - *bind 命令，Linux bind 命令详解：显示或设置键盘按键与其相关的功能 - Linux 命令搜索引擎*
