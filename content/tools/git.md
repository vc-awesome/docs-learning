> Git is a [free and open source](https://git-scm.com/about/free-and-open-source) distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## git 官方

https://git-scm.com - *git 官网*

## git 教程

1️⃣ https://www.bootcss.com/p/git-guide/ - *git 使用简易指南*

2️⃣ https://www.runoob.com/git/git-tutorial.html - *Git 教程 | 菜鸟教程*

3️⃣ https://www.liaoxuefeng.com/wiki/896043488029600 - *Git教程 - 廖雪峰的官方网站*

## git 工具

### 图形界面工具

1. ✅ [Sourcetree](https://www.sourcetreeapp.com/ ":id=sourcetree") - *Sourcetree | Free Git GUI for Mac and Windows*
   - [Sourcetree 使用教程](https://www.runoob.com/git/source-tree-intro.html)
   - 支持 Windows, MacOS
   - 免费
2. ✅ [GitHub Desktop](https://desktop.github.com/ ':id=github-desktop') - *GitHub Desktop | Simple collaboration from your desktop*
   - 支持 Windows, MacOS, [GitHub](https://github.com/desktop/desktop)
   - 开源免费
3. [Tower](https://www.git-tower.com/) - *The most powerful Git client for Mac and Windows | Tower Git Client*
   - 支持 Windows, MacOS

## git 工作流程

1. 克隆 Git 资源作为工作目录。
2. 在克隆的资源上添加或修改文件。
3. 如果其他人修改了，你可以更新资源。
4. 在提交前查看修改。
5. 提交修改。
6. 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交

> 你的本地仓库由 git 维护的三棵“树”组成。第一个是你的 `工作目录`，它持有实际文件；第二个是 `缓存区（Index）`，它像个缓存区域，临时保存你的改动；最后是 `HEAD`，指向你最近一次提交后的结果。

![工作流](https://www.bootcss.com/p/git-guide/img/trees.png)

## git 命令›基础

### 查看 *git* 版本

```bash
git --version
```



### 配置 *config*

查看配置信息

```bash
$ git config --list
```



### 🔥 创建仓库

初始化 `git` 仓库（指定系统文件夹下执行）

```bash
git init
```

克隆 `git` 仓库至指定的系统文件夹

```bash
git clone <repo> <directory> # repo: git仓库，directory: 本地目录
```

查看在你上次提交之后是否有修改  

```bash
git status
```

显示当前的 git 配置信息

```bash
git config --list
git config -l
```

编辑 git 配置文件

```bash
git config -e #针对当前仓库
```

```bash
git config -e --global #针对系统上所有仓库
```

设置提交代码时的用户信息

```bash
git config --global user.name "runoob"  
git config --global user.email "test@runoob.com"
```

> --global: 去掉此参数只针对当前仓库有效

实例

```bash
git init

git remote add [shortname] [url]

git fetch origin master

git merge origin master
```



### 🔥 提交远程仓库

1. 查看仓库当前的状态，显示有变更的文件

   ```bash
   git status #显示工作树状态
   
   git status -s #简短格式查看文件修改状态
   
   git diff #查看工作区与暂存区的差异
   ```

2. 添加文件到暂存区

   ```bash
   git add . #.表示添加当前目录下的所有文件到暂存区
   
   git add [file1] [file2] ... #添加一个或多个文件到暂存区
   
   git add [dir] #添加指定目录到暂存区，包括子目录
   
   git add -f [file | dir] #忽略.gitignore，强制添加文件
   
   git status -s #查看提交状态
   ```

3. 提交暂存区到本地仓库

   ```bash
   git commit -m '第一次版本提交'
   
   git commit -am '第一次版本提交' #提交到本地仓库，省去第2步（git add）
   
   git commit -amend #进入默认vim编辑器，修改注释完毕后保存就好了
   ```

4. 将本地的分支版本上传到远程并合并

   ```bash
   git push origin master
   ```



### 推送改动 *push*

```bash
git push <远程主机名> <本地分支名>:<远程分支名> #将本地的分支版本上传到远程并合并
```



### 更新与合并 *pull*

- pull 命令（方式一）

  ```bash
  git pull <远程主机名> <远程分支名>:<本地分支名> #从远程获取代码并合并本地的版本
  例：git pull origin master #默认的远程主机名为origin，默认的本地分支名为master
  ```

- 提取远程仓库（方式二）

  ```bash
  1. git fetch [alias] [branch] #中括号的内容可省略
  2. git merge [alias]/[branch] #中括号的内容可省略
  ```



### 查看提交历史 *log*（本地仓库）

```bash
git log

git log --oneline #简洁模式

git log --pretty=oneline #简洁模式，显示完整的commit_id

git log --graph #查看分支、合并，拓扑图展示

git log --reverse #逆向显示所有日志

git log --authoer=caiyongwen #查看指定用户提交历史

git log -5 #显示5条提交历史

git log --decorate #查看标签
```



### 远程操作 *remote*

查看远程仓库

```bash
git remote

git remote -v #查看别名的实际链接地址
```

提取远程仓库

```bash
1. git fetch [alias] [branch] #中括号的内容可省略
2. git merge [alias]/[branch] #中括号的内容可省略
```

推送到远程仓库

```bash
git push [alias] [branch]
```

添加远程仓库

```bash
git remote add [shortname] [url]
```

删除远程仓库

```bash
git remote rm [alias]

git remote show [remote] #显示某个远程仓库的信息

git remote rename <old_name> <new_name> #修改远程仓库名
```

更换远程仓库

```bash
git remote set-url [sortname] [url] #例：git remote set-url origin http://137.220.33.223:6099/p/bitex.git
```



### 分支 *branch*

```bash

git branch #查看所有分支

git branch (branchname) #创建分支

git checkout (branchname) #切换分支

git checkout -b (branchname) #创建新分支并立即切换到该分支下

git branch -d (branchname) #删除分支

git merge (branch) #分支合并 [合并完记得删除分支]
```



### 标签 *tag*

```bash
git tag #查看所有标签

git tag -a v1.0 #-a创建一个带注解的标签，会记录标签什么时候打的，谁打的

git tag -a v0.9 85fc7e7 #追加标签

git tag -a <tagname> -m "runoob.com标签" #指定标签信息

git tag -d v1.1 #删除标签

git show v1.0 #查看指定版本所修改的内容
```



### 文件差异 *diff*

```bash
$ git diff [file] #尚未缓存的改动（没有git add的文件）

$ git diff --cached [file] #查看已缓存的改动（git add的文件）

$ git diff --staged [file] #查看已缓存的改动（git add的文件）

$ git diff HEAD [file] #查看已缓存的与未缓存的所有改动

$ git diff --stat #显示摘要而非整个 diff

$ git diff [first-branch]...[second-branch] #显示两次提交之间的差异（first-branch相当于commit-id）
```



### 回退版本 *reset*

git reset 命令用于回退版本，可以指定退回某一次提交的版本

```bash
git reset [--soft | --mixed | --hard] [HEAD] #[--soft | --mixed | --hard]为可选参数

--mixed 为默认，可以不用带该参数，用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变

--soft 用于回退到某个版本

--hard 撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交 `谨慎使用，它会删除回退点之前的所有信息`
```

**HEAD说明**

- *HEAD* 表示当前版本

- *HEAD^* 上一个版本

- *HEAD^^* 上上一个版本

- *HEAD\^^^* 上上上一个版本

- 以此类推...

  > 可以使用 ~数字表示

- *HEAD~0* 表示当前版本
- *HEAD~1* 上一个版本
- *HEAD^2* 上上一个版本
- *HEAD^3* 上上上一个版本

```bash
git reset HEAD^ #回退所有内容到上一个版本

git reset HEAD^ hello.php #回退 hello.php 文件的版本到上一个版本

git reset 052e #回退到指定版本 052e

git reset HEAD~3 #回退上上上一个版本

git reset --hard origin/master #将本地的状态回退到和远程的一样
```



### 删除 *rm*

> 删除文件后，目录为空时提交远程仓库会自动删除空目录

```bash
git rm <file> #将文件从暂存区和工作区中删除

git rm -f <file> #强行从暂存区和工作区中删除修改后的 runoob.txt 文件，-f 强制执行

git rm --cached <file> #把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除

git rm -r * #进入某个目录中，执行此语句，会删除该目录下的所有文件和子目录，-r 递归执行
```



### 移动/重命名 *mv*

```bash
git mv [file] [newfile] #移动或重命名一个文件、目录或软连接

git mv -f [file] [newfile] #新文件名已经存在，但还是要重命名它

git mv <source> <destination> #在工作区和暂存区中进行移动或重命名。若 <destination> 不为一个目录名，则执行重命名。如果为一个目录名，则执行移动
```



### 解决合并冲突 *checkout*

 - 编辑冲突文件后重新提交

```bash
git reset HEAD #暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响
```

```bash
git rm --cached <file> #直接从暂存区删除文件，工作区则不做出改变
```

```bash
git checkout .或者git checkout -- <file> #会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动

# checkout所有文件
git checkout .

# checkout指定文件
git checkout -- <file> #没有操作提示
git checkout <file> #有操作提示
```

```bash
git checkout HEAD . 或者 git checkout HEAD <file> #会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动

# checkout所有文件
git checkout HEAD .

# checkout指定文件
git checkout HEAD -- <file> #没有操作提示
git checkout HEAD <file> #有操作提示
```



### 恢复 *restore*

```bash
git restore <file> #恢复未提交已改动的文件

git restore --staged <file> #恢复暂存状态的文件
```



### 状态 *status*

```bash
git status #显示工作树状态

git status -s #简短格式查看文件修改状态
```



[Git基础-查看当前文件状态、跟踪新文件、暂存文件、忽略文件、提交更新、移除文件、移动文件](https://www.cnblogs.com/wangwenhui/p/10555261.html)

#### 未跟踪 *Untracked*

> *工作区状态*

未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过`git add` 状态变为*Staged*.

#### 未修改 *Unmodify*

> *使用 commit 命令后的状态*

文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改,
而变为*Modified*. 如果使用`git rm`移出版本库, 则成为*Untracked*文件

#### 已修改 *Modified*

> *针对unmodified 进行操作*

文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过`git add`可进入暂存*staged*状态,
使用`git checkout` 则丢弃修改过, 返回到*unmodify*状态, 这个`git checkout`即从库中取出文件, 覆盖当前修改

#### 未暂存状态 *not staged*

> `not staged`  表示add过的文件，即跟踪文件，再次修改没有add，就是没有暂存的意思

#### 暂存状态 *Staged*

> *add 命令状态*

暂存状态. 执行`git commit`则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为 *Unmodify* 状态.
执行`git reset HEAD filename`取消暂存, 文件状态为 *Modified*

> Git 状态 untracked 和 not staged的区别
>
> 1. untrack 表示是新文件，没有被add过，是为跟踪的意思。  
> 2. not staged  表示add过的文件，即跟踪文件，再次修改没有add，就是没有暂存的意思



## git 命令›进阶

### *stash*



### *rebase*

https://www.cnblogs.com/zndxall/p/9586088.html - *git stash 用法总结和注意点*



## 🔥 git 远程仓库

### 配置验证信息 *ssh*

> 由于你的本地 Git 仓库和 GitHub 仓库之间的传输是通过 SSH 加密的，所以我们需要配置验证信息

1. 生成 `SSH Key`

   ```bash
   ssh-keygen -t rsa -C "youremail@example.com" # 后面的 your_email@youremail.com 改为你在 Github 上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在 ~/ 下生成 .ssh 文件夹，进去，打开 id_rsa.pub，复制里面的key
   ```

2. 获取 `SSH Key`

   ```bash
   # GNU/Linux/Mac/PowerShell
   cat ~/.ssh/id_rsa.pub
   ```

   

   ```bash
   # Windows Command Line
   type %userprofile%\.ssh\id_rsa.pub
   ```

3. 复制 `SSH Key`

   ```bash
   # Windows Command Line
   type %userprofile%\.ssh\id_rsa.pub | clip
   ```

   

   ```bash
   # windows PowerShell
   cat ~/.ssh/id_rsa.pub | clip
   ```

   

   ```bash
   # Mac
   pbcopy < ~/.ssh/id_rsa.pub
   ```

   

   ```bash
   # GNU/Linux (requires xclip)
   xclip -sel clip < ~/.ssh/id_rsa.pub
   ```

   

4. 远程仓库添加 `SSH Key`

   `github`、`gitee`、`阿里云`代码仓库都有设置`SSH`的选项

   

5. 验证 `SSH Key` 是否设置成功

   ```bash
   ssh -T git@github.com # git@github.com 为远程仓库SSH
   ```

   

### 配置参考链接

https://www.runoob.com/w3cnote/git-guide.html - *Github 简明教程 | 菜鸟教程*



## .gitignore

[git如何忽略已经提交的文件 (.gitignore文件无效)](https://www.jianshu.com/p/e5b13480479b)

### 忽略文件

方式1 忽略跟踪*modified*状态的文件

```bash
#忽略跟踪
git update-index --assume-unchanged /path/to/file #这个命令来将已经track的文件标记一下, 使其不出现在更新列表中(git status不会列出标记过的文件), 其实这是治标不治本的做法. 这样做, 只在你的项目中生效. 如果是一个团队, 其他开发人员也需要这么做. 而且这个命令只对文件有效. 
#恢复跟踪
git update-index --no-assume-unchanged /path/to/file
#查看状态
git status
#查看忽略列表
git ls-files -v | grep '^h\ '
#提取文件路径
git ls-files -v | grep '^h\ ' | awk '{print $2}'
#所有被忽略的文件，取消忽略的方法
git ls-files -v | grep '^h' | awk '{print $2}' |xargs git update-index --no-assume-unchanged
```

方式2 需要推送到远程仓库

```bash
git rm -r --cached <file> #把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除
git add .

git commit

git push
```



忽略*untracked*状态的文件

方式1：将文件加入到 `.gitignore`

方式2：将文件加入到 `.git/info/exclude` *via phpstorm/git*



### 基础操作

> 如果文件已经存在于远程仓库中，是无法通过`.gitignore`文件来忽略的!!! 重新忽略，使用下面的命令

```bash
git rm --cached <file> #把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除
git commit
git push
```

忽略特殊文件，忽略的文件将不会git提交

```bash
/mtk/ #过滤整个文件夹
*.zip #过滤所有.zip文件
/mtk/do.c #过滤某个具体文件
```

> 以上规则意思是：被过滤掉的文件就不会出现在你的GitHub库中了，当然本地库中还有，只是push的时候不会上传。

```bash
!src/ #不过滤该文件夹
!*.zip #不过滤所有.zip文件
!/mtk/do.c #不过滤该文件
```

> 以上规则意思是：指定要将哪些文件添加到版本管理中。



### 配置语法

以斜杠`/`开头表示目录

以星号`*`通配多个字符

以问号`?`通配单个字符

以方括号`[]`包含单个字符的匹配列表

以叹号`!`表示不忽略（跟踪）匹配到的文件或目录

> 注：此外，git 对于 .ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；



### 示例说明

规则：fd1/* [^说明1]

[^说明1]: 忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略

规则：/fd1/* [^说明2]

[^说明2]: 忽略根目录下的 /fd1/ 目录的全部内容

规则：[^说明3]

```bash
/*
!.gitignore
!/fw/bin/
!/fw/sf/
```

[^说明3]: 忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录

[.gitignore](https://www.jianshu.com/p/699ed86028c2)

[忽略特殊文件(廖雪峰的官方网站)](https://www.liaoxuefeng.com/wiki/896043488029600/900004590234208)

[Git - .gitignore文件的用法](https://www.cnblogs.com/yulinlewis/p/10231035.html)


## .gitattributes

https://www.bookstack.cn/read/git-doc-zh/docs-39.md - *gitattributes - 《Git 中文参考》 - 书栈网 · BookStack*

https://baijiahao.baidu.com/s?id=1658545315960482338 - *请把 .gitattributes 加到你的 Git 仓库中*

https://www.cnblogs.com/friedCoder/p/12467515.html - *.gitattributes - friedCoder - 博客园*


## FAQ

### git *webhook*

gitee

gitlab

`crontab` 自动执行脚本



参考链接 👇

https://segmentfault.com/a/1190000040540720?sort=votes - *PHP使用WebHook自动更新Git仓库部署*

https://blog.csdn.net/weixin_36851500/article/details/104011450 - *Github的WebHooks实现生产环境代码自动更新*



### git 放弃修改，强制覆盖本地代码

```bash
git reset --hard origin/master
```



### 🔥 git 创建新版本库

> via 阿里云代码仓库

```bash
git clone git@137.220.33.223:p/sky.git
cd sky
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```



### 🔥 git 已存在的文件夹或 Git 仓库

> via 阿里云代码仓库

推送改动

```bash
cd existing_folder
git init
git remote add origin git@code.aliyun.com:torres/swarm.git
git add .
git commit -m 
git push -u origin master
```

更新合并

```bash
git pull origin master #git remote完成后拉取远程的文件操作
```

 

### 🔥 git 放弃本地文件修改

https://www.jianshu.com/p/c0f7e4ac14c7 - *git放弃本地文件修改*

1. 未使用`git add`缓存代码

   ```bash
   # 使用git checkout -- filename，注意中间有--
   git checkout -- filename
   
   # 放弃所有文件修改 git checkout .
   git checkout .
   ```

2. 已使用`git add`缓存代码，未使用`git commit`

   > `--soft` 不删除工作空间的改动代码 ，撤销commit，不撤销git add .
   >
   > `--mixed` 默认参数，不删除工作空间改动代码，撤销commit，并且撤销git add . 操作

   ```bash
   # 使用 git reset HEAD filename
   git reset HEAD filename
   
   # 放弃所有文件修改 git reset HEAD
   git reset HEAD
   ```

3. 已使用`git commit`提交了代码

   > `--hard` 删除工作空间的改动代码，撤销commit且撤销add

   ```bash
   # 使用 git reset --hard HEAD^ 来回退到上一次commit的状态
   git reset --hard HEAD^
   
   # 回退到任意版本git reset --hard commit id ，使用git log命令查看git提交历史和commit id
   git reset --hard commit id
   ```



### 🔥 git如何从远端获取某个文件

```bash
git fetch
git checkout origin/master -- path/folder/filename #获取某个文件
git checkout origin/master -- path/folder #获取某个目录
```

参考链接：https://www.cnblogs.com/olive27/p/11791162.html - *git如何从远端获取某个文件 - OliveKong - 博客园*




### git 回退*push*的文件

1. --force

   ```bash
   git reset --soft commit id
   git push origin master --force #强制提交当前版本号，以达到撤销版本号的目的.必须添加参数force进行强制提交，否则会提交失败,报错原因：本地项目版本号低于远端仓库版本号（注意:这种强制提交的方法只有owner的时候可以用）
   ```

   

### git 合并多个提交

https://www.cnblogs.com/tocy/p/git-rebase-merge-commit.html - *git合并多个提交*

https://www.jianshu.com/p/964de879904a - *「Git」合并多个 Commit*



### git commit emoji


https://jackiehao.blog.csdn.net/article/details/109309743 - *GitHub中提交代码说明时添加emoji小图标*

?> An emoji guide for your commit messages. 😜  
<i class="bi bi-translate dark-yellow"></i> 提交消息的表情符号指南。 😜

<i class="fa fa-laptop"></i> https://gitmoji.dev/ [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev/)

<i class="fa fa-github fa-lg"></i> https://github.com/carloscuesta/gitmoji



### git 在本地局域网中的两台电脑间同步代码

https://www.cnblogs.com/phillee/p/15353020.html - *通过Git在本地局域网中的两台电脑间同步代码*
