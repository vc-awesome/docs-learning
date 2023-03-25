/*!
 * docsify-code-text-wrap
 * v2.1.1
 * https://github.com/jperasmus/docsify-copy-code
 * (c) 2017-2020 JP Erasmus <jperasmus11@gmail.com>
 * MIT license
 */
! function () {
    "use strict";

    function s(o) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
            return typeof o
        } : function (o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ?
                "symbol" : typeof o
        })(o)
    }

    ! function (o, e) {
        void 0 === e && (e = {});
        var t = e.insertAt;
        if (o && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
                c = document.createElement("style");
            
            c.type = "text/css", 

            "top" === t && n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c), 

            c.styleSheet ? c.styleSheet.cssText = o : c.appendChild(document.createTextNode(o))
        }
    }(
        ".docsify-code-text-wrap-button,.docsify-code-text-wrap-button span{cursor:pointer;transition:all .25s ease}.docsify-code-text-wrap-button{position:absolute;z-index:1;top:0;right:38px;overflow:visible;padding:5px;border:0;border-radius:4px;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;outline:0;font-size:1em;background:#808080;color:#fff;opacity:0}.docsify-code-text-wrap-button span{border:0;border-radius:3px;background:inherit;pointer-events:none}.docsify-code-text-wrap-button:focus,pre:hover .docsify-code-text-wrap-button{opacity:1}.docsify-code-text-wrap-on{color:var(--theme-color,#42b983);}"
    ), 

    document.querySelector('link[href*="docsify-code-text-wrap"]') && console.warn(
        "[Deprecation] Link to external docsify-code-text-wrap stylesheet is no longer necessary."), window.DocsifyCopyCodePlugin = {
        init: function () {
            return function (o, e) {
                o.ready(function () {
                    console.warn(
                        "[Deprecation] Manually initializing docsify-code-text-wrap using window.DocsifyCopyCodePlugin.init() is no longer necessary."
                    )
                })
            }
        }
    }, 

    window.$docsify = window.$docsify || {}, 

    window.$docsify.plugins = [
    function (o, r) {
      // console.log(o,r)
        o.doneEach(function () {
            var o = Array.apply(null, document.querySelectorAll("pre[data-lang]")),
                c = {
                    buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 18h1.5a2.5 2.5 0 1 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z" fill="currentColor"/></svg>',
                };
            var e = ['<button class="docsify-code-text-wrap-button">', '<span class="label">'.concat(c.buttonText,
                    "</span>"), "</button>"].join("");
                // console.log(e);
            o.forEach(function (o) {
              // JS 判断文本是否溢出
                // console.log(o);
              // 当前容器的宽度
              var containerLength = o.firstElementChild.offsetWidth;
              // 当前文字（包括省略部分）的宽度
              var textLength = o.firstElementChild.scrollWidth; 
              // console.log(o.getBoundingClientRect().x)

              // console.log("containerLength:" + containerLength);
              // console.log("textLength", textLength);
              if (textLength > containerLength) {
                // 文本溢出增加折行按钮
                o.insertAdjacentHTML("beforeend", e);
              }
              
            });
            
        }), 

        o.mounted(function () {
            document.querySelector(".content").addEventListener("click", function (o) {
                if (o.target.classList.contains("docsify-code-text-wrap-button")) {
                    var e = "BUTTON" === o.target.tagName ? o.target : o.target.parentNode,
                        t = document.createRange(),
                        n = e.parentNode.querySelector("code"),
                        c = window.getSelection();

                        // console.log(e,t,n,c);

                    t.selectNode(n), c.removeAllRanges(), c.addRange(t);
                    try {
                      
                      if (window.getComputedStyle(e, null).opacity == 1) {
                        // 判断是否存在某个 class
                        if (e.getAttribute("class").indexOf("docsify-code-text-wrap-on") != -1) {
                            // 存在
                            e.classList.remove('docsify-code-text-wrap-on'),
                            n.removeAttribute("style");
                        } else {
                            // 不存在
                            e.classList.add('docsify-code-text-wrap-on'),
                            n.style = "white-space: pre-wrap;overflow-wrap: anywhere;";
                        }
                      }

                    } catch (o) {
                        console.error("docsify-code-text-wrap: ".concat(o))
                    }

                    // console.log(typeof (c = window.getSelection()).removeRange);

                    // console.log(c.removeRange(t))

                    // console.log(typeof c.removeAllRanges)

                    // console.log(c.removeAllRanges())

                    "function" == typeof (c = window.getSelection()).removeRange ? c.removeRange(t) : "function" == typeof c.removeAllRanges && c.removeAllRanges()
                }
            })
        })
    }
    ].concat(window.$docsify.plugins || [])
}();
//# sourceMappingURL=docsify-copy-code.min.js.map