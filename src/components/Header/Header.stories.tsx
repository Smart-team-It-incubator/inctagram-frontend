import { Meta, StoryFn } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    isAuth: {
      control: { type: 'boolean' },
    },
  },
} as Meta

const Template: StoryFn<{ isAuth: boolean }> = args => {
  return <Header {...args} />
}

export const Default = Template.bind({})
Default.args = {
  isAuth: true,
}
