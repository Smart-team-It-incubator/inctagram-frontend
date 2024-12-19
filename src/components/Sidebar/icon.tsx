'use client'

import { ComponentPropsWithoutRef } from 'react'
import { ReactSVG } from 'react-svg'

import Link from 'next/link'

import styles from './sidebar.module.scss'

import { IconsType } from './types'

type IconProps = {
  disabled?: boolean
  icon: IconsType,
  isText?: boolean

} & ComponentPropsWithoutRef<'a'>

export const Icon = ({ disabled = false, icon, isText, ...rest }: IconProps) => {
  console.log(isText)
  return (
    <Link className={disabled ? `${styles.icon} ${styles.disabled}` : styles.icon} href={'/'}>
      <ReactSVG className={`${styles.iconImage}`} height={24} src={icon.paths[0]} width={24} />
      {isText && <div>{icon.text}</div>}
    </Link>
  )
}
