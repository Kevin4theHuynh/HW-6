var apiKey = '215d03cce9e335ce32dfcbb3dcf1a816';
var weatherUrl = 'https://api.openweathermap.org';


var city;
var state;
const weatherUrl2 = api.openweathermap.org/data/2.5/weather?q={city}:{state}&appid,{API ,key};

fetch(weatherUrl2)

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var forecastContainer = document.querySelector('#forecast');
var searchHistoryContainer = document.querySelector('#history');


// function currentWeather(weather) {
//     var windEl = document.querySelector('.windy')
//     var cloudEl = document.querySelector('.cloud')
//     var tempEl = document.querySelector('.temperature')
//     var uvEl = document.querySelector('.UV')

//     windEl = weather.temp
//     cloudEl = weather.humidity
//     tempEl = weather.temp
//     uvEl = weather.uvi

//     var iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
// }

// currentWeather();

function fetchWeather(location) {
    var { lat } = location;
    var { lon } = location;
    var city = location.name;
    var apiUrl = `${weatherApiRootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;
  
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        renderItems(city, data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }
  
console.log(fetchWeather());
