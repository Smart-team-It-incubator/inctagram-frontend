import React from 'react'
import { Scroll } from './Scroll'
import { Meta, StoryFn } from '@storybook/react'

type ScrollProps = React.ComponentProps<typeof Scroll>

const meta: Meta<ScrollProps> = {
  title: 'Components/Scroll',
  component: Scroll,
  argTypes: {
    direction: {
      table: { disable: true },
    },
    children: {
      control: false,
      description: 'Content inside the scroll container',
    },
  },
}

export default meta

const Template: StoryFn<ScrollProps> = args => <Scroll {...args} />

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'vertical',
  children: (
    <div style={{ height: '500px' }}>
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i}>❤️</div>
      ))}
    </div>
  ),
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'horizontal',
  children: (
    <div style={{ display: 'flex', gap: '10px' }}>
      {Array.from({ length: 50 }, (_, i) => (
        <span key={i}>❤️</span>
      ))}
    </div>
  ),
}
