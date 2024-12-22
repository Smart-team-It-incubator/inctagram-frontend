import type { Meta, StoryObj } from '@storybook/react'

import { icons, iconsFooter, iconsMiddle } from '../data'
import { Sidebar } from './sidebar'


const meta: Meta<typeof Sidebar> = {
  argTypes: {
    disabledItems: {
      control: { type: 'check' },
      options: ['account', 'create', 'favor', 'home', 'logout', 'messenger', 'search', 'stat'],
    },
  },

  component: Sidebar,
  tags: ['autodocs'], // Для генерации документации
  title: 'Components/Menu/Sidebar',
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {
    disabledItems: [],
    icons: icons,
    iconsFooter: iconsFooter,
    iconsMiddle: iconsMiddle,
  },
}

export const HomeDisabled: Story = {
  args: {
    disabledItems: ['home'],
    icons: icons,
    iconsFooter: iconsFooter,
    iconsMiddle: iconsMiddle,
  },
}
