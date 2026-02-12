export default function Persons({ searching }) {
    return (
        <div>
            <h3>Numbers</h3>
            {searching.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
        </div>
    )
}