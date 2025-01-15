import type { Meta, StoryObj } from '@storybook/react'

import { LogOut } from '@/components/Modal/LogOut'

const meta = {
  component: LogOut,
  tags: ['autodocs'],
} satisfies Meta<typeof LogOut>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: 'mihail@mail.ru',
  },
}
