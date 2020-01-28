import React, { useState, useEffect } from 'react'

import api from '../services/api'
import './Matchlist.css'

export default ({ match }) => {
    const loggedUser = match.params.id

    const [users, setUsers] = useState([])
    //const [logged, setLogged] = useState('')



    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: loggedUser
                }
            })
            setUsers(response.data)
        }
        loadUsers()
    }, [loggedUser])
    return (
        <div className="list-match">

            <div className="menu-match">
                <img src="" alt="" />
                <strong></strong>
            </div>
            <h1>Matches</h1>
            <ul>
                {users.map(user => {
                    return (

                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <a href={`https://github.com/${user.user}`}><strong>{user.name}</strong></a>
                        </li>
                    )
                }
                )}

            </ul>
        </div>
    )
}
