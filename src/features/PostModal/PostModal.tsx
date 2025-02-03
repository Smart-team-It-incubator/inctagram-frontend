import { notFound } from 'next/navigation'
import { Modal } from './Modal/Modal'

type Props = {
  params: { postId: string }
}

const fetchPost = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!res.ok) return null
  return res.json()
}

export const PostModal = async ({ params }: Props) => {
  const post = await fetchPost(params.postId)
  console.log(post)

  // if (!post) return notFound()

  return <Modal postId={post} />
}
