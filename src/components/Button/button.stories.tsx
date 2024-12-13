import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button/button'

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Primary variant. Used as 'default'*/
export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
}
