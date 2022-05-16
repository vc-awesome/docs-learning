todo...

- 运行环境

  - 浏览器编程：browser

  - 服务器编程：node.js

## Index

https://www.ruanyifeng.com/blog/2014/10/event-loop.html *JavaScript 运行机制详解：再谈Event Loop*

https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html *JavaScript Source Map 详解*

- 模块编程

  1. https://www.ruanyifeng.com/blog/2012/10/javascript_module.html *Javascript模块化编程（一）：模块的写法*
  2. https://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html *Javascript模块化编程（二）：AMD规范*
  3. https://www.ruanyifeng.com/blog/2012/11/require_js.html *Javascript模块化编程（三）：require.js的用法*
  3. https://www.ruanyifeng.com/blog/2014/09/package-management.html *前端模块管理器简介*
  
- 异步编程
  - https://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html *Javascript异步编程的4种方法*
  - https://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html *JavaScript与有限状态机*

## Guide

### 基础

- 代码规范
  - 变量命名：驼峰法（camelCase）
- 数据类型

- JS HTML DOM（文档对象模型）
- JS 浏览器 BOM
- JS 对象



### 进阶

webpack  
https://webpack.js.org/



## Faqs

### a标签响应onclick事件，并且不执行href动作

- `<a href="javascript:void(0)" onclick="doSomething()">链接</a>`

- `<a href="https://www.baidu.com/" onclick="doSomething();return false;">链接</a>`

- `<a href="https://www.baidu.com/" onclick="doSomething();event.returnValue=false;">链接</a>`

- `<a href='#' disabled='true'>链接</a>`

- 使用js移除属性href这个方法才是最可靠最有效的，`a.removeAttribute("href");`//经测试

- `event.preventDefault();`  // 如果`<a>`定义了 target="_blank“ 需要这句来阻止打开新页面



### jquery多个选择器绑定同一个事件

```js
$(".saleinfo-list-title, #productIntroduce, .arrow").click(function() {
    // 处理过程
});
```



### Jquery手册事件处理on、bind

 

jQuery获取清空 input 值的几种方法

1. `$("#id").val("");`

2. `$("input").attr("value","");`

 

### 限制input输入框输入的长度

1. style属性中添加`minlength="4" maxlength="4"`

2. 添加属性`minlength="4" maxlength="4"`

 

### jquery加载页面的方法(页面加载完成就执行),建议大家看下windows.onload与$(document).ready之间的区别。

 

1. ```js
   $(function(){
       $("#a").click(function(){
           //adding your code here
       });
   });
   ```
   
    
   
2. ```js
   $(document).ready(function(){
       $("#a").click(function(){
           //adding your code here
       });
   });
   ```
   
   
   
3. ```js
   window.onload = function(){
       $("#a").click(function(){
           //adding your code here
       });
   }
   ```
   
   

html代码为`<input type="button" id="a">点击</input>`，且页面需要引用jquery的js文件 

 

一般的加载页面时调用js方法如下： 

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

 

```js
$(function() {
    // 任何需要执行的js特效
    $("table tr:nth-child(even)").addClass("even");
});
```



`$(function(){});`//页面加载时自动调用

 

`$(window).load(funtion(){});`//页面加载完之后自动加载，

 

用处吧，就是比如我们页面某些元素是在页面加载时从同台获取数据，并拼接显示出来；

 

但是同时又在页面加载好之后马上使用到这个元素此时就可以结合这两个函数时候，不然单单调用 $(function(){}); 经常会出现 undefined。

 

```js
// 【1】
$(function() {
    // 任何需要执行的js特效
    $("table tr:nth-child(even)").addClass("even");
});

// 【2】
$(document).ready(function(){
    $("#name").click(function(){
        //codding
    }); 
});

// 【3】
window.onload = function(){
    $("#name").click(function(){
        //codding
    });
}
```



demo

 

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



后面两种的区别

 

> [1]执行的时机不同 
>
> window.onload要等整个窗口（包括图片）都加载完才触发 执行 
>
> $(document).ready()在 DOM 结构绘制完成后就可执行 



> [2]编写的个数 
>
>  
>
> window.onload 编写多个时，只有最后的那起作用 
>
> $(document).ready()可以编写多个，都生效 



> [3]简化写法 
>
>  
>
> window.onload 无 
>
> $(document).ready()可简写为()



Tip ：jQuery中真正与 window.onload完全等价的是$(window).load()方法

 

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



此写法验证可行，道理是通过前辈对象找到下面的 '.cla' 元素后绑定 click事件。

 

### Button onclick 实现页面跳转

- `onclick="javascript:window.location.href='aa.htm'"`

- `onclick="location='URL'"`

- `onclick="window.location.href='#'"`

- `<a href="路径"><input type="button"></input></a>` 在按钮外面扩一个`<a>`标签就好了

 

### js中json数据的处理

https://blog.csdn.net/cgj19960119/article/details/84987426

json对象：`var obj = {"name":"xiao","age":12};`

json数组：`var objArray = [{"name":"xiao","age":12},{"name":"xiao","age":12}]`

json字符串：`var jsonString = '{"name":"xiao","age":12}';`

```js
// Json字符串—>JS对象：
obj = JSON.parse(jsonString);
obj = jQuery.parseJSON(jsonString);
// Note:传入畸形json字符串(例如：‘{name:"xiao",age:12}')，会抛出异常；
// Json字符串格式，严格格式：‘{"name":"xiao","age":12}'

// JS对象—>Json字符串：
json_str = JSON.stringify(obj);
```



### js中字符串全部替换

https://www.cnblogs.com/cblogs/p/9293522.html

`str.replace(/需要替换的字符串/g，"新字符串");`

实例

```js
"yyyy-MM-dd-hh-mm-ss".replace(/-/g,"/")

// 结果如下：
"yyyy/MM/dd/hh/mm/ss"
```



### js跳转至页面底部

[jQuery实现方式不一样的跳转到底部](https://www.cnblogs.com/roucheng/p/tobottom.html)  
[HTML进入页面自动滚动到底部(最佳)(HTML聊天界面常用)jq;jquery;](https://blog.csdn.net/weixin_43708754/article/details/103123272)

> 当div层有滚动层，跳转至底部会没反应，需要在滚动层设定高度值

```html
<a href="javascript:;" id="foot">跳到底部</a>
<a href="javascript:;" id="top">返回顶部</a>
<a href="javascript:;" id="div">跳到指定位置</a>
```



```js
$('#foot').click(function() {
    $('html,body').animate({
        scrollTop: $(document).height()
    }, 1000);
    return false;
});

$('#top').click(function() {
    $('html,body').animate({
        scrollTop: '0'
    }, 1000);
    return false;
});

$('#div').click(function() {
    $('html,body').animate({
        scrollTop: $(this).offset().top
    }, 1000);
    return false;
});
```



```js
$(function() {
    window.scrollTo(0, document.body.scrollHeight);
})
```



[html 如何让网页一打开就直接显示最底部的部分](https://zhidao.baidu.com/question/308832148.html)  
[一张html网页，如何让它打开时就定位在底部？](https://bbs.csdn.net/topics/60457054)

```html
<!--锚点处-->
<a name="zhidao"></a>
```



```js
window.location ="#zhidao";//自动跳转到锚点处
```



### 前端知识点：防抖节流

https://www.javascriptcn.com/read-91316.html

 

### 重绘 、回流

https://www.jianshu.com/p/ae1f2bd0d08f

 

### 对象

JavaScript对象

Browser对象（BOM）

DOM对象（DOM）

HTML对象

 

InnerHtml

innerText

Length

Value

 

### 属性

- 获取属性

- 设置属性

 

### 事件

- 单击

- 双击

 

### 数据类型

- 整型

- 浮点型

- 字符串

- 布尔型

- 数组

- 对象



## form

表单的`enctype`属性：

1. 默认属性：`application/x-www-form-urlencoded`，只处理表单域中的value属性值，采用这种编码的方式的表单会将表单域的值处理成url编码方式

2. `multipart/form-data`，这种编码方式的表单会以二进制流的方法来处理表单数据。这种编码方式会将文件域指定文件的内容也封装到请求参数里

3. `text/plain`，这种方式主要适用于直接通过表单发送邮件的方式



### FormData

<https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects>

用一些键值对来模拟一系列表单空间：即把form中所有表单元素的name与value组装成一个queryString

```js
let formData = new FormData();  // 实例
formData.append('user', 'ccc');  // 新增
formData.get('user');  // 获取
formData.append('user');  // 删除
```



使用`FormData`对象发送文件

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

