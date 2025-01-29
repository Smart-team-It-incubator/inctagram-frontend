'use client'

import styles from './Profile.module.scss'
import {ProfileContainer} from "@/components/Profile/ProfileContainer";
import {Header} from "@/components/Header/index";
import {ProfileInfo} from "@/components/Profile/ProfileInfo";




export const Profile = () => {

    return (
        <ProfileContainer className={styles.container}>
            <Header isAuth={false}/>
            <ProfileInfo />
        </ProfileContainer>
    )
}