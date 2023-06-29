
## 官方

**菜鸟教程**：

1. https://www.runoob.com/css/css-tutorial.html - *CSS 教程*

2. https://www.runoob.com/css3/css3-tutorial.html - *CSS3 教程*

### 盒模型

1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model - *CSS 基础框盒模型介绍 - CSS：层叠样式表 | MDN*

2. https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model - *盒模型 - 学习 Web 开发 | MDN*

### 选择器

https://www.runoob.com/cssref/css-selectors.html - *CSS 选择器 | 菜鸟教程*

- https://www.runoob.com/cssref/sel-not.html - *CSS3 :not 选择器 | 菜鸟教程*

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
      font-size: 0.8rem;
  }
  ```

### 伪类

https://www.runoob.com/css/css-pseudo-classes.html - *CSS 伪类 | 菜鸟教程*

### 伪元素

https://www.runoob.com/css/css-pseudo-elements.html - *CSS 伪元素 | 菜鸟教程*

### CSS3 过渡

https://www.runoob.com/css3/css3-transitions.html - *CSS3 过渡 | 菜鸟教程*

## Sass

https://www.sasscss.com - *Sass: Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言。Sass 是 Syntactically Awesome Style Sheets 的缩写。 | Sass 中文网* 🇨🇳

https://sass-lang.com - *Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.* 🇺🇸

https://github.com/sass - *GitHub*



## Less

https://less.bootcss.com 🇨🇳

https://lesscss.org 🇺🇸

https://github.com/less - *GitHub*



## Tool

- https://www.postcss.com.cn - *PostCSS 利用 JavaScript 的强大编程能力对 CSS 代码进行转换。数以百计的 PostCSS 插件可以用来为 CSS 属性添加特定于浏览器厂商的前缀、支持未来 CSS 语法、模块化、代码检测等。* 🇨🇳

- https://stylelint.bootcss.com - *Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。* 🇨🇳

- https://www.purgecss.cn/ - *PurgeCSS 是一个用来删除未使用的 CSS 代码的工具，能够减小 CSS 文件的体积。例如可以用来减小 Bootstrap 等前端框架的文件体积，提升加载速度。* 🇨🇳



## Animation

https://animate.style/ - *Animate.css | A cross-browser library of CSS animations.*

http://anijs.github.io/ - *AniJS, A Library to Raise your Web Design without Coding*

https://www.minimamente.com/project/magic/ - *Magic Animations CSS3*

https://animejs.com/ - *anime.js • JavaScript animation engine*

https://github.com/vace/css3-animation-generator - *chrome plugin css3 animation generator*

https://css3gen.com/wp-content/cache/all/css3-animation/index.html - *CSS3 Animation Generator - CSS3gen*

### 网搜

- http://t.zoukankan.com/i7758-p-5226394.html - *11款CSS3动画工具的开发 - 走看看*
- https://wanghi.cn/202003/24716.html - *值得你收藏的10个CSS3动画工具菜鸟教程网_动画小白攻略 - 王海*
- https://www.php.cn/css-tutorial-381741.html - *用CSS3做动画效果用什么工具-css教程-PHP中文网*
- https://blog.csdn.net/cune1359/article/details/106848015 - *css3动画工具_您应该收藏的10个CSS3动画工具_cune1359的博客-CSDN博客*
- https://www.yisu.com/zixun/642979.html - *CSS3的动画工具有哪些 - web开发 - 亿速云*
- https://blog.csdn.net/qq_38110572/article/details/113944689 - *十个CSS3动画工具，你必须收藏！_Leeeeeer的博客-CSDN博客_css 动画设计器*

### 实例

_via https://blog.csdn.net/Bonjours/article/details/124383032 - *css设置图标跳动-CSDN博客*_

代码：

``` css
// im 图标跳动
@keyframes im_icon {
    0% {
        opacity: 0.8;
        transform: translate(0,0);
    }
    50% {
        opacity: 1;
        transform: translate(0,3px);
    }
    100% {
        opacity: 0.8;
        transform: translate(0,0);
    }
}
@-webkit-keyframes im_icon {
    0% {
        opacity: 0.8;
        transform: translate(0,0);
    }
    50% {
        opacity: 1;
        transform: translate(0,3px);
    }
    100% {
        opacity: 0.8;
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

----

_via https://clipboardjs.com/ - *clipboard.js — Copy to clipboard without Flash*_

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



## Link

https://mp.weixin.qq.com/s/YpMjQrFTYwwTQJcWAqKwRA - *CSS 中流与宽高之间是如何相互影响的？*

https://1linelayouts.glitch.me/ - *一行 CSS 布局* 🪜

https://juejin.cn/post/6861501624993447950 - *CSS八种让人眼前一亮的HOVER效果 - 掘金*

