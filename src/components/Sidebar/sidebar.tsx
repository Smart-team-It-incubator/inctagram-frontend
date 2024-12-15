'use client'

import Link from "next/link"
import styles from "./sidebar.module.scss"
import { IconsType } from "./types"
import Image from "next/image"

type Props = {
    icons: Array<IconsType>
}

export const Sidebar = ({icons}: Props) => {

    return (
        <div className={styles.sidebar}>
            {icons.map(i => {
                return <Link href="/" key={i.mode}>
                <Image src={i.paths[0]} alt={''} width={24} height={24} className={''} />
            </Link>
                
            })}

            <div className="sidebar-middle"></div>

            <div className="sidebar-footer"></div>
        </div>
    )
}