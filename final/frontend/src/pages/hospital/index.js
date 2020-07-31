import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { FiPower, FiDollarSign } from 'react-icons/fi'
import InfiniteScroll from 'react-infinite-scroll-component';

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Hospital() {
    const [hospitals, setHospitals] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const history = useHistory()

    const userName = localStorage.getItem('userName')

    async function loadHospitals() {
        console.log(total, hospitals.length)
        if (total > 0 && hospitals.length === total) {
            setHasMore(false)
            return
        }

        const response = await api.get('hospitals', {
            params: { page }
        })

        setHospitals([...hospitals, ...response.data])
        setTotal(Number(response.headers['x-total-count']))
        setPage(page + 1)
        setHasMore(true)
    }

    useEffect(() => {
        loadHospitals()
    }, [])

    function handleLogout() {
        localStorage.clear()
        history.push('/')
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

                <h1>Hospitals</h1>

                <InfiniteScroll
                    dataLength={hospitals.length}
                    next={loadHospitals}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}>
                    <div className="row" style={{ margin: 0 }}>
                        {hospitals.map(hospital => (
                            <div className="col-6 mb-4 d-flex align-items-stretch" key={hospital.id}>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{hospital.name}</h5>
                                        <p className="card-text">Total collected: {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(hospital.total)}</p>
                                        <Link className="back-link" to={`/donate/${hospital.id}`}>
                                            <FiDollarSign size={16} color="#E02041" /> Donate
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}