'use client'

import styles from './sidebar.module.scss'

import { Icon } from './icon'
import { IconsType, Variant } from './types'

type Props = {
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
}: Props) => {
  return (
    <div className={styles.sidebar}>
   
      <div className={styles.sidebarHeader}>
        {icons.map(i => {
          const isDisabled = disabledItems?.includes(i.variant)

          return (
            <Icon
              className={styles.icon}
              disabled={isDisabled}
              icon={i}
              key={i.variant}
              isText={isText}
            />
          )
        })}
      </div>

     { iconsMiddle && <div className={styles.sidebarMiddle}>
        {iconsMiddle &&
          iconsMiddle.map(i => {
            const isDisabled = disabledItems.includes(i.variant)

            return <Icon className={styles.icon} disabled={isDisabled} icon={i} key={i.variant} />
          })}
      </div>}

      {iconsFooter && <div className={styles.sidebarFooter}>
        {iconsFooter &&
          iconsFooter.map(i => {
            const isDisabled = disabledItems?.includes(i.variant)

            return <Icon className={styles.icon} disabled={isDisabled} icon={i} key={i.variant} />
          })}
      </div>}
    </div>
  )
}
