import * as types from './action-types'

export function upload(files) {
    return function({dispatch, getState}) {
        fetch('http://localhost:4000/posts/1').then(response => {
            response.json().then(data => {
                dispatch({type: types.INFO_UPLOAD_SUCCESS, message: '上传成功'})
            })
        })
    }
}