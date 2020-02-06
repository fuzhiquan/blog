import * as types from '../actions/action-types'

const initialState = {}
export default function(state = initialState, action) {
    switch(action.type) {
        case types.INFO_FETCH_USER_REQUEST:
            return state;
        default:
            return state
    }
}