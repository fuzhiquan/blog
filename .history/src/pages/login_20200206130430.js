import React from 'react'

export default function(props) {
    function onClickHandler(e) {
alert(0)
    }
    return <div>
        <ul>
            <li><label>用户名：</label><input /></li>
            <li><label>密&nbsp;&nbsp;&nbsp;码：</label><input /></li>
        </ul>
        <button onClick={onClickHandler}>点击登陆</button>
    </div>
}