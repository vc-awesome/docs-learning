# Prettier

## 简介

> Opinionated Code Formatter（Prettier 是一个“有态度”的代码格式化工具）

![GitHub last commit](https://img.shields.io/github/last-commit/prettier/prettier?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/prettier/prettier?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/prettier/prettier?logo=github)
![NPM Version](https://img.shields.io/npm/v/prettier?logo=npm)
![GitHub Repo stars](https://img.shields.io/github/stars/prettier/prettier?style=social)

## 官方

https://prettier.io/ - _Prettier · Opinionated Code Formatter_ [中文站点](https://www.prettier.cn/)

https://github.com/prettier/prettier - _GitHub - prettier/prettier: Prettier is an opinionated code formatter._

## 入门指南

### Plugins

https://prettier.io/docs/en/plugins - _Plugins · Prettier_

官方插件列表：

暂无

社区插件列表：
1. [CSS 声明排序](#css-声明排序)
2. [HTML 属性排序](#html-属性排序)

## 快速入门

暂无

## 安装

https://prettier.io/docs/en/install - _Install · Prettier_

### Editor Integration

https://prettier.io/docs/en/editors - _Editor Integration · Prettier_

#### Vim

https://prettier.io/docs/vim.html - *Vim Setup · Prettier*

https://github.com/prettier/vim-prettier - _GitHub - prettier/vim-prettier: A Vim plugin for Prettier_

![GitHub last commit](https://img.shields.io/github/last-commit/prettier/vim-prettier?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/prettier/vim-prettier?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/prettier/vim-prettier?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/prettier/vim-prettier?style=social)

#### Visual Studio Code

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode - _Prettier - Code formatter - Visual Studio Marketplace_

https://github.com/prettier/prettier-vscode - _GitHub - prettier/prettier-vscode: Visual Studio Code extension for Prettier_

![GitHub last commit](https://img.shields.io/github/last-commit/prettier/prettier-vscode?logo=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/prettier/prettier-vscode?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/prettier/prettier-vscode?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/prettier/prettier-vscode?style=social)

### Web

https://prettier.io/playground/ - *Prettier v3.5.3*

## 配置

https://prettier.io/docs/en/options - _Options · Prettier_

创建配置文件 [.prettierrc](https://prettier.io/docs/en/install)

1. [Arrow Parens](#arrow-function-parentheses)（箭头函数括号）：\
   _Include parentheses around a sole arrow function parameter._
   - 选择 > `avoid`
   - 默认：`always`
2. [Bracket Same Line](#bracket-line)（括号同一行）：\
   _Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements)._
   - 勾选 > `false`
   - 默认：`false`
3. [Bracket Spacing](#bracket-spacing)（括号间距）：\
   _Print spaces between brackets in object literals._
   - 勾选 > `true`
   - 默认：`true`
4. [Embedded Language Formatting](#embedded-language-formatting)（嵌入式语言格式化）：\
   _Control whether Prettier formats quoted code embedded in the file._
   - 选择 > `auto`
   - 默认：`auto`
5. [End Of Line](#end-of-line)（行结束符）：\
   _For historical reasons, there exist two common flavors of line endings in text files. That is \n (or LF for Line Feed) and \r\n (or CRLF for Carriage Return + Line Feed)._
   - 选择 > `lf`
   - 默认：`lf`
6. [HTML Whitespace Sensitivity](#html-whitespace-sensitivity)（HTML 空格敏感度）：\
   _Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars._
   - 选择 > `css`
   - 默认：`css`
7. [Insert Pragma](#insert-pragma)（插入杂注）：\
   _Insert '@format' pragma into the docblock, if none is present._
   - 勾选 > `false`
   - 默认：`false`
8. [JSX Single Quote](#jsx-quotes)（JSX 单引号）：\
   _Use single quotes instead of double quotes in JSX._
   - 勾选 > `false`
   - 默认：`false`
9. Open logs page on error（出错时打开日志页面）：\
   _Open logs page when an error occurs._
   - 勾选 > `true`
   - 默认：`true`
10. [Print Width](#print-width)（打印宽度）：\
   _The line length where Prettier will try wrap._
   - 填写 > `80`
   - 默认：`80`
11. [Prose Wrap](#prose-wrap)（代码换行）：\
   _How to wrap prose._
   - 选择 > `preserve`
   - 默认：`preserve`
12. [Quote Props](#quote-props)（引号属性）：\
   _Change when properties in objects are quoted._
   - 选择 > `as-needed`
   - 默认：`as-needed`
13. [Range End](#range)（范围结束）：\
   _Format only a segment of a file._
   - 填写 > `Infinity`
   - 默认：`Infinity`
14. [Range Start](#range)（范围开始）：\
   _Format only a segment of a file._
   - 填写 > `0`
   - 默认：`0`
15. [Require Pragma](#require-pragma)（需要杂注）：\
   _Require either '@prettier' or '@format' to be present in the file's first docblock comment._
   - 勾选 > `false`
   - 默认：`false`
16. [Semicolons](#semicolons)（分号）：\
   _Print semicolons at the ends of statements._
   - 勾选 > `true`
   - 默认：`true`
17. [Single Attribute Per Line](#single-attribute-per-line)（每行单个属性）：\
   _Put each attribute in a separate line._
   - 勾选 > `true`
   - 默认：`false`
18. [Single Quote](#quotes)（单引号）：\
   _Use single quotes instead of double quotes._
   - 勾选 > `true`
   - 默认：`false`
19. [Tab Width](#tab-width)（制表符宽度）：\
   _Number of spaces per indentation level._
   - 填写 > `2`
   - 默认：`2`
20. [Trailing Comma](#trailing-commas)（尾随逗号）：\
   _Print trailing commas wherever possible._
   - 选择 > `all`
   - 默认：`all`
21. [Use Tabs](#tabs)（使用制表符）：\
   _Indent lines with tabs instead of spaces._
   - 勾选 > `false`
   - 默认：`false`
22. [Vue Indent Script And Style](#vue-files-script-and-style-tags-indentation)（Vue 文件脚本和样式标签缩缩进：\
   _Indent script and style tags in Vue files._
   - 勾选 > `false`
   - 默认：`false`

### Print Width

Specify the line length that the printer will wrap on.

默认：80

### Tab Width

Specify the number of spaces per indentation-level.

默认：2

### Tabs

Indent lines with tabs instead of spaces.

默认：false

### Semicolons

Print semicolons at the ends of statements.

默认：true

### Quotes

Use single quotes instead of double quotes.

默认：false

### Quote Props

Change when properties in objects are quoted.

Valid options:

- "as-needed" - Only add quotes around object properties where required.（仅在需要时在对象属性周围添加引号。）
- "consistent" - If at least one property in an object requires quotes, quote all properties.（如果对象中至少有一个属性需要引号，则引用所有属性。）
- "preserve" - Respect the input use of quotes in object properties.（遵循对象属性中引号的输入使用。）

默认：as-needed

### JSX Quotes

Use single quotes instead of double quotes in JSX.

默认：false

### Trailing Commas

Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)

Valid options:

- "all" - Trailing commas wherever possible (including function parameters and calls). To run, JavaScript code formatted this way needs an engine that supports ES2017 (Node.js 8+ or a modern browser) or downlevel compilation. This also enables trailing commas in type parameters in TypeScript (supported since TypeScript 2.7 released in January 2018).
- "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.). Trailing commas in type parameters in TypeScript and Flow.
- "none" - No trailing commas.

默认：all

### Bracket Spacing

Print spaces between brackets in object literals.

Valid options:

- true - Example: `{ foo: bar }`.
- false - Example: `{foo: bar}`.

默认：true

### Object Wrap

Configure how Prettier wraps object literals when they could fit on one line or span multiple lines.

Valid options:

- "preserve" - Keep as multi-line, if there is a newline between the opening brace and first property.
- "collapse" - Fit to a single line when possible.

默认：preserve

### Bracket Line

Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).

Valid options:

- true - Example:

```html
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}>
  Click Here
</button>
```

- false - Example:

```html
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}
>
  Click Here
</button>
```

默认：false

### Arrow Function Parentheses

Include parentheses around a sole arrow function parameter.

Valid options:

- "always" - Always include parens. Example: `(x) => x`
- "avoid" - Omit parens when possible. Example: `x => x`

默认：always

### Range

Format only a segment of a file.

### Parser

Specify which parser to use.

### Require Pragma

Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to Prettier.

默认：false

### Insert Pragma

Prettier can insert a special `@format` marker at the top of files specifying that the file has been formatted with Prettier. This works well when used in tandem with the `--require-pragma` option. If there is already a docblock at the top of the file then this option will add a newline to it with the `@format` marker.

默认：false

### Prose Wrap

By default, Prettier will not change wrapping in markdown text since some services use a linebreak-sensitive renderer, e.g. GitHub comments and BitBucket. To have Prettier wrap prose to the print width, change this option to "always". If you want Prettier to force all prose blocks to be on a single line and rely on editor/viewer soft wrapping instead, you can use "never".

Valid options:

- "always" - Wrap prose if it exceeds the print width.
- "never" - Un-wrap each block of prose into one line.
- "preserve" - Do nothing, leave prose as-is. First available in v1.9.0

默认：preserve

### HTML Whitespace Sensitivity

Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.

Valid options:

- "css" - Respect the default value of CSS `display` property. For Handlebars treated same as `strict`.
- "strict" - Whitespace (or the lack of it) around all tags is considered significant.
- "ignore" - Whitespace (or the lack of it) around all tags is considered insignificant.

默认：css

### Vue files script and style tags indentation

Whether or not to indent the code inside `<script>` and `<style>` tags in Vue files.

Valid options:

- false - Do not indent script and style tags in Vue files.
- true - Indent script and style tags in Vue files.

默认：false

### End of Line

For historical reasons, there exist two common flavors of line endings in text files. That is \n (or LF for Line Feed) and \r\n (or CRLF for Carriage Return + Line Feed). The former is common on Linux and macOS, while the latter is prevalent on Windows.

Valid options:

- "lf" – Line Feed only (`\n`), common on Linux and macOS as well as inside git repos
- "crlf" - Carriage Return + Line Feed characters (`\r\n`), common on Windows
- "cr" - Carriage Return character only (`\r`), used very rarely
- "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)

默认：lf

### Embedded Language Formatting

Control whether Prettier formats quoted code embedded in the file.

Valid options:

- "auto" – Format embedded code if Prettier can automatically identify it.
- "off" - Never automatically format embedded code.

默认：auto

### Single Attribute Per Line

Enforce single attribute per line in HTML, Vue, and JSX.

Valid options:

- false - Do not enforce single attribute per line.
- true - Enforce single attribute per line.

默认：false

## 用法

### Integrating with Linters

https://prettier.io/docs/integrating-with-linters - *Integrating with Linters · Prettier*

#### ESLint

1. [结合 ESLint 使用](https://prettier.io/docs/en/install#eslint-and-other-linters)

#### Stylelint

暂无

### CSS 声明排序

https://github.com/Siilwyn/prettier-plugin-css-order - _GitHub - Siilwyn/prettier-plugin-css-order: Prettier plugin to sort CSS declarations in a certain order._ 「CSS 声明排序」

![GitHub last commit](https://img.shields.io/github/last-commit/Siilwyn/prettier-plugin-css-order?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/Siilwyn/prettier-plugin-css-order?style=social)

### HTML 属性排序

https://github.com/niklaspor/prettier-plugin-organize-attributes - _GitHub - NiklasPor/prettier-plugin-organize-attributes: Organize your HTML attributes automatically with Prettier 🧼_ 「HTML 属性排序」

![GitHub last commit](https://img.shields.io/github/last-commit/niklaspor/prettier-plugin-organize-attributes?logo=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/niklaspor/prettier-plugin-organize-attributes?style=social)

## 常见问题解答

暂无

## 参考

暂无
