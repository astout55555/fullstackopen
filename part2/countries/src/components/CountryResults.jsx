import Country from './Country';

const CountryResults = ({countrySearchResults, setCountrySearchResults}) => {
  const handleClick = (event) => {
    const countryName = event.target.previousElementSibling.textContent;
    setCountrySearchResults([
      {
        name: {
          common: countryName,
        },
      }
    ]);
  }

  if (countrySearchResults === null) {
    return null;
  } else if (countrySearchResults.length > 10) {
    return null;
  } else if (countrySearchResults.length > 1) {
    return (
      <>
        {countrySearchResults.map(country => {
          const countryName = country.name.common;
          return (
            <p key={countryName.concat('P')}>
              <label htmlFor={countryName.concat('BUTTON')} key={countryName.concat('LABEL')}>
                {countryName}
              </label>
              <button id={countryName.concat('BUTTON')} onClick={handleClick} key={countryName.concat('BUTTON')} >
                show
              </button>
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