'use client'

import styles from './Profile.module.scss'


export type Props = {
    followings: number
}


export const Following = ({followings}: Props) => {

    return (
        <div className={styles.description}>
            {followings} <span> Following </span>
        </div>

    )
}