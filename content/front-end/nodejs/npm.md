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


## 教程

### 官方教程

1. https://docs.npmjs.com/ - *npm Docs*

### 第三方教程

1. https://www.npmjs.cn/ - *npm 中文文档 | npm 中文网*
2. https://www.runoob.com/nodejs/nodejs-npm.html - *NPM 使用介绍 | 菜鸟教程*


## 设置

https://docs.npmjs.com/cli/configuring-npm - *Configuring npm | npm Docs*

### 镜像源

#### npmmirror 镜像站（原淘宝 npm）

官网：

https://npmmirror.com/ - *npmmirror 镜像站*

安装 cnpm 命令行工具：

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

使用 cnpm 命令安装模块：

```bash
cnpm install [Module Name]
```

参考：

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


### package.json

> 已有 package.json ， 安装模块依赖。

官方：

1. https://docs.npmjs.com/cli/configuring-npm/package-json/ - *package.json | npm Docs*

安装：

- `npm install` - 一键安装 package.json 文件里的所有依赖文件

- `npm install --dependencies` - 只安装 dependencies（运行依赖）文件

- `npm install --devDependencies` - 只安装 devDependencies （开发依赖）文件

- `npm install -g npm-check-updates` - 更新依赖到最新版本

参考：

1. https://www.cnblogs.com/sese/p/10119511.html - *npm安装package.json中的模块依赖 - 前端[色色] - 博客园*


## 目录结构

### 查看全局安装路径

`npm root -g`

https://docs.npmjs.com/cli/commands/npm-root/ - *npm-root | npm Docs*

### 查看安装目录路径

`npm config get prefix`

### 修改安装目录路径

`npm config set ""`


## 命令行

1. https://docs.npmjs.com/cli - *npm CLI | npm Docs*

    1. https://docs.npmjs.com/cli/commands/ - *CLI Commands | npm Docs*

2. https://zhuanlan.zhihu.com/p/534461112 - *npm 常用命令和使用技巧*

### Search npm help documentation - npm help

https://docs.npmjs.com/cli/commands/npm-help/ - *npm-help | npm Docs*

```bash
npm help <term> [<terms..>]
```

### 查看当前版本 - npm version

https://docs.npmjs.com/cli/commands/npm-version/ - *npm-version | npm Docs*

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

示例：

`npm -v`

### 安装模块 - npm install

#### 本地安装

https://docs.npmjs.com/cli/commands/npm-install/ - *npm-install | npm Docs*

```bash
npm install [<package-spec> ...]
```

使用指定镜像源安装某个软件包：

1. 方式 1：
`npm --registry https://npmreg.proxy.ustclug.org/ install <package-spec>`

2. 方式 2：
`npm install <package-spec> --registry=https://registry.npmjs.org`

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
npm i <package-spec>
```

全局安装：

```bash
npm i <package-spec> -g
```

安装包的同时，将信息写入到 package.json 中的 dependencies 配置中：

```bash
npm i <package-spec> --save
```

安装包的同时，将信息写入到 package.json 中的 devDependencies 配置中：

```bash
npm i <package-spec> --save-dev
```

安装多模块：

```bash
npm i <package-spec> <package-spec>
```

安装参数：

- -save # 简写 -S，加入到生产依赖中

- -save-dev # 简写 -D，加入到开发依赖中

- -g # 全局安装，将安装包放在 /usr/local 目录或者 node 的安装目录

#### 全局安装

`npm install -g <package-spec>`

#### 升级版本

`npm install -g <package-spec>` - *执行已安装的软件包，表示更新软件包版本*

示例：

`npm install npm`  - *本地升级*

`npm install npm -g` - *全局升级*

### 卸载模块 - npm uninstall

https://docs.npmjs.com/cli/commands/npm-uninstall/ - *npm-uninstall | npm Docs*

```bash
npm uninstall [<@scope>/]<pkg>...
```

`npm uninstall <pkg>` - *卸载本地模块*

`npm uninstall -g <pkg>` - *卸载全局模块*

### 更新模块 - npm update

https://docs.npmjs.com/cli/commands/npm-update/ - *npm-update | npm Docs*

```bash
npm update [<pkg>...]
```

本地更新：

`npm update <pkg>`

全局更新：

`npm update -g <pkg>`

### 搜索模块 - npm search

https://docs.npmjs.com/cli/commands/npm-search/ - *npm-search | npm Docs*

```bash
npm search <search term> [<search term> ...]
```

示例：

`npm search npm`

在线（官网）搜索：

1. 按组织搜索：https://www.npmjs.com/search?q=@dcloudio - *@dcloudio - npm search*
2. 按关键字搜索：https://www.npmjs.com/search?q=keywords:uni-app - *keywords\:uni-app - npm search*

### 列出已安装的软件包 - npm ls

https://docs.npmjs.com/cli/commands/npm-ls/ - *npm-ls | npm Docs*

```bash
npm ls <package-spec>
```

#### 查看全局安装的模块

`npm ls -g`

#### 查看指定模块的版本号

示例：

`npm ls npm`

`npm ls --global npm`

### View registry info - npm view

https://docs.npmjs.com/cli/commands/npm-view/ - *npm-view | npm Docs*

```bash
npm view [<package-spec>] [<field>[.subfield]...]
```

示例：

`npm view npm`

`npm view npm repository.url`

#### 查看包的 package.json 文件

暂无

### 配置文件 - npm config

https://docs.npmjs.com/cli/commands/npm-config/ - *npm-config | npm Docs*

```bash
npm config set <key>=<value> [<key>=<value> ...]
npm config get [<key> [<key> ...]]
npm config delete <key> [<key> ...]
npm config list [--json]
npm config edit
npm config fix
```

#### 查看所有设置

本地：

`npm config list` 或 `npm config ls`

全局：

`npm config list -g` 或 `npm config ls -g`

#### 查看完整的设置

`npm config list -l` 或 `npm config ls -l`

#### 查看镜像源

`npm config get registry`

#### 设置镜像源

新版：

`npm config set registry https://registry.npmmirror.com --global`

`npm config set disturl https://npmmirror.com/mirrors/node --global`

旧版：

~~`npm config set registry https://registry.npm.taobao.org --global`~~

~~`npm config set disturl https://npm.taobao.org/dist --global`~~

### 清空缓存 - npm cache

https://docs.npmjs.com/cli/commands/npm-cache/ - *npm-cache | npm Docs*

```bash
npm cache add <package-spec>
npm cache clean [<key>]
npm cache ls [<name>@<version>]
npm cache verify
```

### Open package repository page in the browser - npm repo

https://docs.npmjs.com/cli/commands/npm-repo/ - *npm-repo | npm Docs*

```bash
npm repo [<pkgname> [<pkgname> ...]]
```

示例：

`npm repo npm`

### Docs for a package in a web browser maybe - npm docs

https://docs.npmjs.com/cli/commands/npm-docs/ - *npm-docs | npm Docs*

```bash
npm docs [<pkgname> [<pkgname> ...]]
```

示例：

`npm docs npm`

### Create a tarball from a package - npm pack

https://docs.npmjs.com/cli/commands/npm-pack/ - *npm-pack | npm Docs*

```bash
npm pack <package-spec>
```

## 软件包

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

- 更新

  `npm i -g npm-check-updates`

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
