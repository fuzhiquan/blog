import React, { useRef } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/register'

function Register(props) {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()

    const onClickHandler = function(e) {
        props.register({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        })
    }

    return <div>
        <h2>{props.author}</h2>
        <div>
            <div><label>用户名：</label><input ref={usernameRef} /></div>
            <div><label>密&nbsp;&nbsp;&nbsp;码：</label><input type='password' ref={passwordRef} /></div>
            <div><label>邮&nbsp;&nbsp;&nbsp;箱：</label><input type='email' ref={emailRef} /></div>
        </div>
        <button onClick={onClickHandler}>注册</button>
    </div>
}
export default connect(
    state => state.register,
    actions
)(Register)