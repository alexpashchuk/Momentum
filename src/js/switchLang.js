import { showDate } from './showDate';
import { showGreeting } from './showGreeting';
import { showWeather } from './showWeather';
import { showQuotes } from './showQuotes';
import { setSettings } from './setSettings';
import { setTodoList } from './todoList';
const langBtn = document.querySelectorAll('.button-lang');

let lang = 'en';

const switchLang = (event) => {
    lang = event === undefined ? (localStorage.getItem('language') === 'en' ? 'en' : 'ru') : event?.target.value;

    localStorage.setItem('language', lang);
    showDate();
    showGreeting();
    showWeather();
    showQuotes();
    setSettings();
    setTodoList();
};

export { switchLang, lang, langBtn };
