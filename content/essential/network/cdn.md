# CDN

## Introduction

> CDN 的全称是 Content Delivery Network，即[内容分发网络](https://baike.baidu.com/item/内容分发网络/4034265)。CDN 是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问应速度和命中率。CDN 的关键技术主要有内容存储和分发技术。

CDN 是内容交付网络的缩写。 它是一个由服务器和数据中心组成的地理分布网络，这些服务器和数据中心协同工作，根据用户的地理位置向其传送互联网内容，如网页、图像、视频和其他媒体。 使用 CDN 的主要目的包括提高网站性能、减少延迟、提高可靠性和安全性。

CDN 的主要特点和优势包括

1. **缓存**： CDN 在距离最终用户较近的边缘服务器上缓存内容，从而减少源服务器的负载并加快内容交付。

2. **负载平衡**： CDN 将进入的流量分配给多个服务器，以优化资源利用率并提高可扩展性。

3. **提高性能**： 通过从更靠近用户的服务器提供内容，CDN 减少了延迟，提高了响应时间，从而加快了页面加载时间，改善了用户体验。

4. **全球覆盖**： 内容分发网络遍布全球，可以快速、可靠地向全球用户分发内容。

5. **安全性**： 许多 CDN 提供 DDoS 保护、SSL/TLS 加密和网络应用程序防火墙（WAF）功能等安全功能，以防范各种网络威胁。

流行的 CDN 提供商包括 Cloudflare、Akamai、Amazon CloudFront 和 Fastly 等。 它们被网站、应用程序和服务广泛使用，以优化内容分发并为最终用户提高性能。

## Getting Started

### Tools

#### BootCDN

> BootCDN 联合 [Bootstrap 中文网](https://www.bootcss.com/) 共同支持并维护的前端开源项目免费 CDN 服务，致力于为 Bootstrap、jQuery、React、Vue.js 一样优秀的前端开源项目提供稳定、快速的免费 CDN 加速服务。BootCDN 所收录的开源项目主要同步于 [cdnjs](https://github.com/cdnjs/cdnjs) 开源项目仓库。

官方：

1. Website: https://www.bootcdn.cn/ - *BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务*

实例：

1. https://www.bootcdn.cn/prism/ - *prism (v9000.0.1) - Lightweight, robust, elegant syntax highlighting. A spin-off project from Dabblet. | BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务 铂特优选*

    - https://cdn.bootcdn.net/ajax/libs/prism/9000.0.1/plugins/line-numbers/prism-line-numbers.css

#### cdnjs

> Simple. Fast. Reliable. Content delivery at its finest. cdnjs is a free and open-source CDN service trusted by over 12.5% of all websites, serving over 200 billion requests each month, powered by Cloudflare. We make it faster and easier to load library files on your websites.

![GitHub last commit](https://img.shields.io/github/last-commit/cdnjs/cdnjs?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/cdnjs/cdnjs?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/cdnjs/cdnjs?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/cdnjs/cdnjs?style=social)

官方：

1. Website: https://cdnjs.com/ - *cdnjs - The #1 free and open source CDN built to make life easier for developers*

2. GitHub: https://github.com/cdnjs/cdnjs - *GitHub - cdnjs/cdnjs: 🤖 CDN assets - The #1 free and open source CDN built to make life easier for developers.*

实例：

1. https://cdnjs.com/libraries/animate.css - *animate.css - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers*

    - https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css

#### Google Hosted Libraries

https://developers.google.cn/speed/libraries?hl=zh-cn - *托管库  |  Hosted Libraries  |  Google for Developers*

#### Statically

> The CDN for developers.

![GitHub last commit](https://img.shields.io/github/last-commit/staticallyio/statically?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/staticallyio/statically?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/staticallyio/statically?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/staticallyio/statically?style=social)

官方：

1. Website: https://statically.io/ - *The CDN for Static Files on GitHub, GitLab, and Bitbucket - Statically*

2. GitHub: https://github.com/staticallyio/statically - *GitHub - staticallyio/statically: The CDN for developers.*

用法：

1. https://gitlab.com/vc-awesome/floccus-bookmarks/main/fontawesome/releases/v6.5.1/css/all.css 转换为 https://fastly.statically.io/gl/vc-awesome/floccus-bookmarks/main/fontawesome/releases/v6.5.1/css/all.min.css

2. https://github.com/vc-awesome/docs-learning/master/_media/1686699383997.png 转换为 https://fastly.statically.io/gh/vc-awesome/docs-learning/master/_media/1686699383997.png

#### UNPKG

> unpkg is a fast, global content delivery network for everything on npm.

![GitHub last commit](https://img.shields.io/github/last-commit/mjackson/unpkg?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/mjackson/unpkg?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/mjackson/unpkg?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/mjackson/unpkg?style=social)

官方：

1. Website: https://unpkg.com/ - *UNPKG*

2. GitHub: https://github.com/mjackson/unpkg - *GitHub - mjackson/unpkg: The CDN for everything on npm*

实例：

1. https://unpkg.com/animate.css/

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

#### jsDelivr

> Optimized for JS and ESM delivery from npm and GitHub. Works with all web formats. Serving more than 150 billion requests per month.

![GitHub last commit](https://img.shields.io/github/last-commit/jsdelivr/jsdelivr?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/jsdelivr/jsdelivr?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/jsdelivr/jsdelivr?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/jsdelivr/jsdelivr?style=social)

官方：

1. Website: https://www.jsdelivr.com/ - *jsDelivr - A free, fast, and reliable CDN for open source*

2. Document: https://www.jsdelivr.com/documentation - *Documentation - jsDelivr* [文档内容 - README](https://cdn.jsdelivr.net/gh/jsdelivr/jsdelivr@master/README.md)

3. GitHub: https://github.com/jsdelivr/jsdelivr - *GitHub - jsdelivr/jsdelivr: A free, fast, and reliable Open Source CDN for npm, GitHub, Javascript, and ESM* [jsDelivr](https://cdn.jsdelivr.net/gh/jsdelivr/jsdelivr/)

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

1. 在 URL 末尾附加 / 以查看包中所有文件的列表

    例：https://cdn.jsdelivr.net/npm/prismjs/

2. 获取最新版本

    例：
    1. https://cdn.jsdelivr.net/npm/prismjs@latest/prism.js
    2. https://cdn.jsdelivr.net/npm/prismjs/prism.js

3. 获取第 1 个版本的最新版本

    例：https://cdn.jsdelivr.net/npm/prismjs@1/prism.js

 4. 获取第 0 个版本的默认文件

    例：https://cdn.jsdelivr.net/npm/prismjs@0


#### loli.net

https://loli.net/ - *SM.MS - Free Images Hosting*

- https://u.sb/sm-ms/ - *SM.MS - 免费 / 收费图床服务 - 烧饼博客*

- https://cdnjs.loli.net/ - *CDNJS Public file directory*

- https://css.loli.net/ - *前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务 - 烧饼博客*

    - 重定向至：https://u.sb/css-cdn/ - *前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务*


#### More

1. http://staticfile.org/ - *Staticfile CDN* [新域名](https://www.staticfile.net/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/staticfile/static?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/staticfile/static?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/staticfile/static?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/staticfile/static?style=social)

    - [GitHub Repo](https://github.com/staticfile/static)

2. https://cdn.baomitu.com - *360 前端静态资源托管库*

    🏷️ *前端资源库* 、*Google 字体库*

3. https://docs.microsoft.com/en-us/aspnet/ajax/cdn/ - *Microsoft Ajax Content Delivery Network Libraries*

## Usage

1. https://github.com/justjavac/ReplaceGoogleCDN/blob/master/public-cdn.md - *ReplaceGoogleCDN/public-cdn.md at master · justjavac/ReplaceGoogleCDN · GitHub*

    ![GitHub last commit](https://img.shields.io/github/last-commit/justjavac/ReplaceGoogleCDN?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/justjavac/ReplaceGoogleCDN?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/justjavac/ReplaceGoogleCDN?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/justjavac/ReplaceGoogleCDN?style=social)

2. https://u.sb/css-cdn/ - *前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务 - 烧饼博客*

所有国内加速服务的域名列表如下，您只需要修改程序里的原域名即可：

原域名 | 加速域名
--- | ---
cdnjs.cloudflare.com | cdnjs.loli.net
ajax.googleapis.com | ajax.loli.net
fonts.googleapis.com | 1. fonts.loli.net<br>2. fonts.googleapis.cn
fonts.gstatic.com | 1. gstatic.loli.net<br>2. fonts.gstatic.cn
themes.googleusercontent.com | themes.loli.net
secure.gravatar.com | gravatar.loli.net

### Google Fonts

<https://u.sb/css-cdn/#2、google-fonts> - *前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务 - 烧饼博客*

## Appendix

### Related Link

1. [iconfont](design/iconfont.md)
2. [mirror](os/mirror.md)