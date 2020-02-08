import * as types from '../actions/action-types'

const initialState = {name: ''}
export default function(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            alert('LOGIN_SUCCESS')
            return {...state, ...action.payload};
        case types.REGISTER_FAIL:
            alert(110)
            return {...state}
        default:
            return state
    }
}