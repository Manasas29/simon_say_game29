let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;
//let highScore = 0;
//let max = [];

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
    }    
    
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");

    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");

    },250);
}


function levelUp (){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let ranIdx = Math.floor(Math.random() * 4);
    let randColor = btns[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns (idx){
    //console.log(`the current level is:${level}`);
    //let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]){
        //console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        
        h2.innerHTML = `Game Over! Your Score is :<b> ${level}<b> <br> Press any Key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);

        reset();
    }
}



function btnPress (){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
    
}

function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}


// if (btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// } else {
//     console.error("Invalid button element:", btn);
// }
