# 文件同步与对比

## 概述

> 💡
> 增量备份：就是说新增加的文件和改动过的文件才备份，没有变化的文件不备份。

网络文件同步（备份）工具：

1. [FolderSync](os/tools/app.md#folder-sync)
2. [Rclone](#rclone)
3. [Syncthing](os/tools/app.md#syncthing)

本地文件同步（备份）工具：

1. [FolderSync](os/tools/app.md#folder-sync)
2. [Rclone](#rclone)

搜索：

- http://www.8fe.com/jiaocheng/1897.html - *10款好用的文件同步软件推荐合集*
- https://post.smzdm.com/p/an3z0g20/ - *聊聊文件同步的解决方案，疫情之下居家办公应该会用到*
- https://post.smzdm.com/p/ao9kpx57/ - *堪称神器的软件 篇三：电脑和手机的数据备份指南，兼备份软件推荐*

## 对比工具

### colordiff

https://repology.org/project/colordiff/versions - *colordiff package versions - Repology*

## 同步工具

https://www.360doc.cn/article/40076021_1027046370.html - _推荐四款实用的局域网文件夹同步工具_

同时支持“客户端”和“服务端”的工具：

1. [Syncthing](https://syncthing.net/) - *Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet.*

    ![GitHub last commit](https://img.shields.io/github/last-commit/syncthing/syncthing?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/syncthing/syncthing?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/syncthing/syncthing?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/syncthing/syncthing?style=social)

   - 支持 Windows, macOS, Linux, Android（Google Play, F-Droid）

   - 开源免费（[GitHub Repo](https://github.com/syncthing/syncthing)）

2. [Material Files]() - *开源的 Material Design 文件管理器*

    ![GitHub last commit](https://img.shields.io/github/last-commit/zhanghai/MaterialFiles?logo=github&color=blue)
    ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/zhanghai/MaterialFiles?display_date=published_at&logo=github)
    ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/zhanghai/MaterialFiles?logo=github)
    ![GitHub Repo stars](https://img.shields.io/github/stars/zhanghai/MaterialFiles?style=social)

    - 支持 Android（[GitHub Releases](https://github.com/zhanghai/MaterialFiles/releases/), [Google Play](https://play.google.com/store/apps/details?id=me.zhanghai.android.files), [F-Droid](https://f-droid.org/packages/me.zhanghai.android.files)）

    - 开源软件（[GitHub Repo](https://github.com/zhanghai/MaterialFiles)）

### Rclone

[Rclone](https://rclone.org/) - *Rclone syncs your files to cloud storage: Google Drive, S3, Swift, Dropbox, Google Cloud Storage, Azure, Box and many more.* [使用手册](os/tools/developer/rclone.md)

### Rsync

[rsync](https://rsync.samba.org/) - *Utility that provides fast incremental file transfer*

## 存储系统

https://rclone.org/#providers - *Rclone*

### 云服务

#### Box

[Secure, AI-Powered Content Management, Workflow &amp; Collaboration](https://www.box.com/home) - *The intelligent Content Cloud makes it easy to automate workflows, collaborate internally and externally, and protect your sensitive data, all on one platform.*

- 支持 Windows, macOS, Android, iOS

#### Dropbox

[Dropbox.com](https://www.dropbox.com/) - *Dropbox 提供的各种工具有助于您快速完成工作，保障工作资料的安全，并让您轻松开展协作。* 🚫

- 支持 Windows, macOS, Android, iOS

#### Google Drive

[Google 云端硬盘：利用安全的云端存储空间在线共享文件 | Google Workspace](https://workspace.google.com/intl/zh-CN/products/drive/) - *借助 Google 云端硬盘的文件共享平台，用户可以在安全的个人云存储空间中与其他用户共享内容。欢迎了解详情。* 🚫

- 支持 Android, iOS

#### Microsoft OneDrive

[OneDrive](https://www.microsoft.com/zh-cn/microsoft-365/onedrive/online-cloud-storage) - *个人云储存空间-Microsoft OneDrive登录下载使用 | OneDrive* [OneDrive 帮助和学习](https://support.microsoft.com/zh-CN/onedrive)

- 支持 Windows, macOS, Linux（[非官方](https://github.com/abraunegg/onedrive)）, Android（[Google Play](https://play.google.com/store/apps/details?id=com.microsoft.skydrive)）, iOS, Web

- 注册登录（开通会员解锁更多功能）

#### Nextcloud

[Nextcloud - Open source content collaboration platform](https://nextcloud.com/) - *The most popular self-hosted collaboration solution for tens of millions of users at thousands of organizations across the globe*

- 支持 Windows, macOS, Linux, Android, iOS

- 开源软件（[GitHub Org](https://github.com/nextcloud)）

- 注册登录（开通会员解锁更多功能）

#### ownCloud

[ownCloud - share files and folders, easy and secure](https://owncloud.com/) - *ownCloud, your file platform. The most essential business tool for enterprise-grade file sync and share.*

- 支持 Windows, macOS, Linux, Android, iOS, Web, Server

- 开源软件（[GitHub Org](https://github.com/owncloud)）

#### Yandex.Disk

[Yandex Disk](https://disk.yandex.com/) - *Your files are safe on Yandex Disk. You can access them at any time and on any device.* 🚫

- 支持 Windows, macOS, Android, iOS

### 文件协议

~~http://www.menglei.net/3582/ - *FOLDERSYNC一款支持各大国外网盘同步的软件*~~

- FTP/FTPES/FTPS
- SFTP
- WebDAV
- Samba/SMB/CIFS (SMB1 only)

#### DLNA Server

暂无

#### FTP Server

FTP（File Transfer Protocol）是一种用于在计算机网络上进行文件传输的标准网络协议。它允许用户在客户端和服务器之间上传和下载文件，广泛应用于网站管理、数据备份和文件共享等场景。

FTP 的主要特点包括：

1. **文件传输**：支持文件的上传（从客户端到服务器）和下载（从服务器到客户端）。
2. **目录管理**：允许用户浏览和管理远程服务器上的目录和文件。
3. **多种传输模式**：支持两种传输模式：ASCII 模式（用于文本文件）和二进制模式（用于图像、音频等非文本文件）。
4. **身份验证**：通常需要用户名和密码进行身份验证，但也支持匿名访问（即不需要用户名和密码）。
5. **支持多种操作系统**：FTP 可以在不同的操作系统之间进行文件传输，如 Windows、Linux 和 macOS 等。

尽管 FTP 在文件传输方面非常有效，但它的安全性较低，因为数据在传输过程中未加密，容易受到窃听和攻击。因此，许多现代应用程序和服务更倾向于使用更安全的协议，如 SFTP（SSH File Transfer Protocol）或 FTPS（FTP Secure），这些协议在 FTP 的基础上增加了加密和安全性。

#### HTTP Server

暂无

#### SFTP Server

SFTP（SSH File Transfer Protocol）是一种安全的文件传输协议，基于 SSH（Secure Shell）协议。它用于在网络上安全地传输文件，并提供了一种加密的方式来保护数据的机密性和完整性。

SFTP 的主要特点包括：

1. **安全性**：SFTP 通过 SSH 协议提供加密，确保数据在传输过程中不被窃听或篡改。
2. **文件传输**：支持文件的上传、下载、删除、重命名等操作。
3. **目录操作**：允许用户浏览和管理远程服务器上的目录。
4. **身份验证**：使用 SSH 的身份验证机制，支持多种身份验证方式，如密码、SSH 密钥等。
5. **可靠性**：SFTP 在传输过程中提供错误检测和恢复机制，确保文件传输的可靠性。

SFTP 常用于需要安全文件传输的场景，如远程服务器管理、网站维护和数据备份等。与传统的 FTP（File Transfer Protocol）相比，SFTP 提供了更高的安全性，因此在现代网络环境中更为常用。

#### SMB Server

SMB（Server Message Block）是一种网络协议，主要用于在计算机网络中共享文件、打印机和其他资源。它允许应用程序在网络上的计算机之间读取和写入文件，并请求服务。SMB 协议最初由 IBM 开发，后来被 Microsoft 广泛采用，并成为 Windows 操作系统中用于文件和打印共享的主要协议。

SMB 的主要特点包括：

1. **文件共享**：允许用户在网络上访问和共享文件夹和文件。
2. **打印共享**：支持网络打印机的共享，用户可以通过网络发送打印任务。
3. **网络浏览**：提供网络资源的浏览功能，用户可以查看网络上可用的共享资源。
4. **身份验证**：支持用户身份验证，确保只有授权用户才能访问共享资源。
5. **会话管理**：支持多个会话的管理，允许多个用户同时连接到同一资源。

SMB 协议的不同版本（如 SMB1、SMB2、SMB3）在性能、安全性和功能上有所改进。SMB3 引入了加密和更好的性能优化，适用于现代网络环境。SMB 广泛应用于企业网络和家庭网络中，尤其是在 Windows 环境中。

#### WebDAV Server

WebDAV（Web-based Distributed Authoring and Versioning）是一种基于 HTTP 协议的扩展，用于在 Web 上进行分布式创作和版本控制。它允许用户通过网络对文件进行管理和编辑，提供了一种在 Web 服务器上进行文件操作的标准方法。

WebDAV 的主要功能包括：

1. **文件管理**：用户可以上传、下载、删除和移动文件。
2. **版本控制**：支持文件的版本管理，允许用户查看和恢复先前的版本。
3. **锁定机制**：提供文件锁定功能，防止多个用户同时编辑同一文件，从而避免冲突。
4. **属性管理**：允许用户设置和管理文件的元数据（如作者、创建日期等）。

WebDAV 常用于协作环境中，例如团队共享文档、内容管理系统等。许多操作系统和应用程序都支持 WebDAV，使得用户可以像访问本地文件一样访问远程文件。

参考：

1. https://baijiahao.baidu.com/s?id=1666954457030652604 - *WebDAV是什么，有哪些支持webdav的网盘和工具？*
2. https://baijiahao.baidu.com/s?id=1716111755399982472 - *含WebDAV 文件管理类工具汇总*
3. https://zhuanlan.zhihu.com/p/465265875 - _支持WebDAV的国内外网盘整理汇总_
4. https://www.rmnof.com/article/cloud-drive-support-webdav/ - _支持WebDAV的云盘/网盘总结（持续更新）_
5. https://www.banzhuti.com/webdav-wangpan.html - _支持WebDAV的网盘汇总对比-包含各大国内外网盘WebDAV服务器地址及连接方式_

### 本地文件系统

暂无

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

#### WebDAV

参考：

1. https://blog.csdn.net/SilentCWQH/article/details/127559615 - *Termux 使用 apache 搭建 webdav 服务器_termux apache-CSDN 博客*
2. https://www.cnblogs.com/x3d/p/webdav-service-on-android-tablepad.html - *在安卓平板上搭建 webdav 服务 - x3d - 博客园*
3. https://developer.baidu.com/article/details/3303488 - *Termux 外置硬盘挂载 ——rclone &amp; WebDav 挂载网盘 - 百度开发者中心*
4. https://post.smzdm.com/p/a0do572r/ - *搭建自己的 webdav 服务器_虚拟产品_什么值得买*

### 挂载网盘

参考：

1. https://jingyan.baidu.com/article/2f9b480d9d0f9e00cb6cc2c9.html - *如何挂载网盘到本地-百度经验*
2. https://blog.csdn.net/qq_40903527/article/details/127497825 - *将各种网盘挂载到本地，可以使用磁盘操作（建议收藏）_都是地址而已的博客-CSDN博客*
3. https://baijiahao.baidu.com/s?id=1749059137522588033 - *windows10系统下nextcloud服务的webdav网盘挂载方法*
4. https://www.bilibili.com/read/mobile?id=12704041 - *W10+Sharelist+Raidrive+Webdav+天翼云盘/阿里云盘/Onedrive 本地存储 - 哔哩哔哩*

## 常见问题

### 应用程序如何连接网盘进行同步？

1. https://joplinapp.org/help/#synchronisation - *Joplin - an open source note taking and to-do application with synchronisation capabilities*
