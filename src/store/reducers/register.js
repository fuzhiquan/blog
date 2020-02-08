import * as types from '../actions/action-types'

const initialState = {}
export default function(state = initialState, action) {
    switch(action.type) {
        case types.REGISTER_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state
    }
}