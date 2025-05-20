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
const obj = { name: 'foo', age: 21 };
```

JSON 数组：

```javascript
const objArray = [
  { name: 'foo', age: 21 },
  { name: 'bar', age: 21 },
];
```

JSON 字符串：

```javascript
const jsonString = '{"name": "foo", "age": 21}';
```

```javascript
const jsonString = '[{"name": "foo", "age": 21}, {"name": "bar", "age": 21}]';
```

类型转换：

```javascript
// JSON 字符串转换为 JavaScript 对象
const jsonString = '{"name": "foo", "age": 21}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
```

错误处理：如果字符串不是有效的 JSON 格式，JSON.parse() 会抛出一个错误。可以使用 try...catch 来处理这种情况。

```javascript
const invalidJsonString = '{"name": "foo", "age": 21'; // 缺少右括号

try {
  const jsonObject = JSON.parse(invalidJsonString);
  console.log(jsonObject);
} catch (error) {
  console.error('解析错误:', error.message); // 解析错误: Unexpected end of JSON input
}
```

注意事项

1. JSON 格式：确保字符串是有效的 JSON 格式。JSON 的键必须用双引号包围，字符串值也必须用双引号。
   - 传入畸形 JSON 字符串（例如：`{name:"foo",age:21}`），会抛出异常
   - JSON 字符串严格格式：`{"name":"foo","age":21}`

```javascript
// JavaScript 对象转换为 JSON 字符串
const obj = { name: 'foo', age: 21 };
const jsonString = JSON.stringify(obj);
console.log(jsonString);
```

参考：

1. https://blog.csdn.net/cgj19960119/article/details/84987426 - _JS中json数据的处理*js json数据*不为人知的小小鸟的博客-CSDN博客_

### jQuery

```javascript
// JSON 字符串转换为 JavaScript 数组
const jsonString = '[{"name": "foo", "age": 21}, {"name": "bar", "age": 21}]';
const jsonArray = jQuery.parseJSON(jsonString);
console.log(jsonArray);
```

## 常见问题

参考：

1. https://www.freecodecamp.org/chinese/news/json-comment/ - _如何给 JSON 文件添加注释_
