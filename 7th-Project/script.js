const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector('button');
const fromCurr =  document.querySelector('.from select');
const toCurr =  document.querySelector('.To select');
const msg = document.querySelector('.msg')
for(let select of dropdowns){
    for(currcode in countryList){
    let newOptions = document.createElement('option');
    newOptions.innerText = currcode;
    newOptions.value = currcode;
    if(select.name === "from" && currcode === "USD"){
        newOptions.selected = "selected";
    }else if(select.name === "to" && currcode === "INR"){
        newOptions.selected = "selected";
    }
    select.append(newOptions);


}
select.addEventListener('change',(evt)=>{
    updateFlag(evt.target)
})
}

const updateFlag  = (element)=>{
    let currcode = element.value;
    let countryCode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;

}

btn.addEventListener('click', async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector('.amount input');
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();
  const URL = `${BASE_URL}/${from}.json`;

  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[from][to];
    let finalAmount = (amtVal * rate).toFixed(2);
    
    // Replace this with your actual result display logic
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
});
