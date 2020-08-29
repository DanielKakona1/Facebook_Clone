import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';
import React from 'react';
import './Post.css'

interface Props {
  post:{
    profilePic: string;
    image?:string;
    username: string;
    timestamp: string;
    message:string;
  }
}

const Post = ({post}: Props) => {
  return (
    <div className='post'>
      <div className="post__top">
        <Avatar src={post.profilePic} className='post__avatar'/>

        <div className="post__topInfo">
  <h3>{post.username}</h3>
  <p>{post.timestamp}</p>
        </div>
      </div>

      <div className="post__bottom">
  <p>{post.message}</p>
      </div>
      <div className="post__image">
        <img src={post.image} alt="post"/>
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutline/>
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>

        <div className="post__option">
<AccountCircle/>
<ExpandMoreOutlined/>
        </div>
      </div>
    </div>
  )
}

export default Post
