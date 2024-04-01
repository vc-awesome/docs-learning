# uni-app

## Introduction

> `uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

![GitHub last commit](https://badgen.net/github/last-commit/dcloudio/uni-app?icon=github&color=blue)
![npm](https://img.shields.io/npm/v/@dcloudio/uni-app?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/dcloudio/uni-app?style=social)

## Official

官网：https://www.dcloud.io - *DCloud - HBuilder、HBuilderX、uni-app、uniapp、5+、5plus、mui、wap2app、流应用、HTML5、小程序开发、跨平台App、多端框架*

插件市场：https://ext.dcloud.net.cn - *DCloud 插件市场*

uni-app：https://uniapp.dcloud.io - *uni-app官网*

GitHub：https://github.com/dcloudio/uni-app - *dcloudio/uni-app: A cross-platform framework using Vue.js*

## Tool

### 电脑端

#### HBuilder X

https://www.dcloud.io/hbuilderx.html - *HBuilderX-高效极客技巧*

### 手机端

#### hello uni-app

官方下载：https://m3w.cn/uniapp - *Hello uni-app*

Google Play 商店下载：https://play.google.com/store/apps/details?id=io.dcloud.hellouniapp

#### HelloH5

https://www.dcloud.io/runtime.html - *HTML5+ - DCloud*

直接下载：http://www.dcloud.io/helloh5/d

#### 流应用

https://www.dcloud.io/streamapp.html - *流应用 - DCloud*

## FAQ

### uni-app wgt热更新进度条异常

项目：`Nait`

时间：`2021/03/26`

问题：（问题解决耗时5小时）

Uniapp wgt 热更新进度条异常

原因：

服务器没有响应 `Content-Length`

![img](./_images/图片1.png)

解决：

Apache 配置 `mod_deflate.c` 模块，添加 `wgt` 文件类型

![img](./_images/图片2.png)

### HBuilder原生App云打包应用版本不一致提示

项目：`LOH`

时间：`2021/04/24`

问题：（问题解决耗时2小时）

uni-app 运行环境版本和编译器版本不一致的问题

原因：

https://ask.dcloud.net.cn/article/35627 - *uni-app运行环境版本和编译器版本不一致的问题 - DCloud问答*

解决：

1. HBuilder 编辑器版本升级（升级完重新启动编辑器）

2. 删除项目根目录 `unpackage` 文件夹（文件夹包含了旧版本的打包配置）

3. 卸载重装编辑器插件`App真机运行`、`uni-app编译`（完成后重新启动编辑器）

### webview 内嵌 H5 页面 底部导航栏 在 苹果 X xr xs 下 安全区的问题

参考：

1. https://ask.dcloud.net.cn/question/73055 - *uni -app webview 内嵌 H5 页面 底部导航栏 在 苹果 X xr xs 下 安全区的问题 - DCloud 问答*
