'use client'

import { ComponentPropsWithoutRef } from 'react'
import { ReactSVG } from 'react-svg'

import Link from 'next/link'

import styles from './sidebar.module.scss'

import { IconsType } from './types'

type IconProps = {
  disabled?: boolean
  icon: IconsType
} & ComponentPropsWithoutRef<'a'> &
  ComponentPropsWithoutRef<'button'>

export const Icon = ({ disabled = false, icon, ...rest }: IconProps) => {
  return (
    <Link className={`${styles.icon} ${styles.disabled}`} href={'/'}>
      <ReactSVG className={`${styles.iconImage}`} height={24} src={icon.paths[0]} width={24} />
      <div>{icon.text}</div>
    </Link>
  )
}
