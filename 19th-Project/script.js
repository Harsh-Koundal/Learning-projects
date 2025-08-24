const input = document.getElementById('input');
let qr = document.getElementById('qr');
const convert = document.getElementById('convert');

const generateQr = ()=>{
    convert.addEventListener('click',()=>{
        qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ' + input.value;
        qr.style.display = 'block'
    })
}
generateQr();