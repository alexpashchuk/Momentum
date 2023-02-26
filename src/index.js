import { showTime } from './js/showTime';
import { showWeather, city } from './js/showWeather';
import { showSettingsPopup } from './js/settings';
import { switchLang, langBtn } from './js/switchLang';
import { getLocalStorage, setLocalStorage } from './js/localStorage';
import { quoteBtn, showQuotes } from './js/showQuotes';
import { choosePhoto, getSlideNext, getSlidePrev, inputTag, setBg, slideNext, slidePrev } from './js/sliderImage';
import {
    audio,
    playAudio,
    playBtn,
    playNext,
    playNextBtn,
    playPrev,
    playPrevBtn,
    playTrack,
    setPlayList,
    switchVolume,
    volumeBtn
} from './js/playAudio';
import { todoList, todoBtn, showTodoPopup, todoInput } from './js/todoList';

showTime();
showWeather();
showSettingsPopup();
showQuotes();
setBg();
setPlayList();
playTrack();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
langBtn.forEach((input) => {
    input.addEventListener('change', (event) => {
        switchLang(event);
    });
});
city.addEventListener('change', showWeather);
quoteBtn.addEventListener('click', showQuotes);
slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);
choosePhoto.forEach((input) =>
    input.addEventListener('change', (event) => {
        setBg(event.target.value);
        inputTag.disabled = event.target.value === 'gitHub';
    })
);
inputTag.addEventListener('change', () => setBg());
playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);
audio.addEventListener('ended', playNext);
volumeBtn.addEventListener('click', switchVolume);
todoBtn.addEventListener('click', showTodoPopup);
todoInput.addEventListener('change', todoList);
