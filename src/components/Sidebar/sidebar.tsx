'use client'

import styles from './sidebar.module.scss'

import { Icon } from './icon'
import { IconsType } from './types'

type Props = {
  icons: Array<IconsType>
  iconsFooter?: Array<IconsType>
  iconsMiddle?: Array<IconsType>
}

export const Sidebar = ({ icons, iconsFooter, iconsMiddle }: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        {icons.map(i => {
          return <Icon className={styles.icon} icon={i} key={i.variant} />
        })}
      </div>

      <div className={styles.sidebarMiddle}>
        {iconsMiddle &&
          iconsMiddle.map(i => {
            return <Icon className={styles.icon} icon={i} key={i.variant} />
          })}
      </div>

      <div className={styles.sidebarFooter}>
        {iconsFooter &&
          iconsFooter.map(i => {
            return <Icon className={styles.icon} icon={i} key={i.variant} />
          })}
      </div>
    </div>
  )
}
