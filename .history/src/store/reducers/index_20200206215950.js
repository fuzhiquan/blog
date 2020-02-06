import { combineReducer } from 'redux'

import info from './info'
import login from './login'

export default combineReducer({
    info,
    login
})