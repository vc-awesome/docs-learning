# MGit

## 简介

> <img src="https://f-droid.org/assets/ic_repo_app_default_KNN008Z2K7VNPZOFLMTry3JkfFYPxVGDopS1iwWe5wo=.png" alt="package icon" align="left" width="58" hspace="10" vspace="0"> An open source Android Git client.

![GitHub last commit](https://img.shields.io/github/last-commit/maks/MGit?color=blue&logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/maks/MGit?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/maks/MGit?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/maks/MGit?style=social)

## 官方

Website: https://manichord.com/projects/mgit.html - *MGit*

## 安装

https://github.com/maks/MGit - *GitHub - maks/MGit: A Git client for Android.*

https://github.com/maks/MGit/releases - *Releases · maks/MGit · GitHub*

https://f-droid.org/packages/com.manichord.mgit - *MGit | F-Droid - Free and Open Source Android App Repository*

https://play.google.com/store/apps/details?id=com.manichord.mgit - *MGit - Google Play 上的应用*

## 快速入门

1. 打开 MGit 生成秘钥

    操作步骤：*打开设置 > （安全）SSH Keys > 新增*

    新建文件名：当前手机设备名称（例如： *`Redmi Note 11T Pro`* ）

2. 打开 MGit 设置 “repos 的根存储位置”

    操作步骤：*打开设置 > （通用）repos 的根存储位置*

    ``` sh
    /storage/emulated/0/Documents/markor/GitHub
    ```

3. 打开 MGit Git 配置

    操作步骤：*打开设置 > Git 配置*

    用户名： *`vc`*  
    用户邮箱： *`caiyongwen@yeah.net`*

4. 打开 GitHub 添加 SSH Keys

    操作步骤：*前往 [SSH and GPG keys](https://github.com/settings/keys) 添加*

    Title：*当前手机设备名称*  
    Key：*复制第 1 步生成的秘钥*

5. 打开 MGit 克隆仓库

    远程地址： *`git@github.com:vc-awesome/docs-learning.git`*  
    本地路径： *`docs-learning`*

6. 修改文件后，打开 MGit 提交、推送

    1. *点击进入需操作的仓库* ；

    2. 第一项为“文件”标签页，可点击文件进行查看、编辑操作；

    3. *屏幕从右向左滑* ，第二项为“提交”标签页，可点击查看历史提交的详细记录及修改内容；

    4. *屏幕继续从右向左滑* ，第三项为“状态”标签页，可查看当前已修改文件的修改内容（文件差异）；

    5. 确定文件无异后，点击右上角的操作按钮，选择 *暂存所有 > 提交 > 推送* 这 3 步操作，将文件推送至远程仓库。

## 注意事项

> 在最新代码未提交至远程仓库前，千万不要点击删除操作，由于点击删除按钮，不会提示“是否确定删除？”，而是直接删除所选文件或文件夹，导致辛苦编辑的内容无法找回。

## 常见问题解答

暂无
