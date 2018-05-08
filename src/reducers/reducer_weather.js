import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/index';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            let checkForDuplicates = _.contains(_.map(_.map(state, 'city'), 'name'), action.payload.city.name);
            (checkForDuplicates) ? alert(action.payload.city.name + " is already on your list.") : null;
             return [...state, action.payload];
        case FETCH_WEATHER_ERROR:
             return state;
        }
    return state;
}