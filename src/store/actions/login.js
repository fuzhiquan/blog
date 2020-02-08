import * as types from './action-types'

export function login(payload) {
    return {type: types.LOGIN_REQUEST, payload}
}