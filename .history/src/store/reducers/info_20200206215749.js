import types from '../actions/action-types'

export default function(state = initialState, action) {
    switch(action.type) {
        case types.INFO_FETCH_USER_REQUEST:
            return state;
        default:
            return state
    }
}