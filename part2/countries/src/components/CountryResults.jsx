import Country from './Country';

const CountryResults = ({countrySearchResults}) => {

  if (countrySearchResults === null) {
    return null;
  } else if (countrySearchResults.length > 10) {
    return null;
  } else if (countrySearchResults.length > 1) {
    return (
      <>
        {countrySearchResults.map(country => {
          return (
            <p key={country.name.common}>
              {country.name.common}
            </p>
          );
        })}
      </>
    );
  } else if (countrySearchResults.length === 0) {
    return null;
  } else {
    const countryName = countrySearchResults[0].name.common;
    return (
      <Country countryName={countryName} />
    );
  }
}

export default CountryResults;