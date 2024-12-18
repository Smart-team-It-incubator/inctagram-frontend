import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

const meta = {
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

/** Default variant.*/
export const Default: Story = {
  args: {
    children: 'Text-area',
    label: 'Text-area',
  },
}

/** Variant with error. */
export const Error: Story = {
  args: {
    children: 'Text-area',
    label: 'Text-area',
    textError: 'Text-error',
  },
}

/** Disabled variant. */
export const Disabled: Story = {
  args: {
    children: 'Text-area',
    disabled: true,
    label: 'Text-area',
  },
}
