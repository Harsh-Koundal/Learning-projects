"use strict";
function background (){

    document.querySelector('.circle').addEventListener('click',()=>{
        const currentColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = currentColor === 'black' ? 'white' : 'black';
    });
    
};
background();



