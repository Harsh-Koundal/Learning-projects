const apiKey = '110125b3ec34ffff24fe01794633a5eb';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search');
const container = document.querySelector('.container');



async function checkWeather(city){
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);
    let data = await response.json();
    if(data.cod === "404"){
        alert('invalid city');
        document.querySelector('.weather').style.display = 'none';
    }

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + "°c";
    document.querySelector('#percent').innerHTML = data.main.humidity + "%";
    document.querySelector('#speed').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
      container.style.backgroundImage = "url('30899.jpg')"
      container.style.color = 'white'
    }else{
        container.style.backgroundImage = "url('9444.jpg')"
        container.style.color = 'black'
    }

    document.querySelector('.weather').style.display = 'block';

    
}
    
searchBtn.addEventListener('click',()=>{
checkWeather(searchBox.value);
})

