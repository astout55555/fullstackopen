import { useState } from 'react';
import phonebookService from '../services/phonebook';

const PersonForm = ({persons, setPersons, setFilteredPersons}) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    let existingPersonNames = persons.map(person => person.name);

    if (existingPersonNames.includes(newName)) {

      if (window.confirm(`${newName} is already in the phonebook. Overwrite?`)) {
        const personToUpdate = persons.find(person => person.name === newName);
        const updatedPerson = {...personToUpdate, number: newNumber};
        phonebookService.update(personToUpdate.id, updatedPerson)
          .then(returnedPerson => {
            const otherPersons = persons.filter(person => {
              return person.id !== returnedPerson.id;
            });
            const updatedPersons = [...otherPersons, returnedPerson];
            setPersons(updatedPersons);
            setFilteredPersons(updatedPersons);
            setNewName('');
            setNewNumber('');
        });
      }

    } else {
      let newPerson = {
        name: newName,
        number: newNumber,
      };

      phonebookService.create(newPerson)
        .then(returnedPerson => {
          let updatedPersons = persons.concat(returnedPerson); 
          setPersons(updatedPersons);
          setFilteredPersons(updatedPersons);
          setNewName('');
          setNewNumber('');
        });
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;