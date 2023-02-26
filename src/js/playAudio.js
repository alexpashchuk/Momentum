import { getTimeCodeFromNum } from '../utils/util';
import { PLAYLIST } from '../constants/const';

const playBtn = document.querySelector('.play');
const player = document.querySelector('.player');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const volumeBtn = document.querySelector('.volume');
const volume = document.querySelector('.volume-slider');

const trackName = document.querySelector('.track-name');
const trackTimeline = document.querySelector('.timeline');
const progressBar = document.querySelector('.progress');
const currentTime = document.querySelector('.current');
const trackLength = document.querySelector('.length');

const playListContainer = document.querySelector('.play-list');

const audio = new Audio();
let isPlay = false;
let playNum = 0;
audio.src = PLAYLIST[playNum].src;
audio.volume = volume.value;

const setPlayList = () => {
    PLAYLIST.forEach((el, i) => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        playListContainer.append(li);
        li.textContent = PLAYLIST[i].title;
    });
};

const setAudioCurrentTime = (event) => {
    const timelineWidth = window.getComputedStyle(trackTimeline).width;
    audio.currentTime = (event.offsetX / parseInt(timelineWidth)) * audio.duration;
};

const playAudio = () => {
    volume.addEventListener('change', () => {
        audio.volume = volume.value;
        if (audio.volume === 0) {
            volumeBtn.classList.add('sound-off');
        } else {
            volumeBtn.classList.remove('sound-off');
        }
    });
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%';
    trackLength.textContent = PLAYLIST[playNum].duration;
    trackName.textContent = PLAYLIST[playNum].title;

    setInterval(() => {
        progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%';
        currentTime.textContent = getTimeCodeFromNum(audio.currentTime);
    }, 100);

    trackTimeline.addEventListener('click', setAudioCurrentTime);

    const playItems = document.querySelectorAll('.play-item');

    if (!isPlay) {
        audio.play();
        playBtn.classList.add('pause');
        playItems[playNum].classList.add('item-active');
        isPlay = true;
    } else if (playItems[playNum].classList.contains('item-active')) {
        audio.pause();
        isPlay = false;
        playBtn.classList.remove('pause');
        playItems[playNum].classList.remove('item-active');
    } else {
        audio.src = PLAYLIST[playNum].src;
        audio.play();
        playItems.forEach((el) => {
            el === playItems[playNum] ? el.classList.toggle('item-active') : el.classList.remove('item-active');
        });
    }
};

const playTrack = () => {
    const playItemList = [...document.querySelectorAll('.play-item')];
    playItemList.forEach((element) => {
        element.addEventListener('click', (event) => {
            playNum = playItemList.indexOf(event.target);
            if (trackName.textContent !== PLAYLIST[playNum].title) {
                audio.src = PLAYLIST[playNum].src;
            }
            playAudio();
        });
    });
};

function playNext() {
    playNum === PLAYLIST.length - 1 ? (playNum = 0) : (playNum += 1);
    playAudio();
}

function playPrev() {
    playNum === 0 ? (playNum = PLAYLIST.length - 1) : (playNum -= 1);
    playAudio();
}

const switchVolume = () => {
    volumeBtn.classList.toggle('sound-off');
    audio.muted = audio.muted === false;
};

export {
    setPlayList,
    playAudio,
    playNext,
    playPrev,
    switchVolume,
    playTrack,
    audio,
    playBtn,
    playNextBtn,
    playPrevBtn,
    volumeBtn,
    player
};
