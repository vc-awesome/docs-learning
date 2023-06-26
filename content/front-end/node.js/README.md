## Node

### Node 简介

> <img src="https://raw.githubusercontent.com/nodejs/nodejs.org/main/public/static/images/logo-hexagon.svg" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;" /> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.（Node.js® 是一个开源、跨平台的 JavaScript 运行时环境。）
> 
> Node.js® is a free, open-sourced, cross-platform JavaScript run-time environment—
that lets developers write command line tools and server-side scripts outside of a browser.


### node 官方

https://github.com/nodejs/node - *Node.js JavaScript runtime ✨🐢🚀✨*

https://nodejs.org/zh-cn/ - *Node.js 官网* 🇨🇳

https://nodejs.org/ - *Node.js 官网* 🇺🇸

---

**非官方**

http://nodejs.cn/ - *Node.js 中文网*

https://www.runoob.com/nodejs/nodejs-tutorial.html -  *Node.js 教程 | 菜鸟教程*



### node 安装

- **方式一**、使用 nvm 安装 node（推荐）

  https://www.runoob.com/nodejs/nodejs-install-setup.html - *Node.js 安装配置 | 菜鸟教程* （安装前查看评论区内容）

  安装步骤：

  1. [安装 NVM](#nvm-%e5%ae%89%e8%a3%85)；

  2. 通过 NVM 安装 Node；

  3. 安装 NPM *（无需安装，因为 NPM 是随同 NodeJS 一起安装的包管理工具）* ；
  
  4. [使用淘宝 NPM 镜像](front-end/node.js/npm.md#npm-%e9%95%9c%e5%83%8f)。

     - https://npmmirror.com/ - *npmmirror 中国镜像站*

     - https://zhuanlan.zhihu.com/p/465424728 - *【公告】淘宝 npm 域名即将切换 && npmmirror 重构升级 && 微信交流群*

- **方式二**、官方下载安装

  https://www.runoob.com/nodejs/nodejs-install-setup.html - *Node.js 安装配置 | 菜鸟教程*



### node 版本

https://nodejs.org/zh-cn/download/releases - *以往的版本 | Node.js*



### node 镜像

1. https://registry.npmmirror.com/binary.html?path=node/ - *CNPM Binaries Mirror*

2. https://npm.taobao.org/mirrors/node/ - *Node.js 淘宝镜像*



### node 命令行

- 查看当前 Node 版本

  `node --version` 或 `node -v`

- print node command line options (currently set)

  `node --help` 或 `node -h`

### node 链接

1. https://github.com/goldbergyoni/nodebestpractices - *✅ The Node.js best practices list (August 2022)*

2. https://baijiahao.baidu.com/s?id=1726423980119026076 - _一文搞定nodeJS相关的nvm、npm、nrm、yarn、npx等_

## Yarn

### yarn 简介

> <img src="https://avatars.githubusercontent.com/u/22247014?s=200&v=4" alt="package icon" align="bottom" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> Fast, reliable, and secure dependency management for JavaScript. - Yarn

### yarn 官方

GitHub: https://github.com/yarnpkg - *Yarn*

Website: https://yarnpkg.com/ - *Home | Yarn - Package Manager*

---

https://yarn.bootcss.com/ - *Yarn 中文文档*

### yarn 安装

`npm install -g yarn`

### yarn 命令行

- output usage information

  `yarn -h` 或者 `yarn --help`

- output the version number

  `yarn -v` 或者 `yarn --version`

- 安装模块

  `yarn install`

## NVM

### nvm 简介

> <img src="https://avatars.githubusercontent.com/u/49963700?s=200&v=4" alt="package icon" loading="lazy" decoding="async" align="" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;" /> 使用 `nvm` 管理不同版本的 `Node`

### nvm 官方

GitHub：https://github.com/nvm-sh/nvm - *Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions*

Website: http://nvm.sh/ - *nvm - node version manager*

---

菜鸟教程：https://www.runoob.com/w3cnote/nvm-manager-node-versions.html - *使用 nvm 管理不同版本的 node 与 npm*

https://www.cnblogs.com/gaozejie/p/10689742.html - *nvm安装与使用* 

### nvm 安装

#### 在 Windows 中安装

!> ⚠️ 首先最重要的是：一定要卸载已安装的 *Node.js*，否则会发生冲突。然后下载 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 最新安装包，直接安装即可。<br/> *>* 有关详细信息，请参阅“https://www.runoob.com/w3cnote/nvm-manager-node-versions.html” 。

GitHub: https://github.com/coreybutler/nvm-windows - *A node.js version management utility for Windows. Ironically written in Go.*


#### 在 macOS M1 中安装

- 安装步骤：

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


- 参考文档

  https://www.jianshu.com/p/e945bb48593e - *Mac M1安装 nvm 遇到的坑*

  https://wenku.baidu.com/view/fb419a092c60ddccda38376baf1ffc4ffe47e26a.html - *Mac M1安装 nvm 遇到的坑*

  https://www.cnblogs.com/AAmao/p/15424498.html - *Mac M1芯片 安装nvm遇到的问题*



### nvm 命令行

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

  - 在 Linux / MacOS 平台中使用

    `nvm ls-remote`

  - 在 Windows 平台中使用

    `nvm ls available` 或 `nvm list available`



### nvm 常见问题

1. https://blog.csdn.net/N1keo/article/details/89971307 - *利用nvm安装npm失败的解决办法*

2. https://www.html.cn/qa/node-js/11997.html - *如何切换node的版本？*

