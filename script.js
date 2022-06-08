console.log("welcome to tic tac toe");
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")

let turn="X"

const changeTurn=()=>{

    return turn == "X"?"0":"X"
}

//check for win
const checkwin=()=>{

}



//game logic
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=document.querySelector('.boxtext')
    element.addEventListener('click',(e)=>{
        if(boxes.innerText===''){
            boxes.innerText=turn;
            changeTurn();
            audioturn.play();
            checkwin();
            document.getElementsByClassName(turn)[0].innerText="Turn for"+turn;
        }
    })
})