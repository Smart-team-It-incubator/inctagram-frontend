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
      { disabled: false, id: '1', title: 'Default', onChange: () => {}, checked: false },
      { disabled: false, id: '2', title: 'Comfortable', onChange: () => {}, checked: false },
      { disabled: false, id: '3', title: 'Compact', onChange: () => {}, checked: false },
    ],
  },
}

export const AdditionalData: Story = {
  args: {
    data: [
      { disabled: false, id: '1', title: 'Default', onChange: () => {}, checked: false },
      { disabled: false, id: '2', title: 'Comfortable', onChange: () => {}, checked: false },
      { disabled: false, id: '3', title: 'Compact', onChange: () => {}, checked: false },
      { disabled: false, id: '4', title: 'New', onChange: () => {}, checked: false },
      { disabled: false, id: '5', title: 'Test', onChange: () => {}, checked: false },
    ],
  },
}

export const HaveDisabledElement: Story = {
  args: {
    data: [
      { disabled: true, id: '1', title: 'Default', onChange: () => {}, checked: false },
      { disabled: false, id: '2', title: 'Comfortable', onChange: () => {}, checked: false },
      { disabled: false, id: '3', title: 'Compact', onChange: () => {}, checked: false },
    ],
  },
}
