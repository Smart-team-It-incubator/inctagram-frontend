import { DayFlag, DayPicker } from 'react-day-picker'

import 'react-day-picker/style.css'

import styles from './calendar.module.scss'

import { CalendarProps } from './types'

export const Calendar = (props: CalendarProps) => {
  return (
    <DayPicker
      {...props}
      className={styles.calendar}
      classNames={{
        [DayFlag.outside]: `${styles.outside}`,
        [DayFlag.today]: `${styles.today}`,
        button_next: `${styles.button_next}`,
        button_previous: `${styles.button_previous}`,
        caption_label: `${styles.caption_label}`,
        chevron: `${styles.chevron}`,
        day: `${styles.day}`,
        day_button: `${styles.day_button}`,
        month_caption: `${styles.month_caption}`,
        nav: `${styles.nav}`,
        range_end: `${styles.range_end}`,
        range_middle: `${styles.range_middle}`,
        range_start: `${styles.range_start}`,
        selected: `${styles.selected}`,
        weekday: `${styles.weekday}`,
      }}
      fixedWeeks
      modifiers={{
        weekend: { dayOfWeek: [0, 6] },
      }}
      modifiersClassNames={{
        weekend: styles.weekend,
      }}
      showOutsideDays
      weekStartsOn={1}
    />
  )
}
