import axios from 'axios';
const API_KEY = 'a848489120fc64af00163991228fe8a6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
   
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}