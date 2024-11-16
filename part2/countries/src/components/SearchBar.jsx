import { useState } from 'react';

const SearchBar = ({countries, setCountrySearchResults}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultsMessage, setResultsMessage] = useState("Enter a country's name");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const term = event.target.value.toLowerCase();
    if (term === '') {
      setResultsMessage("Enter a country's name");
      return (<p>{resultsMessage}</p>);
    }

    const matchingCountries = countries.filter(country => {
      return country.name.common.toLowerCase().includes(term);
    });

    setCountrySearchResults(matchingCountries);

    if (matchingCountries === null) {
      return null;
    } else if (matchingCountries.length > 10) {
      setResultsMessage('Too many matches, specify another filter');
    } else {
      setResultsMessage(null);
    }
  }

  return (
    <>
      find countries <input type='text' onChange={handleChange} value={searchTerm} />
      <p>{resultsMessage}</p>
    </>
  );
}

export default SearchBar;