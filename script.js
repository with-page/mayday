// 1. 실시간 시계 업데이트 (기존과 동일)
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

// 2. 어플 클릭 및 닫기 상호작용 (다중 화면 지원으로 변경)
const apps = document.querySelectorAll('.app');
const closeBtns = document.querySelectorAll('.close-btn');

// 각 어플에 클릭 이벤트 부여
apps.forEach(app => {
    app.addEventListener('click', () => {
        // data-target 속성값을 가져옴 (예: 'app-gallery')
        const targetId = app.getAttribute('data-target');
        
        if (targetId) {
            // 해당 ID를 가진 화면에 'open' 클래스 추가
            document.getElementById(targetId).classList.add('open');
        }
    });
});

// 모든 뒤로가기 버튼에 클릭 이벤트 부여
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 클릭된 버튼을 감싸고 있는 가장 가까운 .app-screen을 찾아서 닫음
        const appScreen = e.target.closest('.app-screen');
        if (appScreen) {
            appScreen.classList.remove('open');
        }
    });
});
