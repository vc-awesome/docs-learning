# 代码片段

<div style="position: relative;min-height: 35px;background: rgb(190 179 255) url(../_media/../_media/glossary-hero.png) top/cover no-repeat;box-shadow: rgba(140, 149, 159, 0.15) 0px 3px 6px 0px;margin-bottom: 35px;">
<i style="position: absolute;right: 0;bottom: -25px;font-size: xx-small;">

插图来源于：[Android Developers](https://developer.android.google.cn/design/ui/mobile/guides/foundations/glossary?hl=zh-cn)&nbsp;&nbsp;</i></div>

## 图片来源

中文版

```md
<small>*插图来源于：[]()*</small>
```

英文版：

```md
<small>*Picture source: []()*</small>
```

## 注释

```html
<!--

-->
```

## 搜索替换

### 文件内容替换（正则）

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

中文与英文之间添加空格：

- 查找内容

    ```regex
    ([\w`]+(?=[\x{4e00}-\x{9fa5}]+)|[\x{4e00}-\x{9fa5}]+(?=[\w`]+))
    ```

- 替换内容 `$1 `

添加标签 `<kbd></kbd>`

- 查找内容

```regex
(\b([a-zA-Z]|Ctrl|Alt|Del|ESC|Break|PrintScr|Pause|F([1-9]|[1][0-2]))\b)
```

- 替换内容 `<kbd>$1</kbd>`

## 其它

```md
!> ~~没玩起来😶。~~
```
!> ~~没玩起来😶。~~

```md
!> 待添加
```

```uri
view-source:
```

```html
<kbd></kbd>
```

```md
**主标题** ｜副标题
```

```markdown
${url} - *${title}*${enter}${enter}![GitHub last commit](https://badgen.net/github/last-commit${pathname}?icon=github&color=blue)${enter}![GitHub Repo stars](https://img.shields.io/github/stars${pathname}?style=social)
```
