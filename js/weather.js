const KEY = '8a6ce7ad954fa49acaa293e3f21305a3';

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric
    `;

  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      const weatherLocation = document.querySelector('.weather__location');
      const weatherState = document.querySelector('.weather__state');

      const location = data.name;
      const temp = data.main.temp;
      const state = data.weather[0].main;

      weatherLocation.innerHTML = location;
      weatherState.innerHTML = `${state} ${temp}°C`;
    });
});
