'use client'

import Link from "next/link"
import styles from "./menu.module.scss"
import Image from "next/image"
import { useState } from "react"
import Home from "@/app/page"
// import Search from '/menu/search.svg'

const HOME_SVG_PATH = '/menu/home.svg'
const HOME_ACTIVE_SVG_PATH = '/menu/home-active.svg'

const PLUS_SVG_PATH = '/menu/plus-square.svg'
const PLUS_ACTIVE_SVG_PATH = '/menu/plus-square-active.svg'

const MESSAGE_SVG_PATH = '/menu/message.svg'
const MESSAGE_ACTIVE_SVG_PATH = '/menu/message-active.svg'

const SEARCH_SVG_PATH = '/menu/search.svg'
const SEARCH_ACTIVE_SVG_PATH = '/menu/search-active.svg'

const ACCOUNT_SVG_PATH = '/menu/account.svg'
const ACCOUNT_ACTIVE_SVG_PATH = '/menu/account-active.svg'

type MenuMode = 'home' | 'plus' | 'message' | 'search' | 'account'

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
        setMenu("plus")
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
            <Link href="/" >
                <Image src={menu == "home" ? HOME_ACTIVE_SVG_PATH : HOME_SVG_PATH} alt={''} width={24} height={24} className={''} onClick={homeClickHandle} />
            </Link>

            <Link href="/">
                <Image src={menu == "plus" ? PLUS_ACTIVE_SVG_PATH : PLUS_SVG_PATH} alt={''} width={24} height={24} className={''} onClick={plusClickHandle} />
            </Link>

            <Link href="/">
                <Image src={menu == "message" ? MESSAGE_ACTIVE_SVG_PATH : MESSAGE_SVG_PATH} alt={''} width={24} height={24} className={''} onClick={messageClickHandle} />
            </Link>

            <Link href="/">
                <Image src={menu == "search" ? SEARCH_ACTIVE_SVG_PATH : SEARCH_SVG_PATH} alt={''} width={24} height={24} className={''} onClick={searchClickHandle} />
            </Link>

            <Link href="/">
                <Image src={menu == "account" ? ACCOUNT_ACTIVE_SVG_PATH : ACCOUNT_SVG_PATH} alt={''} width={24} height={24} className={''} onClick={accountClickHandle} />
            </Link>
        </div>
    )
}