'use client'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export const Post = ({ post }: any) => {
  const router = useRouter()
  const pathname = usePathname()
  const profileId = pathname.split('/').pop()
  const handleClick = (postId: number) => {
    router.push(`/profile/${profileId}?post=${postId}`)
  }

  return (
    <img alt="post" src={post.images[0].url} key={post.id} onClick={() => handleClick(post.id)} />
  )
}
