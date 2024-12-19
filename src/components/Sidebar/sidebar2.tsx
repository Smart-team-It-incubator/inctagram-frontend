import React from 'react'
import { IconsType, Variant } from './types'


type SidebarProps = {
  disabledItems?: Array<Variant>
  icons: Array<IconsType>
  iconsFooter?: Array<IconsType>
  iconsMiddle?: Array<IconsType>
  isText?: boolean
}

const Sidebar = ({ icons } : SidebarProps) => {
  return (
  <div>
   
  </div>
  )
}

export default Sidebar
