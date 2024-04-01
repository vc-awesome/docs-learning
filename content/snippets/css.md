# CSS

## 代码块换行

```css
/* 代码块换行 */
pre > code {
  white-space: pre-wrap!important; /* 保留空白符序列，但是正常地进行换行。 */
  overflow-wrap: anywhere!important;
  word-break: break-all!important; /* 允许在单词内换行。 */
}
```
