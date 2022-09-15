## html 官方

菜鸟教程：https://www.runoob.com/html/html-tutorial.html

## html 使用规则

### 代码规范

 

### 标签

header 元素

```html
<meta>
<link>
<style></style>
<script></script>
<noscript></noscript>
```

#### \<meta>

- https://www.runoob.com/w3cnote/meta.html - *常用meta整理* 
- http://fex.baidu.com/blog/2014/10/html-head-tags/ - *HTML head 头标签*
- https://github.com/audreyfeldroy/favicon-cheat-sheet - *Obsessive cheat sheet to favicon sizes/types. Please contribute! (Note: this may be in flux as I learn new things about favicon best practices.)*

#### \<script>

##### integrity

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js" integrity="sha512-UXumZrZNiOwnTcZSHLOfcTs0aos2MzBWHXOHOuB0J/R44QB0dwY5JgfbvljXcklVf65Gc4El6RjZ+lnwd2az2g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```



- https://cdnjs.com/libraries/hammer.js - *A javascript library for multi-touch gestures*
- https://blog.csdn.net/chenjiebin/article/details/121093528 - *script使用integrity属性进行安全验证*
- https://www.xftsoft.com/tool/integrity - *Integrity生成器（SRI Hash 生成器）*

##### async

```javascript
<script src="js/require.js" defer async="true" ></script>
```

`async`属性表明这个文件需要异步加载，避免网页失去响应。IE不支持这个属性，只支持`defer`，所以把`defer`也写上。[via](https://www.ruanyifeng.com/blog/2012/11/require_js.html)

##### type

https://mp.weixin.qq.com/s/KXpawK0d6ypnyrEDfNCaiQ - *type="module" 你了解，但 type="importmap" 你知道吗*

块元素

```html
<div></div>
<h1></h1>
<p></p>
<ul></ul>
<ol></ol>
<li></li>
<table></table>
```



内联元素

```html
<span></span>
<b></b>
<td></td>
<a></a>
<img>
```



内联文本元素

```html
<mark></mark>
<del></del>
<ins></ins>
<u></u>
<small></small>
<strong></strong>
<em></em>
<code></code>
```



样式/节

```html
<!--标签定义了文档的某个区域。比如章节、头部、底部或者文档的其他区域。-->
<section></section>
```



### 布局

```html
<!--头部-->
<header class="header"></header>

<!--侧边栏-->
<aside class="menu"></aside>

<!--内容-->
<div class="container"></div>
<div class="content"></div>
<section></section>

<!--尾部-->
<footer class="footer"></footer>
```



## html 页面

### 404页面

参考页面 https://soft-hub.cn/article/ll2d7f50fa62eb45f0171c5321f9fc926f.zip
