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
    </div>
}


function getLocation(k, pointArr) {
    pointArr.reduce((pre, next) => {
        console.log(pre.name, next.name)
    })
}