'use client'

import styles from './Profile.module.scss'
import {Following} from "@/components/Profile/Folloving";
import {Followers} from "@/components/Profile/Followers";
import {PublicCounter} from "@/components/Profile/PublicCounter";


export type Props = {
    name: string
    descriptionProfile: string
}


export const Description = ({name, descriptionProfile}: Props) => {

    return (
        <div className={styles.description}>
            {name ? name : "Name"}
            <div className={styles.follow}>
                <Following followings={5} />
                <Followers followers={8}/>
                <PublicCounter publicCounter={14}/>
            </div>
            {descriptionProfile}
        </div>
    )
}