"use client"
import Image from 'next/image'
import styles from './Card.module.scss'
import Link from "next/link"
import {Post} from '@/common/api/posts/posts.types';


type Props={
    post:Post
}

export const Card = ({post}:Props) => {
    // Клиентская компонента, экспандит дескрипшен, есть карусель и редирект на профиль юзера

    return (
        <div className={styles.cardContainer}>
            <Image src={post.photos[0].url} width={234} height={240} alt={post.photos[0].photoDescription} className={styles.photo}/>
            <Link href={"/"} className={styles.userLink}>
                <Image width={36} height={36} src={"/img/defaultAvatar.jpg"} className={styles.avatarUser} alt={""} />
                <div className={styles.userName}>URL user name</div>
            </Link>
            <div className={styles.wasTimeAgo}>22 min ago</div>
{/*            <div className={showMore ? '' : styles.clampedText}>{post.text}</div>*/}
        </div>
    )
}

//Вынести в отдельную компоненту, будет переиспользваться
/*
<Link href={"/"} className={styles.userBlock}>
    <div className={styles.userAvatar}></div>
    <div className={styles.userName}></div>
</Link>*/
