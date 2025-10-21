let gameSeq=[];
let userSeq=[];
let btns=["red","green","blue","yellow"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started...");
        started=true;
        levelUp();
    }
});
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
   
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function btnPress(){
let btn=this;
let userColor=btn.id;
userFlash(btn);
userSeq.push(userColor);

checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        userSeq=[];
        levelUp();
       }
    }else{
       h2.innerHTML=`Game is over! your Score was <b>${level}</b> ,try again press any key to restart`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
       },250);
       reset();
    }
 
}
function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}