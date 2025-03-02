let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newGameBtn1 = document.querySelector("#new-btn1");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }    else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkDraw();
        checkWinner();
        
    });
});

const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
       }
}

const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const showDraw = () => {
    msg.innerText =`Sorry!, Game was Draw`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
const checkDraw = () => {
    if (count === 9 && !checkWinner()) {
        showDraw();
    }

};

newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
newGameBtn1.addEventListener("click", resetgame);
