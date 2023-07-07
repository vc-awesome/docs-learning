## 简介

> JavaScript 是一种轻量级的脚本语言。所谓“脚本语言”（script language），指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序（比如浏览器）的“脚本”。
>
> JavaScript 也是一种嵌入式（embedded）语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。
>
> —— https://wangdoc.com/javascript/basic/introduction - *导论 - JavaScript 教程 - 网道*

## 教程

1. https://www.runoob.com/js/js-tutorial.html - _JavaScript 教程 | 菜鸟教程_

2. https://www.wangdoc.com/javascript/ - _JavaScript 教程 - 网道_

3. https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript - _JavaScript - 学习 Web 开发 | MDN_

## 运行环境

- 浏览器编程：_Browser_

- 服务器编程：_Node.js_

## 索引

https://www.ruanyifeng.com/blog/2014/10/event-loop.html - *JavaScript 运行机制详解：再谈Event Loop*

- 异步编程
  - <https://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html> - *Javascript异步编程的4种方法*
  - https://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html - *JavaScript与有限状态机*

## 入门指南

### 基础

#### 代码规范

https://www.runoob.com/js/js-conventions.html - *JavaScript 代码规范 | 菜鸟教程*

> 变量命名：驼峰法*（camelCase）*


#### 对象

- JavaScript 对象

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html)-“JavaScript 对象参考手册”
    
    “Number 对象方法”常用方法：
    1. [isNaN](https://www.runoob.com/jsref/jsref-isnan-number.html)

- Browser 对象（BOM）

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html)-“Browser 对象参考手册”

- DOM 对象（DOM）

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html)-“HTML DOM 参考手册”

- HTML 对象

    [JavaScript 和 HTML DOM 参考手册 | 菜鸟教程](https://www.runoob.com/jsref/jsref-tutorial.html)-“HTML DOM 元素对象参考手册”

[element.innerHTML](https://www.runoob.com/jsref/prop-html-innerhtml.html) - *HTML DOM innerHTML 属性 | 菜鸟教程*

[HTMLElement.innerText](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/innerText) - *HTMLElement.innerText - Web API 接口参考 | MDN*

#### 数据类型

https://www.runoob.com/js/js-datatypes.html - *JavaScript 数据类型 | 菜鸟教程*

- 整型

- 浮点型

- 字符串

- 布尔型

- 数组

- 对象

https://www.runoob.com/w3cnote/detect-empty-javascript-object.html - *如何判断 JavaScript 对象是否为空？ | 菜鸟教程*

https://www.runoob.com/w3cnote/javascript-check-null-undefined.html - *JavaScript 判断空值、NULL、undefined的方法 | 菜鸟教程*

### 进阶

## JavaScript Source Map 用法

https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html - *JavaScript Source Map 详解*

## JavaScript 参考手册

https://www.runoob.com/jsref/jsref-tutorial.html - *JavaScript 和 HTML DOM 参考手册 | 菜鸟教程*


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

https://www.runoob.com/js/js-void.html - *javascript:void(0) 含义 | 菜鸟教程*

https://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html - *Bookmarklet编写指南 - 阮一峰的网络日志*

## 常见问题

### jquery 多个选择器绑定同一个事件

```js
$(".saleinfo-list-title, #productIntroduce, .arrow").click(function() {
    // 处理过程
});
```

### jquery 手册事件处理 on、bind

### jquery获取清空 input 值的几种方法

```javascript
$("#id").val("");
```

```javascript
$("input").attr("value",""); 
```


### jquery 加载页面的方法(页面加载完成就执行),建议大家看下 windows.onload 与 $(document).ready之 间的区别。

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


### jquery on 绑定未来元素

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


### js location.href 的用法

https://www.cnblogs.com/wmcoder/p/5688988.html - *js中location.href的用法 - WKellyL - 博客园*


### js 如何打开链接

百度关键词搜索：[js打开链接](https://www.baidu.com/s?word=js打开链接)

https://cloud.tencent.com/developer/information/js如何打开链接 - *js如何打开链接_js 打开a链接_js 打开链接 - 腾讯云开发者社区 - 腾讯云*

- https://cloud.tencent.com/developer/article/1868570 - *JS 新窗口打开超链接 - 腾讯云开发者社区-腾讯云*


``` javascript
window.open("https://www.baidu.com/s?word=");
```


### js json 数据的处理

https://blog.csdn.net/cgj19960119/article/details/84987426 - *JS中json数据的处理_js json数据_不为人知的小小鸟的博客-CSDN博客*

json 对象：

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


### js 字符串全部替换

https://www.cnblogs.com/cblogs/p/9293522.html - *js中字符串全部替换 - HaydenChao - 博客园*

语法

```javascript
str.replace(/需要替换的字符串/g，"新字符串");
```

实例

```javascript
"yyyy-MM-dd-hh-mm-ss".replace(/-/g,"/") // 结果："yyyy/MM/dd/hh/mm/ss"
```


### js 跳转至页面底部

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


### js 全屏和退出全屏

https://www.cnblogs.com/DL-CODER/p/16601933.html - *JS 全屏与退出全屏 - DL·Coder - 博客园*


### js 浏览器元素尺寸与位置查询

https://lequ7.com/liu-lan-qi-yuan-su-chi-cun-yu-wei-zhi-cha-xun-zhi-nan.html - *浏览器元素尺寸与位置查询指南 - 乐趣区*

https://cloud.tencent.com/developer/article/2109248 - *JS 获取浏览器窗口大小clientWidth、offsetWidth、scrollWidth「建议收藏」-腾讯云开发者社区-腾讯云*

### js 判断对象是否为空

```js
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
```

参考：https://www.runoob.com/w3cnote/detect-empty-javascript-object.html - *如何判断 JavaScript 对象是否为空？ | 菜鸟教程*

### js 判断空值、NULL、undefined的方法

参考：https://www.runoob.com/w3cnote/javascript-check-null-undefined.html - *JavaScript 判断空值、NULL、undefined的方法 | 菜鸟教程*

### 前端知识点：防抖节流

~~https://www.javascriptcn.com/read-91316.html~~

https://blog.csdn.net/shaohao_123/article/details/121408502 - *浏览器页面的加载过程-回流-重绘-浏览器-服务器_浏览器加载过程_少昊~的博客-CSDN博客*


### 重绘 、回流

~~https://www.jianshu.com/p/ae1f2bd0d08f~~

https://suanmei.github.io/2017/02/13/reflow-repaint/ - *回流与重绘及优化 | 拾壹小筑*


### 判断是否存在某个 class

```javascript
// 判断是否存在某个 class
if (document.querySelector(".className").getAttribute("class").indexOf("docsify-code-text-wrap-on") != -1) {
    // 存在
    e.classList.remove('docsify-code-text-wrap-on'),
    n.removeAttribute("style");
} else {
    // 不存在
    e.classList.add('docsify-code-text-wrap-on'),
    n.style = "white-space: pre-wrap;overflow-wrap: anywhere;";
}
```


### 判断文本是否溢出

```javascript
// JS 判断文本是否溢出
// console.log(o.firstElementChild)
// 当前容器的宽度
var containerLength = o.firstElementChild.offsetWidth;
// 当前文字（包括省略部分）的宽度
var textLength = o.firstElementChild.scrollWidth; 
// console.log("containerLength:" + containerLength);
// console.log("textLength", textLength);
if (textLength > containerLength) {
  // 文本溢出增加折行按钮
  o.insertAdjacentHTML("beforeend", e);
}
```

https://blog.csdn.net/GrootBaby/article/details/95950773 - *JS 判断文本是否溢出容器_js判断文本是否溢出__格鲁特宝宝的博客-CSDN博客*

https://blog.csdn.net/mouday/article/details/127982924 - *js:判断文本溢出隐藏生效text-overflow: ellipsis_js判断文本是否溢出_彭世瑜的博客-CSDN博客*


### 点击某元素以外的地方触发事件

https://blog.csdn.net/qq_33933205/article/details/108262805 - *JS 点击某元素以外的地方触发事件 - Kaiqisan_点击元素外触发事件_kaiqisan的博客-CSDN博客*

### 操作伪类、元素 \:hover

实例：

```css
h1:hover {
  color: red;
}
h1 {
  /*属性值设为 none ，上面的样式不出触发*/
  pointer-events: none;
}
```

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>demo</title>
  </head>
  <style type="text/css">
    h1:hover {
      color: red;
    }
    h1 {
      /*属性值设为 none ，上面的样式不出触发*/
      pointer-events: none;
    }
  </style>
  <body>
    <h1>Hello, world!</h1>
    <p>将鼠标放到 Hello, world! 上看看效果，然后点我试试</p>
    <script>
      var num = 0;
      document.querySelector("p").addEventListener("click", function(e) {
        // h1 属性值 pointer-events 设置为 auto，则可触发 h1:hover 样式
        document.querySelector("h1").style.pointerEvents = "auto";
        if (!num) {
          this.innerHTML += "（<small>再将鼠标放上去看看效果吧</small>：）"
        }
        num += 1;
      }, true)
    </script>
  </body>
</html>
```

参考：

1. https://blog.csdn.net/c_furong/article/details/126174590 - *css添加伪元素(before、after)并为伪元素添加点击事件_css伪元素点击事件_IT酷盖的博客-CSDN博客*

2. https://blog.csdn.net/a486259/article/details/81163995/ - *JS工具方法 4 伪元素点击事件实现的两种方法_万里鹏程转瞬至的博客-CSDN博客*

3. https://blog.csdn.net/qq_25211081/article/details/118655062 - *JS操作CSS伪元素_js添加伪元素_du青松的博客-CSDN博客*

4. https://blog.csdn.net/Kerwin__li/article/details/129122358 - *前端 伪类元素如何添加点击事件_伪类点击事件_Kerwin__li的博客-CSDN博客*

5. https://www.bbsmax.com/A/LPdo8MrOz3/ - *使用JS控制伪元素的几种方法*

6. https://blog.csdn.net/xiaojian_521/article/details/123757021 - *(学习笔记) js获取伪元素_小剑_x的博客-CSDN博客*

7. https://blog.csdn.net/weixin_44276779/article/details/127654563 - *js实现元素禁用，鼠标不可点击_js 禁止点击_ㄟ、蓦然回首的博客-CSDN博客*

8. https://blog.csdn.net/qq_42740797/article/details/127889421 - *js 关于如何动态设置css的hover样式最佳方式，设置hover样式_js设置hover样式_草字的博客-CSDN博客*



### 事件处理

1. https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers - *事件处理 | Vue.js*

2. https://wangdoc.com/javascript/events/model#事件的传播 - *事件模型 - JavaScript 教程 - 网道*

3. https://wangdoc.com/javascript/events/event - *Event 对象 - JavaScript 教程 - 网道*

4. https://blog.csdn.net/wsln_123456/article/details/102397112 - *JS阻止子元素触发父元素的事件_阻止子元素触发父元素事件_花铛的博客-CSDN博客*

5. https://www.5axxw.com/questions/content/x9lfr5?g - *如何使用父元素阻止子元素上的单击事件 - 我爱学习网*

6. https://blog.csdn.net/weixin_39987313/article/details/111538593 - *js阻止子元素事件_JS阻止冒泡和取消默认事件(默认行为)-前端开发博客_weixin_39987313的博客-CSDN博客*

7. https://blog.csdn.net/Maybe_ss/article/details/125894645 - *JavaScript事件监听器总结-CSDN博客*


### button 按钮点击事件绑定

https://blog.csdn.net/kye055947/article/details/79619538 - *【JavaScript】按钮绑定点击事件-onCliek事件_js 绑定按钮事件_程序员不弃的博客-CSDN博客*


### button onclick 实现页面跳转

```html
onclick="javascript:window.location.href='aa.htm'"

onclick="location='URL'"

onclick="window.location.href='#'"

<!-- 在按钮外面扩一个`<a>`标签就好了 -->
<a href="路径">
  <input type="button"></input>
</a>
```


### 限制 input 输入框输入的长度

1. style 属性中添加 `minlength="4" maxlength="4"`

2. 添加属性 `minlength="4" maxlength="4"`

### a 标签响应 onclick 事件，并且不执行 href 动作

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
