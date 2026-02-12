import Person from "./Person"

export default function Persons({ searching, setPersons, setMessage, setStatus }) {
    return (
        <div>
            <h3>Numbers</h3>
            {searching.map(person => <Person key={person.id} id={person.id} name={person.name} number={person.number} setPersons={setPersons} setMessage={setMessage} setStatus={setStatus} />)}
        </div>
    )
}