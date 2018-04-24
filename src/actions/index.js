import axios from 'axios';
const API_KEY = 'a848489120fc64af00163991228fe8a6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return (dispatch) => {
        request
        .then(({data}) => {
            console.log(data)
            dispatch({type: FETCH_WEATHER, payload: data})
        })
        .catch((error) => { 
            console.log(error.message);
            dispatch({type: FETCH_WEATHER_ERROR, payload: error})
          });
    };
}