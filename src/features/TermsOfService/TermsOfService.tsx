'use client'

import styles from './termsOfService.module.scss'
import {useTermsQuery} from '@/common/api/authApi';

export const TermsOfService = () => {

  const { data:termsOfService} = useTermsQuery();

  return (
    <>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Terms of service</h1>
        <p className={styles.text}>
          {termsOfService}
        </p>
      </div>
    </>
  )
}
