## 简介

An open source Android Git client.

## 官方

Website: https://manichord.com/projects/mgit.html - *MGit*

## 安装

https://github.com/maks/MGit - *GitHub - maks/MGit: A Git client for Android.*

![GitHub last commit](https://flat.badgen.net/github/last-commit/maks/MGit?icon=github&color=blue)

https://f-droid.org/packages/com.manichord.mgit - *MGit | F-Droid - Free and Open Source Android App Repository*

## 快速入门

1. 打开 MGit 生成秘钥

    操作步骤：_> 设置 > （安全）SSH Keys > 新增_
   
    新建文件名：当前手机设备名称（例如： *`Redmi Note 11T Pro`* ）
   
2. 打开 MGit 设置 “repos 的根存储位置”

    操作步骤：_> 设置 > （通用）repos 的根存储位置_
   
    ``` sh
    /storage/emulated/0/Documents/markor/GitHub
    ```

3. 打开 MGit Git 配置

    操作步骤：_> 设置 > Git 配置_

    用户名：_`vc`_  
    用户邮箱：_`caiyongwen@yeah.net`_
   
4. 打开 GitHub 添加 SSH Keys

    操作步骤：_> 前往 [SSH and GPG keys](https://github.com/settings/keys) 添加_

    Title：_当前手机设备名称_  
    Key：_复制第 1 步生成的秘钥_
   
5. 打开 MGit 克隆仓库

    远程地址：_`git@github.com:vc-awesome/docs-learning.git`_  
    本地路径：_`docs-learning`_

6. 修改文件后，打开 MGit 提交、推送

    1. _点击进入需操作的仓库_ ；

    2. 第一项为“文件”标签页，可点击文件进行查看、编辑操作；

    3. _屏幕从右向左滑_ ，第二项为“提交”标签页，可点击查看历史提交的详细记录及修改内容；

    4. _屏幕继续从右向左滑_ ，第三项为“状态”标签页，可查看当前已修改文件的修改内容（文件差异）；

    5. 确定文件无异后，点击右上角的操作按钮，选择 _暂存所有 > 提交 > 推送_ 这 3 步操作，将文件推送至远程仓库。

## 常见问题解答
