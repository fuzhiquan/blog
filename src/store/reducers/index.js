import { combineReducers } from 'redux'
import info from './info'
import login from './login'
import register from './register'

export default combineReducers({
    info,
    login,
    register
})