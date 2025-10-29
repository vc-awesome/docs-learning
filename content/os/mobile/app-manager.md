# App Manager

## 简介

> A full-featured open source package manager for android.

![F-Droid Version](https://img.shields.io/f-droid/v/io.github.muntashirakon.AppManager)
![GitHub last commit](https://img.shields.io/github/last-commit/MuntashirAkon/AppManager?color=blue&logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/MuntashirAkon/AppManager?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/MuntashirAkon/AppManager?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/MuntashirAkon/AppManager?style=social)

## 官方

https://github.com/MuntashirAkon/AppManager - *GitHub - MuntashirAkon/AppManager: A full-featured package manager and viewer for Android*

https://muntashirakon.github.io/AppManager/ - *App Manager Docs*

## 入门指南

### 翻译

- 用户手册
- 刷新
- 一键操作
- 应用使用情况
- 正在运行的应用
- 配置
- 预装卸载器
- 实验室
- 设置
    - 语言
    - [外观](#外观)
    - 隐私
    - [操作模式](#操作模式)
    - APK 签名
    - 安装器
    - 备份/还原
    - 日志查看器
    - 文件
    - 规则
    - VirusTotal
    - 高级
    - 关于此设备
    - 关于
    - 疑难解答

## 安装

https://github.com/MuntashirAkon/AppManager/releases - *Releases · MuntashirAkon/AppManager · GitHub*

https://f-droid.org/packages/io.github.muntashirakon.AppManager/ - *App Manager - Android package manager | F-Droid - Free and Open Source Android App Repository*

## 设置

### 外观

#### 启用/禁用功能

1. 意图拦截器（启用）
2. 清单查看器（启用）
3. 扫描器（启用）
4. 软件包安装程序（启用）
5. 使用情况访问权限（启用）
6. 日志查看器（启用）
7. 应用浏览器（启用）
8. 应用信息（启用）
9. 代码编辑器（启用）
10. VirusTotal（禁用）

### 操作模式

1. 自动
2. Root
3. 网络调试
4. 无线调试
5. 无 root

## 用法

### 自动任务

https://muntashirakon.github.io/AppManager/zh-rCN/#sec:automating-tasks - *App Manager*

https://muntashirakon.github.io/AppManager/en/#sec:automating-tasks - *App Manager*

统一资源标识符：

```uri
intent:#Intent;action=android.intent.action.MAIN;package=io.github.muntashirakon.AppManager;component=io.github.muntashirakon.AppManager/.crypto.auth.AuthFeatureDemultiplexer;S.feature=profile;S.auth=xijKac48V2qUNJexjwvuV2x6;S.prof=test;end
```

在安卓应用“[HTTP Shortcuts](os/mobile/http-shortcuts.md)”中编写脚本：

```javascript
sendIntent({
  type: "activity",
  action: "android.intent.action.MAIN",
  category: "",
  packageName: "io.github.muntashirakon.AppManager",
  className: "io.github.muntashirakon.AppManager.crypto.auth.AuthFeatureDemultiplexer",
  dataUri: "",
  dataType: "",
  extras: [
    {
      name: "auth",
      type: "string",
      value: "xijKac48V2qUNJexjwvuV2x6",
    },
    {
      name: "feature",
      type: "string",
      value: "profile",
    },
    {
      name: "prof",
      type: "string",
      value: "test",
    },
  ],
  clearTask: true,
  excludeFromRecents: true,
  newTask: true,
  noHistory: true,
});
```