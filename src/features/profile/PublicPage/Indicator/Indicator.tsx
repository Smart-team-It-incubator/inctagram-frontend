import s from './Indicator.module.scss'

type Props = {
  count: number
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
