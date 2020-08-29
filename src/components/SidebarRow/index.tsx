import { Avatar } from '@material-ui/core'
import React, {  ReactNode } from 'react'
import './SidebarRow.css'

interface Props {
  info:{
    title: string;
    Icon?: ReactNode,
    src?: string
  }
}

const SidebarRaw = ({info}: Props) => {
  return (
    <div className='sidebarRow'>
      {info.src && <Avatar src={info.src} />}
      {info.Icon && info.Icon }
      <h4>{info.title}</h4>
    </div>
  )
}

export default SidebarRaw
