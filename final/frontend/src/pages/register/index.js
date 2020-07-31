import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            password,
            confirmPassword
        }

        try {
            if (data.password !== data.confirmPassword) {
                alert(`Confirm Password not match`)
            } else {
                await api.post('user', data)
                alert(`Successful`)

                history.push('/')
            }
        } catch (error) {
            console.error(error.errno)
            alert('Error, try again.')
        }
    }

    return (
        <div className="register-container">
            <div className="container">
                <div className="row">
                    <div className="col my-auto">
                        <img className="img img-fluid" src={logoImg} alt="Be The Hero"></img>
                        <h1>Register</h1>
                        <p>Sign in and help fight COVID-19.</p>

                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041" /> Back to login
                        </Link>
                    </div>
                    <div className="col my-auto">
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name"
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="E-mail"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-row">
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
                                <div className="form-group col-6">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Confirm Password"
                                        required
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}