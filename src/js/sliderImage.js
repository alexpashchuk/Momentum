import { getUnsplashImage } from './getUnsplashImage';

const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const inputTag = document.querySelector('.input-tag');
const choosePhoto = document.querySelectorAll('.choose-photo');

import { getRandomNum, getTimeOfDay } from '../utils/util';
import { getFlickrImage } from './getFlickrImage';

let randomNum = getRandomNum(1, 20);

const setBg = async (value) => {
    let urlPath = value || (localStorage.getItem('sourceBg') ? localStorage.getItem('sourceBg') : 'gitHub');
    localStorage.setItem('sourceBg', urlPath);

    const tag = inputTag.value || 'car';

    let timeOfDay = getTimeOfDay();
    let bgNum = randomNum.toString().padStart(2, '0');
    const img = new Image();
    switch (urlPath) {
        case 'gitHub':
            img.src = `https://raw.githubusercontent.com/alexpashchuk/momentum-assets/assets/images/${timeOfDay}/${bgNum}.webp`;
            break;
        case 'unsplash':
            img.src = await getUnsplashImage(tag);
            break;
        case 'flickr':
            img.src = await getFlickrImage(tag);
            break;
    }

    img.onload = () => {
        body.style.backgroundImage = `url('${img.src}')`;
    };
};

const getSlideNext = () => {
    randomNum === 20 ? (randomNum = 1) : (randomNum += 1);
    setBg();
};

const getSlidePrev = () => {
    randomNum === 1 ? (randomNum = 20) : (randomNum -= 1);
    setBg();
};

export { getSlidePrev, getSlideNext, slidePrev, slideNext, choosePhoto, setBg, inputTag };
