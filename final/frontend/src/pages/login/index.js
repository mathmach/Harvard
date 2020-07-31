import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { email, password })

            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('userName', response.data.name)

            history.push('/hospitals')
        } catch (error) {
            console.error(error)
            alert('Login failed, try again.')
        }
    }

    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="col my-auto">
                        <img className="img img-fluid" src={logoImg} alt="Be The Hero"></img>

                        <form onSubmit={handleLogin}>
                            <h1>Make your donation!</h1>

                            <div className="form-row">
                                <div className="form-group col-6">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="E-mail"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Login</button>

                            <Link className="back-link" to="/register">
                                <FiLogIn size={16} color="#E02041" /> Sign up
                            </Link>
                        </form>
                    </div>
                    <div className="col my-auto">
                        <img className="img img-fluid" src={heroesImg} alt="Heroes"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}