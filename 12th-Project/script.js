let hourElem = document.querySelector('#hour');
let minElem = document.querySelector('#min');
let secElem = document.querySelector('#sec')

function updateTime(){
    const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  hourElem.textContent = hour < 10 ? '0' + hour : hour;
  minElem.textContent = min < 10 ? '0' + min : min;
  secElem.textContent = sec < 10 ? '0' + sec : sec;
}
updateTime()
setInterval(updateTime,1000)