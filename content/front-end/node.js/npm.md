## 简介

> NPM 是Node的包管理工具（全名叫做 Node package manager），在我们安装Node时候，就已经顺便也安装了 NPM 这个管理工具。

## 官方

Website：https://www.npmjs.com/

GitHub：https://www.github.com/npm - *JavaScript Package Manager, Registry & Website*

Docs：https://docs.npmjs.com/

------

**非官方**

https://www.npmjs.cn/ - *npm 中文文档 | npm 中文网*

https://www.runoob.com/nodejs/nodejs-npm.html - *NPM 使用介绍 | 菜鸟教程*



## 命令行

⭐ https://zhuanlan.zhihu.com/p/534461112 - *npm 常用命令和使用技巧*

- 查看当前版本

  `npm -v`

- 安装模块（本地安装）

  `npm install <Module Name>`

  ```bash
  npm install # 安装 package.json 定义好的模块，简写 npm i
  
  # 安装包指定模块
  npm i <ModuleName>
  
  # 全局安装
  npm i <ModuleName> -g
  
  # 安装包的同时，将信息写入到 package.json 中的 dependencies 配置中
  npm i <ModuleName> --save
  
  # 安装包的同时，将信息写入到 package.json 中的 devDependencies 配置中
  npm i <ModuleName> --save-dev
  
  # 安装多模块
  npm i <ModuleName1> <ModuleName2>
  
  # 安装方式参数：
  -save # 简写 -S，加入到生产依赖中
  -save-dev # 简写 -D，加入到开发依赖中
  -g # 全局安装 将安装包放在 /usr/local 下或者你 node 的安装目录
  ```

- 安装模块（全局安装）

  ```sh
  npm i <ModuleName> -g
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

 - 查看全局安装路径

   `npm root -g`

 - 查看安装目录路径

   `npm config get prefix`

 - 修改安装目录路径

   `npm config set ""`

## 镜像

https://npmmirror.com/ - *npmmirror 中国镜像站*



### 镜像源管理工具

- 安装

  `npm install -g nrm`

- 显示当前可使用的镜像源列表

  `nrm ls`

- 切换为淘宝镜像源

  `nrm use taobao`

- 参考链接

  https://www.cnblogs.com/seeding/p/15219113.html - *NPM镜像源查看和切换*



## 模块

### npx

?> npm package executor

https://www.github.com/npm/npx

https://www.npmjs.com/package/npx

https://zhuanlan.zhihu.com/p/269419296 - *npx简介*

### http-server

?> http-server: a simple static HTTP server

<i class="ri-github-fill fa fa-lg"></i> https://github.com/http-party/http-server

<i class="fa ri-npmjs-fill medium-red fa-lg"></i> https://www.npmjs.com/package/http-server

**快速入门**

- 安装（Local Install）

  `npm install http-server --save-dev`

- 开始使用

  [如何运行本地安装模块的命令](/front-end/node.js/?id=npm-本地安装模块后如何去运行)

  1. `./node_modules/http-server/bin/http-server`
  2. 打开浏览器访问 `http://127.0.0.1:8080`， ;)



### pm2

?> 使用 pm2 管理 node 服务器启动，停止

<i class="fa fa-github"></i> https://github.com/Unitech/pm2 - *Node.js Production Process Manager with a built-in Load Balancer.*

Via <http://yapi.smart-xwork.cn/doc/devops/index.html#服务器管理>

### browser-sync

?> Keep multiple browsers & devices in sync when building websites.

https://github.com/BrowserSync/browser-sync

https://browsersync.io/ - *Browsersync Time-saving synchronised browser testing.*

https://browsersync.bootcss.com/ - *Browsersync - 省时的浏览器同步测试工具 | Browsersync 中文文档*



!>⚠️ 尽可能在无痕，且没安装任何扩展程序的浏览器中运行测试；因为扩展程序中的脚本会窜程序，导致发生意想不到的错误。

**命令行**

- 安装（ _Local Install_ ）

  推荐这种方式来安装 _Browsersync_ - 通过本地安装到每个项目的根目录。这种方式的可以使依赖被添加到你的 package.json 文件里（ gulp 或 grunt 构建方式）

  ``` sh
  npm install browser-sync --save-dev
  ```

- 查看当前版本

  ``` sh
  browser-sync --version
  ```

- 监听所有文件类型

  [如何运行本地安装模块的命令](/front-end/node.js/?id=npm-本地安装模块后如何去运行)

  - 静态网站

    ``` sh
    browser-sync start --server --files "**/**.*"
    ```

  - 动态网站

    ``` sh
    browser-sync start --proxy "docs-learning.service" --files "**/**.*"
    ```

      > `**` （表示任意目录）匹配

**参考链接**

https://www.likecs.com/show-204759972.html - *BrowserSync浏览器同步测试工具 快速上手*

https://www.cnblogs.com/jiaoshou/p/12012221.html - *gulp常用插件之browser-sync使用*

https://blog.csdn.net/lgxzzz/article/details/122018090 - *Browsersync的安装及使用方法*

https://blog.csdn.net/qq_41328247/article/details/79926353 - *browsersync的使用方法*

### PostCSS

#### Autoprefixer

https://github.com/postcss/autoprefixer - *GitHub - postcss/autoprefixer: Parse CSS and add vendor prefixes to rules by Can I Use*

https://autoprefixer.github.io/ - *Autoprefixer CSS online*

参考：https://www.cnblogs.com/zjzhome/p/4330408.html - *[译]Autoprefixer:用最可行的方式处理浏览器前缀的CSS后处理器 - zjzhome - 博客园*

### npm-check-updates

> Find newer versions of package dependencies than what your package.json allows

https://github.com/raineorshine/npm-check-updates - *GitHub - raineorshine/npm-check-updates: Find newer versions of package dependencies than what your package.json allows*

## 常见问题

### 如何运行本地安装的模块

- 方式1：进入安装目录，打开命令行工具 `Git Bash`，直接执行
  
    `./node_modules/.bin/<packageName>`

- 方式2：进入安装目录，新建 index.js 文件

  ```js
  // index.js
  var webpack = require('webpack');
  webpack();
  ```

  然后执行 `node index.js`

- 方式3：进入安装目录，打开命令行工具，直接执行

  `npx <packageName>`

  https://blog.csdn.net/u013791936/article/details/121834826 - *npm局部安装*



**参考链接**

https://segmentfault.com/q/1010000007774349 - *npm本地安装模块后如何去运行*

https://www.csdn.net/tags/MtzaYg4sMjU4Mi1ibG9n.html - *npm本地安装模块使用*

https://blog.csdn.net/weixin_43302112/article/details/124932956 - *17.如何使用或执行使用 npm 安装的包*

https://blog.csdn.net/guyue35/article/details/55195198 - *怎么运行npm本地安装的模块*

