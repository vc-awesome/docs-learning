! function (o, n) {
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
                        /**
                         * TOC 添加“代码缩进参考线”
                         * phpstorm 中如何设置并查看效果：1. phpstorm 菜单栏 -> preferences...（设置）； 2. 编辑器 -> 常规 -> 外观：勾选选项“显示缩进参考线”
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