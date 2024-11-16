import { useState } from 'react';
import { useEffect } from 'react';

import countriesService from './services/countries';

import CountryFinder from './components/CountryFinder';

function App() {
  const [countries, setCountries] = useState(null);

  const loadAllCountries = () => {
    countriesService.getAll()
      .then(allCountries => setCountries(allCountries));
    console.log('loaded');
  }

  useEffect(loadAllCountries, []);

  if (countries === null) return null;

  return (
    <>
      <CountryFinder countries={countries} />
    </>
  );
}

export default App;
