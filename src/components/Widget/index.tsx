import React from 'react';
import './Widget.css'

interface Props {
  
}

const Widgets = (props: Props) => {
  return (
    <div className='widgets'>
      <iframe 
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&wiidth=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      title='Facebook'
      width="340"
      height="100%"
      style={{border:'none', overflow:'hidden'}}
      scrolling="no"
      frameBorder="0"
      allow="encrypted-media"
      >

      </iframe>
    </div>
  )
}

export default Widgets
