'use client'

import styles from './Profile.module.scss'


export type Props = {
    publicCounter: number
}


export const PublicCounter = ({publicCounter}: Props) => {

    return (
        <div className={styles.description}>
            {publicCounter} <span> Publication </span>
        </div>
    )
}