import { ComponentPropsWithoutRef } from 'react'
import { IconsType, Variant } from './Sidebar/types'
import { Icon } from './icon'
import styles from './Sidebar/sidebar.module.scss'

type MenuContentProps = {
  disabledItems?: Array<Variant>
  icons: Array<IconsType>
  isText?: boolean
} & ComponentPropsWithoutRef<'div'>

export const MenuContent = ({
  disabledItems = [],
  icons,
  isText = true,
  ...rest
}: MenuContentProps) => {
  const renderIcons = (icons: Array<IconsType>) =>
    icons.map(i => {
      const isDisabled = disabledItems.includes(i.variant)

      return (
        <Icon
          className={styles.icon}
          disabled={isDisabled}
          icon={i}
          key={i.variant}
          isText={isText}
        />
      )
    })
    
  return <div className={rest.className}>{renderIcons(icons)}</div>
}
