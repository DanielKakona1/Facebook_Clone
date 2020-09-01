import React from 'react';
import './App.css';
import { Home, Login } from './pages';
import { useStateValue } from './StateProvider';

function App() {

  const { state } = useStateValue();

  return (
    <div className="app">
      {!state.user  ? 
      (<Login/>) : 
      (<Home/>)
      }

    </div>
  );
}

export default App;
