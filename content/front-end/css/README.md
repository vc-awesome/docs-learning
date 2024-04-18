# CSS

## 简介

> CSS（Cascading Style Sheets，层叠样式表），是一种用来为结构化文档（如 HTML 文档或 XML 应用）添加样式（字体、间距和颜色等）的计算机语言，CSS 文件扩展名为 `.css`。

## 官方

https://www.w3.org/Style/CSS/Overview.en.html - *Cascading Style Sheets*

## 教程

1. https://www.runoob.com/css/css-tutorial.html - *CSS 教程*

2. https://www.runoob.com/css3/css3-tutorial.html - *CSS3 教程*

3. https://developer.mozilla.org/zh-CN/docs/Learn/CSS - *CSS - 学习 Web 开发 | MDN*

4. https://developer.mozilla.org/zh-CN/docs/Web/CSS - *CSS：层叠样式表 | MDN*

## 用法

### 属性

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax - *CSS 属性值定义语法 - CSS：层叠样式表 | MDN*

### 函数

https://www.runoob.com/cssref/css-functions.html - *CSS 函数 | 菜鸟教程*

常用函数：

1. [var()](https://www.runoob.com/cssref/func-var.html) - *用于插入自定义的属性值。*
2. [calc()](https://www.runoob.com/cssref/func-calc.html) - *允许计算 CSS 的属性值，比如动态计算长度值。*
3. [attr()](https://www.runoob.com/cssref/func-attr.html) - *返回选择元素的属性值。*
4. [env()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/env)

### 文本

1. https://www.runoob.com/css/css-text.html - *CSS Text(文本) | 菜鸟教程*

    - [white-space](https://www.runoob.com/cssref/pr-text-white-space.html) - *设置元素中空白的处理方式*

        - `white-space: pre-wrap!important;` - *保留空白符序列，但是正常地进行换行。*

    - [text-decoration - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)

2. https://www.runoob.com/css3/css3-text-effects.html - *CSS3 文本效果 | 菜鸟教程*

    - [word-break](https://www.runoob.com/cssref/css3-pr-word-break.html) - *规定非中日韩文本的换行规则。*

        - `word-break: break-all!important;` - *允许在单词内换行。*

    - [word-wrap](https://www.runoob.com/cssref/css3-pr-word-wrap.html) - *允许对长的不可分割的单词进行分割并换行到下一行。*

### 盒模型

1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model - *CSS 基础框盒模型介绍 - CSS：层叠样式表 | MDN*

2. https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model - *盒模型 - 学习 Web 开发 | MDN*

3. https://css-tricks.com/box-sizing/ - *Box Sizing | CSS-Tricks - CSS-Tricks*

### 选择器

https://www.runoob.com/cssref/css-selectors.html - *CSS 选择器 | 菜鸟教程*

- https://www.runoob.com/cssref/sel-not.html - *CSS3 :not 选择器 | 菜鸟教程*
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/ - *:not() - CSS：层叠样式表 | MDN*

  ```css
  :not(header a)[target=_blank]:after {
    display: inline-block;
    padding-left: 3px;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\f08e";
    vertical-align: text-bottom;
  }
  ```

  ```css
  .markdown-section > :not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) code {
      font-size: .8rem;
  }
  ```

### 伪类和伪元素

教程：

1. https://www.runoob.com/css/css-pseudo-classes.html - *CSS 伪类 | 菜鸟教程*

2. https://www.runoob.com/css/css-pseudo-elements.html - *CSS 伪元素 | 菜鸟教程*

3. https://github.com/o2team/H5Skills/issues/49 - *伪元素建议使用双冒号 · Issue #49 · o2team/H5Skills · GitHub*

参考：

1. https://segmentfault.com/q/1010000018610355 - *vue.js - 速救,Vue怎么动态改变元素伪类的效果 - SegmentFault 思否*

2. https://juejin.cn/post/7205361008272703548 - *vue动态设置::before伪元素样式背景颜色 - 掘金*

3. https://blog.csdn.net/qq_44827891/article/details/106413564 - *vue 中动态 style (如何动态修改伪元素样式)_vue 怎么在行内给伪元素加样式 - CSDN 博客*

### CSS3 过渡

https://www.runoob.com/css3/css3-transitions.html - *CSS3 过渡 | 菜鸟教程*

### CSS3 动画

https://www.runoob.com/css3/css3-animations.html - *CSS3 动画 | 菜鸟教程*

### 布局

https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout - *CSS 布局 - 学习 Web 开发 | MDN*

高宽比例布局：

1:2

```css
/* vw */
.aspect-ratio{ width: 100vw; height: calc(100vw * 2 / 1); }

/*vh */
.aspect-ratio{ width: 100vh; height: calc(100vw * 2 / 1); }

```

3:4

```css
/* vw */
.aspect-ratio{ width: 100vw; height: calc(100vw * 4 / 3); }

/*vh */
.aspect-ratio{ width: 100vh; height: calc(100vw * 4 / 3); }

```

参考：

1. https://juejin.cn/post/6844903814361776135 - *CSS之宽高比例布局 - 掘金*

### z-index

参考：

1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index - *z-index -
CSS：层叠样式表 | MDN*

2. https://juejin.cn/post/6939766082911600654 - *10分钟了解z-index机制 - 掘金*

常见问题：

1. https://blog.csdn.net/weixin_41697143/article/details/108542551 - *z-index 和
fixed 在苹果手机 ios 不生效_前端 ios 上子设置 zinde 无法覆盖 - CSDN 博客*

2. https://blog.csdn.net/WuLex/article/details/105768904 - *IOS 的 z-index 失效的原因- CSDN 博客*

3. https://blog.csdn.net/sunqiang4/article/details/119427445 - *IOS safari
浏览器中出现的 z-index 不生效的层级问题_ios 设备上 z-index 不生效_就是不掉头发的博客 - CSDN 博客*

### transform

https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform - *transform - CSS：层叠样式表 | MDN*

### display

https://developer.mozilla.org/zh-CN/docs/Web/CSS/display - *display - CSS：层叠样式表 | MDN*

#### 块元素

#### 内联元素

display 属性值为 inline、inline-block、inline-table

### line-height

https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height - *line-height - CSS：层叠样式表 | MDN*

参考：

1. https://zhuanlan.zhihu.com/p/352965852 - *熬夜整理了一万多字的line-height总结,你还看不懂那我真的要跪了! - 知乎*
2. https://zhuanlan.zhihu.com/p/25808995 - *深入理解 CSS：字体度量、line-height 和 vertical-align - 知乎*
3. https://segmentfault.com/a/1190000014936270 - *深入理解css之line-height - 有赞美业前端团队 - SegmentFault 思否*
4. https://blog.csdn.net/apple_51491580/article/details/113737855 - *height和line-height的区别（简单易懂）_line-height和height的区别-CSDN博客*
5. https://zhuanlan.zhihu.com/p/64851039 - *css : line-height的定义和经典使用 - 知乎*

## 预处理器

### Sass

https://sass-lang.com - *Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.* [中文](https://www.sasscss.com) [GitHub](https://github.com/sass)

![GitHub last commit](https://badgen.net/github/last-commit/sass/sass?icon=github&color=blue)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/sass/sass?logo=github&color=blue)
![npm](https://img.shields.io/npm/v/sass?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/sass/sass?style=social)

### Less

https://lesscss.org - *Getting started | Less.js* [中文](https://less.bootcss.com) [GitHub](https://github.com/less)

![GitHub last commit](https://badgen.net/github/last-commit/less/less.js?icon=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/less/less.js?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/less/less.js?logo=github)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/less/less.js?logo=github&color=blue)
![npm](https://img.shields.io/npm/v/less?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/less/less.js?style=social)

## 工具

- https://www.postcss.com.cn - *PostCSS 利用 JavaScript 的强大编程能力对 CSS 代码进行转换。数以百计的 PostCSS 插件可以用来为 CSS 属性添加特定于浏览器厂商的前缀、支持未来 CSS 语法、模块化、代码检测等。*
- https://stylelint.bootcss.com - *Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。*
- https://www.purgecss.cn/ - *PurgeCSS 是一个用来删除未使用的 CSS 代码的工具，能够减小 CSS 文件的体积。例如可以用来减小 Bootstrap 等前端框架的文件体积，提升加载速度。*

## 功能

### Animation

1. https://animate.style/ - *Animate.css | A cross-browser library of CSS animations.*
2. http://anijs.github.io/ - *AniJS, A Library to Raise your Web Design without Coding*
3. https://www.minimamente.com/project/magic/ - *Magic Animations CSS3*
4. https://animejs.com/ - *anime.js • JavaScript animation engine*
5. https://github.com/vace/css3-animation-generator - *chrome plugin css3 animation generator*
6. https://css3gen.com/wp-content/cache/all/css3-animation/index.html - *CSS3 Animation Generator - CSS3gen*

#### 搜索

1. http://t.zoukankan.com/i7758-p-5226394.html - *11款CSS3动画工具的开发 - 走看看*
2. https://wanghi.cn/202003/24716.html - *值得你收藏的10个CSS3动画工具菜鸟教程网_动画小白攻略 - 王海*
3. https://www.php.cn/css-tutorial-381741.html - *用CSS3做动画效果用什么工具-css教程-PHP中文网*
4. https://blog.csdn.net/cune1359/article/details/106848015 - *css3动画工具_您应该收藏的10个CSS3动画工具_cune1359的博客-CSDN博客*
5. https://www.yisu.com/zixun/642979.html - *CSS3的动画工具有哪些 - web开发 - 亿速云*
6. https://blog.csdn.net/qq_38110572/article/details/113944689 - *十个CSS3动画工具，你必须收藏！_Leeeeeer的博客-CSDN博客_css 动画设计器*

#### 示例

*via https://blog.csdn.net/Bonjours/article/details/124383032 - *css设置图标跳动-CSDN博客**

代码：

``` css
// im 图标跳动
@keyframes im_icon {
    0% {
        opacity: .8;
        transform: translate(0,0);
    }
    50% {
        opacity: 1;
        transform: translate(0,3px);
    }
    100% {
        opacity: .8;
        transform: translate(0,0);
    }
}
@-webkit-keyframes im_icon {
    0% {
        opacity: .8;
        transform: translate(0,0);
    }
    50% {
        opacity: 1;
        transform: translate(0,3px);
    }
    100% {
        opacity: .8;
        transform: translate(0,0);
    }
}
.im {
    margin-top: -4px;
    margin-left: 10px;
    cursor: pointer;
    animation:  im_icon 1s linear infinite;
    -webkit-animation:  im_icon 1s linear infinite;
}
```

``` html
<img alt='bunny-color' src='_media/bunny-color.png' class="im" />
```

效果：

<img alt='bunny-color' src='_media/bunny-color.png' class="im" />

---

*via https://clipboardjs.com/ - *clipboard.js — Copy to clipboard without Flash**

``` css
.love {
    display: inline-block;
    position: relative;
    top: .2em;
    font-size: 1.4em;
    -webkit-transform: scale(.9);
    -moz-transform: scale(.9);
    transform: scale(.9);
    -webkit-animation: love .5s infinite linear alternate-reverse;
    -moz-animation: love .5s infinite linear alternate-reverse;
    animation: love .5s infinite linear alternate-reverse
}

@-webkit-keyframes love {
    to {
        -webkit-transform: scale(1.2)
    }
}

@-moz-keyframes love {
    to {
        -moz-transform: scale(1.2)
    }
}

@keyframes love {
    to {
        transform: scale(1.2)
    }
}
```

```html
<span class="love">♥</span>
```

效果：
<span class="love">♥</span>

### Loader

1. https://css-loaders.com/ - *CSS Loaders: A collection of more than 500 loading
animations* [GitHub User](https://github.com/Afif13/)

2. https://juejin.cn/post/7037036742985121800 - *纯css实现117个Loading效果（上） - 掘金*

### CCS Generator

1. https://www.css-generators.com/ - *CSS Generators: Your CSS code with less
effort*

## 参考

1. https://mp.weixin.qq.com/s/YpMjQrFTYwwTQJcWAqKwRA - *CSS 中流与宽高之间是如何相互影响的？*
2. https://1linelayouts.glitch.me/ - *一行 CSS 布局* 🪜
3. https://juejin.cn/post/6861501624993447950 - *CSS八种让人眼前一亮的HOVER效果 - 掘金*
