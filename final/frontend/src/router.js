import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'
import Hospital from './pages/hospital'
import Donate from './pages/donate'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/hospitals" component={Hospital}/>
                <Route path="/donate/:hospital_id" component={Donate}/>
            </Switch>
        </BrowserRouter>
    )
}