# 对象

https://wangdoc.com/javascript/types/object - *对象 - JavaScript 教程 - 网道*

https://wangdoc.com/javascript/stdlib/object - *Object 对象 - JavaScript 教程 - 网道*

https://wangdoc.com/javascript/stdlib/attributes - *属性描述对象 - JavaScript 教程 - 网道*

https://wangdoc.com/javascript/oop/object - *Object 对象的相关方法 - JavaScript 教程 - 网道*

https://wangdoc.com/es6/object - *对象的扩展 - ES6 教程 - 网道*

https://wangdoc.com/es6/object-methods - *对象的新增方法 - ES6 教程 - 网道*

- 声明（定义）
- 键值对（又称为"成员"）
    - 键名（又称为"属性"或"成员的名称"）
        - 读取
            - obj.foo（点运算符）
            - obj['foo']（方括号运算符）
        - 赋值
            -  obj.foo = 123
            - obj['foo'] = 123
        - 查看所有
            - Object.keys(obj);
        - 删除
            - delete obj.foo
            - delete obj['foo']
        - 是否存在
            - in 运算符
                - 'foo' in obj
                    ```javascript
                    if ('toString' in obj) {
                      console.log(obj.hasOwnProperty('toString')) //false
                    }
                    ```
        - 遍历
            - for...in
                ```javascript
                for (var key in person) {
                  if (person.hasOwnProperty(key)) {
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

## 构造函数

```javascript
var obj = new Object();
```

等价于

```javascript
var obj = {};
```

## ~~静态属性~~

## 静态方法

所谓“静态方法”，是指部署在 `Object` 对象自身的方法。

Object.keys()，Object.getOwnPropertyNames()

Object.getOwnPropertyDescriptor()

Object.defineProperty()

Object.defineProperties()

Object.preventExtensions()

Object.isExtensible()

Object.seal()

Object.isSealed()

Object.freeze()

Object.isFrozen()

Object.create()

从一个实例对象，生成另一个实例对象

Object.getPrototypeOf()

## ~~实例属性~~

## 实例方法

Object.prototype.valueOf()

Object.prototype.toString()

Object.prototype.toLocaleString()

Object.prototype.hasOwnProperty()

Object.prototype.isPrototypeOf()

Object.prototype.propertyIsEnumerable()
