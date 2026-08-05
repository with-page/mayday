// 1. 작업표시줄 시계 업데이트
function updateDesktopClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    document.getElementById('desktopClock').textContent = `${hours}:${minutes}`;
}

setInterval(updateDesktopClock, 1000);
updateDesktopClock();

// 2. 컴퓨터 잠금 해제 (문 따고 들어가기)
const loginScreen = document.getElementById('loginScreen');
const unlockBtn = document.getElementById('unlockBtn');

unlockBtn.addEventListener('click', () => {
    loginScreen.classList.add('unlocked');
});

// 3. 바탕화면 아이콘 클릭 시 창 열기
const desktopIcons = document.querySelectorAll('.desktop-icon');
const windows = document.querySelectorAll('.window');
const closeBtns = document.querySelectorAll('.window-close');

desktopIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // 열려있는 다른 창들을 모두 먼저 닫기 (깔끔한 화면 유지를 위해)
        windows.forEach(win => win.classList.remove('open'));
        
        // 클릭한 아이콘의 창 열기
        const targetId = icon.getAttribute('data-target');
        if (targetId) {
            document.getElementById(targetId).classList.add('open');
        }
    });
});

// 4. 창 닫기 버튼
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const win = e.target.closest('.window');
        if (win) {
            win.classList.remove('open');
        }
    });
});
