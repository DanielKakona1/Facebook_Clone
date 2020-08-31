import React from 'react';
import { Feed, Header, Sidebar, Widget } from '../../components';
import './Home.css'

interface Props {
  
}

const Home = (props: Props) => {
  return (
    <>
    <Header/>
      <div className="home">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
      </>

  )
}

export default Home
