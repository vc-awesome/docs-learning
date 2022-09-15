## mrclay/minify

?> Minify是一个用于JS和CSS资源的HTTP服务器。它压缩和组合文件，并提供适当的头，允许有条件的GET或long-Expires。

<i class="fa fa-github fa-lg"></i> https://github.com/mrclay/minify

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/mrclay/minify

[How to minify php page html output?](https://stackoverflow.com/questions/6225351/how-to-minify-php-page-html-output)

第一次接触时间：2019/03/21



### FAQ

在 *github* 获取到代码包，解压文件包后使用cli进入目录，需要运行`composer install --no-dev`，否者会报错。



### 参考链接

百度搜索：PHP 的 Minify

- http://www.chinaz.com/web/2011/0511/179286.shtml - *使用Minify来优化网站性能*
- http://www.hehaibao.com/php-minify-composer-js-css/ - *php Minify合并多个js,css文件*
- https://blog.csdn.net/lizixiang1993/article/details/44957761 - *【js&css文件压缩】php+minify+nginx 的配置和使用 -1*
- https://www.cnblogs.com/chinafine/articles/2224178.html - *Minify把CSS和JS压缩和削减*
- https://www.cnblogs.com/qq917937712/p/5716152.html - *Thinkphp js、css压缩类minify*
- http://www.thinkphp.cn/topic/21084.html - *ThinkPHP整合minify*



## workerman/workerman

?> Workerman 是一个异步事件驱动的 PHP 框架，具有高性能，用于构建快速且可扩展的网络应用程序。 Workerman 支持 HTTP、Websocket、SSL 等自定义协议。 Workerman 支持事件扩展

<i class="fa fa-github fa-lg"></i> https://github.com/walkor/Workerman

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/workerman/workerman

[thinkphp3.2整合workerman 多入口模式（windows）](https://www.cnblogs.com/limonyun/p/8878710.html)



## endroid/qr-code

?> 二维码生成类库

<i class="fa fa-github fa-lg"></i> https://github.com/endroid/qr-code

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/endroid/qr-code



## phpoffice/phpspreadsheet *1.71.1*

?> A pure PHP library for reading and writing spreadsheet files  
<i class="bi bi-translate dark-yellow"></i> 用于读取和写入电子表格文件的纯PHP库

<i class="fa fa-github fa-lg"></i> https://github.com/PHPOffice/PhpSpreadsheet

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/phpoffice/phpspreadsheet

<i class="fa fa-book"></i> https://phpspreadsheet.readthedocs.io/



设置表头

文件格式 https://phpspreadsheet.readthedocs.io/en/latest/topics/file-formats/

读取和写入文件 https://phpspreadsheet.readthedocs.io/en/latest/topics/reading-and-writing-to-file/

多标题导出

单元格背景色

单元格边框

客户浏览器下载 https://phpspreadsheet.readthedocs.io/en/latest/topics/recipes/#redirect-output-to-a-clients-web-browser

保存到服务器



## ~~phpoffice/phpexcel 1.8.2~~

!> This package is **abandoned** and no longer maintained. The author suggests using the [phpoffice/phpspreadsheet](https://packagist.org/packages/phpoffice/phpspreadsheet) package instead.<br>这个包被**放弃**，不再维护。作者建议使用[phpoffice/phpspreadsheet](https://packagist.org/packages/phpoffice/phpspreadsheet)包来代替。

<i class="fa fa-github fa-lg"></i> https://github.com/PHPOffice/PHPExcel

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/phpoffice/phpexcel

[利用PHPExcel 实现excel数据的导入导出（源码实现）](https://www.cnblogs.com/cyfblogs/p/10115541.html)

[PHPExcel 中文使用手册详解](https://blog.csdn.net/chenlix/article/details/82853698)



## topthink/think-queue

?> ThinkPHP6 队列包

<i class="fa fa-github fa-lg"></i> https://github.com/top-think/think-queue

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/topthink/think-queue

### FAQ

消息队列扩展插件 think-queue3.0 在Thinkphp6.0 redis windows server 2008 宝塔面板中使用cmd命令行执行“监听并执行队列消息”时出现redis扩展未安装的问题

- 安装了2个及以上的php版本，而环境变量中设置的另一个php版本未安装redis扩展导致异常发生

- 使用php -version 检查当前cli模式中的php版本

- 如当前cli模式的php版本未安装redis扩展，安装redis扩展

- 如当前cli模式的php版本不是当前项目的php版本，环境变量切换至当前项目的php版本

### 参考链接

[thinkphp Redis问题](https://segmentfault.com/q/1010000015308180)

[使用redis队列，总是提示redis模块没有安装](https://www.thinkphp.cn/topic/57717.html)

[分明我的php已经装了redis扩展，为何程序还是报未安装呢](https://www.imooc.com/qadetail/276873?t=446643)



## zewail/think-api

?> 帮助 thinkphp 5 开发者快速、轻松的构建Api🎉🎉🎉

<i class="fa fa-github fa-lg"></i> https://github.com/czewail/think-api

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/zewail/think-api



### http响应

```php
return ApiResponse::success('Success', 200);

// 响应一个数组
$user = User::get($id);
return ApiResponse::array($user->toArray());

// 响应一个元素
$user = User::get($id);
return ApiResponse::item($user);

// 响应一个元素集合
$users = User::all();
return ApiResponse::collection($users);

// 分页响应
$users = User::paginate(10);
return ApiResponse::paginator($users);
```

### JWT

创建token

```php
# 方式一
// $credentials 可以从请求中获取
$credentials = ['email'=>'chanzewail@gmail.com', 'password' => '123456'];
$token = JWT::attempt($credentials);

# 方式二
$user = User::get(1);
$token = JWT::fromUser($user);

# 方式三
$customClaims = ['foo' => 'bar', 'baz' => 'bob'];
$payload = JWT::makePayload($customClaims);
$token = JWT::encode($payload);
```



## hashids/hashids

?> 从数字生成简短、唯一、非连续的 ID（如 YouTube 和 Bitly）

<i class="fa fa-github fa-lg"></i> https://github.com/vinkla/hashids

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/hashids/hashids

```php
/**
 * 邀请码加密
 *
 * 依赖 hashids/hashids 扩展库
 *
 * @param $member_id
 * @return string
 */
function encode_invite_code($member_id)
{
    $salt = '#ev009';
    $minHashLength = 7;
    $hashids = new \Hashids\Hashids($salt, $minHashLength);
    return $hashids->encode($member_id);
}
```



```php
/**
 * 邀请码解密
 *
 * 依赖 hashids/hashids 扩展库
 *
 * @param $invite_code
 * @return int|mixed
 */
function decode_invite_code($invite_code)
{
    $salt = '#ev009';
    $minHashLength = 7;
    $hashids = new \Hashids\Hashids($salt, $minHashLength);
    return !empty($hashids->decode($invite_code)) ? $hashids->decode($invite_code)[0] : 0;
}
```



## phpmailer/phpmailer *6.5.1*

?> PHPMailer is a full-featured email creation and transfer class for PHP.  
<i class="bi bi-translate dark-yellow"></i> PHPMailer是一个全功能的PHP电子邮件创建和传输类。

<i class="fa fa-github fa-lg"></i> https://github.com/PHPMailer/PHPMailer

<span class="icon octicon-file composer-icon medium-yellow "></span> https://packagist.org/packages/phpmailer/phpmailer

```php
/**
 * 发送Gmail邮件
 * 本方式只适应于版本 6.5.1
 */
protected function sendGmail($to_email, $message)
{
    $mail = new PHPMailer(true);
    try {
        //使用STMP服务
        $mail->isSMTP();

        //这里使用我们第二步设置的stmp服务地址
        $mail->Host = "smtp.gmail.com";

        //设置是否进行权限校验
        $mail->SMTPAuth = true;

        //第二步中登录网易邮箱的账号
        $mail->Username = "caiyongwen9@gmail.com";

        //客户端授权密码，注意不是登录密码
        $mail->Password = "refqzrcmlrkkvlbm";

        //使用ssl协议
        $mail->SMTPSecure = 'ssl';

        //端口设置
        $mail->Port = 465;

        //字符集设置，防止中文乱码
        $mail->CharSet= "utf-8";

        //设置邮箱的来源，邮箱与$mail->Username一致，名称随意
        $mail->setFrom("caiyongwen9@gmail.com", "Covid 19");

        //设置收件的邮箱地址
        $mail->addAddress($to_email);

        //设置回复地址，一般与来源保持一直
        $mail->addReplyTo("caiyongwen9@gmail.com", "Covid 19");

        $mail->isHTML(true);
        //标题
        $mail->Subject = '欢迎注册Covid 19';
        //正文
        //            $mail->Body    = '你本次注册的验证码为：'.$code.'，请在5分钟之内使用它！';
        $mail->Body = $message;
        $mail->send();
        return true;
    } catch (\Exception $e) {
        throw $e;
    }
}
```

