import { Meta, StoryObj } from '@storybook/react'

import { Radiogroup } from './Radiogroup'

const meta = {
  component: Radiogroup,
  tags: ['autodocs'],
} satisfies Meta<typeof Radiogroup>

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
      { disabled: false, id: '4', title: 'Test' },
      { disabled: false, id: '5', title: 'New' },
      { disabled: false, id: '6', title: 'NewNew' },
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
      { disabled: false, id: '1', title: 'Default' },
      { disabled: false, id: '2', title: 'Comfortable' },
      { disabled: true, id: '3', title: 'Compact' },
    ],
  },
}
