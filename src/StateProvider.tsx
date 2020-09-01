import React, {createContext, useContext} from 'react';
import reducer, { initialState } from './reducer';

interface IContext {
  state?: any;
   dispatch?:any;
}

export const StateContext  = createContext<IContext>({})

export const StateProvider = ({children}:any )=> {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
  <StateContext.Provider value ={value}>
    {children}
  </StateContext.Provider>
)}

export const useStateValue = () => useContext(StateContext);