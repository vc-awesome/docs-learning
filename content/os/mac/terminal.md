# Terminal

## 简介

> 了解如何使用 Mac 上的“终端”来通过命令行直接与 macOS 交互。
> 
> “终端” App 可让高级用户和开发者通过命令行界面 (CLI) 与 Mac 操作系统进行通信。你可以输入命令和脚本（称为 shell 脚本）在 Mac 上执行任务。
> 
> <cite>—— [Mac 上的“终端”是什么？ - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/guide/terminal/trmld4c92d55/2.14/mac/14.0)</cite>

## 官方

https://support.apple.com/zh-cn/guide/terminal/welcome/mac - *适用于 Mac 的终端使用手册 - 官方 Apple 支持 (中国)*

## 入门指南

https://github.com/0nn0/terminal-mac-cheatsheet - *GitHub - 0nn0/terminal-mac-cheatsheet: List of my most used commands and shortcuts in the terminal for Mac*

![GitHub last commit](https://img.shields.io/github/last-commit/0nn0/terminal-mac-cheatsheet?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/0nn0/terminal-mac-cheatsheet?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/0nn0/terminal-mac-cheatsheet?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/0nn0/terminal-mac-cheatsheet?style=social)

### 重定向

https://support.apple.com/zh-cn/guide/terminal/apd1dbe647b-7e11-49dc-aa76-89aa7e53ce36/mac - *在 Mac 上重定向“终端”输入和输出 - 官方 Apple 支持 (中国)*

### 键盘快捷键

https://support.apple.com/zh-cn/guide/terminal/trmlshtcts/mac - *Mac 上“终端”中的键盘快捷键 - 官方 Apple 支持 (中国)*

- 终端停止指令（中断）：键盘 <kbd>Control</kbd> + <kbd>C</kbd> 或者 <kbd>Command</kbd> + <kbd>.</kbd> 结束进程

#### 编辑命令行

- 重新定位插入点：在按住 <kbd>Option</kbd> 键的同时将指针移到新的插入点

- 将插入点移到行的开头：<kbd>Control</kbd> + <kbd>A</kbd>

- 将插入点移到行的结尾：<kbd>Control</kbd> + <kbd>E</kbd>

- 删除行：<kbd>Control</kbd> + <kbd>U</kbd>

### 命令行

#### Man pages

https://developer.apple.com/documentation/os/reading_unix_manual_pages - *Reading UNIX Manual Pages | Apple Developer Documentation*

#### cd

``` bash
cd $HOME
```

https://support.apple.com/zh-cn/guide/terminal/apd3cf6fe02-3ec8-48f1-951f-866e52955fc8/mac - *在 Mac 上的“终端”中指定文件和文件夹 - 官方 Apple 支持 (中国)*

#### sudo

暂无

#### man

暂无

#### exit

暂无

#### open

使用 Sublime Text 应用打开 *"/Users/caiyongwen/Library/Application Support/Google/Chrome/Default/Extensions/ameknmcccppekphhkihlbcfaialpdmbf"* 文件夹

```bash
open -a "/Applications/Sublime Text.app" "/Users/caiyongwen/Library/Application Support/Google/Chrome/Default/Extensions/ameknmcccppekphhkihlbcfaialpdmbf"
```

#### 查看系统环境变量

```bash
echo $PATH
```

输出：`/Users/caiyongwen/.nvm/versions/node/v15.14.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`

#### 文件权限

```bash
sudo chmod -R 777 <要授权的文件目录路径>
```

### 使用自动化和脚本

#### shell 脚本

https://support.apple.com/zh-cn/guide/terminal/apd53500956-7c5b-496b-a362-2845f2aab4bc/mac - *Mac 上“终端”中的 shell 脚本介绍 - 官方 Apple 支持 (中国)*

#### AppleScript

1. https://support.apple.com/zh-cn/guide/terminal/trml1003/mac - *在 Mac 上使用 AppleScript 和“终端”自动执行任务 - 官方 Apple 支持 (中国)*
2. https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html - *Introduction to AppleScript Language Guide*

参考：

1. http://events.jianshu.io/p/05d0cc696314 - *【AppleScript】关于Mac如何使用shell关闭某个应用窗口 - 天下林子 - 简书*
2. https://blog.csdn.net/chenzenan/article/details/108647659 - *mac无提示关闭终端窗口命令_chenzenan的博客-CSDN博客_mac关闭终端窗口命令*

##### osascript

https://www.jianshu.com/p/9d248faf02c2 - *macos神器osascript - 简书*

## 快速入门

暂无

## 设置

暂无

## 常见问题

暂无

## 参考

1. https://zhuanlan.zhihu.com/p/435856183 - *Mac-终端命令行教程（Command Line） - 知乎*
2. https://www.jianshu.com/p/a91a257f8103 - *MAC的常见命令行 - 上下求索zsh - 简书*
3. https://blog.csdn.net/LaneDu/article/details/115106598 - *Mac常用命令行_杜莱的博客-CSDN博客_mac常用命令行*
4. https://blog.csdn.net/xingmeiok/article/details/122989347 - *mac终端常用命令_西洲 -的博客-CSDN博客_mac终端命令大全介绍*

