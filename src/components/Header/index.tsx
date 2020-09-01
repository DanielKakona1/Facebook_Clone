import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStateValue } from '../../StateProvider'

interface Props {}

const Header = (props: Props) => {
  const { state } = useStateValue()
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={require('../../assets/logo.png')} alt='logo' />
        <div className='header__input'>
          <SearchIcon />
          <input placeholder='Search Facebook' type='text' />
        </div>
      </div>
      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon />
        </div>
        <div className='header__option'>
          <FlagIcon />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlinedIcon />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={state.user.photoURL} />
          <h4>{state.user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
