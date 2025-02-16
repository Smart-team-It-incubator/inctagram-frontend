import s from './Indicator.module.scss'

type Props = {
  count: string
  description: string
}

export const Indicator = ({ count, description }: Props) => {
  return (
    <div className={s.wrapper}>
      {count}
      <span>{description}</span>
    </div>
  )
}
