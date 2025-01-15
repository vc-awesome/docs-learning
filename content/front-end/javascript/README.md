# JavaScript

## 简介

> JavaScript 是一种轻量级的脚本语言。所谓“脚本语言”（script language），指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序（比如浏览器）的“脚本”。
>
> JavaScript 也是一种嵌入式（embedded）语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。
>
> —— <cite>[导论 - JavaScript 教程 - 网道](https://wangdoc.com/javascript/basic/introduction)</cite>

## 官方

https://github.com/tc39 - *Ecma TC39 · GitHub*

https://github.com/tc39/ecma262/ - *GitHub - tc39/ecma262: Status, process, and documents for ECMA-262*

![GitHub last commit](https://img.shields.io/github/last-commit/tc39/ecma262?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/tc39/ecma262?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/tc39/ecma262?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/tc39/ecma262?style=social)

## 教程

1. https://www.runoob.com/js/js-tutorial.html - *JavaScript 教程 | 菜鸟教程*

2. https://wangdoc.com/javascript/ - *JavaScript 教程 - 网道* [GitHub Repo](https://github.com/wangdoc/javascript-tutorial)

    ![GitHub last commit](https://badgen.net/github/last-commit/wangdoc/javascript-tutorial?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/wangdoc/javascript-tutorial?style=social)

3. https://wangdoc.com/es6/ - *ES6 教程 - 网道* [GitHub Repo](https://github.com/wangdoc/es6-tutorial)

    ![GitHub last commit](https://badgen.net/github/last-commit/wangdoc/es6-tutorial?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/wangdoc/es6-tutorial?style=social)

4. https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript - *JavaScript - 学习 Web 开发 | MDN*

## 运行环境

- 浏览器编程：*Browser*

- 服务器编程：*Node.js*

## 入门指南

### 基础

#### 代码规范

变量命名（驼峰法）：

*camelCase*，例：`firstName`

函数命名（小驼峰法）：

*lowerCamelCase*，例：`toCelsius`

全局变量命名（大写）：

*UPPER_CASE*，例：`GLOBAL_VAR`

常量命名（大写）：

*UPPERCASE*，例：`PI`

参考：

1. https://wangdoc.com/javascript/features/style - *编程风格 - JavaScript 教程 - 网道*
2. https://www.runoob.com/js/js-conventions.html - *JavaScript 代码规范 | 菜鸟教程*
3. http://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html - *Javascript编程风格 - 阮一峰的网络日志*

##### 区块

JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。

```javascript
{
  var a = 1;
}

a // 1
```

参考：

1. <https://wangdoc.com/javascript/basic/grammar#区块> - *JavaScript 的基本语法 - JavaScript 教程 - 网道*

##### 语句

<https://wangdoc.com/javascript/basic/grammar#语句> - *JavaScript 的基本语法 - JavaScript 教程 - 网道*

###### 表达式

暂无

##### 圆括号

圆括号（parentheses）在 JavaScript 中有两种作用，一种表示函数的调用，另一种表示表达式的组合（grouping）。

<https://wangdoc.com/javascript/features/style#圆括号> - *编程风格 - JavaScript 教程 - 网道*

#### 注释

<https://wangdoc.com/javascript/basic/grammar#注释> - *JavaScript 的基本语法 - JavaScript 教程 - 网道*

#### 调试

https://wangdoc.com/javascript/features/console - *console 对象与控制台 - JavaScript
教程 - 网道*

`console.log({ window, document });`

`debugger;`

#### 变量

<https://wangdoc.com/javascript/basic/grammar#变量> - *JavaScript 的基本语法 - JavaScript 教程 - 网道*

- 声明变量

    - var
    - let
    - const

- 赋值

##### 全局变量

暂无

##### 变量提升

https://www.runoob.com/js/js-hoisting.html - *JavaScript 声明提升 | 菜鸟教程*

<https://wangdoc.com/javascript/basic/grammar#变量提升> - *JavaScript 的基本语法 - JavaScript 教程 - 网道*

#### 数据类型

https://www.runoob.com/js/js-datatypes.html - *JavaScript 数据类型 | 菜鸟教程*

##### 数值

暂无

###### 浮点型

https://www.runoob.com/w3cnote/010203.html - *0.1 + 0.2 不等于 0.3 ？这是为什么？一篇讲清楚！！！ | 菜鸟教程*

##### 字符串

暂无

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

###### 数组

https://www.runoob.com/js/js-obj-array.html - *JavaScript Array（数组）对象 | 菜鸟教程*

###### 函数

https://wangdoc.com/javascript/types/function - *函数 - JavaScript 教程 - 网道*

##### Undefined

https://wangdoc.com/javascript/types/null-undefined-boolean - *null, undefined 和布尔值 - JavaScript 教程 - 网道*

##### Null

https://www.runoob.com/w3cnote/detect-empty-javascript-object.html - *如何判断 JavaScript 对象是否为空？ | 菜鸟教程*

https://www.runoob.com/w3cnote/javascript-check-null-undefined.html - *JavaScript 判断空值、NULL、undefined的方法 | 菜鸟教程*

##### 布尔值

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 `false`，其他值都视为 `true`。

1. `undefined`
2. `null`
3. `false`
4. `0`
5. `NaN`
6. `""` 或 `''`（空字符串）

参考：

1. <https://wangdoc.com/javascript/types/null-undefined-boolean#布尔值> - *null, undefined 和布尔值 - JavaScript 教程 - 网道*
2. https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy - *真值 - MDN Web 文档术语表：Web 相关术语的定义 | MDN*

##### 数据类型判断

1. <https://wangdoc.com/javascript/types/general#typeof-运算符> - *数据类型概述 - JavaScript 教程 - 网道*

2. <https://wangdoc.com/javascript/stdlib/object#tostring-的应用判断数据类型> - *Object 对象 - JavaScript 教程 - 网道*

3. https://github.com/chaijs/type-detect - *GitHub - chaijs/type-detect: Improved typeof detection for node.js and the browser.*

    ![GitHub last commit](https://badgen.net/github/last-commit/chaijs/type-detect?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/chaijs/type-detect?style=social)

#### 运算符

1. https://wangdoc.com/javascript/operators/ - *运算符 - JavaScript 教程 - 网道*
2. https://wangdoc.com/es6/operator - *运算符的扩展 - ES6 教程 - 网道*

#### 函数

JS 设置一个变量为函数名称，然后执行这个变量会执行函数

```javascript
// 定义一个函数
function sayHello() {
  console.log("Hello, world!");
}
  
// 定义一个变量，并将函数的引用赋值给它
var myFunction = sayHello;
  
// 通过变量来调用函数
myFunction(); // 输出: Hello, world!
```

```javascript
function fn1() {
  console.log(123)
}

function fn2() {
  console.log(456)
}

function fn3() {
  console.log(789)
}

let a = {
  fn1,
  fn2,
  fn3
}

let index = 1
let fnName = 'fn' + index

a[fnName]() 
// 最终输出123
```

参考：

1. https://blog.csdn.net/WanweI897/article/details/124397923 - *js用变量保存函数名，并使用该变量调用函数的方式_js中变量怎么存一个function-CSDN博客*
2. https://www.delftstack.com/zh/howto/javascript/javascript-call-function-by-name/ - *在 JavaScript 中按名称调用函数 | D栈 - Delft Stack*

##### 立即调用的函数表达式（IIFE）

```javascript
(function () { /* code */ }());
// 或者
(function () { /* code */ })();
```

##### 匿名函数

```javascript
var print = function (s) {
  console.log(s);
};

print(1); // 1
print.name; // print
```

##### 具名函数

```javascript
var print = function x() {
  console.log(typeof x);
};

x
// ReferenceError: x is not defined

print()
// function

print.name; // x
```

##### 回调函数

<https://wangdoc.com/javascript/async/general#回调函数> - *异步操作概述 - JavaScript 教程 - 网道*

https://blog.csdn.net/weixin_46001736/article/details/134007859 - *uni-app：解决异步请求返回值问题_uniapp异步数据赋值-CSDN博客*

1. 前奏

    代码 demo

    ```javascript
    function say(value) {
      alert(value);
    }
    
    alert(say);
    alert(say('hi js.'));
    ```

    运行总结

    > 只写变量名 say 返回的将会是 say 方法本身，以字符串的形式表现出来。
    而在变量名后加 `()` 如 `say()` 返回的就会使 say 方法调用后的结果，这里是弹出 value 的值。

2. js 中函数可以作为参数传递

    第一段代码

    ```javascript
    function say(value) {
      alert(value);
    }
    
    function execute(someFunction, value) {
      someFunction(value);
    }
    
    execute(say, 'hi js.');
    ```

    第二段代码

    ```javascript
    function execute(someFunction, value) {
      someFunction(value);
    }
    
    execute(function (value) {
      alert(value);
    }, 'hi js.');
    ```

    > 第一段代码是将 say 方法作为参数传递给 execute 方法 
    第二段代码则是直接将匿名函数作为参数传递给 execute 方法

    实际上

    ```javascript
    function say(value) {
      alert(value);
    }

    // 注意看下面,直接写 say 方法的方法名与下面的匿名函数可以认为是一个东西

    // 这样再看上面两段代码是不是对函数可以作为参数传递就更加清晰了
    say;

    function (value) {
      alert(value);
    }
    ```

    > 这里的 say 或者匿名函数就被称为回调函数。

3. 回调函数易混淆点——传参

    如果回调函数需要传参，如何做到，这里介绍两种解决方案。

    * 将回调函数的参数作为与回调函数同等级的参数进行传递

        ![](https://img-blog.csdn.net/20170210133828574?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmFpZHVfMzIyNjIzNzM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

    * 回调函数的参数在调用回调函数内部创建

        ![](https://img-blog.csdn.net/20170210134724086?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmFpZHVfMzIyNjIzNzM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

4. 应用场景

    > 回调函数应用场景多用在使用 js 写组件时，尤其是组件的事件很多都需要回调函数的支持

参考文档：

1. https://blog.csdn.net/baidu_32262373/article/details/54969696 - *js 彻底理解回调函数_js中的回调函数-CSDN博客*
2. http://www.jb51.net/article/59447.htm - *js的回调函数详解_javascript技巧_脚本之家*

##### 闭包

<https://wangdoc.com/javascript/types/function#闭包> - *函数 - JavaScript 教程 - 网道*

http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html - *学习Javascript闭包（Closure） - 阮一峰的网络日志*

#### return

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return - *return - JavaScript | MDN*

#### 异步操作

https://wangdoc.com/javascript/async/general - *异步操作概述 - JavaScript 教程 - 网道*

##### 定时器

https://wangdoc.com/javascript/async/timer - *定时器 - JavaScript 教程 - 网道*

##### Promise 对象

https://wangdoc.com/javascript/async/promise - *Promise 对象 - JavaScript 教程 - 网道*

https://wangdoc.com/es6/promise - *Promise 对象 - ES6 教程 - 网道*

### 进阶

#### 面向对象

构造函数

- 为了与普通函数区别，构造函数名字的第一个字母通常大写。

```javascript
var Vehicle = function () {
  this.price = 1000;
};

var v = new Vehicle();
v.price // 1000
```

#### this

1. https://wangdoc.com/javascript/oop/this - *this 关键字 - JavaScript 教程 - 网道*
2. http://www.hcoder.net/books/read_10104.html - *唔透 javascript this 关键字*
3. http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html - *Javascript 的 this 用法 - 阮一峰的网络日志*
4. http://www.ruanyifeng.com/blog/2018/06/javascript-this.html - *JavaScript 的 this 原理 - 阮一峰的网络日志*
5. https://mp.weixin.qq.com/s/H5_Z8xItRlOGvXzrDyGnWg - *学会这7个箭头函数用法，解决80%的this绑定问题！*

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

### Boolean 对象

https://wangdoc.com/javascript/stdlib/boolean - *Boolean 对象 - JavaScript 教程 - 网道*

### Number 对象

1. https://wangdoc.com/javascript/stdlib/number - *Number 对象 - JavaScript 教程 - 网道*

2. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number - *Number - JavaScript | MDN*

### String 对象

1. https://wangdoc.com/javascript/stdlib/string - *String 对象 - JavaScript 教程 - 网道*

2. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String - *String - JavaScript | MDN*

### JSON 对象

https://wangdoc.com/javascript/stdlib/json - *JSON 对象 - JavaScript 教程 - 网道*

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

参考：

1. https://wangdoc.com/javascript/bom/engine#url-协议 - *浏览器环境概述 - JavaScript 教程 -网道*
2. https://www.runoob.com/js/js-void.html - *javascript:void(0) 含义 | 菜鸟教程*
3. https://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html - *Bookmarklet编写指南 - 阮一峰的网络日志*

## polyfill

A **polyfill** is a piece of code (usually JavaScript on the web) that provides functionality that is not available in a particular environment. Polyfills are often used to implement APIs or features that are part of newer specifications in web development, especially when those features are not yet supported by all browsers or platforms.

For example, when a new feature is introduced in the ECMAScript (JavaScript) specification, it may take some time before all browsers fully support it. During this transition period, developers can use polyfills to "fill in" the missing functionality, allowing the feature to be used in older browsers as well.

### How Polyfills Work

Polyfills typically check if a feature is already implemented by the browser. If it isn't, the polyfill will define it. Here's a basic example:

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function (element) {
    // Polyfill implementation for Array.includes
    return this.indexOf(element) !== -1;
  };
}
```

In this example, the polyfill checks if the `Array.prototype.includes` method exists. If it doesn't, the polyfill defines it using an older method (`indexOf`).

### Common Use Cases

- **Backward Compatibility**: Ensuring modern JavaScript or CSS features work in older browsers.
- **Cross-Browser Consistency**: Providing consistent functionality across different web browsers.
- **Progressive Enhancement**: Allowing developers to use newer features while maintaining a functional baseline for unsupported environments.

### Popular Polyfills Libraries

Some popular polyfill libraries include:
- **core-js**: A modular polyfill library for modern JavaScript.
- **Babel**: Transpiles modern JavaScript code to be compatible with older environments, often including polyfills for new features.
- **Polyfill.io**: A service that detects the user's browser and delivers the necessary polyfills.

Using polyfills is a crucial practice in web development to maintain a broad compatibility range while adopting new web standards and features.

参考：

1. https://blog.csdn.net/weixin_47450807/article/details/123080204 - *什么是polyfill?-CSDN博客*
2. https://blog.csdn.net/C_ZhangSir/article/details/102490761 - *什么是polyfill-CSDN博客*
3. https://en.m.wikipedia.org/wiki/Polyfill_(programming) - *Polyfill (programming) - Wikipedia*

## 参考手册

1. https://www.runoob.com/jsref/jsref-tutorial.html - *JavaScript 和 HTML DOM 参考手册 | 菜鸟教程*
