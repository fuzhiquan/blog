import * as types from './action-types'

export function register(payload) {
    return {type: types.REGISTER_REQUEST, payload}
}