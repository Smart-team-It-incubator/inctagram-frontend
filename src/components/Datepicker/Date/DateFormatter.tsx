import { DateFormatterProps } from '@/components/Datepicker/Date/types'
import { clsx } from 'clsx'

import styles from './dateFormatter.module.scss'

import { CalendarIcon } from './CalendarIcon'
import { formatter } from './utils'

export const DateFormatter = ({
  date,
  disabled = false,
  error = false,
  ...restProps
}: DateFormatterProps) => {
  const render = () => {
    if (!date) {
      return <span {...restProps}>Pick a date</span>
    }

    if (date instanceof Date) {
      return <span className={styles.date}>{formatter(date)}</span>
    }

    if ('from' in date && 'to' in date) {
      return (
        <span className={styles.wrapper}>
          {date.from && date.to && (
            <span className={styles.data_wrapper}>
              <span className={styles.date}>{formatter(date.from)}</span>
              <span className={styles.dash}> - </span>
              <span className={styles.date}>{formatter(date.to)}</span>
            </span>
          )}
        </span>
      )
    }
  }

  return (
    <span
      {...restProps}
      className={clsx(styles.wrapper, { [styles.disabled]: disabled, [styles.error]: error })}
    >
      {render()}
      <CalendarIcon error={error} />
    </span>
  )
}
