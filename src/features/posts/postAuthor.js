import React from 'react'
import {useSelector} from 'react-redux'
import {selectAllUsers} from '../users/userSlice'

function PostAuthor(userId) {
    console.log(userId)
    const users=useSelector(selectAllUsers)
    const author=users.find((user)=> user.id===userId.userId )
  return (
    <span>by {author?author.name:"Unknown author"}</span>
  )
}

export default PostAuthor