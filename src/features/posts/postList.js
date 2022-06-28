import React from 'react'
import {useSelector} from 'react-redux'
import {selectAllPosts} from './postSlice'
import PostAuthor from './postAuthor'
function PostList() {
    const posts=useSelector(selectAllPosts)
    const renderedPosts=posts.map((post)=><article key={post.id} >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p className='postCredit'>
            <PostAuthor userId={post.userId}/>
        </p>
    </article>)

  return (
    <>
    <h1>posts</h1>
    {renderedPosts}
  </>)
}

export default PostList