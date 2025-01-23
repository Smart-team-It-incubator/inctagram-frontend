import { Scroll } from './Scroll'
import { Meta, StoryObj } from '@storybook/react'

type ScrollProps = React.ComponentProps<typeof Scroll>

const meta: Meta<ScrollProps> = {
  title: 'Components/Scroll',
  component: Scroll,
  parameters: {
    controls: {
      exclude: ['direction'],
    },
  },
  argTypes: {
    children: { control: false },
  },
}

export default meta

export const Vertical: StoryObj<ScrollProps> = {
  args: {
    direction: 'vertical',
    children: (
      <div style={{ height: '500px' }}>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i}>❤️</div>
        ))}
      </div>
    ),
  },
}

export const Horizontal: StoryObj<ScrollProps> = {
  args: {
    direction: 'horizontal',
    children: (
      <div style={{ display: 'flex', gap: '10px' }}>
        {Array.from({ length: 500 }, (_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>
    ),
  },
}
