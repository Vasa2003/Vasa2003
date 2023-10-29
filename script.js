

const apiKey = "2456101ee0b546b06317f68574768335";


const input =document.querySelector("input");

const button = document.querySelector("button");



const celsius = document.querySelector(".celsius");

const icon = celsius.querySelector(".image");


const temp = celsius.querySelector("h1");

const desc = celsius.querySelector("p");

const details = document.querySelector(".temp");

button.addEventListener("click",(event)=>{
   event.preventDefault();
   const cityValue = input.value;
   getWeather(cityValue);
});

async function getWeather(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)


        if(!response.ok){
            throw new Error("Network response was not ok")
        }

        const data = await response.json();
        console.log(data);

        const temperature = Math.round(data.main.temp);

        const describe  = data.weather[0].description;

        const icon1 = data.weather[0].icon;

        const details1 = [
            `Feels like : ${Math.round(data.main.feels_like)}`,
            `Humidity : ${data.main.humidity} %`,

            `Wind Speed : ${data.wind.speed} M/s`
        ]

        icon.innerHTML = `<img class="icon" src="http://openweathermap.org/img/wn/${icon1}.png" alt="Weather Icon">`

        temp.textContent = `${temperature}*C`;

        desc.innerHTML = describe;

        details.innerHTML = details1.map((detai)=>`<p>${detai}</p>`).join("");
        
        } catch (error) {
        
            icon.innerHTML = "";
            temp.innerHTML="";
            desc.innerHTML="An Error Happened Please Try Again";
            details.innerHTML="";

    }
}