import { ReactNode } from 'react'
import styles from './Scroll.module.scss'

type Props = {
  children: ReactNode
  direction: 'horizontal' | 'vertical'
  style?: React.CSSProperties
}

export const Scroll = ({ children, direction }: Props) => {
  const scrollStyle = direction === 'vertical' ? styles.vertical : styles.horizontal

  return <div className={`${styles.wrapper} ${scrollStyle}`}>{children}</div>
}
