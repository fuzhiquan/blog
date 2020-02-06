import React, { useState, useEffect } from 'react'

function useFetchUserList(url) {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(url).then(response => {
                return response.json()
            })
            console.log(data)
        }
        fetchData()
    }, [])
    function loadMore() {
        setOffset()
    }
    return [data, loadMore]
}
export default function() {
    const url = 'http://localhost:4000/posts'
    const [userList, getUserList] = useFetchUserList(url)

    return <div>
        <h2></h2>
    </div>
}