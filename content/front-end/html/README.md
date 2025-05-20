# HTML

## 简介

> 超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。
>
> 您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。

## 教程

1. https://wangdoc.com/html/ - *HTML 教程 - 网道*

2. https://www.runoob.com/html/html-tutorial.html - *HTML 教程 | 菜鸟教程*

## 入门指南

### 编码风格

有关详细信息，请参阅“[代码规范](essential/code-guide)”。

### 代码片段

https://v5.bootcss.com/docs/getting-started/introduction/ - *Get started with Bootstrap · Bootstrap v5 中文文档 v5.3 | Bootstrap 中文网*

文件名：`index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/mhDoLbDldZc3qpsJHpLogda//BVZbgYuw6kof4u2FrCedxOtgRZDTHgHUhOCVim" crossorigin="anonymous"></script>
  </body>
</html>
```

## 用法

### 标签

#### 块元素

```html
<div></div>
<h1></h1>
<p></p>
<ul></ul>
<ol></ol>
<li></li>
<table></table>
```

#### 内联元素

```html
<span></span>
<b></b>
<td></td>
<a></a>
<img>
<input>
<svg>
```

#### 内联文本元素

```html
<mark></mark>
<del></del>
<ins></ins>
<u></u>
<small></small>
<strong></strong>
<em></em>
<pre></pre>
<code></code>
<kbd></kbd>
<q></q>
<abbr></abbr>
```

### \<head>

https://www.runoob.com/html/html-head.html - *HTML 头部 | 菜鸟教程*

```html
<meta>
<link>
<style></style>
<script></script>
<noscript></noscript>
```

#### \<meta>

1. https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta - *\<meta>：元数据元素 - HTML（超文本标记语言） | MDN*

2. https://www.runoob.com/w3cnote/meta.html - *常用meta整理*

3. http://fex.baidu.com/blog/2014/10/html-head-tags/ - *HTML head 头标签*
    1. https://fex-team.github.io/blog/2014/10/html-head-tags// - *HTML head 头标签 - FEX*

##### charset

```html
<meta charset="utf-8" />
```

##### http-equiv

```html
<meta http-equiv="refresh" content="0;URL=http://example.com/" />
```

##### name

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, minimal-ui">
```

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Viewport_meta_tag - *viewport meta 标记 - HTML（超文本标记语言） | MDN*

1. **minimal-ui**: https://www.cnblogs.com/lvxisha/p/9885872.html - *meta 中 minimal-ui 属性 - 婧星 - 博客园*

#### \<link>

https://www.runoob.com/tags/tag-link.html - *HTML \<link>标签 | 菜鸟教程*

```html
<link rel="stylesheet" type="text/css" href="theme.css">
```

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link - *\<link>：外部资源链接元素 - HTML（超文本标记语言） | MDN*

```html
<link rel="manifest" href="/manifest.json" />
```

参考：https://developer.mozilla.org/zh-CN/docs/Web/Manifest - *Web App Manifest | MDN*

1. https://github.com/audreyfeldroy/favicon-cheat-sheet - *Obsessive cheat sheet to favicon sizes/types. Please contribute! (Note: this may be in flux as I learn new things about favicon best practices.)*

    ![GitHub last commit](https://badgen.net/github/last-commit/audreyfeldroy/favicon-cheat-sheet?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/audreyfeldroy/favicon-cheat-sheet?style=social)

#### \<script>,\<noscript>

1. https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script#attributes - *\<script>：脚本元素 - HTML（超文本标记语言） | MDN*
2. https://wangdoc.com/html/script - *\<script>，\<noscript> - HTML 教程 - 网道*

##### integrity

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js" integrity="sha512-UXumZrZNiOwnTcZSHLOfcTs0aos2MzBWHXOHOuB0J/R44QB0dwY5JgfbvljXcklVf65Gc4El6RjZ+lnwd2az2g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

参考：

1. https://cdnjs.com/libraries/hammer.js - *A javascript library for multi-touch gestures*

2. https://blog.csdn.net/chenjiebin/article/details/121093528 - *script使用integrity属性进行安全验证*

3. https://www.xftsoft.com/tool/integrity - *Integrity生成器（SRI Hash 生成器）*

##### async

```html
<script src="js/require.js" defer async="true" ></script>
```

`async`属性表明这个文件需要异步加载，避免网页失去响应。IE不支持这个属性，只支持`defer`，所以把`defer`也写上。[via](https://www.ruanyifeng.com/blog/2012/11/require_js.html)

##### type

https://mp.weixin.qq.com/s/KXpawK0d6ypnyrEDfNCaiQ - *type="module" 你了解，但 type="importmap" 你知道吗*

### \<iframe>

https://wangdoc.com/html/iframe - *iframe - HTML 教程 - 网道*

https://www.runoob.com/html/html-iframes.html - *HTML 框架 | 菜鸟教程*

Question：

- 跨域

### \<form>

https://www.runoob.com/tags/tag-form.html - *HTML \<form> 标签 | 菜鸟教程*

#### \<fieldset>

https://www.runoob.com/tags/tag-fieldset.html - *HTML \<fieldset> 标签 | 菜鸟教程*

```html
<fieldset>
    <legend>Personalia:</legend>

- https://docs.github.com/zh/pages - *GitHub Pages 文档 - GitHub Docs*

</fieldset>
```

#### \<output>

https://www.runoob.com/tags/tag-output.html - *HTML \<output> 标签 | 菜鸟教程*

```html
<output data-lang="output">

- https://docs.github.com/zh/pages - *GitHub Pages 文档 - GitHub Docs*

</output>
```

### 图像标签

#### \<img>

https://www.runoob.com/tags/tag-img.html - *HTML \<img> 标签 | 菜鸟教程*

```html
<img src="" alt="" loading="lazy" decoding="async" />
```

属性 src 是 source 的缩写（规定显示图像的 URL）。

属性 alt 是 alternate 的缩写（规定图像的替代文本）。

#### loading

`loading="lazy"` 图像延迟加载，只有鼠标滚动到该图片所在位置才会显示。

https://www.runoob.com/tags/att-img-loading.html - *HTML img loading 属性 | 菜鸟教程*

#### \<figure>,\<figcaption>

https://www.runoob.com/tags/tag-figcaption.html - *HTML \<figcaption> 标签 | 菜鸟教程*

实例：

<figure>
    <img src="https://www.markdownguide.org/assets/images/albuquerque.jpg"
         alt="Albuquerque, New Mexico">
    <figcaption>A single track trail outside of Albuquerque, New Mexico.</figcaption>
</figure>

代码：

```html
<figure>
    <img src="https://www.markdownguide.org/assets/images/albuquerque.jpg"
         alt="Albuquerque, New Mexico">
    <figcaption>A single track trail outside of Albuquerque, New Mexico.</figcaption>
</figure>
```

实例参考：https://www.markdownguide.org/hacks/#image-captions - *Hacks | Markdown Guide*

### \<a>

https://wangdoc.com/html/a - *\<a> - HTML 教程 - 网道*

### 文本标签

#### \<pre>

https://wangdoc.com/html/text#pre - *文本标签 - HTML 教程 - 网道*

### \<video>

教程：

1. https://www.runoob.com/tags/tag-video.html - *HTML \<video> 标签 | 菜鸟教程*

2. https://www.runoob.com/tags/av-met-load.html - *HTML 音频 / 视频 DOM load () 方法 | 菜鸟教程*

3. https://www.runoob.com/tags/ref-av-dom.html - *HTML 音频 / 视频 | 菜鸟教程*

4. https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video - *\<video>: 视频嵌入元素 - HTML（超文本标记语言） | MDN*

5. https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content - *视频和音频内容 - 学习 Web 开发 | MDN*

6. https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs - *视频和音频 API - 学习 Web 开发 | MDN*

用法：

1. [解决 H5 页面 video 在 ios 上播放视频时会默认全屏显示](https://juejin.cn/post/7018153006935834631)

    https://github.com/fregante/iphone-inline-video - *GitHub - fregante/iphone-inline-video: 📱 Make videos playable inline on the iPhone (prevents automatic fullscreen)*

    ![GitHub last commit](https://badgen.net/github/last-commit/fregante/iphone-inline-video?icon=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/fregante/iphone-inline-video?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/fregante/iphone-inline-video?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/fregante/iphone-inline-video?style=social)

    ```html
    <video webkit-playsinline="true" playsinline="true"></video>
    ```

参考：

1. https://www.cnblogs.com/527xyz/p/14867222.html - *video 视频标签自定义显示隐藏播放控件 & Shadow DOM - 527xyz - 博客园*

2. https://blog.csdn.net/Mrs_Yu/article/details/105882116 - *控制 video 标签的控制栏组件（隐藏、显示进度条、播放按钮、全屏按钮等）-CSDN 博客*

3. https://blog.csdn.net/qq_42580876/article/details/109732326 - *video 标签设置封面图、控件的显隐_video 封面 - CSDN 博客*

### \<time>

https://www.runoob.com/tags/tag-time.html - *HTML \<time> 标签 | 菜鸟教程*

用法：

```html
<time datetime="2023-06-08T18:24:16+00:00">08 Jun 2023</time>
```

### 属性

#### 全局属性

https://www.runoob.com/tags/ref-standardattributes.html - *HTML 全局属性 | 菜鸟教程*

#### 事件属性

https://www.runoob.com/tags/ref-eventattributes.html - *HTML 事件 | 菜鸟教程*

#### data-*

https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Howto/Use_data_attributes - *使用数据属性 - 学习 Web 开发 | MDN*

### 页面布局

https://wangdoc.com/html/semantic - *网页的语义结构 - HTML 教程 - 网道*

```html
<!--头部-->
<header class="header"></header>

<!--侧边栏-->
<aside class="menu"></aside>

<!--导航栏-->
<nav class="navbar"></nav>

<!--内容-->
<div class="container"></div>
<div class="content"></div>
<section></section><!--标签定义了文档的某个区域。比如章节、头部、底部或者文档的其他区域。-->
<main></main>
<article></article>

<!--尾部-->
<footer class="footer"></footer>
```

参考：

1. https://www.w3schools.cn/html/html_layout.asp - *HTML 布局元素和技巧*

    - 静态布局（static layout）
    - 流式布局（Liquid Layout）
    - 自适应布局（Adaptive Layout）
    - 响应式布局（Responsive Layout）
    - 弹性布局（rem/em布局）

2. https://zhuanlan.zhihu.com/p/347322236 - *布局的几种方式（静态布局、自适应布局、流式布局、响应式布局、弹性布局等概念和区别） - 知乎*

## 页面

### 404 页面

参考页面：https://soft-hub.cn/article/ll2d7f50fa62eb45f0171c5321f9fc926f.zip - *Not Found*

### 引导页面

按步骤引导用户操作的页面

> 这里放一张截图

![html-guide-page-01](_images/html-guide-page-01.jpg)  | ![html-guide-page-02](_images/html-guide-page-02.jpg)
---|---
