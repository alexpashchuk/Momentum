import { getRandomNum } from '../utils/util';
import { API_FLICKR } from '../constants/const';

let randomNum = getRandomNum(0, 50);
const getFlickrImage = async (tag) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_FLICKR}&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
    try {
        const res = await fetch(url);
        const data = await res.json();

        return data.photos.photo[randomNum].url_l;
    } catch (error) {
        console.log(error);
    }
};

export { getFlickrImage };
