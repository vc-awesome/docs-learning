# Composer

## 简介

> <img src="https://camo.githubusercontent.com/9f549df9473b6abc13a0a81d0a91ae56a8d85d641ab271c25b21af450d058e44/68747470733a2f2f676574636f6d706f7365722e6f72672f696d672f6c6f676f2d636f6d706f7365722d7472616e73706172656e742e706e67" alt="package icon" loading="lazy" decoding="async" align="left" width="58" hspace="10" vspace="0" /> 是 PHP 用来管理依赖（dependency）关系的工具。你可以在自己的项目中声明所依赖的外部工具库（libraries），Composer 会帮你安装这些依赖的库文件。
>
> <cite>—— [Composer中文网 / Packagist中国全量镜像](https://www.phpcomposer.com/)</cite>

![GitHub last commit](https://img.shields.io/github/last-commit/composer/composer?color=blue&logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/composer/composer?logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/composer/composer?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/composer?style=social)

## 官方

Website: 

1. https://getcomposer.org/ - *Composer* （官网）
2. https://www.phpcomposer.com/ - *Composer 中文网 / Packagist 中国全量镜像*
3. http://composer.p2hp.com/ - *Composer中文网*

GitHub: 

1. https://github.com/composer/composer - *composer/composer: Dependency Manager for PHP*

Docs: 

1. https://docs.phpcomposer.com/ - *Composer 中文文档 | Composer 中文网*

## 安装

1. https://getcomposer.org/download/ - *Composer*
2. https://pkg.xyz/#how-to-install-composer - *Packagist / Composer 中国全量镜像*

## 快速入门

[“使用手册”文件夹](F:\√ 编程软件\Composer\使用手册)

包含文件：

1. Composer 安装使用.docx
2. ~~Composer 命令使用.docx~~

> Via PhpStorm

v2020.3

https://www.jetbrains.com/help/phpstorm/2020.3/using-the-composer-dependency-manager.html - *Composer dependency manager | PhpStorm Documentation*

v2021.1

https://www.jetbrains.com/help/phpstorm/2021.1/using-the-composer-dependency-manager.html - *Composer dependency manager | PhpStorm Documentation*

### 命令

- 下载指定版本的安装包

    ```bash
    composer require package $version （package $version 表示指定下载的版本）
    ```
    
    例：`composer require ultraware/roles 5.5.0`	 （ultraware/roles 表示安装包名，5.5.0 表示安装包的版本号）

- 全局安装指定版本安装包

    例：`composer global require ultraware/roles 5.5.0`

- 查看 composer 当前版本

    ```bash
    composer --version
    ```

    ```bash
    composer -V
    ```

- 查看基本信息(详细)

    ```bash
    composer -v
    ```

- 更新 composer 版本

    ```bash
    composer self-update
    ```

    ```bash
    composer selfupdate
    ```

    - 更新至1.x 、 2.x 版本

        ```bash
        composer self-update --1
        ```

        ```bash
        composer self-update --2
        ```

- 恢复上一个 composer 版本

    ```bash
    composer self-update --rollback
    ```

- 切换 composer 镜像

    - 全局配置

        - 中国全量镜像

            ```bash
            composer config -g repo.packagist composer https://packagist.phpcomposer.com
            ```

        - 阿里云

            ```bash
            composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
            ```

        - Laravel China镜像

            ```bash
            composer config -g repo.packagist composer https://packagist.laravel-china.org
            ```

    - 单独项目配置

        如果仅限当前工程使用镜像，去掉 -g 即可，如下
`composer config repo.packagist composer https://packagist.laravel-china.org`

- 取消 composer 镜像配置

    ```bash
    composer config -g --unset repos.packagist
    ```

- 创建项目

    ```bash
    composer create-project 第三方项目名称 项目目录名称
    ```

    例：`composer create-project topthink/think tp`

- 安装第三方类库

    ```bash
    composer require `php包名称` （默认安装最新稳定版）
    ```

    例：`composer require endroid/qrcode`


    ```bash
    composer require PHP包名称 版本号 （安装指定版）
    ```

    例：`composer require endroid/qrcode 1.0.8`

- 更新第三方类库

    ```bash
    composer update `php包名称` （默认更新指定最新稳定版）
    ```

    ```bash
    composer update （更新所有第三方类库）
    ```

    例：`composer update endroid/qrcode`

- 移除第三方类库

    ```bash
    composer remove `php包名称`
    ```

    例：`composer remove endroid/qrcode`

- 查看第三方类库的版本信息

    ```bash
    composer show -i 或者 composer show --installed
    ```

- 查看依赖的第三方类库

    ```bash
    composer why `php包名称`
    ```

    例：`composer why endroid/qrcode`

- 安装 `composer.lock` 依赖

    ```bash
    composer install
    ```

    注：当我们运行 composer install 将会读取 composer.lock 文件，进行更新依赖；如果 composer.lock 不存在或者里面没内容，会执行 composer.json，会将最新版本的文件下载到 vendor 目录里，然后再去更新 composer.lock 文件。

- 查看全局配置

    ```bash
    composer config -l -g
    ```

- 查看单个项目配置

    ```bash
    composer config -l
    ```

- 获取可用的平台软件包列表

    ```bash
    composer show --platform
    ```

    via https://docs.phpcomposer.com/02-libraries.html#Platform-packages

- 查看帮助文档

    ```bash
    composer require -h
    ```

### 镜像源

1. https://pkg.xyz/ - *Packagist / Composer 中国全量镜像*
2. https://packagist.org/mirrors - *Packagist*

### 安装包管理

> The PHP Package Repository

https://packagist.org/ - *Packagist*

## 参考

https://mp.weixin.qq.com/s/rudA9XQabri5cVSxSoD9mg - *php & Composer自动加载，如何自动加载的？*
