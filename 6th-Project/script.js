const Flip = document.querySelector('.flip');

Flip.addEventListener('click',()=>{
const winner = checkWinner();
showAlert(winner);
})

function checkWinner(){
    const options = ['Head' , 'Tail']
    const winner = options[Math.floor(Math.random() * 2)];
    console.log(winner);
    return winner;
}

function showAlert(winner) {
     document.getElementById("customAlert").style.display = "block";
     document.getElementById("alertText").innerText = `🎉 ${winner} wins the game!`;
}

    function closeAlert() {
        document.getElementById("customAlert").style.display = "none"
    }
    const count = document.querySelector('.counter');
    const loading = document.querySelector('.loading-bar-front');