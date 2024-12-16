import { Meta, StoryFn } from '@storybook/react'

import { Sidebar } from './sidebar' // Импортируем Sidebar

import { IconsType, SVG_PATHS } from './types'

const meta = {
  component: Sidebar,
  tags: ['autodocs'], // Включаем автодокументацию
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta
// Пример данных иконок
const sampleIcons: IconsType[] = [
  { paths: [SVG_PATHS.home], text: 'Home', variant: 'home' },
  { paths: [SVG_PATHS.messenger], text: 'Messendger', variant: 'messenger' },
  { paths: [SVG_PATHS.profile], text: 'Account', variant: 'account' },
]

const footerIcons: IconsType[] = [{ paths: [SVG_PATHS.logout], text: 'Log Out', variant: 'logout' }]

// Шаблон для создания историй
const Template: StoryFn<typeof Sidebar> = args => <Sidebar {...args} />

// Истории
export const Default = Template.bind({})
Default.args = {
  icons: sampleIcons,
  iconsFooter: footerIcons,
}

export const WithMiddleIcons = Template.bind({})
WithMiddleIcons.args = {
  icons: sampleIcons,
  iconsFooter: footerIcons,
  iconsMiddle: [
    { paths: [SVG_PATHS.stat], text: 'Statistics', variant: 'stat' },
    { paths: [SVG_PATHS.favor], text: 'Favorites', variant: 'favor' },
  ],
}

export const OnlyIcons = Template.bind({})
