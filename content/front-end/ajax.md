# AJAX

## Introduction

> AJAX（Asynchronous JavaScript and XML，异步的 JavaScript 和 XML），Ajax 本身不是一种技术，而是一种将一些现有技术结合起来使用的方法，包括：HTML 或 XHTML、CSS、JavaScript、DOM、XML、XSLT、以及最重要的 XMLHttpRequest 对象。当使用结合了这些技术的 Ajax 模型以后，网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。

## Tutorials

1. https://www.runoob.com/ajax/ajax-tutorial.html - *AJAX 教程 | 菜鸟教程*

2. https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX - *Ajax - Web 开发者指南 | MDN*

## Usage

### jQuery

```javascript
$.ajax({
    url: "http://www.test.com",    //请求的url地址
    dataType: "json",   //返回格式为json
    async: true,//请求是否异步，默认为异步，这也是ajax重要特性
    data: {"id":"1","name":"名字"},    //参数值
    type: "GET",   //请求方式
    beforeSend: function(){
        //请求前的处理
    },
    success: function(req){
        //请求成功时处理
    },
    complete: function(){
        //请求完成的处理
    },
    error: function(){
        //请求出错处理
    }
});
```

参考：

1. https://blog.csdn.net/jsl1933291679/article/details/52063233 - *ajax 标准格式 - CSDN 博客*
