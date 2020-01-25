import React, { useState } from 'react'
import './Login.css'

import api from '../services/api'

import 'font-awesome/css/font-awesome.min.css'
import Logo from '../components/logo/Logo'
import Github from '../components/logo/Github'
import Likedin from '../components/logo/Likedin'


export default function Login({ history }) {
    const [username, setUsername] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/devs', {
            username,
        })

        const { _id } = response.data
        console.log(response.data);
        history.push(`/dev/${_id}`)
    }

    return (
        <div className="login-container">
            <div className="login-menu">
                <div className="banner">
                    <Logo className="logo" />
                    <p className="chamado">
                        É só entrar e encontrar outros devs que curte as mesmas coisas que você
                </p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <p className="p1">Entre com a sua conta do Github!</p>
                    <input
                        type="text"
                        placeholder="Digite seu usuário no Github"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                    <p>Não possui uma conta no github?
não tem problema é só criar uma</p>
                    <a href="https://github.com/join?source=header-home" className="cadastrargit">Cadastrar</a>
                </form>
            </div>
            <footer>
                <div className="footer-icons">
                    <p>contato do desenvolvedor</p>
                    <Github />
                    <Likedin />
                </div>
            </footer>
        </div>
    )
}