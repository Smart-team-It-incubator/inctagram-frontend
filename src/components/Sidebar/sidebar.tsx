'use client'

import { ReactSVG } from 'react-svg'

import Image from 'next/image'
import Link from 'next/link'

import styles from './sidebar.module.scss'

import { Icon } from './icon'
import { IconsType } from './types'

type Props = {
  icons: Array<IconsType>
}

export const Sidebar = ({ icons }: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        {icons.map(i => {
          return <Icon className={styles.icon} icon={i} key={i.mode} />
        })}
      </div>

      <div className={styles.sidebarMiddle}></div>

      <div className={styles.sidebarFooter}></div>
    </div>
  )
}
