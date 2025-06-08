# Bash

## 简介

> Bash is the GNU Project's shell—the Bourne Again SHell. This is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and the C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification. - *Bash 是 GNU 项目的 shell--Bourne Again SHell。 这是一个与 sh 兼容的 shell，融合了 Korn shell (ksh) 和 C shell (csh) 的实用功能。 它符合 IEEE POSIX P1003.2/ISO 9945.2 Shell 和 Tools 标准。 与 sh 相比，它在编程和交互使用方面都有功能上的改进。 此外，大多数 sh 脚本无需修改即可由 Bash 运行。*

## 官方

https://www.gnu.org/software/bash/ - *Bash - GNU Project - Free Software Foundation* [Via](https://wangchujiang.com/linux-command/c/help.html)

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

有关详细信息，请参阅“[Readline](os/tools/developer/shell/readline.md)”。

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

```bash
bash [GNU long option] [option] ...
```

```bash
bash [GNU long option] [option] script-file ...
```

display this help and exit:

```bash
bash --help
```

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
