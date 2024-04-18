! function (o, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define &&
        define.amd ? define([], n) : "object" == typeof exports ? exports.DocsifyPluginToc = n() : o.DocsifyPluginToc =
        n()
}(this, (() => (() => {
    "use strict";
    var o = {};

    function n(o, n) {
        let e = ['<div class="page_toc"><div class="mb-2 text-bold lv2">On This Page</div>'];
        const t = [];
        return (o = document.querySelectorAll(`#main ${window.$docsify.toc.target}`)) && o.forEach((
            function (o) {
                const n = function (o, n) {
                    if (o >= 1 && o <= window.$docsify.toc.tocMaxLevel) {
                        // 自定义内容 - start
                        /**
                         * TOC 添加“代码缩进参考线”
                         * PhpStorm 中如何设置并查看效果：1. phpstorm 菜单栏 -> preferences...（设置）； 2. 编辑器 -> 常规 -> 外观：勾选选项“显示缩进参考线”
                         * @url https://blog.csdn.net/weixin_41981080/article/details/82659022 - PhpStorm代码编辑区竖线的用途
                         * @url https://www.cnblogs.com/zqifa/p/12651446.html - phpstorm 代码编辑区去掉、设置灰色竖线 打印分割线设置
                         */
                        // console.log(n)
                        if (o == 2) {
                            // n = n.replace(/<span>/g,"<span class='line2'>");
                            // n = n.replace(/<\/span>/g,"</span>"); // Bug：使用此方式点击链接无操作，推荐使用下一行代码

                            n += "<span class='line2'></span>";
                        } else if (o == 3) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'>");
                            // n = n.replace(/<\/span>/g,"</span></span>");

                            n += "<span class='line2'><span class='line3'></span></span>";
                        } else if (o == 4) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'><span class='line4'>");
                            // n = n.replace(/<\/span>/g,"</span></span></span>");

                            n += "<span class='line2'><span class='line3'><span class='line4'><span><span><span>";
                        } else if (o == 5) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'><span class='line4'><span class='line5'>");
                            // n = n.replace(/<\/span>/g,"</span></span></span></span>");

                            n += "<span class='line2'><span class='line3'><span class='line4'><span class='line5'><span><span><span><span>";
                        } else if (o == 6) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'><span class='line4'><span class='line5'><span class='line6'>");
                            // n = n.replace(/<\/span>/g,"</span></span></span></span></span>");

                            n += "<span class='line2'><span class='line3'><span class='line4'><span class='line5'><span class='line6'><span><span><span><span><span>";
                        }
                        // 自定义内容 - end
                        return ['<div class="lv' + o + '">', n, "</div>"].join("")
                    }
                    return ""
                }(o.tagName.replace(/h/gi, ""), o.innerHTML);
                n && t.push(n)
            })), t.length > 0 ? (e = e.concat(t), e.push("</div>"), e.join("")) : ""
    }
    /*const e1 = () => {
        const o = window.innerHeight,
            n = document.querySelectorAll(`#main ${window.$docsify.toc.target}`);
        let e = [];
        n.forEach(((n, t) => {
            const i = n.getBoundingClientRect();
            i.top <= o && i.height + i.top > 0 && e.push(t)
        }));
        const t = document.scrollingElement || document.body;
        if (0 === t.scrollTop ? e = [0] : t.offsetHeight - window.innerHeight - t.scrollTop < 5 && e.length >
            0 && (e = [e[0]]), e.length) {
            document.querySelectorAll(".page_toc>div").forEach(((o, n) => {
                n === e[0] ? o.classList.add("active") : o.classList.remove("active")
            }))
        }
    };*/
    // scroll listener
    const e = () => {
      const clientHeight = window.innerHeight
      const titleBlocks = document.querySelectorAll(`#main ${window.$docsify.toc.target}`)
      const tocnav = document.querySelector(".toc-nav");
      var active = tocnav.querySelector('div.active');
      // console.log(titleBlocks, clientHeight, active);
      let insightBlocks = []
      titleBlocks.forEach((titleBlock, index) => {
        const rect = titleBlock.getBoundingClientRect()
        // still in sight
        if (rect.top <= clientHeight && rect.height + rect.top > 0) {
          insightBlocks.push(index)
        }
      })
      const scrollingElement = document.scrollingElement || document.body
      // scroll to top, choose the first one
      if (scrollingElement.scrollTop === 0) {
        insightBlocks = [0]
      } else if (scrollingElement.offsetHeight - window.innerHeight - scrollingElement.scrollTop < 5 &&
        insightBlocks.length > 0) {
        // scroll to bottom and still multi title in sight, choose the first one
        insightBlocks = [insightBlocks[0]]
      }
      if (insightBlocks.length) {
        const tocList = document.querySelectorAll('.page_toc>div')
        tocList.forEach((t, index) => {
          if (index === insightBlocks[0]) {
            t.classList.add('active')
            active = t;
          } else {
            t.classList.remove('active')
          }
        })
      }
      if (!active) {
        return;
      }
      var height = tocnav.clientHeight - 100;
      var curOffset = 0;
      var cur = active.offsetTop + active.clientHeight;
      var isInView =
          active.offsetTop >= tocnav.scrollTop && cur <= tocnav.scrollTop + height;
      var notThan = cur - curOffset < height;


      // console.log("active:", "offsetTop:" + active.offsetTop, "clientHeight:" + active.clientHeight, cur);

      // console.log("tocnav:", "scrollTop:" + tocnav.scrollTop, "clientHeight:" + tocnav.clientHeight, tocnav.scrollTop + height);

      // console.log("isInView:", isInView)

      var valueOld = isInView ?
          tocnav.scrollTop :
          notThan ?
          curOffset :
          cur - height;
      var value = 0;
      // if (cur >= tocnav.scrollTop + height) {
        // value = tocnav.scrollHeight - tocnav.clientHeight;
      // } else {
        // value = valueOld;
      // }
      value = valueOld
      // console.log(tocnav.scrollHeight)
      tocnav.scrollTop = value;
    };
    return window.$docsify || (window.$docsify = {}), window.$docsify.plugins = (window.$docsify.plugins ||
        []).concat((function (o, t) {
        o.mounted((function () {
            const o = window.Docsify.dom.find(".content");
            if (o) {
                const n = window.Docsify.dom.create("aside", "");
                window.Docsify.dom.toggleClass(n, "add", "toc-nav"), window.Docsify
                    .dom.before(o, n)
            }
        })), o.doneEach((function () {
            const o = window.Docsify.dom.find(".toc-nav");
            o && (o.innerHTML = n().trim(), "" === o.innerHTML ? (window.Docsify.dom
                .toggleClass(o, "add", "nothing"), window.document.removeEventListener(
                    "scroll", e)) : (window.Docsify.dom.toggleClass(o,
                "remove", "nothing"), e(), window.document.addEventListener(
                "scroll", e)))
        }))
    })), o = o.default
})()));


/*! function (o, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define &&
        define.amd ? define([], n) : "object" == typeof exports ? exports.DocsifyPluginToc = n() : o.DocsifyPluginToc =
        n()
}(this, (() => (() => {
    "use strict";
    var o = {};

    function n(o, n) {
        let e = ['<div class="page_toc">'];
        const t = [];
        return (o = document.querySelectorAll(`#main ${window.$docsify.toc.target}`)) && o.forEach((
            function (o) {
                const n = function (o, n) {
                    if (o >= 1 && o <= window.$docsify.toc.tocMaxLevel) {
                        // 自定义内容 - start
                        //
                        // TOC 添加“代码缩进参考线”
                        // PhpStorm 中如何设置并查看效果：1. phpstorm 菜单栏 -> preferences...（设置）； 2. 编辑器 -> 常规 -> 外观：勾选选项“显示缩进参考线”
                        // @url https://blog.csdn.net/weixin_41981080/article/details/82659022 - PhpStorm代码编辑区竖线的用途
                        // @url https://www.cnblogs.com/zqifa/p/12651446.html - phpstorm 代码编辑区去掉、设置灰色竖线 打印分割线设置

                        // console.log(n)
                        if (o == 2) {
                            // n = n.replace(/<span>/g,"<span class='line2'>");
                            // n = n.replace(/<\/span>/g,"</span>"); // Bug：使用此方式点击链接无操作，推荐使用下一行代码

                            n += "<span class='line2'></span>";
                        } else if (o == 3) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'>");
                            // n = n.replace(/<\/span>/g,"</span></span>");

                            n += "<span class='line2'><span class='line3'></span></span>";
                        } else if (o == 4) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'><span class='line4'>");
                            // n = n.replace(/<\/span>/g,"</span></span></span>");

                            n += "<span class='line2'><span class='line3'><span class='line4'><span><span><span>";
                        } else if (o == 5) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'><span class='line4'><span class='line5'>");
                            // n = n.replace(/<\/span>/g,"</span></span></span></span>");

                            n += "<span class='line2'><span class='line3'><span class='line4'><span class='line5'><span><span><span><span>";
                        } else if (o == 6) {
                            // n = n.replace(/<span>/g,"<span class='line2'><span class='line3'><span class='line4'><span class='line5'><span class='line6'>");
                            // n = n.replace(/<\/span>/g,"</span></span></span></span></span>");

                            n += "<span class='line2'><span class='line3'><span class='line4'><span class='line5'><span class='line6'><span><span><span><span><span>";
                        }
                        // 自定义内容 - end
                        return ['<div class="lv' + o + '">', n, "</div>"].join("")
                    }
                    return ""
                }(o.tagName.replace(/h/gi, ""), o.innerHTML);
                n && t.push(n)
            })), t.length > 0 ? (e = e.concat(t), e.push("</div>"), e.join("")) : ""
    }
    const e = () => {
        const o = window.innerHeight,
            n = document.querySelectorAll(`#main ${window.$docsify.toc.target}`);
        let e = [];
        n.forEach(((n, t) => {
            const i = n.getBoundingClientRect();
            i.top <= o && i.height + i.top > 0 && e.push(t)
        }));
        const t = document.scrollingElement || document.body;
        if (0 === t.scrollTop ? e = [0] : t.offsetHeight - window.innerHeight - t.scrollTop < 5 && e.length >
            0 && (e = [e[0]]), e.length) {
            document.querySelectorAll(".page_toc>div").forEach(((o, n) => {
                n === e[0] ? o.classList.add("active") : o.classList.remove("active")
            }))
        }
    };
    // scroll listener
    var hoverOver = false;
    var nav = {};
    const scrollHandler = () => {
      const clientHeight = window.innerHeight
      const titleBlocks = document.querySelectorAll(`#main ${window.$docsify.toc.target}`)
      let insightBlocks = []
      titleBlocks.forEach((titleBlock, index) => {
        const rect = titleBlock.getBoundingClientRect()
        // still in sight
        if (rect.top <= clientHeight && rect.height + rect.top > 0) {
          insightBlocks.push(index)
        }
      })
      const scrollingElement = document.scrollingElement || document.body
      // scroll to top, choose the first one
      if (scrollingElement.scrollTop === 0) {
        insightBlocks = [0]
      } else if (scrollingElement.offsetHeight - window.innerHeight - scrollingElement.scrollTop < 5 &&
        insightBlocks.length > 0) {
        // scroll to bottom and still multi title in sight, choose the first one
        insightBlocks = [insightBlocks[0]]
      }
      if (insightBlocks.length) {
        const tocList = document.querySelectorAll('.page_toc>div')
        tocList.forEach((t, index) => {
          if (index === insightBlocks[0]) {
            t.classList.add('active')
          } else {
            t.classList.remove('active')
          }
        })
      }

      var coverHeight = 0;
      var anchors = window.Docsify.dom.findAll('.anchor');
      var tocnav = window.Docsify.dom.getNode('.toc-nav');
      var wrap = tocnav;
      var active = window.Docsify.dom.find(tocnav, 'div.active');
      var doc = document.documentElement;
      var top = ((doc && doc.scrollTop) || document.body.scrollTop) - coverHeight;
      var last;

      // console.log(top);

      for (var i = 0, len = anchors.length; i < len; i += 1) {
          var node = anchors[i];

          if (node.offsetTop > top) {
              if (!last) {
                  last = node;
              }

              break;
          } else {
              last = node;
          }
      }

      if (!last) {
          return;
      }
      var nav = {};
      const tocList = document.querySelectorAll('.page_toc>div');
      tocList.forEach((t, index) => {
        nav[decodeURIComponent(t.firstElementChild.getAttribute("href"))] = t;
      })

      var li = nav[decodeURIComponent(last.getAttribute("href"))];
      if (!li || li === active || hoverOver) {
          return;
      }

      active && active.classList.remove('active');
      li.classList.add('active');
      active = li;


      // Scroll into view
      // https://github.com/vuejs/vuejs.org/blob/master/themes/vue/source/js/common.js#L282-L297
      // console.log(hoverOver);
      if (!hoverOver && document.body.classList.contains('sticky')) {
          var height = tocnav.clientHeight;
          var curOffset = 0;
          var cur = active.offsetTop + active.clientHeight + 40;
          var isInView =
              active.offsetTop >= wrap.scrollTop && cur <= wrap.scrollTop + height;
          var notThan = cur - curOffset < height;

          var value = isInView ?
              wrap.scrollTop :
              notThan ?
              curOffset :
              cur - height;
          tocnav.scrollTop = value;
      }
    }
    return window.$docsify || (window.$docsify = {}), window.$docsify.plugins = (window.$docsify.plugins ||
        []).concat((function (o, t) {
        o.mounted((function () {
            const o = window.Docsify.dom.find(".content");
            if (o) {
                const n = window.Docsify.dom.create("aside", "");
                window.Docsify.dom.toggleClass(n, "add", "toc-nav"), window.Docsify
                    .dom.before(o, n)
            }
        })), o.doneEach((function () {

            const tocnav = window.Docsify.dom.find('.toc-nav')
            if (tocnav) {
              tocnav.innerHTML = n().trim()
              if (nav.innerHTML === '') {
                window.Docsify.dom.toggleClass(tocnav, 'add', 'nothing')
                window.removeEventListene('scroll', function () {
                  return scrollHandler();
                });
              } else {
                window.Docsify.dom.toggleClass(tocnav, 'remove', 'nothing')
                scrollHandler()
                window.addEventListener('scroll', function () {
                  return scrollHandler();
                });
                !!window.Docsify.dom.getNode(".page_toc") && window.Docsify.dom.getNode(".page_toc").addEventListener("click", function(e) {
                  // 兼容性处理
                  var event = e || window.event;
                  var target = event.target || event.srcElement;
                  // 判断是否匹配目标元素
                  //   if (e.target.matches("ul>li")) {
                  var tocnav = window.Docsify.dom.getNode('.toc-nav');
                  var active = window.Docsify.dom.find(tocnav, 'div.active');
                  if (e.target.nodeName == "SPAN") {
                    active.classList.remove("active");
                    e.target.parentNode.parentNode.classList.toggle("active");
                    // document.querySelectorAll(".page_toc>div").classList.remove("active");
                    console.log(decodeURIComponent(location.href))
                }
                if (e.target.className=="anchor") {
                  active.classList.remove("active");
                  e.target.parentNode.parentNode.classList.toggle("active");
                  console.error(e.target.href);
                //if (e.target.matches("ul>li")) {
                //     if (e.target.nodeName=="LI") {
            }

        })
      }

      const tocList = document.querySelectorAll('.page_toc>div');
      tocList.forEach((t, index) => {
        nav[decodeURIComponent(t.firstElementChild.getAttribute("href"))] = t;
      })

      !!nav[decodeURIComponent(location.hash)] && nav[decodeURIComponent(location.hash)].classList.add("active");

      window.Docsify.dom.getNode('.sidebar').addEventListener('mouseover', function () {
          // hoverOver = true;
      });
      window.Docsify.dom.getNode('.sidebar').addEventListener('mouseleave', function () {
          // hoverOver = false;
      });
    }
        }))
    })), o = o.default
})()));*/
