import React, { useState, useEffect } from 'react'

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
export default function() {
    const url = 'http://localhost:4000/posts'
    const [userList, getUserList] = useFetchUserList(url)

    return <div>
        {
            userList.map((user, index) => {
                return <p key={index}>{user['title']}</p>
            })
        }
    </div>
}