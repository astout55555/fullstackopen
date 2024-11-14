import { useState } from 'react';

const Persons = ({filteredPersons}) => {
  return (
    <ul>
      {filteredPersons.map(person => {
        return (<li key={person.name}>{person.name}</li>);
      })}
    </ul>
  );
}

export default Persons;