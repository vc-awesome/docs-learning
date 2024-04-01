# 常见问题

> 项目开发中遇到的问题


## 书写格式

> 格式参考最新内容

项目：`项目名`

时间：`xxxx/xx/xx`

问题：（问题解决耗时 ? 小时）

原因：`图文`

解决：`图文`


## 点击 banner 图 href 跳转页面错误

相对路径 `href="www.baidu.com"` ⇒ 访问当前网站的 `www.baidu.com` 文件

绝对路径 `href="//www.baidu.com"` ⇒ 访问百度首页

绝对路径 `href="https://www.baidu.com"` ⇒ 访问百度首页

参考：

https://www.runoob.com/tags/att-a-href.html - *HTML \<a\> href 属性 | 菜鸟教程*


## Linux 系统下创建目录出错

`mkdir(): Permission denied`

权限不足，设置需创建目录文件夹的权限为 `777`

参考：

https://blog.csdn.net/weixin_30407613/article/details/94806135 - *mkdir(): Permission denied_weixin_30407613的博客-CSDN博客*


## JavaScript 字符串替换

单个字符替换

``` js
str.replace("需要替换的字符串","新替换的字符串");
```

全部字符替换

> `g` 表示全局替换，`i` 表示忽略大小写，下列写法中函数第一个参数不必加引号，加引号表示替换第 1 个字符

✔️正确

```js
str.replace(/需要替换的字符串/g, "新替换的字符串");
```

❌错误
```js
str.replace("/需要替换的字符串/g", "新替换的字符串");
```

参考：

1. https://www.runoob.com/jsref/jsref-replace.html - _JavaScript replace() 方法 | 菜鸟教程_
2. https://www.cnblogs.com/cblogs/p/9293522.html - _js中字符串全部替换 - 胡海超的博客 - 博客园_


## PHP 正则表达式

1. https://www.php.cn/php-weizijiaocheng-394075.html - _php的正则表达式-php教程-PHP中文网_
2. https://www.php.cn/toutiao-429232.html - _正则表达式语法教程（含在线测试工具）-头条-PHP中文网_


## php 导出 Excel 时，订单号或手机号会变成科学计数问题

在订单号或手机号后台 拼接上 `. "\t"`

参考：

https://blog.csdn.net/wuzengman/article/details/83588398 - _php 导出Excel时，订单号或手机号会变成科学计数问题_php 导出excel 订单号被格式化_吴增漫的博客-CSDN博客_


## 使用 mysql 乐观锁解决并发问题

(1) 使用版本号实现乐观锁

(2) 使用条件限制实现乐观锁（推荐）

参考：

https://www.cnblogs.com/laoyeye/p/8097684.html - _使用mysql乐观锁解决并发问题 - 小卖铺的老爷爷 - 博客园_

 
## cookie、session 问题

项目：99 传奇

时间：`2020/10/15`

问题：（问题解决耗时 7 小时）

1. hbuilder 打包的 app，记住密码后进入系统内，所有的图形验证码不显示，而不记住密码都显示
2. 在 web 网页打开，记住密码后进入系统内，同样有所有图形验证码不显示的问题

原因：

1. 因为记住密码进入系统内，新的 session 覆盖了含图形验证码的 session，导致图形验证码不显示
2. 书写的代码问题

解决：

1. 注释 `/Home/Controller/IndexController.class.php` 文件中 `_initialize` 方法的 `$Judge->loginAuto();`
2. login 方法添加
    ```php
    /**
     * 已记住登录密码自动登录
     */
    $is_login = cookie('user_login_info');
    if (isset($is_login) && !empty($is_login)) { //已记住密码直接登录
        $User = M('member')
            ->where([
                'telephone' => $is_login['telephone'],
                'userpass' => $is_login['userpass'],
                'delete' => 0,
                'status' => 0
            ])
            ->find();
        $cookie_value = array(
            'telephone' => $is_login['telephone'],
            'userpass' => $is_login['userpass']
        );
        cookie('user_login_info', $cookie_value, 365*24*3600);
        session('UserID', $User);
        redirect(page_url('home'));
        /**
         * 未记住登录密码跳转登录页
         */
    } else {
        $this->display();
    }
    ```
