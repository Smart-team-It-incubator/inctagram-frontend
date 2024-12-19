'use client'

import { useState } from 'react'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/style.css'

export const DatePicker = () => {
  const [selected, setSelected] = useState<Date | undefined>()

  return (
    <DayPicker
      captionLayout={'label'}
      footer={selected ? `Selected: ${selected.toLocaleDateString()}` : 'Pick a day.'}
      mode={'single'}
      onSelect={setSelected}
      selected={selected}
    />
  )
}
