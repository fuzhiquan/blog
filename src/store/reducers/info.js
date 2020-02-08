import * as types from '../actions/action-types'

const initialState = {}
export default function(state = initialState, action) {
    switch(action.type) {
        case types.INFO_FETCH_USER_REQUEST:
            return state;
        case types.INFO_UPLOAD_SUCCESS:
            return {...state, message: action.message};
        default:
            return state
    }
}