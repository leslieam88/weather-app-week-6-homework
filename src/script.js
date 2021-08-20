function showTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  console.log(currentTemp);
  let currentTempElement = document.querySelector("#mainTemp");
  currentTempElement.innerHTML = `${currentTemp}°F`;
  console.log(response.data);
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
  let feels = document.querySelector("#feelsLike");
  feels.innerHTML = Math.round(response.data.main.feels_like);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
}

function getCity(value) {
  let searchInput = document.getElementById("search-input");
  let city = searchInput.value;
  let apiKey = "71871e214b4db04ba50273e77608de7b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemp);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat);
  console.log(lon);
  let apiKey = "71871e214b4db04ba50273e77608de7b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemp);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", getCity);

let currentButton = document.getElementById("current-button");
currentButton.addEventListener("click", getCurrentPosition);
