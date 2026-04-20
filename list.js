(function() {
    var secretApps = [
{img: './png/wc28.jpg', name: '旺财28', xurl: 'aHR0cHM6Ly9pemN2b2ouaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDEyJnRvcElkPTYxNjE3NzEwODAxNDAxNjc'},
{img: './png/yw28.jpg', name: '亿万28', xurl: 'aHR0cHM6Ly94anZ1ZWIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAxNyZ0b3BJZD02ODUxNzcxMDgwMzY4Nzgw'},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTMxMjc2Njkmc2VsZlBsYW5JZD0yMzk1OTAx'},
{img: './svg/wd.svg', name: '问鼎娱乐', xurl: 'aHR0cHM6Ly9vbmtyY3kuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAyMCZ0b3BJZD0zODgwMjM2OA'},
{img: './png/gjr.jpg', name: '国际人', xurl: 'aHR0cHM6Ly90ei53eGdqcjUuY2MvYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIzMDQmdG9wSWQ9MTgzODU5OA'},
{img: './png/ffyl.jpg', name: '非凡娱乐', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTU5NTE3NzYwMDIwMTExOTkmc2VsZlBsYW5JZD00ODk1OTg1'},
{img: './png/bsj.jpg', name: '保时捷', xurl: 'aHR0cHM6Ly93eC5ndGx5c2MuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMzQ1MjMyNzUmdG9wSWQ9MTY3NTAyNA'},
{img: './png/xsd.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD0yMjQ4MTA3JnNlbGZQbGFuSWQ9MTc0NTg2OQ'},
{img: './png/jlgj.jpg', name: '星耀国际', xurl: 'aHR0cHM6Ly9hbGl1YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU3JnRvcElkPTYxMzE3NzYwMDQ5ODcxODc'},
{img: './png/cfgj.jpg', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnRvcElkPTIyOTg0DQ=='},
{img: './png/dfgj.jpg', name: '巅峰国际', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTEzODA2DQ=='},
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjM5Mjkmc2VsZlBsYW5JZD0xMDQ2'}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026美加墨世界杯官方合作广告商<br>-点击关注赛事赛程-");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "xk22.my";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问xk22！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}
