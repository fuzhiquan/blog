import React, { useState, useEffect } from 'react'

function useFetchUserList(url) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function loadMore() {
            const response = await fetch(url).then(response => response.data)
        }
        loadMore()
    }, [])
}
export default function() {
    const url = 'http://localhost:4000/posts'
    const [userList, getUserList] = useFetchUserList(url)

    return <div>
        <h2></h2>
    </div>
}