'use client'

import { useState } from 'react'
import { RecaptchaIcon } from './RecaptchaIcon'

import styles from './Recaptcha.module.scss'

type Props = {
  callBack?: (state: boolean) => void
}

type RecaptchaState = 'default' | 'hover' | 'checked' | 'loading' | 'error' | 'expired'

export const Recaptcha = ({ callBack }: Props) => {
  const [captchaState, setCaptchaState] = useState<RecaptchaState>('default')

  const handleCheckboxChange = () => {
    if (captchaState === 'loading' || captchaState === 'error') return

    if (captchaState === 'checked') {
      setCaptchaState('default')
      callBack && callBack(false)
    } else {
      setCaptchaState('loading')
      setTimeout(() => {
        setCaptchaState('checked')
        callBack && callBack(true)
      }, 500)
    }
  }

  return (
    <div className={captchaState === 'error' ? styles.errorBorder : ''}>
      <div className={`${styles.wrapper} ${styles[captchaState]}`}>
        <div className={styles.checkboxWrapper}>
          {captchaState === 'loading' ? (
            <div className={styles.spinner}></div>
          ) : (
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={captchaState === 'checked'}
              onChange={handleCheckboxChange}
            />
          )}
          <p className={styles.text}>I'm not a robot</p>
        </div>

        <RecaptchaIcon />
        {captchaState === 'expired' && (
          <p className={styles.expiredText}>Verification expired. Check the checkbox again.</p>
        )}
      </div>

      <p className={styles.errorText}>
        {captchaState === 'error' && 'Please verify that you are not a robot'}
      </p>
    </div>
  )
}
