import { greetingRoot } from './showGreeting';
import { date } from './showDate';
import { time } from './showTime';
import { weather } from './showWeather';
import { player } from './playAudio';
import { quoteRoot } from './showQuotes';
import { todoBtn } from './todoList';

const toggleMenuList = document.querySelectorAll('.list-item');
const elementList = [player, weather, time, date, greetingRoot, quoteRoot, todoBtn];

const toggleElements = () => {
    toggleMenuList.forEach((el) => {
        el.addEventListener('click', (event) => {
            let filterClass = event.target.dataset.list;
            elementList.forEach((elem) => {
                if (elem.classList.contains(filterClass)) {
                    elem.classList.toggle('hide');
                }
            });
            el.classList.toggle('list-active');
        });
    });
};

export { toggleElements };
