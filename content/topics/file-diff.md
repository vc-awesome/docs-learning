# 文件对比

## Overview

教程：

1. https://blog.csdn.net/lzp_k2/article/details/88529094 - *10款最佳的Linux文件比较工具_kompare下载-CSDN博客*

2. https://cn.linux-console.net/?p=998 - *Linux 中 10 个最佳文件比较和差异 (Diff) 工具*

3. https://www.ruanyifeng.com/blog/2012/08/how_to_read_diff.html - *读懂diff - 阮一峰的网络日志*

支持：

- [x] Windows
- [x] macOS
- [x] Linux
- [x] Android (Termux)
- [x] Web

功能：

- [x] 逐行对比
- [x] 逐字对比
- [x] 对比文件
- [x] 对比目录

## Desktop & Mobile App

工具列表：

1. [colordiff](#colordiff)（推荐）
2. [diff](#diff)
3. [diff-so-fancy](#diff-so-fancy)
4. [git diff](#git%20diff)
5. [kdiff3](#kdiff3)
6. [meld](#meld)
7. [rclone](#rclone)（推荐）
8. [rsync](#rsync)
9. [vimdiff](#vimdiff)
10. [wdiff](#wdiff)

### colordiff

[colordiff](os/mobile/termux.md#colordiff) - *The Perl script colordiff is a wrapper for ‘diff’ and produces the same output but with pretty ‘syntax’ highlighting. Colour schemes can be customized.*

https://repology.org/project/colordiff/versions - *colordiff package versions - Repology*

`colordiff` 是 `diff` 的彩色输出版本，它对原始 `diff` 命令的输出进行着色。

安装：

```bash
sudo apt install colordiff
```

用法（直接用 `colordiff` 替代 `diff`）：

```bash
man -s 1 colordiff
```

```bash
colordiff --help
```

```bash
colordiff -u FILE1 FILE2
```

```bash
colordiff -u DIR1 DIR2
```

选项：

```bash
diff --help
```

1. `-u`, `-U NUM`, `--unified[=NUM]` - *output NUM (default 3) lines of unified context*
2. `-r`, `--recursive` - *recursively compare any subdirectories found* （递归比较两个目录及其子目录中的文件）
3. `-n`, `--rcs` - *output an RCS format diff*
4. `-q`, `--brief` - *report only when files differ* （比较两个目录是否不同，而不关心具体的差异）
5. `-s`, `--report-identical-files` - *report when two files are the same* （比较两个目录是否相同，而不关心具体的差异）
6. `-x`, `--exclude=PAT` - *exclude files that match PAT*

示例：

```bash
colordiff -r -u --exclude=".*" DIR1 DIR2
```

```bash
colordiff -ru --exclude=".*" docs-learning docs-learning\ \(1\)
```

```bash
colordiff -ruq --exclude=".*" docs-learning docs-learning\ \(1\)
```

### diff

[diff](os/desktop/linux/command.md#diff) - *Compare FILES line by line.*

### diff-so-fancy

[GitHub - so-fancy/diff-so-fancy: Good-lookin' diffs. Actually… nah… The best-lookin' diffs. :tada:](https://github.com/so-fancy/diff-so-fancy) - *Good-lookin&#39; diffs. Actually… nah… The best-lookin&#39; diffs. :tada: - so-fancy/diff-so-fancy*

![GitHub last commit](https://img.shields.io/github/last-commit/so-fancy/diff-so-fancy?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/so-fancy/diff-so-fancy?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/so-fancy/diff-so-fancy?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/so-fancy/diff-so-fancy?style=social)

https://repology.org/project/diff-so-fancy/versions - *diff-so-fancy package versions - Repology*

- _via https://www.ruanyifeng.com/blog/2022/01/cli-alternative-tools.html - *命令行常用工具的替代品 - 阮一峰的网络日志*_
- *美化输出工具~~，Termux 暂不支持~~*

支持：

- [x] Windows
- [x] macOS
- [x] Linux
- [x] Android (Termux)
- [ ] Web

示例：

```bash
colordiff -ru --exclude=".*" docs-learning docs-learning\ \(1\) | diff-so-fancy
```

### git diff

[git diff](os/tools/developer/git.md#文件差异-diff) - *Show changes between the working tree and the index or a tree, changes between the index and a tree, changes between two trees, changes resulting from a merge, changes between two blob objects, or changes between two files on disk.*

支持：

- [x] Windows
- [x] macOS
- [x] Linux
- [x] Android (Termux)
- [ ] Web

### kdiff3

https://repology.org/project/kdiff3/versions - *kdiff3 package versions - Repology*

支持：

- [x] Windows
- [x] macOS
- [x] Linux
- [ ] Android (Termux)
- [ ] Web

### meld

https://repology.org/project/meld/versions - *meld package versions - Repology*

支持：

- [x] Windows
- [x] macOS
- [x] Linux
- [x] Android (Termux)
- [ ] Web

### rclone

[Rclone](https://rclone.org/) - *Rclone syncs your files to cloud storage: Google Drive, S3, Swift, Dropbox, Google Cloud Storage, Azure, Box and many more.* [使用手册](os/tools/developer/rclone.md)

示例：

```bash
rclone check docs-learning docs-learning\ \(1\) --exclude ".*/**"
```

### rsync

[rsync](https://rsync.samba.org/) - *Utility that provides fast incremental file transfer*

教程：

1. https://www.ruanyifeng.com/blog/2020/08/rsync.html - *rsync 用法教程 - 阮一峰的网络日志*
2. https://wangdoc.com/ssh/rsync - *rsync 命令 - SSH 教程 - 网道*

用法：

rsync [OPTION]... SRC [SRC]... DEST
  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST:DEST
  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST::DEST
  or   rsync [OPTION]... SRC [SRC]... rsync://[USER@]HOST[:PORT]/DEST
  or   rsync [OPTION]... [USER@]HOST:SRC [DEST]
  or   rsync [OPTION]... [USER@]HOST::SRC [DEST]
  or   rsync [OPTION]... rsync://[USER@]HOST[:PORT]/SRC [DEST]

The ':' usages connect via remote shell, while '::' & 'rsync://' usages connect to an rsync daemon, and require SRC or DEST to start with a module name.

选项：

`--verbose`, `-v` - *increase verbosity*

`--dry-run`, `-n` - *perform a trial run with no changes made*

`--checksum`, `-c` - *skip based on checksum, not mod-time & size*

`--recursive`, `-r` - *recurse into directories*

`--exclude=PATTERN` - *exclude files matching PATTERN*

`--version`, `-V` - *print the version + other info and exit*
`--help`, `-h` (\*) - *show this help (\* -h is help only on its own)*

示例：

```bash
rsync -rvc --exclude=".*" docs-learning/ docs-learning\ \(1\)
```

```bash
rsync -rvnc --exclude=".*" docs-learning/ docs-learning\ \(1\)
```

### vimdiff

[vimdiff](os/tools/developer/editor/vim.md#对比文件) - *Vimdiff starts Vim on two up to eight files.  Each file gets its own window.  The differences between the files are highlighted.  This is a nice way to inspect changes and to move changes from one version to another version of the same file.*

### wdiff

[Wdiff - GNU Project - Free Software Foundation](https://www.gnu.org/software/wdiff/) - *The GNU wdiff program is a front end to diff for comparing files on a word per word basis. A word is anything between whitespace. This is useful for comparing two texts in which a few words have been changed and for which paragraphs have been refilled. It works by creating two temporary files, one word per line, and then executes diff on these files. It collects the diff output and uses it to produce a nicer display of word differences between the original files.*

## Web app

有关详细信息，请参阅“[文件对比](os/tools/web-app.md#文件对比)”。
