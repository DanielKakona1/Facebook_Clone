export const initialState ={
  user:null

}

export type initialStateType = typeof initialState;

export const actionTypes = {
  SET_USER: 'SET_USER'
}

export type Action = | {type: 'SET_USER'; user:object } 

const reducer = (state : initialStateType, action: any) => {
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