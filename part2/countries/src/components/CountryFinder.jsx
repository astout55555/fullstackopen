import { useState } from 'react';
import SearchBar from './SearchBar';
import CountryResults from './CountryResults';

const CountryFinder = ({countries}) => {
  const [countrySearchResults, setCountrySearchResults] = useState(null);

  return (
    <>
      <SearchBar countries={countries}
        setCountrySearchResults={setCountrySearchResults} />
      <CountryResults countrySearchResults={countrySearchResults} />
    </>
  )
}

export default CountryFinder;