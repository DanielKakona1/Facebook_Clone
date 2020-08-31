import React, {createContext, useContext, useReducer} from 'react';
import { Action, initialState } from './reducer';


export const StateContext  = createContext({})

export const StateProvider = ({reducer,initialState,children}:any )=> {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
  <StateContext.Provider value ={value}>
    {children}
  </StateContext.Provider>
)}

export const useStateValue = () => useContext(StateContext);