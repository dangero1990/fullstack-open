import service from '../services/people'

export default function Person({ id, name, number, setPersons, setMessage, setStatus }) {

    function deletePerson(id, name) {
        if(window.confirm(`Delete ${name}?`)) {
            service.deleteId(id).then(() => {
            setPersons(prev => prev.filter(person => person.id !== id))
            }).catch(() => {
                setMessage(`Information of ${name} has already been removed from the server`)
                setStatus('error')

                setTimeout(() => {
                    setMessage(null)
                    setStatus('')
                }, 5000)
            })
        } else {
            return
        }
    }

    return (
        <>
            <p>{name} {number} <button onClick={() => deletePerson(id, name)}>delete</button></p>
        </>
    )
}