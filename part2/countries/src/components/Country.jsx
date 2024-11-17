import { useState } from "react";
import { useEffect } from "react";

import countriesService from '../services/countries';

import Weather from "./Weather";

const Country = ({countryName}) => {
  const [country, setCountry] = useState(null);
  const [commonName, setCommonName] = useState(countryName);
  const [capital, setCapital] = useState();
  const [area, setArea] = useState();
  const [languages, setLanguages] = useState([]);
  const [flagLink, setFlagLink] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getCountryDetailsHook = () => {
    countriesService.getCountry(countryName)
    .then(returnedCountry => {
      setCountry(returnedCountry);
      setCommonName(returnedCountry.name.common);
      setCapital(returnedCountry.capital[0]);
      setArea(returnedCountry.area);
      setLanguages(Object.values(returnedCountry.languages));
      setFlagLink(returnedCountry.flags.png);
      setLatitude(returnedCountry.latlng[0]);
      setLongitude(returnedCountry.latlng[1]);
    });
  }

  useEffect(getCountryDetailsHook, []);

  if (country === null) return null;

  return (
    <>
      <div id="country-details">
        <h1>{commonName}</h1>
        capital {capital}<br/>
        area {area}<br/>
        <br/>
        <strong>languages:</strong>
        <br/>
        <ul>
          {languages.map(language => {
            return (
              <li key={language}>
                {language}
              </li>
            );
          })}
        </ul>
        <img src={flagLink} alt={`Flag of ${commonName}`} />
      </div>
      <Weather countryName={countryName} latitude={latitude} longitude={longitude} />
    </>
  );
}

export default Country;