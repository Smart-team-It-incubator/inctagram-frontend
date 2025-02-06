import { notFound } from 'next/navigation'
import { Modal } from './Modal/Modal'

type Props = {
  params: { postId: string }
}

const fetchPost = async (postId: string) => {
  const res = await fetch(`https://smart-reg.org.ru/api/v1/public/posts/${postId}`)

  if (!res.ok) return null
  return res.json()
}

export const PostModal = async ({ params }: Props) => {
  const post: PostType = await fetchPost(params.postId)
  console.log(post)

  // if (!post) return notFound()

  return <Modal post={post} />
}

export type PostType = {
  id: string
  text: string
  location: string
  createdAt: string
  userId: string
  photos: [photo]
}

export type photo = { id: string; url: string; photoDescription: string }
