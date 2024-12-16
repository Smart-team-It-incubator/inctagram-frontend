import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './sidebar'
import { IconsType } from './types'

// Пример данных для иконок
const icons: Array<IconsType> = [
  {
    paths: ['/menu/home.svg'],
    text: 'Home',
    variant: 'home',
  },
  {
    paths: ['/menu/message.svg'],
    text: 'Messages',
    variant: 'messenger',
  },
  {
    paths: ['/menu/account.svg'],
    text: 'Account',
    variant: 'account',
  },
]

const iconsMiddle: Array<IconsType> = [
  {
    paths: ['/menu/plus-square.svg'],
    text: 'Create',
    variant: 'create',
  },
  {
    paths: ['/menu/search.svg'],
    text: 'Search',
    variant: 'search',
  },
]

const iconsFooter: Array<IconsType> = [
  {
    paths: ['/menu/logout.svg'],
    text: 'Logout',
    variant: 'logout',
  },
]

// Настройка метаданных для Storybook
const meta: Meta<typeof Sidebar> = {
  args: {
    icons: icons,
    iconsFooter: iconsFooter,
    iconsMiddle: iconsMiddle,
  },
  component: Sidebar,
  tags: ['autodocs'], // Для генерации документации
  title: 'Components/Sidebar',
}

export default meta

// Определяем варианты (стории) для компонента
type Story = StoryObj<typeof Sidebar>

// Вариант с полным набором данных
export const Default: Story = {}
