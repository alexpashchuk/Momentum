import { switchLang, langBtn } from './switchLang';
import { city } from './showWeather';
import { name } from './showGreeting';
import { choosePhoto, inputTag } from './sliderImage';

const setLocalStorage = () => {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    // localStorage.setItem('language', lang);
    langBtn.forEach((input) => {
        if (input.checked) {
            localStorage.setItem('language', input.value);
        }
    });
    choosePhoto.forEach((input) => {
        if (input.checked) {
            localStorage.setItem('sourceBg', input.value);
        }
    });
    localStorage.setItem('tag', inputTag.value);
};

//-----------------------------//
const getLocalStorage = () => {
    if (localStorage.getItem('name')) name.value = localStorage.getItem('name');
    if (localStorage.getItem('city')) city.value = localStorage.getItem('city');
    if (localStorage.getItem('tag')) inputTag.value = localStorage.getItem('tag');
    if (localStorage.getItem('language')) {
        langBtn.forEach((input) => {
            if (localStorage.getItem('language') === input.value) {
                input.checked = true;
            }
        });
    }
    switchLang();
    if (localStorage.getItem('sourceBg')) {
        choosePhoto.forEach((input) => {
            if (localStorage.getItem('sourceBg') === input.value) {
                input.checked = true;
                inputTag.disabled = localStorage.getItem('sourceBg') === 'gitHub';
            }
        });
    }
};

export { setLocalStorage, getLocalStorage };
