import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

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
    children: 'Button',
    disabled: false,
    onClick: action('Button clicked'),
    variant: 'primary',
  },
}

/** Secondary variant.*/
export const Secondary: Story = {
  args: {
    children: 'Button',
    disabled: false,
    onClick: action('Button clicked'),
    variant: 'secondary',
  },
}

/** Outline variant.*/
export const outline: Story = {
  args: {
    children: 'Button',
    disabled: false,
    onClick: action('Button clicked'),
    variant: 'outline',
  },
}

/** Link variant.*/
export const LinkAsButton: Story = {
  args: {
    asChild: false,
    children: (
      <a href={'https://www.google.com/'} target={'_blank'}>
        Go to Google
      </a>
    ),
    disabled: false,
    variant: 'link',
  },
}
