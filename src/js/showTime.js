const time = document.querySelector('.time');

import { showDate } from './showDate';
import { showGreeting } from './showGreeting';

const showTime = () => {
    time.textContent = new Date().toLocaleTimeString();
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();
};

export { showTime, time };
