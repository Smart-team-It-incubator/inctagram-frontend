'use client'

import styles from './signUp.module.scss'

import { GithubIcon } from '../../../public/icons/GithubIcon'
import { GoogleIcon } from '../../../public/icons/GoogleIcon'

export const SignUp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <div className={styles.iconsContainer}>
        <GoogleIcon />
        <GithubIcon />
      </div>
    </div>
  )
}
