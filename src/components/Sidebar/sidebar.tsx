'use client'

import Link from "next/link"
import { Button } from "../Button"
import { HOME_ACTIVE_SVG_PATH, HOME_SVG_PATH, MenuMode } from "../Menu/Menu"
import { Item } from "./item"

import styles from "./sidebar.module.scss"
import { SVG_PATHS, SvgPath } from "./types"
import Image from "next/image"


export type MenuIconsType = {
    mode: MenuMode,
    paths: SvgPath[],
    text: string
}

export const icons: Array<MenuIconsType> = [
    {
    mode: "home",
    paths: ["/menu/home.svg", "/menu/home-active.svg"],
    text: 'Home'
    }
]

type Props = {
    icons: Array<MenuIconsType>
}


export const Sidebar = ({icons}: Props) => {

    return (
        <div className={styles.sidebar}>
            {icons.map(i => {
                return <Link href="/" key={i.mode}>
                <Image src={i.paths[0]} alt={''} width={24} height={24} className={''} />
            </Link>
                
            })}
        </div>
    )
}