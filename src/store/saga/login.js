import { takeEvery, put, call } from 'redux-saga/effects'
import * as types from '../actions/action-types'

export default function* () {
    //yield takeEvery(types.LOGIN_REQUEST, request)
    yield takeEvery(types.REGISTER_REQUEST, request2)
    
}

function* request(action) {
    try{
        const data = yield call(fetchAPI)
        if(data) {
            yield put({type: types.LOGIN_SUCCESS, payload: action.payload})
        }
    }catch(e) {
        yield put({type: types.LOGIN_FAIL})
    }
    
}

function fetchAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(fetch('http://localhost:4000/posts/1').then(resp => resp.json()))
        }, 0)
    })
}

function* request2(action) {
    try{
        const data = yield call(fetchAPI2)
        if(data) {
            yield put({type: types.LOGIN_SUCCESS, payload: action.payload})
        }
    }catch(e) {
        yield put({type: types.LOGIN_FAIL})
    }
    
}
function fetchAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fetch('http://localhost:4000/posts/1').then(resp => resp.json()))
        }, 5000)
    })
}