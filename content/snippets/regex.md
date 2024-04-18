# 搜索替换

## 文件内容替换（正则）

### 将链接格式 `[title](url)` 替换为 `url - *title*`

将链接格式：

`[📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍](https://emojipedia.org/)`

替换为：

`https://emojipedia.org/ - *📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍*`

操作步骤（macOS）：

1. 打开应用程序 [Visual Studio Code](os/tools/visual-studio-code.md) ；
2. 使用键盘快捷键 <kbd>⌥</kbd> + <kbd>⌘</kbd> + <kbd>F</kbd> 打开「替换功能」；
3. 在查找内容中输入：`\[([^\]]+)\]\(([^\(]+)\)`，查找方式选择：使用正则表达式；
4. 在替换内容中输入：`$2 - *$1*`；
5. 点击回车键 <kbd>Enter</kbd>（ 即键盘按键 <kbd>↵</kbd> ）进行逐个替换。

### 中文与英文之间添加空格

查找内容：

```regex
([\w`]+(?=[\x{4e00}-\x{9fa5}]+)|[\x{4e00}-\x{9fa5}]+(?=[\w`]+))
```

替换内容：

`$1 `

### 添加标签 `<kbd></kbd>`

查找内容：

```regex
(\b([a-zA-Z]|Ctrl|Alt|Del|ESC|Break|PrintScr|Pause|F([1-9]|[1][0-2]))\b)
```

替换内容：

`<kbd>$1</kbd>`
