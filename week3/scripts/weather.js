const temp = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

const myKey ="";
const myLat ="49.769648479298056";
const myLong="6.623364343957379";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

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

function displayResult(data){
    // console.log("hello");
    temp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);
    caption.innerHTML = `${data.weather[0].description}`;
}

apiFetch();