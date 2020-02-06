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
    const p0 = pointArr.shift()
    pointArr.reduce((pre, next) => {
        console.log(next.name)
        return next
    }, p0)
}

const arr = [
    {name: 'p0', x: 10, y: 2},
    {name: 'p1', x: 12, y: 2},
    {name: 'p2', x: 14, y: 2},
    {name: 'p3', x: 16, y: 2},
]
getLocation(10, arr)