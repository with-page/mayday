// 1. 상단 메뉴바 시계 업데이트 (미국 AM/PM 포맷)
function updateMacClock() {
    const now = new Date();
    
    // 요일 설정 (영문)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[now.getDay()];
    
    // 시간 및 AM/PM 설정
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시는 12시로 표시
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = `${day} ${hours}:${minutes} ${ampm}`;
    document.getElementById('mac-clock').textContent = timeString;
}

setInterval(updateMacClock, 1000);
updateMacClock();

// 2. 잠금 해제 (문 따고 들어가기)
const lockScreen = document.getElementById('mac-lock-screen');
const unlockBtn = document.getElementById('unlock-btn');

unlockBtn.addEventListener('click', () => {
    lockScreen.style.opacity = '0';
    lockScreen.style.visibility = 'hidden';
});

// 3. 바탕화면 아이콘 클릭 시 창 열기
const desktopIcons = document.querySelectorAll('.icon');
const windows = document.querySelectorAll('.mac-window');
const closeBtns = document.querySelectorAll('.close-btn');

desktopIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // 기존 열린 창을 닫아 깔끔하게 유지
        windows.forEach(win => win.classList.remove('open'));
        
        // 클릭한 대상의 창 열기
        const targetId = icon.getAttribute('data-target');
        if (targetId) {
            document.getElementById(targetId).classList.add('open');
        }
    });
});

// 4. 창 닫기 버튼 (빨간 신호등 버튼)
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const win = e.target.closest('.mac-window');
        if (win) {
            win.classList.remove('open');
        }
    });
});
