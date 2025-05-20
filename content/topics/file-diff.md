# 文件对比

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

工具列表：

1. [colordiff](#colordiff)（推荐）
2. [diff](#diff)
3. [diff-so-fancy](#diff-so-fancy)
4. [git diff](#git%20diff)
5. [kdiff3](#kdiff3)
6. [meld](#meld)
7. [vimdiff](#vimdiff)
8. [wdiff](#wdiff)

## Desktop & Mobile App

### colordiff

[colordiff](os/mobile/termux.md#colordiff) - *The Perl script colordiff is a wrapper for ‘diff’ and produces the same output but with pretty ‘syntax’ highlighting. Colour schemes can be customized.*

`colordiff` 是 `diff` 的彩色输出版本，它对原始 `diff` 命令的输出进行着色。

安装 `colordiff`：

```bash
sudo apt install colordiff
```

使用方法（直接用 `colordiff` 替代 `diff`）：

```bash
colordiff --help
```

```bash
diff --help
```

```bash
colordiff -u FILE1 FILE2
```

```bash
colordiff -u DIR1 DIR2
```

选项：

1. `-u`, `-U NUM`, `--unified[=NUM]` - *output NUM (default 3) lines of unified context*
2. `-r`, `--recursive` - *recursively compare any subdirectories found* （递归比较两个目录及其子目录中的文件）
3. `-n`, `--rcs` - *output an RCS format diff*
4. `-q`, `--brief` - *report only when files differ* （比较两个目录是否不同，而不关心具体的差异）
5. `-s`, `--report-identical-files` - *report when two files are the same* （比较两个目录是否相同，而不关心具体的差异）
6. `-x`, `--exclude=PAT` - *exclude files that match PAT*

### diff

[diff](os/desktop/linux/command.md#diff) - *Compare FILES line by line.*

### diff-so-fancy

[GitHub - so-fancy/diff-so-fancy: Good-lookin' diffs. Actually… nah… The best-lookin' diffs. :tada:](https://github.com/so-fancy/diff-so-fancy) - *Good-lookin&#39; diffs. Actually… nah… The best-lookin&#39; diffs. :tada: - so-fancy/diff-so-fancy*

- _via https://www.ruanyifeng.com/blog/2022/01/cli-alternative-tools.html - *命令行常用工具的替代品 - 阮一峰的网络日志*_
- *美化输出工具，Termux 暂不支持*

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

### vimdiff

[vimdiff](os/tools/developer/editor/vim.md#对比文件) - *Vimdiff starts Vim on two up to eight files.  Each file gets its own window.  The differences between the files are highlighted.  This is a nice way to inspect changes and to move changes from one version to another version of the same file.*

### wdiff

[Wdiff - GNU Project - Free Software Foundation](https://www.gnu.org/software/wdiff)

## Web app

[文件对比](os/tools/web-app.md#文件对比)
