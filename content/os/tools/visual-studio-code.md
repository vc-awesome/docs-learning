# Visual Studio Code

## Introduction

> Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.

![GitHub last commit](https://badgen.net/github/last-commit/Microsoft/vscode?icon=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/Microsoft/vscode?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Microsoft/vscode?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Microsoft/vscode?style=social)
![homebrew cask](https://img.shields.io/homebrew/cask/v/visual-studio-code?logo=homebrew)

## Official

Website: https://code.visualstudio.com/ - *Visual Studio Code - Code Editing. Redefined*

Docs: https://code.visualstudio.com/docs - *Documentation for Visual Studio Code*

Updates: https://code.visualstudio.com/updates/ - *Visual Studio Code October 2023*

GitHub: https://github.com/Microsoft/vscode/ - *GitHub - microsoft/vscode: Visual Studio Code*

## Tutorials

1. https://code.visualstudio.com/docs - *Documentation for Visual Studio Code*

2. https://www.w3cschool.cn/vscode/ - *Visual Studio Code 教程_w3cschool*

3. https://geek-docs.com/vscode/vscode-tutorials/what-is-vscode.html - *VSCode 是什么|极客教程*

## Installation

https://code.visualstudio.com/Download - *Download Visual Studio Code - Mac, Linux, Windows*

### macOS

使用在线包管理器 - [Homebrew](os/mac/homebrew.md#安装软件) 安装：

https://formulae.brew.sh/cask/visual-studio-code - *visual-studio-code — Homebrew Formulae*

```sh
brew install --cask visual-studio-code
```

## Configuration

https://code.visualstudio.com/docs/getstarted/settings#_settings-editor - *Visual Studio Code User and Workspace Settings*

### 显示空格与Tab

方式 1 ：（通过配置文件 `settings.json` 修改）

1. 打开命令面板 <kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>P</kbd> ，输入命令：`Preferences: Open User Settings (JSON)`；

2. 在第 1 对大括号 `{}` 内，添加下列代码：

    ```json
    "editor.renderControlCharacters": true,
    "editor.renderWhitespace": "all",
    ```

参考：

1. https://blog.csdn.net/xinyan233/article/details/96280482 - *在vscode中显示空格和tab符_render whitespace_Xyns的博客-CSDN博客*

2. https://blog.csdn.net/qq_35947329/article/details/102716629 - *VScode如何显示隐藏的空格和tab 并修改tab对应4个空格_zheng是在下的博客-CSDN博客*

3. https://www.yisu.com/zixun/328251.html - *vscode如何显示空格和tab符号 - 软件技术 - 亿速云*

### 设置选中代码的高亮颜色

方式 1 ：（通过配置文件 `settings.json` 修改）

1. 打开命令面板 <kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>P</kbd> ，输入命令：`Preferences: Open User Settings (JSON)`；

2. 在第 1 对大括号 `{}` 内，添加下列代码：

    ```json
    "workbench.colorCustomizations": {
        "editor.selectionBackground": "#55c61480"
    }
    ```

参考：

1. https://blog.csdn.net/qq_35714301/article/details/111313599 - *[VSCode] 自定义选中代码的高亮颜色_vscode 修改ctrl f高亮颜色_Fala Oviara的博客-CSDN博客*

2. https://blog.csdn.net/ljt_229/article/details/104284350 - *vscode设置 点击某个变量高亮的颜色_程序开发园的博客-CSDN博客*

3. https://www.cnblogs.com/kingstacker/p/11957490.html - *Vscode选中变量高亮颜色及注释颜色更改 - 小翁同学 - 博客园*

4. https://www.cnblogs.com/xiangsui/p/11789593.html - *vscode 选中后相同内容高亮的设置 - bp9jISKIN - 博客园*

5. https://blog.csdn.net/u013288190/article/details/124645027 - *VScode 设置推荐（1）-修改选中代码的颜色_vscode选中颜色_软件工程小施同学的博客-CSDN博客*

6. https://blog.csdn.net/qq_26545503/article/details/106887589 - *vscode修改选中文字颜色及当前tab颜色_kainx的博客-CSDN博客*

## Usage

### 键盘快捷键

打开键盘快捷方式：

1. 方式一：https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_keyboard-reference-sheets

    - [macOS - pdf](https://go.microsoft.com/fwlink/?linkid=832143)
    - [Windows - pdf](https://go.microsoft.com/fwlink/?linkid=832145)

2. 方式二：长按 <kbd>⌘</kbd>，依次输入 <kbd>K</kbd> , <kbd>R</kbd>

3. 方式三：通过键盘快捷键 <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>P</kbd> 打开命令面板，输入 `keyborad` ，选择《帮助：键盘快捷方式参考》，回车

键盘快捷方式列表：

1. 打开设置页面 <kbd>⌘</kbd> + <kbd>,</kbd>（英文逗号）

2. 删除行 macOS：<kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>K</kbd> , Windows：<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>

3. 选择当前行 macOS：<kbd>⌘</kbd> + <kbd>L</kbd>

参考：

1. https://blog.csdn.net/yangyong1250/article/details/130084398 - *vscode 快捷键汇总_vscode折叠代码快捷键_吹牛不交税的博客-CSDN博客*

### 折叠代码

1. https://code.visualstudio.com/docs/editor/codebasics#_folding - *Basic Editing in Visual Studio Code*

快捷键：

1. 折叠，折叠光标处最内侧的未折叠区域：

    macOS：<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>[</kbd>

2. 展开，展开光标处的折叠区域：

    macOS：<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>]</kbd>

3. 切换折叠，折叠或展开光标处的区域。

    macOS：<kbd>⌘</kbd> <kbd>K</kbd> + <kbd>⌘</kbd> <kbd>L</kbd>

    Windows：<kbd>Ctrl</kbd> <kbd>K</kbd> + <kbd>Ctrl</kbd> <kbd>L</kbd>

4. 递归折叠，折叠光标处最里面的未折叠区域以及该区域内的所有区域。

    macOS：<kbd>⌘</kbd> <kbd>K</kbd> + <kbd>⌘</kbd> <kbd>[</kbd>

5. 递归展开，展开光标处的区域以及该区域内的所有区域。

    macOS：<kbd>⌘</kbd> <kbd>K</kbd> + <kbd>⌘</kbd> <kbd>]</kbd>

6. 全部折叠，折叠编辑器中的所有区域：

    macOS：<kbd>⌘</kbd> <kbd>K</kbd> + <kbd>⌘</kbd> <kbd>0</kbd>

7. 全部展开，在编辑器中展开所有区域：

    macOS：<kbd>⌘</kbd> <kbd>K</kbd> + <kbd>⌘</kbd> <kbd>J</kbd>

8. 折叠级别 X（级别 2 为 ⌘K ⌘2）折叠级别 X 的所有区域，但当前光标位置的区域除外。

    macOS：<kbd>⌘</kbd> <kbd>K</kbd> + <kbd>⌘</kbd> <kbd>2</kbd>

9. 折叠所有块注释，折叠以块注释标记开头的所有区域。

    macOS：<kbd>⌘</kbd> <kbd>K</kbd> + <kbd>⌘</kbd> <kbd>/</kbd>

参考：

1. https://www.w3cschool.cn/vscode/vscode-collapse-code.html - *vscode 折叠代码_w3cschool*

2. https://zhuanlan.zhihu.com/p/374181348 - *VS Code 中定义可折叠的代码段 - 知乎*

3. https://blog.csdn.net/ycx60rzvvbj/article/details/106447130 - *VSCode的一些小操作(四)——自定义折叠代码区域_vs code 中自定义 region_60rzvvbj的博客-CSDN博客*

4. https://jingyan.baidu.com/article/bea41d437194bbf5c41be657.html - *vscode怎么设置开启代码折叠功能-百度经验*

5. https://www.cnblogs.com/macrored/p/11704062.html - *vscode折叠/展开所有区域代码快捷键 - Macrored - 博客园*

6. https://blog.csdn.net/m0_49714202/article/details/122962348 - *vscode中代码折叠和展开 快捷键（最新最正确）_vscode折叠代码快捷键_MFG_666的博客-CSDN博客*

7. https://blog.csdn.net/wuyujin1997/article/details/108424032 - *VSCode 代码块/全文 折叠/展开 快捷键_vscode 展开收缩当前代码块_锦天的博客-CSDN博客*

### 通过拖放来移动选中的内容

https://jingyan.baidu.com/article/4d58d541376ea1dcd4e9c0d5.html - *vscode怎么设置允许通过拖放来移动选中的内容-百度经验*

### Emmet

https://code.visualstudio.com/docs/editor/emmet - *Emmet in Visual Studio Code*

### 代码片段

https://code.visualstudio.com/docs/editor/userdefinedsnippets - *Snippets in Visual Studio Code*

---

1. https://www.w3cschool.cn/vscode/vscode-zwav3p3l.html - *vscode 代码片段_w3cschool*

2. https://www.w3cschool.cn/vscode/vscode-code-snippet-placeholder.html - *vscode 代码片段占位符_w3cschool*

3. https://www.w3cschool.cn/vscode/vscode-code-snippet-multi-cursor.html - *vscode 代码片段多光标_w3cschool*

4. https://www.w3cschool.cn/vscode/vscode-code-snippet-preset-variables.html - *vscode 代码片段预设变量_w3cschool*

### 编程语言

#### JavaScript

https://code.visualstudio.com/docs/languages/javascript - *JavaScript Programming with Visual Studio Code*

方法（函数）的参数提示：

https://code.visualstudio.com/docs/languages/javascript#_inlay-hints - *JavaScript Programming with Visual Studio Code*

#### Markdown

https://code.visualstudio.com/docs/languages/markdown - *Markdown editing with Visual Studio Code*

## Package

https://marketplace.visualstudio.com/VSCode - *Extensions for Visual Studio family of products | Visual Studio Marketplace*

### 常用插件列表

https://github.com/jaywcjlove/awesome-mac/blob/master/editor-plugin-zh.md#vscode-plugin - *awesome-mac/editor-plugin-zh.md at master · jaywcjlove/awesome-mac · GitHub*

### 中文语言包

https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans - *Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code - Visual Studio Marketplace*

https://github.com/Microsoft/vscode-loc - *GitHub - microsoft/vscode-loc: VS Code Localization Extension*

![GitHub last commit](https://badgen.net/github/last-commit/Microsoft/vscode-loc?icon=github&color=blue)

### 翻译

https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate - *Vscode Google Translate - Visual Studio Marketplace*

### Git

#### GitLens

https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens - *GitLens — Git supercharged - Visual Studio Marketplace*

https://github.com/gitkraken/vscode-gitlens - *GitHub - gitkraken/vscode-gitlens: Supercharge Git inside VS Code and unlock untapped knowledge within each repository — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more*

![GitHub last commit](https://badgen.net/github/last-commit/gitkraken/vscode-gitlens?icon=github&color=blue)

### FTP

#### ftp-kr

https://marketplace.visualstudio.com/items?itemName=ruakr.ftp-kr - *ftp-kr - Visual Studio Marketplace*

https://github.com/karikera/ftp-kr - *GitHub - karikera/ftp-kr: My FTP Extension For VSCode!*

![GitHub last commit](https://badgen.net/github/last-commit/karikera/ftp-kr?icon=github&color=blue)

#### SFTP

https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp - *SFTP - Visual Studio Marketplace*

https://github.com/Natizyskunk/vscode-sftp - *GitHub - Natizyskunk/vscode-sftp: Super fast sftp/ftp extension for VS Code*

![GitHub last commit](https://badgen.net/github/last-commit/Natizyskunk/vscode-sftp?icon=github&color=blue)

参考：

1. https://blog.csdn.net/iamlujingtao/article/details/102501845 - *VsCode SFTP插件详细使用介绍_vscode sftp插件host是什么_iamlujingtao的博客-CSDN博客*

### Markdown

#### Markdown Preview Github Styling

https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles - *Markdown Preview Github Styling - Visual Studio Marketplace*

https://github.com/mjbvz/vscode-github-markdown-preview-style - *GitHub - mjbvz/vscode-github-markdown-preview-style: VS Code extension that changes the built-in markdown preview to match Github's styling*

![GitHub last commit](https://badgen.net/github/last-commit/mjbvz/vscode-github-markdown-preview-style?icon=github&color=blue)

#### Markdown Preview Enhanced

https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced - *Markdown Preview Enhanced - Visual Studio Marketplace*

https://github.com/shd101wyy/vscode-markdown-preview-enhanced - *GitHub - shd101wyy/vscode-markdown-preview-enhanced: One of the "BEST" markdown preview extensions for Visual Studio Code*

![GitHub last commit](https://badgen.net/github/last-commit/shd101wyy/vscode-markdown-preview-enhanced?icon=github&color=blue)

#### Markdown All in One

https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one - *Markdown All in One - Visual Studio Marketplace*

https://github.com/yzhang-gh/vscode-markdown - *GitHub - yzhang-gh/vscode-markdown: Markdown All in One*

![GitHub last commit](https://badgen.net/github/last-commit/yzhang-gh/vscode-markdown?icon=github&color=blue)

### PHP

#### PHP Intelephense

https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client - *PHP Intelephense - Visual Studio Marketplace*

https://github.com/bmewburn/vscode-intelephense - *GitHub - bmewburn/vscode-intelephense: PHP intellisense for Visual Studio Code*

![GitHub last commit](https://badgen.net/github/last-commit/bmewburn/vscode-intelephense?icon=github&color=blue)

### File System

#### File Tree to Text Generator

https://marketplace.visualstudio.com/items?itemName=d-koppenhagen.file-tree-to-text-generator - *File Tree to Text Generator - Visual Studio Marketplace*

https://github.com/d-koppenhagen/vscode-file-tree-to-text-generator - *GitHub - d-koppenhagen/vscode-file-tree-to-text-generator: A Visual Studio Code Extension to generate a text with a file / directory (multiple output formats)*

![GitHub last commit](https://badgen.net/github/last-commit/d-koppenhagen/vscode-file-tree-to-text-generator?icon=github&color=blue)

参考：

1. https://blog.csdn.net/hongyu799/article/details/108621309 - *VScode自动生成项目目录文件结构的方法_windows vscode如何快速的将项目的文档结构 生成md_WebKoalaBoy的博客-CSDN博客*

#### Compare Folders

https://marketplace.visualstudio.com/items?itemName=moshfeu.compare-folders - *Compare Folders - Visual Studio Marketplace*

https://github.com/moshfeu/vscode-compare-folders

![GitHub last commit](https://badgen.net/github/last-commit/moshfeu/vscode-compare-folders?icon=github&color=blue)

### Bookmarks

[Bookmarks - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) [GitHub](https://github.com/alefragnani/vscode-bookmarks)

![GitHub last commit](https://badgen.net/github/last-commit/alefragnani/vscode-bookmarks?icon=github&color=blue)

### Todo Tree

[Todo Tree - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) [GitHub](https://github.com/Gruntfuggly/todo-tree)

![GitHub last commit](https://badgen.net/github/last-commit/Gruntfuggly/todo-tree?icon=github&color=blue)

### Linter（代码校验）

#### HTMLHint

https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint - *HTMLHint - Visual Studio Marketplace*

https://github.com/htmlhint/vscode-htmlhint - *GitHub - htmlhint/vscode-htmlhint: VS Code integration of HTMLHint, an HTML linter.*

![GitHub last commit](https://badgen.net/github/last-commit/htmlhint/vscode-htmlhint?icon=github&color=blue)

用法：

1. [HTML 属性排序](https://htmlhint.com/docs/user-guide/rules/attr-sorted)

#### Stylelint

https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint - *Stylelint - Visual Studio Marketplace*

https://github.com/stylelint/vscode-stylelint

https://stylelint.io/

![GitHub last commit](https://badgen.net/github/last-commit/stylelint/vscode-stylelint?icon=github&color=blue)

[configs](https://github.com/stylelint/awesome-stylelint#configs)：

1. https://github.com/twbs/stylelint-config-twbs-bootstrap - *GitHub - twbs/stylelint-config-twbs-bootstrap: Stylelint config for Bootstrap* 「支持 CSS 声明排序」

2. https://github.com/ota-meshi/stylelint-config-html - *GitHub - ota-meshi/stylelint-config-html: The shareable HTML config for Stylelint.* 「检测 .html 文件中的样式」

[plugins](https://github.com/stylelint/awesome-stylelint#plugins):

1. https://github.com/prettier/stylelint-prettier - *GitHub - prettier/stylelint-prettier: Stylelint plugin for Prettier formatting*

#### ESLint

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#settings-options - *ESLint - Visual Studio Marketplace*

https://github.com/Microsoft/vscode-eslint - *GitHub - microsoft/vscode-eslint: VSCode extension to integrate eslint into VSCode*

![GitHub last commit](https://badgen.net/github/last-commit/Microsoft/vscode-eslint?icon=github&color=blue)

configs:

1. https://github.com/airbnb/javascript - *GitHub - airbnb/javascript: JavaScript Style Guide*

plugins:

1. https://github.com/vuejs/eslint-plugin-vue - *GitHub - vuejs/eslint-plugin-vue: Official ESLint plugin for Vue.js* [Website](https://eslint.vuejs.org/)

2. https://github.com/BenoitZugmeyer/eslint-plugin-html - *GitHub - BenoitZugmeyer/eslint-plugin-html: An ESLint plugin to extract and lint scripts from HTML files.*

#### JSLint

https://marketplace.visualstudio.com/items?itemName=jslint.vscode-jslint - *vscode-jslint - Visual Studio Marketplace*

https://github.com/jslint-org/jslint#quickstart-jslint-in-vscode - *GitHub - jslint-org/jslint: JSLint, The JavaScript Code Quality and Coverage Tool*

![GitHub last commit](https://badgen.net/github/last-commit/jslint-org/jslint?icon=github&color=blue)

#### markdownlint

https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint - *markdownlint - Visual Studio Marketplace*

https://github.com/DavidAnson/vscode-markdownlint - *GitHub - DavidAnson/vscode-markdownlint: Markdown linting and style checking for Visual Studio Code*

![GitHub last commit](https://badgen.net/github/last-commit/DavidAnson/vscode-markdownlint?icon=github&color=blue)

### Formatters

#### EditorConfig for VS Code

https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig - *EditorConfig for VS Code - Visual Studio Marketplace*

https://github.com/editorconfig/editorconfig-vscode

![GitHub last commit](https://badgen.net/github/last-commit/editorconfig/editorconfig-vscode?icon=github&color=blue)

#### Prettier

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode - *Prettier - Code formatter - Visual Studio Marketplace*

https://github.com/prettier/prettier-vscode - *GitHub - prettier/prettier-vscode: Visual Studio Code extension for Prettier*

![GitHub last commit](https://badgen.net/github/last-commit/prettier/prettier-vscode?icon=github&color=blue)

用法：

1. CSS 声明排序

2. HTML 属性排序

3. [结合 ESLint 使用](https://prettier.io/docs/en/install#eslint-and-other-linters)

配置：

1. 创建配置文件 [.prettierrc](https://prettier.io/docs/en/install)

plugins:

1. https://github.com/niklaspor/prettier-plugin-organize-attributes - *GitHub - NiklasPor/prettier-plugin-organize-attributes: Organize your HTML attributes automatically with Prettier 🧼* 「HTML 属性排序」

2. https://github.com/Siilwyn/prettier-plugin-css-order - *GitHub - Siilwyn/prettier-plugin-css-order: Prettier plugin to sort CSS declarations in a certain order.* 「CSS 声明排序」

## FAQ

### 如何在 HTML 中给选定内容快速添加标签？

1. https://ask.csdn.net/questions/7518921 - *VScode:如何在HTML中给选定内容快速添加标签_有问必答-CSDN问答*

2. https://segmentfault.com/q/1010000016968677 - *visual-studio-code - vs code 如何選取一段文字後，將其加上HTML標籤? - SegmentFault 思否*
