# 文本

1. https://v5.bootcss.com/docs/utilities/text/ - _Text · Bootstrap v5 中文文档 v5.3 | Bootstrap 中文网_
2. https://getbootstrap.com/docs/5.3/utilities/text/ - _Text · Bootstrap v5.3_
3. http://amazeui.shopxo.net/css/utility/#wen-ben-gong-ju - _CSS - Utility | Amaze UI_

## 文本对齐方式

```css
.text-left {
  text-align: left !important;
}
.text-center {
  text-align: center !important;
}
.text-right {
  text-align: right !important;
}
.text-justify {
}
```

## 文本换行和溢出

```css
/* 文本换行 */
.text-wrap {
  white-space: normal !important;
}
/* 文本溢出 */
.text-nowrap {
  white-space: nowrap !important;
}
```

<https://v4.bootcss.com/docs/utilities/text/#文字折行和溢出> - *文本（Text） · Bootstrap v4 中文文档 v4.6 | Bootstrap 中文网*

1. white-space 用法：https://www.runoob.com/cssref/pr-text-white-space.html - *CSS white-space 属性 | 菜鸟教程*
    - https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space - *white-space - CSS：层叠样式表 | MDN*
2. word-break 用法：https://www.runoob.com/cssref/css3-pr-word-break.html - *CSS3 word-break 属性 | 菜鸟教程*
    - https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break - *word-break - CSS：层叠样式表 | MDN*
3. word-wrap 用法：https://www.runoob.com/cssref/css3-pr-word-wrap.html - *CSS3 word-wrap 属性 | 菜鸟教程*

## 断字

```css
.text-break {
  word-break: break-word !important;
  word-wrap: break-word !important;
}
```

<https://v4.bootcss.com/docs/utilities/text/#单词中断> - *文本（Text） · Bootstrap v4 中文文档 v4.6 | Bootstrap 中文网*

默认效果：

<pre>
<p>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
</pre>

设置后的效果：

<p style="
    word-break: break-word !important;
    word-wrap: break-word !important;
">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>

```css
.text-break {
  word-break: break-all !important;
  word-wrap: break-word !important;
}
```

默认效果：

<p>Some placeholder text to demonstrate justified text alignment. Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>

设置后的效果：

<p style="
    word-break: break-all!important;
    word-wrap: break-word!important;
">Some placeholder text to demonstrate justified text alignment. Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>

## 文本转换

```css
.text-lowercase {
  text-transform: lowercase !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.text-capitalize {
  text-transform: capitalize !important;
}
```

## 字体粗细和斜体

```css
.font-weight-bold {
  font-weight: 700 !important;
}
.font-weight-bolder {
  font-weight: bolder !important;
}
.font-weight-normal {
  font-weight: 400 !important;
}
.font-weight-light {
  font-weight: 300 !important;
}
.font-weight-lighter {
  font-weight: lighter !important;
}
/* 斜体 */
.font-italic {
  font-style: italic !important;
}
```

## 行高

暂无

## 等宽

暂无

## 文本装饰

```css
/* 下划线 */
.text-decoration-underline {
  text-decoration: underline !important;
}
/* 删除线 */
.text-decoration-line-through {
  text-decoration: line-through !important;
}
/* 移除文本装饰 */
.text-decoration-none {
  text-decoration: none !important;
}
```

## 字体大小

AmazeUI：

- .text-xs 12px 1rem
- .text-sm 14px 1.25rem
- .text-default 16px 1.5rem
- .text-lg 18px 1.75rem
- .text-xl 24px 2rem
- .text-xxl 32px 2.5rem
- .text-xxxl 42px

## 文本截断

```css
// Text truncate
// Requires inline-block or block for proper styling

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

1. https://getbootstrap.com/docs/5.3/helpers/text-truncation/ - _Text truncation · Bootstrap v5.3_
   1. https://github.com/twbs/bootstrap/blob/main/scss%2Fmixins%2F_text-truncate.scss - _bootstrap/scss/mixins/\_text-truncate.scss at main · twbs/bootstrap · GitHub_

AmazeUI：

```css
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

uView：

```css
.u-line-2 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical !important;
}
```

```scss
// 超出行数，自动显示行尾省略号，最多5行
@for $i from 1 through 5 {
  .u-line-#{$i} {
    // vue下，单行和多行显示省略号需要单独处理
    @if $i == 1 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    } @else {
      display: -webkit-box !important;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-line-clamp: $i;
      -webkit-box-orient: vertical !important;
    }
  }
}
```

https://github.com/umicro/uView2.0/blob/master/uni_modules%2Fuview-ui%2Flibs%2Fcss%2Fcommon.scss - _uView2.0/uni_modules/uview-ui/libs/css/common.scss at master · umicro/uView2.0 · GitHub_

<details markdown='1'><summary>多行省略号</summary>

在 CSS 中实现多行文本省略号，可以使用 `display: -webkit-box` 和一些其他属性。以下是一个示例代码，展示如何实现多行省略号效果：

```html
<div class="ellipsis">这是一段很长的文本，用于展示多行省略号的效果。我们希望当文本超过一定行数时，能够显示省略号，而不是让文本溢出。</div>
```

```css
.ellipsis {
  display: -webkit-box; /* 使用 flexbox 布局 */
  -webkit-box-orient: vertical; /* 垂直排列 */
  -webkit-line-clamp: 3; /* 限制显示的行数 */
  overflow: hidden; /* 隐藏溢出的内容 */
  text-overflow: ellipsis; /* 显示省略号 */
  height: 4.5em; /* 根据行高设置高度，3行文本大约为 4.5em */
  line-height: 1.5em; /* 设置行高 */
}
```

说明：

- `display: -webkit-box;` 和 `-webkit-box-orient: vertical;` 是为了启用多行文本的布局。
- `-webkit-line-clamp: 3;` 用于限制显示的行数，这里设置为 3 行。
- `overflow: hidden;` 隐藏超出容器的文本。
- `text-overflow: ellipsis;` 用于在文本溢出时显示省略号。
- `height` 和 `line-height` 的设置需要根据实际情况调整，以确保容器的高度适合所需的行数。

请注意，这种方法在某些浏览器中可能不完全支持，主要是 WebKit 内核的浏览器（如 Chrome 和 Safari）支持较好。对于其他浏览器，可能需要使用 JavaScript 进行更复杂的处理。

</details>

<details markdown='1'><summary>单行省略号</summary>

在 CSS 中实现单行文本省略号，可以使用 `overflow`, `white-space` 和 `text-overflow` 属性。以下是一个示例代码，展示如何实现单行省略号效果：

```html
<div class="ellipsis">这是一段很长的文本，用于展示单行省略号的效果。如果文本超出了容器的宽度，就会显示省略号。</div>
```

```css
.ellipsis {
  width: 200px; /* 设置容器的宽度 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏溢出的内容 */
  text-overflow: ellipsis; /* 显示省略号 */
}
```

说明：

- `width`：设置容器的宽度，文本超出这个宽度时会触发省略号。
- `white-space: nowrap;`：禁止文本换行，确保文本在一行内显示。
- `overflow: hidden;`：隐藏超出容器的文本。
- `text-overflow: ellipsis;`：在文本溢出时显示省略号。

这种方法在大多数现代浏览器中都得到了良好的支持。只需将上述 CSS 应用到你的元素上，就可以实现单行省略号效果。

</details>
