import React from 'react'


export default function() {
    const url = 'http://localhost:4000/posts'
    const [userList, getUserList] = useFetchUserList(url)

    return <div>
        <h2></h2>
    </div>
}