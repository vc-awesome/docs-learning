# Promise

## 简介

> Promise 是 JavaScript 中用于处理异步操作的一种对象。它代表一个可能在未来某个时间点完成或失败的操作，并返回其结果。Promise 使得异步编程更加清晰和易于管理，避免了回调地狱（callback hell）的问题。

## 教程

1. https://wangdoc.com/javascript/async/promise - *Promise 对象 - JavaScript 教程 - 网道*
2. https://wangdoc.com/es6/promise - *Promise 对象 - ES6 教程 - 网道*
3. https://wangdoc.com/es6/async - *async 函数 - ES6 教程 - 网道*

## 用法

### Promise 的状态

Promise 有三种状态：

1. **Pending（待定）**：初始状态，既不是成功，也不是失败。
2. **Fulfilled（已兑现）**：操作成功完成，Promise 变为成功状态。
3. **Rejected（已拒绝）**：操作失败，Promise 变为失败状态。

### Promise 的基本用法

创建一个 Promise 对象的基本语法如下：

```javascript
let myPromise = new Promise((resolve, reject) => {
    // 异步操作
    if (/* 操作成功 */) {
        resolve('成功的结果');
    } else {
        reject('失败的原因');
    }
});
```

### 使用 Promise

Promise 提供了 `.then()` 和 `.catch()` 方法来处理成功和失败的结果：

```javascript
myPromise
    .then(result => {
        console.log(result); // 处理成功的结果
    })
    .catch(error => {
        console.error(error); // 处理失败的原因
    });
```

### Promise 的链式调用

Promise 支持链式调用，可以将多个异步操作串联在一起：

```javascript
myPromise
    .then(result => {
        console.log(result);
        return anotherPromise; // 返回另一个 Promise
    })
    .then(anotherResult => {
        console.log(anotherResult);
    })
    .catch(error => {
        console.error(error);
    });
```

### Promise.all 和 Promise.race

- **Promise.all**：接受一个 Promise 数组，只有当所有 Promise 都成功时，才会返回成功的结果。如果有一个 Promise 失败，则立即返回失败的结果。

    ```javascript
    Promise.all([promise1, promise2, promise3])
        .then(results => {
            console.log(results); // 所有 Promise 成功的结果
        })
        .catch(error => {
            console.error(error); // 其中一个 Promise 失败的原因
        });
    ```

- **Promise.race**：接受一个 Promise 数组，返回第一个完成的 Promise 的结果（无论是成功还是失败）。

    ```javascript
    Promise.race([promise1, promise2, promise3])
        .then(result => {
            console.log(result); // 第一个完成的 Promise 的结果
        })
        .catch(error => {
            console.error(error); // 第一个完成的 Promise 的失败原因
        });
    ```

### 总结

Promise 是处理异步操作的强大工具，使得代码更加清晰和易于维护。通过使用 Promise，开发者可以更好地管理异步流程，避免复杂的回调嵌套。
