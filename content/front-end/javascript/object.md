# 对象

## Getting started

ES5：

1. https://wangdoc.com/javascript/types/object - *对象 - JavaScript 教程 - 网道*
2. https://wangdoc.com/javascript/stdlib/object - *Object 对象 - JavaScript 教程 - 网道*
3. https://wangdoc.com/javascript/stdlib/attributes - *属性描述对象 - JavaScript 教程 - 网道*
4. https://wangdoc.com/javascript/oop/object - *Object 对象的相关方法 - JavaScript 教程 - 网道*

ES6：

1. https://wangdoc.com/es6/object - *对象的扩展 - ES6 教程 - 网道*
2. https://wangdoc.com/es6/object-methods - *对象的新增方法 - ES6 教程 - 网道*

- 声明（又称为"定义"）
    - `var obj = { foo: 'Hello', bar: 'World' };`
- 键值对（又称为"成员"）
    - 键名（又称为"属性"或"成员的名称"）
        - 读取
            - `obj.foo`（点运算符，数值的键名不能使用点结构，因为会被当成小数点）
            - `obj['foo']`（方括号运算符，使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理）
        - 赋值
            - `obj.foo = 123`
            - `obj['foo'] = 123`
        - 查看所有
            - `Object.keys(obj);`
            - `Object.keys(obj).length;` 查看对象长度
        - 删除
            - `delete obj.foo`
            - `delete obj['foo']`
        - 是否存在
            - in 运算符
                - `'foo' in obj`
                    ```javascript
                    if ('toString' in obj) {
                      console.log(obj.hasOwnProperty('toString')) //false
                    }
                    ```
        - 遍历
            - `for...in`
                ```javascript
                for (var key in person) {
                  if (person.hasOwnProperty(key)) { // 检查属性是否是对象自身的属性
                    console.log(key);
                  }
                }
                ```
    - 键值（又称为"成员的值"）
        - 函数（键值为函数，把这个属性称为"方法"）
- 对象的引用
    ```javascript
    var o1 = {};
    var o2 = o1;
    
    o1.a = 1;
    o2.a // 1
    
    o2.b = 2;
    o1.b // 2
    ```

[代码片段 - javascript](snippets/javascript.md)

## 标准库

### 构造函数

```javascript
var obj = new Object();
```

等价于

```javascript
var obj = {};
```

### ~~静态属性~~

### 静态方法

所谓“静态方法”，是指部署在 `Object` 对象自身的方法。

1. Object.keys()，Object.getOwnPropertyNames()

2. Object.getOwnPropertyDescriptor()

3. Object.defineProperty()

4. Object.defineProperties()

5. Object.preventExtensions()

6. Object.isExtensible()

7. Object.seal()

8. Object.isSealed()

9. Object.freeze()

10. Object.isFrozen()

11. Object.create()

    - 从一个实例对象，生成另一个实例对象

12. Object.getPrototypeOf()

### ~~实例属性~~

### 实例方法

1. Object.prototype.valueOf()

2. Object.prototype.toString()

3. Object.prototype.toLocaleString()

4. Object.prototype.hasOwnProperty()

5. Object.prototype.isPrototypeOf()

6. Object.prototype.propertyIsEnumerable()
