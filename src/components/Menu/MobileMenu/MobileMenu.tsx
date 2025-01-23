import { ComponentPropsWithoutRef } from 'react'

import styles from '../Sidebar/sidebar.module.scss'

import { IconsType, Variant } from '../Sidebar/types'
import { iconsMobile } from '../data'
import { MenuContent } from '../menuContent'
import { MenuWrapper } from '../menuWrapper'

type MenuProps = {
  disabledItems?: Array<Variant>
  icons: Array<IconsType>
} & ComponentPropsWithoutRef<'div'>

export const Menu = ({ disabledItems = [], icons, ...rest }: MenuProps) => {
  return (
    <MenuWrapper>
      <MenuContent
        className={rest.className ? rest.className : styles.menu}
        disabledItems={disabledItems}
        icons={iconsMobile}
        isText={false}
      />
    </MenuWrapper>
  )
}
