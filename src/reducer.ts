type StateType = {
  user: any
}

export const initialState: StateType = {
  user: null
}


// Action Types
export enum actionTypes  {
  SET_USER = 'SET_USER'
}

export type Action = | {type: 'SET_USER'; user:object } 

// Reducer
const reducer = (state:StateType , action: any) => {
console.log('Actionnn',action);
switch(action.type){
  case actionTypes.SET_USER :
    return {
      ...state,
      user:  action.user
    }

  default: 
  return state;
}
}

export default reducer;