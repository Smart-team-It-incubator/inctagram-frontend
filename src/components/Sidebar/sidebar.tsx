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
            <div className={styles.sidebarHeader}></div>
            {icons.map(i => {
                return <Link href="/" key={i.mode}>
                <Image src={i.paths[0]} alt={''} width={24} height={24} className={''} />
            </Link>
                
            })}

            <div className={styles.sidebarMiddle}>
            <Link href="/" >
                <Image src={'/file.svg'} alt={''} width={24} height={24} className={''} />
            </Link>
            </div>

            <div className={styles.sidebarFooter}>
            <Link href="/" >
                <Image src={'/file.svg'} alt={''} width={24} height={24} className={''} />
            </Link>
            </div>
        </div>
    )
}