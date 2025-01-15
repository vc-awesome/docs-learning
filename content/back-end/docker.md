# Docker

![docker](https://www.docker.com/wp-content/uploads/2021/10/contributors_1.png.webp)


## 简介

> Docker is a platform designed to help developers build, share, and run container applications. We handle the tedious setup, so you can focus on the code.

![GitHub followers](https://img.shields.io/github/followers/docker)
![GitHub Org's stars](https://img.shields.io/github/stars/docker)


## 官方

官网：https://www.docker.com/ - *Home - Docker*

文档：https://docs.docker.com/ - *Docker Documentation | Docker Documentation*

GitHub：https://github.com/docker - *Docker helps developers bring their ideas to life by conquering the complexity of app development.*


## 教程

1. https://www.runoob.com/docker/docker-tutorial.html - *Docker 教程 | 菜鸟教程*

2. http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html - *Docker 入门教程 - 阮一峰的网络日志*


## 安装

1. https://docs.docker.com/get-docker/ - *Get Docker | Docker Documentation*

2. https://get.daocloud.io/ - *DaoCloud | Docker 极速下载*


### Windows

1. https://www.runoob.com/docker/windows-docker-install.html - *Windows Docker 安装 | 菜鸟教程*


#### Desktop for Windows 版本

最新版本：

1. https://docs.docker.com/desktop/windows/install/ - *Install Docker Desktop on Windows | Docker Documentation*

历史版本：

1. https://docs.docker.com/desktop/windows/release-notes/3.x/ - *Docker for Windows 3.x release notes | Docker Documentation*

2. https://docs.docker.com/desktop/windows/release-notes/2.x/ - *Docker for Windows 2.x release notes | Docker Documentation*


#### Older versions for Windows

!> 停止更新，适用低版本 windows 10

历史版本：

1. https://docs.docker.com/desktop/windows/release-notes/archive/ - *Release notes for previous versions | Docker Documentation*

参考链接：

1. https://juejin.cn/post/6875942368214777863 - *低版本 win 10 安装 Docker 的那些坑*

2. https://blog.csdn.net/weixin_44818729/article/details/105747134 - *在DockerToolbox安装docker - Windows 10 各种坑 (吐血超全总结)*

3. http://blog.baibaota.com/959.html - *win7下安装docker和Docker Toolbox并进行国内加速*

4. http://www.360doc.com/content/18/0320/17/44856983_738776249.shtml - *windows下安装docker（纠正报错） 加速**kali镜像*


##### Docker Toolbox

> 低版本 windows 系统使用此方式安装，适用 windows 7 / windows 8

1. https://docs.docker.com/toolbox/ - *Docker Desktop | Docker Documentation*

2. http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/ - *docker-toolbox-windows-docker-toolbox安装包下载_开源镜像站-阿里云*

3. daocloud：https://get.daocloud.io/toolbox/ - *Index of Docker Toolbox*


### Linux

1. https://docs.docker.com/engine/install/ - *Install Docker Engine | Docker Documentation*


### macOS

1. https://docs.docker.com/desktop/mac/install/ - *Install Docker Desktop on Mac | Docker Documentation*

2. https://www.runoob.com/docker/macos-docker-install.html - *MacOS Docker 安装 | 菜鸟教程*

3. https://formulae.brew.sh/cask/docker - *docker — Homebrew Formulae*


## 快速入门

### 镜像加速

https://www.runoob.com/docker/docker-mirror-acceleration.html - *Docker 镜像加速 | 菜鸟教程*

> 以下内容来源于：https://www.runoob.com/docker/docker-resources.html - *Docker 镜像加速 | 菜鸟教程*

1. 阿里云的加速器：~~https://help.aliyun.com/document_detail/60750.html~~
2. 网易加速器：~~http://hub-mirror.c.163.com~~
3. 官方中国加速器：~~https://registry.docker-cn.com~~
4. ustc 的镜像：~~https://docker.mirrors.ustc.edu.cn~~
5. daocloud：~~<https://www.daocloud.io/mirror#accelerator-doc>（需注册后使用）~~

其它镜像：

1. https://dockerproxy.com/ - *Docker Proxy 镜像加速*
2. https://dockerhub.icu/ - *DockerHub容器镜像库|应用容器化* [via](https://blog.csdn.net/clearloe/article/details/139711335)
3. https://github.com/DaoCloud/public-image-mirror - *GitHub - DaoCloud/public-image-mirror: 很多镜像都在国外。比如 gcr 。国内下载很慢，需要加速。致力于提供连接全世界的稳定可靠安全的容器镜像服务。*\
    _via https://cloud.tencent.com/developer/article/2434428 - *国内无法拉取Docker镜像了？这些方法拯救你的Docker-腾讯云开发者社区-腾讯云*_ \
    ![GitHub last commit](https://img.shields.io/github/last-commit/DaoCloud/public-image-mirror?logo=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/DaoCloud/public-image-mirror?style=social)
4. https://github.com/gebangfeng/docker-mirror - *GitHub - gebangfeng/docker-mirror: 整理各大docker,容器镜像仓库的国内镜像源*\
    ![GitHub last commit](https://img.shields.io/github/last-commit/gebangfeng/docker-mirror?logo=github&color=blue)
    ![GitHub Repo stars](https://img.shields.io/github/stars/gebangfeng/docker-mirror?style=social)


### Hub（仓库）

> Docker 的官方仓库 Docker Hub 是最重要、最常用的 image 仓库。

dockerhub：https://hub.docker.com/search?q=


## 常见问题

docker ⇣


### 2022/05/17

1. https://www.cnblogs.com/ejar/p/15888444.html - *Docker 中安装宝塔面板*

2. https://blog.csdn.net/weixin_43865008/article/details/122111611 - *教你如何修改运行中的docker容器的端口映射的三种方式*

3. https://www.cnblogs.com/R-S-PY/p/12680870.html - *macOS修改Docker容器的端口映射配置* 

4. https://blog.csdn.net/qq_37781649/article/details/106091723 - *Docker运维系列 | Mac 系统 Docker 创建过的容器如何修改映射端口*

5. https://blog.csdn.net/m0_38112165/article/details/120116336 - *mac docker ~/Library/Containers/com.docker.docker/Data/vms/0/tty: No such file or directory解决办法*

6. https://blog.csdn.net/JunyouYH/article/details/119964415 - *宝塔面板远程登录连接FTP空间详细教程*

---

1. https://www.csdn.net/tags/NtDaYg0sNDA4My1ibG9n.html - *Windows安装Docker*

2. https://baijiahao.baidu.com/s?id=1715415573263062604 - *Windows11安装Docker并迁移镜像到非系统盘*

3. https://blog.csdn.net/nero_claudius/article/details/84778710 - *Docker镜像下载加速的两种方法*


### 2019/03/15

1. https://blog.csdn.net/u013931660/article/details/85210787 - *Docker for Windows 的安装及搭建PHP开发环境，踩坑。*

2. https://blog.csdn.net/u012946310/article/details/82492034 - *docker 容器安装 vim 编辑器*

3. https://www.cnblogs.com/daxnet/p/7719574.html - *Windows 10下Docker使用经验谈*

4. http://www.cnblogs.com/linjj/p/5606687.html - *Windows10下的docker安装与入门 （一）使用docker toolbox安装docke*

5. https://blog.csdn.net/qq_32008505/article/details/88022353 - *Windwos下使用Docker搭建Swoole环境*

6. https://blog.csdn.net/yangqinjiang/article/details/78332682 - *搭建docker+swoole+php7 的环境*

7. https://www.cnblogs.com/MrEgg1013/p/8438988.html - *在Docker下搭建Apache+PHP+mysql环境的过程记录*

8. https://blog.csdn.net/jay100500/article/details/76473406 - *Docker运行nginx镜像及docker网络端口映射*

9. https://blog.csdn.net/q85795362/article/details/79093233 - *win10安装docker及简单php5.6/nginx1.10.3/mysql5.6环境*

10. https://www.cnblogs.com/Dong-Ge/p/9642757.html - *win7下docker环境搭建nginx+php-fpm+easyswoole开发环境*

11. https://blog.csdn.net/xgxwutu/article/details/56850409 - *Docker for Windows Nginx&PHP 使用*

12. https://blog.csdn.net/sure0824/article/details/82753172 - *Win10 docker 创建lnmp镜像*
