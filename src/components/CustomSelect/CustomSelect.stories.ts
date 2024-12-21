import type { Meta, StoryObj } from '@storybook/react'
import { CustomSelect } from '.'

const meta = {
  title: 'Components/Select',
  component: CustomSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Select-box' },
      { value: '2', label: 'Test2' },
      { value: '3', label: 'Test3' },
      { value: '4', label: 'Test4' },
    ],
    title: 'Select-box',
    onChange: e => console.log(e),
  },
}
