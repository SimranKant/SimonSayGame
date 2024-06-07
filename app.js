let seq=[];
let userSeq=[];
let level=0;
let highScore=0;
let started=false;
let colors=["red","green","blue","yellow"];
//Select Random Color
function selectColor(){
    let ind=Math.floor(Math.random()*4);
    return ind;
}
//Starting Game
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelup();
    }
});
//Button Flash
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
//Level up
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level: ${level}`;
    let color=colors[selectColor()];
    let btn=document.querySelector(`.${color}`);
    seq.push(color);
    btnFlash(btn);
}
//Function for Pressing a button
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);   
}
//Check Answer entered by User
function checkAns(index){
    if(userSeq[index]===seq[index]){
        if(userSeq.length==seq.length){
            setTimeout(levelup,1000);
            
        }
    }
    else{
        High();
        h2.innerHTML=`Game Over!! <br> Your Score was ${level}<br> High Score:- ${highScore}<br>Press key to start game `;   
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        document.querySelector("body").style.backgroundColor="red";
        reset();
    }
}
//Reset The Game
function reset(){
    seq=[];
    userSeq=[];
    level=0;
    started=false;
}
//Pressing the button
let Allbtn=document.querySelectorAll(".box");
for(btn of Allbtn){
    btn.addEventListener("click",btnPress);
}
//Set High Score
function High(){
    if(level>highScore){
        highScore=level;
    }
}