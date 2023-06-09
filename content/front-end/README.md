## 发展路程

> 前端发展路程 Roadmap


## 学习路线

> 学习路线 Learning route

## 学习资源

> Learning resource

### 优质框架

[Bootstrap 中文网](https://www.bootcss.com/)
- [所有版本](https://v4.bootcss.com/docs/versions/)
- [v5 中文文档](https://v5.bootcss.com/docs/getting-started/introduction/)
- [v4 中文文档](https://v4.bootcss.com/docs/getting-started/introduction/)

----

[Bootstrap 官方网址](https://getbootstrap.com/)
- [所有版本](https://getbootstrap.com/docs/versions/)
- [v5 英文文档](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [v4 英文文档](https://getbootstrap.com/docs/4.6/getting-started/introduction/)


## 页面布局

有关详细信息，请参阅“[HTML 布局](/front-end/html/README.md#布局)”。

有关详细信息，请参阅“[CSS 布局](/front-end/css/css-命名规则.md#layout-布局)”。


## 浏览器加载过程

https://blog.csdn.net/gaofan_long/article/details/113861096 - *浏览器加载过程_gaofan_long的博客-CSDN博客*

https://juejin.cn/post/6844903815758479374 - *你不知道的浏览器页面渲染机制 - 掘金*

https://blog.csdn.net/Littlegirlha/article/details/128383854 - *浏览器加载网页的过程_小许还在编程的博客-CSDN博客*

https://suanmei.github.io/2017/02/11/url2render-part1/ - *从输入url到浏览器显示页面，发生了什么？（网络通信篇） | 拾壹小筑*

https://suanmei.github.io/2017/02/12/url2render-part2/ - *从输入url到浏览器显示页面，发生了什么？（浏览器渲染篇） | 拾壹小筑*


## 链接

https://zhuanlan.zhihu.com/p/148313476 - *19个前端开发人员的救生工具*

https://zhuanlan.zhihu.com/p/159659392 - *9个不错的前端开源项目*

## 字符集的使用

在 HTML 文件中使用

| 方式一（直接复制） | 方式二（十进制）      | 方式三（十六进制）    |
| ------------------ | --------------------- | --------------------- |
| ❤                  | &#10084; `&#10084;`   | &#x2764; `&#x2764;`   |
| 🦁                  | &#129409; `&#129409;` | &#x1F981; `&#x1F981;` |

在 [CSS content 属性 | 菜鸟教程](https://www.runoob.com/cssref/pr-gen-content.html) 中使用

```css
// 使用上面表格十六进制的方式
a:after {
  // ❤
  content: "\2764"; //特殊字符或形状
  // 🦁
  content: "\1F981"; //特殊字符或形状  
}
```

参考：

1. https://www.cnblogs.com/wujindong/p/5630656.html - *html特殊字符 编码css3 content:"我是特殊符号" - Window2016 - 博客园*

2. https://www.runoob.com/charsets/ref-emoji.html - *Emoji 参考手册 | 菜鸟教程*
3. https://www.cnblogs.com/grootbaby/p/13827867.html - *HTML特殊字符编码对照表 - 格鲁特baby - 博客园*
4. https://www.cnblogs.com/grootbaby/p/13827869.html - *HTML特殊字符编码对照表 —— （一） - 格鲁特baby - 博客园*
5. https://www.cnblogs.com/grootbaby/p/13827868.html - *HTML特殊字符编码对照表 —— （二） - 格鲁特baby - 博客园*
