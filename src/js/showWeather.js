const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
const weather = document.querySelector('.weather');
const city = document.querySelector('.city');

import { WEATHER, API_WEATHER } from '../constants/const';
import { lang } from './switchLang';

city.value = 'Minsk';
const showWeather = async () => {
    // getLocalStorage();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=${API_WEATHER}&units=metric`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();

        weatherError.textContent = null;
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${WEATHER[lang].wind}: ${Math.round(data.wind.speed)}${WEATHER[lang].ms}`;
        humidity.textContent = `${WEATHER[lang].humidity}: ${data.main.humidity}%`;
    } catch (error) {
        if (error == 'Error: 400') {
            weatherError.textContent = WEATHER[lang].errData;
            city.placeholder = WEATHER[lang].placeholder;
        } else {
            weatherError.textContent = WEATHER[lang].errCity;
        }
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = null;
        weatherDescription.textContent = null;
        wind.textContent = null;
        humidity.textContent = null;
    }
};

// function setLocalStorage() {
//     localStorage.setItem('name', name.value);
//     localStorage.setItem('city', city.value);
// }
//
// function getLocalStorage() {
//     if (localStorage.getItem('name')) name.value = localStorage.getItem('name');
//     if (localStorage.getItem('city')) name.value = localStorage.getItem('city');
// }

// window.addEventListener('beforeunload', setLocalStorage);
// window.addEventListener('load', getLocalStorage);

export { showWeather, city, weather };
