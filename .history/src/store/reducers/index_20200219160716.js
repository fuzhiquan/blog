import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'
import info from './info'
import login from './login'
import register from './register'

export default combineReducers({
    info,
    login,
    register,
    router: connectRouter(history)
})