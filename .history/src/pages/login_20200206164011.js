import React, { useState, useCallback } from 'react'
import './login.scss'
let pre;
function Child(props) {
    console.log('render child')
    return <div>child</div>
}
export default function(props) {
    let [state, setState] = useState({ isRegist: false })

    const onClickSwitchHandler = useCallback(function(e) {
        setState((preState) => ({isRegist: !preState.isRegist}))
    }, [])

    const onClickHandler = useCallback(function(e) {

    }, [])

    return <div className='login-container'>
        <ul className='login-switch-tabs'>
            <li onClick={onClickSwitchHandler}>{state.isRegist ? '登陆' : '注册'}</li>
        </ul>
        <ul>
            <li><label>用户名：</label><input /></li>
            <li><label>密&nbsp;&nbsp;&nbsp;码：</label><input /></li>
            {state.isRegist && <li><label>确认密码：</label><input /></li>}
        </ul>
        <Child/>
        <button onClick={onClickHandler}>{state.isRegist ? '注册' : '登陆'}</button>
    </div>
}