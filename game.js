let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg1=document.querySelector(".msg");
let msg=document.querySelector("#m");
let msg2=document.querySelector(".msg");
let turnO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    
    turnO=true;
    count=0;
    enableBoxes();
    msg1.classList.add("hide");
}
boxes.forEach((box) =>{

    box.addEventListener("click",()=>{

        console.log("box was clicked");
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner =checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
        
    });
});
const gameDraw=()=>{
    msg.innerText="Game Draw";
    msg1.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=()=>{

    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
};

const showWinner = () => {
    msg.innerText="We got a winner";
    msg1.classList.remove("hide");
    disableBoxes();
};


const checkWinner =()=>{
    for(let pattern of winPatterns){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
    
      if(pos1val!="" && pos2val!="" && pos3val!=""){

        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner");
            
            showWinner();
        }
    
      }
    }
  };
  reset.addEventListener("click",resetGame);