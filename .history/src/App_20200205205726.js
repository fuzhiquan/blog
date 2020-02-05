import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import LoginPage from './pages/login'
import InfoPage from './pages/info'

export default function(props) {
    return <Router>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/'>Login</Link>
            <Link to='/'>Info</Link>
        </div>
        <div>
            <Route path='/login' component={LoginPage} />
            <Route path='/login' component={InfoPage} />
        </div>
    </Router>
}