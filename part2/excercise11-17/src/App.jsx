import { useState, useEffect } from 'react'
import PersonsForm from './component/PersonsForm.jsx'
import Filter from './component/Filter.jsx'
import Persons from './component/Persons.jsx'
import service from './services/people.js'
import Notifications from './component/Notifications.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [status, setStatus] = useState('')

  // get all people from backend
  useEffect(() => {
    service.getAll().then(res => setPersons(res.data))
  },[])

  const searching = search.length > 0 ? persons.filter(person => person.name.toLowerCase().substring(0,search.length) == search.toLowerCase()) : persons


  function addContact(event) {
    event.preventDefault()

    const repeatName = persons.some(person => person.name === newName)

    if (repeatName) {
      if (window.confirm(`${newName} is already added to the phonebook, do you want to replace the number?`)) {
        const existing = persons.find(person => person.name === newName)
        const updated = { ...existing, number: newNumber }

        service.update(existing.id, updated).then((res) => {
          setPersons(prev =>
            prev.map(person => (person.id === existing.id ? res.data : person))
          )
          setStatus('success')
          setMessage(`Updated ${newName}`)
          setNewName('')
          setNewNumber('')

          setTimeout(() => {
            setMessage(null)
            setStatus('')
            }, 5000)
        })
      } 
    } else {
      const newObj = {name: newName, number: newNumber}

      service.create(newObj)
      .then( res => {
        const data = res.data
        setStatus('success')
        setMessage(`Added ${newName}`)
        setNewName('')
        setNewNumber('')
        setPersons([...persons, data])

        setTimeout(() => {
          setMessage(null)
          setStatus('')
        }, 5000)
      }
      ).catch(error => {
        setMessage(`There was an error adding ${newName} to the server`)
        setStatus('error')

        setTimeout(() => {
          setMessage(null)
          setStatus('')
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications message={message} status={status} />
      <Filter search={search} setSearch={setSearch} />
      <PersonsForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} addContact={addContact} />
      <Persons searching={searching} setPersons={setPersons} setMessage={setMessage} setStatus={setStatus} />
    </div>
  )
}

export default App