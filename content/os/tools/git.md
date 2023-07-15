## 简介

> <img src="https://git-scm.com/images/logo@2x.png" align="left" width="78" hspace="0" vspace="0" style="margin-right: 10px;margin-top: 5px;" /> Git is a [free and open source](https://git-scm.com/about/free-and-open-source) distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## 官方

Website: https://git-scm.com - *git*

Docs: https://git-scm.com/doc - *Git - Documentation*

GitHub: https://github.com/git/git - *GitHub - git/git: Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.*


## 安装

https://git-scm.com/downloads - *Git - Downloads*


## 教程

1. https://www.runoob.com/git/git-tutorial.html - *Git 教程 | 菜鸟教程*

2. https://www.liaoxuefeng.com/wiki/896043488029600 - *Git教程 - 廖雪峰的官方网站*

3. https://www.atlassian.com/git - *Learn Git- Git tutorials, workflows and commands | Atlassian Git Tutorial*


## 工具

### 图形界面工具

https://git-scm.com/downloads/guis - *Git - GUI Clients*

1. ✅ [Sourcetree](https://www.sourcetreeapp.com/ ":id=sourcetree") - *Sourcetree | Free Git GUI for Mac and Windows*
   
   - [Sourcetree 使用教程](https://www.runoob.com/git/source-tree-intro.html)
   
   - 支持 Windows, MacOS
   
   - 免费
   
     <details>
       <summary><i style="color:red">SEE MORE >></i></summary>
   
       - https://www.cnblogs.com/wl-blog/p/15105318.html - *SourceTree使用方法（拉取、提交、推送、获取、冲突解决、分支管理） - dreamw - 博客园*
       - https://www.jianshu.com/p/4349a8843730 - *解决sourcetree无法推送 - 简书*
     - https://blog.csdn.net/pp5265/article/details/127442157 - *Sourcetree无法推送问题_深夜加餐的博客-CSDN博客*
       </details>
   
2. ✅ [GitHub Desktop](https://desktop.github.com/ ':id=github-desktop') - *GitHub Desktop | Simple collaboration from your desktop*

   - 支持 Windows, macOS, [GitHub](https://github.com/desktop/desktop)
   
   - 开源免费
   
3. [Tower](https://www.git-tower.com/) - *The most powerful Git client for Mac and Windows | Tower Git Client*
   - 支持 Windows, macOS


### 代码托管平台

1. [GitHub](/tools/github) - *GitHub: Where the world builds software · GitHub*

2. [Gitee](https://gitee.com/) - *Gitee - 基于 Git 的代码托管和研发协作平台*

3. [阿里云云效 Codeup](https://codeup.aliyun.com/) - *云效 Codeup · 企业级代码管理平台* [旧版](https://code.aliyun.com/)

4. [GitLab](https://gitlab.com/gitlab-com) - *The One DevOps Platform | GitLab*

5. [Bitbucket](https://www.atlassian.com/zh/software/bitbucket) - *用于团队的 Atlassian Bitbucket Git 代码管理工具 | Atlassian*

6. [腾讯云 CODING DevOps](https://coding.net/) - *DevOps_DevOps 解决方案_一站式 DevOps_开发者工具 | 腾讯云 CODING DevOps*

## 工作流程

1. 克隆 Git 资源作为工作目录。
2. 在克隆的资源上添加或修改文件。
3. 如果其他人修改了，你可以更新资源。
4. 在提交前查看修改。
5. 提交修改。
6. 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

> 你的本地仓库由 git 维护的三棵“树”组成。第一个是你的 **工作目录**，它持有实际文件；第二个是 **缓存区（Index）**，它像个缓存区域，临时保存你的改动；最后是 **HEAD**，指向你最近一次提交后的结果。

![工作流](https://www.bootcss.com/p/git-guide/img/trees.png)
<small>*插图来源于：[git 使用简易指南](https://www.bootcss.com/p/git-guide/)*</small>

## 快速入门

1. https://www.bootcss.com/p/git-guide/ - *git 使用简易指南*

2. https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/ - *GitHub Git 备忘单 - GitHub Cheatsheets*

---

![](https://www.runoob.com/wp-content/uploads/2015/02/git-command.jpg)
<small>*插图来源于：[Git 基本操作 | 菜鸟教程](https://www.runoob.com/git/git-basic-operations.html)*</small>

![](https://www.runoob.com/wp-content/uploads/2015/02/1352126739_7909.jpg)
<small>*插图来源于：[Git 工作区、暂存区和版本库 | 菜鸟教程](https://www.runoob.com/git/git-workspace-index-repo.html)*</small>

## 基础命令

### 查看帮助

```sh
git --help
```

```sh
git -h
```

read about a specific subcommand or concept.（阅读特定的子命令或概念。）

```sh
git help <command>
```

```sh
git help <concept>
```


### 查看版本

```bash
git --version
```

```bash
git -v
```



### 配置 - *config*

查看当前仓库配置信息

```bash
git config --list
```

查看全局仓库配置信息

```sh
git config --list --global
```



### 克隆 - *clone*

克隆指定版本

```sh
git clone -b v1.2.0 --depth=1 https://ghproxy.com/https://github.com/zenorocha/codecopy.git codecopy
```

参考：http://www.360doc.com/content/22/0801/15/7579570_1042203637.shtml - *Git 克隆指定版本...*

克隆方式（HTTPS）：

```bash
git clone https://github.com/zenorocha/codecopy.git
```

克隆方式（SSH）：

```bash
git clone git@github.com:zenorocha/codecopy.git
```

### 创建仓库 🔥

初始化 `git` 仓库（在指定系统文件夹下执行）

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
```

```bash
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
git config --global user.name "vc"
```

```bash
git config --global user.email "caiyongwen@yeah.net"
```

> --global: 去掉此参数只针对当前仓库有效

将仓库添加至安全目录（可选操作）

```bash
git config --global --add safe.directory /storage/emulated/0/Documents/markor/GitHub/vc-awesome
```

注：部分设备（例：**Termux** ）未执行此命令，会提示错误：“必须执行此命令”；在提示的内容中复制命令执行即可。

实例

```bash
git init

git remote add [shortname] [url]

git fetch origin master

git merge origin master
```



#### 创建新仓库

> via 阿里云代码仓库

```bash
git clone git@137.220.33.223:p/sky.git
cd sky
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```



#### 已存在的文件夹

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

更新合并（已存在的 Git 仓库，执行此命令即可）

*git remote 完成后拉取远程的文件操作*

```bash
git pull origin master
```

 

### 提交至远程仓库 🔥

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
   
   git commit --amend #进入默认 vim 编辑器，修改注释完毕后保存就好了
   ```

4. 将本地的分支版本上传到远程并合并

   ```bash
   git push origin master
   ```

#### 配置验证信息 - *ssh*

> 由于你的本地 Git 仓库和 GitHub 仓库之间的传输是通过 SSH 加密的，所以我们需要配置验证信息。

1. 生成 **SSH Key**

   ```bash
    # 后面的 your_email@youremail.com 改为你在 GitHub 上注册的邮箱；
    # 之后会要求确认路径和输入密码，我们这使用默认的一路回车就行；
    # 成功的话会在 ~/ 目录下生成 .ssh 文件夹；
    # 进去，打开 id_rsa.pub，复制里面的 key。
   ssh-keygen -t rsa -C "youremail@example.com"
   ```

   实例：

   ```bash
   ssh-keygen -t rsa -C "caiyongwen@yeah.net"
   ```

2. 获取 **SSH Key**

   ```bash
   # GNU/Linux/Mac/PowerShell
   cat ~/.ssh/id_rsa.pub
   ```

   

   ```bash
   # Windows Command Line
   type %userprofile%\.ssh\id_rsa.pub
   ```

3. 复制 **SSH Key**

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

   

4. 远程仓库添加 **SSH Key**

   [GitHub](https://github.com/)、[Gitee](https://gitee.com/)、[阿里云](https://code.aliyun.com/) 代码仓库都有设置 **SSH Key** 的选项。

   

5. 验证 **SSH Key** 是否设置成功

   ```bash
   ssh -T git@github.com # git@github.com 为远程仓库 SSH
   ```

   验证 GitHub

   ```bash
   ssh -T git@github.com
   ```

   

参考：https://www.runoob.com/w3cnote/git-guide.html - *Github 简明教程 | 菜鸟教程*

### 推送改动 - *push*

```bash
git push <远程主机名> <本地分支名>:<远程分支名> #将本地的分支版本上传到远程并合并
```



### 更新与合并 - *pull*

- pull 命令（方式一）

  > 从远程获取代码并合并本地的版本

  语法：
  
  ```bash
  git pull <远程主机名> <远程分支名>:<本地分支名>
  ```
  
  示例：
  
  ```bash
  git pull origin master
  ```
  
  *默认的远程主机名为 origin，默认的本地分支名为 master*

  ```bash
  git pull
  ```

- 提取远程仓库（方式二）
  
  第 1 步：
  
  ```bash
  git fetch [alias] [branch] #中括号的内容可省略
  ```
  
  第 2 步：
  
  ```bash
  git merge [alias]/[branch] #中括号的内容可省略
  ```
  
  ---
  
  ```bash
  git fetch
  ```
  
  ```bash
  git merge
  ```
  
  



### 查看提交历史 - *log*（本地仓库）

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



### 远程操作 - *remote*

查看远程仓库

```bash
git remote

git remote -v #查看别名的实际链接地址
```

提取远程仓库

第 1 步：

```bash
git fetch [alias] [branch] #中括号的内容可省略
```

第 2 步：

```bash
git merge [alias]/[branch] #中括号的内容可省略
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



### 分支 - *branch*

```bash
git branch #查看所有分支

git branch (branchname) #创建分支

git checkout (branchname) #切换分支

git checkout -b (branchname) #创建新分支并立即切换到该分支下

git branch -d (branchname) #删除分支

git merge (branch) #分支合并 [合并完记得删除分支]
```



### 标签 - *tag*

```bash
git tag #查看所有标签

git tag -a v1.0 #-a创建一个带注解的标签，会记录标签什么时候打的，谁打的

git tag -a v0.9 85fc7e7 #追加标签

git tag -a <tagname> -m "runoob.com标签" #指定标签信息

git tag -d v1.1 #删除标签

git show v1.0 #查看指定版本所修改的内容
```



### 文件差异 - *diff*

尚未缓存的改动（没有 git add 的文件）

```bash
git diff [file]
```

查看已缓存的改动（git add 的文件）

```bash
git diff --cached [file]
```

查看已缓存的改动（git add 的文件）

```bash
git diff --staged [file]
```

查看已缓存的与未缓存的所有改动

```bash
git diff HEAD [file]
```

显示摘要而非整个 diff

```bash
git diff --stat
```

显示两次提交之间的差异（first-branch 相当于 commit-id）

```bash
git diff [first-branch]...[second-branch]
```

查看本地和远程文件之间的差异

方式一（按下列步骤执行）：

第 1 步

```bash
git fetch origin master
```

第 2 步

```bash
git diff master origin/master
```

方式二：

```bash
git diff <masterbranch> <remotebranch>
```

以上参考：

https://www.coder.work/article/7752449 - *git - 如何在 Git 中显示本地和远程文件之间的差异？ - IT工具网*

- https://stackoverflow.com/questions/46786070/how-do-i-show-differences-between-local-and-remote-files-in-git - *How do I show differences between local and remote files in Git? - Stack Overflow*


### 回退版本 - *reset*

> git reset 命令用于回退版本，可以指定退回某一次提交的版本

语法：

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

👇 或者使用 **~数字** 的方式表示

- *HEAD~0* 表示当前版本
- *HEAD~1* 上一个版本
- *HEAD^2* 上上一个版本
- *HEAD^3* 上上上一个版本
- 以此类推...

实例：

```bash
git reset HEAD^ #回退所有内容到上一个版本

git reset HEAD^ hello.php #回退 hello.php 文件的版本到上一个版本

git reset 052e #回退到指定版本 052e

git reset HEAD~3 #回退上上上一个版本

git reset --hard origin/master #将本地的状态回退到和远程的一样
```



### 删除 - *rm*

> 删除文件后，目录为空时提交远程仓库会自动删除空目录

```bash
git rm <file> #将文件从暂存区和工作区中删除

git rm -f <file> #强行从暂存区和工作区中删除修改后的 runoob.txt 文件，-f 强制执行

git rm --cached <file> #把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除

git rm -r * #进入某个目录中，执行此语句，会删除该目录下的所有文件和子目录，-r 递归执行
```



### 移动/重命名 - *mv*

```bash
git mv [file] [newfile] #移动或重命名一个文件、目录或软连接

git mv -f [file] [newfile] #新文件名已经存在，但还是要重命名它

git mv <source> <destination> #在工作区和暂存区中进行移动或重命名。若 <destination> 不为一个目录名，则执行重命名。如果为一个目录名，则执行移动
```



### 解决合并冲突 - *checkout*

> 编辑冲突文件后重新提交

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



### 恢复 - *restore*

```bash
git restore <file> #恢复未提交已改动的文件

git restore --staged <file> #恢复暂存状态的文件
```



### 状态 - *status*

```bash
git status #显示工作树状态

git status -s #简短格式查看文件修改状态
```



参考： https://www.cnblogs.com/wangwenhui/p/10555261.html - *Git基础-查看当前文件状态、跟踪新文件、暂存文件、忽略文件、提交更新、移除文件、移动文件*

#### 未跟踪 - *Untracked*

> *工作区状态*

未跟踪，此文件在文件夹中，但并没有加入到 git 库，不参与版本控制；通过 `git add`  状态变为 *Staged*。

#### 未修改 - *Unmodify*

> *使用 commit 命令后的状态*

文件已经入库、未修改，即版本库中的文件快照内容与文件夹中完全一致。这种类型的文件有两种去处，如果它被修改，而变为 *Modified*。 如果使用 `git rm` 移出版本库, 则成为 *Untracked* 文件。

#### 已修改 - *Modified*

> *针对 unmodified 进行操作*

文件已修改，仅仅是修改，并没有进行其他的操作。这个文件也有两个去处，通过 `git add` 可进入暂存 *staged* 状态，使用 `git checkout` 则丢弃修改过，返回到 *unmodify* 状态，这个 `git checkout` 即从库中取出文件，覆盖当前修改。

#### 未暂存状态 - *not staged*

> `not staged`  表示 add 过的文件，即跟踪文件，再次修改没有 add，就是没有暂存的意思

#### 暂存状态 - *Staged*

> *add 命令状态*

暂存状态。执行 `git commit` 则将修改同步到库中，这时库中的文件和本地文件又变为一致，文件为 *Unmodify* 状态。
执行 `git reset HEAD filename` 取消暂存，文件状态为 *Modified*。

> Git 状态 untracked 和 not staged 的区别
>
> 1. untrack 表示是新文件，没有被 add 过，是为跟踪的意思；
> 2. not staged  表示 add 过的文件，即跟踪文件，再次修改没有 add，就是没有暂存的意思。



## 进阶命令

### stash

1. http://www.itfanr.cc/2022/07/08/git-stash/ - *git stash暂存区的使用 | IT范儿*

2. https://www.cnblogs.com/zndxall/p/9586088.html - *git stash 用法总结和注意点*

### rebase



## 文件

### .gitignore

https://www.jianshu.com/p/e5b13480479b - *git如何忽略已经提交的文件 (.gitignore文件无效) - 简书*

#### 忽略文件

方式 1：忽略跟踪 *modified* 状态的文件

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

方式 2：需要推送到远程仓库

```bash
git rm -r --cached <file> #把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除
git add .

git commit

git push
```



忽略 *untracked* 状态的文件

方式 1：将文件加入到 `.gitignore`

方式 2：将文件加入到 `.git/info/exclude` *via phpstorm/git*



#### 基础操作

> 如果文件已经存在于远程仓库中，是无法通过 `.gitignore` 文件来忽略的！
>
> 使用下面的命令，重新忽略

```bash
git rm --cached <file> #把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除
git commit
git push
```

忽略特殊文件，忽略的文件将不会 git 提交

```bash
/mtk/ #过滤整个文件夹
*.zip #过滤所有.zip文件
/mtk/do.c #过滤某个具体文件
```

> 以上规则意思是：被过滤掉的文件就不会出现在你的 GitHub 仓库中了，当然本地仓库中还有，只是 push 的时候不会上传。

```bash
!src/ #不过滤该文件夹
!*.zip #不过滤所有.zip文件
!/mtk/do.c #不过滤该文件
```

> 以上规则意思是：指定要将哪些文件添加到版本管理中。



#### 配置语法

以斜杠 `/` 开头表示目录

以星号 `*` 通配多个字符

以问号 `?` 通配单个字符

以方括号 `[]` 包含单个字符的匹配列表

以叹号 `!` 表示不忽略（跟踪）匹配到的文件或目录

> 注：此外，git 对于 .ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效。



#### 示例说明

规则：`fd1/*`

说明：忽略目录 `fd1` 下的全部内容；注意，不管是根目录下的 `/fd1/` 目录，还是某个子目录 `/child/fd1/` 目录，都会被忽略。

规则：`/fd1/*`

说明：忽略根目录下的 `/fd1/` 目录的全部内容。

规则：

```bash
/*
!.gitignore
!/fw/bin/
!/fw/sf/
```

说明：忽略全部内容，但是不忽略 `.gitignore` 文件、根目录下的 `/fw/bin/` 和 `/fw/sf/` 目录。

参考：

1. https://www.jianshu.com/p/699ed86028c2 - *.gitignore - 简书*

2. https://www.liaoxuefeng.com/wiki/896043488029600/900004590234208 - *忽略特殊文件 - 廖雪峰的官方网站*

3. https://www.cnblogs.com/yulinlewis/p/10231035.html - *Git - .gitignore文件的用法 - 雨临Lewis - 博客园*

### .gitattributes

https://github.com/alexkaratarakis/gitattributes - *GitHub - alexkaratarakis/gitattributes: A collection of useful .gitattributes templates*

1. https://www.bookstack.cn/read/git-doc-zh/docs-39.md - *gitattributes - 《Git 中文参考》 - 书栈网 · BookStack*

2. https://baijiahao.baidu.com/s?id=1658545315960482338 - *请把 .gitattributes 加到你的 Git 仓库中*

3. https://www.cnblogs.com/friedCoder/p/12467515.html - *.gitattributes - friedCoder - 博客园*


## 常见问题

### 查看某个文件的修改记录

1. git log filename

    可以看到 fileName 相关的 commit 记录

2. git log -p filename

    可以显示每次提交的 diff

3. 查看某次提交中的某个文件变化，可以直接加上 fileName

    git show 271622367a8934c8f046a0ccd51216c4e5f1d82d fileName

4. 使用命令 git show 9ddc9dca00b --stat 查看详细更改文件列表

参考：https://blog.csdn.net/sunxiaopengsun/article/details/129227548 - *git 查看某个文件的修改记录_git查看某个文件的修改记录_sunxiaopengsun的博客-CSDN博客*

### webhook

- 在 Gitee 中实现

- 在 GitLab 中实现

- 使用 `crontab` 自动执行脚本实现

参考链接 👇

1. https://segmentfault.com/a/1190000040540720 - *PHP使用WebHook自动更新Git仓库部署*

2. https://blog.csdn.net/weixin_36851500/article/details/104011450 - *Github的WebHooks实现生产环境代码自动更新*




### 放弃修改，强制覆盖本地代码

```bash
git reset --hard origin/master
```

https://blog.csdn.net/weixin_43721000/article/details/124264598 - *Git强制更新代码到本地【远端仓库替换本地】*



### 放弃本地文件修改 🔥

https://www.jianshu.com/p/c0f7e4ac14c7 - *git 放弃本地文件修改*

1. 未使用 `git add` 缓存代码

   ```bash
   # 使用git checkout -- filename，注意中间有--
   git checkout -- filename
   
   # 放弃所有文件修改 git checkout .
   git checkout .
   ```

2. 已使用 `git add` 缓存代码，未使用 `git commit`

   > `--soft` 不删除工作空间的改动代码 ，撤销 commit，不撤销 *git add .*
   >
   > `--mixed` 默认参数，不删除工作空间改动代码，撤销 commit，并且撤销 *git add .* 操作

   ```bash
   # 使用 git reset HEAD filename
   git reset HEAD filename
   
   # 放弃所有文件修改 git reset HEAD
   git reset HEAD
   ```

3. 已使用 `git commit` 提交了代码

   > `--hard` 删除工作空间的改动代码，撤销 commit 且撤销 add

   ```bash
   # 使用 git reset --hard HEAD^ 来回退到上一次 commit 的状态
   git reset --hard HEAD^
   
   # 回退到任意版本 git reset --hard commit id ，使用 git log 命令查看 git 提交历史和 commit id
   git reset --hard commit id
   ```



### 从远端获取某个文件 🔥

```bash
git fetch
git checkout origin/master -- path/folder/filename #获取某个文件
git checkout origin/master -- path/folder #获取某个目录
```

参考：https://www.cnblogs.com/olive27/p/11791162.html - *git如何从远端获取某个文件 - OliveKong - 博客园*



### 回退 push 的文件

1. `--force`

   ```bash
   git reset --soft commit id
   git push origin master --force #强制提交当前版本号，以达到撤销版本号的目的.必须添加参数 force 进行强制提交，否则会提交失败,报错原因：本地项目版本号低于远端仓库版本号（注意:这种强制提交的方法只有 owner 的时候可以用）
   ```

   

### 合并多个提交

1. https://www.cnblogs.com/tocy/p/git-rebase-merge-commit.html - *git合并多个提交*

2. https://www.jianshu.com/p/964de879904a - *「Git」合并多个 Commit*



### commit emoji

?> An emoji guide for your commit messages. 😜（译文：提交消息的表情符号指南。 😜）

![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)

Website: https://gitmoji.dev/

GitHub: https://github.com/carloscuesta/gitmoji

参考：

https://jackiehao.blog.csdn.net/article/details/109309743 - *GitHub中提交代码说明时添加emoji小图标*


### commit 提交规范

1. https://juejin.cn/post/7134487982597210120 - *天天提交代码，git commit 提交时能规范一下吗？ - 掘金*

2. https://blog.csdn.net/weixin_44292923/article/details/124317911 - *git提交规范，规范自己的提交标准_该走的弯路，一步都不会少。的博客-CSDN博客*



### 在本地局域网中的两台电脑间同步代码

1. https://www.cnblogs.com/phillee/p/15353020.html - *通过Git在本地局域网中的两台电脑间同步代码*
