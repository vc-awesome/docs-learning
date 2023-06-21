## 简介

> 当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

https://www.runoob.com/js/js-htmldom.html - *JavaScript HTML DOM | 菜鸟教程*

https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model - *文档对象模型 (DOM) - Web API 接口参考 | MDN*

## 查找 HTML 元素


```javascript
document.getElementById();
```

```javascript
document.getElementsByTagName();
```

```javascript
document.getElementsByClassName();
```

```javascript
document.querySelector();
```

## 改变 HTML

- 改变 HTML 输出流
  
  ```javascript
  document.write();
  ```


- 改变 HTML 内容
  
  语法：

  ```javascript
  document.getElementById(id).innerHTML = 新的 HTML
  ```


- 改变 HTML 属性
  
  语法：

  ```javascript
  document.getElementById(id).attribute = 新属性值
  ```

  
  实例：

  ```javascript
  document.getElementById("image").src = "landscape.jpg";`
  ```

## 获取 CSS

语法：

```javascript
window.getComputedStyle("元素", "伪类");
```

实例：

```javascript
var test = document.getElementById("test"),
    demo = window.getComputedStyle(test, null); 

// 获取节点的 color

demo.color
```

参考：

1. https://m.jb51.net/article/89961.htm - *原生js获取元素样式的简单方法_javascript技巧_脚本之家*
2. https://www.baidu.com/s?word=Js查看元素样式 - *Js查看元素样式 - 百度*



## 改变 CSS

### 通过 style 属性改变

https://www.runoob.com/jsref/prop-element-style.html - *HTML DOM style 属性 | 菜鸟教程*

- 改变 HTML 样式
  
  语法：

  ```javascript
  document.getElementById(id).style.property = 新样式
  ```
  
  实例：

  ```javascript
  document.getElementById("p2").style.color = "blue";
  ```
  
- 移除样式

  语法：

  ```js
  element.removeAttribute(attributename)
  ```

  实例：

  ```js
  document.getElementsByTagName("H1")[0].removeAttribute("style");
  ```

### 通过 class 属性改变

https://www.runoob.com/jsref/prop-element-classList.html - *HTML DOM classList 属性 | 菜鸟教程*

语法：

`element.classList.add(class1, class2, ...);` 在元素中添加一个或多个类名。

`element.classList.contains(class);` 返回布尔值，判断指定的类名是否存在。

`element.classList.item(index);` 返回元素中索引值对应的类名。索引值从 0 开始。

`element.classList.remove(class1, class2, ...);` 移除元素中一个或多个类名。

`element.classList.toggle(class, true|false);` 在元素中切换类名。

实例：

  ```javascript
  document.querySelector('body').classList.toggle('close');
  ```
  *👆 给 body 标签新增 close 类。*

⚠️ 具体用法点击上方链接进入页面查看。


## 创建 HTML 元素

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
  element.insertBefore();
  ```

- 移除已存在的元素

  ```javascript
  element.removeChild(element);
  ```

- 替换 HTML 元素 - replaceChild()

  ```javascript
  element.replaceChild(new_element, old_element);
  ```

## HTML DOM 事件

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

- 使用 [EventListener](#EventListener) 来监听事件

  ```js
  <script>
    document.getElementById("myBtn").addEventListener("click", function(){
      displayDate();
    });
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

- ⚠️注意事项

  - `addEventListener()` 方法添加的事件句柄不会覆盖已存在的事件句柄。

    实例：

    ```js
    var x = document.getElementById("myBtn");
    x.addEventListener("click", myFunction);
    x.addEventListener("click", someOtherFunction);
    function myFunction() {
        alert ("Hello World!")
    }
    function someOtherFunction() {
        alert ("函数已执行!")
    }
    ```

    \> 以上代码会执行两次（执行完 myFunction 后接着会执行 someOtherFunction ），[在线实践](https://www.runoob.com/try/try.php?filename=tryjs_addeventlistener_add_many)。

  - `onclick` 事件添加的事件句柄会覆盖已存在的事件句柄。

    实例：

    ```js
    var x = document.getElementById("myBtn");
    x.onclick = myFunction;
    x.onclick = someOtherFunction;
    function myFunction() {
        alert ("Hello World!")
    }
    function someOtherFunction() {
        alert ("函数已执行!")
    }
    ```

    \> 以上代码会执行一次（执行最新添加的 someOtherFunction 点击事件）。

### 事件委托？

## EventListener

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#options - *EventTarget.addEventListener() - Web API 接口参考 | MDN*

https://www.runoob.com/js/js-htmldom-eventlistener.html - _JavaScript HTML DOM EventListener | 菜鸟教程_

语法：  
```javascript
element.addEventListener(event, function, useCapture);
```
```javascript
element.removeEventListener(event, function, useCapture);
```

### DOMContentLoaded 事件

https://developer.mozilla.org/zh-CN/docs/Web/API/Document/DOMContentLoaded_event - *Document: DOMContentLoaded 事件 - Web API 接口参考 | MDN*

## 监听 DOM 变化

https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver - *MutationObserver - Web API 接口参考 | MDN*

https://segmentfault.com/a/1190000012787829 - *javascript - 了解HTML5中的MutationObserver - 个人文章 - SegmentFault 思否*


## 对象

> 划分对象属性和对象方法

### Document 对象

https://www.runoob.com/jsref/dom-obj-document.html - *HTML DOM Document 对象 | 菜鸟教程*

常用方法：
1. [document.addEventListener(\)](https://www.runoob.com/jsref/met-document-addeventlistener.html) - 向文档添加句柄
2. [document.querySelector(\)](https://www.runoob.com/jsref/met-document-queryselector.html) - 返回文档中匹配指定的CSS选择器的第一元素（[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)）
3. [document.querySelectorAll()](https://www.runoob.com/jsref/met-document-queryselectorall.html) - document.querySelectorAll() 是 HTML5中引入的新方法，返回文档中匹配的CSS选择器的所有元素节点列表

### 元素对象

https://www.runoob.com/jsref/dom-obj-all.html - *HTML DOM 元素对象 | 菜鸟教程*

#### 获取属性

[*element*.attributes](https://www.runoob.com/jsref/prop-node-attributes.html) - 返回一个元素的属性数组

[*element*.getAttribute()](https://www.runoob.com/jsref/met-element-getattribute.html) - 返回指定元素的属性值

[*element*.getAttributeNode()](https://www.runoob.com/jsref/met-element-getattributenode.html) - 返回指定属性节点

[*element*.hasAttribute()](https://www.runoob.com/jsref/met-element-hasattribute.html) - 如果元素中存在指定的属性返回 true，否则返回false。

[*element*.hasAttributes()](https://www.runoob.com/jsref/met-node-hasattributes.html) - 如果元素有任何属性返回true，否则返回false。

[*element*.removeAttribute()](https://www.runoob.com/jsref/met-element-removeattribute.html) - 从元素中删除指定的属性

[*element*.removeAttributeNode()](https://www.runoob.com/jsref/met-element-removeattributenode.html) - 删除指定属性节点并返回移除后的节点。

[*element*.setAttribute()](https://www.runoob.com/jsref/met-element-setattribute.html) - 设置或者改变指定属性并指定值。

[*element*.setAttributeNode()](https://www.runoob.com/jsref/met-element-setattributenode.html) - 设置或者改变指定属性节点。

### 属性对象

https://www.runoob.com/jsref/dom-obj-attributes.html - *HTML DOM 属性对象 | 菜鸟教程*

### 事件对象

https://www.runoob.com/jsref/dom-obj-event.html - *HTML DOM 事件对象 | 菜鸟教程*

### Console 对象

https://www.runoob.com/jsref/obj-console.html - *Console 对象 | 菜鸟教程*

### CSS 样式声明对象(CSSStyleDeclaration)

https://www.runoob.com/jsref/obj-cssstyledeclaration.html - *CSS 样式声明对象(CSSStyleDeclaration) | 菜鸟教程*

### DOM HTMLCollection

https://www.runoob.com/jsref/dom-htmlcollection.html - *DOM HTMLCollection | 菜鸟教程*

### DOM NodeList

https://www.runoob.com/js/js-htmldom-nodelist.html - *JavaScript HTML DOM 节点列表 | 菜鸟教程*

## Form 对象

https://www.runoob.com/jsref/dom-obj-form.html - *HTML DOM Form 对象 | 菜鸟教程*

表单 `enctype` 属性：

1. 默认属性：`application/x-www-form-urlencoded`，只处理表单域中的value属性值，采用这种编码的方式的表单会将表单域的值处理成 url 编码方式
2. `multipart/form-data`，这种编码方式的表单会以二进制流的方法来处理表单数据。这种编码方式会将文件域指定文件的内容也封装到请求参数里
3. `text/plain`，这种方式主要适用于直接通过表单发送邮件的方式



### FormData 对象

https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects - *FormData 对象的使用 - Web API 接口参考 | MDN*

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
