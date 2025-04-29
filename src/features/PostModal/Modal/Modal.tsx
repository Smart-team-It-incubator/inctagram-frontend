'use client'
import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import s from './Modal.module.scss'
import { CloseIcon } from '../../../../public/icons'
import Slider from '@/features/Slider/Slider'
import { Comment } from '@/features/PostModal/Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { format } from 'date-fns'
import { PostType } from '@/common/api/requestsSSR/ssr.types'

type ModalProps = {
  post: PostType
}

export const Modal = ({ post }: ModalProps) => {
  const { createdAt, avatarOwner, userName, images, description } = post

  const datePublication = formatDate(createdAt)

  const router = useRouter()
  const searchParams = useSearchParams()
  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('post')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className={s.overlay}>
      <div className={s.container}>
        <button className={s.close} onClick={closeModal}>
          <CloseIcon />
        </button>

        <div className={s.body}>
          <div className={s.slider}>
            <Slider photos={images} description={description} />
          </div>
          {/* right side start*/}
          <div className={s.discussion}>
            <div className={s.header}>
              <Avatar src={avatarOwner} />
              <h3>{userName}</h3>
            </div>
            <div className={s.comments}>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
            <div className={s.footer}>
              <>
                <div className={s.liked}>
                  <Avatar src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
                  <Avatar src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
                  <Avatar src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
                </div>
                <div className={s.like}>
                  {post.likesCount} <button>"Like"</button>
                </div>
              </>
              <span className={s.date}>{datePublication}</span>
            </div>
          </div>
          {/* right side end*/}
        </div>
      </div>
    </div>
  )
}

const formatDate = (isoString: string) => {
  return format(new Date(isoString), 'MMMM d, yyyy')
}
