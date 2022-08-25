## node

### node 官方

<i class="fa fa-github"></i> https://github.com/nodejs/node - *Node.js JavaScript runtime ✨🐢🚀✨*

https://nodejs.org/zh-cn/ :cn: - *Node.js 官网*

https://nodejs.org/ :us: - *Node.js 官网*

---

**非官方**

http://nodejs.cn/ - *Node.js 中文网*

https://www.runoob.com/nodejs/nodejs-tutorial.html -  *Node.js 教程 | 菜鸟教程*



### node 镜像

https://registry.npmmirror.com/binary.html?path=node/ | https://npm.taobao.org/mirrors/node/ - *Node.js 淘宝镜像*



### node 安装

- **方式一**、使用 nvm 安装 node

  https://www.runoob.com/nodejs/nodejs-install-setup.html - *Node.js 安装配置 | 菜鸟教程* （安装前查看评论区内容）

  

  安装步骤：

  1. 安装 nvm
  1. 通过 nvm 安装 node
  1. 安装 npm （无需安装，因为NPM是随同NodeJS一起安装的包管理工具）
  1. 使用淘宝 NPM 镜像
     - https://npmmirror.com/ - *npmmirror 中国镜像站*
     - https://zhuanlan.zhihu.com/p/465424728 - *【公告】淘宝 npm 域名即将切换 && npmmirror 重构升级 && 微信交流群*




### node 命令行

查看当前 Node 版本

`node --version` 或 `node -v`



## npm

https://www.runoob.com/nodejs/nodejs-npm.html - *NPM 使用介绍 | 菜鸟教程*

### npm 命令行

:star: https://zhuanlan.zhihu.com/p/534461112 - *npm 常用命令和使用技巧*

- 查看当前版本

  `npm -v`

- 安装模块

  `npm install <Module Name>`

  ```bash
  npm install # 安装package.json定义好的模块，简写 npm i
  
  # 安装包指定模块
  npm i <ModuleName>
  
  # 全局安装
  npm i <ModuleName> -g
  
  # 安装包的同时，将信息写入到package.json中的 dependencies 配置中
  npm i <ModuleName> --save
  
  # 安装包的同时，将信息写入到package.json中的 devDependencies 配置中
  npm i <ModuleName> --save-dev
  
  # 安装多模块
  npm i <ModuleName1> <ModuleName2>
  
  # 安装方式参数：
  -save # 简写-S，加入到生产依赖中
  -save-dev # 简写-D，加入到开发依赖中
  -g # 全局安装 将安装包放在 /usr/local 下或者你 node 的安装目录
  ```



- 卸载模块

  `npm uninstall <Module Name>`

- 更新模块

  `npm update <Module Name>`

- 搜索模块

  `npm search <Module Name>`

- npm 版本升级

  `npm install npm` # 本地升级

  `npm install npm -g` # 全局升级

- npm 镜像

  - 查看

    `npm config get registry`

  - 设置

    `npm config set registry https://registry.npm.taobao.org --global`

    `npm config set disturl https://npm.taobao.org/dist --global`

- 使用淘宝 NPM 镜像命令

  - 安装 cnpm 命令行工具

    `npm install -g cnpm --registry=https://registry.npmmirror.com`

  - 使用 cnpm 命令安装模块

    `cnpm install [Module Name]`

  - 参考链接

    https://www.cnblogs.com/seeding/p/15219113.html - *npm淘宝镜像和查看镜像设置*

- 查看全局安装的模块

  `npm list -g`

- 查看`grunt`模块的版本号

  `npm list grunt`

- 查看设置

  `npm config list` 或 `npm config ls`

  - 查看完整的设置列表

    `npm config list -l` 或 `npm config ls -l`



### npm 镜像

https://npmmirror.com/ - *npmmirror 中国镜像站*



**镜像源管理工具**

- 安装

  `npm install -g nrm`

- 显示当前可使用的镜像源列表

  `nrm ls`

- 切换为淘宝镜像源

  `nrm use taobao`

- 参考链接

  https://www.cnblogs.com/seeding/p/15219113.html - *NPM镜像源查看和切换*



### npm 模块

#### pm2

?> 使用 pm2 管理 node 服务器启动，停止

<i class="fa fa-github"></i> https://github.com/Unitech/pm2 - *Node.js Production Process Manager with a built-in Load Balancer.*

Via <http://yapi.smart-xwork.cn/doc/devops/index.html#服务器管理>

#### browser-sync

?> Keep multiple browsers & devices in sync when building websites.

<i class="fa fa-github"></i> https://github.com/BrowserSync/browser-sync

https://browsersync.io/ :uk: - *Browsersync Time-saving synchronised browser testing.*

https://browsersync.bootcss.com/ :cn: - *Browsersync - 省时的浏览器同步测试工具 | Browsersync 中文文档*



!>⚠️ 尽可能在无痕，且没安装任何扩展程序的浏览器中运行测试；因为扩展程序中的脚本会窜程序，导致发生意想不到的错误。

**命令行**

- 安装（Local Install）

  推荐这种方式来安装 Browsersync - 通过本地安装到每个项目。这种方式的可以使依赖被添加到你的package.json文件里（gulp或grunt构建方式）

  `npm install browser-sync --save-dev`

- 查看当前版本

  `browser-sync --version`

- 监听所有文件类型

  [<i class="ri-link"></i> 如何运行本地安装模块的命令](/front-end/node.js/?id=npm-本地安装模块后如何去运行)

  - 静态网站

    `browser-sync start --server --files "**/**.*"`

  - 动态网站

    `browser-sync start --proxy "docs-learning.service" --files "**/**.*"`
  
  `**` （表示任意目录）匹配

**参考链接**

https://www.likecs.com/show-204759972.html - *BrowserSync浏览器同步测试工具 快速上手*

https://www.cnblogs.com/jiaoshou/p/12012221.html - *gulp常用插件之browser-sync使用*

https://blog.csdn.net/lgxzzz/article/details/122018090 - *Browsersync的安装及使用方法*

https://blog.csdn.net/qq_41328247/article/details/79926353 - *browsersync的使用方法*



### npm faq

#### npm 本地安装模块后如何去运行

- 方式1：进入安装目录，打开命令行工具 `Git Bash`，直接执行 `./node_modules/.bin/<packageName>`

- 方式2：进入安装目录，新建 index.js 文件

  ```js
  // index.js
  var webpack = require('webpack');
  webpack();
  ```

  然后执行 `node index.js`

  

**参考链接**

https://segmentfault.com/q/1010000007774349 - *npm本地安装模块后如何去运行*

https://www.csdn.net/tags/MtzaYg4sMjU4Mi1ibG9n.html - *npm本地安装模块使用*

https://blog.csdn.net/weixin_43302112/article/details/124932956 - *17.如何使用或执行使用 npm 安装的包*

https://blog.csdn.net/guyue35/article/details/55195198 - *怎么运行npm本地安装的模块*



## nvm

> 使用 `nvm` 管理不同版本的 `Node`

Github：https://github.com/nvm-sh/nvm - *Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions*

菜鸟教程：https://www.runoob.com/w3cnote/nvm-manager-node-versions.html - *使用 nvm 管理不同版本的 node 与 npm*

https://www.cnblogs.com/gaozejie/p/10689742.html - *nvm安装与使用* 



---

### nvm 命令行

- 查看当前版本

  `nvm version` 或 `nvm v`

- 安装 Node

  `nvm install [版本号，例：14.22.1]`

- 卸载 Node

  `nvm unistall [版本号，例：14.22.1]`

- 切换 Node

  `nvm use [版本号，例：14.22.1]`

- 查看当前 Node 版本

  `nvm current`

- 列出已安装 Node

  `nvm ls` 或 `nvm list`

- 列出远程服务器上 Node 所有可用版本
  - 在 Linux / MacOS 平台中使用

    `nvm ls-remote`

  - 在 Windows 平台中使用

    `nvm ls available` 或 `nvm list available`

### nvm 安装

#### 在 Windows 中安装

首先最重要的是：一定要卸载已安装的 NodeJS，否则会发生冲突。然后下载 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 最新安装包，直接安装即可。 Via https://www.runoob.com/w3cnote/nvm-manager-node-versions.html

<i class="fa fa-github"></i> https://github.com/coreybutler/nvm-windows - *A node.js version management utility for Windows. Ironically written in Go.*

#### 在 MacOS M1 中安装

- 安装步骤：

  1. brew install nvm

  2. brew info nvm

  3. cd .nvm

  4. ls -a

  5. touch .zshrc

  6. vim ~/.nvm/.zshrc

     ```shell
     export NVM_DIR="$HOME/.nvm"
        [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
        [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
     ```

     

  7. cd ..

  8. source .zshrc

  9. nvm -v

     避免每次重启终端需要重复第8步操作的问题，以下步骤是解决方式

     - 设置环境变量（[macos设置环境变量path详解
       ](https://blog.csdn.net/Mint6/article/details/124156340)、[Mac 解决每次新建终端 都要重新运行 source ~/.bash_profile问题](https://www.cnblogs.com/pansidong/p/15055345.html)）

  10. vim .zshrc（添加下列内容）

      ```shell
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



### FAQ

https://blog.csdn.net/N1keo/article/details/89971307 - *利用nvm安装npm失败的解决办法*

https://www.html.cn/qa/node-js/11997.html - *如何切换node的版本？*

