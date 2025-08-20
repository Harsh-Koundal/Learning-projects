const previous = document.querySelector('.previous');
const playBtn = document.querySelector('.play');
const next = document.querySelector('.next');
const circle = document.querySelector('.circle');
const song = document.querySelector('#songs');
const lineBar = document.querySelector('.line-bar')


let isPlaying = false;
function playMusic(){
    playBtn.addEventListener('click',()=>{
       song.play();
     
       if(!isPlaying){
           playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
           isPlaying = true;
       }else{
           song.pause();
           isPlaying = false;
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
       }
    });

    song.addEventListener('timeupdate',()=>{
        const duration = song.duration;
        const currentTime = song.currentTime;
        if(!isNaN(duration)){
            const progressPercent = (currentTime / duration)* 100;
            circle.style.left = `${progressPercent}%`; 
        } 
    });

    lineBar.addEventListener('click',(e)=>{
        const barWidth = lineBar.clientWidth;
        const clickx = e.offsetX;
        const duration = song.duration;
        if(!isNaN(duration)){
            const newTime = (clickx /barWidth)* duration;
            song.currentTime = newTime;
        }
    });
    song.addEventListener('ended', () => {
    isPlaying = false;
    circle.style.left = '0%';
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
});

}
playMusic();


