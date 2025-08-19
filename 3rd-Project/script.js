// const buttons = document.querySelectorAll('button');
// const inputField = document.getElementById('result');

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', () =>{
//         const buttonValue = buttons[i].textContent;
//         if(buttonValue === 'C'){
//             clearResult();
//         }
//         else if (buttonValue === '='){
//             caculateResult();
//         }else{
//             appendValue(buttonValue);
//         }
//     });
// }
// function clearResult(){
//     inputField.value = "";
// }

// function caculateResult(){
//     try{

//         const result = new Function('return ' + inputField.value)();
//         inputField.value =result;
//     }catch(error){
//         inputField.value ="Error"
//     }

// }

// function appendValue(buttonValue){
//     inputField.value += buttonValue;
// }































const buttons = document.querySelectorAll('button');
const inputfeild = document.getElementById('result');

for(let i=0; i <buttons.length; i++){
    const buttonValue = buttons[i].textContent
    buttons[i].addEventListener('click', ()=>{
   
        if(buttonValue==="C"){
            clearResult()
        }
        else if(buttonValue === "="){
            caculateResult()
        }
        else{
            appendValue(buttonValue)
        }
    })
}

function clearResult(){
    inputfeild.value = '';
 }

 function caculateResult(){
    try{

        const result = new Function('return ' + inputfeild.value)();
        inputfeild.value = result
    }
    catch(error){
        inputfeild.value = "Error"
    }
 }

 function appendValue(buttonValue){
    inputfeild.value += buttonValue
 }