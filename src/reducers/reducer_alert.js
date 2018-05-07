import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/index';

const initialState = {
    isVisible: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return { isVisible: false };
        case FETCH_WEATHER_ERROR: 
            return { isVisible: true };
        }
    return state;
}