# 文件同步

> 💡
> 增量备份：就是说新增加的文件和改动过的文件才备份，没有变化的文件不备份。

网络文件同步（备份）工具：

1. [Syncthing](#syncthing)
2. [FolderSync](#folder-sync)

本地文件同步（备份）工具：

1. [FolderSync](#folder-sync)

搜索：

- http://www.8fe.com/jiaocheng/1897.html - *10款好用的文件同步软件推荐合集*
- https://post.smzdm.com/p/an3z0g20/ - *聊聊文件同步的解决方案，疫情之下居家办公应该会用到*
- https://post.smzdm.com/p/ao9kpx57/ - *堪称神器的软件 篇三：电脑和手机的数据备份指南，兼备份软件推荐*

## 同步工具

https://www.360doc.cn/article/40076021_1027046370.html - _推荐四款实用的局域网文件夹同步工具_

同时支持“客户端”和“服务端”的工具：

1. ✅ [Syncthing](https://syncthing.net/) - *Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet.*

   - 支持 Windows, macOS, Linux, Android（Google Play, F-Droid）

   - 开源免费（[GitHub Repo](https://github.com/syncthing/syncthing)）

    ![GitHub last commit](https://img.shields.io/github/last-commit/syncthing/syncthing?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/syncthing/syncthing?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/syncthing/syncthing?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/syncthing/syncthing?style=social)

2. ✅ [质感文件（Material Files）]() - *开源的 Material Design 文件管理器*

    - 支持 Android（[GitHub Releases](https://github.com/zhanghai/MaterialFiles/releases/), [Google Play](https://play.google.com/store/apps/details?id=me.zhanghai.android.files), [F-Droid](https://f-droid.org/packages/me.zhanghai.android.files)）

    - 开源软件（[GitHub Repo](https://github.com/zhanghai/MaterialFiles)）

    ![GitHub last commit](https://img.shields.io/github/last-commit/zhanghai/MaterialFiles?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/zhanghai/MaterialFiles?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/zhanghai/MaterialFiles?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/zhanghai/MaterialFiles?style=social)

### 客户端

暂无

### 服务端

暂无

## 网络存储工具

### 云服务

#### Box

暂无

#### Dropbox

暂无

#### OneDrive

暂无

#### Google Drive

暂无

#### Nextcloud

[Nextcloud - Open source content collaboration platform](https://nextcloud.com/) - *The most popular self-hosted collaboration solution for tens of millions of users at thousands of organizations across the globe*

- 支持 Windows, macOS, Linux, Android, iOS

- 开源软件（[GitHub Org](https://github.com/nextcloud)）

- 注册登录（开通会员解锁更多功能）

### 文件协议

~~http://www.menglei.net/3582/ - *FOLDERSYNC一款支持各大国外网盘同步的软件*~~

- FTP/FTPES/FTPS
- SFTP
- WebDAV
- Samba/SMB/CIFS (SMB1 only)

#### FTP server

暂无

#### SFTP server

暂无

#### SMB server

暂无

#### WebDAV server

1. https://baijiahao.baidu.com/s?id=1666954457030652604 - *WebDAV是什么，有哪些支持webdav的网盘和工具？*
2. https://baijiahao.baidu.com/s?id=1716111755399982472 - *含WebDAV 文件管理类工具汇总*
3. https://zhuanlan.zhihu.com/p/465265875 - _支持WebDAV的国内外网盘整理汇总_
4. https://www.rmnof.com/article/cloud-drive-support-webdav/ - _支持WebDAV的云盘/网盘总结（持续更新）_
5. https://www.banzhuti.com/webdav-wangpan.html - _支持WebDAV的网盘汇总对比-包含各大国内外网盘WebDAV服务器地址及连接方式_

## 用法

### 自建网盘

> 自建“私有云”。

1. [Nextcloud - Open source content collaboration platform](https://nextcloud.com/) - *The most popular self-hosted collaboration solution for tens of millions of users at thousands of organizations across the globe*

    - 支持 Windows, macOS, Linux, Android, iOS

    - 开源软件（[GitHub Org](https://github.com/nextcloud)）

    - 注册登录（开通会员解锁更多功能）

2. NAS

    - https://baike.baidu.com/item/NAS/3465615 - *NAS_百度百科*
    - https://www.synology.cn/zh-cn - *群晖科技 Synology Inc.*

### 挂载网盘

1. https://jingyan.baidu.com/article/2f9b480d9d0f9e00cb6cc2c9.html - *如何挂载网盘到本地-百度经验*
2. https://blog.csdn.net/qq_40903527/article/details/127497825 - *将各种网盘挂载到本地，可以使用磁盘操作（建议收藏）_都是地址而已的博客-CSDN博客*
3. https://baijiahao.baidu.com/s?id=1749059137522588033 - *windows10系统下nextcloud服务的webdav网盘挂载方法*
4. https://www.bilibili.com/read/mobile?id=12704041 - *W10+Sharelist+Raidrive+Webdav+天翼云盘/阿里云盘/Onedrive 本地存储 - 哔哩哔哩*

## 常见问题

### 应用程序如何连接网盘进行同步？

1. https://joplinapp.org/help/#synchronisation - *Joplin - an open source note taking and to-do application with synchronisation capabilities*
