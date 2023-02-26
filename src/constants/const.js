const DATE = {
    ru: 'ru-RU',
    en: 'en-US'
};

const GREETING = {
    en: {
        morning: 'Good morning,',
        afternoon: 'Good afternoon,',
        evening: 'Good evening,',
        night: 'Good night,',
        placeholder: '[Enter name]'
    },
    ru: {
        morning: 'Доброе утро,',
        afternoon: 'Добрый день,',
        evening: 'Добрый вечер,',
        night: 'Доброй ночи,',
        placeholder: '[Введите имя]'
    }
};

const WEATHER = {
    en: {
        wind: 'Wind speed',
        ms: 'm/s',
        humidity: 'Humidity',
        errData: 'Data loading error',
        errCity: 'City not found',
        city: 'Minsk',
        placeholder: '[Enter city]'
    },
    ru: {
        wind: 'Скорость ветра',
        ms: 'м/с',
        humidity: 'Влажность',
        errData: 'Ошибка загрузки данных.',
        errCity: 'Город не найден',
        city: 'Минск',
        placeholder: '[Введите город]'
    }
};

const QUOTES = {
    ru: 'quotes/dataRu.json',
    en: 'quotes/dataEn.json'
};

const API_WEATHER = '3494e2f60b865b04a7e2e5e2a5916339';
const API_UNSPLASH = 'fFffQoDhWXXMFqbhJubbbWQrgtO1p3wT9PS4oWUXVX0';
const API_FLICKR = '7bb28a6af1da3cea7303e4d26097d60d';

const PLAYLIST = [
    {
        title: 'Aqua Caelestis',
        src: '../assets/sounds/Aqua Caelestis.mp3',
        duration: '00:39'
    },
    {
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
    },
    {
        title: 'River Flows In You',
        src: '../assets/sounds/River Flows In You.mp3',
        duration: '01:36'
    },
    {
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
        duration: '01:50'
    }
];

const SETTINGS = {
    en: {
        lang: 'Language',
        en: 'Eng',
        ru: 'Rus',
        show: 'Show / Hide',
        photo: 'Photo Source',
        weather: 'Weather',
        time: 'Clock',
        date: 'Date',
        greeting: 'Greeting',
        quote: 'Quote',
        audio: 'Audio player',
        todo: 'Todo',
        github: 'GitHub collection',
        unsplash: 'Unsplash API',
        flickr: 'Flickr API',
        placeholder: 'choose photo tag'
    },
    ru: {
        lang: 'Язык',
        en: 'Англ',
        ru: 'Рус',
        show: 'Показать / Скрыть',
        photo: 'Источник изображений',
        weather: 'Погода',
        time: 'Часы',
        date: 'Дата',
        greeting: 'Приветствие',
        quote: 'Цитата дня',
        audio: 'Аудиоплеер',
        todo: 'Список дел',
        github: 'Коллекция GitHub',
        unsplash: 'Коллекция Unsplash',
        flickr: 'Коллекция Flickr',
        placeholder: 'ввести фото тега'
    }
};

const TODO = {
    en: {
        header: 'Today',
        plan: 'Planned',
        done: 'Done',
        placeholder: 'New Todo'
    },
    ru: {
        header: 'Сегодня',
        plan: 'Запланировано',
        done: 'Выполнено',
        placeholder: 'Новая задача'
    }
};

export { DATE, GREETING, WEATHER, API_WEATHER, API_UNSPLASH, API_FLICKR, QUOTES, PLAYLIST, SETTINGS, TODO };
