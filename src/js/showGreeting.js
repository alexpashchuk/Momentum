const greeting = document.querySelector('.greeting');
const greetingRoot = document.querySelector('.greeting-container');
const name = document.querySelector('.name');

import { getTimeOfDay } from '../utils/util';

import { GREETING } from '../constants/const';
import { lang } from './switchLang';

const showGreeting = () => {
    const timeOfDay = getTimeOfDay();
    greeting.textContent = GREETING[lang][timeOfDay];
    name.placeholder = GREETING[lang].placeholder;
};

export { showGreeting, name, greetingRoot };
