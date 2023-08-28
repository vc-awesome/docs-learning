/*!
 * docsify-backTop
 * v2.1.1
 * Forked from https://github.com/Sumsung524/docsify-backTop
 */
var docsifyBackTop = new Object();
// DOM内容加载完成后执行
window.addEventListener('DOMContentLoaded', function () {

    // 4. 封装函数docsifyBackTopFn()
    // 4.1 调用函数
    docsifyBackTopFn(docsifyBackTop);
    // 4.2 封装函数
    function docsifyBackTopFn({ logo = '<svg t="1662288563130" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3633" width="200" height="200"><path d="m557.34947,153.68505c-347.1,-98 -359.4,327.3 -446.4,353.4s183.3,409.5 409.4,409.5s409.4,-183.3 409.4,-409.4s-922.4,-513.2 -372.4,-353.5zm116.5,308.7c-5.2,5.3 -12.1,7.9 -19,7.9s-13.8,-2.6 -19,-7.9l-83.4,-83.4c0,0.4 0.1,0.7 0.1,1.1l0,318.9c0,11.1 -5.7,20.9 -14.4,26.6c-4.7,4.2 -28.9,54.7 -17.7,6.7c11.2,-48 -13,-2.5 -17.7,-6.7c-8.7,-5.7 -14.4,-15.5 -14.4,-26.6l0,-318.9c0,-0.4 0,-0.7 0.1,-1.1l-83.4,83.4c-10.5,10.5 -27.5,10.5 -38,0s-10.5,-27.5 0,-38l134.3,-134.5c10.5,-10.5 27.5,-10.5 38,0l134.5,134.5c10.5,10.4 10.5,27.5 0,38z" fill="var(--theme-color, #42b983)" p-id="3634"></path></svg>', bottom = 10, right = 10, size = 32, bgColor = '' }) {

        // 1. 创建元素
        // 1.1 获取body元素
        var body = document.body;
        // 1.2 创建回到顶部组件div
        var div = document.createElement('div');
        div.className = 'backTop';
        div.innerHTML = logo;
        body.appendChild(div);
        // 1.3 回到顶部CSS
        div.style.opacity = 0;
        div.style.position = 'fixed';
        div.style.bottom = bottom + 'px';
        div.style.right = right + 'px';
        div.style.width = size + 'px';
        div.style.height = div.style.width;
        div.style.textAlign = 'center';
        div.style.lineHeight = div.style.width;
        div.style.backgroundColor = bgColor;
        div.style.borderRadius = '50%';
        div.style.cursor = 'pointer';
        div.style.transition = 'opacity 0.5s';

        // 1.4 svg CSS 如果存在则设置宽高
        if (div.children.length) {
            div.children[0].style.width = '100%';
            div.children[0].style.height = '100%';
        }

        // 2.点击回到顶部
        div.addEventListener('click', function () {
            backToTopAnimate(window, 0);
        });
        // 2.1 回到顶部缓动函数封装
        function backToTopAnimate(obj, target, callback) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var step = (target - obj.scrollY) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.scrollY == target) {
                    clearInterval(obj.timer);
                    callback && callback();
                }
                window.scroll(0, obj.scrollY + step);
            }, 15);
        }

        // 3.显示与隐藏
        window.addEventListener('scroll', function () {
            div.style.opacity = window.scrollY > 0 ? 1 : 0;
        });

    }
});