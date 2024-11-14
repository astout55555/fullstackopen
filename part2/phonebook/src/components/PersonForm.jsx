import { useState } from 'react';

const PersonForm = ({persons, setPersons, setFilteredPersons}) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    let existingPersonNames = persons.map(person => person.name);

    if (existingPersonNames.includes(newName)) {
      alert(`Warning: ${newName} is already included in the phonebook.`);
    } else {
      let newPerson = {
        name: newName,
        number: newNumber,
      };

      let updatedPersons = persons.concat(newPerson); 
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
      setNewName('');
      setNewNumber('');
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