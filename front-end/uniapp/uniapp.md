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



## dcloud插件市场

### 前端项目模板

[ColorUI](https://ext.dcloud.net.cn/plugin?id=239)

[uViewUI](https://ext.dcloud.net.cn/plugin?id=1593)

#### 模板组件对比

| html | uViewUI | ColorUI | uniapp |
| ---- | ------- | ------- | ------ |
| list | cell    |         |        |



### 通用组件

[g_bro_marquee](https://ext.dcloud.net.cn/plugin?id=1805) | `跑马灯`

[luch-request](https://ext.dcloud.net.cn/plugin?id=392) | `拦截器` `网络请求`

[APP Update](https://ext.dcloud.net.cn/plugin?id=1643) | `APP版本更新`

[tony-scroll](https://ext.dcloud.net.cn/plugin?id=1179) | `列表上下循环滚动`



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

   安装包位置：`E:/project-uniapp/nait/unpackage/release/apk/__UNI__0436D07_20210302183824.apk`




## 调试

### 真机调试

1. [手机开启"开发者选项"](https://jingyan.baidu.com/article/5d368d1eb1aa103f60c05703.html)
2. "开发者选项"开启“USB 调试”、“USB 安装”

> 真机调试安装包位置：`E:\vc_software\HBuilderX.3.1.13.20210514\plugins\launcher\base\android_base.apk`

[HBuilder/HBuilderX真机运行、手机运行、真机联调常见问题](https://ask.dcloud.net.cn/article/97#synchronous)



### 模拟器调试

**MuMu**

1. [配置hbuilderx](https://www.cnblogs.com/houxianzhou/p/13625755.html)
2. 开启模拟器“开发者选项”，打开开发者选项的USB调试功能
3. 配置完成后，如无法连接或启动，重启hbuilderx或模拟器



## 生命周期

### 应用生命周期

### 页面生命周期

### 组件生命周期



## 样式

style的scoped属性



css预处理器sass/scss、less、stylus

> 使用sass/scss时，需在style添加属性lang="scss"



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

`methods`方法定义：`toRecharge`,`toWithdrawal`

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

[uniapp vue教程](https://uniapp.dcloud.net.cn/vue-basics)

### Vuex



## 条件编译 解决各端差异

[uniapp 教程](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)



## 组件webview

[uniapp 教程](https://uniapp.dcloud.io/component/web-view)

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

[uni-app官方/link](https://uniapp.dcloud.net.cn/vue-api?id=_1-%e5%a6%82%e4%bd%95%e8%8e%b7%e5%8f%96%e4%b8%8a%e4%b8%aa%e9%a1%b5%e9%9d%a2%e4%bc%a0%e9%80%92%e7%9a%84%e6%95%b0%e6%8d%ae)

:+1: [uni-app官方/页面通讯](https://uniapp.dcloud.io/collocation/frame/communication)

### 如何设置全局的数据和全局的方法

[link](https://uniapp.dcloud.net.cn/vue-api?id=_2-%e5%a6%82%e4%bd%95%e8%ae%be%e7%bd%ae%e5%85%a8%e5%b1%80%e7%9a%84%e6%95%b0%e6%8d%ae%e5%92%8c%e5%85%a8%e5%b1%80%e7%9a%84%e6%96%b9%e6%b3%95)

### :fire: 当前页面如何绑定传参 [v-for]

[link](https://ask.dcloud.net.cn/article/35705)

[事件传参](https://blog.csdn.net/CUFEECR/article/details/111240593)

### html标签的默认样式

[link](https://ask.dcloud.net.cn/article/13327)

### 如何查看插件市场插件的历史版本

???

### 如何取消@click事件

```js
 @click="item.is_can_cancel?'':toBuy(item.id)"
```

