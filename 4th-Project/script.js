function showAlert() {
  document.getElementById("customAlert").style.display = "block";
}
function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
showAlert()
const count = document.querySelector('.counter');
const loading = document.querySelector('.loading-bar-front');

let i = 0;
updateCounter();

function updateCounter(){
    count.innerText = i + "%";
    loading.style.width = i + "%"; 
    i++;
    if(i <= 100){
        setTimeout(updateCounter ,20)
    }
}


