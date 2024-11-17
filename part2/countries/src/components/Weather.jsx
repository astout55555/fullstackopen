import { useState } from "react";
import { useEffect } from "react";

import weatherService from '../services/weather';

const Weather = ({countryName, latitude, longitude}) => {
  const ZERO_KELVIN_TO_CELCIUS = -273.15;

  const [tempCelsius, setTempCelcius] = useState();
  const [wind, setWind] = useState();
  const [weatherIconLink, setWeatherIconLink] = useState();

  const loadWeatherHook = () => {
    weatherService.getWeather(latitude, longitude)
      .then(returnedWeather => {
        const tempKelvin = returnedWeather.main.temp;
        const formattedTempCelcius = (ZERO_KELVIN_TO_CELCIUS + tempKelvin).toFixed(2);
        setTempCelcius(formattedTempCelcius);
        setWind(returnedWeather.wind.speed);

        const iconCode = returnedWeather.weather[0].icon;
        const linkWithCode = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setWeatherIconLink(linkWithCode);
    });
  }

  useEffect(loadWeatherHook, []);

  return (
    <div id="country-weather">
      <h2>Weather in {countryName}</h2>
      <p>temperature {tempCelsius} Celcius</p>
      <img src={weatherIconLink} />
      <p>wind {wind} m/s</p>
    </div>
  );
}

export default Weather;