## 开发指南

 - 框架简介 > https://uniapp.dcloud.io/frame
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

[uni-app 目录结构](home/toc?id=uni-app)

<https://uniapp.dcloud.net.cn/tutorial/project.html#目录结构>

## dcloud插件市场

https://ext.dcloud.net.cn/ - *DCloud 插件市场*

### 前端项目模板

#### ColorUI

https://ext.dcloud.net.cn/plugin?id=239 - *ColorUI-UniApp - DCloud 插件市场*


#### uViewUI

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

1. 配置/manifest.json文件

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




## 调试

### 真机调试

操作步骤：
1. [手机开启“开发者选项”](https://jingyan.baidu.com/article/5d368d1eb1aa103f60c05703.html)
2. 进入“开发者选项”
    1. 开启“调试” - “USB 调试”
    2. 开启“调试” - “USB 安装”

> 真机调试安装包位置：*E:\vc_software\HBuilderX.3.1.13.20210514\plugins\launcher\base\android_base.apk*

[HBuilder/HBuilderX真机运行、手机运行、真机联调常见问题](https://ask.dcloud.net.cn/article/97#synchronous)



### 模拟器调试

**MuMu**

操作步骤：
1. [配置hbuilderx](https://www.cnblogs.com/houxianzhou/p/13625755.html)
2. 开启模拟器“开发者选项”，打开开发者选项的USB调试功能
3. 配置完成后，如无法连接或启动，重启hbuilderx或模拟器



## 生命周期

### 应用生命周期

### 页面生命周期

### 组件生命周期



## 样式

style 的 scoped 属性



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



[样式覆盖兼容性](https://www.uviewui.com/components/feature.html#%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96%E5%85%BC%E5%AE%B9%E6%80%A7)

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
块元素fl(左浮动)、fr(右浮动)外层块需配合cf（清除浮动）使用



## 路由与页面跳转

方式一：组件 [官方文档与本标题对应]

方式二：api [官方文档与本标题对应]

`methods` 方法定义：`toRecharge`,`toWithdrawal`

### 参数传递?

问：类似 `<a href="http://www.test.com?param=test">链接至新页面</a>` 如何传递?

答：`?ref=recharge`(推荐) 类似与 `?type=recharge`



## 与html标签对比

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



## 调试



## 组件

- 组件是视图层的基本组成单元。
- 组件是一个单独且可复用的功能模块的封装。
- 一个组件包括开始标签和结束标签，标签上可以写属性，并对属性赋值。内容则写在两个标签之内。
  - 根节点为 `<template>`，这个 `<template>` 下只能且必须有一个根 `<view>` 组件。这是[vue单文件组件规范](https://cn.vuejs.org/v2/guide/single-file-components.html)。
  - 一个组件的 data 选项必须是一个函数。



## Vue教程

https://uniapp.dcloud.net.cn/tutorial/vue-basics.html - *介绍 | uni-app官网*

### Vuex



## 条件编译 解决各端差异

https://uniapp.dcloud.net.cn/tutorial/platform.html - *跨端兼容 | uni-app官网*



## 组件webview

https://uniapp.dcloud.net.cn/component/web-view.html# - *web-view | uni-app官网*

[【报Bug】uni-app 自定义导航条被web-view页面覆盖了](https://ask.dcloud.net.cn/question/66374)

[在web-view加载的本地及远程HTML中调用uni的API及网页和vue页面通讯](https://ask.dcloud.net.cn/article/35083)

[uni-app WebView 组件通信](https://zhuanlan.zhihu.com/p/158242148)

[如何在uni-app正确使用web-view](https://www.jianshu.com/p/adc72eae0593)

[uniapp webview能操作里面页面的样式吗？](https://ask.dcloud.net.cn/question/120263)

[uni-app中，webview组件无法设置样式问题，都会遇到的问题，大家来看看。](https://ask.dcloud.net.cn/question/62239)



## 问题

### margin padding组合使用问题

上下两个块元素

> 上块设置样式：margin-bottom: 10px;
>
> 下块设置样式：margin-top: 10px;
>
> 结果：`上下块元素之间的外补白为10px`



> 上块设置样式：margin-bottom: 10px;
>
> 下块设置样式：padding-top: 10px;
>
> 结果：`上下块元素之间的补白为20px`



> 上块设置样式：padding-bottom: 10px;
>
> 下块设置样式：padding-top: 10px;
>
> 结果：`上下块元素之间的补白为20px`



> 上块设置样式：padding-bottom: 10px;
>
> 下块设置样式：margin-top: 10px;
>
> 结果：`上下块元素之间的补白为20px`



### 如何获取上个页面传递的数据

在 onLoad 里得到，onLoad 的参数是其他页面打开当前页面所传递的数据。

> 在 onLoad 里得到，onLoad 的参数是其他页面打开当前页面所传递的数据

https://uniapp.dcloud.net.cn/tutorial/vue-api.html#_1-%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%B8%AA%E9%A1%B5%E9%9D%A2%E4%BC%A0%E9%80%92%E7%9A%84%E6%95%B0%E6%8D%AE - *全局配置 | uni-app官网*

:+1: https://uniapp.dcloud.net.cn/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E9%80%9A%E8%AE%AF - *页面简介 | uni-app官网*

### 如何设置全局的数据和全局的方法

https://uniapp.dcloud.net.cn/tutorial/vue-api.html#_2-%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E5%85%A8%E5%B1%80%E7%9A%84%E6%95%B0%E6%8D%AE%E5%92%8C%E5%85%A8%E5%B1%80%E7%9A%84%E6%96%B9%E6%B3%95 - *全局配置 | uni-app官网*

### :fire: 当前页面如何绑定传参 [v-for]

https://ask.dcloud.net.cn/m/article/35705 - *uni-app中在同一个页面使用多个picker组件出现的一些问题以及解决方法 - DCloud问答*

https://blog.csdn.net/CUFEECR/article/details/111240593 - *uni-app入门教程（3）数据绑定、样式绑定和事件处理_cutercorley的博客-CSDN博客*

### html标签的默认样式

https://ask.dcloud.net.cn/m/article/13327 - *HTML的各个标签的默认样式 - DCloud问答*

### 如何查看插件市场插件的历史版本

???

### 如何取消@click事件

```js
 @click="item.is_can_cancel?'':toBuy(item.id)"
```

