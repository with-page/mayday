const lockScreen =
document.getElementById("lockScreen");

const homeScreen =
document.getElementById("homeScreen");



lockScreen.addEventListener(
"click",
()=>{


lockScreen.style.display="none";

homeScreen.style.display="block";


});





function openApp(app){

alert(
app + " 앱을 열었습니다."
);


}
