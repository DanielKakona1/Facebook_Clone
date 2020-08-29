import React from 'react'
import MessageSender from '../MessageSender'
import Post from '../Post'
import StoryReel from '../StoryReel'
import './Feed.css'

interface Props {
  
}
const data = [
  {
    image: require('../../assets/1.jpg'),
    profilePic:'https://yt3.ggpht.com/a/AATXAJx2Y_k9sbKPRPFDTy-yShwU7gWxPN_-BS_o6dEW3g=s176-c-k-c0x00ffffff-no-rj',
    username: 'William Candillon',
    message:" This works",
    timestamp:'12:30 AM'
    
  }
]

const Feed = (props: Props) => {
  return (
    <div className='feed'>
      <StoryReel/>
      <MessageSender/>
      { data.map ((data)=> (
        <Post post={data}/>
      )) }
    </div>
  )
}

export default Feed
