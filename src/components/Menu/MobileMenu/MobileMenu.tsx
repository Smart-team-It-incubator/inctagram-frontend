import { ComponentPropsWithoutRef } from 'react'
import { iconsMobile } from '../data'
import { MenuContent } from '../menuContent'

import { IconsType, Variant } from '../Sidebar/types'
import styles from '../Sidebar/sidebar.module.scss'
import { MenuWrapper } from '../menuWrapper'


type MenuProps = {
  icons: Array<IconsType>,
  disabledItems?: Array<Variant>
} & ComponentPropsWithoutRef<'div'>

export const Menu = ({ icons, disabledItems = [], ...rest }: MenuProps) => {
  return (
    <MenuWrapper >
      <MenuContent icons={iconsMobile} isText={false} className={rest.className ? rest.className : styles.menu} disabledItems={disabledItems}/>
    </MenuWrapper>
  )
}
