# Bookmarklet

https://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html - *Bookmarklet编写指南 - 阮一峰的网络日志*

`n..scrollTop`

```javascript
javascript:(function(){document.documentElement.scrollTop = 0;})();
```

`n..scrollBottom`

```javascript
javascript:(function(){document.documentElement.scrollTop = document.body.scrollHeight;})();
```
