import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const removePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const updatePerson = (newPerson, existingPerson) => {
    personService.update(existingPerson.id, newPerson)
      .then(response => {
        setPersons(persons.map(person => person.id !== existingPerson.id ? person : response))
      })
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    const nameExists = persons.find(person => person.name === newName)
    if (nameExists) {
      if (window.confirm(`${newName} is already added to phonebook, replace old number with the new one?`)) {
        updatePerson(personObject, nameExists)
      }

      return;
    }

    
    personService.create(personObject)
      .then(response => {
        setPersons(persons.concat(response))
      })
  
    setNewName('')
    setNewNumber('')
  }

  const handleNameChanged = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChanged = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChanged = (event) => {
    setFilterValue(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))

  const displayPersons = filterValue === '' ? persons : filteredPersons
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterValue} onChange={handleFilterChanged} />
      <h2>Add new</h2>
      <PersonForm 
        onSubmit={addPerson} 
        nameValue={newName} 
        onNameChanged={handleNameChanged} 
        numbervalue={newNumber} 
        onNumberChanged={handleNumberChanged}
      />
      <h2>Numbers</h2>
      <Persons persons={displayPersons} onRemove={removePerson} />
    </div>
  )
}

export default App