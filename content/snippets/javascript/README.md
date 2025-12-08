# JavaScript

## 判断数据类型

```javascript
/**
 * 类型检测函数
 * 为typeof关键字的增强版，可以准确判断null，date类型
 * 原理是使用V8引擎最初的toString方法观察数据类型
 * @author 不爱喝橙子汁
 * @version 1.0.0
 * @param {Object} obj 任意对象，例如null，undefined，date
 * @return {String} 类型的全小写字符串
 */
function type(obj) {
   return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase(); 
}
```

参考：

1. https://www.kancloud.cn/uview/uview-ui_v2/2579078 - *判断数据类型 · uView-UI v2.x常见问题整理 · 看云*
2. <https://wangdoc.com/javascript/stdlib/object#tostring-的应用判断数据类型> - *Object 对象 - JavaScript 教程 - 网道*

### 判断是否为对象

```javascript
function isObject(value) {
  return value === Object(value);
}
```

参考：

1. https://wangdoc.com/javascript/stdlib/object#object - *Object 对象 - JavaScript 教程 - 网道*

## 数组操作

https://www.freecodecamp.org/chinese/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/ - *JavaScript 对象数组——如何使用 JS 数组方法创建、更新和循环对象*

### 生成数字范围 0..4 的数组

```javascript
Array.from({ length: 4 }, (_, i) => 1 + i); // [1, 2, 3, 4]
```

参考：

1. <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from#序列生成器（range）> - *Array.from() - JavaScript | MDN*

### 重复数组 N 次

```javascript
var repeated = new Array(100).fill([1, 2, 3]).flat();
```

参考：

1. https://segmentfault.com/q/1010000043079935 - *javascript - 如何“重复”数组 n 次 - SegmentFault 思否*
2. https://stackoverflow.org.cn/questions/50672126 - *javascript - 在 JavaScript 中多次重复包含多个元素的数组_Stack Overflow中文网*

### 添加对象

```javascript
let arr = [];
arr.push({});
console.log(arr);
```

参考：

1. https://blog.csdn.net/weixin_52740695/article/details/136248808 - *向数组中添加对象的4种方法_js 对象数组添加对象-CSDN博客*
2. https://blog.csdn.net/weixin_43321726/article/details/120257970 - *javaScript向数组中添加元素的6种方法_js数组中间添加元素-CSDN博客*
3. https://www.freecodecamp.org/chinese/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions - *如何用 Push、Unshift 和 Concat 在 JavaScript 数组中添加元素*

### 清空数组

```javascript
var arr = [ 'a', 'b', 'c' ];

arr.length = 0;
arr // []
```

## 对象操作

### 判断对象是否为空

```javascript
const isObjectEmpty = (objectName) => {
  return JSON.stringify(objectName) === "{}";
};
```

参考：

1. https://www.freecodecamp.org/chinese/news/check-if-an-object-is-empty-in-javascript/ - *如何在 JavaScript 中检查对象是否为空*
2. https://blog.csdn.net/MyFuture_MyDream/article/details/116225441 - *JavaScript判断对象是否为空对象的几种方法_js判断对象是否为空对象-CSDN博客*

### 清空对象属性值

```javascript
function clearValue(obj) {
    Object.keys(obj).forEach( key => {
        if (typeof obj[key] == 'object') {
            this.clearValue(obj[key]);
        } else {
            obj[key] = '';
        }
    });
}
```

参考：

1. https://blog.csdn.net/qq_41813208/article/details/107371181 - *js 对象的深拷贝、合并、清空属性值(自己封装，递归清除对象属性值。)_js清理深拷贝对象-CSDN博客*
2. https://www.cnblogs.com/getda/p/14383197.html - *JavaScript 清空对象属性的方法 - 王小大 - 博客园*

### 对象转数组

参考：

1. https://blog.csdn.net/lwf3115841/article/details/134154442 - *js中如何将对象转换为数组_js 对象转数组-CSDN博客*
2. https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/122119153 - *3种JavaScript 对象转数组的方法-CSDN博客*
3. https://blog.csdn.net/petertanjinjie/article/details/110102932 - *JS数组和对象相互转换方法[实用]-CSDN博客*
4. https://www.cnblogs.com/JiAyInNnNn/p/11451000.html - *JS中对象转数组方法总结 - JiAyInNnNn123 - 博客园*

## 字符串操作

### 保留两位小数点

参考：

1. https://blog.csdn.net/weixin_45707610/article/details/131063059 - *js保留两位小数最简单的6种方法_js保留两位小数向上取整-CSDN博客*
2. https://www.runoob.com/w3cnote/javascript-two-decimal.html - *JavaScript 保留两位小数 | 菜鸟教程*
3. https://blog.csdn.net/lxs_bzdmn/article/details/118493155 - *js实现保留三位有效数字（不足补零）_js 保留3位小数-CSDN博客*

### 字符串替换

语法：

```javascript
str.replace(/需要替换的字符串/g, "新字符串");
```

实例：

```javascript
"yyyy-MM-dd-hh-mm-ss".replace(/-/g, "/") // 结果："yyyy/MM/dd/hh/mm/ss"
```

替换单个字符：

``` javascript
str.replace("需要替换的字符串", "新替换的字符串");
```

替换全部字符：

> `g` 表示全局替换，`i` 表示忽略大小写，下列写法中函数第一个参数不必加引号，加引号表示替换第 1 个字符

✔️正确

```javascript
str.replace(/需要替换的字符串/g, "新替换的字符串");
```

❌错误

```javascript
str.replace("/需要替换的字符串/g", "新替换的字符串");
```

参考：

1. https://wangdoc.com/javascript/stdlib/string#stringprototypesearchstringprototypereplace - *String 对象 - JavaScript 教程 - 网道*
2. https://wangdoc.com/javascript/stdlib/regexp#stringprototypereplace - *RegExp 对象 - JavaScript 教程 - 网道*
3. https://www.runoob.com/jsref/jsref-replace.html - _JavaScript replace() 方法 | 菜鸟教程_
4. https://www.cnblogs.com/cblogs/p/9293522.html - *js中字符串全部替换 - HaydenChao - 博客园*

### 转义 HTML 字符

```javascript
/**
 * 为保证测试输出正常，需要转义输出 html 的标签
 * @param {string} unsafe - 包含 html 标签的文本
 * @return {string} 转义 html 标签后的文本
 * @see https://www.runoob.com/try/try2.php?filename=tryjsref_regexp_htmltag - *菜鸟教程在线编辑器*
 */
function escapeHtml(unsafe)
{
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

## 异步操作

### setTimeout()

暂无

### Promise

暂无
