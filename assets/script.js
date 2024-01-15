let searchInputEl = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let currentWeatherDiv = document.querySelector(".current-weather");
let daysForecastDiv = document.querySelector(".days-forecast");

const API_KEY = 'b9314d4276077d1372325ef6164fb926';

let cityName = '';
let temperature = document.getElementById('temperature');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');


searchButton.addEventListener('click', function (event) {
  event.preventDefault()
  console.log(searchInputEl.value)
  cityName = searchInputEl.value;

  // current forecast
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b9314d4276077d1372325ef6164fb926&units=metric`, {
    method: 'GET'
  })
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      // split out data into temp, wind, humidity
      // change to update text in html
      temperature.innerHTML = `temperature: ${data.main.temp}°C`;
      wind.innerHTML = `wind: ${data.wind.speed} KPH`;
      humidity.innerHTML = `humidity: ${data.main.humidity} %`;
    });
});
