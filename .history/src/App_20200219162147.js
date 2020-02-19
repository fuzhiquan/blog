import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import history from './store/history'
import LoginPage from './pages/login'
import Register from './pages/register'
import InfoPage from './pages/info'
import './App.scss'

export default function(props) {
    return <ConnectedRouter history={history}>
        <div className='app-nav-container'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>register</Link>
            <Link to='/info'>Info</Link>
        </div>
        <div className='app-body-container'>
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={Register} />
            <Route path='/info' component={InfoPage} />
        </div>
    </ConnectedRouter>
}