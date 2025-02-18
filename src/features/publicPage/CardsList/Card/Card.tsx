'use client'
import Image from 'next/image'
import styles from './Card.module.scss'
import { Post } from '@/common/api/posts/posts.types'
import { ExpandText } from '@/features/publicPage/CardsList/ExpandText'
import { useRouter } from 'next/navigation'
import { useGetPublicProfileByUsernameQuery } from '@/common/api/users/usersApi'
import { useEffect, useState } from 'react'
import { UserLink } from '@/components/UserLink/UserLink'

type Props = {
  post: Post
}

export const Card = ({ post }: Props) => {
  const { data: user } = useGetPublicProfileByUsernameQuery(post.author)

  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined)
  const suitableLength = 99
  const lengthPhotoDescription = post.text.length
  const router = useRouter()

  const handleClick = () => {
    router.push(`/profile/${post.userId}?post=${post.id}`)
  }

  useEffect(() => {
    if (user?.profileImageUrl) {
      setAvatarUrl(user.profileImageUrl)
    }
  }, [user])

  return (
    <div className={styles.cardContainer}>
      <Image
        src={post.photos[0]?.url || '/img/defaultAvatar.jpg'}
        width={234}
        height={240}
        alt={post.photos[0]?.photoDescription || 'no description'}
        className={styles.photo}
        onClick={handleClick}
      />
      <UserLink userId={post.userId} avatarUrl={avatarUrl} author={post.author} />
      <div className={styles.wasTimeAgo}>22 min ago</div>
      {lengthPhotoDescription <= suitableLength ? (
        <span>{post.text}</span>
      ) : (
        <ExpandText text={post.text} />
      )}
    </div>
  )
}
