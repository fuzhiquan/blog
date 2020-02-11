import React, { useState, useEffect, useRef, useCallback, ConcurrentMode } from 'react'
import { flushSync} from 'react-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions/info'
import './info.scss'

function useFetchUserList(url) {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const respon = await fetch(url).then(response => response.json())
            setData(respon)
        }
        fetchData()
    }, [offset])
    function loadMore() {
        setOffset()
    }
    return [data, loadMore]
}

function Info(props) {
    const inputRef = useRef()

    const url = 'http://localhost:4000/posts'
    const [userList, getUserList] = useFetchUserList(url)
    const [imageList, setImage] = useState([])
    const imgBase64Files = []
    const onInputChange = useCallback(function(e) {
        const files = e.target.files
        for(let i = 0; i < files.length; i++) {
            const reader = new FileReader()
            reader.readAsDataURL(files[i])

            reader.onload = function(e) {
                const arr = [].concat(imageList)
                arr.push(e.target.result)
                imgBase64Files.push(e.target.result)
                setImage(arr)
            }
        }
    }, [imageList])

    const onUploadHandler = function(e) {
        props.upload(imgBase64Files)
    }

    return <div className='info-container'>
        <h2>{props.message || '请上传图片'}</h2>
        <hr/>
        <input type='file' ref={inputRef} style={{width: 0}} onChange={onInputChange} multiple='multiple'/>
        <button onClick={() => {inputRef.current.click()}}>选择文件</button>
        <button onClick={onUploadHandler}>上传</button>
        <div className='info-detail'>
            {
                imageList.map((url, index) => {
                    return <img style={{height: '100px'}} key={index} src={url}/>
                })
            }
        </div>
        
    </div>
}

export default connect(
    state => state.info,
    actions
)(Info)