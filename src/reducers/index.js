import { combineReducers } from 'redux';
import getWeather from './getweatherreducer';
const rootReducer = combineReducers({
    weatherInfo: getWeather
})

export default rootReducer;