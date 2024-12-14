'use client'

import Link from "next/link"
import styles from "./menu.module.scss"
import Image from "next/image"
import { useState } from "react"
// import Search from '/menu/search.svg'

type MenuMode = 'home' | 'add' | 'message' | 'search' | 'account'

export const Menu = () => {
    const [menu, setMenu] = useState<MenuMode>('home')

    return (
        <div className={styles.menu}>
             <Link href="/" >
                <Image src={'/menu/home.svg'} alt={''} width={24} height={24} className={styles.search}/>
            </Link>

            <Link href="/">
                <Image src={'/menu/plus-square.svg'} alt={''} width={24} height={24} className={styles.search}/>
            </Link>

            <Link href="/">
                <Image src={'/menu/message.svg'} alt={''} width={24} height={24} className={styles.search}/>
            </Link>
           
            <Link href="/">
                <Image src={'/menu/search.svg'} alt={''} width={24} height={24} className={styles.search}/>
            </Link>

            <Link href="/">
                <Image src={'/menu/account.svg'} alt={''} width={24} height={24} className={styles.search}/>
            </Link>
        </div>
    )
}