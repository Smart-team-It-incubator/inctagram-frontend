import { notFound } from 'next/navigation'
import { Modal } from './Modal/Modal'
import { getPostById } from '@/common/api/requestsSSR/SSRApi'
import { PostType } from '@/common/api/requestsSSR/ssr.types'

type Props = {
  params: { postId: string }
}

export const PostModal = async ({ params }: Props) => {
  const post: PostType = await getPostById(params.postId)

  if (!post) return notFound()

  return <Modal post={post} />
}
