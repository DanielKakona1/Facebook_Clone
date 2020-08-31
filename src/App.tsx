import React, { useReducer } from 'react';
import './App.css';
import { Home, Login } from './pages';
import reducer, { initialState } from './reducer';
import { useStateValue } from './StateProvider';

function App() {
  
  const [state, dispatch] = useReducer(reducer,initialState)
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
