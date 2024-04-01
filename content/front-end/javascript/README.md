# JavaScript

## 简介

> JavaScript 是一种轻量级的脚本语言。所谓“脚本语言”（script language），指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序（比如浏览器）的“脚本”。
>
> JavaScript 也是一种嵌入式（embedded）语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。
>
> —— <cite>[导论 - JavaScript 教程 - 网道](https://wangdoc.com/javascript/basic/introduction)</cite>

## 教程

1. https://www.runoob.com/js/js-tutorial.html - *JavaScript 教程 | 菜鸟教程*

2. https://www.wangdoc.com/javascript/ - *JavaScript 教程 - 网道*

3. https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript - *JavaScript - 学习 Web 开发 | MDN*

## 运行环境

- 浏览器编程：*Browser*

- 服务器编程：*Node.js*

## 入门指南

### 基础

#### 代码规范

1. https://wangdoc.com/javascript/features/style - *编程风格 - JavaScript 教程 - 网道*

2. https://www.runoob.com/js/js-conventions.html - *JavaScript 代码规范 | 菜鸟教程*

---

变量命名（驼峰法）：

*camelCase*，例：`firstName`

函数命名（小驼峰法）：

*lowerCamelCase*，例：`toCelsius`

全局变量命名（大写）：

*UPPER_CASE*，例：`GLOBAL_VAR`

常量命名（大写）：

*UPPERCASE*，例：`PI`

#### 调试

https://wangdoc.com/javascript/features/console - *console 对象与控制台 - JavaScript
教程 - 网道*

`console.log({ window, document });`

`debugger;`

#### 数据类型

https://www.runoob.com/js/js-datatypes.html - *JavaScript 数据类型 | 菜鸟教程*

- 整型

- 浮点型

- 字符串

- 布尔型

##### 数组

https://www.runoob.com/js/js-obj-array.html - *JavaScript Array（数组）对象 | 菜鸟教程*

##### 对象

https://wangdoc.com/javascript/types/object - *对象 - JavaScript 教程 - 网道*

- JavaScript 对象

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html) - “JavaScript 对象参考手册”

    “Number 对象方法”常用方法：
    1. [isNaN](https://www.runoob.com/jsref/jsref-isnan-number.html)

- Browser 对象（BOM）

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html) - “Browser 对象参考手册”

- DOM 对象（DOM）

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html) - “HTML DOM 参考手册”

- HTML 对象

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html) - “HTML DOM 元素对象参考手册”

    [element.innerHTML](https://www.runoob.com/jsref/prop-html-innerhtml.html) - *HTML DOM innerHTML 属性 | 菜鸟教程*

    [HTMLElement.innerText](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/innerText) - *HTMLElement.innerText - Web API 接口参考 | MDN*

##### 函数

https://wangdoc.com/javascript/types/function - *函数 - JavaScript 教程 - 网道*

##### Undefined

https://wangdoc.com/javascript/types/null-undefined-boolean - *null, undefined 和布尔值 - JavaScript 教程 - 网道*

##### Null

https://www.runoob.com/w3cnote/detect-empty-javascript-object.html - *如何判断 JavaScript 对象是否为空？ | 菜鸟教程*

https://www.runoob.com/w3cnote/javascript-check-null-undefined.html - *JavaScript 判断空值、NULL、undefined的方法 | 菜鸟教程*

##### 数据类型判断

1. https://wangdoc.com/javascript/types/general#typeof-运算符 - *数据类型概述 - JavaScript 教程 - 网道*

2. https://wangdoc.com/javascript/stdlib/object#tostring-的应用判断数据类型 - *Object 对象 - JavaScript 教程 - 网道*

3. https://github.com/chaijs/type-detect - *GitHub - chaijs/type-detect: Improved typeof detection for node.js and the browser.*

    ![GitHub last commit](https://badgen.net/github/last-commit/chaijs/type-detect?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/chaijs/type-detect?style=social)

#### 回调函数

1. 前奏

    代码 demo

    ```javascript
    function say (value) {
        alert(value);
    }
    alert(say);
    alert(say('hi js.'));
    ```

    运行总结

    > 只写变量名 say 返回的将会是 say 方法本身，以字符串的形式表现出来。
    而在变量名后加 `()` 如 `say()` 返回的就会使say方法调用后的结果，这里是弹出value的值。

2. js 中函数可以作为参数传递

    第一段代码

    ```javascript
    function say (value) {
        alert(value);
    }
    function execute (someFunction, value) {
        someFunction(value);
    }
    execute(say, 'hi js.');
    ```

    第二段代码

    ```javascript
    function execute (someFunction, value) {
        someFunction(value);
    }
    execute(function(value){alert(value);}, 'hi js.');
    ```

    > 第一段代码是将say方法作为参数传递给execute方法 
    第二段代码则是直接将匿名函数作为参数传递给execute方法

    实际上

    ```javascript
    function say (value) {
        alert(value);
    }

    // 注意看下面,直接写say方法的方法名与下面的匿名函数可以认为是一个东西

    // 这样再看上面两段代码是不是对函数可以作为参数传递就更加清晰了
    say;

    function (value) {
        alert(value);
    }
    ```

    > 这里的say或者匿名函数就被称为回调函数。

3. 回调函数易混淆点——传参

    如果回调函数需要传参，如何做到，这里介绍两种解决方案。

    * 将回调函数的参数作为与回调函数同等级的参数进行传递

        ![](https://img-blog.csdn.net/20170210133828574?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmFpZHVfMzIyNjIzNzM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

    * 回调函数的参数在调用回调函数内部创建

        ![](https://img-blog.csdn.net/20170210134724086?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmFpZHVfMzIyNjIzNzM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

4. 应用场景

    > 回调函数应用场景多用在使用 js 写组件时，尤其是组件的事件很多都需要回调函数的支持

参考文档：

1. https://blog.csdn.net/baidu_32262373/article/details/54969696
2. http://www.jb51.net/article/59447.htm

#### return

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return - *return - JavaScript | MDN*

### 进阶

#### this

1. https://wangdoc.com/javascript/oop/this - *this 关键字 - JavaScript 教程 - 网道*

2. http://www.hcoder.net/books/read_10104.html - *唔透 javascript this 关键字*

##### call/apply/bind

#### 对象的继承（原型）

 https://wangdoc.com/javascript/oop/prototype - *对象的继承 - JavaScript 教程 - 网道*
 
## 标准库

1. https://wangdoc.com/javascript/stdlib/ - *标准库 - JavaScript 教程 - 网道*

2. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects - *JavaScript 标准内置对象 - JavaScript | MDN*

### Object 对象

1. https://wangdoc.com/javascript/stdlib/object - *Object 对象 - JavaScript 教程 - 网道*

### Array 对象

1. https://wangdoc.com/javascript/stdlib/array - *Array 对象 - JavaScript 教程 - 网道*

`sort()` - sort() 方法就地对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。 [Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### Number 对象

1. https://wangdoc.com/javascript/stdlib/number - *Number 对象 - JavaScript 教程 - 网道*

2. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number - *Number - JavaScript | MDN*

### String 对象

1. https://wangdoc.com/javascript/stdlib/string - *String 对象 - JavaScript 教程 - 网道*

2. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String - *String - JavaScript | MDN*

## Source Map 用法

1. https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html - *JavaScript Source Map 详解*

## javascript: 用法

```js
<a href="javascript:void(0)">单击此处什么也不会发生</a>
```

```js
<a href="javascript:void(alert('Warning!!!'))">点我!</a>
```

```js
<a href="javascript:alert('Warning!!!')">点我!</a>
```

1. https://wangdoc.com/javascript/bom/engine#url-协议 - *浏览器环境概述 - JavaScript 教程 -
网道*

1. https://www.runoob.com/js/js-void.html - *javascript:void(0) 含义 | 菜鸟教程*

2. https://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html - *Bookmarklet编写指南 - 阮一峰的网络日志*

## 参考手册

1. https://www.runoob.com/jsref/jsref-tutorial.html - *JavaScript 和 HTML DOM 参考手册 | 菜鸟教程*
