import s from './Avatar.module.scss'

type Props = {
  className?: string
  src: string
}

export const Avatar = ({ className, src }: Props) => {
  return (
    <img
      src={src || 'https://rent.5ka.ru/img/media/no_img.png'}
      alt="avatar"
      className={`${className} ${s.avatar}`}
    />
  )
}
