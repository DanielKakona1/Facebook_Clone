import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css'

interface Props {
  story:{
    img:string;
    profile:string;
    title:string;

  }
}

const Story = ({story}: Props) => {
  return (
    <div style={{backgroundImage:`url(${story.img})`}}  className='story'>
      <Avatar className='story__avatar' src={story.profile} />
  <h4> {story.title}</h4>

    </div>
  )
}

export default Story
