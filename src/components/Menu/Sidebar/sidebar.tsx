'use client'
import React from 'react'

import styles from './sidebar.module.scss'

import { MenuContent } from '../menuContent'
import { MenuWrapper } from '../menuWrapper'
import { IconsType, Variant } from './types'

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
        className={styles.sidebarBlock}
        disabledItems={disabledItems}
        icons={icons}
        isText={isText}
      />

      {iconsMiddle && (
        <MenuContent
          className={styles.sidebarBlock}
          disabledItems={disabledItems}
          icons={iconsMiddle}
          isText={isText}
        />
      )}

      {iconsFooter && (
        <MenuContent
          className={styles.sidebarFooter}
          disabledItems={disabledItems}
          icons={iconsFooter}
          isText={isText}
        />
      )}
    </MenuWrapper>
  )
}
