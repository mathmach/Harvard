import React, { useEffect, useState } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { FiPower, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Donate() {
    const [hospital, setHospital] = useState([])
    const [value, setValue] = useState([])

    const { hospital_id } = useParams()

    const history = useHistory()

    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')

    useEffect(() => {
        api.get(`hospital/${hospital_id}`).then(response => {
            setHospital(response.data)
        })
    }, [hospital_id])

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    async function handleDonate(e) {
        e.preventDefault()

        const data = {
            hospital_id,
            value
        }

        try {
            await api.post('donation', data, {
                headers: {
                    Authorization: userId
                }
            })
            api.get(`hospital/${hospital_id}`).then(response => {
                setHospital(response.data)
            })

            alert(`Successful`)
        } catch (error) {
            console.error(error.errno)
            alert('Error, try again.')
        }
    }

    return (
        <div className="hospital-container">
            <div className="container">
                <header className="row">
                    <div className="col-3 my-auto">
                        <img className="img img-fluid" src={logoImg} alt="Be The Hero"></img>
                    </div>
                    <div className="col-7 my-auto">
                        <span>Welcome, {userName}</span>
                    </div>
                    <div className="col-2 my-auto">
                        <button onClick={handleLogout} className="btn btn-outline-primary float-right" type="button">
                            <FiPower size={18} color="#E02041" />
                        </button>
                    </div>
                </header>

                <h1>
                    <Link className="mr-2" to="/hospitals">
                        <FiArrowLeft size={24} color="#E02041" />
                    </Link>
                    {hospital.name}
                </h1>

                <div className="row">
                    <div className="col-12">{hospital.street}, {hospital.number} - {hospital.state} - {hospital.zip}</div>
                    <div className="col-12 mb-4"><a href="tel:{hospital.phone}">{hospital.phone}</a></div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total collected:</h5>
                                <p className="card-text">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(hospital.total)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col my-auto">
                        <form onSubmit={handleDonate}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Value"
                                    required
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Donate</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}