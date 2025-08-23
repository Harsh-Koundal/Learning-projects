const showHide = document.querySelector('i');
const password = document.querySelector('#pass');
const sumbit = document.querySelector('#btn');
const h1 = document.createElement('h1');
document.body.appendChild(h1);
showHide.addEventListener('click',()=>{
if (showHide.classList.contains('fa-eye-slash') && password.type === "password") {
    password.type = 'text';
    showHide.classList.remove('fa-eye-slash');
    showHide.classList.add('fa-eye');
  } else {
    password.type = 'password'
    showHide.classList.remove('fa-eye');
    showHide.classList.add('fa-eye-slash');
  }
});

sumbit.addEventListener('click',()=>{
  h1.innerText = password.value;
});