'use client'

import styles from './Profile.module.scss'


export type Props = {
    followers: number
}


export const Followers = ({followers}: Props) => {

    return (
        <div className={styles.description}>
            {followers} <span> Followers </span>
        </div>

    )
}