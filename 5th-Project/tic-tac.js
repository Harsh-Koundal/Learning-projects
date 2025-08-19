let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
 let turnO = true;
 
 const winPeterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 
 boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerText ='O';
            turnO = false;
            
        }
        else{
            box.innerText = 'x';
            turnO = true;
            
        }
        box.disabled = true;
        checkwinner();
    });
    
 });
 const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText =""
    }
}
 const showWinner = (winner) =>{
    showAlert(winner);
    disableBtn();
 }
 checkwinner = ()=>{
    let winnerFound = false;
    for(let pattern of winPeterns){
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            winnerFound = true;
            let winner = pos1Val;
            showWinner(winner);
            
        }
      }
    }
    let allFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (!winnerFound && allFilled) {
        showDraw();
    }

 };

 const resetGame = () =>{
    turnO = true;
    enableBoxes();
 }
 
 
 function showAlert(winner) {
     document.getElementById("customAlert").style.display = "block";
     document.getElementById("alertText").innerText = `🎉 ${winner} wins the game!`;
    }
    function showDraw() {
    document.getElementById("customAlert").style.display = "block";
    document.getElementById("alertText").innerText = "😐 It's a Draw!";
    disableBtn();
}

    function closeAlert() {
        document.getElementById("customAlert").style.display = "none"
        resetGame();
    }
    const count = document.querySelector('.counter');
    const loading = document.querySelector('.loading-bar-front');
    
    resetBtn.addEventListener('click', resetGame);