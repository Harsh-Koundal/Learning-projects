const dateInput = document.querySelector('#dob'); 
let  age =null;

dateInput.addEventListener('change', () => {
  const userInput = dateInput.value;
  console.log('Date of Birth:', userInput);

  const birthDate = new Date(userInput); 
  const today = new Date();              

  age = today.getFullYear() - birthDate.getFullYear();

  const BirthDay =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!BirthDay) {
    age--;
  }

  console.log(`Age: ${age}`);
});

let BirthDateHTML = '';
let result;


const calculate = document.querySelector('.js-btn').addEventListener('click',()=>{
if (age === null) {
    result = 'Please select your date of birth first.';
  } else {
    result = ` ${age} `;
  }
  BirthDateHTML = `
    <p id="results">Your Age is ${result} Years Old </p>
`
  document.querySelector('.age').innerHTML = BirthDateHTML
})



