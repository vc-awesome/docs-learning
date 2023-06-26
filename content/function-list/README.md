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

参考链接

1. https://blog.csdn.net/weixin_42039699/article/details/118356050 - *文件下载和上传功能服务器搭建配置* 「**Tags**: *nginx、✔miniserve、nodejs*」

2. https://www.jianshu.com/p/806a7def3982 - *Nginx 搭建文件服务器*

3. https://www.lmlphp.com/user/51901/article/item/564363/ - *用nginx搭建简单的文件下载服务器的方法*

4. https://blog.csdn.net/zljszn/article/details/121796235 - *利用nginx搭建一个文件下载服务器*

## 多语言

程序切换语言含国旗可参考

1. https://igoutu.cn

## 防盗链

## 进度条

1. 页面进度条
2. ajax 进度条

## 使用 css 渐变替换共用背景图

## 压缩图片

## 切换主题
