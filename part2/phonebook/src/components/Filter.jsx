import { useState } from 'react';

const Filter = ({persons, setFilteredPersons}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const filterSearch = (event) => {
    event.preventDefault();
    let relevantPersons = persons.filter(person => {
      return person.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredPersons(relevantPersons);
    setSearchTerm('');
  }

  return (
    <form onSubmit={filterSearch}>
      filter shown with
      <input value={searchTerm} onChange={handleSearchTermChange}/>
      <button type="submit">filter</button>
    </form>
  );
}

export default Filter;