let scroll = document.querySelector(".gallery");
let backBtn = document.querySelector('.back-btn');
let nextBtn = document.querySelector('.next-btn');

scroll.addEventListener('wheel',(e)=>{
    e.preventDefault();
    scroll.style.scrollBehavior = "auto";
    scroll.scrollLeft += e.deltaY;
})
nextBtn.addEventListener('click',()=>{
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft+=900;
})
backBtn.addEventListener('click',()=>{
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft-=900;
})