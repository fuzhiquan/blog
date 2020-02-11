import * as types from '../actions/action-types'

const initialState = {name: ''}
export default function(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state
    }
}