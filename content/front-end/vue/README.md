# Vue.js

## 简介

> Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

![npm](https://img.shields.io/npm/v/vue?logo=npm)

## 教程

https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started - *开始使用 Vue - 学习 Web 开发 | MDN*

## 官方

https://vuejs.org/ - *Vue.js - The Progressive JavaScript Framework | Vue.js*

https://github.com/vuejs - *Vue · GitHub*

### v3.x

![GitHub last commit](https://badgen.net/github/last-commit/vuejs/core?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vuejs/core?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vuejs/core?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vuejs/core?style=social)

https://cn.vuejs.org/ - *Vue.js - 渐进式 JavaScript 框架 | Vue.js*

https://github.com/vuejs/core - *GitHub - vuejs/core: 🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.*

https://www.runoob.com/vue3/vue3-tutorial.html - *Vue3 教程 | 菜鸟教程*

### v2.x

![GitHub last commit](https://badgen.net/github/last-commit/vuejs/vue?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vuejs/vue?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vuejs/vue?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vuejs/vue?style=social)

https://v2.cn.vuejs.org/ - *Vue.js*

https://github.com/vuejs/vue - *GitHub - vuejs/vue: This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core*

https://www.runoob.com/vue2/vue-tutorial.html - *Vue.js 教程 | 菜鸟教程*

## 安装

### 通过 npm 安装

使用 npm 安装（安装的 nodejs 环境中内含 npm 指令）

- 查看 node 版本

  `node -v`

- 查看 npm 版本

  `npm -v`

- 查看 cnpm 版本

  `cnpm -v`

- 安装 nodejs 环境

  `Windows 系统 > 电脑管家 > 软件管理（搜索安装）`

- 安装 cnpm 淘宝 NPM 镜像命令

  `npm install cnpm -g` - 全局安装

  问题：使用 cnpm 时报错

  原因：首次在计算机上启动 Windows PowerShell 时，现用执行策略很可能是 Restricted（默认设置）。Restricted 策略不允许任何脚本运行。

  操作步骤：

  1. <kbd>Win</kbd> + <kbd>X</kbd> 打开 PowerShell（管理员）

  2. `set-ExecutionPolicy RemoteSigned` 设置为打开

  3. 键入 Y 或者 A ，同意

  4. 执行 `get-executionpolicy` 查看是否更改成功，为 RemoteSigned 表示成功

  参考：
  1. https://blog.csdn.net/l_x_cser/article/details/104956657 - *实测解决:系统上禁止运行脚本。有关详细信息， 请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies_SeanHit的博客-CSDN博客*

- 安装 vue

  `cnpm install vue`

- 创建 vue-cli 项目

  `cnpm install --global vue-cli`

  `vue init webpack my-project`

- 进入项目并运行

  `cd my-project`

  `cnpm install`

  `cnpm run dev`

- 浏览器访问

  http://localhost:8080

#### 通过 package.json 安装

> 已有 package.json ， 安装模块依赖。

`npm install` - 一键安装 package.json 里的所有依赖文件

`npm install --dependencies` - 只安装 dependencies（运行依赖）文件

`npm install --devDependencies` - 只安装 devDependencies （开发依赖）文件

`npm install -g npm-check-updates` - 更新依赖到最新版本

参考：

1. https://www.cnblogs.com/sese/p/10119511.html - *npm安装package.json中的模块依赖 - 前端[色色] - 博客园*

### Web CDN

1. https://cdn.jsdelivr.net/npm/vue/ - [jsDelivr](https://www.jsdelivr.com/package/npm/vue)

2. https://www.bootcdn.cn/vue/

## 入门指南

### 目录结构

https://www.runoob.com/vue2/vue-directory-structure.html - *Vue.js 目录结构 | 菜鸟教程*

### 预备知识

熟悉核心的 HTML、CSS 和 JavaScript 语言，了解终端/命令行。

### 编码规范

https://cn.vuejs.org/style-guide/ - *Style Guide | Vue.js*

https://v2.cn.vuejs.org/v2/style-guide/ - *风格指南 — Vue.js*

<https://vue-loader.vuejs.org/zh/spec.html#简介> - *单文件组件规范 | Vue Loader*

## 用法

### 打包部署

https://www.runoob.com/vue3/vue3-build.html - *Vue3 项目打包 | 菜鸟教程*

- 打包部署至生产环境

### 数据类型

- 数字

- 字符串

- 布尔

- 数组

- 对象

  - 数组对象

- 绑定的 HTML DOM 元素（id="app"）

  ```javascript
  el: '#app'
  ```

- vue-cli 推荐使用格式

  ```javascript
  data() {
    return 
  }
  ```

- 普通格式

  ```javascript
  data: {
    num: 1,
    string: '1',
  }
  ```

- HTML 中可以直接使用 details() 方法

  ```javascript
  method: {
    details: function() {
      return this.num += 1;
    }
  }
  ```

### 模板语法

https://www.runoob.com/vue2/vue-template-syntax.html - *Vue.js 模板语法 | 菜鸟教程*

#### 文本值

- HTML DOM 中输出对象属性和函数返回值

  ```html
  {{  }}
  ```

- 表达式

  ```html
  {{ 5+5 }}
  ```

  ```html
  {{ ok ? 'YES' : 'NO' }}
  ```

  ```html
  {{ message.split('').reverse().join('') }}
  ```

- vue 实例属性与方法

  前缀 $，以便与用户定义的属性区分开来

### 事件处理

1. https://cn.vuejs.org/guide/essentials/event-handling.html - *事件处理 | Vue.js*
2. https://v2.cn.vuejs.org/v2/guide/events.html - *事件处理 — Vue.js*
3. https://www.runoob.com/vue2/vue-events.html - *Vue.js 事件处理器 | 菜鸟教程*

如何在 @click 中使用条件判断

方式一：

```html
<div @click="clickFlag && addGoodsHandler()"> 
    为真 
</div>
<div v-else>
    为假
</div>
```

方式二：

```html
@click="(items.length>1)?choose(items):''"
```

参考：

1. https://blog.csdn.net/qq_23539027/article/details/114402432 - *vue点击事件 根据条件判断是否可以点击_根据条件判断点击事件是否使用-CSDN博客*


### 计算属性 - *computed*

https://www.runoob.com/vue2/vue-computed.html - *Vue.js 计算属性 | 菜鸟教程*

```javascript
computed: {
  
}
```

computed vs methods

- 相同

  - 可以使用 methods 来替代 computed，效果上两个都是一样的

- 不同

  - 首先最明显的不同 就是调用的时候，methods 要加上（）

  - computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值

  - methods，在重新渲染的时候，函数总会重新调用执行

  - computed 对象内的方法如果在初始化时绑定到元素上的事件会先执行一次这个方法 ，而 methods 内的方法则不会

- 可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。

computed getter

computed setter

### 监听属性 - *watch*

```javascript
watch: {
  
}
```

- $watch 是一个实例方法

"prop"，类似于一个自定义 attribute。
设置新的属性 --Vue.set(）方法

### Class 与 Style 绑定

https://v2.cn.vuejs.org/v2/guide/class-and-style.html - *Class 与 Style 绑定 — Vue.js*

### 组件

1. https://012-cn.vuejs.org/api/index.html - *概述 - vue.js*
2. https://www.runoob.com/vue2/vue-component.html - *Vue.js 组件 | 菜鸟教程*

- 注册组件：
    - 全局组件

        ```javascript
        Vue.component(tagName, options)
        ```

    - 局部组件

        ```javascript
        component : {
          tagName: options
        }
        ```

- 调用组件：

  ```html
  <tagName></tagName>
  ```

#### 自定义事件

https://www.runoob.com/vue2/vue-component-custom-event.html - *Vue.js 组件 – 自定义事件 | 菜鸟教程*

##### 监听事件 - *vm.$on*

使用 `$on(eventName)` 监听事件

##### 触发事件 - *vm.$emit*

使用 `$emit(eventName)` 触发事件

### 可复用性 & 组合

#### 过滤器 - *filters*

```javascript
filters: {
  
}
```

#### 混入 - *mixin*

https://v2.cn.vuejs.org/v2/guide/mixins.html - *混入 — Vue.js*

https://www.runoob.com/vue2/vue-mixins.html - *Vue.js 混入 | 菜鸟教程*

- 全局混入

- 局部混入

```javascript
Vue.mixin({
  
})
```

## API

https://v2.cn.vuejs.org/v2/api/ - *API — Vue.js* `v2`

https://cn.vuejs.org/api/ - *API 参考 | Vue.js* `v3`

选项式 API （这种方式个人用得多）

### 组合式 API

https://www.runoob.com/vue3/vue3-composition-api.html - *Vue3 组合式 API | 菜鸟教程*

### 全局 API

#### Vue.use

https://www.uviewui.com/components/vueUse.html - *简要介绍Vue.use的原理 | uView 2.0 - 全面兼容 nvue 的 uni-app 生态框架 - uni-app UI 框架*

### 选项 / 生命周期钩子

https://v2.cn.vuejs.org/v2/guide/instance.html - *Vue 实例 — Vue.js*

#### mounted

https://v2.cn.vuejs.org/v2/api/#mounted - *API — Vue.js*

### 指令

https://cn.vuejs.org/api/built-in-directives.html - *内置指令 | Vue.js*

https://v2.cn.vuejs.org/v2/api/#指令 - *API — Vue.js*

- 指令是带有 `v-` 前缀的特殊属性

- 指令用于在表达式的值改变时，将某些行为应用到 DOM 上。

#### v-text

暂无

#### v-html

HTML（输出 html 代码）

#### v-bind

- 属性

- 用于绑定属性（class, id ...）
- 缩写：`:`

#### v-if

- 条件判断

#### v-else

暂无

#### v-else-if

暂无

#### v-show

- 根据条件展示元素

- 类似于 v-if

#### v-on

- 监听 DOM 事件

- 缩写：`@`

- 当绑定 v-on:click 事件时，想传入参数同时也传入当前元素

  ```html
  <button v-on:click="say('hi', $event)">say hi</button>
  ```

- 捕获事件和冒泡事件（默认）是两种事件流，事件捕获是从 document 到触发事件的那个元素；冒泡事件是从下向上的触发事件。

#### v-model

- 双向数据绑定
- 用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值

#### v-for

- 循环语句
- 需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名
- 可以绑定数据到数组来渲染一个列表
- 可以迭代整数、数组及对象
- 可以通过一个对象的属性来迭代数据 --可以循环整数

#### v-cloak

> 用于隐藏尚未完成编译的 DOM 模板。

v2：https://v2.cn.vuejs.org/v2/api/#v-cloak - *API — Vue.js*

v3：https://cn.vuejs.org/api/built-in-directives.html#v-cloak - *内置指令 | Vue.js*

## 插件

### Vuex

> `Vuex` 用来管理 `Vue` 的所有组件状态

![GitHub last commit](https://img.shields.io/github/last-commit/vuejs/vuex?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vuejs/vuex?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vuejs/vuex?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vuejs/vuex?style=social)

https://vuex.vuejs.org/zh/ - *Vuex 是什么？ | Vuex* `Vue 3`

https://v3.vuex.vuejs.org/zh/ - *Vuex 是什么？ | Vuex* `Vue 2`

https://github.com/vuejs/vuex - *GitHub - vuejs/vuex: 🗃️ Centralized State Management for Vue.js.*

用途：

Vue 登录成功后，使用 Vuex 保存 token 。

用法：

1. 在项目根目录的文件夹 `store` 中，创建文件 `index.js`

2. 下载并引入 `vuex`

  ```javascript
  import vue from 'vue';
  import vuex from 'vuex';

  Vue.use(vuex);

  export const store = new Vuex.Store({
      state: {}
      getters: {}
      mutations: {}
      action: {}

      // 获取状态对象
      store.state
      // 触发状态变更
      store.commit
  });
```

### Vue Router

> Vue.js 的官方路由

![GitHub last commit](https://img.shields.io/github/last-commit/vuejs/router?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vuejs/router?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vuejs/router?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vuejs/router?style=social)

https://router.vuejs.org/zh/ - *Vue Router | Vue.js 的官方路由*

https://github.com/vuejs/router - *GitHub - vuejs/router: 🚦 The official router for Vue.js*

https://www.runoob.com/vue2/vue-routing.html - *Vue.js 路由 | 菜鸟教程*

### HTTP

#### Axios

> Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js

![GitHub last commit](https://img.shields.io/github/last-commit/axios/axios?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/axios/axios?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/axios/axios?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/axios/axios?style=social)

https://axios-http.com/zh/ - *Axios*

https://github.com/axios/axios - *GitHub - axios/axios: Promise based HTTP client for the browser and node.js*

https://www.runoob.com/vue2/vuejs-ajax-axios.html - *Vue.js Ajax(axios) | 菜鸟教程*

#### ~~vue-resource~~

> vue-resource 是 vue 中使用的请求网络数据的插件，这个插件是依赖于 vue 的，简单说就是用来调接口的。

![GitHub last commit](https://img.shields.io/github/last-commit/pagekit/vue-resource?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/pagekit/vue-resource?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pagekit/vue-resource?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/pagekit/vue-resource?style=social)

https://github.com/pagekit/vue-resource - *GitHub - pagekit/vue-resource: The HTTP client for Vue.js*

https://www.runoob.com/vue2/vuejs-ajax.html - *Vue.js Ajax(vue-resource) | 菜鸟教程*

https://www.cnblogs.com/liluning/p/12144775.html - *vue-resource安装与使用 - 布吉岛丶 - 博客园*

### qs

> A querystring parser with nesting support

![GitHub last commit](https://img.shields.io/github/last-commit/ljharb/qs?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ljharb/qs?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ljharb/qs?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/ljharb/qs?style=social)

https://github.com/ljharb/qs - *GitHub - ljharb/qs: A querystring parser with nesting support*

用法：

```javascript
import qs from 'qs';

Vue.prototype.qs = qs;

qs.stringify();  // 转换成查询字符串
qs.parse();  // 转换成 json 对象
```

## 工具

https://cn.vuejs.org/guide/scaling-up/tooling.html - *工具链 | Vue.js*

### 单文件组件

https://v2.cn.vuejs.org/v2/guide/single-file-components.html - *单文件组件 — Vue.js*

#### Scoped CSS

https://vue-loader.vuejs.org/zh/guide/scoped-css.html - *Scoped CSS | Vue Loader*

https://cn.vuejs.org/api/sfc-css-features.html - *单文件组件 CSS 功能 | Vue.js*

https://www.jianshu.com/p/5ad5fa494461 - *[Vue.js] Scoped的使用以及样式穿透 - 简书*

https://juejin.cn/post/7263344807132397626 - *彻底搞懂 Vue 中的 scoped 和 /deep/ 深度选择器 - 掘金*

https://blog.csdn.net/maidu_xbd/article/details/106361205 - *vue---style scoped属性的作用和原理、scoped穿透_style标签上的scoped作用与原理-CSDN博客*

##### ::v-deep

https://blog.csdn.net/u010513497/article/details/124841027 - *uniapp 深度选择器 ::deep_uniapp deep-CSDN博客*

https://zhangzifan.com/uniapp-css-deep-style-scoped.html - *uni-app 如何通过穿透修改默认组件 CSS 样式及设置 scoped - 泪雪博客*

https://www.cnblogs.com/fogwang/p/14704446.html - *uni-app 更改默认组件样式 - fogwu - 博客园*

https://blog.csdn.net/qq_48332419/article/details/135343668 - *关于uniapp的扩展组件uni-ui修改组件的样式，且优先内联组件_uni ui无法自定义样式,组件里样式是优先-CSDN博客*

微信小程序：

1. <https://uniapp.dcloud.net.cn/tutorial/vue-api.html#其他配置> - *全局配置 | uni-app官网*
2. https://github.com/dcloudio/uni-app/issues/2861 - *小程序component中使用/deep/样式穿透不生效，page中使用生效 · Issue #2861 · dcloudio/uni-app · GitHub*
3. https://blog.csdn.net/weixin_44056717/article/details/132205216 - *uniapp 强制修改子组件样式使用/deep/无效（解决办法）_uniapp组件修改样式无效-CSDN博客*
4. https://blog.csdn.net/gps666666/article/details/137138166 - *uniapp 中引入第三方组件后,更改组件的样式 -使用/deep/不生效_深度样式选择没有效果uniapp-CSDN博客*

### Vue CLI

引入

`import`

导出

`export`

当使用某个模块或组件时，需先引入，定义模块后导出或者通过 `Vue.use(模块名)` 使用

### Vue Loader

https://vue-loader.vuejs.org/zh/ - *介绍 | Vue Loader*

### Webpack

#### require.content()

<https://v3.vuex.vuejs.org/zh/guide/hot-reload.html#动态模块热重载> - *热重载 | Vuex*

1. https://blog.csdn.net/pinbolei/article/details/115620728 - *require.context()的用法详解-CSDN博客*
2. https://juejin.cn/post/7156817548963479588 - *require.context介绍以及四种应用场景 - 掘金*

### Vetur（Vue2）

> Vue tooling for VS Code.

![GitHub last commit](https://img.shields.io/github/last-commit/vuejs/vetur?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vuejs/vetur?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vuejs/vetur?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vuejs/vetur?style=social)

https://vuejs.github.io/vetur/ - *Vetur*

https://github.com/vuejs/vetur - *GitHub - vuejs/vetur: Vue tooling for VS Code.*

https://marketplace.visualstudio.com/items?itemName=octref.vetur - *Vetur - Visual Studio Marketplace*

### eslint-plugin-vue

> Official ESLint plugin for Vue.js

![GitHub last commit](https://img.shields.io/github/last-commit/vuejs/eslint-plugin-vue?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/vuejs/eslint-plugin-vue?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vuejs/eslint-plugin-vue?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/vuejs/eslint-plugin-vue?style=social)

https://eslint.vuejs.org/ - *Introduction | eslint-plugin-vue*

https://github.com/vuejs/eslint-plugin-vue - *GitHub - vuejs/eslint-plugin-vue: Official ESLint plugin for Vue.js*

## UI 组件库

### VUX

1. [VUX](https://vux.li/) - *VUX 是基于 WeUI 和 Vue.js 的 移动端 UI 组件库，提供丰富的组件满足移动端(微信)页面常用业务需求。* [GitHub Repo](https://github.com/airyland/vux)

    ![GitHub last commit](https://img.shields.io/github/last-commit/airyland/vux?color=blue&logo=github)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/airyland/vux?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/airyland/vux?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/airyland/vux?style=social)

### Mint

1. [Mint](http://mint-ui.github.io/#!/zh-cn) - *基于 Vue.js 的移动端组件库* [GitHub Repo](https://github.com/ElemeFE/mint-ui) `饿了么前端团队出品`

    ![GitHub last commit](https://img.shields.io/github/last-commit/ElemeFE/mint-ui?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ElemeFE/mint-ui?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ElemeFE/mint-ui?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/ElemeFE/mint-ui?style=social)

## 常见问题

### 项目开发中遇到的问题

1. https://cloud.tencent.com/developer/article/1626876 - *如何实现 Vue 自定义组件中 hover 事件以及 v-model - 腾讯云开发者社区-腾讯云*

2. https://blog.csdn.net/weixin_44092905/article/details/120336568 - *记一个vue开发问题-----js如何从浏览器剪贴板获取内容_咕咚，来了的博客-CSDN博客_vue 获取不到clipboarddata*

   - https://ask.csdn.net/questions/7482682 - *vue 实现获取剪切板的内容-有问必答-CSDN问答*

### vue 页面加载闪烁问题的解决方法

方法一：

```html
// <div> 不会显示，直到编译结束。
[v-cloak] {
  display: none;
}
<div v-cloak>
  {{ message }}
</div>
```

方法二：

```html
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>
```

参考：

1. https://wenku.baidu.com/view/ec64d8fad3d233d4b14e852458fb770bf68a3b33.html - *前端开发中处理页面闪烁问题的解决方案 - 百度文库*
2. https://zhuanlan.zhihu.com/p/22477904 - *vue 页面加载闪烁问题解决产生原因及解决方法 - 知乎*
3. https://www.zhihu.com/question/587261190 - *vue 渲染时页面闪烁的问题如何解决？ - 知乎*
4. https://zhuanlan.zhihu.com/p/265531781 - *Vue 使用 v-show 导致页面闪烁的问题 - 知乎*
5. https://www.cnblogs.com/pangwl/p/7979169.html - *vue 页面加载闪烁问题的解决方法 - 在水伊人 - 博客园*
6. https://juejin.cn/post/6844904023611408392 - *vue 中使用 v-if 或 v-show ，出现闪屏的解决方法 - 掘金*

## 参考

1. https://mp.weixin.qq.com/s/WyikcIWtSslLQy1sW-y9FA - *Vue 生态系统（2024版）*
2. https://blog.csdn.net/weixin_45673401/article/details/104129624 - *HTML中click()和onclick()的本质区别与案例和解释_html onclick-CSDN博客*
3. https://blog.csdn.net/m0_65069237/article/details/133202349 - *vue中点击事件click加括号和不加括号的区别_vue的点击事件要不要加括号-CSDN博客*
4. https://www.cnblogs.com/smile-fanyin/p/14649482.html - *v-on:click(简写@click)绑定事件加括号和不加括号 - smil、梵音 - 博客园*
5. https://segmentfault.com/q/1010000021741968 - *vue.js - element中有“事件”和“方法”的说明，但是不是很理解 - SegmentFault 思否*
