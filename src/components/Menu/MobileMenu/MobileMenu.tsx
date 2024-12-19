import { ComponentPropsWithoutRef } from 'react'
import { iconsMobile } from '../data'
import { MenuContent } from '../menuContent'

import { IconsType } from '../Sidebar/types'
import styles from '../Sidebar/sidebar.module.scss'
import { MenuWrapper } from '../menuWrapper'


type MenuProps = {
  icons: Array<IconsType>
} & ComponentPropsWithoutRef<'div'>

export const Menu = ({ icons, ...rest }: MenuProps) => {
  return (
    <MenuWrapper >
      <MenuContent icons={iconsMobile} isText={false} className={rest.className ? rest.className : styles.menu} />
    </MenuWrapper>
  )
}
