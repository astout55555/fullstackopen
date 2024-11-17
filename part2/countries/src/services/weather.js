import axios from 'axios';

const apiKey = import.meta.env.VITE_SOME_KEY;

// changed https to http, still works
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

const getWeather = (latitude, longitude) => {
  const request = axios.get(`${baseURL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
  return request.then(response => response.data);
}

export default {getWeather};