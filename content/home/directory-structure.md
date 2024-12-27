# 目录结构

## 简介

> 资源文件夹命名。

## 模板

方式一：

```tree
root_folder
|-- a first folder
|   |-- holidays.mov
|   |-- javascript-file.js
|   `-- some_picture.jpg
|-- documents
|   |-- spreadsheet.xls
|   |-- manual.pdf
|   |-- document.docx
|   `-- presentation.ppt
|       `-- test
|-- empty_folder
|-- going deeper
|   |-- going deeper
|   |   `-- going deeper
|   |        `-- going deeper
|   |            `-- .secret_file
|   |-- style.css
|   `-- index.html
|-- music and movies
|   |-- great-song.mp3
|   |-- S01E02.new.episode.avi
|   |-- S01E02.new.episode.nfo
|   `-- track 1.cda
|-- .gitignore
|-- .htaccess
|-- .npmignore
|-- archive 1.zip
|-- archive 2.tar.gz
|-- logo.svg
`-- README.md
```

方式二：

```tree
root_folder/
├── a first folder/
│   ├── holidays.mov
│   ├── javascript-file.js
│   └── some_picture.jpg
├── documents/
│   ├── spreadsheet.xls
│   ├── manual.pdf
│   ├── document.docx
│   └── presentation.ppt
└── etc.
```

有关详细信息，请参阅“[Treeview ▲ Prism plugins](https://prismjs.com/plugins/treeview/)”。

### 项目

扩展目录：*H:\√ 123456\╰ 公司项目\!! 统一格式文件分类*

扩展文件：*H:\√ 123456\╰ 公司项目\!! 统一格式文件分类\√ 统一格式文件分类.txt*

```tree
---------* 表示新建项目文件夹必加

<年月日>_<项目名>[_<主次 main|new|old>]/
├─ API/
├─ APP封装/
│  ├─ 图标和启动图/
│  │   ├─ 启动页.png
│  │   ├─ Android/
│  │   │  └─ 图标.png
│  │   └─ iOS/
│  │       └─ 图标.png
│  ├─ 正式安装包/
│  │   ├─ android/
│  │   │  └─ xxx-v1.0.0.apk
│  │   ├─ ios/
│  │   │  └─ xxx.ipa
│  │   └─ wgt/
│  │        └─ xxx.wgt
│  └─ 测试安装包/
├─ UI/ #蓝湖
│  ├─ PSD/
│  ├─ PxCook软件/
│  ├─ 补充图/
│  ├─ 更新/
│  │   ├─ 第1更（年月日）/
│  │   ├─ ……
│  │   └─ 第N更（年月日）/
│  ├─ 其它/ #banner, logo...
│  ├─ 切图/
│  ├─ 效果图/
│  └─ 字体库/
├─ SSL证书/
├─ 更新记录/
│  ├─ 版本更新（年月日）.txt
│  └─ 版本更新具体操作（年月日）.txt
├─ 海报/
│  ├─ 第1期/ #包含图片、文案
│  ├─ ……
│  └─ 第N期/
├─ 活动/
├─ 文案/
├─ 操作指引/
├─ 开发详情/
│  ├─ 测试数据/
│  ├─ 功能文档/
│  ├─ 开发源码/
│  ├─ 前端页面/
│  │   ├─ 商品图片/
│  │   ├─ 首页轮播图/
│  │   │   └─ 第1版/ #版本迭代文件夹
│  │   └─ xxx_web.rar #项目前端源码
│  ├─ 数据库设计/
│  ├─ 系统logo/
│  ├─ 系统优化/
│  ├─ 需求分析/
│  └─ 多语言翻译|中英译文/
├─ 视频/
├─ 数据库备份/ ---------*
│   #命名格式(有数据)：数据库名称_年月日_时分秒.sql
│   #命名格式(无数据)：数据库名称_年月日_时分秒_nodata.sql
├─ 数据表/
├─ 系统源码/ #命名格式：项目名称_年月日_时分秒.rar ---------*
│  ├─ 本地/ #含源码和 sql
│  ├─ 前端/
│  │   ├─ h5/
│  │   └─ uniapp/
│  ├─ 后端/
│  │   └─ thinkphp/
│  │       ├─ cron.txt #定时任务
│  │       └─ ...
│  ├─ 前后端/
│  │   └─ thinkphp/
│  └─ 波场/
│       └─ thinkphp/
├─ 项目参考/
├─ 项目图片/
│  └─ 首页轮播图/
├─ 项目文档/ ---------*
│  ├─ 开发文档/
│  │   └─ 开发文档.docx
│  ├─ 设计文档/
│  │   └─ 设计文档.docx
│  ├─ 修改文档/
│  │   └─ 修改文档.docx
│  ├─ 需求文档/
│  │   ├─ xxx「原文档」.docx
│  │   └─ 需求文档.docx
│  └─ * 年月日_项目名_模板.docx
├─ 线上最新备份/ #备份内容：代码、数据库、定时任务
├─ 账号密码/
├─ 范例--todo.txt
├─ 范例--时间轴.txt ---------*
├─ 范例--网站网址.txt ---------*
├─ 范例--项目部署.md ---------*
├─ 范例--项目域名.md ---------*
├─ 范例--账号密码.txt ---------*
└─ 范例--以下项目资料--<项目名称>.txt
```

### 前端

#### 自整理

> 自定义目录结构

```tree
myproject/
├─ build/
├─ dist/
├─ docs/
├─ demo/
├─ src/
├─ pages/
│  └─ login/
├─ static/
│  ├─ css/
│      ├─ custom.css #自定义样式
│      ├─ main.css #主样式
│      ├─ style.css #全局样式
│      ├─ fonts.css #字体样式
│      ├─ modal.css
│      ├─ index.css
│      └─ default.css
│  ├─ font/
│  ├─ images/
│  ├─ plugins/
│  ├─ themes/
│  ├─ js/
│      ├─ data.js #中英文数据
│      ├─ main.js
│      ├─ website.js
│      └─ app.js
│  ├─ media/
│  ├─ pdf/
│  ├─ picture/
│  ├─ videos/
│  └─ libs/ #扩展库
│      └─ bootstrap/
│          ├─ css/
│          └─ js/
├─ 404.html
└─ index.html
```

参考：

1. https://gamium.world/ - *gamium.world*
2. https://unpkg.com/fontawesome-free/ - *UNPKG - fontawesome-free*
3. https://github.com/fex-team/styleguide/blob/master/project.md - *styleguide/project.md at master · fex-team/styleguide · GitHub*

#### Web

```tree
// 每个页面对应一个 css 文件，例如：blog 页面的文件夹下有 index.html 和 blog.css
assets/
├─ dist/ #构建目录
│  ├─ css/
│  └─ js/
├─ site/
│  └─ content/
│      └─ docs/ #文档目录
│          └─ 5.1/
│              └─ examples/
├─ js/
└─ scss/
```

参考：

1. https://getbootstrap.com/docs/5.1/getting-started/contents/ - *Contents · Bootstrap v5.1* [中文](https://v5.bootcss.com/docs/getting-started/contents)

#### uni-app

```tree
// 含 * 号表示官方说明
project/ #目录结构
├─ common/ #外部引入的 css 及 js 文件存放目录
│  ├─ locales/ #语言包
│  │  ├─ my.js #马来语
│  │  ├─ en.js #英文
│  │  └─ zh.js #中文
│  ├─ clipboard.js #APP 平台复制文件至粘贴板
│  ├─ custom.css #自定义样式
│  ├─ helper.js #助手函数
│  ├─ http.interceptor.js #拦截器 --from uview
│  ├─ http.api.js #*API集中管理 --from uView
│  ├─ util.js #工具类
│  └─ ...
├─ components/ #*符合 vue 组件规范的 uni-app 组件目录
│  ├─ 项目组件/ #仅适用于单一项目
│  └─ 公共组件/ #可适用所有项目
├─ js_sdk/ #uniapp 官方插件市场
│  ├─ mmmm-image-tools/ #图像转换工具，可用于图像和 base64 的转换
│  └─ ...
├─ node_modules/ #npm 安装模块
│  └─ vue-i18n/ #多语言
├─ pages/ #页面命名参考本文档 [位置]
│  └─ login/ #未登录可访问的页面
│      ├─ download.vue
│      ├─ forgetPassword.vue
│      ├─ login.vue
│      ├─ register.vue
│      └─ start.vue #启动页面（启动视频、启动图片 etc）
│  └─ tabbarA/
│      └─ index.vue
│  └─ tabbarB/
│      └─ index.vue
│  └─ tabbarC/
│      ├─ me.vue #我的页面
│      ├─ meShare.vue #分享页面
│      └─ index.vue
├─ static/ #更多可查看后端资源存放
│  * css、less/scss 等资源不要放在 static 目录下，建议这些公用的资源放在自建的 common 目录下
│  * static 目录下的 js 文件不会被编译，如果里面有 es6 的代码，不经过转换直接运行，在手机设备上会报错
│  * 存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
│      ├─ images|imgs/
│      │   ├─ avatar/ #头像
│      │   │   ├─ avatar-square.png #圆角方形
│      │   │   └─ avatar-circle.png #圆形
│      │   ├─ background/ #背景图
│      │   │   └─ bg-i-user.png #图片背景
│      │   └─ empty/ #内容为空 --from uView 的 Empty 组件
│      │        └─ empty-message.png #消息列表为空
│      │   ├─ start/
│      │   │   └─ start-image.png #启动图
│      │   ├─ common/
│      │   ├─ icon/
│      │   │   └─ icon-upload.png #上传图标
│      │   ├─ logo/
│      │   │   └─ logo.png
│      │   └─ tabbarA/ #底部标签页 A、B、C... 内的图片
├─ store/ #vuex 状态管理
│      └─ index.js
├─ utils/ #工具集，从 uni-app 插件导入的插件
├─ App.vue
├─ main.js
├─ manifest.json
├─ pages.json
└─ uni.scss
```

参考：

1. https://uniapp.dcloud.net.cn/tutorial/project.html - *工程简介 | uni-app官网*

#### 工程化

https://github.com/Tencent/tmt-workflow#目录结构 - *GitHub - Tencent/tmt-workflow: A web developer workflow used by WeChat team based on Gulp, with cross-platform supported and solutions prepared.*

![GitHub last commit](https://img.shields.io/github/last-commit/Tencent/tmt-workflow?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Tencent/tmt-workflow?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Tencent/tmt-workflow?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/Tencent/tmt-workflow?style=social)

### 后端

#### ThinkPHP

> ThinkPHP 资源存放：
>
> - public/admin/
> - public/home/
> - public/index/

```tree
public/static/home/default/
├─ css/
├─ demo/
├─ js/
├─ fonts/
├─ images|imgs/
│  ├─ icon/
│  │  ├─ icon-home.png #未选中
│  │  ├─ icon-home-o.png #选中
│  │  ├─ icon-home-dark.png #深色图标
│  │  ├─ icon-home-light.png #浅色图标
│  │  ├─ icon-home-line.png #线性图标
│  │  ├─ icon-home-fill.png #填充图标 --from uView 的 icon 组件
│  │  └─ icon-upload.png
│  ├─ background|bg/
│  │    └─ bg-i-share.png
│  ├─ banner/
│  │  └─ banner-radius.png #圆角轮播图
│  │    ├─ banner-square.png #方形轮播图
│  │    ├─ banner-round-a.png #圆形轮播图
│  │    ├─ banner-round-b.png #圆形轮播图
│  │    └─ banner-round-c.png #圆形轮播图
│  ├─ logo/
│  │    ├─ logo.png
│  │    └─ logo-text.png #文字 logo
│  ├─ adv/ #广告图
│  ├─ tmp/ #临时图片，例如后台可更改的产品图片
│  │    └─ qrcode.png
│  ├─ avatar/ #头像
│  └─ empty/ #内容为空 --from uView 的 Empty 组件
│       └─ empty-message.png #消息列表为空
├─ lib|libs/ #用 lib 或者用 libs，加 s 表示复数
├─ pdf/
├─ plug-ins|plugins/
├─ uploads/ #前后台上传的资源
└─ utils/ #工具集（百度翻译：工具类；效用；实用工具；实用菜单）
```

小提示:

1. *uploads* 文件夹占用空间大，建议存放至 *public* 目录下，方便其它文件夹的转移；
2. 如果为了安全考虑，可把 *uploads* 文件夹放到站点的根目录。

## 文档目录

有 2 种叫法：

1. TOC（*Table of Contents*，目录）
2. Outline（大纲）[^1] [^2] [^3]

[^1]: https://vitepress.dev/zh/reference/frontmatter-config#outline "frontmatter 配置 | VitePress"
[^2]: https://code.visualstudio.com/docs/getstarted/userinterface *Visual Studio Code User Interface*
[^3]: https://code.visualstudio.com/docs/languages/markdown *Markdown editing with Visual Studio Code*

### 章节编号

无章节编号：

```markdown
## 简介
## 特色功能
## 官网
## 教程
## 入门指南
### 目录结构
## 快速入门
## 安装
### 桌面端
### 移动端
## 设置
## 用法
## 高级用法
## 帮助与支持
## 版本说明
## 常见问题解答
## 参考
### 博文
### 资料
### 文献
```

有章节编号：

> 使用「 https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one#table-of-contents - *Markdown All in One - Visual Studio Marketplace* 」工具快速生成，添加/更新章节序号。

```markdown
## 1. 简介
## 2. 特色功能
## 3. 官网
## 4. 教程
## 5. 入门指南
### 5.1. 目录结构
## 6. 快速入门
## 7. 安装
### 7.1. 桌面端
### 7.2. 移动端
## 8. 设置
## 9. 用法
## 10. 高级用法
## 11. 帮助与支持
## 12. 版本说明
## 13. 常见问题解答
## 14. 参考
### 14.1. 博文
### 14.2. 资料
### 14.3. 文献
```

- 章节序号效果：https://wiki.qemu.org/Hosts/W32 - *Hosts/W32 - QEMU*

```css
h1 { counter-reset: h2counter; }
h2 { counter-reset: h3counter; }
h3 { counter-reset: h4counter; }
h4 { counter-reset: h5counter; }
h5 { counter-reset: h6counter; }
h6 { }
h2:before {
  counter-increment: h2counter;
  content: counter(h2counter) ".\0000a0\0000a0";
}
h3:before {
  counter-increment: h3counter;
  content: counter(h2counter) "."
            counter(h3counter) ".\0000a0\0000a0";
}
h4:before {
  counter-increment: h4counter;
  content: counter(h2counter) "."
            counter(h3counter) "."
            counter(h4counter) ".\0000a0\0000a0";
}
h5:before {
  counter-increment: h5counter;
  content: counter(h2counter) "."
            counter(h3counter) "."
            counter(h4counter) "."
            counter(h5counter) ".\0000a0\0000a0";
}
h6:before {
  counter-increment: h6counter;
  content: counter(h2counter) "."
            counter(h3counter) "."
            counter(h4counter) "."
            counter(h5counter) "."
            counter(h6counter) ".\0000a0\0000a0";
}
```

```css
ol {
    counter-reset: section;
    list-style-type: none;
}

li:before {
    counter-increment: section;
    content: counters(section, ".") ". ";
}
```

<https://cn.bing.com/search?q=html+如何给h1添加序号> - *html 如何给h1添加序号 - 搜索*

1. https://yanwei.github.io/misc/markdown-auto-number-title.html - *MarkDown标题自动添加编号 | yanwei.github.io*
2. https://zhuanlan.zhihu.com/p/256940869 - *纯css实现markdown标题自动编号 - 知乎*
3. https://blog.csdn.net/weixin_39620273/article/details/118292324 - *html如何生成多个序号,CSS实现章节添加自增序号的方法-CSDN博客*
4. https://diralpo.github.io/posts/2020/12a828b8/index.html - *css实现标题自动编号 | Diralpo的个人博客*

<https://cn.bing.com/search?q=css+嵌套列表添加序号> - *css 嵌套列表添加序号 - 搜索*

1. https://www.coder.work/article/319305 - *HTML/CSS 多级嵌套列表编号 - IT工具网*

## 工具

1. https://github.com/ekalinin/github-markdown-toc - *GitHub - ekalinin/github-markdown-toc: Easy TOC creation for GitHub README.md*

    ![GitHub last commit](https://img.shields.io/github/last-commit/ekalinin/github-markdown-toc?color=blue&logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/ekalinin/github-markdown-toc?style=social)

## 参考

ThinkPHP：

1. https://www.kancloud.cn/manual/thinkphp6_0/1037483 - *目录结构 · ThinkPHP6.0完全开发手册 · 看云*

Bootstrap：

1. https://v5.bootcss.com/docs/getting-started/contents/ - *Contents · Bootstrap v5 中文文档 v5.3 | Bootstrap 中文网*

RequireJS：

1. https://requirejs.org/docs/start.html#add - *How to get started with RequireJS*

有关详细信息，请参阅“[Tools > Docsify > Directory Structure](os/tools/docsify.md#目录结构)”。
