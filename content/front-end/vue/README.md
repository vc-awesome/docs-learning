# Vue.js

## 简介

> Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

![GitHub last commit](https://img.shields.io/github/last-commit/vuejs/vue?color=blue&logo=github)
![npm](https://img.shields.io/npm/v/vue?logo=npm)

## 官方

https://vuejs.org/ - *Vue.js - The Progressive JavaScript Framework | Vue.js*

https://github.com/vuejs/vue - *GitHub - vuejs/vue: This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core*

---

有关详细信息，请参阅“[Vue.js](project/framework/README.md#vuejs)”。

## 教程

官方教程：

1. https://v2.cn.vuejs.org/ - *Vue.js* `v2`

2. https://cn.vuejs.org/ - *Vue.js - 渐进式 JavaScript 框架 | Vue.js* `v3`

菜鸟教程：

1. https://www.runoob.com/vue2/vue-tutorial.html - *Vue.js 教程 | 菜鸟教程*

2. https://www.runoob.com/vue3/vue3-tutorial.html - *Vue3 教程 | 菜鸟教程*

## 安装

### package.json 安装

> 已有 package.json ， 安装模块依赖。

`npm install` - 一键安装 package.json 里的所有依赖文件

`npm install --dependencies` - 只安装 dependencies（运行依赖）文件

`npm install --devDependencies` - 只安装 devDependencies （开发依赖）文件

`npm install -g npm-check-updates` - 更新依赖到最新版本

参考：

1. https://www.cnblogs.com/sese/p/10119511.html - *npm安装package.json中的模块依赖 - 前端[色色] - 博客园*

### 新建安装

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

  1. <kbd>win</kbd> + <kbd>x</kbd> 打开 PowerShell（管理员）

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

## 用法

### vue.use 原理

https://www.uviewui.com/components/vueUse.html - *简要介绍Vue.use的原理 | uView 2.0 - 全面兼容 nvue 的 uni-app 生态框架 - uni-app UI 框架*

### vuex store

> `vuex` 用来管理 `vue` 的所有组件状态

用法：

1. 定义 `index.js` 文件并存放在 `store` 文件夹

2. 下载并引入`vuex`

  ```js
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

### vue-router

### vue-cli

引入

`import`

导出

`export`

当使用某个模块或组件时，需先引入，定义模块后导出或者通过` Vue.use(模块名) `使用

### qs

```js
import qs from 'qs';

Vue.prototype.qs = qs;

qs.stringify();  // 转换成查询字符串
qs.parse();  // 转换成 json 对象
```

### axios

### http

> vue-resource 是 vue 中使用的请求网络数据的插件，这个插件是依赖于 vue 的，简单说就是用来调接口的。

https://www.cnblogs.com/liluning/p/12144775.html - *vue-resource安装与使用 - 布吉岛丶 - 博客园*

## API

https://v2.cn.vuejs.org/v2/api/ - *API — Vue.js* `v2`

---

https://cn.vuejs.org/api/ - *API 参考 | Vue.js* `v3`

全局 API

选项式 API （这种方式个人用得多）

组合式 API

### 选项 / 生命周期钩子

#### mounted

### 指令

https://cn.vuejs.org/api/built-in-directives.html - *内置指令 | Vue.js*

https://v2.cn.vuejs.org/v2/api/#指令 - *API — Vue.js*

- 指令是带有 v- 前缀的特殊属性

- 指令用于在表达式的值改变时，将某些行为应用到 DOM 上。

  - HTML（输出 html 代码）

    v-html

  - 属性

    v-bind

    - 用于绑定属性（class id ...）
    - 缩写：`:`

  - 条件判断

    v-if

    v-else

    v-else-if

  - 根据条件展示元素

    v-show

    - 类似于 v-if

#### v-on

- 监听 DOM 事件

- 缩写：`@`

- 当绑定 v-on:click 事件时，想传入参数同时也传入当前元素

  ```html
  <button v-on:click="say('hi', $event)">say hi</button>
  ```

- 捕获事件和冒泡事件(默认)是两种事件流,事件捕获是从 document 到触发事件的那个元素;冒泡事件是从下向上的触发事件。

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

## UI 组件库

1. [VUX](https://vux.li/) - *VUX 是基于 WeUI 和 Vue.js 的 移动端 UI 组件库，提供丰富的组件满足移动端(微信)页面常用业务需求。* [GitHub](https://github.com/airyland/vux)

    ![GitHub last commit](https://badgen.net/github/last-commit/airyland/vux?icon=github&color=blue)

2. [Element](https://element.eleme.cn/#/zh-CN) - *Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库* [GitHub](https://github.com/ElemeFE/element)

    ![GitHub last commit](https://badgen.net/github/last-commit/ElemeFE/element?icon=github&color=blue)

3. [Mint](http://mint-ui.github.io/#!/zh-cn) - *基于 Vue.js 的移动端组件库* [GitHub](https://github.com/ElemeFE/mint-ui) `饿了么前端团队出品`

    ![GitHub last commit](https://badgen.net/github/last-commit/ElemeFE/mint-ui?icon=github&color=blue)

### Vant

[Vant](https://youzan.github.io/vant/#/zh-CN) - *Vant 4 - 轻量、可定制的移动端组件库* [GitHub](https://github.com/vant-ui/vant)

![GitHub last commit](https://badgen.net/github/last-commit/vant-ui/vant?icon=github&color=blue)

用法：

Vue 3 + Vant 3

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <!-- start 这行行代码必须加上，否则 Vant 样式无法正常显示 -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- end -->
  <title>Vue3 + Vant3</title>
  <link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/vant@3.4.9/lib/index.css" />
</head>
<body>
  <div id="app">
    <ol>
      <li v-for="site in sites" @click="onChange(site.name);">
        {{ site.name }}
      </li>
    </ol>
  </div>
  <script src="https://unpkg.com/vue@3.2.33/dist/vue.global.prod.js"></script>
  <script src="https://fastly.jsdelivr.net/npm/vant@3.4.9/lib/vant.min.js"></script>

  <script>
    const { createApp } = Vue
    createApp({
      data() {
        return {
          sites: [
            { name: 'Runoob' },
            { name: 'Google' },
            { name: 'Taobao' }
          ],
        }
      },
      created() {
        window.t = this;
      },
      mounted() {
        console.log(window.t.sites);
      },
      methods: {
        onChange(name) {
          console.log('站点名称：' + name);
        },
      }
    }).use(vant).mount('#app');
  </script>
</body>
</html>
```

上述参考：

1. https://zhuanlan.zhihu.com/p/347971064 - *每天学一点vue3（一）CDN方式的安装以及简单使用 - 知乎*
2. https://zhuanlan.zhihu.com/p/340309839 - *vue3.0中使用vant最新版本 - 知乎*

常见问题：

1. Vue 2 使用 `CDN` 方式引入 `Vant 2` 时，无法使用图片懒加载

   ```js
   // 通过 CDN 引入时不会自动注册 Lazyload 组件
   // 可以通过下面的方式手动注册
   
   Vue.use(vant.Lazyload); // Vue.use(vant.Lazyload);需要放在new Vue({});前面
   ```

   参考：

   1. https://segmentfault.com/q/1010000022016145 - *前端 - vant 轮播图怎么实现图片懒加载 - SegmentFault 思否*

参考：

1. https://blog.csdn.net/Poppy_LYT/article/details/99327571 - *Vant—下拉刷新上拉加载_vant 下拉刷新列表 顶部固定布局-CSDN博客*

#### 底部安全区适配

https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei - *进阶用法 - Vant 4*

https://vant-contrib.gitee.io/vant/#/zh-CN/number-keyboard - *NumberKeyboard 数字键盘 - Vant 4*

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
  <title>Vue3 + Vant3</title>
  <link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/vant@3.4.9/lib/index.css" />
  <style>
    .safe-area-box {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: var(--van-number-keyboard-z-index);
      width: 100%;
      padding-bottom: 22px;
      background: var(--van-number-keyboard-background);
      -webkit-user-select: none;
      user-select: none;
    }
  </style>
</head>
<body>
  <div id="app">
    <!-- 开启底部安全区适配 -->
    <div class="safe-area-box" safe-area-inset-bottom>

    </div>
  </div>
  <script src="https://unpkg.com/vue@3.2.33/dist/vue.global.prod.js"></script>
  <script src="https://fastly.jsdelivr.net/npm/vant@3.4.9/lib/vant.min.js"></script>

  <script>
    const { createApp } = Vue
    createApp({
      data() {
        return {
          sites: [
            { name: 'Runoob' },
            { name: 'Google' },
            { name: 'Taobao' }
          ],
        }
      },
      created() {
        window.t = this
      },
      mounted() {
        console.log(window.t.list)
      },
      methods: {
        onChange(name) {
          console.log('站点名称：' + name);
        },
      }
    }).use(vant).mount('#app');
  </script>
</body>
</html>
```

## 常见问题

### 项目开发中遇到的问题

1. https://cloud.tencent.com/developer/article/1626876 - *如何实现 Vue 自定义组件中 hover 事件以及 v-model - 腾讯云开发者社区-腾讯云*

2. https://blog.csdn.net/weixin_44092905/article/details/120336568 - *记一个vue开发问题-----js如何从浏览器剪贴板获取内容_咕咚，来了的博客-CSDN博客_vue 获取不到clipboarddata*

   - https://ask.csdn.net/questions/7482682 - *vue 实现获取剪切板的内容-有问必答-CSDN问答*

### vue 页面加载闪烁问题的解决方法

参考：

1. https://wenku.baidu.com/view/ec64d8fad3d233d4b14e852458fb770bf68a3b33.html - *前端开发中处理页面闪烁问题的解决方案 - 百度文库*

2. https://zhuanlan.zhihu.com/p/22477904 - *vue 页面加载闪烁问题解决产生原因及解决方法 - 知乎*

3. https://www.zhihu.com/question/587261190 - *vue 渲染时页面闪烁的问题如何解决？ - 知乎*

4. https://zhuanlan.zhihu.com/p/265531781 - *Vue 使用 v-show 导致页面闪烁的问题 - 知乎*

5. https://www.cnblogs.com/pangwl/p/7979169.html - *vue 页面加载闪烁问题的解决方法 - 在水伊人 - 博客园*

6. https://juejin.cn/post/6844904023611408392 - *vue 中使用 v-if 或 v-show ，出现闪屏的解决方法 - 掘金*

## 学习笔记（待整理）

### 部署

- 打包部署至生产环境

vue 请求接口

vue 登录并用 vuex 保存 token

### 数据类型

- 数字

- 字符串

- 布尔

- 数组

- 对象

  - 数组对象

- 绑定的 HTML DOM 元素（id="app"）

  ```js
  el: '#app'
  ```

- vue-cli 推荐使用格式

  ```js
  data() {
    return 
  }
  ```

- 普通格式

  ```js
  data: {
    num: 1,
    string: '1',
  }
  ```

- HTML 中可以直接使用 details() 方法

  ```js
  method: {
    details: function() {
      return this.num += 1;
    }
  }
  ```

### 文本值

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

### 自定义组件

```js
Vue.directive(tagName, option)
```

### 过滤器

```js
filters: {
  
}
```

### 计算属性

```js
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

### 监听属性

```js
watch: {
  
}
```

- $watch 是一个实例方法

"prop"，类似于一个自定义 attribute。
设置新的属性 --Vue.set(）方法

### 组件

- 注册组件：

  ```js
  Vue.component(tagName, options)
  ```

- 调用组件：

  ```html
  <tagName></tagName>
  ```

  - 全局组件

  - 局部组件

    ```js
    component : {
      
    }
    ```

### 自定义事件

- 使用 `$on(eventName)` 监听事件

- 使用 `$emit(eventName)` 触发事件

### 混入

- 全局混入

- 局部混入

- `Vue.mixin({  })`
