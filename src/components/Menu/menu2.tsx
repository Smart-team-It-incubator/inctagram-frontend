import { ComponentPropsWithoutRef } from 'react'
import { iconsMobile } from '../Sidebar/data'
import { MenuContent } from '../Sidebar/menuContent'

import { IconsType } from '../Sidebar/types'
import styles from './menu.module.scss'
import { MenuWrapper } from '../Sidebar/MenuWrapper'

type MenuProps = {
  icons: Array<IconsType>
} & ComponentPropsWithoutRef<'div'>

export const Menu2 = ({ icons, ...rest }: MenuProps) => {
  return (
    <MenuWrapper >
      <MenuContent icons={iconsMobile} isText={false} className={rest.className ? rest.className : styles.menu} />
    </MenuWrapper>
  )
}
