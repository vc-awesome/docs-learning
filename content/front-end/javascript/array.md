# 数组

https://wangdoc.com/javascript/types/array - *数组 - JavaScript 教程 - 网道*

https://wangdoc.com/javascript/stdlib/array - *Array 对象 - JavaScript 教程 - 网道*

https://wangdoc.com/es6/array - *数组的扩展 - ES6 教程 - 网道*

- 声明（定义）
    - var arr = ['a', 'b', 'c'];
- 读取
    - arr[0]
- 赋值
    - arr[0] = a
- 多维数组
    - var a = [[1, 2], [3, 4]];
- 判断
    - typeof arr // "object"
    - Array.isArray(arr)
    - arr instanceof Array
- 是否存在键名
    - in 运算符
- 遍历
    - for...in 循环
    - for 循环
    - while 循环
    - 数组的 forEach 方法
- 删除数组成员
    - delete 命令
- 清空数组
    - arr.length = 0
- 类似数组的对象 - array-like object
    - var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

## 构造函数

暂无

## 静态属性

暂无

## 静态方法

1. Array.isArray()

## 实例属性

暂无

## 实例方法

1. valueOf()，toString()

2. push()，pop()

3. shift()，unshift()

4. join()

5. concat()

6. reverse()

7. slice()

8. splice()

### sort()

`sort()` - sort() 方法就地对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。 [Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### includes()

<https://wangdoc.com/es6/array#实例方法includes> - *数组的扩展 - ES6 教程 - 网道*
