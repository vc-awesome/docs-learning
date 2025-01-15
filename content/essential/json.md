# JSON

## 简介

> JSON（JavaScript Object Notation, JS 对象简谱）是一种轻量级的数据交换格式。

## 官方

https://json.org/ - _JSON_

## 教程

https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/JSON - _使用 JSON - 学习 Web 开发 | MDN_

https://www.runoob.com/json/json-tutorial.html - _JSON 教程 | 菜鸟教程_

## 用法

### JavaScript

JSON 对象：

```javascript
var obj = { name: 'xiao', age: 12 };
```

JSON 数组：

```javascript
var objArray = [
  { name: 'xiao', age: 12 },
  { name: 'xiao', age: 12 },
];
```

JSON 字符串：

```javascript
var jsonString = '{"name":"xiao","age":12}';
```

类型转换：

```javascript
// JSON 字符串—> JS 对象：
obj = JSON.parse(jsonString);
obj = jQuery.parseJSON(jsonString);

// Note：传入畸形 JSON 字符串（例如：`{name:"xiao",age:12}`），会抛出异常；
// JSON 字符串格式，严格格式：`{"name":"xiao","age":12}`

// JS 对象 —> JSON 字符串：
json_str = JSON.stringify(obj);
```

参考：

1. https://blog.csdn.net/cgj19960119/article/details/84987426 - _JS中json数据的处理*js json数据*不为人知的小小鸟的博客-CSDN博客_

## 常见问题

参考：

1. https://www.freecodecamp.org/chinese/news/json-comment/ - _如何给 JSON 文件添加注释_
