import React, { useEffect, useState } from 'react'
import db from '../../firebase'
import MessageSender from '../MessageSender'
import Post from '../Post'
import StoryReel from '../StoryReel'
import './Feed.css'

interface Props {}

interface posts {
  id: string
  data: Document
}

const Feed = (props: Props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        //@ts-ignore
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      )
  }, [])
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map((post, id) => (
        //@ts-ignore
        <Post key={id} post={post.data} />
      ))}
    </div>
  )
}

export default Feed
