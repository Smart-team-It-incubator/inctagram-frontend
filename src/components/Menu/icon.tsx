'use client'

import { ComponentPropsWithoutRef } from 'react'
import { ReactSVG } from 'react-svg'

import Link from 'next/link'

import styles from './Sidebar/sidebar.module.scss'

import { IconsType } from './Sidebar/types'
import { useAppDispatch } from '@/common/store/hooks'
import { authActions } from '@/common/store/slices'
// import { authActions } from '@/common/store/slices'

type IconProps = {
  disabled?: boolean
  icon: IconsType
  isText?: boolean
} & ComponentPropsWithoutRef<'a'>

export const Icon = ({ disabled = false, icon, isText = true }: IconProps) => {
  // const isAuth = useAppSelector(state => state.authSlice.isAuth)
  const dispatch = useAppDispatch()

  if (icon.variant == 'logout') {
    return (
      <Link
        className={disabled ? `${styles.icon} ${styles.disabled}` : styles.icon}
        href={'/logout'}
        onClick={() => dispatch(authActions.setShowLogoutModal(true))}
      >
        <ReactSVG className={`${styles.iconImage}`} height={24} src={icon.paths[0]} width={24} />
        {isText && <div>{icon.text}</div>}
      </Link>
    )
  } else {
    return (
      <Link className={disabled ? `${styles.icon} ${styles.disabled}` : styles.icon} href={'/'}>
        <ReactSVG className={`${styles.iconImage}`} height={24} src={icon.paths[0]} width={24} />
        {isText && <div>{icon.text}</div>}
      </Link>
    )
  }
}
