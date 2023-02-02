import { useState } from "react"

export function App() {
    const [users, setUsers] = useState([])

    function handleSubmit(user) {
        setUsers([...users, user])
    }

    function handleDelete(user) {
        setUsers([...users, user])
    }

    return (
        <div>
            <Form onSubmit={handleSubmit || handleDelete } />
            <List users={users} />
        </div>
    )    
}

function Form(props) {
    const onSubmit = props.onSubmit

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <form>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value="marieange@mcgillnoncredit.desire2learn.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit" onClick={() => onSubmit({ name, email })}>
                Submit
            </button>
        </form>
    )
}

function List(props) {
    const users = props.users

    return (
        <ul>
            {users.map((user) => (
                <li key={user.email}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    )
}