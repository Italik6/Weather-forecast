import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/index';

export default function (state = false, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return false;
        case FETCH_WEATHER_ERROR: 
            return true;
        }
        return state;
}