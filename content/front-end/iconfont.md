# Icon Font

## Introduction

> Icon fonts are vector graphics that contain glyphs and symbols instead of letters and numbers. They may be styled with CSS, similar to regular text.
>
> <cite>—— [icon-font · GitHub Topics · GitHub](https://githubfast.com/topics/icon-font)</cite>


## Search

<i class="fa-brands fa-github fa-lg"></i>
<i class="fa fa-search"></i>

1. https://github.com/topics/icons - *icons · GitHub Topics · GitHub*

2. https://github.com/topics/icon-font - *icon-font · GitHub Topics · GitHub*

<i class="fa fa-search"></i>

1. https://juejin.cn/post/6844904150237478926 - *除了阿里的iconfont图标库，还有这10个开源SVG图标库*

2. https://bs4.dashgame.com/pages/extend.html - *Bootstrap4 中文文档*

3. https://www.cnblogs.com/sexintercourse/p/15945269.html - *最佳Icon图标库推荐，收藏等于学会*

4. https://zhuanlan.zhihu.com/p/473946284 - *推荐 5 个优秀的 Javascript 图标库 - 知乎*


## Usage

### Size

> Use **Font Awesome** class.

https://fontawesome.dashgame.com#larger

<details markdown='1'>

| Name            | Preview                                                      | Code                                                         | Size class                                                   |
| :--------------- | :------------------------------------------------------------ | :------------------------------------------------------------ | :------------------------------------------------------------ |
| Iconfont        | <i class="iconfont icon-mysql"></i>                          | `<i class="iconfont icon-mysql"></i>`                        |                                                              |
| Font Awesome    | <i class="fa fa-link"></i><br /><i class="fa fa-link fa-lg"></i> | `<i class="fa fa-link"></i>`<br />`<i class="fa fa-link fa-lg"></i>` | `fa-lg` `fa-2x` `fa-3x` `fa-4x` `fa-5x`                      |
| Bootstrap Icons | <i class="bi bi-link-45deg"></i>                             | `<i class="bi bi-link-45deg"></i>`                           |                                                              |
| Remix Icon      | <i class="ri-links-line"></i><br /><i class="ri-link"></i>   | `<i class="ri-links-line"></i>`<br />`<i class="ri-link"></i>` | `ri-fw` `ri-xxs` `ri-xs` `ri-sm` `ri-1x` `ri-lg` `ri-xl` `ri-2x`  `ri-3x` ... `ri-10x` [文档链接</i>](https://github.com/Remix-Design/RemixIcon/blob/master/README_CN.md#%E5%A4%A7%E5%B0%8F) |
| File Icons      | <span class="icon octicon-file docker-icon dark-blue"></span> | `<span class="icon octicon-file docker-icon dark-blue "></span>` |                                                              |
| Styled Icons    | <img height="14" width="14" src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/travisci.svg" class="img-icon"/> | `<img height="14" width="14" src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/travisci.svg" class="img-icon"/>` |                                                              |

</details>


### Fixed Width

> Use **Font Awesome** class.（固定宽度）

https://fontawesome.dashgame.com#fixed-width

使用方法：

在图标 HTML 标签 class 属性中添加 `fa-fw`

示例：

`<i class="fa fa-home fa-fw"></i>`

`<i class="fa fa-laptop fa-fw"></i>`

### Color

> Use **File Icons** class.

<details markdown='1'>


?> *Color class* 语法： `light-*`,`medium-*`,`dark-*`（\* 用 *color name* 替换）

序号  | 颜色  | 预览
:---|:---|:---
1  | red  | <i class="ri-fire-line light-red"></i><i class="ri-fire-line medium-red"></i><i class="ri-fire-line dark-red"></i>
2  | green  | <i class="ri-fire-line light-green"></i><i class="ri-fire-line medium-green"></i><i class="ri-fire-line dark-green"></i>
3  | yellow  | <i class="ri-fire-line light-yellow"></i><i class="ri-fire-line medium-yellow"></i><i class="ri-fire-line dark-yellow"></i>
4  | blue  | <i class="ri-fire-line light-blue"></i><i class="ri-fire-line medium-blue"></i><i class="ri-fire-line dark-blue"></i>
5  | maroon  | <i class="ri-fire-line light-maroon"></i><i class="ri-fire-line medium-maroon"></i><i class="ri-fire-line dark-maroon"></i>
6  | purple  | <i class="ri-fire-line light-purple"></i><i class="ri-fire-line medium-purple"></i><i class="ri-fire-line dark-purple"></i>
7  | orange  | <i class="ri-fire-line light-orange"></i><i class="ri-fire-line medium-orange"></i><i class="ri-fire-line dark-orange"></i>
8  | cyan  | <i class="ri-fire-line light-cyan"></i><i class="ri-fire-line medium-cyan"></i><i class="ri-fire-line dark-cyan"></i>
9  | pink  | <i class="ri-fire-line light-pink"></i><i class="ri-fire-line medium-pink"></i><i class="ri-fire-line dark-pink"></i>
10  | theme-colour-check  | <i class="ri-fire-line theme-colour-check"></i>

</details>


## Using

### Font Awesome

如何在 v6 版本中查找对应 v4 版本的图标？

操作步骤：

1. 首先在 v4 版本的 [font-awesome.css](https://fontawesome.dashgame.com/assets/font-awesome/css/font-awesome.css) 文件中找到图标 <i class="fa fa-font-awesome"></i> `fa-font-awesome` 的 Unicode 值是 `f2b4`；

    ```css
    .fa-fa:before,
    .fa-font-awesome:before {
        /* f2b4 为 Unicode 值*/
        content: "\f2b4";
    }
    ```

2. 接着在 v6 版本中搜索 Unicode 值是 [f2b4](https://fontawesome.com/search?q=f2b4&o=r) 的图标。

#### v4

<details markdown='1'>


| 图标                                         | 语境             | 代码                                         |
| :-------------------------------------------- | :---------------- | :-------------------------------------------- |
| <i class="fa fa-github fa-lg"></i>           | GitHub           | `<i class="fa fa-github fa-lg"></i>`         |
| <i class="fa fa-gitlab medium-orange"></i>   | GitLab           | `<i class="fa fa-gitlab medium-orange"></i>` |
| <i class="fa fa-firefox fa-lg"></i>          | 浏览器           | `<i class="fa fa-firefox"></i>`              |
| <i class="fa fa-chrome fa-lg"></i>           | 浏览器           | `<i class="fa fa-chrome"></i>`               |
| <i class="fa fa-edge fa-lg"></i>             | 浏览器           | `<i class="fa fa-edge"></i>`                 |
| <i class="fa fa-linux fa-lg"></i>            | 操作系统         | `<i class="fa fa-linux"></i>`                |
| <i class="fa fa-windows fa-lg"></i>          | 操作系统         | `<i class="fa fa-windows"></i>`              |
| <i class="fa fa-apple fa-lg"></i>            | 操作系统         | `<i class="fa fa-apple"></i>`                |
| <i class="fa fa-android fa-lg"></i>          | 操作系统         | `<i class="fa fa-android"></i>`              |
| <i class="fa fa-skype fa-lg"></i>            | SKYPE            | `<i class="fa fa-skype"></i>`                |
| <i class="fa fa-bug fa-lg"></i>              | 异常             | `<i class="fa fa-bug"></i>`                  |
| <i class="fa fa-book fa-lg"></i>             | 书籍/手册        | `<i class="fa fa-book"></i>`                 |
| <i class="fa fa-list-ul fa-lg"></i>          | 目录             | `<i class="fa fa-list-ul"></i>`              |
| <i class="fa fa-code fa-lg"></i>             | 代码             | `<i class="fa fa-code"></i>`                 |
| <i class="fa fa-filter fa-lg"></i>           | 筛选             | `<i class="fa fa-filter"></i>`               |
| <i class="fa fa-hand-grab-o fa-lg"></i>      | 加油             | `<i class="fa fa-hand-grab-o"></i>`          |
| <i class="fa fa-home fa-lg"></i>             | 主页（中文）     | `<i class="fa fa-home"></i>`                 |
| <i class="fa fa-laptop fa-lg"></i>           | homepage（英文） | `<i class="fa fa-laptop"></i>`               |
| <i class="fa fa-language fa-lg"></i>         | 语言             | `<i class="fa fa-language"></i>`             |
| <i class="fa fa-retweet fa-lg"></i>          | 转发             | `<i class="fa fa-retweet"></i>`              |
| <i class="fa fa-share fa-lg"></i>            | 分享             | `<i class="fa fa-share"></i>`                |
| <i class="fa fa-share-alt fa-lg"></i>        | 分享             | `<i class="fa fa-share-alt"></i>`            |
| <i class="fa fa-search fa-lg"></i>           | 搜索             | `<i class="fa fa-search"></i>`               |
| <i class="fa fa-sticky-note-o fa-lg"></i>    | 便签             | `<i class="fa fa-sticky-note-o"></i>`        |
| <i class="fa fa-terminal fa-lg"></i>         | 终端             | `<i class="fa fa-terminal"></i>`             |
| <i class="fa fa-tasks fa-lg"></i>            | 任务             | `<i class="fa fa-tasks"></i>`                |
| <i class="fa fa-thumbs-o-up fa-lg"></i>      | 点赞             | `<i class="fa fa-thumbs-o-up"></i>`          |
| <i class="fa fa-universal-access fa-lg"></i> | 普及             | `<i class="fa fa-universal-access"></i>`     |
| <i class="fa fa-warning fa-lg"></i>          | 注意             | `<i class="fa fa-warning"></i>`              |
| <i class="fa fa-hand-o-right fa-lg"></i>     | 详见             | `<i class="fa fa-hand-o-right"></i>`         |
| <i class="fa fa-external-link fa-lg"></i>    | 外部链接         | `<i class="fa fa-external-link"></i>`        |
| <i class="fa fa-link fa-lg"></i>             | 内部链接         | `<i class="fa fa-link"></i>`                 |
| <i class="fa fa-question fa-lg"></i>         | 帮助             | `<i class="fa fa-question"></i>`             |
| <i class="fa fa-paw fa-lg"></i>              | 百度             | `<i class="fa fa-paw"></i>`                  |
| <i class="fa fa-info-circle fa-lg"></i>      | 关于             | `<i class="fa fa-info-circle"></i>`          |
| <i class="fa fa-sliders fa-lg"></i>          | 常规设置         | `<i class="fa fa-sliders"></i>`              |
| <i class="fa fa-shopping-cart fa-lg"></i>    | 收费/非免费      | `<i class="fa fa-shopping-cart"></i>`        |
| <i class="fa fa-wrench fa-lg"></i>           | 工具             | `<i class="fa fa-wrench"></i>`               |
| <i class="fa fa-user-circle-o fa-lg"></i>    | 登录             | `<i class="fa fa-user-circle-o"></i>`        |

</details>


####  v6

<details markdown='1'>

| 图标                                         | 语境             | 代码                                         |
| :-------------------------------------------- | :---------------- | :-------------------------------------------- |
| <i class="fa-brands fa-github fa-fw"></i>           | GitHub           | `<i class="fa-brands fa-github"></i>`         |
| <i class="fa-brands fa-gitlab fa-fw"></i>   | GitLab           | `<i class="fa-brands fa-gitlab"></i>` |
| <i class="fa-brands fa-firefox fa-fw"></i>          | 浏览器           | `<i class="fa-brands fa-firefox"></i>`              |
| <i class="fa-brands fa-chrome fa-fw"></i>           | 浏览器           | `<i class="fa-brands fa-chrome"></i>`               |
| <i class="fa-brands fa-edge fa-fw"></i>             | 浏览器           | `<i class="fa-brands fa-edge"></i>`                 |
| <i class="fa-brands fa-linux fa-fw"></i>            | 操作系统         | `<i class="fa-brands fa-linux"></i>`                |
| <i class="fa-brands fa-windows fa-fw"></i>          | 操作系统         | `<i class="fa-brands fa-windows"></i>`              |
| <i class="fa-brands fa-apple fa-fw"></i>            | 操作系统         | `<i class="fa-brands fa-apple"></i>`                |
| <i class="fa-brands fa-android fa-fw"></i>          | 操作系统         | `<i class="fa-brands fa-android"></i>`              |
| <i class="fa-brands fa-skype fa-fw"></i>            | SKYPE            | `<i class="fa-brands fa-skype"></i>`                |
| <i class="fa fa-bug fa-fw"></i>              | 异常             | `<i class="fa fa-bug"></i>`                  |
| <i class="fa fa-book fa-fw"></i>             | 书籍/手册        | `<i class="fa fa-book"></i>`                 |
| <i class="fa fa-list-ul fa-fw"></i>          | 目录             | `<i class="fa fa-list-ul"></i>`              |
| <i class="fa fa-code fa-fw"></i>             | 代码             | `<i class="fa fa-code"></i>`                 |
| <i class="fa fa-filter fa-fw"></i>           | 筛选             | `<i class="fa fa-filter"></i>`               |
| <i class="fa fa-hand-back-fist fa-fw"></i>      | 加油             | `<i class="fa fa-hand-back-fist"></i>`          |
| <i class="fa fa-home fa-fw"></i>             | 主页（中文）     | `<i class="fa fa-home"></i>`                 |
| <i class="fa fa-laptop fa-fw"></i>           | homepage（英文） | `<i class="fa fa-laptop"></i>`               |
| <i class="fa fa-language fa-fw"></i>         | 语言             | `<i class="fa fa-language"></i>`             |
| <i class="fa fa-retweet fa-fw"></i>          | 转发             | `<i class="fa fa-retweet"></i>`              |
| <i class="fa fa-share fa-fw"></i>            | 分享             | `<i class="fa fa-share"></i>`                |
| <i class="fa fa-share-alt fa-fw"></i>        | 分享             | `<i class="fa fa-share-alt"></i>`            |
| <i class="fa fa-search fa-fw"></i>           | 搜索             | `<i class="fa fa-search"></i>`               |
| <i class="fa fa-sticky-note fa-fw"></i>    | 便签             | `<i class="fa fa-sticky-note"></i>`        |
| <i class="fa fa-terminal fa-fw"></i>         | 终端             | `<i class="fa fa-terminal"></i>`             |
| <i class="fa fa-tasks fa-fw"></i>            | 任务             | `<i class="fa fa-tasks"></i>`                |
| <i class="fa fa-thumbs-up fa-fw"></i>      | 点赞             | `<i class="fa fa-thumbs-up"></i>`          |
| <i class="fa fa-universal-access fa-fw"></i> | 普及             | `<i class="fa fa-universal-access"></i>`     |
| <i class="fa fa-warning fa-fw"></i>          | 注意             | `<i class="fa fa-warning"></i>`              |
| <i class="fa fa-hand-point-right fa-fw"></i>     | 详见             | `<i class="fa fa-hand-point-right"></i>`         |
| <i class="fa fa-external-link fa-fw"></i>    | 外部链接         | `<i class="fa fa-external-link"></i>`        |
| <i class="fa fa-link fa-fw"></i>             | 内部链接         | `<i class="fa fa-link"></i>`                 |
| <i class="fa fa-question fa-fw"></i>         | 帮助             | `<i class="fa fa-question"></i>`             |
| <i class="fa fa-paw fa-fw"></i>              | 百度             | `<i class="fa fa-paw"></i>`                  |
| <i class="fa fa-info-circle fa-fw"></i>      | 关于             | `<i class="fa fa-info-circle"></i>`          |
| <i class="fa fa-sliders fa-fw"></i>          | 常规设置         | `<i class="fa fa-sliders"></i>`              |
| <i class="fa fa-shopping-cart fa-fw"></i>    | 收费/非免费      | `<i class="fa fa-shopping-cart"></i>`        |
| <i class="fa fa-wrench fa-fw"></i>           | 工具             | `<i class="fa fa-wrench"></i>`               |
| <i class="fa fa-user-circle fa-fw"></i>    | 登录             | `<i class="fa fa-user-circle"></i>`        |

</details>


### Bootstrap Icons

<details markdown='1'>


| 图标                                 | 语境      | 代码                                   |
| :------------------------------------ | :--------- | :-------------------------------------- |
| <i class="bi bi-ladder"></i>         | 梯子      | `<i class="bi bi-ladder"></i>`         |
| <i class="bi bi-book"></i>           | 书籍/手册 | `<i class="bi bi-book"></i>`           |
| <i class="bi bi-filetype-html"></i>  | 文件      | `<i class="bi bi-filetype-html"></i>`  |
| <i class="bi bi-hand-thumbs-up"></i> | 点赞      | `<i class="bi bi-hand-thumbs-up"></i>` |

</details>


### Remix Icon

<details markdown='1'>


| 图标                                             | 语境                | 代码                                               |
| :------------------------------------------------ | :------------------- | :-------------------------------------------------- |
| <i class="ri-rocket-line"></i> | Getting started / 开始 | `<i class="ri-rocket-line"></i>` |
| <i class="ri-external-link-fill"></i>            | 外部链接            | `<i class="ri-external-link-fill"></i>`            |
| <i class="ri-link"></i>                          | 内部链接            | `<i class="ri-link"></i>`                          |
| <i class="ri-link-unlink"></i>                   | 内部链接            | `<i class="ri-link-unlink"></i>`                   |
| <i class="ri-links-fill"></i>                    | 内部链接            | `<i class="ri-links-fill"></i>`                    |
| <i class="ri-apple-line"></i>                    | 操作系统            | `<i class="ri-apple-line"></i>`                    |
| <i class="ri-android-line"></i>                  | 操作系统            | `<i class="ri-android-line"></i>`                  |
| <i class="ri-app-store-line"></i>                | 苹果应用市场        | `<i class="ri-app-store-line"></i>`                |
| <i class="ri-google-play-line"></i>              | 谷歌应用市场        | `<i class="ri-google-play-line"></i>`              |
| <i class="ri-todo-line"></i>                     | 待办                | `<i class="ri-todo-line"></i>`                     |
| <i class="ri-tools-fill"></i>                    | 工具                | `<i class="ri-tools-fill"></i>`                    |
| <i class="ri-fire-line light-red"></i>           | 热点                | `<i class="ri-fire-line light-red"></i>`           |
| <i class="ri-archive-line light-blue"></i>       | 归档/ 停止更新      | `<i class="ri-archive-line light-blue"></i>`       |
| <i class="ri-search-line"></i>                   | 搜索                | `<i class="ri-search-line"></i>`                   |
| <i class="ri-alarm-warning-line light-red"></i>  | 注意/警告           | `<i class="ri-alarm-warning-line light-red"></i>`  |
| <i class="ri-open-source-fill medium-green"></i> | 开源（Open-Source） | `<i class="ri-open-source-fill medium-green"></i>` |

</details>


### File Icons

<details markdown='1'>


| 图标                                                         | 代码                                                         | Stylesheets |
| :------------------------------------------------------------ | :------------------------------------------------------------ | :----------- |
| <span class="icon octicon-file github-icon"></span>          | `<span class="icon octicon-file github-icon"></span>`        | 原有        |
| <span class="icon octicon-file vue-icon light-green"></span> | `<span class="icon octicon-file vue-icon light-green"></span>` | 原有        |
| <span class="icon octicon-file js-icon medium-yellow"></span> | `<span class="icon octicon-file js-icon medium-yellow"></span>` | 原有        |
| <span class="icon octicon-file editorconfig-icon medium-orange"></span> | `<span class="icon octicon-file editorconfig-icon medium-orange"></span>` | 原有        |
| <span class="icon octicon-file git-icon medium-red"></span>  | `<span class="icon octicon-file git-icon medium-red"></span>` | 原有        |
| <span class="icon octicon-file php-icon dark-blue"></span>   | `<span class="icon octicon-file php-icon dark-blue"></span>` | 原有        |
| <span class="icon octicon-file npm-icon medium-red"></span>  | `<span class="icon octicon-file npm-icon medium-red"></span>` | 原有        |
| <span class="icon octicon-file css3-icon medium-blue"></span> | `<span class="icon octicon-file css3-icon medium-blue"></span>` | 原有        |
| <span class="icon octicon-file composer-icon medium-yellow"></span> | `<span class="icon octicon-file composer-icon medium-yellow"></span>` | 原有        |
| <span class="icon octicon-file markdown-icon medium-blue"></span> | `<span class="icon octicon-file markdown-icon medium-blue"></span>` | 原有        |
| <span class="icon octicon-file html5-icon medium-orange "></span> | `<span class="icon octicon-file html5-icon medium-orange "></span>` | 原有        |
| <span class="icon octicon-file svg-icon dark-yellow"></span> | `<span class="icon octicon-file svg-icon dark-yellow"></span>` | 原有        |
| <span class="icon octicon-file book-icon medium-blue"></span> | `<span class="icon octicon-file book-icon medium-blue"></span>` | 原有        |
| <span class="icon octicon-file docker-icon dark-blue"></span> | `<span class="icon octicon-file docker-icon dark-blue"></span>` | 原有        |
| <span class="icon octicon-file mysql-icon dark-blue"></span> | `<span class="icon octicon-file mysql-icon dark-blue"></span>` | 自定义      |
| <span class="icon octicon-file redis-icon medium-red"></span> | `<span class="icon octicon-file redis-icon medium-red"></span>` | 自定义      |
| <span class="icon octicon-file tag-icon"></span>                    | `<span class="icon octicon-file tag-icon"></span>`                  | 自定义      |

</details>


## Tool

### 字体编辑器

1. [FontEditor](https://kekee000.github.io/fonteditor/) - *在线字体编辑器* 

    - 支持 [Web](https://kekee000.github.io/fonteditor/)

    - 开源软件（[GitHub Repo](https://github.com/ecomfe/fonteditor)）

    ![GitHub last commit](https://img.shields.io/github/last-commit/ecomfe/fonteditor?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ecomfe/fonteditor?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ecomfe/fonteditor?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/ecomfe/fonteditor?style=social)

2. [FontCreator is the most popular font editor for Windows](https://www.high-logic.com/font-editor/fontcreator) - *A professional font editor is the first step to becoming a successful font designer. Use FontCreator to make amazing new fonts and edit existing fonts.*

    - 支持 Windows

    - 免费试用 30 天

### 在线 Icon 搜索

1. https://www.flaticon.com/ - *Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS*

2. https://icons8.com/ - *Free Icons, Clipart Illustrations, Photos, and Music* [GitHub Org](https://github.com/icons8)


### Iconfont

> iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具。

<i class="fa fa-laptop"></i> https://www.iconfont.cn/ - *iconfont-阿里巴巴矢量图标库*

帮助：https://www.iconfont.cn/help/index - *iconfont-阿里巴巴矢量图标库*

- [功能介绍](https://www.iconfont.cn/help/detail?helptype=about)
- [插画模块](https://www.iconfont.cn/help/detail?helptype=draw_illustration)
- [图标绘制](https://www.iconfont.cn/help/detail?helptype=draw)
- [代码应用](https://www.iconfont.cn/help/detail?helptype=code)
- [相关文章](https://www.iconfont.cn/help/detail?helptype=article)

> 《阿里巴巴矢量图标库》，下载图标等素材需要登录账号。

如何在代码中使用「iconfont」？

操作步骤：

1. 打开网页，登录账号；
2. 在网页顶部导航栏「素材库」- 「图标库」中找到要添加的图标；
3. 将找到的图标添加入库（点击操作选项的「购物车」图标）；
4. 添加成功后，点击顶部导航栏右上角的购物车图标；
5. 在操作选项中点击「添加至项目」，将图标添加至指定的项目；
6. 添加成功后，自动跳转至「资源管理」-「我的项目」页面；
7. 在「我的项目」页面可以进一步的编辑图标、删除图标等操作；
8. 项目准备完毕后，具体如何使用，官方「[使用帮助](https://www.iconfont.cn/help/detail?helptype=code)」文档有详细说明。

参考：

1. https://www.365jz.com/article/24512 - _什么是Iconfont？Iconfont的好处及使用方法_


### 图标集

> 189 icon sets with 240k+ icons, search across icon sets in multiple languages, rich filtering by type and style, quick customization of icon colors, sizes and code styles, one-click copy and download for developers and designers

https://yesicon.app/ - *Yesicon - 精选全球高品质、开源、免费的矢量图标库*


## Library

> 《图标字体库》，部分 Web UI 框架会自带图标库。


### Font Awesome 🥇

> The iconic SVG, font, and CSS toolkit.<br><i class="fa fa-language dark-yellow"></i> 标志性的 SVG、字体和 CSS 工具包。

![GitHub last commit](https://img.shields.io/github/last-commit/FortAwesome/Font-Awesome?color=blue&logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/FortAwesome/Font-Awesome?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/FortAwesome/Font-Awesome?logo=github)
![npm](https://img.shields.io/npm/v/font-awesome?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/FortAwesome/Font-Awesome?style=social)

<i class="fa fa-laptop"></i> https://fontawesome.com/

<i class="fa-brands fa-github fa-lg"></i> https://github.com/FortAwesome/Font-Awesome

----

中文手册：

1. https://fontawesome.com.cn/ - *首页 - FontAwesome 字体图标中文Icon*

2. v6（最新版）

   https://fa6.dashgame.com/ - *Font Awesome 6，一套始终绝佳的图标字体库和CSS框架*

3. v5（LTS）

   https://fa5.dashgame.com/ - *Font Awesome 5，一套依旧绝佳的图标字体库和CSS框架*

4. v4（官方已停止维护）

   https://fontawesome.dashgame.com/ - *Font Awesome，一套绝佳的图标字体库和CSS框架*

英文手册：

https://fontawesome.com/versions - *Font Awesome*

1. https://fontawesome.com/v4/icons/ - *Font Awesome Icons*

2. https://fontawesome.com/v5/icons/ - *Find the Perfect Icon for Your Project in Font Awesome 5 | Font Awesome*

3. https://fontawesome.com/v6/icons/ - *Search Icons & Find the Perfect Design | Font Awesome*

---

用法 1：

```css
@font-face {
  font-family:'FontAwesome';
  src:url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0');
  src:url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('https://unpkg.com/font-awesome@4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
  font-weight:normal;
  font-style:normal
}
a[target=_blank]:after {
  display: inline-block;
  padding-left: 3px;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f08e";
  vertical-align: text-bottom;
}
```

用法 2：

v6.4.0

```html
<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css">
```

```html
<i class="fab fa-font-awesome"></i>
```

v4.7.0

```html
<link rel="stylesheet" href="https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css">
```

CDN:

1. https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css

2. https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css

3. https://lug.ustc.edu.cn/_extra/fontawesome/css/all.min.css

4. https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.min.css

### Remix Icon 🥈

> Open source neutral style icon system.<br><i class="fa fa-language dark-yellow"></i> 开源中性风格图标系统。

![GitHub last commit](https://img.shields.io/github/last-commit/Remix-Design/remixicon?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Remix-Design/remixicon?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Remix-Design/remixicon?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Remix-Design/remixicon?style=social)

<i class="fa fa-laptop"></i> https://remixicon.com/ - *Remix Icon - Open source icon library*

<i class="fa-brands fa-github fa-lg"></i> https://github.com/Remix-Design/remixicon


### Ionicons 🥉

> Premium hand-crafted icons built by Ionic, for Ionic apps and web apps everywhere 🌎

![GitHub last commit](https://img.shields.io/github/last-commit/ionic-team/ionicons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ionic-team/ionicons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ionic-team/ionicons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/ionic-team/ionicons?style=social)

<i class="fa fa-laptop fa-fw"></i> https://ionic.io/ionicons

<i class="fa-brands fa-github fa-lg"></i> https://github.com/ionic-team/ionicons

<i class="fa-solid fa-globe fa-fw"></i>
https://unpkg.com/ionicons/

```html
<!-- ionicons -->
<script type="module" src="//unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="//unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```


### Foundation Icon Fonts

> Customize your icons to be any size, color, style in CSS.

<i class="fa fa-laptop fa-fw"></i> https://zurb.com/playground/foundation-icon-fonts-3 - *Foundation Icon Fonts 3 | Playground from ZURB*

<i class="fa fa-book fa-fw"></i> https://www.runoob.com/foundation/foundation-icons.html - *Foundation 图标 | 菜鸟教程*

<i class="fa-solid fa-globe fa-fw"></i> https://unpkg.com/foundation-icons/


### Bootstrap Icons

> Official open source SVG icon library for Bootstrap.<br><i class="fa fa-language dark-yellow"></i> Bootstrap 的官方开源 SVG 图标库。

![GitHub last commit](https://img.shields.io/github/last-commit/twbs/icons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/twbs/icons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/twbs/icons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/twbs/icons?style=social)

<i class="fa fa-laptop"></i> https://icons.getbootstrap.com/

<i class="fa-brands fa-github fa-lg"></i> https://github.com/twbs/icons


### File Icons

> High-quality vector icons for Atom and VSCode, with thousands of supported filetypes and growing.<br><i class="fa fa-language dark-yellow"></i> Atom和VSCode的高质量矢量图标，支持数千种文件类型，并且不断增长。

![GitHub last commit](https://img.shields.io/github/last-commit/homerchen19/github-file-icons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/homerchen19/github-file-icons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/homerchen19/github-file-icons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/homerchen19/github-file-icons?style=social)

<i class="fa-brands fa-github fa-lg"></i>
https://github.com/file-icons/atom ⇒ *Via https://github.com/homerchen19/github-file-icons - *谷歌扩展程序**

<i class="fa fa-globe fa-fw"></i> https://www.jsdelivr.com/package/npm/file-icons-js

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/file-icons-js@1.1.0/css/style.min.css">
<script src="https://cdn.jsdelivr.net/npm/file-icons-js@1.1.0/dist/file-icons.min.js"></script>
```


### Styled Icons 🔥

> 💅 Popular icon packs like Font Awesome, Material Design, and Octicons, available as React Styled Components.<br><i class="fa fa-language dark-yellow"></i> 💅 流行的图标包，如Font Awesome、Material Design和Octicons，可作为React样式的组件提供。

![GitHub last commit](https://img.shields.io/github/last-commit/styled-icons/styled-icons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/styled-icons/styled-icons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/styled-icons/styled-icons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/styled-icons/styled-icons?style=social)

<i class="fa fa-laptop"></i> https://styled-icons.dev/

<i class="fa-brands fa-github fa-lg"></i> https://github.com/styled-icons/styled-icons


### React Icons

> svg react icons of popular icon packs.

![GitHub last commit](https://img.shields.io/github/last-commit/react-icons/react-icons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/react-icons/react-icons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/react-icons/react-icons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/react-icons/react-icons?style=social)

<i class="fa fa-laptop"></i>
https://react-icons.github.io/react-icons/

<i class="fa-brands fa-github fa-lg"></i>
https://github.com/react-icons/react-icons


### Octicons (By GitHub)

> A scalable set of icons handcrafted with <3 by GitHub.  
<i class="bi bi-translate dark-yellow"></i> GitHub 使用 <3 手工制作的一组可扩展图标。

![GitHub last commit](https://img.shields.io/github/last-commit/primer/octicons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/primer/octicons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/primer/octicons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/primer/octicons?style=social)

!> **GitHub** 官网 **Icons**

<i class="fa fa-laptop fa-fw"></i> https://primer.style/octicons/

<i class="fa-brands fa-github fa-lg"></i> https://github.com/primer/octicons

<i class="fa-solid fa-globe fa-fw"></i> https://www.bootcdn.cn/octicons/


### Material Design Icons (By Google)

> Material Design icons by Google.<br><i class="bi bi-translate dark-yellow"></i> Google 的 Material Design 图标。

![GitHub last commit](https://img.shields.io/github/last-commit/google/material-design-icons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/google/material-design-icons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/google/material-design-icons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/google/material-design-icons?style=social)

!> 🪜 **Google** 产品

<i class="fa-brands fa-github fa-lg"></i> https://github.com/google/material-design-icons - *GitHub - google/material-design-icons: Material Design icons by Google*

<i class="fa fa-book fa-fw"></i> 

1. http://google.github.io/material-design-icons/ - *Material 图标指南  |  Google Fonts  |  Google for Developers*

    - 如果遇到站点无法打开，可使用国内站点：https://developers.google.cn/fonts/docs/material_icons

2. https://fonts.google.com/icons - *Material Symbols and Icons - Google Fonts*

<i class="fa-solid fa-globe fa-fw"></i>

1. https://www.bootcdn.cn/material-design-icons/

2. https://unpkg.com/material-design-icons/

---

引用：

```html
<link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

```html
<link href="//unpkg.com/material-design-icons@3.0.1/iconfont/material-icons.css" rel="stylesheet">
```

```html
<link href="//fonts.loli.net/css?family=Material+Icons" rel="stylesheet">
```

用法：

```css
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://gstatic.loli.net/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
}

/*下列样式参考：https://developer.android.google.cn/design/ui/mobile/guides/foundations/accessibility?hl=zh-cn*/
a[target=_blank]:after {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  content: "open_in_new";
  font-size: 18px;
  margin-block: 0;
  /*margin-inline: 4px 0;*/
  vertical-align: text-bottom;
}
```

参考：

1. ~~https://gooyuit.blog.csdn.net/article/details/80407804 - *Google发布750个Material design icons 图标大全使用*~~


### Glyphicons®

> Visual language that everybody understands.<br><i class="fa fa-language dark-yellow"></i> 每个人都能理解的视觉语言。

<i class="fa fa-laptop"></i>  <i class="fa fa-shopping-cart"></i> https://glyphicons.com/


### vscode-icons

> Icons for Visual Studio Code.

<i class="fa-brands fa-github fa-lg"></i>
https://github.com/vscode-icons/vscode-icons

![GitHub last commit](https://img.shields.io/github/last-commit/vscode-icons/vscode-icons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vscode-icons/vscode-icons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vscode-icons/vscode-icons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vscode-icons/vscode-icons?style=social)

<i class="fa-brands fa-github fa-lg"></i>
https://github.com/microsoft/vscode-codicons

![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/vscode-codicons?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/microsoft/vscode-codicons?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/microsoft/vscode-codicons?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/vscode-codicons?style=social)


### More

1. https://github.com/evil-icons/evil-icons - *Simple and clean SVG icon pack with the code to support Rails, Sprockets, Node.js, Gulp, Grunt and CDN* [Website](https://evil-icons.io/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/evil-icons/evil-icons?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/evil-icons/evil-icons?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/evil-icons/evil-icons?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/evil-icons/evil-icons?style=social)

2. https://github.com/tabler/tabler-icons - *tabler/tabler-icons: A set of over 4000 free MIT-licensed high-quality SVG icons for you to use in your web projects.* [Website](https://tabler-icons.io/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/tabler/tabler-icons?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/tabler/tabler-icons?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/tabler/tabler-icons?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/tabler/tabler-icons?style=social)

3. https://github.com/Templarian/MaterialDesign - *GitHub - Templarian/MaterialDesign: ✒7000+ Material Design Icons from the Community* [Website](https://materialdesignicons.com/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/Templarian/MaterialDesign?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Templarian/MaterialDesign?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Templarian/MaterialDesign?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/Templarian/MaterialDesign?style=social)

4. https://github.com/jaywcjlove/icongo - *GitHub - jaywcjlove/icongo: Search SVG Icons. Easily include popular icons in your React projects and provide an easy tool to convert SVG into React components. @icongo* [Website](https://icongo.github.io/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/icongo?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/jaywcjlove/icongo?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/jaywcjlove/icongo?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/jaywcjlove/icongo?style=social)

5. https://github.com/devicons/devicon - *devicons/devicon: Set of icons representing programming languages, designing & development tools* [Website](https://devicon.dev/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/devicons/devicon?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/devicons/devicon?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/devicons/devicon?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/devicons/devicon?style=social)

6. https://github.com/simple-icons/simple-icons - *GitHub - simple-icons/simple-icons: SVG icons for popular brands* [Website](https://simpleicons.org/)

    ![GitHub last commit](https://img.shields.io/github/last-commit/simple-icons/simple-icons?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/simple-icons/simple-icons?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/simple-icons/simple-icons?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/simple-icons/simple-icons?style=social)
