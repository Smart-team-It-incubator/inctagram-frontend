import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { Meta, StoryObj } from '@storybook/react'

import { Datepicker } from './Datepicker'

const meta = {
  component: Datepicker,
  tags: ['autodocs'],
} satisfies Meta<typeof Datepicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { mode: 'single', selected: undefined },
  render: () => {
    const [date, setDate] = useState<Date>(new Date())

    return <Datepicker mode={'single'} onSelect={setDate} selected={date} />
  },
}

export const RangeDatepicker: Story = {
  args: { mode: 'range', selected: undefined },
  render: () => {
    const [date, setDate] = useState<DateRange>({ from: new Date(), to: new Date() })

    return <Datepicker mode={'range'} onSelect={setDate} selected={date} />
  },
}

export const DisabledDatepicker: Story = {
  args: { mode: 'single', selected: undefined },
  render: () => {
    const [date, setDate] = useState<Date>(new Date())

    return <Datepicker disabled mode={'single'} onSelect={setDate} selected={date} />
  },
}
