'use client'

import { useSearchParams } from 'next/navigation'
import { Modal } from '@/components/Modal/Modal'
import { PostModal } from '../PostModal/PostModal'

type Props = {
  userId: string
}

export const PublicProfile = (props: Props) => {
  const { userId } = props

  const searchParams = useSearchParams()
  const postId = searchParams.get('post')
  const isShowPostModal = searchParams.has('post') //если в УРЛ есть "post", значит это был редирект с гл страницы и поверх профайла должна отрисоваться модалка с постом

  return (
    <div>
      <h1>Публичный профиль пользователя {userId}</h1>
      {isShowPostModal && postId && <PostModal params={{ postId }} />}
    </div>
  )
}
