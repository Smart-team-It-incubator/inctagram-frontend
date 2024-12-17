import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: [
      { disabled: false, id: '1', title: 'Default' },
      { disabled: false, id: '2', title: 'Comfortable' },
      { disabled: false, id: '3', title: 'Compact' },
    ],
  },
}

export const AdditionalData: Story = {
  args: {
    data: [
      { disabled: false, id: '1', title: 'Default' },
      { disabled: false, id: '2', title: 'Comfortable' },
      { disabled: false, id: '3', title: 'Compact' },
      { disabled: false, id: '4', title: 'New' },
      { disabled: false, id: '5', title: 'Test' },
    ],
  },
}

export const WithoutData: Story = {
  args: {
    data: [],
  },
}

export const HaveDisabledElement: Story = {
  args: {
    data: [
      { disabled: true, id: '1', title: 'Default' },
      { disabled: false, id: '2', title: 'Comfortable' },
      { disabled: false, id: '3', title: 'Compact' },
    ],
  },
}
