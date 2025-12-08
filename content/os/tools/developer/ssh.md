# SSH

## 简介

> SSH 是 Linux 系统的登录工具，现在广泛用于服务器登录和各种加密通信。

## 教程

<https://wangdoc.com/ssh/> - *SSH 教程 - 网道*

https://www.ssh.com/academy/ssh - *What is SSH (Secure Shell)? | SSH Academy*

## 入门指南

### 目录结构

```tree
root_folder/
├── usr/
│   ├── local/
│   │    └── bin/
│   │        └── ssh
│   └── sbin/
│       └── sshd
├── var/
│   └── log/
│       └── auth.log # sshd 日志
├── etc/
│   └── ssh/
│       ├── ssh_config # ssh 客户端全局配置文件
│       └── sshd_config # sshd 服务器配置文件
└── home/
    └── .ssh/
        ├── authorized_keys
        ├── config # ssh 客户端用户个人配置文件
        ├── id_rsa
        ├── id_rsa.pub
        └── known_hosts
```

### 命令

#### rsync

暂无

#### scp

scp [-346ABCOpqRrsTv] [-c cipher] [-D sftp_server_path] [-F ssh_config] [-i identity_file] [-J destination] [-l limit] [-o ssh_option] [-P port] [-S program] [-X sftp_option] source ... target

#### sftp

sftp [-46AaCfNpqrv] [-B buffer_size] [-b batchfile] [-c cipher] ​[-D sftp_server_command] [-F ssh_config] [-i identity_file] ​[-J destination] [-l limit] [-o ssh_option] [-P port] ​[-R num_requests] [-S program] [-s subsystem | sftp_server] [-X sftp_option] destination

#### ssh

ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address] ​[-c cipher_spec] [-D [bind_address:]port] [-E log_file] ​[-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file] ​[-J destination] [-L address] [-l login_name] [-m mac_spec] ​[-O ctl_cmd] [-o option] [-P tag] [-p port] [-R address] ​[-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]] ​destination [command [argument ...]]

ssh [-Q query_option]

#### ssh-add

暂无

#### ssh-agent

暂无

#### ssh-copy-id

暂无

#### ssh-keygen

暂无

#### sshd

sshd [-46DdeGiqTtV] [-C connection_spec] [-c host_cert_file] ​[-E log_file] [-f config_file] [-g login_grace_time] [-h host_key_file] [-o option] [-p port] [-u len]

### SSH 客户端

暂无

### SSH 服务器

暂无

## 快速入门

操作步骤：

1. [安装](#安装)
2. [设置](#设置)
    1. [密码](#密码)
    2. [密钥](#密钥)
3. [启动 SSH 服务器](#ssh%20服务器)
    1. sshd 配置文件
4. [登录 SSH 服务器](#ssh%20客户端)
    1. ssh 配置文件

## 安装

> macOS、Linux 系统内置

### OpenSSH

有关详细信息，请参阅“[OpenSSH](os/mobile/android/app/termux.md#openssh)”。

## 设置

### 密码

暂无

### 密钥

https://wangdoc.com/ssh/key - *SSH 密钥登录 - SSH 教程 - 网道*

### 证书

https://wangdoc.com/ssh/ca - *SSH 证书登录 - SSH 教程 - 网道*
