import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  isVisible: AlertReducer
});

export default rootReducer;