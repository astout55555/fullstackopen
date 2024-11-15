import phonebookService from "../services/phonebook";

const DeleteButton = ({person, filteredPersons, setFilteredPersons}) => {
  const handleDeletion = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService.remove(person.id)
        .then(deletedPerson => {
          setFilteredPersons(filteredPersons.filter(pers => {
            return pers.id !== deletedPerson.id;
          }
        ));
      });
    }
  }

  return (
    <button onClick={handleDeletion}>
      delete
    </button>
  )
}

const Persons = ({filteredPersons, setFilteredPersons}) => {
  return (
    <ul>
      {filteredPersons.map(person => {
        return (
          <li key={person.name}>
            {person.name} {person.number}
            <DeleteButton person={person}
              filteredPersons={filteredPersons}
              setFilteredPersons={setFilteredPersons}/>
          </li>
        );
      })}
    </ul>
  );
}

export default Persons;