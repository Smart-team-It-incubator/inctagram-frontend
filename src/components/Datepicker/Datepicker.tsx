'use client'

import React, { useState } from 'react'

import { DatePickerProps } from '@/components/Datepicker/types'
import { clsx } from 'clsx'

import styles from './datepicker.module.scss'

import { Calendar } from './Calendar'
import { DateFormatter, validateDate } from './Date'
import { ErrorMessage } from './ErrorMessage'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'

export const Datepicker = ({ disabled = false, ...props }: DatePickerProps) => {
  const [active, setActivate] = useState(false)
  const [error, setError] = useState(false)

  const onSelectHandler = (selectedDate: Date) => {
    setError(!validateDate(selectedDate))
  }

  const className = clsx(styles.button, {
    [styles.button_active]: active,
    [styles.button_disabled]: disabled,
    [styles.button_error]: error,
    [styles.range]: props.mode === 'range',
    [styles.single]: props.mode === 'single',
  })

  return (
    <Popover onOpenChange={setActivate}>
      <div className={styles.wrapper}>
        <PopoverTrigger asChild={false} className={className} disabled={disabled}>
          <DateFormatter
            className={styles.dateFormatter}
            date={props.selected}
            disabled={disabled}
            error={error}
          />
        </PopoverTrigger>
        {error && <ErrorMessage mode={props.mode} />}
      </div>
      <PopoverContent align={'start'}>
        <Calendar onDayClick={onSelectHandler} {...props} required />
      </PopoverContent>
    </Popover>
  )
}
