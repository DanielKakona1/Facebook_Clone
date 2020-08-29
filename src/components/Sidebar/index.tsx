import React from 'react'
import './Sidebar.css'
import SidebarRaw from '../SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import {ExpandMoreOutlined} from '@material-ui/icons'

const data = [
  {
    title: 'COVID-19 Information Center',
    Icon: <LocalHospitalIcon/>
  },
   {
    title: 'Pages',
    Icon:<EmojiFlagsIcon/>
  },
  {
    title: 'friends',
    Icon:<PeopleIcon/>
  },
  {
    title: 'Messenger',
    Icon:<ChatIcon/>
  },
  {
    title: 'Marketplace',
    Icon:<StorefrontIcon/>
  },
  {
    title: 'Video',
    Icon:<VideoLibraryIcon/>
  }, 
   {
    title: 'Marketplace',
    Icon:<ExpandMoreOutlined/>
  }, 
]
const user = {
  src: 'https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.0-1/p148x148/25158068_835218369972528_2173013237921280775_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGdjgNE7hbcqmeenEqYswL7tXmxEVpaO5O1ebERWlo7kyycKN-n7hELs9XUXILCN5dNHlMJXuvrX90JXTmFQdPm&_nc_ohc=6xjypt7mpE4AX8HkJL8&_nc_ht=scontent.fjnb11-1.fna&tp=6&oh=bf81ee04f318cab0e18d7acef1b4ae77&oe=5F6F1778',
  title:'Daniel Kakona'
}

interface Props {
  
}

const Sidebar = (props: Props) => {
  return (
    <div className='sidebar'>
 <SidebarRaw info={user}/> 
{data.map((data,id)=> (
  <SidebarRaw key={id} info={data} />
))}
      
    </div>
  )
}

export default Sidebar
