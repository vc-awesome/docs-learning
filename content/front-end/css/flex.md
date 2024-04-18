# Flex

## 教程

1. http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html - _Flex 布局教程：语法篇_
2. https://www.ruanyifeng.com/blog/2015/07/flex-examples.html - _Flex 布局教程：实例篇_

## 属性

### 容器

#### flex-direction

属性决定主轴的方向（即项目的排列方向）。

#### flex-wrap

一条轴线排不下，换行。

#### flex-flow

`flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`。

#### justify-content

属性定义了项目在主轴（横轴）上的对齐方式。

#### align-items

属性定义项目在交叉轴上如何对齐。

#### align-content

属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
-flex-container {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}

-flex-item {
    flex: 1;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
}
```

> From HUI

- -flex

> From [Bootstrap v5](https://v5.bootcss.com/docs/utilities/flex/)

- container
    - row
    - row-cols-1
    - row-cols-2
    - row-cols-3
    - row-cols-4
    - row-cols-5
    - row-cols-6
    - align-items-start
    - align-items-center
    - align-items-end
    - justify-content-start
    - justify-content-center
    - justify-content-end
    - justify-content-around
    - justify-content-between
    - no-gutters
        - col
        - col-auto
        - col-1
        - col-2
        - col-3
        - col-4
        - col-5
        - col-6
        - col-7
        - col-8
        - col-9
        - col-10
        - col-11
        - col-12
    - align-self-start
    - align-self-center
    - align-self-end

```css
container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
row-cols-1>* {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
row-cols-2>* {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}
row-cols-3>* {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
row-cols-4>* {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}
row-cols-5>* {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%
}
row-cols-6>* {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%
}
.align-items-start {
    -ms-flex-align: start!important;
    align-items: flex-start!important;
}
.align-items-center {
    -ms-flex-align: center!important;
    align-items: center!important;
}
.align-items-end {
    -ms-flex-align: end!important;
    align-items: flex-end!important;
}
.justify-content-start {
    -ms-flex-pack: start!important;
    justify-content: flex-start!important;
}
.justify-content-center {
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
.justify-content-end {
    -ms-flex-pack: end!important;
    justify-content: flex-end!important;
}
.justify-content-around {
    -ms-flex-pack: distribute!important;
    justify-content: space-around!important;
}
.justify-content-between {
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
```

```css
.col {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
}
col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
}
.col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%
}
.col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%
}
.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
}
.col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%
}
.col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%
}
.col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
}
.col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%
}
.col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%
}
.col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
}
.col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%
}
.col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%
}
.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
}
```

### 项目

#### order

属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

order-first

order-last

order-1

order-2

order-3

order-4

order-5

order-6

order-7

order-8

order-9

order-10

order-11

order-12

```css
.order-first {
    -ms-flex-order: -1;
    order: -1
}
.order-last {
    -ms-flex-order: 13;
    order: 13
}
.order-0 {
    -ms-flex-order: 0;
    order: 0
}
.order-1 {
    -ms-flex-order: 1;
    order: 1
}
.order-2 {
    -ms-flex-order: 2;
    order: 2
}
.order-3 {
    -ms-flex-order: 3;
    order: 3
}
.order-4 {
    -ms-flex-order: 4;
    order: 4
}
.order-5 {
    -ms-flex-order: 5;
    order: 5
}
.order-6 {
    -ms-flex-order: 6;
    order: 6
}
.order-7 {
    -ms-flex-order: 7;
    order: 7
}
.order-8 {
    -ms-flex-order: 8;
    order: 8
}
.order-9 {
    -ms-flex-order: 9;
    order: 9
}
.order-10 {
    -ms-flex-order: 10;
    order: 10
}
.order-11 {
    -ms-flex-order: 11;
    order: 11
}
.order-12 {
    -ms-flex-order: 12;
    order: 12
}
```

#### flex-grow

属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

#### flex-shrink

属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

#### flex-basis

属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 `auto`，即项目的本来大小。

#### flex

属性是 `flex-grow`, `flex-shrink` 和 `flex-basis` 的简写，默认值为`0 1 auto`。后两个属性可选。

#### align-self

属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。默认值为 `auto`，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`。

```css
.align-self-start {
    -ms-flex-item-align: start!important;
    align-self: flex-start!important;
}
.align-self-center {
    -ms-flex-item-align: center!important;
    align-self: center!important;
}
.align-self-end {
    -ms-flex-item-align: end!important;
    align-self: flex-end!important;
}
```
