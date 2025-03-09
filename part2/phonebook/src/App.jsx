import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const noteObject = {
      name: newName,
    };

    const nameExists = persons.find(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return;
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
  }

  
  const handleNameChanged = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChanged}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <div key={person.name}>{person.name}</div>
      )}
    </div>
  )
}

export default App