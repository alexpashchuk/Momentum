import { todoBtn } from './todoList';

const menuLang = document.querySelector('.settings-lang');
const menuShow = document.querySelector('.settings-show');
const menuPhoto = document.querySelector('.settings-img');

const menuEn = document.querySelector('.lang-en');
const menuRu = document.querySelector('.lang-ru');
const menuWeather = document.querySelector('.weather-setting');
const menuClock = document.querySelector('.time-setting');
const menuDate = document.querySelector('.date-setting');
const menuGreeting = document.querySelector('.greeting-setting');
const menuQuote = document.querySelector('.quote-setting');
const menuPlayer = document.querySelector('.player-setting');
const menuTodo = document.querySelector('.todo-setting');

const menuGithub = document.querySelector('.github-text');
const menuUnsplash = document.querySelector('.unsplash-text');
const menuFlickr = document.querySelector('.flickr-text');
const menuPlaceholder = document.querySelector('.input-tag');

import { SETTINGS } from '../constants/const';
import { lang } from './switchLang';
const setSettings = () => {
    menuLang.textContent = SETTINGS[lang].lang;
    menuShow.textContent = SETTINGS[lang].show;
    menuPhoto.textContent = SETTINGS[lang].photo;
    menuEn.textContent = SETTINGS[lang].en;
    menuRu.textContent = SETTINGS[lang].ru;
    menuWeather.textContent = SETTINGS[lang].weather;
    menuClock.textContent = SETTINGS[lang].time;
    menuDate.textContent = SETTINGS[lang].date;
    menuGreeting.textContent = SETTINGS[lang].greeting;
    menuQuote.textContent = SETTINGS[lang].quote;
    menuPlayer.textContent = SETTINGS[lang].audio;
    menuTodo.textContent = SETTINGS[lang].todo;
    menuGithub.textContent = SETTINGS[lang].github;
    menuUnsplash.textContent = SETTINGS[lang].unsplash;
    menuFlickr.textContent = SETTINGS[lang].flickr;
    menuPlaceholder.placeholder = SETTINGS[lang].placeholder;
    todoBtn.textContent = SETTINGS[lang].todo;
};

export { setSettings };
