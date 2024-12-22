'use client'
import React from 'react'
import { IconsType, Variant } from './types'

import styles from './sidebar.module.scss'

import { MenuContent } from '../menuContent'
import { MenuWrapper } from '../menuWrapper'

type SidebarProps = {
  disabledItems?: Array<Variant>
  icons: Array<IconsType>
  iconsFooter?: Array<IconsType>
  iconsMiddle?: Array<IconsType>
  isText?: boolean
}

export const Sidebar = ({
  disabledItems = [],
  icons,
  iconsFooter,
  iconsMiddle,
  isText = true,
}: SidebarProps) => {
  return (
    <MenuWrapper className={styles.sidebar}>
      <MenuContent
        icons={icons}
        className={styles.sidebarBlock}
        disabledItems={disabledItems}
        isText={isText}
      />

     { iconsMiddle && <MenuContent
        icons={iconsMiddle}
        className={styles.sidebarBlock}
        disabledItems={disabledItems}
        isText={isText}
      />}

{ iconsFooter && <MenuContent
        icons={iconsFooter}
        className={styles.sidebarFooter}
        disabledItems={disabledItems}
        isText={isText}
      />}
    </MenuWrapper>
  )
}


