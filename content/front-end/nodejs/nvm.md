# NVM

## 简介

> <img src="https://avatars.githubusercontent.com/u/49963700?s=200&v=4" alt="package icon" loading="lazy" decoding="async" align="" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;" /> 使用 **NVM** 管理不同版本的 **Node.js**

![GitHub last commit](https://badgen.net/github/last-commit/nvm-sh/nvm?icon=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/nvm-sh/nvm?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/nvm-sh/nvm?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/nvm-sh/nvm?style=social)

## 官方

GitHub：https://github.com/nvm-sh/nvm - *Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions*

Website: http://nvm.sh/ - *nvm - node version manager*

## 教程

菜鸟教程：https://www.runoob.com/w3cnote/nvm-manager-node-versions.html - *使用 nvm 管理不同版本的 node 与 npm*

https://www.cnblogs.com/gaozejie/p/10689742.html - *nvm安装与使用*

## 安装

### 在 Windows 中安装

!> ⚠️ 首先最重要的是：一定要卸载已安装的 *Node.js*，否则会发生冲突。然后下载 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 最新安装包，直接安装即可。<br/> *>* 有关详细信息，请参阅“https://www.runoob.com/w3cnote/nvm-manager-node-versions.html” 。

GitHub: https://github.com/coreybutler/nvm-windows - *A node.js version management utility for Windows. Ironically written in Go.*

### 在 macOS M1 中安装

安装步骤：

1. `brew install nvm`

2. `brew info nvm`

3. `cd .nvm`

4. `ls -a`

5. `touch .zshrc`

6. `vim ~/.nvm/.zshrc`

 ```sh
 export NVM_DIR="$HOME/.nvm"
    [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
    [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
 ```

7. `cd ..`

8. `source .zshrc`

9. `nvm -v`

    避免每次重启终端需要重复第8步操作的问题，以下步骤是解决方式

    - 设置环境变量（[macos设置环境变量path详解](https://blog.csdn.net/Mint6/article/details/124156340)、[Mac 解决每次新建终端 都要重新运行 source ~/.bash_profile问题](https://www.cnblogs.com/pansidong/p/15055345.html)）

10. `vim .zshrc`（添加下列内容）

  ```sh
  #cnpm之前加载npm，cnpm才会生效
  source ~/.nvm/.zshrc
     
  #alias for cnpm
  alias cnpm="npm --registry=https://registry.npmmirror.com \
     --cache=$HOME/.npm/.cache/cnpm \
     --disturl=https://npmmirror.com/mirrors/node \
     --userconfig=$HOME/.cnpmrc"
  ```

11. 重启终端，设置成功

参考文档：

  1. https://www.jianshu.com/p/e945bb48593e - *Mac M1安装 nvm 遇到的坑*

  2. https://wenku.baidu.com/view/fb419a092c60ddccda38376baf1ffc4ffe47e26a.html - *Mac M1安装 nvm 遇到的坑*

  3. https://www.cnblogs.com/AAmao/p/15424498.html - *Mac M1芯片 安装nvm遇到的问题*

## 卸载

暂无

## 镜像

https://mirrors.ustc.edu.cn/help/node.html - *Node 源使用帮助 — USTC Mirror Help 文档*

`export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/`

## 命令行

- Show this message

  `nvm --help`

- 查看当前 NVM 版本

  `nvm --version` 或 `nvm -v`

- 安装 Node

  `nvm install [版本号，例：14.22.1]`

- Install the latest LTS version

  `nvm install --lts`

- 卸载 Node

  `nvm unistall [版本号，例：14.22.1]`

- 切换 Node

  `nvm use [版本号，例：14.22.1]`

- 使用已安装 Node 的最新版本

  `nvm use node`

- 使用已安装 Node 的最新 LTS 版本（Use the latest LTS version）

  `nvm use --lts`

- 查看当前 Node 版本

  `nvm current` 或 `nvm version`

- 列出已安装 Node

  `nvm ls` 或 `nvm list`

- 列出远程服务器上 Node 所有可用版本

  - 在 Linux / macOS 平台中使用

    `nvm ls-remote`

  - 在 Windows 平台中使用

    `nvm ls available` 或 `nvm list available`

- Display path to installed node version.

  `nvm which [current | <version>]`

- Set default node version on a shell

  `nvm alias default 18.16.0`

- Always default to the latest available node version on a shell

  `nvm alias default node`

## 常见问题

1. https://blog.csdn.net/N1keo/article/details/89971307 - *利用nvm安装npm失败的解决办法*

2. https://www.html.cn/qa/node-js/11997.html - *如何切换node的版本？*
