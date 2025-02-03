'use client'
import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import s from './Modal.module.scss' // Подключаем SCSS
import { CloseIcon } from '../../../../public/icons'
import Slider from '@/features/Slider/Slider'
import { Comment } from '@/features/PostModal/Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

interface ModalProps {
  postId: string
}

export const Modal = ({ postId }: ModalProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('postId')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={s.overlay}>
      <div className={s.container}>
        <button className={s.close} onClick={closeModal}>
          <CloseIcon />
        </button>

        <div className={s.body}>
          <div className={s.slider}>
            <Slider />
          </div>
          {/* right side start*/}
          <div className={s.discussion}>
            <div className={s.header}>
              <Avatar src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
              <h3>URLProfiele</h3>
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
                  2 243 <span>"Like"</span>
                </div>
              </>
              <span className={s.date}>July 3, 2021</span>
            </div>
          </div>
          {/* right side end*/}
        </div>
      </div>
    </div>
  )
}
