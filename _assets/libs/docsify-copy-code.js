/*!
 * docsify-copy-code
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
        ".docsify-copy-code-button,.docsify-copy-code-button span{cursor:pointer;transition:all .25s ease}.docsify-copy-code-button{position:absolute;z-index:1;top:0;right:0;overflow:visible;padding:.65em .8em;border:0;border-radius:0;outline:0;font-size:1em;background:grey;background:var(--theme-color,grey);color:#fff;opacity:0}.docsify-copy-code-button span{border-radius:3px;background:inherit;pointer-events:none}.docsify-copy-code-button .error,.docsify-copy-code-button .success{position:absolute;z-index:-100;top:50%;right:0;padding:.5em .65em;font-size:.825em;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.docsify-copy-code-button.error .error,.docsify-copy-code-button.success .success{right:100%;opacity:1;-webkit-transform:translate(-115%,-50%);transform:translate(-115%,-50%)}.docsify-copy-code-button:focus,pre:hover .docsify-copy-code-button{opacity:1}"
    ), 

    document.querySelector('link[href*="docsify-copy-code"]') && console.warn(
        "[Deprecation] Link to external docsify-copy-code stylesheet is no longer necessary."), window.DocsifyCopyCodePlugin = {
        init: function () {
            return function (o, e) {
                o.ready(function () {
                    console.warn(
                        "[Deprecation] Manually initializing docsify-copy-code using window.DocsifyCopyCodePlugin.init() is no longer necessary."
                    )
                })
            }
        }
    }, 

    window.$docsify = window.$docsify || {}, 

    window.$docsify.plugins = [
    function (o, r) {
        o.doneEach(function () {
            var o = Array.apply(null, document.querySelectorAll("pre[data-lang]")),
                c = {
                    // buttonText: "Copy to clipboard",
                    buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" fill="currentColor"/></svg>',
                    errorText: "Error",
                    successText: "Copied"
                };
            // console.log(r);
            r.config.copyCode && Object.keys(c).forEach(function (t) {
                var n = r.config.copyCode[t];
                "string" == typeof n ? c[t] = n : "object" === s(n) && Object.keys(n).some(
                    function (o) {
                        var e = -1 < location.href.indexOf(o);
                        return c[t] = e ? n[o] : c[t], e
                    })
            });
            var e = ['<button class="docsify-copy-code-button">', '<span class="label">'.concat(c.buttonText,
                    "</span>"), '<span class="error">'.concat(c.errorText, "</span>"),
                '<span class="success">'.concat(c.successText, "</span>"), "</button>"].join("");
                // console.log(e);
            o.forEach(function (o) {
                o.insertAdjacentHTML("beforeend", e)
            })
        }), 

        o.mounted(function () {
            document.querySelector(".content").addEventListener("click", function (o) {
              
              function findParentEle(ele) {
                try {
                  if ("CODE" === ele.tagName) {
                    return ele;
                  } else {
                    // console.log(ele.parentNode)
                    findParentEle(ele.parentNode);
                  }
                } catch (error) {
                  // console.error("docsify-copy-code: ".concat(error));
                  // return "";
                }
              }
              var e = findParentEle(o.target);
              if (typeof e !== "undefined" && e !== null) {
                // 按钮组没有折行按钮改变复制按钮样式
                var ep = e.parentNode,
                    eBtn = ep.querySelector(".docsify-code-text-wrap-button"),
                    eBtn2 = ep.querySelector(".docsify-copy-code-button");
                    
                if (typeof eBtn !== "undefined" && eBtn !== null) {
                  eBtn2.style.borderBottomLeftRadius = "0";
                } else {
                  eBtn2.style.borderBottomLeftRadius = "3px";
                } // -end
              }
                if (o.target.classList.contains("docsify-copy-code-button")) {
                    var e = "BUTTON" === o.target.tagName ? o.target : o.target.parentNode,
                        t = document.createRange(),
                        n = e.parentNode.querySelector("code"),
                        c = window.getSelection();

                        // console.log(e,t,n,c);

                    t.selectNode(n), c.removeAllRanges(), c.addRange(t);
                    try {
                      
                      if (window.getComputedStyle(e, null).opacity == 1) {
                        
                        document.execCommand("copy") && (e.classList.add("success"), 

                        setTimeout(
                            function () {
                                e.classList.remove("success")
                            }, 1e3))
                            
                      }

                    } catch (o) {
                        console.error("docsify-copy-code: ".concat(o)), 

                        e.classList.add("error"),

                            setTimeout(function () {
                                e.classList.remove("error")
                            }, 1e3)
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