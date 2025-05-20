# Background 

- 水平或垂直平铺（设置背景图像是否及如何重复）

  - `background-repeat: no-repeat;`

- 设置背景图像的起始位置

  - `background-position: center;`

  - `background-size: cover;`

- 背景图像是否固定或者随着页面的其余部分滚动

  - `background-attachment: fixed;`

- 简写属性（[可参考菜鸟教程](https://www.runoob.com/css/css-background.html)）（[可参考MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)）

  - `body {background:#ffffff url('img_tree.png') no-repeat right top;}`

#### 背景色

> From Bootstrap https://v5.bootcss.com/docs/utilities/background/

- -bg-primary  
    <span style="color: #fff;background-color: #337ab7;">color: #fff;background-color: #337ab7;</span>
- -bg-success  
    <span style="background-color: #dff0d8;">background-color: #dff0d8;</span>
- -bg-info  
    <span style="background-color: #d9edf7;">background-color: #d9edf7;</span>
- -bg-warning  
    <span style="background-color: #fcf8e3;">background-color: #fcf8e3;</span>
- -bg-danger  
    <span style="background-color: #f2dede;">background-color: #f2dede;</span>
- -bg-light  
    <span style="background-color: #f8f9fa!important;">background-color: #f8f9fa!important;</span>
- -bg-white  
    <span style="background-color: #fff!important;">background-color: #fff!important;</span>

#### 渐变背景

- -bg-gradient-primary
- -bg-gradient-secondary
- -bg-gradient-success
- -bg-gradient-danger
- -bg-gradient-warning
- -bg-gradient-info
- -bg-gradient-light
- -bg-gradient-dark

#### 背景大小

- -bg-xxs
- -bg-xs
- -bg-sm
- -bg-default
- -bg-lg
- -bg-xl
- -bg-xxl
- -bg-xxxl

#### 背景图

- 页面背景容器（整个网页面的容器，防止页面滚动、不同设备打开出现的补白情况）

  ```css
  -bg-i-page-container {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
  }
  -bg-i-page-container img {
      width: 100%;
      height: 100%;
  }
  ```

  例子：

  ```css
  -bg-i-share {
      background: rgb(48, 118, 206) url("assets/i/background/bg-i-share.png") center/cover no-repeat;
  }
  ```

- 页面背景
  - -bg-i-page-primary {}

- 元素背景
  - -bg-i-box-primary {}

- 背景图形状命名
  - 圆形 circle / round
  - 正方形 square
  - 长方形 rectangle

- 背景图色系命名
  - 深色 dark
  - 浅色 light
