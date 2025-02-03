import s from './Avatar.module.scss'

type Props = {
  className?: string
  src: string
}

export const Avatar = ({ className, src }: Props) => {
  return <img src={src} alt="avatar" className={`${className} ${s.avatar}`} />
}
