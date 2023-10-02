var x=Math.random();
var randomNumber1=(Math.round(x*6))+1;


if(randomNumber1===1){ 
     document.querySelector(".img1").setAttribute("src","./dice1.png");
  
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice1.png";
}
if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","./dice2.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice2.png";
}
if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","./dice3.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice3.png";
}
if(randomNumber1===4){
     document.querySelector(".img1").setAttribute("src","./dice4.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice4.png";
}
if(randomNumber1===5){
     document.querySelector(".img1").setAttribute("src","./dice5.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice5.png";
}
if(randomNumber1===6){
     document.querySelector(".img1").setAttribute("src","./dice6.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice6.png";
}



var y=Math.random();
var randomNumber2=(Math.round(y*6))+1;


if(randomNumber2===1){ 
     document.querySelector(".img2").setAttribute("src","./dice1.png");
  
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice1.png";
}
if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","./dice2.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice2.png";
}
if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","./dice3.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice3.png";
}
if(randomNumber2===4){
     document.querySelector(".img2").setAttribute("src","./dice4.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice4.png";
}
if(randomNumber2===5){
     document.querySelector(".img2").setAttribute("src","./dice5.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice5.png";
}
if(randomNumber2===6){
     document.querySelector(".img2").setAttribute("src","./dice6.png");
//image1="C:\Users\manoj\Desktop\WEB_DEVELOPMENT\JAVA_SCRIPT\Dicee Challenge - Starting Files\images\dice6.png";
}

if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="It's a draw";
}
else if(randomNumber1>randomNumber2){
document.querySelector("h1").textContent="Player one won";
}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").textContent="Player two won";
}