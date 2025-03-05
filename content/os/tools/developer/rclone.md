# Rclone

## 简介

> Rclone syncs your files to cloud storage: Google Drive, S3, Swift, Dropbox, Google Cloud Storage, Azure, Box and many more.

![GitHub last commit](https://img.shields.io/github/last-commit/rclone/rclone?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/rclone/rclone?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/rclone/rclone?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/rclone/rclone?style=social)

## 官方

https://rclone.org/ - _Rclone_

https://github.com/rclone/rclone - _GitHub - rclone/rclone: &quot;rsync for cloud storage&quot; - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files_

## 教程

https://rclone.org/docs/ - _Documentation_

## 入门指南

### 目录结构

```bash
rclone config paths
```

```tree
root_folder/
└── home/
      ├── .cache/
      │       └── rclone/
      └── .config/
               └── rclone/
```

### Commands

#### rclone check

https://rclone.org/commands/rclone_check/ - *rclone check*

#### rclone config

https://rclone.org/commands/rclone_config/ - *rclone config*

#### rclone ls

https://rclone.org/commands/rclone_ls/ - *rclone ls*

#### rclone sync

https://rclone.org/commands/rclone_sync/ - *rclone sync*

### Filtering

https://rclone.org/filtering/ - *Rclone Filtering*

#### --exclude

暂无

### Flags

https://rclone.org/flags/ - *Global Flags*

#### --interactive/-i

暂无

### Storage Systems

https://rclone.org/overview/ - *Overview of cloud storage systems*

#### Microsoft OneDrive

https://rclone.org/onedrive/ - *Microsoft OneDrive*

#### The local filesystem

https://rclone.org/local/ - *Local Filesystem*

## 快速入门

```bash
rclone check ~/source/ ~/dest/ --exclude 'node_modules' --exclude 'package-lock.json'
```

```bash
rclone sync ~/source/ ~/dest/ --progress --dry-run --exclude 'node_modules' --exclude 'package-lock.json'
```

## 安装

支持 Windows, macOS, Linux, Android（Termux）

https://rclone.org/downloads/ - _Rclone downloads_

https://rclone.org/install/ - _Install_

## 设置

https://rclone.org/docs/#configure - _Documentation_

```bash
rclone config
```

## 用法

https://rclone.org/docs/ - _Documentation_

1. https://rclone.org/local/ - _Local Filesystem_

## 常见问题解答

https://rclone.org/faq/ - _FAQ_

## 附录

### 更新日志

https://rclone.org/changelog/ - _Documentation_

### 参考

暂无
