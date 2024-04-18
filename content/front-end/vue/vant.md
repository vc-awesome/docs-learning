# Vant

## 简介

> A lightweight, customizable Vue UI library for mobile web apps.

![GitHub last commit](https://badgen.net/github/last-commit/youzan/vant?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/youzan/vant?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/youzan/vant?logo=github)
![npm](https://img.shields.io/npm/v/vant?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/youzan/vant?style=social)

## 官方

https://vant.pro/vant/#/zh-CN - *Vant 4 - 轻量、可定制的移动端组件库*

https://vant-ui.github.io/vant/#/zh-CN - *Vant 4 - 轻量、可定制的移动端组件库*

https://github.com/youzan/vant - *GitHub - youzan/vant: A lightweight, customizable Vue UI library for mobile web apps.*

~~https://vant-contrib.gitee.io/vant/ - *Vant 4 - 轻量、可定制的移动端组件库*~~

https://gitee.com/vant-contrib/vant - *vant: 轻量、可定制的移动端 Vue 组件库。反馈 issue 请异步 GitHub 仓库：https://github.com/youzan/vant/issues*

## 版本

### 4.x

暂无

### 3.x

https://vant-ui.github.io/vant/v3/#/zh-CN - *Vant 3 - 轻量、可靠的移动端组件库*

### 2.x

https://vant-ui.github.io/vant/v2/#/zh-CN/ - *Vant 2 - 轻量、可靠的移动端组件库*

## 安装

https://vant-ui.github.io/vant/#/zh-CN/quickstart - *快速上手 - Vant 4*

### 通过 npm 安装

```bash
# Vue 3 项目，安装最新版 Vant
npm i vant

# Vue 2 项目，安装 Vant 2
npm i vant@latest-v2
```

### 通过 CDN 安装

1. https://cdn.jsdelivr.net/npm/vant/
    1. https://www.jsdelivr.com/package/npm/vant
2. https://www.bootcdn.cn/vant/

## 用法

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

### Vue 2 使用 `CDN` 方式引入 `Vant 2`，无法使用图片懒加载

```javascript
// 通过 CDN 引入时不会自动注册 Lazyload 组件
// 可以通过下面的方式手动注册

Vue.use(vant.Lazyload); // 需要放在 new Vue({}); 前面
```

参考：

1. https://segmentfault.com/q/1010000022016145 - *前端 - vant 轮播图怎么实现图片懒加载 - SegmentFault 思否*

## 参考

1. https://blog.csdn.net/Poppy_LYT/article/details/99327571 - *Vant—下拉刷新上拉加载_vant 下拉刷新列表 顶部固定布局-CSDN博客*
