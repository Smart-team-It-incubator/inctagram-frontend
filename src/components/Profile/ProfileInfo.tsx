'use client'

import styles from './Profile.module.scss'
import {Avatar} from "@/components/Profile/Avatar";
import {Description} from "@/components/Profile/Description";
import {Publication} from "@/components/Profile/Publication";


export const ProfileInfo = () => {

    return (
        <>
            <div className={styles.wrapper}>
                <Avatar
                    photo={'https://avatars.mds.yandex.net/i?id=a67d1816dc3d0d2b62f6efdab0ab7e5d_sr-12514612-images-thumbs&n=13'}/>
                <div className={styles.description}>
                    <Description name={"URLProfile"}
                                 descriptionProfile={'ipsum dolor sit amet, consectetur adipisicing elit Dolore ducimus molestiae'}
                    />
                </div>

            </div>
            <div className={styles.publication}>
                <Publication/>
            </div>
        </>
    )
}