# NPM

## 简介

> <img src="https://www.npmjs.cn/images/npm.svg" alt="package icon" align="left" width="58" hspace="0" vspace="0" style="border-radius: 5px;margin: 7px 7px 0 0;"> NPM 是 Node 的包管理工具（全名叫做 Node package manager），在我们安装 Node 时候，就已经顺便也安装了 NPM 这个管理工具。

![GitHub last commit](https://badgen.net/github/last-commit/npm/cli?icon=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/npm/cli?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/npm/cli?logo=github)
![npm](https://img.shields.io/npm/v/npm?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/npm/cli?style=social)


## 官方

Website：

1. https://www.npmjs.com/ - *npm | Home*

GitHub：

1. https://www.github.com/npm - *JavaScript Package Manager, Registry & Website*

2. https://github.com/sindresorhus/awesome-npm - *GitHub - sindresorhus/awesome-npm: Awesome npm resources and tips*

    ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome-npm?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/awesome-npm?style=social)

Docs：

1. https://docs.npmjs.com/ - *npm Docs*

官网搜索用法：

1. 按组织搜索：https://www.npmjs.com/search?q=@dcloudio - *@dcloudio - npm search*

2. 按关键字搜索：https://www.npmjs.com/search?q=keywords:uni-app - *keywords\:uni-app - npm search*

非官方：

1. https://www.npmjs.cn/ - *npm 中文文档 | npm 中文网*

2. https://www.runoob.com/nodejs/nodejs-npm.html - *NPM 使用介绍 | 菜鸟教程*


## 设置

### 镜像源

#### npmmirror 镜像站（原淘宝 npm）

官方：https://npmmirror.com/ - *npmmirror 镜像站*

---

使用淘宝 NPM 镜像命令：

- 安装 cnpm 命令行工具

  `npm install -g cnpm --registry=https://registry.npmmirror.com`

  - 使用 cnpm 命令安装模块

    `cnpm install [Module Name]`

  - 参考

    https://www.cnblogs.com/seeding/p/15219113.html - *npm淘宝镜像和查看镜像设置*


#### 中科大镜像站

官方：https://mirrors.ustc.edu.cn/help/npm.html - *NPM 反向代理使用帮助 — USTC Mirror Help 文档*


#### 镜像源管理工具（nrm）

> `nrm` can help you easy and fast switch between different npm registries, now include: `npm`, `cnpm`, `taobao`, `nj(nodejitsu)`.

![GitHub last commit](https://badgen.net/github/last-commit/Pana/nrm?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Pana/nrm?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Pana/nrm?logo=github)
![npm](https://img.shields.io/npm/v/nrm?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/Pana/nrm?style=social)

---

- 官方

  https://www.npmjs.com/package/nrm - *nrm - npm*
  
  https://github.com/Pana/nrm - *GitHub - Pana/nrm: NPM registry manager, fast switch between different registries: npm, cnpm, nj, taobao*

- 安装

  `npm install -g nrm`

- 显示当前可使用的镜像源列表

  `nrm ls`

- Show current registry name or URL

  `nrm current`

- 切换为淘宝镜像源

  `nrm use taobao`

- display help for command

  `nrm -h` 或者 `nrm --help`

- output the version number

  `nrm -V` 或者 `nrm --version`

- Open the homepage of registry with optional browser

  `nrm home <name> [browser]`

  实例：`nrm home taobao`

- 参考

  1. https://www.cnblogs.com/seeding/p/15219113.html - *NPM镜像源查看和切换*


## 命令行

1. https://docs.npmjs.com/cli - *npm CLI | npm Docs*

2. https://docs.npmjs.com/cli/commands - *CLI Commands | npm Docs*

3. https://zhuanlan.zhihu.com/p/534461112 - *npm 常用命令和使用技巧*

### Search npm help documentation

`npm help`

https://docs.npmjs.com/cli/commands/npm-help - *npm-help | npm Docs*

### 查看当前版本

`npm -v`

### 安装模块（本地安装）

https://docs.npmjs.com/cli/commands/npm-install - *npm-install | npm Docs*

```bash
npm install [<package-spec> ...]
```

使用指定镜像源安装某个软件包：

1. 方式 1：
`npm --registry https://npmreg.proxy.ustclug.org/ install <packagename>`

2. 方式 2：
`npm install <Module Name> --registry=https://registry.npmjs.org`

安装 package.json 定义好的模块：

```bash
npm install
```

简写

```bash
npm i
```

安装指定模块：

```bash
npm i <ModuleName>
```

全局安装：

```bash
npm i <ModuleName> -g
```

安装包的同时，将信息写入到 package.json 中的 dependencies 配置中：

```bash
npm i <ModuleName> --save
```

安装包的同时，将信息写入到 package.json 中的 devDependencies 配置中：

```bash
npm i <ModuleName> --save-dev
```

安装多模块：

```bash
npm i <ModuleName1> <ModuleName2>
```

安装方式参数：

-save # 简写 -S，加入到生产依赖中

-save-dev # 简写 -D，加入到开发依赖中

-g # 全局安装 将安装包放在 /usr/local 下或者你 node 的安装目录

### 安装模块（全局安装）

`npm install -g <ModuleName>`

### 卸载模块

`npm uninstall <Module Name>` - *卸载本地模块*

`npm uninstall -g <Module Name>` - *卸载全局模块*

### 更新模块

本地更新：

`npm update <Module Name>`

全局更新：

`npm update -g <Module Name>`

### 搜索模块

`npm search <Module Name>`

### 升级 npm 版本

`npm install npm` # 本地升级

`npm install npm -g` # 全局升级

### 设置镜像源

- 查看

  `npm config get registry`

- 设置

  新版：

  `npm config set registry https://registry.npmmirror.com --global`
  
  `npm config set disturl https://npmmirror.com/mirrors/node --global`
  
  旧版：
  
  ~~`npm config set registry https://registry.npm.taobao.org --global`~~
  
  ~~`npm config set disturl https://npm.taobao.org/dist --global`~~

### 查看全局安装的模块

`npm list -g`

### 查看 grunt 模块的版本号

`npm list grunt`

### 查看包的 package.json 文件

`npm view <ModuleName>`

https://docs.npmjs.com/cli/commands/npm-view - *npm-view | npm Docs*

### 查看设置

`npm config list` 或 `npm config ls`

全局

`npm config list -g` 或 `npm config ls -g`

### 查看完整的设置

`npm config list -l` 或 `npm config ls -l`

### 查看全局安装路径

`npm root -g`

https://docs.npmjs.com/cli/commands/npm-root - *npm-root | npm Docs*

### 查看安装目录路径

`npm config get prefix`

### 修改安装目录路径

`npm config set ""`

### 清空缓存

`npm cache clean`

https://docs.npmjs.com/cli/commands/npm-cache - *npm-cache | npm Docs*

### Open package repository page in the browser

`npm repo [<pkgname> [<pkgname> ...]]`

示例：`npm repo npm`

https://docs.npmjs.com/cli/commands/npm-repo/ - *npm-repo | npm Docs*

### Docs for a package in a web browser maybe

`npm docs [<pkgname> [<pkgname> ...]]`

示例：`npm docs npm`

https://docs.npmjs.com/cli/commands/npm-docs - *npm-docs | npm Docs*

### Create a tarball from a package

https://docs.npmjs.com/cli/commands/npm-pack - *npm-pack | npm Docs*

```bash
npm pack
```


## 模块

### cnpm

> npm client for China mirror of npm.

![GitHub last commit](https://badgen.net/github/last-commit/cnpm/cnpm?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/cnpm/cnpm?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/cnpm/cnpm?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/cnpm/cnpm?style=social)

----

https://github.com/cnpm/cnpm - *GitHub - cnpm/cnpm: cnpm: npm client for China mirror of npm*

http://npmmirror.com/ - *npmmirror 镜像站*

### npx

> npm package executor

![GitHub last commit](https://badgen.net/github/last-commit/npm/npx?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/npx?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/npm/npx?style=social)

---

https://www.github.com/npm/npx

https://www.npmjs.com/package/npx

参考：

1. https://www.ruanyifeng.com/blog/2019/02/npx.html - *npx 使用教程 - 阮一峰的网络日志*

2. https://zhuanlan.zhihu.com/p/269419296 - *npx简介*

快速入门：

- 安装（全局安装）

    `npm install -g npx`

- Show the current npx version.

    `npx -v`

    `npx --version`


### http-server

> http-server: a simple static HTTP server

![GitHub last commit](https://badgen.net/github/last-commit/http-party/http-server?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/http-server?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/http-party/http-server?style=social)

---

https://github.com/http-party/http-server

https://www.npmjs.com/package/http-server

快速入门：

- 安装（Local Install）

  `npm install http-server --save-dev`

- 开始使用

  [如何运行本地安装模块的命令](#如何运行本地安装的模块)

  1. `./node_modules/http-server/bin/http-server`
  2. 打开浏览器访问 `http://127.0.0.1:8080`， ;)


### pm2

> 使用 pm2 管理 node 服务器启动，停止

![GitHub last commit](https://badgen.net/github/last-commit/Unitech/pm2?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/pm2?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/Unitech/pm2?style=social)

---

https://github.com/Unitech/pm2 - *Node.js Production Process Manager with a built-in Load Balancer.*

Via <http://yapi.smart-xwork.cn/doc/devops/index.html#服务器管理>


### browser-sync

> Keep multiple browsers & devices in sync when building websites.

![GitHub last commit](https://badgen.net/github/last-commit/BrowserSync/browser-sync?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/browser-sync?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/BrowserSync/browser-sync?style=social)

---

https://github.com/BrowserSync/browser-sync

https://browsersync.io/ - *Browsersync Time-saving synchronised browser testing.*

https://browsersync.bootcss.com/ - *Browsersync - 省时的浏览器同步测试工具 | Browsersync 中文文档*

!>⚠️ 尽可能在无痕，且没安装任何扩展程序的浏览器中运行、测试；由于扩展程序中的脚本会窜改程序，会导致发生意想不到的错误。

**[命令行](https://browsersync.bootcss.com/docs/command-line)**

- 安装（ *Local Install* ）

  推荐这种方式来安装 *Browsersync* - 通过本地安装到每个项目的根目录。这种方式的可以使依赖被添加到你的 package.json 文件里（ gulp 或 grunt 构建方式）

  ``` sh
  npm install browser-sync --save-dev
  ```

- 查看当前版本

  ``` sh
  browser-sync --version
  ```

- 监听所有文件类型

  [如何运行本地安装模块的命令](#如何运行本地安装的模块)

  - 静态网站

    ``` sh
    browser-sync start --server --files "**/**.*"
    ```

    - 本地安装运行

        ``` sh
        ./node_modules/.bin/browser-sync start --server "gh/docs-learning" --files "**/**.*"
        ```

        ``` sh
        npx browser-sync start --server "gh/docs-learning" --files "**/**.*"
        ```

  - 动态网站

    ``` sh
    browser-sync start --proxy "docs-learning.service" --files "**/**.*"
    ```

      > `**` （表示匹配任意目录）

参考：

1. https://www.likecs.com/show-204759972.html - *BrowserSync浏览器同步测试工具 快速上手*

2. https://www.cnblogs.com/jiaoshou/p/12012221.html - *gulp常用插件之browser-sync使用*

3. https://blog.csdn.net/lgxzzz/article/details/122018090 - *Browsersync的安装及使用方法*

4. https://blog.csdn.net/qq_41328247/article/details/79926353 - *browsersync的使用方法*

5. https://blog.51cto.com/u_15581727/5177587 - *修改文件后浏览器自动刷新解决方案_51CTO博客_浏览器定时刷新*

### PostCSS

> Transform CSS with the power of JavaScript. Auto-prefixing, future CSS syntaxes, modules, linting and more are possible with hundreds of PostCSS plugins.

![GitHub last commit](https://badgen.net/github/last-commit/postcss/postcss?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/postcss?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/postcss/postcss?style=social)

---

https://github.com/postcss/postcss - *GitHub - postcss/postcss: Transforming styles with JS plugins*

https://postcss.org/ - *PostCSS - a tool for transforming CSS with JavaScript* [中文](https://www.postcss.com.cn/)

https://postcss.org/docs/ - *PostCSS Documentation*

Plugins：

1. <https://postcss.org/docs/postcss-plugins> - *PostCSS Plugins*

2. <https://www.postcss.parts/> - *PostCSS.parts | A searchable catalog of PostCSS plugins*

3. https://github.com/ota-meshi/stylelint-config-html - *GitHub - ota-meshi/stylelint-config-html: The shareable HTML config for Stylelint.*

#### Autoprefixer

> Transform CSS with the power of JavaScript. Auto-prefixing, future CSS syntaxes, modules, linting and more are possible with hundreds of PostCSS plugins.

![GitHub last commit](https://badgen.net/github/last-commit/postcss/autoprefixer?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/autoprefixer?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/postcss/autoprefixer?style=social)

---

https://github.com/postcss/autoprefixer - *GitHub - postcss/autoprefixer: Parse CSS and add vendor prefixes to rules by Can I Use*

https://autoprefixer.github.io/ - *Autoprefixer CSS online*

参考：

1. https://www.cnblogs.com/zjzhome/p/4330408.html - *[译]Autoprefixer:用最可行的方式处理浏览器前缀的CSS后处理器 - zjzhome - 博客园*

#### CSSnano

> A modular minifier, built on top of the PostCSS ecosystem.

![GitHub last commit](https://badgen.net/github/last-commit/cssnano/cssnano?icon=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/cssnano/cssnano?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/cssnano/cssnano?logo=github)
![npm](https://img.shields.io/npm/v/cssnano?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/cssnano/cssnano?style=social)

---

https://github.com/cssnano/cssnano - *GitHub - cssnano/cssnano: A modular minifier, built on top of the PostCSS ecosystem.*

https://cssnano.co/ - *CSSNANO*


### npm-check-updates

> Find newer versions of package dependencies than what your package.json allows

![GitHub last commit](https://badgen.net/github/last-commit/raineorshine/npm-check-updates?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/npm-check-updates?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/raineorshine/npm-check-updates?style=social)

---

https://github.com/raineorshine/npm-check-updates - *GitHub - raineorshine/npm-check-updates: Find newer versions of package dependencies than what your package.json allows*

- 安装

  `npm install -g npm-check-updates`

- You're lookin' at it.

  `ncu -h`

  `ncu --help`

- Output the version number of npm-check-updates.

  `ncu -v`

  `ncu -V`

  `ncu --version`

- Show all new dependencies ([excluding peerDependencies](https://github.com/raineorshine/npm-check-updates/issues/951)) for the project in the current directory.

  `ncu`

- Overwrite package file with upgraded versions instead of just outputting to console.

  `ncu -u`

  `ncu --upgrade`

- Check global packages instead of in the current project.

  `ncu -g`
  
  `ncu --global`


## 常见问题

### 如何运行本地安装的模块

3 种运行方式：

- 方式 1：进入安装目录，打开命令行工具 `Git Bash`（Windows 系统），直接执行
  
    `./node_modules/.bin/<packageName>`

- 方式 2：进入安装目录，新建 `index.js` 文件

  ```javascript
  // index.js
  var webpack = require('webpack');
  webpack();
  ```

  然后执行 `node index.js`

- 方式 3：进入安装目录，打开命令行工具，直接执行 `npx <packageName>` （[参考](https://blog.csdn.net/u013791936/article/details/121834826)）

参考：

1. https://segmentfault.com/q/1010000007774349 - *npm本地安装模块后如何去运行*

2. https://www.csdn.net/tags/MtzaYg4sMjU4Mi1ibG9n.html - *npm本地安装模块使用*

3. https://blog.csdn.net/weixin_43302112/article/details/124932956 - *17.如何使用或执行使用 npm 安装的包*

4. https://blog.csdn.net/guyue35/article/details/55195198 - *怎么运行npm本地安装的模块*


### 如何将本地开发的模块安装到全局

> 以模块 [md-file-tree](https://github.com/michalbe/md-file-tree) 为例。

操作步骤：

1. 克隆仓库代码至本地磁盘

    ```bash
    git clone https://github.com/michalbe/md-file-tree.git
    ```

2. 进入到仓库目录

    ```bash
    cd md-file-tree
    ```

3. 创建 tarball （.tgz 文件）

    ```bash
    npm pack
    ```

4. 安装模块至全局

    ```bash
    npm install --global md-file-tree-0.2.0.tgz
    ```

5. 测试模块

    ```bash
    md-file-tree --emoji
    ```

参考：

1. https://juejin.cn/s/npm%20pack%20%E4%BD%9C%E7%94%A8 - *npm pack 作用-掘金*
