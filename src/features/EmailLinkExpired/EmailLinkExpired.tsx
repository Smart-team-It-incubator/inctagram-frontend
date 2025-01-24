import { ReactNode } from 'react'

import styles from './emailLinkExpired.module.scss'
import s from '@/features/NewPassword/LinkExpired/LinkExpired.module.scss'

type Props = {
  children: ReactNode
}
export const EmailLinkExpired = (props: Props) => {
  const { children } = props

  return (
    <div className={styles.ground}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Email verification link expired</h2>
        <p className={styles.text}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </p>
        {children}
        <img alt={'time'} className={s.img} src={'/img/email_expired.png'} />
      </div>
    </div>
  )
}