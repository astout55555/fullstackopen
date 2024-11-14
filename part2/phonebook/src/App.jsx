import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}
        setFilteredPersons={setFilteredPersons}/>

      <h2>add a new</h2>
      <PersonForm persons={persons}
        setPersons={setPersons}
        setFilteredPersons={setFilteredPersons}/>

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App;