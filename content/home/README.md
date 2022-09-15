程序切换语言含国旗可参考 <https://igoutu.cn/>



## Standard<i class="ri-rocket-line"></i>

> 开发规范（标准）

[JAVA开发中的一些规范讲解(阿里巴巴Java开发规范手册)](https://www.jb51.net/article/137783.htm)



[Github上编码规范开源项目推荐 - GitHub中文社区](https://www.githubs.cn/collections/style-guide)



## 源码解读

`js`源码解读

## 功能列表

- 局域网搭建文件下载和上传功能服务器

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

  https://blog.csdn.net/weixin_42039699/article/details/118356050 *文件下载和上传功能服务器搭建配置* 「**Tags**: *nginx、✔miniserve、nodejs*」

  https://www.jianshu.com/p/806a7def3982 *Nginx 搭建文件服务器*

  https://www.lmlphp.com/user/51901/article/item/564363/ *用nginx搭建简单的文件下载服务器的方法*

  https://blog.csdn.net/zljszn/article/details/121796235 *利用nginx搭建一个文件下载服务器*



## 镜像站

- http://mirrors.163.com/ - *网易开源镜像站*

- https://mirrors.tuna.tsinghua.edu.cn/ - *清华大学开源软件镜像站*

- https://mirrors.ustc.edu.cn/ - *中国科学技术大学开源镜像站*

- GitHub
  - https://ghproxy.com/ - *GitHub Proxy 代理加速*
  - https://zgq-inc.github.io/overthefirewall/#speedup_download - *Github文件加速下载*
  - <https://greasyfork.org/zh-CN/scripts/412245-github-增强-高速下载> - *Github 增强 - 高速下载*



## Warning

> [!WARNING] 开发过程中，尽可能在无痕，且没安装任何扩展程序的浏览器中运行测试；因为扩展程序中的脚本会窜程序，导致发生意想不到的错误。
> 比如（亲身经历）：
>
> 1. 浏览器安装了鼠标手势扩展程序，使得 tp6 中的表单令牌，前端 token 请求页面获取一次，后端 token 请求页面获取一次加上扩展程序请求了一次url，从而重置了两次token，导致前后端验证失败；
> 2. 服务器生产环境，使用了有扩展程序的浏览器，导致操作只访问url一次，而扩展程序脚本也请求了一次，使得后端接收了两次请求，造成重复插入数据问题。
>

