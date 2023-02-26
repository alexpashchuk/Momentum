import { API_UNSPLASH } from '../constants/const';

const getUnsplashImage = async (tag) => {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=${API_UNSPLASH}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.urls.regular;
    } catch (error) {
        console.log(error);
    }
};

export { getUnsplashImage };
