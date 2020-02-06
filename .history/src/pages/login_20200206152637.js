import React from 'react'

export default function(props) {
    function onClickHandler(e) {

    }
    return <div>
        <ul>
            <li><label>用户名：</label><input /></li>
            <li><label>密&nbsp;&nbsp;&nbsp;码：</label><input /></li>
        </ul>
        <button onClick={onClickHandler}>点击登陆</button>
        <button onClick={onClickHandler}>点击注册</button>
    </div>
}