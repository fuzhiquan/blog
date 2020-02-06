import { combineReducers } from 'redux'

import info from './info'
import login from './login'

export default combineReducers({
    info,
    login
})