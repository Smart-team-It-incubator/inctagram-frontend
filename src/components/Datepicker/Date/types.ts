import type { DateRange } from 'react-day-picker'

import type { ComponentPropsWithoutRef } from 'react'

export type DateFormatterProps = {
  date: Date | DateRange | undefined
  disabled?: boolean
  error: boolean
} & ComponentPropsWithoutRef<'span'>
