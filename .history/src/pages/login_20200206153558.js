import React, { useState } from 'react'
import './login.scss'

export default function(props) {
    let [state, setState] = useState({ isRegist: false })
    function onClickHandler(e) {

    }

    return <div className='login-container'>
        <ul className='login-switch-tabs'>
            <li onClick={onClickSwitchHandler}>登陆</li>
            <li onClick={onClickSwitchHandler}>注册</li>
        </ul>
        <ul>
            <li><label>用户名：</label><input /></li>
            <li><label>密&nbsp;&nbsp;&nbsp;码：</label><input /></li>
            <li><label>确认密码：</label><input /></li>
        </ul>
        <button onClick={onClickHandler}>点击登陆</button>
    </div>
}