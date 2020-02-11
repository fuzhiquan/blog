import { fork } from 'redux-saga/effects'
import * as types from '../../store/actions/action-types'
import register from './register'
import login from './login'

export default function* rootSaga() {
    yield fork (login)
    yield fork (register)
}