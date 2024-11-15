import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import { useEffect } from 'react';
import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const fetchInitialPersonsHook = () => {
    phonebookService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
        setFilteredPersons(initialPersons);
    });
  }

  useEffect(fetchInitialPersonsHook, []);

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
      <Persons filteredPersons={filteredPersons}
        setFilteredPersons={setFilteredPersons}/>
    </div>
  )
}

export default App;