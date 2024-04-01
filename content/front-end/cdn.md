# CDN

## Introduction

> CDN 的全称是 Content Delivery Network，即[内容分发网络](https://baike.baidu.com/item/内容分发网络/4034265)。CDN 是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问应速度和命中率。CDN 的关键技术主要有内容存储和分发技术。


## Tool

### BootCDN

> BootCDN 联合 [Bootstrap 中文网](https://www.bootcss.com/) 共同支持并维护的前端开源项目免费 CDN 服务，致力于为 Bootstrap、jQuery、React、Vue.js 一样优秀的前端开源项目提供稳定、快速的免费 CDN 加速服务。BootCDN 所收录的开源项目主要同步于 [cdnjs](https://github.com/cdnjs/cdnjs) 开源项目仓库。

Website: https://www.bootcdn.cn/ - *BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务*

---

实例：

https://www.bootcdn.cn/prism/

- https://cdn.bootcdn.net/ajax/libs/prism/9000.0.1/plugins/line-numbers/prism-line-numbers.css


### cdnjs

> Simple. Fast. Reliable. Content delivery at its finest. cdnjs is a free and open-source CDN service trusted by over 12.5% of all websites, serving over 200 billion requests each month, powered by Cloudflare. We make it faster and easier to load library files on your websites.

![GitHub last commit](https://badgen.net/github/last-commit/cdnjs/cdnjs?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/cdnjs/cdnjs?style=social)

Website: https://cdnjs.com/ - *cdnjs - The #1 free and open source CDN built to make life easier for developers*

GitHub: https://github.com/cdnjs/cdnjs - *GitHub - cdnjs/cdnjs: 🤖 CDN assets - The #1 free and open source CDN built to make life easier for developers.*

---

实例：

https://cdnjs.com/libraries/animate.css - *animate.css - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers*

- https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css


### ~~UNPKG~~

> unpkg is a fast, global content delivery network for everything on npm.

![GitHub last commit](https://badgen.net/github/last-commit/mjackson/unpkg?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/mjackson/unpkg?style=social)

Website: https://unpkg.com/ - *UNPKG*

GitHub: https://github.com/mjackson/unpkg - *GitHub - mjackson/unpkg: The CDN for everything on npm*

---

实例：

https://unpkg.com/animate.css/

- https://unpkg.com/animate.css@4.1.1/animate.min.css

用法：

1. 在 URL 末尾附加 / 以查看包中所有文件的列表

    例：https://unpkg.com/prismjs/

2. 获取最新版本

    例：https://unpkg.com/vue@latest/dist/vue.min.js

3. 获取第 2 个版本的最新版本

    例：https://unpkg.com/vue@2/dist/vue.min.js

 4. 获取第 0 个版本的默认文件
 
     例：https://unpkg.com/docsify-latex@0


### jsDelivr

> Optimized for JS and ESM delivery from npm and GitHub. Works with all web formats. Serving more than 150 billion requests per month.

![GitHub last commit](https://badgen.net/github/last-commit/jsdelivr/jsdelivr?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/jsdelivr/jsdelivr?style=social)

Website: https://www.jsdelivr.com/ - *jsDelivr - A free, fast, and reliable CDN for open source*

Document: https://www.jsdelivr.com/documentation - *Documentation - jsDelivr* [文档内容 - README](https://cdn.jsdelivr.net/gh/jsdelivr/jsdelivr@master/README.md)

GitHub: https://github.com/jsdelivr/jsdelivr - *GitHub - jsdelivr/jsdelivr: A free, fast, and reliable Open Source CDN for npm, GitHub, Javascript, and ESM* [jsDelivr](https://cdn.jsdelivr.net/gh/jsdelivr/jsdelivr/)

---

实例：

- 在链接 https://cdn.jsdelivr.net/npm/sweetalert2@11 加载耗时（缓慢）的情况下，可将 `cdn` 换成 `fastly`，例：https://fastly.jsdelivr.net/npm/sweetalert2@11 。

合并多个文件：

- 合并多个 js 文件

    ```uri
    https://cdn.jsdelivr.net/combine/gh/jquery/jquery@3.1/dist/jquery.min.js,gh/twbs/bootstrap@3.3/dist/js/bootstrap.min.js
    ```

- 合并多个 css 文件

    ```uri
    https://cdn.jsdelivr.net/combine/npm/bootstrap@3.3/dist/css/bootstrap.min.css,npm/bootstrap@3.3/dist/css/bootstrap-theme.min.css
    ```

用法：

- NPM - https://www.jsdelivr.com/
- ESM - https://www.jsdelivr.com/?docs=esm
- GitHub- https://www.jsdelivr.com/?docs=gh
- WordPress - https://www.jsdelivr.com/?docs=wp


### loli.net

https://loli.net/ - *SM.MS - Free Images Hosting*

- https://cdnjs.loli.net/ - *CDNJS Public file directory*

- https://css.loli.net/

- https://u.sb/css-cdn/ - *前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务*


### More

1. http://staticfile.org/ - *Staticfile CDN*

2. https://cdn.baomitu.com - *360 前端静态资源托管库*

    🏷️ *前端资源库* 、*Google 字体库*

3. https://docs.microsoft.com/en-us/aspnet/ajax/cdn/ - *Microsoft Ajax Content Delivery Network Libraries*

4. https://github.com/justjavac/ReplaceGoogleCDN/blob/master/public-cdn.md - *ReplaceGoogleCDN/public-cdn.md at master · justjavac/ReplaceGoogleCDN · GitHub*
