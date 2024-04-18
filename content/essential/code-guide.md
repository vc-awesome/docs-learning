# 编码规范

> 开发规范（标准）Standard.

1. https://www.github-zh.com/collections/style-guide - *Github上编码规范开源项目推荐 - GitHub中文社区*

2. https://www.w3cschool.cn/wematy/ - *腾讯alloyteam团队前端代码规范_w3cschool*

3. https://juejin.cn/post/6893891476913291278 - *推荐几个大厂的前端代码规范，学会了，你也能写出诗一样的代码！ - 掘金*

4. https://spec.graphql.cn/ - *GraphQL*

## 代码规范

1. https://github.com/fex-team/styleguide - *GitHub - fex-team/styleguide: 文档与源码编写风格*

    ![GitHub last commit](https://badgen.net/github/last-commit/fex-team/styleguide?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/fex-team/styleguide?style=social)

### HTML 和 CSS

1. [Code Guide by @mdo](https://codeguide.co/) - *Standards for developing consistent, flexible, and sustainable HTML and CSS.* [GitHub Repo](https://github.com/mdo/code-guide) [中文-1](https://codeguide.bootcss.com/) [中文-2](http://zoomzhao.github.io/code-guide/)

    ![GitHub last commit](https://badgen.net/github/last-commit/mdo/code-guide?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/mdo/code-guide?style=social)

CSS：

1. https://github.com/airbnb/css - *GitHub - airbnb/css: A mostly reasonable approach to CSS and Sass.*

    ![GitHub last commit](https://badgen.net/github/last-commit/airbnb/css?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/airbnb/css?style=social)

2. https://github.com/necolas/idiomatic-css - *idiomatic-css/translations/zh-CN at master · necolas/idiomatic-css · GitHub*

    ![GitHub last commit](https://badgen.net/github/last-commit/necolas/idiomatic-css?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/necolas/idiomatic-css?style=social)

### JavaScript

1. https://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html - *Javascript编程风格*

2. https://wangdoc.com/javascript/features/style - *编程风格 - JavaScript 教程 - 网道*

3. https://github.com/airbnb/javascript - *GitHub - airbnb/javascript: JavaScript Style Guide*

    ![GitHub last commit](https://badgen.net/github/last-commit/airbnb/javascript?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/airbnb/javascript?style=social)

4. https://github.com/rwaldron/idiomatic.js - *idiomatic.js/translations/zh_CN at master · rwaldron/idiomatic.js · GitHub*

    ![GitHub last commit](https://badgen.net/github/last-commit/rwaldron/idiomatic.js?icon=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/rwaldron/idiomatic.js?style=social)

ES6：

1. https://wangdoc.com/es6/style - *编程风格 - ES6 教程 - 网道*

### Java

https://github.com/alibaba/p3c - *GitHub - alibaba/p3c: Alibaba Java Coding Guidelines pmd implements and IDE plugin*

![GitHub last commit](https://badgen.net/github/last-commit/alibaba/p3c?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/alibaba/p3c?style=social)

1. https://www.jb51.net/article/137783.htm - *JAVA开发中的一些规范讲解(阿里巴巴Java开发规范手册*

## 注释规范

``` css
/* 多行
    注释 */

div {
  /* 单行注释 */
}

/**
 * 文件信息注释
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```

👆 上述参考：https://www.w3cschool.cn/wematy/wematy-qaru3bsh.html - *CSS 注释规范_w3cschool*

``` js
// 自定义内容 - start
/**
 * TOC 添加“代码缩进参考线”
 * PhpStorm 中如何设置并查看效果：
 * 1. phpstorm 菜单栏 -> preferences...（设置）；
 * 2. 编辑器 -> 常规 -> 外观：勾选选项“显示缩进参考线”。
 * @url https://blog.csdn.net/weixin_41981080/article/details/82659022 - PhpStorm代码编辑区竖线的用途
 * @url https://www.cnblogs.com/zqifa/p/12651446.html - phpstorm 代码编辑区去掉、设置灰色竖线 打印分割线设置
 */
 
 
 
// 自定义内容 - end
```

### PHPDoc

https://phpdoc.org/ - *Home | phpDocumentor* [GitHub](https://github.com/phpDocumentor/phpDocumentor)

![GitHub last commit](https://badgen.net/github/last-commit/phpDocumentor/phpDocumentor?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/phpDocumentor/phpDocumentor?style=social)

1. 页面级注释

2. 代码级注释

注释规约：

https://www.jb51.net/article/137783.htm#_lab2_0_7 - *JAVA开发中的一些规范讲解(阿里巴巴Java开发规范手册)_java_脚本之家*

8.【参考】注释掉的代码尽量要配合说明，而不是简单的注释掉。

> 说明：
>> 代码被注释掉有两种可能性：
>>> 1）后续会恢复此段代码逻辑。
>>>
>>> 2）永久不用。前者如果没有备注信息，难以知晓注释动机。后者建议直接删掉（代码仓库保存了历史代码）。

用法：

- 逻辑注释

  下列代码中加 `*` 部分为常用内容

  ```php
  // 获取数据 - [备注：xxx] *
      // 数据过滤
      $post_data = $this->request->only(['mobile', 'login_password']);
  // 验证数据 *
      // 验证失败 输出错误信息
      // 上传失败 输出错误信息
      $result = $this->validate($post_data, '\app\common\validate\User.userLogin');
      if (true !== $result) {
          $this->error($result);
      }
      // 可参考：
      if (array_key_exists('user_id', $arrays) | array_key_exists('uid', $arrays)) {
          return '参数中包含有非法的参数名user_id或者uid';
      }
  // 处理查询条件（后台）
  // 查询数据 *
  // 处理数据（更新、新增数据前处理） *
  // 新增数据（任务数据、日志数据……） *
      // 模型方式
      self::create($data, true); // 模型内使用
  // 更新数据 *
      $machine_model = new \app\admin\model\Machine;
      $result = $machine_model->save(['status' => $status], ['id' => $id]);
  // 删除数据
  // 更新字段 - 填写“字段注释”
  // 处理数据（查询数据后处理） *
  // 输出数据
  // 渲染数据 （视图、返回数据的渲染）
  // 页面跳转 （适用于后台）

  // 页面渲染
  // 功能操作
  // 函数方法
  // 测试其他

  // 数据导出 excel
  ```

- 类方法注释

  ```php
  /**
   * 红包每日过12点全部自动取消，无法领取
   * @date 2020/09/08
   * @author caiyongwen
   * @throws FooException
   * @time 每分钟执行一次
   * @desc 投资的金额*百分比
   * @url scheme://host.domain/grade/stats
   */
  ```

参考：

1. https://segmentfault.com/a/1190000005930636 - *PHP注释的艺术——phpDoc规范 - 超能小紫 - SegmentFault 思否*

2. https://commandnotfound.cn/php/2/84/PHPDoc - *PHPDoc - PHP教程 - CommandNotFound ⚡️ 坑否*

3. https://baijiahao.baidu.com/s?id=1709572706414270871 - *phpDocumentor 分析您的代码创建优秀的 API 文档*

4. https://baike.baidu.com/item/phpDocumentor/9379081 - *phpDocumentor*

5. https://www.cnblogs.com/libera/p/10518861.html - *PHP文档生成器（PHPDoc）的基本用法 - hiccphp - 博客园*

### JSDoc

> JSDoc 3 是一个用于 JavaScript 的 API 文档生成器，类似于 Javadoc 或 phpDocumentor，可以将文档注释直接添加到源代码中，JSDoc 工具将扫描您的源代码并为您生成一个 HTML 文档网站。

[JSDoc](https://jsdoc.app/) - *Official documentation for JSDoc 3.* [GitHub](https://github.com/jsdoc/jsdoc) [中文](https://www.jsdoc.com.cn/)

![GitHub last commit](https://badgen.net/github/last-commit/jsdoc/jsdoc?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/jsdoc/jsdoc?style=social)

---

参考：

1. https://www.shouce.ren/api/view/a/13232 - *JSDoc 介绍 - JSDoc 入门 - [ JSDoc 中文文档 ] - 手册网*

2. https://zhuanlan.zhihu.com/p/391713131 - *使用 jsDoc 提升我们的开发效率 - 知乎*

## 规范工具

1. https://www.cnblogs.com/Yellow-ice/p/15346883.html - *前端规范之CSS规范（Stylelint） -
Yellow_ice - 博客园*
