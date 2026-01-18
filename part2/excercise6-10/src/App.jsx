import { useState } from 'react'
import PersonsForm from './component/PersonsForm.jsx'
import Filter from './component/Filter.jsx'
import Persons from './component/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const searching = search.length > 0 ? persons.filter(person => person.name.toLowerCase().substring(0,search.length) == search.toLowerCase()) : persons

  function addContact(event) {
    event.preventDefault()

    const repeatName = persons.some(person => person.name === newName)

    repeatName ? 
    alert(`${newName} is already added to the phonebook`) 
    : setPersons(persons.concat({name: newName, phone: newNumber, id: (persons.length + 1)}))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <PersonsForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} addContact={addContact} />
      <Persons searching={searching} />
    </div>
  )
}

export default App