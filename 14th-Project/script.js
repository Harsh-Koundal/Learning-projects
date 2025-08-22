const sumbit = document.querySelector('.submit');
const close = document.querySelector('#close')
const popup = document.querySelector('.popup');


sumbit.addEventListener('click',()=>{
    popup.classList.add("open-popup");
});

close.addEventListener('click',()=>{
    popup.classList.remove("open-popup");
});