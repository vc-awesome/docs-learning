# uni-app 教程

> uni-app, uniCloud, serverless, uni-app 组成和跨端原理，基本语言和开发规范，编译器，运行时（runtime），逻辑层和渲染层分离。

https://uniapp.dcloud.net.cn/ - *uni-app官网*

https://github.com/dcloudio/unidocs-zh - *GitHub - dcloudio/unidocs-zh: uni-app官方文档*

![GitHub last commit](https://badgen.net/github/last-commit/dcloudio/unidocs-zh?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/dcloudio/unidocs-zh?style=social)

## 开发指南

- [框架简介](https://uniapp.dcloud.io/frame)
  - 开发规范
  - 目录结构
  - 资源路径说明
  - 生命周期
    - 应用生命周期
    - 页面生命周期
    - 组件生命周期
  - 路由
    - 运行环境判断
    - 页面样式与布局
      - 尺寸单位

## 入门指南

### 目录结构

[uni-app 目录结构](home/toc.md?id=uni-app)

<https://uniapp.dcloud.net.cn/tutorial/project.html#目录结构> - *工程简介 | uni-app官网*

### 预备知识

暂无

## 发布

### App 打包流程

1. 配置 `/manifest.json` 文件

   1. 基础配置

      uni-app 应用标识（AppID） 项目第一次打包需要重新获取

      应用名称

      应用版本名称（初始值：1.0.0）

      应用版本号（对应版本名称：100）

   2. App 图标配置

      自动生成图标（上传图标文件即可）

   3. App 启动页面配置

      Android 启动页面设置

        通用启动页面（系统配置）

        自定义启动图（指定启动图）

        根据提示上传三个尺寸的图片

   - 安装包位置：*E:/project-uniapp/nait/unpackage/release/apk/__UNI__0436D07_20210302183824.apk*

#### 差量更新

1. https://ask.dcloud.net.cn/m/article/34972 - *uni-app 整包升级/更新方案 - DCloud问答*
2. https://ask.dcloud.net.cn/m/article/199 - *App资源在线差量升级更新 - DCloud问答*
3. https://ask.dcloud.net.cn/m/article/37076 - *【uniapp差量更新、热加载、热更新、热修复】uniapp增量更新解决方案~ - DCloud问答*
4. https://juejin.cn/post/6844903801774669837 - *JavaScript 差量更新的实现 - 掘金*

## 运行和调试

https://uniapp.dcloud.net.cn/tutorial/run-and-debug.html - *uni-app官网*

### 真机调试

操作步骤：

1. [手机开启“开发者选项”](https://jingyan.baidu.com/article/5d368d1eb1aa103f60c05703.html)
2. 进入“开发者选项”
    1. 开启“调试” - “USB 调试”
    2. 开启“调试” - “USB 安装”

> 真机调试安装包位置：*E:\vc_software\HBuilderX.3.1.13.20210514\plugins\launcher\base\android_base.apk*

常见问题：

1. https://ask.dcloud.net.cn/article/97#synchronous - *HBuilder/HBuilderX真机运行、手机运行、真机联调常见问题*

### 模拟器调试

#### MuMu

操作步骤：

1. [配置 HBuilder X](https://www.cnblogs.com/houxianzhou/p/13625755.html)
2. 开启模拟器“开发者选项”，打开开发者选项的 USB 调试功能
3. 配置完成后，如无法连接或启动，重启 HBuilder X 或模拟器

### 微信小程序

1. https://blog.csdn.net/qq_40860800/article/details/122821965 - *uni-app创建并运行微信小程序项目_怎么运行微信小程序项目,项目是已完成的-CSDN博客*
2. https://zhuanlan.zhihu.com/p/481333920 - *用uniapp运行到微信小程序!!!!!!!!! - 知乎*
3. https://blog.csdn.net/qq_42022466/article/details/106983008 - *Mac下 Hbuilder X使用uni-app创建微信小程序_hbuilderx uniapp微信小程序教程 mac-CSDN博客*

## 全局文件

### pages.json

https://uniapp.dcloud.net.cn/collocation/pages.html - *pages.json 页面路由 | uni-app官网*

#### 自定义导航栏

https://uniapp.dcloud.net.cn/collocation/pages.html#customnav - *pages.json 页面路由 | uni-app官网*

### App.vue

#### 应用生命周期

暂无

### main.js

暂无

### uni.scss

暂无

## 生命周期

### 应用生命周期

https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle - *App.vue/App.uvue | uni-app官网*

### 页面生命周期

https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle - *页面 | uni-app官网*

### 组件生命周期

https://uniapp.dcloud.net.cn/tutorial/page.html#componentlifecycle - *页面 | uni-app官网*

## 页面 👏

https://uniapp.dcloud.net.cn/tutorial/page.html - *页面 | uni-app官网*

### 页面生命周期

暂无

### 组件生命周期

暂无

### 路由

暂无

## 互相引用

https://uniapp.dcloud.net.cn/tutorial/page-component.html - *uni-app官网*

### 引用组件

https://uniapp.dcloud.net.cn/tutorial/page-component.html - *uni-app官网*

### 引用 js

https://uniapp.dcloud.net.cn/tutorial/page-script.html - *js 文件引入 | uni-app官网*

```javascript
// 绝对路径，@指向项目根目录，在cli项目中@指向src目录
import add from '@/common/add.js';
// 相对路径
import add from '../../common/add.js';

```

### 引用 css

https://uniapp.dcloud.net.cn/tutorial/page-style.html - *uni-app官网*

```javascript
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>

```

### 引用静态资源

https://uniapp.dcloud.net.cn/tutorial/page-static-assets.html - *模板内引入静态资源 | uni-app官网*

## js 语法

https://uniapp.dcloud.net.cn/tutorial/syntax-js.html - *uni-app官网*

## css 语法

https://uniapp.dcloud.net.cn/tutorial/syntax-css.html - *页面样式与布局 | uni-app官网*

### css 预处理器支持

<https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#css预处理器支持> - *页面样式与布局 | uni-app官网*

`<style></style>` 的 `scoped` 属性

css 预处理器 sass/scss、less、stylus

> 使用 sass/scss 时，需在 style 添加属性 lang="scss"

```html
<style lang="scss">
  
</style>
```

<https://www.uviewui.com/components/feature.html#样式覆盖兼容性> - *注意事项 | uView 2.0 - 全面兼容 nvue 的 uni-app 生态框架 - uni-app UI 框架*

```html
<template>
  <view class="wrap">
    <item></item>
  </view>
</template>

<style scoped>
.wrap ::v-deep .item {
  border: 1px solid blue;
}
</style>
```

### 尺寸单位

<https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#尺寸单位> - *页面样式与布局 | uni-app官网*

### hover

https://uniapp.dcloud.net.cn/component/view.html - *uni-app官网*

https://blog.csdn.net/weixin_45966674/article/details/121462415 - *uni-app带你看一个不一样的view之hover-class_uniapp hover-class-CSDN博客*

## 组件

https://uniapp.dcloud.net.cn/component/ - *组件使用的入门教程 | uni-app官网*

- 组件是视图层的基本组成单元。
- 组件是一个单独且可复用的功能模块的封装。
- 一个组件包括开始标签和结束标签，标签上可以写属性，并对属性赋值。内容则写在两个标签之内。
  - 根节点为 `<template>`，这个 `<template>` 下只能且必须有一个根 `<view>` 组件。这是[vue单文件组件规范](https://cn.vuejs.org/v2/guide/single-file-components.html)。
  - 一个组件的 data 选项必须是一个函数。

`<template></template>`

`<view></view>`

`<block></block>`

`<text></text>`

`<button></button>`

`<image></image>` https://uniapp.dcloud.net.cn/component/image.html#image - *image | uni-app官网*

https://ask.dcloud.net.cn/m/article/35489 - *关于uni-app的ui库、ui框架、ui组件 - DCloud问答*

### 与 html 标签对比

| uniapp    | html                 |
| --------- | -------------------- |
| view      | div / ul / li        |
| image     | img                  |
| text      | span / font          |
| navigator | a                    |
| picker    | select               |
| page      | body                 |
| ?         | list / ul / ol / li  |
| ?         | table / th / tr / td |
| button    | button               |
| iframe    | web-view             |
| template  | ?                    |
| block     | ?                    |

> 💡 `<text></text>` 标签设置内外补白无效

### 二次封装

https://www.kancloud.cn/uview/uview-ui_v2/2579075 - *导航栏不默认返回好麻烦 · uView-UI v2.x常见问题整理 · 看云*

### 路由与页面跳转

https://blog.csdn.net/qq_59125846/article/details/131737377 - *【最全】uni-app 页面跳转及参数传递_uniapp跳转页面携带参数-CSDN博客*

方式一：组件

https://uniapp.dcloud.net.cn/component/navigator.html - *navigator | uni-app官网*

方式二：API

https://uniapp.dcloud.net.cn/api/router.html - *uni.navigateTo(OBJECT) | uni-app官网*

`methods` 方法定义：`toRecharge` , `toWithdrawal`

#### 参数传递

问：类似 `<a href="http://www.test.com?param=test">链接至新页面</a>` 如何传递?

答：`?ref=recharge`（推荐）类似于 `?type=recharge`

### web-view

https://uniapp.dcloud.net.cn/component/web-view.html - *web-view | uni-app官网*

参考：

1. https://ask.dcloud.net.cn/question/66374 - *【报Bug】uni-app 自定义导航条被web-view页面覆盖了*
2. https://ask.dcloud.net.cn/article/35083 - *在web-view加载的本地及远程HTML中调用uni的API及网页和vue页面通讯*
3. https://zhuanlan.zhihu.com/p/158242148 - *uni-app WebView 组件通信*
4. https://www.jianshu.com/p/adc72eae0593 - *如何在uni-app正确使用web-view*
5. https://ask.dcloud.net.cn/question/120263 - *uniapp webview能操作里面页面的样式吗？*
6. https://ask.dcloud.net.cn/question/62239 - *uni-app中，webview组件无法设置样式问题，都会遇到的问题，大家来看看。*

### input

https://uniapp.dcloud.net.cn/component/input.html - *input | uni-app官网*

`input > placeholder`

```css
placeholderStyle=""
placeholder-class=""
```

示例

```css
placeholder-class="cl"
.cl {
  color: #fff;
}
```

或者

```css
placeholder-style="color:#fff"
```

参考：

1. https://blog.csdn.net/m0_57033755/article/details/131167856 - *u-view2.0 uniapp input 或者textarea的placeholder-style设置失效， 解决办法！！ 碾压网上搜到的所以方法！！！_uniapp placeholder-style-CSDN博客*
2. https://www.jianshu.com/p/71f3eb3f0157 - *【uniapp】小程序中input输入框的placeholder-class不生效以及解决办法 - 简书*
3. https://blog.csdn.net/lee_srr/article/details/119487871 - *uniapp中,placeholder样式设置_uniapp input中placeholder样式-CSDN博客*
4. https://blog.csdn.net/Anlantic/article/details/132334279 - *uniapp修改input的placeholder_uniapp input placeholder修改-CSDN博客*
5. https://www.cnblogs.com/sunRiseProgress/p/14653530.html - *更改uniapp中，input的placeholder样式不生效的问题 - sunRise113 - 博客园*
6. https://www.cnblogs.com/xijiang/p/14588593.html - *给u-input组件的placeholder添加样式与icon - 铽楉QAQ - 博客园*
7. https://blog.csdn.net/qq_43382853/article/details/140009000 - *修改uniapp中 input 的 placeholder 样式_uniapp placeholder样式-CSDN博客*

## Vue 语法

### Vue2

https://uniapp.dcloud.net.cn/tutorial/vue-basics.html - *介绍 | uni-app官网*

#### Vuex 👏

https://uniapp.dcloud.net.cn/tutorial/vue-vuex.html - *状态管理Vuex | uni-app官网*

### Vue3

https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html - *介绍 | uni-app官网*

#### Vuex

https://uniapp.dcloud.net.cn/tutorial/vue3-vuex.html - *状态管理Vuex | uni-app官网*

#### Pinia

https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html - *状态管理 Pinia | uni-app官网*

## 条件编译（解决各端差异）

https://uniapp.dcloud.net.cn/tutorial/platform.html - *跨端兼容 | uni-app官网*

https://uniapp.dcloud.net.cn/tutorial/compiler.html - *什么是编译器 | uni-app官网*

## 常见问题

### 如何获取上个页面传递的数据

在 onLoad 里得到，onLoad 的参数是其他页面打开当前页面所传递的数据。

参考：

1. <https://uniapp.dcloud.net.cn/tutorial/page.html#页面通讯> - *页面 | uni-app官网*
2. <https://uniapp.dcloud.net.cn/tutorial/vue-api.html#_1-如何获取上个页面传递的数据> - *全局配置 | uni-app官网*

### 如何设置全局的数据和全局的方法

<https://uniapp.dcloud.net.cn/tutorial/vue-api.html#_2-如何设置全局的数据和全局的方法> - *全局配置 | uni-app官网*

### 当前页面如何绑定传参 [v-for]

https://ask.dcloud.net.cn/m/article/35705 - *uni-app中在同一个页面使用多个picker组件出现的一些问题以及解决方法 - DCloud问答*

https://blog.csdn.net/CUFEECR/article/details/111240593 - *uni-app入门教程（3）数据绑定、样式绑定和事件处理_cutercorley的博客-CSDN博客*

### html 标签的默认样式

https://ask.dcloud.net.cn/m/article/13327 - *HTML的各个标签的默认样式 - DCloud问答*

### 如何查看插件市场插件的历史版本

在插件市场 URL 的最后添加 `&update_log`，例：https://ext.dcloud.net.cn/plugin?id=1593 => https://ext.dcloud.net.cn/plugin?id=1593&update_log 。

### 如何取消 @click 事件

```javascript
 @click="item.is_can_cancel?'':toBuy(item.id)"
```
