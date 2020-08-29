import React from 'react';
import './App.css';
import {Feed, Header, Sidebar, Widget} from './components'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
}

export default App;
