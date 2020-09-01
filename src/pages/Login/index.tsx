import React from 'react'
import { Button } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../../reducer'
import './Login.css'

const Login = () => {
  const { state, dispatch } = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log('ACTIONNN', actionTypes.SET_USER)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
        console.log('user', state.user)
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src={require('../../assets/logo.png')} alt='logo' />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt='handler'
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
