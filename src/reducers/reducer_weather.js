import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        return [...state, action.payload];
    case FETCH_WEATHER_ERROR: 
        return state;
    }
    return state;
}