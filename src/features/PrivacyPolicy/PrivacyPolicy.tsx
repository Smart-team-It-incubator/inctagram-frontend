'use client'

import styles from './privacyPolicy.module.scss'
import {usePrivateQuery} from '@/common/api/authApi';

export const PrivacyPolicy = () => {

  const { data: textPrivatePolicy} = usePrivateQuery();

  return (
    <>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.text}>
            {textPrivatePolicy}
        </p>
      </div>
    </>
  )
}
