const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteRoot = document.querySelector('.quote-root');
const quoteBtn = document.querySelector('.change-quote');
import { getRandomNum } from '../utils/util';
import { QUOTES } from '../constants/const';
import { lang } from './switchLang';

const showQuotes = async () => {
    const quotes = QUOTES[lang];
    try {
        const res = await fetch(quotes);
        const data = await res.json();
        const quoteNumber = getRandomNum(0, data.length);
        quote.textContent = data[quoteNumber].text;
        author.textContent = data[quoteNumber].author;
    } catch (error) {
        console.log(error);
    }
};

export { showQuotes, quoteBtn, quoteRoot };
