# 文件对比

// TODO: 完善内容

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

## git diff

[git diff](os/tools/developer/git.md#文件差异-diff) - *Show changes between the working tree and the index or a tree, changes between the index and a tree, changes between two trees, changes resulting from a merge, changes between two blob objects, or changes between two files on disk.*

- diff-so-fancy - *美化输出工具，Termux 暂不支持*

Git 自带彩色差异显示功能，无需额外工具。

命令：

```bash
git diff --color
```

如果是非 Git 文件，也可以用 Git 的 diff 功能：

```bash
git diff --no-index <path> <path>
```

[_--diff-filter=[(A/C/D/M/R/T/U/X/B)…​\[\*\]]_](https://git-scm.com/docs/git-diff/zh_HANS-CN#git-diff---diff-filterACDMRTUXB82308203) - *对比两个目录都存在的文件*

```bash
git diff --diff-filter=ACM dir1 dir2
```

## colordiff

[colordiff](os/mobile/termux.md#colordiff) - *The Perl script colordiff is a wrapper for ‘diff’ and produces the same output but with pretty ‘syntax’ highlighting. Colour schemes can be customized.*

`colordiff` 是 `diff` 的彩色输出版本，它对原始 `diff` 命令的输出进行着色。

安装 `colordiff`：

```bash
sudo apt install colordiff
```

使用方法（直接用 `colordiff` 替代 `diff`）：

```bash
colordiff -u file1 file2
```

## diff

[diff](os/linux/command.md#diff) - *Compare FILES line by line.*

## vimdiff

[vimdiff](os/tools/developer/vim.md#对比文件) - *Vimdiff starts Vim on two up to eight files.  Each file gets its own window.  The differences between the files are highlighted.  This is a nice way to inspect changes and to move changes from one version to another version of the same file.*

## meld

https://repology.org/project/meld/versions - *meld package versions - Repology*

支持：

- [x] Windows
- [x] macOS
- [x] Linux
- [x] Android (Termux)
- [ ] Web

## kdiff3

https://repology.org/project/kdiff3/versions - *kdiff3 package versions - Repology*

支持：

- [x] Windows
- [x] macOS
- [x] Linux
- [ ] Android (Termux)
- [ ] Web

## Web app

[文件对比](os/tools/web-app.md#文件对比)
