import React from 'react'
import './Sidebar.css'
import SidebarRaw from '../SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'
import { useStateValue } from '../../StateProvider'

const data = [
  {
    title: 'COVID-19 Information Center',
    Icon: <LocalHospitalIcon />
  },
  {
    title: 'Pages',
    Icon: <EmojiFlagsIcon />
  },
  {
    title: 'friends',
    Icon: <PeopleIcon />
  },
  {
    title: 'Messenger',
    Icon: <ChatIcon />
  },
  {
    title: 'Marketplace',
    Icon: <StorefrontIcon />
  },
  {
    title: 'Video',
    Icon: <VideoLibraryIcon />
  },
  {
    title: 'Marketplace',
    Icon: <ExpandMoreOutlined />
  }
]

interface Props {}

const Sidebar = (props: Props) => {
  const { state } = useStateValue()

  const user = {
    src: state.user.photoURL,
    title: state.user.displayName
  }

  return (
    <div className='sidebar'>
      <SidebarRaw info={user} />
      {data.map((data, id) => (
        <SidebarRaw key={id} info={data} />
      ))}
    </div>
  )
}

export default Sidebar
