const icon = document.querySelector("#weather-icon");
const desc = document.querySelector("#description");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const dayAfter = document.querySelector("#day-after");
const threeDays = document.querySelector('#in-three-days')
const tomorrow = document.querySelector("#tomorrow");
const myKey ="d7a48202195b9902e57cca458e7ca0e3";
const myLat ="50.01223013866542"; 
const myLong="-110.6259411027306";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric&cnt=22`;


async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data); //testing only
            displayResult(data); //uncomment when ready
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

async function apiFetchForecast() {
    try{
        const response = await fetch(forecastUrl);
        if (response.ok){
            const forecastData = await response.json();
            // console.log(forecastData); //testing only
            displayforeCast(forecastData); //uncomment when ready
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

function displayResult(data){
    temp.innerHTML = `${data.main.temp}&deg;C`;
    desc.innerHTML = `${data.weather[0].description}`;
    feelsLike.innerHTML = `Feels like: ${data.main.feels_like}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);
    icon.setAttribute("loading","lazy");    
}

function displayforeCast(forecastData){
    tomorrow.innerHTML = `Tomorrow: ${forecastData.list[5].main.temp}&deg;C`;
    dayAfter.innerHTML = `In 2 days: ${forecastData.list[13].main.temp}&deg;C`;
    threeDays.innerHTML = `In 3 days: ${forecastData.list[21].main.temp}&deg;C`
}

apiFetch();
apiFetchForecast();