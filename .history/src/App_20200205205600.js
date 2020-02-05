import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

export default function(props) {
    return <Router>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/'>Login</Link>
            <Link to='/'>Info</Link>
        </div>
        <div>
            
        </div>
    </Router>
}