// const apikey1 = "bb040a7168b7d198b1873beaa235cb9a";
const apiKey = "bb040a7168b7d198b1873beaa235cb9a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}
searchBtn.addEventListener("Enter",()=>{
    checkWeather(searchBox.value);
})
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
if (data.weather[0].main == "clouds") {
    weatherIcon.src = "images/clouds.png";
}