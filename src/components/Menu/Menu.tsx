'use client'

import { useState } from 'react'
import { ReactSVG } from 'react-svg'

import Home from '@/app/page'
import Image from 'next/image'
import Link from 'next/link'

import styles from './menu.module.scss'
// import Search from '/menu/search.svg'

export const HOME_SVG_PATH = '/menu/home.svg'
export const HOME_ACTIVE_SVG_PATH = '/menu/home-active.svg'

export const PLUS_SVG_PATH = '/menu/plus-square.svg'
export const PLUS_ACTIVE_SVG_PATH = '/menu/plus-square-active.svg'

export const MESSAGE_SVG_PATH = '/menu/message.svg'
export const MESSAGE_ACTIVE_SVG_PATH = '/menu/message-active.svg'

export const SEARCH_SVG_PATH = '/menu/search.svg'
export const SEARCH_ACTIVE_SVG_PATH = '/menu/search-active.svg'

export const ACCOUNT_SVG_PATH = '/menu/account.svg'
export const ACCOUNT_ACTIVE_SVG_PATH = '/menu/account-active.svg'

export type MenuMode =
  | 'account'
  | 'create'
  | 'home'
  | 'message'
  | 'messenger'
  | 'plus'
  | 'profile'
  | 'search'

export type MenuIconsType = {
  icon: string
  mode: MenuMode
}

const icons: Array<MenuIconsType> = [
  {
    icon: HOME_SVG_PATH,
    mode: 'home',
  },
]

export const Menu = () => {
  const [menu, setMenu] = useState<MenuMode>('home')
  const [svgPath, setSvgPath] = useState(HOME_ACTIVE_SVG_PATH)

  // const SvgPath = (menu: string) => {
  //     let path
  //     return path
  // }

  const homeClickHandle = () => {
    setMenu('home')
  }

  const plusClickHandle = () => {
    setMenu('plus')
  }

  const messageClickHandle = () => {
    setMenu('message')
  }

  const searchClickHandle = () => {
    setMenu('search')
  }

  const accountClickHandle = () => {
    setMenu('account')
  }

  return (
    <div className={styles.menu}>
      <div className={styles.icon}>
        <ReactSVG className={styles.svgicon} src={HOME_ACTIVE_SVG_PATH} />
      </div>

      <Link href={'/'}>1</Link>

      <Link className={styles.icon} href={'/'}>
        <Image
          alt={''}
          className={styles.svgicon}
          height={24}
          onClick={homeClickHandle}
          src={HOME_ACTIVE_SVG_PATH}
          width={24}
        />
      </Link>

      <Link href={'/'}>
        <Image
          alt={''}
          className={''}
          height={24}
          onClick={plusClickHandle}
          src={menu == 'plus' ? PLUS_ACTIVE_SVG_PATH : PLUS_SVG_PATH}
          width={24}
        />
      </Link>

      <Link href={'/'}>
        <Image
          alt={''}
          className={''}
          height={24}
          onClick={messageClickHandle}
          src={menu == 'message' ? MESSAGE_ACTIVE_SVG_PATH : MESSAGE_SVG_PATH}
          width={24}
        />
      </Link>

      <Link href={'/'}>
        <Image
          alt={''}
          className={''}
          height={24}
          onClick={searchClickHandle}
          src={menu == 'search' ? SEARCH_ACTIVE_SVG_PATH : SEARCH_SVG_PATH}
          width={24}
        />
      </Link>

      <Link href={'/'}>
        <Image
          alt={''}
          className={''}
          height={24}
          onClick={accountClickHandle}
          src={menu == 'account' ? ACCOUNT_ACTIVE_SVG_PATH : ACCOUNT_SVG_PATH}
          width={24}
        />
      </Link>
    </div>
  )
}
