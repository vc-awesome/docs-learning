## 局域网搭建文件下载和上传功能服务器

```nginx
# phpstudy下配置文件 192.168.31.105_8083.conf
server {
        listen        8083;
        server_name  192.168.31.105;
        charset utf-8;
        root   "E:/vc_service/download";
        
        # 添加以下配置--start
        location / {
            autoindex on;
            autoindex_exact_size off;
            autoindex_localtime on;
        }
        # 添加配置--end
        
        location ~ \.php(.*)$ {
            fastcgi_pass   127.0.0.1:9012;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }
}
```

参考链接：

1. https://blog.csdn.net/weixin_42039699/article/details/118356050 - *文件下载和上传功能服务器搭建配置* 「**Tags**: *nginx、✔miniserve、nodejs*」

2. https://www.jianshu.com/p/806a7def3982 - *Nginx 搭建文件服务器*

3. https://www.lmlphp.com/user/51901/article/item/564363/ - *用nginx搭建简单的文件下载服务器的方法*

4. https://blog.csdn.net/zljszn/article/details/121796235 - *利用nginx搭建一个文件下载服务器*

## 内网穿透

### 参考

1. https://blog.csdn.net/qq_37429313/article/details/113386866 - *内网穿透教程__WILLPOWER_的博客-CSDN博客_路由器内网穿透*

2. https://baike.baidu.com/item/%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F/8597835 - *内网穿透_百度百科*

3. https://blog.csdn.net/weixin_42063820/article/details/124563983 - *实现内网穿透_scanner小霸王的博客-CSDN博客_内网透传*

4. https://blog.csdn.net/qq_40165417/article/details/103759804 - *内网穿透--五分钟完成搭建(从零开始)_本可奈何的博客-CSDN博客*

5. https://service.oray.com/question/3579.htmlwebdav - *搭建私有云盘（NAS+花生壳内网穿透）-贝锐官网*

6. https://www.jianshu.com/p/bbc966c05009 - *3分钟用PC搭建自己的私人云盘 + 内网穿透 - 简书*

7. https://blog.csdn.net/qq_41676577/article/details/112856663 - *树莓派云盘内网穿透及扩容_树莓派爱好者基地的博客-CSDN博客*

8. https://blog.csdn.net/lidashent/article/details/115695503 - *使用ipv6内网穿透，实现私有云盘搭建，实现远程控制等功能_lidashent的博客-CSDN博客_ipv6访问内网设备*

9. https://freefrp.net/ - *Free FRP 免费 FRP 内网穿透*

### 工具
1. https://github.com/ehang-io/nps - *一款轻量级、高性能、功能强大的内网穿透代理服务器。支持tcp、udp、socks5、http等几乎所有流量转发，可用来访问内网网站、本地支付接口调试、ssh访问、远程桌面，内网dns解析、内网socks5代理等等……，并带有功能强大的web管理端。a lightweight, high-performance, powerful intranet penetration proxy server, with a powerful web management terminal.* [via](https://www.tenlonstudio.com/17213.html/comment-page-1)

   ![GitHub last commit](https://img.shields.io/github/last-commit/ehang-io/nps?color=blue&logo=github&style=flat-square)

2. https://github.com/fatedier/frp - *A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.*

  ![GitHub last commit](https://flat.badgen.net/github/last-commit/fatedier/frp?icon=github&color=blue)

  https://sspai.com/post/73283 - *简单几步实现内网穿透 - 少数派*

## 多语言

程序切换语言含国旗可参考

1. https://igoutu.cn

## 防盗链

## 进度条

1. 页面进度条
2. ajax 进度条

## 使用 CSS 渐变替换共用背景图

## 压缩图片

## 切换主题
