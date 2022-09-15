## official

Website：https://termux.dev/ - *Termux | The main termux site and help pages.*

Wiki：https://wiki.termux.com/wiki/ - *Termux Wiki*

GitHub：https://github.com/termux - *Android terminal emulator and Linux environment.*

## link

Mirror：https://mirrors.tuna.tsinghua.edu.cn/help/termux/ - *termux | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror*

## install

GitHub：https://github.com/termux/termux-app - *Termux - a terminal emulator application for Android OS extendible by variety of packages.*

F-Droid：https://f-droid.org/en/packages/com.termux/ - *Termux | F-Droid - Free and Open Source Android App Repository*

## getting started

https://www.ruanyifeng.com/blog/2019/07/termux-tutorial.html - *Termux 入门教程：架设手机 Server 下载文件 - 阮一峰的网络日志*

## faq

- 如何将 Apache 的网站默认路径，修改为手机本地存储

  1. 开启访问本机存储 [via](https://blog.csdn.net/xiao_qi_tong/article/details/122628099)

     `$ termux-setup-storage`

     `$ tree`

  2. 开启 root 权限（否则无权修改 *httpd.conf* 配置文件） [via](https://blog.csdn.net/xiao_yi_xiao/article/details/120470295#t28)

     `$ pkg install proot -y`

     `$ termux-chroot`

  3. 备份配置文件（可选操作）

     `cp $PREFIX/etc/apache2/httpd.conf httpd.conf.bak`

  4. 修改配置文件

     `$ cd /`

     `$ vim $PREFIX/etc/apache2/httpd.conf`

     将下列行

     ```
     DocumentRoot "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs"
     <Directory "/data/data/com.termux/files/usr/share/apache2/default-site/htdocs">
     ```

     修改为

     ```
     DocumentRoot "/home/storage/shared/documents/markor/docs-learning"
     <Directory "/home/storage/shared/documents/markor/docs-learning">
     ```

  5. 重启 Apache

     `$ apachectl restart`

## reference

https://zhuanlan.zhihu.com/p/95865982 - *极致安卓之—Termux安装完整版Linux - 知乎*

https://blog.csdn.net/xiao_yi_xiao/article/details/120470295 - *Termux详细教程！欧晨eli的博客-CSDN博客termux*

http://zxlwpq.com/huodong/31018.html - *Termux 高级终端安装使用配置教程(建议PC)*

https://zhuanlan.zhihu.com/p/40740388 - *要啥自行车之Termux:将我们的安卓手机打造成全能的服务器 - 知乎*

https://www.cnblogs.com/heiu/p/14757410.html - *安装一些服务：termux奇门遁甲*

https://blog.csdn.net/m0_59677938/article/details/124903218 - *废旧手机安装Syncthing作为文件服务器_m0_59677938的博客-CSDN博客*