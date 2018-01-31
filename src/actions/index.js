import axios from 'axios';
const api_key = '1e5cab8d3200553c560008568b7838a0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;
export default function getWeather(city) {
    const url = `${ROOT_URL}&q=${city},IN`;
    let data = axios.get(url);
    return {
        type: 'GET_WEATHER',
        payload: data
    }
}