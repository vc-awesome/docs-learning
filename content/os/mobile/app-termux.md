## Official

Website：https://termux.dev/ - *Termux | The main termux site and help pages.*

Wiki：https://wiki.termux.com/wiki/ - *Termux Wiki*

GitHub：https://github.com/termux - *Android terminal emulator and Linux environment.*

## Install

GitHub：https://github.com/termux/termux-app - *Termux - a terminal emulator application for Android OS extendible by variety of packages.*

F-Droid：https://f-droid.org/en/packages/com.termux/ - *Termux | F-Droid - Free and Open Source Android App Repository*

## Getting started

https://www.ruanyifeng.com/blog/2019/07/termux-tutorial.html - *Termux 入门教程：架设手机 Server 下载文件 - 阮一峰的网络日志*

### 更换镜像源

https://mirrors.tuna.tsinghua.edu.cn/help/termux/ - *termux | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror*

### Addons

- [Termux:API](https://f-droid.org/en/packages/com.termux.api/)
- [Termux:Widget](https://wiki.termux.com/wiki/Termux:Widget)

## FAQ

### 如何将 Apache 的网站默认路径，修改为手机本地存储？

1. 开启“访问本机存储”，参考“[手机电脑互传文件](https://blog.csdn.net/xiao_qi_tong/article/details/122628099)”

    `$ termux-setup-storage`
    
    ```
    termux-setup-storage
    ```
    
    `$ pkg install tree`
    
    ```
    pkg install tree
    ```
    
    `$ tree`
    
    ```
    tree
    ```

2. 开启 root 权限（否则无权修改 *httpd.conf* 配置文件），参考“[Termux详细教程！-进阶配置-超级管理员身份-手机没有root](https://blog.csdn.net/xiao_yi_xiao/article/details/120470295#t28)”

    `$ pkg install proot -y`
    
    ```
    pkg install proot -y
    ```
    
    `$ termux-chroot`
    
    ```
    termux-chroot
    ```

3. 安装 Apache，参考“[Termux详细教程！-开发环境-Apache](https://blog.csdn.net/xiao_yi_xiao/article/details/120470295#t38)”

    `$ pkg install apache2`
    
    ```
    pkg install apache2
    ```

4. 备份配置文件（可选操作）

    `$ cp $PREFIX/etc/apache2/httpd.conf httpd.conf.bak`
    
    ```
    cp $PREFIX/etc/apache2/httpd.conf httpd.conf.bak
    ```

5. 修改配置文件

    `$ pkg install vim`
    
    ```
    pkg install vim
    ```
    
    `$ cd /`
    
    `$ vim $PREFIX/etc/apache2/httpd.conf`
    
    ```
    vim $PREFIX/etc/apache2/httpd.conf
    ```
    
    将下列行
    
    `DocumentRoot "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs"
    <Directory "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs">
    `
    
    ```
    DocumentRoot "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs"
    <Directory "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs">
    ```
    
    修改为
    
    `DocumentRoot "/home/storage/shared/documents/markor/github/docs-learning"
    <Directory "/home/storage/shared/documents/markor/github/docs-learning">
    `
    
    ```
    DocumentRoot "/home/storage/shared/documents/markor/github/docs-learning"
    <Directory "/home/storage/shared/documents/markor/github/docs-learning">
    ```
    
    > 快捷修改：
    >
    > 在 vim 中字符串替换（一般操作此步一次即可）
    >
    > 
    > ```
    > :%s/"\/data\/data\/com.termux\/files\/usr\/share\/apache2\/default-site\/htdocs"/"\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"/
    > ```
    >
    > 在 vim 中字符串搜索
    >
    > 
    > ```
    > /"\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"
    > ```

6. 重启 Apache

    `$ apachectl restart`
    
    ```
    apachectl restart
    ```

7. 配置完上述操作重启应用

    1.  打开 “Termux”，按顺序执行下列 2 条命令

     ```
     termux-chroot
     ```
     
     ```
     apachectl restart
     ```

    2. 打开 “网页浏览器”，输入网址：http://127.0.0.1:8080 ，能访问网页说明配置成功。

### 如何在 vim 中搜索字符并上下查找？

> 以上述为例

1.  打开 vim

    ```
    vim $PREFIX/etc/apache2/httpd.conf
    ```

2. 将下列代码复制粘贴过去

    ```
    /"\/home\/storage\/shared\/documents\/markor\/github\/docs-learning"
    ```

3.  键盘按下回车键

4. 如需 “查找下一个”，按 n 键；“查找上一个”：按 N 键

## Reference link

### 参考博文

1. https://zhuanlan.zhihu.com/p/95865982 - *极致安卓之—Termux安装完整版Linux - 知乎*

2. https://blog.csdn.net/xiao_yi_xiao/article/details/120470295 - *Termux详细教程！欧晨eli的博客-CSDN博客termux*

3. http://zxlwpq.com/huodong/31018.html - *Termux 高级终端安装使用配置教程(建议PC)*

4. https://zhuanlan.zhihu.com/p/40740388 - *要啥自行车之Termux:将我们的安卓手机打造成全能的服务器 - 知乎*

5. https://www.cnblogs.com/heiu/p/14757410.html - *安装一些服务：termux奇门遁甲*

6. https://blog.csdn.net/m0_59677938/article/details/124903218 - *废旧手机安装Syncthing作为文件服务器_m0_59677938的博客-CSDN博客*