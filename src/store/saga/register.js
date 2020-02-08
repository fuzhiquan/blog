import { takeEvery, put, call, delay } from 'redux-saga/effects'
import * as types from '../actions/action-types'

export default function* () {
    const a = yield takeEvery(types.REGISTER_REQUEST, register)
    console.log('take: ',a)
}

function* register() {
    //yield delay(2000)
    const data = yield call(request)
    if(data) {
        yield put({type: types.REGISTER_SUCCESS, payload: data})
    }
}

function request() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fetch('http://localhost:4000/posts/1').then(resp => resp.json()))
        }, 1000)
    })
}