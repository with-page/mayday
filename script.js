// 1. 실시간 시계 업데이트
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // 한 자리 수일 경우 앞에 0을 붙여 00:00 형식 유지
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000); // 1초마다 시간 갱신
updateClock(); // 페이지 로드 시 즉시 실행

// 2. 어플 클릭 및 닫기 상호작용
const apps = document.querySelectorAll('.app');
const appModal = document.getElementById('appModal');
const closeBtn = document.getElementById('closeBtn');
const appTitle = document.getElementById('appTitle');
const appContent = document.getElementById('appContent');

// 각 어플에 클릭 이벤트 부여
apps.forEach(app => {
    app.addEventListener('click', () => {
        // HTML의 data 속성에서 제목과 내용을 가져옴
        const title = app.getAttribute('data-title');
        const content = app.getAttribute('data-content');
        
        // 팝업 화면에 내용 삽입
        appTitle.textContent = title;
        appContent.innerHTML = content;
        
        // 화면을 위로 슬라이드
        appModal.classList.add('open');
    });
});

// 뒤로가기 버튼 클릭 시 팝업 닫기
closeBtn.addEventListener('click', () => {
    appModal.classList.remove('open');
});
