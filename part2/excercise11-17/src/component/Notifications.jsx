export default function Notifications ({ message, status }) {
    if(message === null) {
        return null
    }

    return (
        <div className={status === 'success' ? 'success' : 'error'}>
            {message}
        </div>
    )
}