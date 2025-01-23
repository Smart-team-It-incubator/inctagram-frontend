import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    isAuth: {
      control: { type: 'boolean' },
      description: 'Indicates whether the user is authenticated.',
    },
  },
  args: {
    isAuth: true,
  },
}

export default meta

export const Default: StoryObj<typeof Header> = {}
