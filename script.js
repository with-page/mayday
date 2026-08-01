*{
box-sizing:border-box;
}


body{

margin:0;

height:100vh;

display:flex;

align-items:center;

justify-content:center;

background:#050509;

font-family:
-apple-system,
BlinkMacSystemFont,
"SF Pro Display",
sans-serif;

}



.iphone{

width:390px;

height:844px;

border-radius:55px;

overflow:hidden;

position:relative;


background-image:
linear-gradient(
rgba(0,0,0,.25),
rgba(0,0,0,.4)
),
url("https://images.unsplash.com/photo-1490750967868-88aa4486c946");


background-size:cover;

background-position:center;


box-shadow:
0 30px 80px rgba(0,0,0,.8);

}




.dynamic-island{

position:absolute;

z-index:10;

top:14px;

left:50%;

transform:translateX(-50%);


width:125px;

height:37px;


background:#000;

border-radius:30px;

}




#lock{

height:100%;

color:white;

text-align:center;

padding-top:120px;

}




.lock-time{

font-size:82px;

font-weight:700;

letter-spacing:-3px;

}



.lock-date{

font-size:20px;

margin-top:-10px;

}




.lock-owner{

margin-top:180px;

}



.lock-owner p{

font-size:11px;

letter-spacing:4px;

opacity:.8;

}



.lock-owner h3{

font-size:18px;

}




.face-id{

margin-top:100px;

cursor:pointer;

}



.face-circle{

font-size:42px;

animation:pulse 2s infinite;

}



.face-id span{

display:block;

font-size:13px;

}



@keyframes pulse{

50%{

opacity:.4;

}

}





#home{

display:none;

height:100%;

padding:90px 25px 30px;

color:white;

}




.status-bar{

position:absolute;

top:55px;

left:30px;

right:30px;

display:flex;

justify-content:space-between;

font-weight:600;

}




.app-grid{

display:grid;

grid-template-columns:
repeat(3,1fr);

gap:32px 25px;

}




.app{

text-align:center;

font-size:13px;

}



.icon{

width:62px;

height:62px;

margin:auto;

border-radius:15px;

display:flex;

align-items:center;

justify-content:center;

font-size:35px;

background:
rgba(255,255,255,.2);


backdrop-filter:blur(20px);


box-shadow:
inset 0 0 10px rgba(255,255,255,.3);

}




.app span{

display:block;

margin-top:7px;

}




.dock{

position:absolute;

bottom:25px;

left:20px;

right:20px;


height:85px;

border-radius:30px;


background:

rgba(255,255,255,.18);


backdrop-filter:blur(25px);


display:flex;

align-items:center;

justify-content:space-around;


font-size:35px;

}
