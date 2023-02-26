import { DATE } from '../constants/const';
import { lang } from './switchLang';
const date = document.querySelector('.date');

function showDate() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    date.textContent = new Date().toLocaleDateString(DATE[lang], options);
}

export { showDate, date };
