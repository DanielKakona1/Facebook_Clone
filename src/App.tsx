import React from 'react';
import './App.css';
import {Header, Sidebar} from './components'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
