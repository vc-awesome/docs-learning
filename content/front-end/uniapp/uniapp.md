# uni-app 教程

https://uniapp.dcloud.net.cn/ - *uni-app官网*

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

## 目录结构

[uni-app 目录结构](home/toc.md?id=uni-app)

<https://uniapp.dcloud.net.cn/tutorial/project.html#目录结构>

## 插件

https://ext.dcloud.net.cn/ - *DCloud 插件市场*

### 前端项目模板

#### ColorUI

https://ext.dcloud.net.cn/plugin?id=239 - *ColorUI-UniApp - DCloud 插件市场*

#### uView

官网：https://www.uviewui.com/ - *uView 2.0 - 全面兼容nvue的uni-app生态框架 - uni-app UI框架*

插件市场：https://ext.dcloud.net.cn/plugin?id=1593 - *uView2.0重磅发布，利剑出鞘，一统江湖 - DCloud 插件市场*

#### 模板组件对比

| html | uViewUI | ColorUI | uniapp |
| ---- | ------- | ------- | ------ |
| list | cell    |         |        |

### 通用组件

ID  | 插件名  | 插件市场链接
---|---|---
1  | 跑马灯  | [g_bro_marquee](https://ext.dcloud.net.cn/plugin?id=1805)
2  | 拦截器、网络请求  | [luch-request](https://ext.dcloud.net.cn/plugin?id=392)
3  | APP版本更新  | [APP Update](https://ext.dcloud.net.cn/plugin?id=1643)
4  | 列表上下循环滚动  | [tony-scroll](https://ext.dcloud.net.cn/plugin?id=1179)

## 打包流程

1. 配置 `/manifest.json` 文件

   1. 基础配置

      uni-app应用标识(AppID) 项目第一次打包需要重新获取

      应用名称

      应用版本名称 初始值：1.0.0

      应用版本号 对应版本名称：100

   2. App图标配置

      自动生成图标 上传图标文件即可

   3. App启动页面配置

      Android启动页面设置

        通用启动页面（系统配置）

        自定义启动图（指定启动图）

      ​    根据提示上传三个尺寸的图片

   - 安装包位置：*E:/project-uniapp/nait/unpackage/release/apk/__UNI__0436D07_20210302183824.apk*

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

1. [配置hbuilderx](https://www.cnblogs.com/houxianzhou/p/13625755.html)
2. 开启模拟器“开发者选项”，打开开发者选项的USB调试功能
3. 配置完成后，如无法连接或启动，重启hbuilderx或模拟器

### 微信小程序

1. https://blog.csdn.net/qq_40860800/article/details/122821965 - *uni-app创建并运行微信小程序项目_怎么运行微信小程序项目,项目是已完成的-CSDN博客*
2. https://zhuanlan.zhihu.com/p/481333920 - *用uniapp运行到微信小程序!!!!!!!!! - 知乎*
3. https://blog.csdn.net/qq_42022466/article/details/106983008 - *Mac下 Hbuilder X使用uni-app创建微信小程序_hbuilderx uniapp微信小程序教程 mac-CSDN博客*

## 全局文件

### pages.json

https://uniapp.dcloud.net.cn/collocation/pages.html - *pages.json 页面路由 | uni-app官网*

#### 自定义导航栏

https://uniapp.dcloud.net.cn/collocation/pages.html#customnav - *pages.json 页面路由 | uni-app官网*

## 生命周期

### 应用生命周期

### 页面生命周期

https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle - *页面 | uni-app官网*

### 组件生命周期

https://uniapp.dcloud.net.cn/tutorial/page.html#componentlifecycle - *页面 | uni-app官网*

## 标签 vs 组件

`<view></view>`

`<block></block>`

`<text></text>`

`<button></button>`

`<image></image>`

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

> \* text标签设置内外补白无效

## 样式

`<style></style>` 的 `scoped` 属性

css 预处理器 sass/scss、less、stylus

> 使用 sass/scss 时，需在 style 添加属性 lang="scss"

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
或者
placeholder-style="color:#fff"
```

<https://www.uviewui.com/components/feature.html#样式覆盖兼容性> - *注意事项 | uView 2.0 - 全面兼容 nvue 的 uni-app 生态框架 - uni-app UI 框架*

```vue
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

cf

fl

fr

块元素 fl（左浮动）、fr（右浮动）外层块需配合 cf（清除浮动）使用

## 组件

https://uniapp.dcloud.net.cn/component/ - *组件使用的入门教程 | uni-app官网*

- 组件是视图层的基本组成单元。
- 组件是一个单独且可复用的功能模块的封装。
- 一个组件包括开始标签和结束标签，标签上可以写属性，并对属性赋值。内容则写在两个标签之内。
  - 根节点为 `<template>`，这个 `<template>` 下只能且必须有一个根 `<view>` 组件。这是[vue单文件组件规范](https://cn.vuejs.org/v2/guide/single-file-components.html)。
  - 一个组件的 data 选项必须是一个函数。

### 路由与页面跳转

方式一：组件 [官方文档与本标题对应]

https://uniapp.dcloud.net.cn/component/navigator.html - *navigator | uni-app官网*

方式二：API [官方文档与本标题对应]

https://uniapp.dcloud.net.cn/api/router.html - *uni.navigateTo(OBJECT) | uni-app官网*

`methods` 方法定义：`toRecharge` , `toWithdrawal`

#### 参数传递?

问：类似 `<a href="http://www.test.com?param=test">链接至新页面</a>` 如何传递?

答：`?ref=recharge`(推荐) 类似与 `?type=recharge`

### web-view

https://uniapp.dcloud.net.cn/component/web-view.html - *web-view | uni-app官网*

参考：

1. https://ask.dcloud.net.cn/question/66374 - *【报Bug】uni-app 自定义导航条被web-view页面覆盖了*
2. https://ask.dcloud.net.cn/article/35083 - *在web-view加载的本地及远程HTML中调用uni的API及网页和vue页面通讯*
3. https://zhuanlan.zhihu.com/p/158242148 - *uni-app WebView 组件通信*
4. https://www.jianshu.com/p/adc72eae0593 - *如何在uni-app正确使用web-view*
5. https://ask.dcloud.net.cn/question/120263 - *uniapp webview能操作里面页面的样式吗？*
6. https://ask.dcloud.net.cn/question/62239 - *uni-app中，webview组件无法设置样式问题，都会遇到的问题，大家来看看。*

## Vue 语法

### Vue2

https://uniapp.dcloud.net.cn/tutorial/vue-basics.html - *介绍 | uni-app官网*

#### Vuex

https://uniapp.dcloud.net.cn/tutorial/vue-vuex.html - *状态管理Vuex | uni-app官网*

### Vue3

https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html - *介绍 | uni-app官网*

## 条件编译（解决各端差异）

https://uniapp.dcloud.net.cn/tutorial/platform.html - *跨端兼容 | uni-app官网*

https://uniapp.dcloud.net.cn/tutorial/compiler.html - *什么是编译器 | uni-app官网*

## 常见问题

### margin padding 组合使用问题

> 上下两个块元素

上块设置样式：`margin-bottom: 10px;`

下块设置样式：`margin-top: 10px;`

结果：**上下块元素之间的外补白为10px**

---

上块设置样式：`margin-bottom: 10px;`

下块设置样式：`padding-top: 10px;`

结果：**上下块元素之间的补白为20px**

---

上块设置样式：`padding-bottom: 10px;`

下块设置样式：`padding-top: 10px;`

结果：**上下块元素之间的补白为20px**

---

上块设置样式：`padding-bottom: 10px;`

下块设置样式：`margin-top: 10px;`

结果：**上下块元素之间的补白为20px**

### 如何获取上个页面传递的数据

在 onLoad 里得到，onLoad 的参数是其他页面打开当前页面所传递的数据。

> 在 onLoad 里得到，onLoad 的参数是其他页面打开当前页面所传递的数据

<https://uniapp.dcloud.net.cn/tutorial/vue-api.html#_1-如何获取上个页面传递的数据> - *全局配置 | uni-app官网*

:+1: <https://uniapp.dcloud.net.cn/tutorial/page.html#页面通讯> - *页面 | uni-app官网*

### 如何设置全局的数据和全局的方法

<https://uniapp.dcloud.net.cn/tutorial/vue-api.html#_2-如何设置全局的数据和全局的方法> - *全局配置 | uni-app官网*

### 🔥 当前页面如何绑定传参 [v-for]

https://ask.dcloud.net.cn/m/article/35705 - *uni-app中在同一个页面使用多个picker组件出现的一些问题以及解决方法 - DCloud问答*

https://blog.csdn.net/CUFEECR/article/details/111240593 - *uni-app入门教程（3）数据绑定、样式绑定和事件处理_cutercorley的博客-CSDN博客*

### html 标签的默认样式

https://ask.dcloud.net.cn/m/article/13327 - *HTML的各个标签的默认样式 - DCloud问答*

### 如何查看插件市场插件的历史版本

在插件市场 URL 的最后添加 `&update_log`，例：https://ext.dcloud.net.cn/plugin?id=1593 => https://ext.dcloud.net.cn/plugin?id=1593&update_log 。

### 如何取消 @click 事件

```js
 @click="item.is_can_cancel?'':toBuy(item.id)"
```
