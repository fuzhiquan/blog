import * as types from './action-types'
import { push } from 'connected-react-router'
export function register(payload) {
    return {type: types.REGISTER_REQUEST, payload}
}
export function go(hash) {
    return push(hash)
}