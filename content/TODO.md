# Todo List

![illustration](https://developer.android.google.cn/static/images/design/ui/mobile/accessibility-hero.png?hl=zh-cn)

<small>*插图来源于：[Android Developers](https://developer.android.google.cn/develop?hl=zh-cn)*</small>

## Syntax

单行：

```markdown
// TODO: 
```

```markdown
// NOTE:
```

```markdown
// FIXME: 
```

```markdown
// BUG: 
```

```markdown
// WARNING: 
```

多行：

```markdown
// TODO: 
//  <Writing  a message>...
```

示例：

1. `// TODO: 新建 markor.md 文件，并把下面内容转移过去。`
2. `// TODO: 优化代码格式`

参考：

1. https://www.jetbrains.com/help/phpstorm/using-todo.html - *TODO comments | PhpStorm Documentation*
2. https://blog.csdn.net/maobush/article/details/67636734 - *打造利器Qt Creator：代码todo工具的使用_qt todo使用-CSDN博客*
3. https://zhuanlan.zhihu.com/p/686334470 - *Todo Tree 插件简介和使用方法 - 知乎*
4. https://www.cnblogs.com/donpangpang/p/14612568.html - *[VSCode] Todo Tree VSCode插件 待办事项树 - 胖纸不争 - 博客园*
5. https://www.cnblogs.com/librarookie/p/16617318.html - *VScode-TodoTree 待办事项插件的定制和使用 - Librarookie - 博客园*

## Tools

### Todo.txt

https://github.com/todotxt - *todo.txt · GitHub*

![GitHub followers](https://img.shields.io/github/followers/todotxt)
![GitHub User's stars](https://img.shields.io/github/stars/todotxt)

#### todo.txt format

https://github.com/todotxt/todo.txt - *GitHub - todotxt/todo.txt: ‼️ A complete primer on the whys and hows of todo.txt.*

![GitHub last commit](https://img.shields.io/github/last-commit/todotxt/todo.txt?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/todotxt/todo.txt?style=social)

`todo.txt` format rules:

![](https://gh-proxy.org/https://github.com/todotxt/todo.txt/blob/master/description.svg)

Priority - *优先级 (optional)* ：

```markdown
<!-- e.g. (A) -->
([A-Z])
```

Project - *项目 (optional)* ：

```markdown
<!-- e.g. +GarageSale -->
+<project>
```

Context - *情境 (optional)* ：

```markdown
<!-- e.g. @phone @iphone -->
@<context>
```

Special key/value - *特殊的键值对 (optional)* :

```markdown
<!-- e.g. due:2010-01-02 pri:A -->
<key>:<value>
```

#### Mobile

- [Markor](#markor)
- [ntodotxt](#ntodotxt)

##### Markor

- 有关详细信息，请参阅 Markor 中的“[todo.txt](os/mobile/android/app/markor.md#todo.txt)”部分。

##### ntodotxt

https://github.com/tmaegel/ntodotxt - *GitHub - tmaegel/ntodotxt: Flutter app for managing your todos within a todo.txt file locally or via webdav (e.g. Nextcloud)*

![F-Droid Version](https://img.shields.io/f-droid/v/me.ash.reader)
![GitHub last commit](https://img.shields.io/github/last-commit/tmaegel/ntodotxt?logo=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/tmaegel/ntodotxt?logo=github)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/tmaegel/ntodotxt?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/tmaegel/ntodotxt?logo=github)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/tmaegel/ntodotxt?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/tmaegel/ntodotxt?style=social)

### Todoist

[Todoist](https://www.todoist.com/) - *深受三千万个用户和团队的信任。Todoist是全球最受欢迎的任务管理器和待办清单应用。忠于专注、有序和理性。* [使用手册](os/tools/productivity/todoist.md)

Priority - *优先级 (optional)*：

```markdown
<!-- e.g. p1 -->
p[1-4]
```

Tag - *标签 (optional)*：

```markdown
<!-- e.g. @phone @iphone -->
@<tag>
```

Project - *项目 (默认 Inbox)*：

```markdown
<!-- e.g. #inbox -->
#<project>
```

Section - *板块 (optional)*：

```markdown
<!-- e.g. #inbox /todo -->
/<section>
```

## Timeline

1. [archived](#archived) - *已存档*
2. [in progress](#in%20progress) - *进行中*

### Archived

百度搜索：

1. P 卡：亚马逊账户资金转入转出
2. 简历素材：简历排版美观度

浏览器：

1. 默认打开「隐私标签页」

每日待工作内容总结：

- [ ] 书签整理 | OneTab 保存的网页整理
- [ ] 文件整理 | 公司电脑知识碎片
- [ ] 知识整理 | ETH 知识
- [ ] 知识整理 | TRON 知识
- [ ] 文档整理 | F盘 Markdown 区块链文档最新源码整理

### Recurring

- [ ] (A) 提交代码至远程仓库 <font color="red">ᵀᴼᴾ</font>

### In progress

- [ ] [essential/](essential/README.md)
  - [ ] api
    - [ ] 开放 API 授权
    - [ ] [身份认证](essential/security/identity.md)
  - [ ] [code.md](home/structure/code.md)
  - [ ] [url.md](essential/url.md)
  - [ ] [日期与时间](essential/README.md#日期与时间)
  - [ ] [文本编码](essential/character-sets/README.md#文本编码)
  - [ ] [正则表达式](essential/pattern-matching/regex.md)
- [ ] [front end/](front-end/README.md)
  - [ ] [css/](front-end/css/README.md)
  - [ ] [javascript/](front-end/javascript/README.md)
- [ ] home/
  - [ ] [文档结构](home/structure/document.md)
- [ ] [thinkphp/](back-end/thinkphp/README.md)
- [ ] [mysql/](database/mysql/README.md)
- [ ] [project/](project/README.md)
  - [ ] [开发框架/](project/framework/README.md)
  - [ ] [blockchain/](project/blockchain/README.md)
- [ ] [os/](os/README.md)
  - [ ] 电脑系统安装
  - [ ] [应用/](os/tools/README.md)
    - [ ] [VS Code#代码片段](os/tools/developer/editor/visual-studio-code.md#代码片段)
  - [ ] os/
    - [ ] windows/
      - [ ] [bat 脚本](os/desktop/windows/batch.md)
- [ ] 桌面浏览器调试模拟器网页
- [ ] (A) 图床
  - https://www.ruanyifeng.com/blog/2010/03/built_a_image_server.html - *搭建了一个图片库 - 阮一峰的网络日志*
  - https://support.typoraio.cn/Images/ - *Images in Typora - Typora Support*
  - https://www.picgo.net/ - *PicGo - 免费图床，贴出分享，图显不凡*
- [x] 本站点添加「目录大纲」功能
- [x] [生成文件目录树文件](dir-tree.md)

2025-11-25 12:46

- [ ] os/cli/app/
  - [ ] 新增 grep.md 文件
- [ ] [regex.md](essential/pattern-matching/regex.md)\#pcre
- [ ] (A) [todo.md](TODO.md)
  - [ ] tools
    - [x] ntodotxt
    - [ ] (A) [todoist.md](os/tools/productivity/todoist.md)

2025-12-02 07:42

- [ ] (A) [document.md](home/structure/document.md)
  - [ ] 新增使用场景 cli （参考 [git](https://git-scm.com/docs/git/zh_HANS-CN)）
  - [ ] 命令
  - [ ] [changelog](home/structure/document.md#changelog)
- [ ] [man.md](os/tools/developer/shell/man.md)
- [ ] (A) [git.md](os/tools/developer/vcs/git.md)
  - [ ] git revert 用法
  - [ ] gitrevisions
  - [ ] git 分支管理
  - [ ] git commit 规范

2025-12-06 10:49

- [ ] [url.md](content/essential/url.md)
  - [ ] deeplink
    - [ ] [http-shortcuts.md](content/os/mobile/android/app/http-shortcuts.md)
- [x] (A) [vim.md](os/tools/developer/editor/vim.md)
  - [x] 折叠
- [ ] [protocol.md](essential/network/protocol.md)

2025-12-08 11:29

- [ ] 通过命令 `ln -s` 创建的链接目录，如何重命名目录下的文件（在安卓应用“质感文件”中无法重命名）
- [ ] (A) 整理安卓应用权限 +[document.md#设置](home/structure/document.md)
