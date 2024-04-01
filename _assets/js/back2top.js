document.addEventListener('DOMContentLoaded', () => {
  const THRESHOLD = 0;

  // For init back to top in sidebar if page was scrolled after page refresh.
  window.addEventListener('scroll', () => {
    const btnProgress = document.querySelector('button.back-to-top-progress');
    const calcScrollPercent = (btn) => {
      if (btn) {
        const docHeight = document.querySelector('.markdown-section').offsetHeight + THRESHOLD;
        const winHeight = window.innerHeight;
        const contentVisibilityHeight = docHeight > winHeight
          ? docHeight - winHeight
          : document.body.scrollHeight - winHeight;

        // var contentVisibilityHeight = NaN; // 测试
        let scrollPercent = Math.min((100 * window.scrollY) / contentVisibilityHeight, 100);
        if (Number.isNaN(scrollPercent)) {
          // console.error("backToBottom 出现 NaN 问题：", Number.isNaN(scrollPercent));
          // 防止出现 NaN
          scrollPercent = 0;
        }
        // console.log(`docHeight: ${docHeight}`);
        // console.log(`winHeight: ${winHeight}`);
        // console.log(`window.scrollY: ${window.scrollY}`);
        // console.log(contentVisibilityHeight, document.body.scrollHeight);
        document.querySelector('button.back-to-top-progress').innerText = `${Math.round(scrollPercent)}%`;
      }
    };
    calcScrollPercent(btnProgress);
  });

  document.querySelector('button.back-to-top').addEventListener('click', () => {
    window.anime({
      targets: document.scrollingElement,
      duration: 500,
      easing: 'linear',
      scrollTop: 0,
    });
  });

  document.querySelector('button#back2bottom').addEventListener('click', () => {
    window.anime({
      targets: document.scrollingElement,
      duration: 500,
      easing: 'linear',
      scrollTop: document.body.scrollHeight,
    });
  });
});
