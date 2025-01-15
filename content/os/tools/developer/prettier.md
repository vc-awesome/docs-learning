# Prettier

## 简介

> Opinionated Code Formatter（Prettier 是一个“有态度”的代码格式化工具）

![GitHub last commit](https://img.shields.io/github/last-commit/prettier/prettier?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/prettier/prettier?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/prettier/prettier?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/prettier/prettier?style=social)

## 官方

https://prettier.io/ - _Prettier · Opinionated Code Formatter_

https://www.prettier.cn/ - _Prettier 中文网 · Prettier 是一个“有态度”的代码格式化工具_

https://github.com/prettier/prettier - _GitHub - prettier/prettier: Prettier is an opinionated code formatter._

## 入门指南

### Plugins

https://prettier.io/docs/en/plugins - _Plugins · Prettier_

1. https://github.com/niklaspor/prettier-plugin-organize-attributes - _GitHub - NiklasPor/prettier-plugin-organize-attributes: Organize your HTML attributes automatically with Prettier 🧼_ 「HTML 属性排序」

   ![GitHub last commit](https://img.shields.io/github/last-commit/niklaspor/prettier-plugin-organize-attributes?logo=github&color=blue)
   ![GitHub Repo stars](https://img.shields.io/github/stars/niklaspor/prettier-plugin-organize-attributes?style=social)

2. https://github.com/Siilwyn/prettier-plugin-css-order - _GitHub - Siilwyn/prettier-plugin-css-order: Prettier plugin to sort CSS declarations in a certain order._ 「CSS 声明排序」

   ![GitHub last commit](https://img.shields.io/github/last-commit/Siilwyn/prettier-plugin-css-order?logo=github&color=blue)
   ![GitHub Repo stars](https://img.shields.io/github/stars/Siilwyn/prettier-plugin-css-order?style=social)

### Editor Integration

https://prettier.io/docs/en/editors - _Editor Integration · Prettier_

#### Visual Studio Code

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode - _Prettier - Code formatter - Visual Studio Marketplace_

https://github.com/prettier/prettier-vscode - _GitHub - prettier/prettier-vscode: Visual Studio Code extension for Prettier_

![GitHub last commit](https://img.shields.io/github/last-commit/prettier/prettier-vscode?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/prettier/prettier-vscode?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/prettier/prettier-vscode?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/prettier/prettier-vscode?style=social)

#### Vim

https://github.com/prettier/vim-prettier - _GitHub - prettier/vim-prettier: A Vim plugin for Prettier_

![GitHub last commit](https://img.shields.io/github/last-commit/prettier/vim-prettier?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/prettier/vim-prettier?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/prettier/vim-prettier?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/prettier/vim-prettier?style=social)

## 快速入门

暂无

## 安装

https://prettier.io/docs/en/install - _Install · Prettier_

## 设置

https://prettier.io/docs/en/options - _Options · Prettier_

创建配置文件 [.prettierrc](https://prettier.io/docs/en/install)

1. Arrow Parens（箭头括号）：\
   _Include parentheses around a sole arrow function parameter._
   - 选择 > `avoid`
2. Bracket Same Line（括号同一行）：\
   _Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements)._
   - 不勾选 > `false`
3. Bracket Spacing（括号间距）：\
   _Print spaces between brackets in object literals._
   - 勾选 > `true`
4. Embedded Language Formatting（嵌入式语言格式）：\
   _Control whether Prettier formats quoted code embedded in the file._
   - 选择 > `auto`
5. End Of Line（行结束）：\
   _For historical reasons, there exist two common flavors of line endings in text files. That is \n (or LF for Line Feed) and \r\n (or CRLF for Carriage Return + Line Feed)._
   - 选择 > `lf`
6. HTML Whitespace Sensitivity（HTML 空格敏感度）：\
   _Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars._
   - 选择 > `css`
7. Insert Pragma（插入杂注）：
   - 不勾选 > `false`
8. JSX Single Quote（JSX 单引号）：
   - 不勾选 > `false`
9. Open logs page on error（出错时打开日志页面）：
   - 勾选 > `true`
10. Print Width（打印宽度）：
    - 填写 > `80`
11. Prose Wrap（散文包装）：
    - 选择 > `preserve`
12. Quote Props（引用属性）：
    - 选择 > `as-needed`
13. Range End（范围结束）：
    - 填写 > `Infinity`
14. Range Start（范围开始）：
    - 填写 > `0`
15. Require Pragma（必需杂注）：
    - 不勾选 > `false`
16. Semicolons（分号）：
    - 勾选 > `true`
17. Single Attribute Per Line（每行单个属性）：
    - 勾选 > `true`
18. Single Quote（单引号）：
    - 勾选 > `true`
19. Tab Width（制表符宽度）：
    - 填写 > `2`
20. Trailing Comma（结尾逗号）：
    - 选择 > `all`
21. Use Tabs（使用制表符）：
    - 不勾选 > `false`
22. Vue Indent Script And Style（Vue 缩进脚本和样式）：
    - 不勾选 > `false`

## 用法

1. [结合 ESLint 使用](https://prettier.io/docs/en/install#eslint-and-other-linters)

### CSS 声明排序

暂无

### HTML 属性排序

暂无

## 常见问题解答

暂无

## 参考

暂无
