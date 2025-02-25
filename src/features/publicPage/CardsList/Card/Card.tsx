'use client'
import Image from 'next/image'
import styles from './Card.module.scss'
import {Post} from '@/common/api/posts/posts.types'
import {ExpandText} from '@/features/publicPage/CardsList/ExpandText'
import {useRouter} from 'next/navigation'
import {UserLink} from '@/components/UserLink/UserLink'

type Props = {
    post: Post
}

export const Card = ({post}: Props) => {
    const router = useRouter()

    const suitableLength = 99
    const lengthPhotoDescription = post.description

    const handleClick = () => {
        router.push(`/profile/${post.ownerId}?post=${post.id}`)
    }

    return (
        <div className={styles.cardContainer}>
            <Image
                src={post.images[0]?.url || '/img/defaultAvatar.jpg'}
                width={234}
                height={240}
                alt={post.description || 'no description'}
                className={styles.photo}
                onClick={handleClick}
            />
            <UserLink userId={post.ownerId} avatarUrl={post.avatarOwner} author={post.owner.firstName || 'unknown'}/>
            <div className={styles.wasTimeAgo}>22 min ago</div>
            {lengthPhotoDescription.length <= suitableLength ? (
                <span>{post.description}</span>
            ) : (
                <ExpandText text={post.description}/>
            )}
        </div>
    )
}
