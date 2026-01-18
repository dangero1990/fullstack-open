export default function PersonsForm({ newName, setNewName, newNumber, setNewNumber, addContact}) {
    return (
        <form onSubmit={addContact}>
            <h3>add new name</h3>
            <div>
            name: <input value={newName} onChange={e => setNewName(e.target.value)} />
            </div>
            <div>
            number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
      </form>
    )
}