import type { Meta, StoryObj } from '@storybook/react'

import { icons, iconsMobile } from '../data'
import { Menu } from './MobileMenu'



const meta: Meta<typeof Menu> = {
  argTypes: {
    disabledItems: {
      control: { type: 'check' },
      options: ['home', 'create', 'messenger', 'search', 'account'],
    },
  },

  component: Menu,
  tags: ['autodocs'], // Для генерации документации
  title: 'Components/Menu/MobileMenu',
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
  args: {
    disabledItems: [],
    icons: icons
  }
}

export const HomeDisabled: Story = {
  args: {
    disabledItems: ['home'],
    icons: iconsMobile,
  }
}
