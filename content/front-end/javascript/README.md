## 官方

1. https://www.runoob.com/js/js-tutorial.html - _JavaScript 教程 | 菜鸟教程_

2. https://www.wangdoc.com/javascript/ - _JavaScript 教程 - 网道_

3. https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript - _JavaScript - 学习 Web 开发 | MDN_

## 运行环境

- 浏览器编程：browser

- 服务器编程：node.js

## Version

- ECMAScript5

- ECMAScript6

## Index

https://www.ruanyifeng.com/blog/2014/10/event-loop.html - *JavaScript 运行机制详解：再谈Event Loop*

https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html - *JavaScript Source Map 详解*

- 异步编程
  - <https://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html> - *Javascript异步编程的4种方法*
  - https://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html - *JavaScript与有限状态机*

## Guide

### 基础

- 代码规范
  - 变量命名：驼峰法（camelCase）
- 数据类型

- JS HTML DOM（文档对象模型）
- JS 浏览器 BOM
- JS 对象


#### 对象

JavaScript对象

Browser对象（BOM）

DOM对象（DOM）

HTML对象



InnerHTML

innerText

Length

Value



#### 属性

- 获取属性

- 设置属性

 

#### 事件

- 单击

- 双击

 

#### 数据类型

- 整型

- 浮点型

- 字符串

- 布尔型

- 数组

- 对象



### 进阶

#### webpack

https://webpack.js.org/

https://www.webpackjs.com/ - _webpack 中文文档 | webpack 中文网_


#### 模块化编程 🔥

  1. https://www.ruanyifeng.com/blog/2012/10/javascript_module.html - *Javascript模块化编程（一）：模块的写法*
  2. https://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html - *Javascript模块化编程（二）：AMD规范*
  3. https://www.ruanyifeng.com/blog/2012/11/require_js.html - *Javascript模块化编程（三）：require.js的用法*
  4. https://www.ruanyifeng.com/blog/2014/09/package-management.html - *前端模块管理器简介*


https://www.freesion.com/article/87991328477/ - *node.js npm和包 + 搭建Http服务器 + i5ting_toc(将md文件转化为html文件) - 灰信网（软件开发博客聚合）*

https://blog.csdn.net/a562550212/article/details/95751478 - _JS模块介绍_鬼谷中妖的博客-CSDN博客_js模块_

<https://v2.cn.vuejs.org/v2/guide/installation.html#对不同构建版本的解释> - _安装 — Vue.js_


##### ES Module 1️⃣

> EcmaScript Module

<https://es6.ruanyifeng.com/#docs/module#概述> - *Module 的语法 - ECMAScript 6入门*


##### UMD

https://github.com/umdjs/umd - _UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere._


##### CommonJS

http://javascript.ruanyifeng.com/nodejs/module.html#toc0 - _CommonJS规范 -- JavaScript 标准参考教程（alpha）_

https://wiki.commonjs.org/wiki/Modules/1.1 - _Modules/1.1 - CommonJS Spec Wiki_


##### CMD

https://www.zhangxinxu.com/sp/seajs/


##### AMD

https://requirejs.org/


## HTML 对象

https://www.runoob.com/jsref/dom-obj-anchor.html

## HTML DOM

> 当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

https://www.runoob.com/js/js-htmldom.html - *JavaScript HTML DOM | 菜鸟教程*

### 查找 HTML 元素

`document.getElementById();`

`document.getElementsByTagName();`

`document.getElementsByClassName();`

### 改变 HTML

- 改变 HTML 输出流

  `document.write();`

- 改变 HTML 内容

  `document.getElementById(id).innerHTML = 新的 HTML`

- 改变 HTML 属性

  `document.getElementById(id).attribute = 新属性值`

  `document.getElementById("image").src = "landscape.jpg";`

### 改变 CSS

- 改变 HTML 样式

  `document.getElementById(id).style.property = 新样式`

  `document.getElementById("p2").style.color = "blue";`

### 创建 HTML 元素

https://www.runoob.com/js/js-htmldom-elements.html - *JavaScript HTML DOM 元素 (节点)*

- 创建新的 HTML 元素 (节点) - appendChild()

  ```javascript
  var para = document.createElement("p");
  var node = document.createTextNode("这是一个新的段落。");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
  ```

- 创建新的 HTML 元素 (节点)

  ```javascript
  insertBefore();
  ```

- 移除已存在的元素

  ```javascript
  element.removeChild(element);
  ```

- 替换 HTML 元素 - replaceChild()

  ```javascript
  element.replaceChild(new_element, old_element);
  ```

### HTML DOM 事件

- HTML 事件属性

  ```html
  <button onclick="this.innerHTML='Ooops!'">点击</button>
  ```

- 使用 HTML DOM 来分配事件

  ```javascript
  <script>
    document.getElementById("myBtn").onclick = function(){
      displayDate();
    };
  </script>
  ```

- 事件

  https://www.runoob.com/jsref/dom-obj-event.html - *HTML DOM 事件*

  1. onload
  2. onunload
  3. onchange
  4. onmouseover
  5. onmouseout
  6. onmousedown
  7. onmouseup
  8. onclick
  9. ...

### EventListener

https://www.runoob.com/js/js-htmldom-eventlistener.html - _JavaScript HTML DOM EventListener | 菜鸟教程_

语法

```javascript
element.addEventListener(event, function, useCapture);

element.removeEventListener(event, function, useCapture);
```



### 对象

> 划分对象属性和对象方法

#### Document 对象

https://www.runoob.com/jsref/dom-obj-document.html - *HTML DOM Document 对象HTML DOM Document 对象*

1. [document.write();](https://www.runoob.com/jsref/met-doc-write.html) 向文档写 HTML 表达式 或 JavaScript 代码。

2. [document.URL;](https://www.runoob.com/jsref/prop-doc-url.html) 返回文档完整的URL

3. [document.querySelector();](https://www.runoob.com/jsref/met-document-queryselector.html) 返回文档中匹配指定 CSS 选择器的一个元素。（querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。）

4. ...

#### 元素对象

https://www.runoob.com/jsref/dom-obj-all.html - *HTML DOM 元素对象*

1. element.appendChild() 为元素添加一个新的子元素
2. element.attributes 返回一个元素的属性数组
3. element.children 返回元素的子元素的集合
4. ...

#### 属性对象

https://www.runoob.com/jsref/dom-obj-attributes.html - *HTML DOM 属性 对象*

1. attr.name 返回属性名称
2. attr.value 设置或者返回属性值
3. ...

#### 事件对象

https://www.runoob.com/jsref/dom-obj-event.html - *HTML DOM 事件*

1. onclick 当用户点击某个对象时调用的事件句柄。

2. oncontextmenu 在用户点击鼠标右键打开上下文菜单时触发

3. ...

#### Console 对象

https://www.runoob.com/jsref/obj-console.html

1. assert() 如果断言为 false，则在信息到控制台输出错误信息。

2. clear() 清除控制台上的信息。

3. ...

#### CSS 样式声明对象(CSSStyleDeclaration)

https://www.runoob.com/jsref/obj-cssstyledeclaration.html

1. cssText 设置或返回样式声明文本，cssText 对应的是 HTML 元素的 style 属性。

2. length 返回样式中包含多少条声明。

3. ...

#### DOM HTMLCollection

https://www.runoob.com/jsref/dom-htmlcollection.html

1. item() 返回 HTMLCollection 中指定索引的元素。

2. length 返回 HTMLCollection 中元素的数量。

3. namedItem() 返回 HTMLCollection 中指定 ID 或 name 属性的元素。
4. ...



## 浏览器 BOM

https://www.runoob.com/js/js-window.html - *JavaScript Window - 浏览器对象模型*

### Browser 对象

> 划分对象属性和对象方法

#### Window 对象

https://www.runoob.com/jsref/obj-window.html

#### Navigator 对象

https://www.runoob.com/jsref/obj-navigator.html

#### Screen 对象

https://www.runoob.com/jsref/obj-screen.html

#### History 对象

https://www.runoob.com/jsref/obj-history.html

#### Location 对象

https://www.runoob.com/jsref/obj-location.html

#### 存储对象

https://www.runoob.com/jsref/obj-storage.html

## Form

表单 `enctype` 属性：

1. 默认属性：`application/x-www-form-urlencoded`，只处理表单域中的value属性值，采用这种编码的方式的表单会将表单域的值处理成 url 编码方式
2. `multipart/form-data`，这种编码方式的表单会以二进制流的方法来处理表单数据。这种编码方式会将文件域指定文件的内容也封装到请求参数里
3. `text/plain`，这种方式主要适用于直接通过表单发送邮件的方式



### FormData

<https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects> - *FormData 对象的使用 - Web API 接口参考 | MDN*

用一些键值对来模拟一系列表单空间：即把 form 中所有表单元素的 name 与 value 组装成一个 queryString

```js
let formData = new FormData();  // 实例
formData.append('user', 'ccc');  // 新增
formData.get('user');  // 获取
formData.append('user');  // 删除
```



使用 `FormData` 对象发送文件

```js
var file = document.querySelector('[type=file]');

// 通过FormData将文件转成二进制数据
var formData = new FormData();

// 将文件转二进制
formData.append('upload', file.files[0]);

$.ajax({
    url: 'file.php',
    type: 'POST',
    data: formData,  // 上传formdata封装的数据
    dataType: 'JSON',
    cache: false,  // 不要缓存
    processData: false,  // jQuery不要去处理发送的数据
    contentType: false,  // jQuery不要去设置Content-Type的请求头
    success: function(data) {  // 成功回调
        console.log(data);
    }
});
```



## Ajax

https://www.runoob.com/ajax/ajax-tutorial.html - *AJAX 教程 | 菜鸟教程*

## FAQ

### a标签响应onclick事件，并且不执行href动作

```html
<a href="javascript:void(0)" onclick="doSomething()">链接</a>

<a href="https://www.baidu.com/" onclick="doSomething();return false;">链接</a>

<a href="https://www.baidu.com/" onclick="doSomething();event.returnValue=false;">链接</a>

<a href='#' disabled='true'>链接</a>
```

```javascript
// 使用js移除属性href这个方法才是最可靠最有效的，a.removeAttribute("href"); //经测试

event.preventDefault(); // 如果<a>定义了 target="_blank“ 需要这句来阻止打开新页面
```

### jquery多个选择器绑定同一个事件

```js
$(".saleinfo-list-title, #productIntroduce, .arrow").click(function() {
    // 处理过程
});
```



### Jquery手册事件处理on、bind

 

jQuery获取清空 input 值的几种方法

```javascript
$("#id").val("");
```

```javascript
$("input").attr("value",""); 
```

### 限制input输入框输入的长度

1. style 属性中添加 `minlength="4" maxlength="4"`

2. 添加属性 `minlength="4" maxlength="4"` 

### jquery加载页面的方法(页面加载完成就执行),建议大家看下windows.onload与$(document).ready之间的区别。

HTML：

```html
<input type="button" id="a">点击</input>
<script>
  // 页面需要引用 jquery 的 js 文件
</script>
```

JavaScript：

```js
$(function(){
    $("#a").click(function(){
        //adding your code here
    });
});
```

```js
$(document).ready(function(){
    $("#a").click(function(){
        //adding your code here
    });
});
```

```js
window.onload = function(){
    $("#a").click(function(){
        //adding your code here
    });
}
```

一般的加载页面时调用 js 方法如下：

```js
window.onload = function() { 
    $("table tr:nth-child(even)").addClass("even"); //这个是jquery代码
}; 
```

这段代码会在整个页面的 document 全部加载完成以后执行。不幸的这种方式不仅要求页面的 DOM tree 全部加载完成，而且要求所有的外部图片和资源全部加载完成。更不幸的是，如果外部资源，例如图片需要很长时间来加载，那么这个js效果就会让用户感觉失效了。 



但是用 jquery 的方法： 

```js
$(document).ready(function() {
    // 任何需要执行的js特效
    $("table tr:nth-child(even)").addClass("even"); 
}); 
```



就仅仅只需要加载所有的DOM结构，在浏览器把所有的HTML放入DOM tree之前就执行js效果。包括在加载外部图片和资源之前。 

还有一种简写的方式：

```javascript
$(function() {
    // 任何需要执行的js特效
    $("table tr:nth-child(even)").addClass("even");
});
// 语法
$(function(){}); //页面加载时自动调用
```

```javascript
$(window).load(funtion(){}); //页面加载完之后自动加载，用处吧，就是比如我们页面某些元素是在页面加载时从同台获取数据，并拼接显示出来；但是同时又在页面加载好之后马上使用到这个元素此时就可以结合这两个函数时候，不然单单调用 $(function(){}); 经常会出现 undefined。
```



```js
// 语法 1
$(function() {
    // 任何需要执行的js特效
    $("table tr:nth-child(even)").addClass("even");
});

// 语法 2
$(document).ready(function(){
    $("#name").click(function(){
        //codding
    }); 
});

// 语法 3
window.onload = function(){
    $("#name").click(function(){
        //codding
    });
}
```



Demo 

```js
$(function(){
    //('页面加载中...');
    //DOM tree已经渲染完成
})

window.onload = function(){
    //('页面渲染完成');
    //DOM tree全部加载完成，而且要求所有的外部图片和资源全部加载完成
}
```

> [!TIP]
>
> 后面两种的区别
>
> 1. 执行的时机不同 
>
>    window.onload 要等整个窗口（包括图片）都加载完才触发执行
>
>    $(document).ready() 在 DOM 结构绘制完成后就可执行 
>
> 2. 编写的个数 
>
>    window.onload 编写多个时，只有最后的那起作用
>
>    $(document).ready() 可以编写多个，都生效
>
> 3. 简化写法 
>
>    window.onload 无
>
>    $(document).ready() 可简写为 ()
>
> Tip ：jQuery 中真正与 window.onload 完全等价的是 $(window).load() 方法

### js中location.href的用法

https://www.cnblogs.com/wmcoder/p/5688988.html

### 按钮点击事件绑定--onClick事件

https://blog.csdn.net/kye055947/article/details/79619538

### Jquery on 绑定未来元素

```js
$('.cla').on('click',function(){
    alert('aa');
});
```



发现以上写法不能将事件绑定到动态创建的对象上，更改后的写法为

```js
$(document).on('click','.cla',function(){
    alert('aa');
});
```



此写法验证可行，道理是通过前辈对象找到下面的 '.cla' 元素后绑定 click 事件。



### Button onclick 实现页面跳转

```html
onclick="javascript:window.location.href='aa.htm'"

onclick="location='URL'"

onclick="window.location.href='#'"

<!-- 在按钮外面扩一个`<a>`标签就好了 -->
<a href="路径">
  <input type="button"></input>
</a>
```

### js中json数据的处理

https://blog.csdn.net/cgj19960119/article/details/84987426

json对象：

````javascript
var obj = {"name":"xiao","age":12};
````

json数组：

```javascript
var objArray = [{"name":"xiao","age":12},{"name":"xiao","age":12}];
```

json字符串：

```javascript
var jsonString = '{"name":"xiao","age":12}';
```

类型转换：

```js
// Json字符串—>JS对象：
obj = JSON.parse(jsonString);
obj = jQuery.parseJSON(jsonString);

// Note：传入畸形json字符串(例如：‘{name:"xiao",age:12}')，会抛出异常；
// Json字符串格式，严格格式：‘{"name":"xiao","age":12}'

// JS对象—>Json字符串：
json_str = JSON.stringify(obj);
```



### js中字符串全部替换

https://www.cnblogs.com/cblogs/p/9293522.html

语法

```javascript
str.replace(/需要替换的字符串/g，"新字符串");
```

实例

```javascript
"yyyy-MM-dd-hh-mm-ss".replace(/-/g,"/") // 结果："yyyy/MM/dd/hh/mm/ss"
```



### js跳转至页面底部

https://zhidao.baidu.com/question/308832148.html - *jQuery实现方式不一样的跳转到底部*

https://blog.csdn.net/weixin_43708754/article/details/103123272 - *HTML进入页面自动滚动到底部(最佳)(HTML聊天界面常用)jq;jquery;*

> [!NOTE]
>
> 当div层有滚动层，跳转至底部会没反应，需要在滚动层设定高度值

```js
$(function() {
    window.scrollTo(0, document.body.scrollHeight);
})
```

```html
<a href="javascript:;" id="top">返回顶部</a>
<script>
  $('#top').click(function() {
    $('html,body').animate({
        scrollTop: '0'
    }, 1000);
    return false;
});
</script>
```

```html
<a href="javascript:;" id="foot">跳到底部</a>
<script>
  $('#foot').click(function() {
    $('html,body').animate({
        scrollTop: $(document).height()
    }, 1000);
    return false;
});
</script>
```

```html
<a href="javascript:;" id="div">跳到指定位置</a>
<script>
  $('#div').click(function() {
    $('html,body').animate({
        scrollTop: $(this).offset().top
    }, 1000);
    return false;
});
</script>
```

https://zhidao.baidu.com/question/308832148.html - *html 如何让网页一打开就直接显示最底部的部分*

https://bbs.csdn.net/topics/60457054 - *一张html网页，如何让它打开时就定位在底部？*

```html
<!--锚点处-->
<a name="zhidao"></a>
<script>
  //自动跳转到锚点处
  window.location ="#zhidao";
</script>
```

### 前端知识点：防抖节流

~~https://www.javascriptcn.com/read-91316.html~~

### 重绘 、回流

~~https://www.jianshu.com/p/ae1f2bd0d08f~~
