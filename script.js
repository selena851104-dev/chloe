// 取得按鈕與文字顯示區
const button = document.getElementById('thankButton');
const message = document.getElementById('thankMessage');

// 綁定點擊事件
button.addEventListener('click', function() {
    message.textContent = '謝謝瀏覽我的名片！';
});
