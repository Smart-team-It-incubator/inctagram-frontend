'use client'
import Image from 'next/image'
import styles from './Card.module.scss'
import Link from 'next/link'
import {Post} from '@/common/api/posts/posts.types';
import {ExpandText} from '@/features/publicPage/CardsList/ExpandText';
import {useRouter} from 'next/navigation';


type Props = {
    post: Post
}

export const Card = ({post}: Props) => {
const router=useRouter()

    const suitableLength= 99
    const lengthPhotoDescription = post.text.length

    const handleImageClick=()=>{
    console.log("handleImageClick")
        router.push(`/profile/${post.userId}`)
    }

    return (
        <div className={styles.cardContainer}>
            <Image src={post.photos[0].url} width={234} height={240} alt={post.photos[0].photoDescription}
                   className={styles.photo} onClick={handleImageClick}/>
            <Link href={`/`} className={styles.userLink}>
                <Image width={36} height={36} src={'/img/defaultAvatar.jpg'} className={styles.avatarUser} alt={''}/>
                <div className={styles.userName}>URL user name</div>
            </Link>
            <div className={styles.wasTimeAgo}>22 min ago</div>
            {lengthPhotoDescription<=suitableLength ? (<span>{post.text}</span>): <ExpandText text={post.text}/>}
        </div>
    )
}

//Вынести в отдельную компоненту, будет переиспользваться
/*
<Link href={"/"} className={styles.userBlock}>
    <div className={styles.userAvatar}></div>
    <div className={styles.userName}></div>
</Link>*/
