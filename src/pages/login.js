import React, { useState, useCallback, memo, useMemo, useRef, useEffect } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import store from '../store'
import * as actions from '../store/actions/login'
import './login.scss'
// const bundActions = bindActionCreators(actions, store.dispatch)
function Login(props) {
    const inputNameRef = useRef()
    // const [loginName, setLoginName] = useState({name: ''})
    // useEffect(() => {
    //     setLoginName(store.getState().login)
    //     store.subscribe(() => {
    //         setLoginName(store.getState().login)
    //     })
    // }, [])
    const onClickHandler = useCallback(function(e) {
        //bundActions.login({name: inputNameRef.current.value})
        props.login({name: inputNameRef.current.value})
    }, [])

    const dragStartHandler = function(e) {
        e.target.style.backgroundColor = '#ccc'
        e.dataTransfer.setData("text", e.target.innerText)
    }

    const dragHandler = function(e) {

    }

    const dragEndHandler = function(e) {
        e.target.style.backgroundColor = 'white'
    }

    const dragEnterHandler = function(e) {
        e.target.style.backgroundColor = 'pink'
    }

    const dragOverHandler = function(e) {
        e.preventDefault()
    }
    
    const dragLeaveHandler = function(e) {
        e.target.style.backgroundColor = 'white'
    }
    // onDrop事件是否起作用，需要在drapOver去除默认事件
    const dropHandler = function(e) {
        e.target.value = e.dataTransfer.getData('text')
    }

    const users = [
        {name: '张三'},
        {name: '里斯'},
        {name: '王武'},
        {name: '找刘'}
    ]
    return <div className='login-container'>
        <ul className='login-switch-tabs'>
            {
                props.name && <li>{`恭喜 ${props.name} 登陆成功！`}</li>
            }
        </ul>
        <ul>
            {
                users.map((user, index) => {
                    return <span 
                                key={index}
                                className='login-name'
                                draggable
                                onDragStart={dragStartHandler}
                                onDrag={dragHandler}
                                onDragEnd={dragEndHandler}
                                >
                                    {user['name']}
                                </span>
                })
            }
            <hr/>
            <li>
                <label>用户名：</label>
                <input disabled ref={inputNameRef}
                    placeholder='请将上方姓名拖入'
                    onDragEnter={dragEnterHandler}
                    onDragOver={dragOverHandler}
                    onDragLeave={dragLeaveHandler}
                    onDrop={dropHandler}
                />
            </li>
            <li>
                <label>密&nbsp;&nbsp;&nbsp;码：</label>
                <input />
            </li>
        </ul>
        <button onClick={onClickHandler}>登陆</button>
    </div>
}

export default connect(
    state => state.login,
    actions
)(Login)