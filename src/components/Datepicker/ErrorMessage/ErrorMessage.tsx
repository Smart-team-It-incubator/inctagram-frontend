import { ErrorMessageProps } from '@/components/Datepicker/ErrorMessage/types'

import styles from './errorMessage.module.scss'

export const ErrorMessage = ({ mode }: ErrorMessageProps) => {
  return mode === 'single' ? (
    <span className={styles.error}>Error</span>
  ) : (
    <span className={styles.error}>Error, select current month or last month</span>
  )
}
