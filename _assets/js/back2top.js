
document.addEventListener('DOMContentLoaded', () => {
    var THRESHOLD = 0;
    // For init back to top in sidebar if page was scrolled after page refresh.
    window.addEventListener('scroll', () => {
      var btn = document.querySelector('button.back-to-top-progress');
      var calcScrollPercent = function (btn) {
        if (btn) {
        var docHeight = document.querySelector('.markdown-section').offsetHeight + THRESHOLD;
        var winHeight = window.innerHeight;
        var contentVisibilityHeight = docHeight > winHeight ? docHeight - winHeight : document.body.scrollHeight - winHeight;
        
        // var contentVisibilityHeight = NaN; // 测试
        var scrollPercent = Math.min(100 * window.scrollY / contentVisibilityHeight, 100);
        if (Number.isNaN(scrollPercent)) {
          // console.error("backToBottom 出现 NaN 问题：", Number.isNaN(scrollPercent));
          // 防止出现 NaN
          scrollPercent = 0;
          
        }
        // console.log(docHeight, winHeight, window.scrollY)
        document.querySelector('button.back-to-top-progress').innerText = Math.round(scrollPercent) + '%';
      }
      }
      calcScrollPercent(btn);
    });
    
    var backToTop = document.querySelector('button.back-to-top');
    
    backToTop && backToTop.addEventListener('click', () => {
      window.anime({
        targets  : document.scrollingElement,
        duration : 500,
        easing   : 'linear',
        scrollTop: 0
      });
    });

    var backToBottom = document.querySelector('button#back2bottom');
    
    backToBottom && backToBottom.addEventListener('click', () => {
      window.anime({
        targets  : document.scrollingElement,
        duration : 500,
        easing   : 'linear',
        scrollTop: 200000
      });
    });
});
