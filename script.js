function updateClock(){


const now = new Date();


let hour = now.getHours();

let minute = now.getMinutes();


minute =
minute < 10
? "0"+minute
: minute;



const time =
`${hour}:${minute}`;



document.getElementById("time")
.innerHTML=time;


document.getElementById("homeTime")
.innerHTML=time;



document.getElementById("date")
.innerHTML =
now.toLocaleDateString(
"en-US",
{
weekday:"long",
month:"long",
day:"numeric"
}
);


}



updateClock();

setInterval(updateClock,1000);






document
.getElementById("lockScreen")
.addEventListener(
"click",
()=>{


document
.querySelector(".faceID p")
.innerHTML=
"Scanning...";


setTimeout(()=>{


document
.getElementById("lockScreen")
.style.display="none";


document
.getElementById("homeScreen")
.style.display="block";


},900);


});
