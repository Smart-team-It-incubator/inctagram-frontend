import Image from 'next/image'
import styles from './Card.module.scss'
import Link from "next/link"
import {useState} from 'react';

export const Card = () => {
    // Клиентская компонента, экспандит дескрипшен, есть карусель и редирект на профиль юзера

    const [expand, setExpand]=useState(false)

    return (
        <div className={styles.cardContainer}>
            <Image src="/" width={234} height={24} alt="post"/>
            <Link href={"/"} className={styles.userBlock}>
                <div className={styles.userAvatar}></div>
                <div className={styles.userName}></div>
            </Link>
            <div className={styles.wasTimeAgo}>22 min ago</div>
            <div className={styles.descriptionPhoto}></div>
        </div>
    )
}

//Вынести в отдельную компоненту, будет переиспользваться
/*
<Link href={"/"} className={styles.userBlock}>
    <div className={styles.userAvatar}></div>
    <div className={styles.userName}></div>
</Link>*/
