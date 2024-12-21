import { Meta, StoryObj } from '@storybook/react'

import { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger } from './'

const meta = {
  component: PopoverContent,
  tags: ['autodocs'],
} satisfies Meta<typeof PopoverContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    align: 'center',
    alignOffset: 0,
    asChild: false,
    side: 'bottom',
    sideOffset: 0,
  },
  render: args => {
    return (
      <Popover>
        <PopoverTrigger>
          <button style={{ backgroundColor: 'lightblue', color: 'black' }}>Open</button>
        </PopoverTrigger>
        <PopoverContent {...args}>
          <div style={{ backgroundColor: 'blue', padding: '15px' }}>
            <p>Content</p>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

export const WithCloseButton: Story = {
  args: {
    align: 'center',
    alignOffset: 0,
    asChild: false,
    side: 'bottom',
    sideOffset: 0,
  },
  render: args => {
    return (
      <Popover>
        <PopoverClose>
          <button style={{ backgroundColor: 'lightcyan', color: 'black' }}>Close</button>
        </PopoverClose>
        <PopoverTrigger>
          <button style={{ backgroundColor: 'lightblue', color: 'black' }}>Open</button>
        </PopoverTrigger>
        <PopoverContent {...args}>
          <div style={{ backgroundColor: 'blue' }}>
            <p>Content</p>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

export const WithAnchorButton: Story = {
  args: {
    align: 'center',
    alignOffset: 0,
    asChild: false,
    side: 'bottom',
    sideOffset: 0,
  },
  render: args => {
    return (
      <Popover>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
          <PopoverAnchor>
            <button style={{ backgroundColor: 'lightcyan', color: 'black' }}>Anchor</button>
          </PopoverAnchor>
          <PopoverTrigger>
            <button style={{ backgroundColor: 'lightblue', color: 'black' }}>Open</button>
          </PopoverTrigger>
          <PopoverContent {...args}>
            <div style={{ backgroundColor: 'blue' }}>
              <p>Content</p>
            </div>
          </PopoverContent>
        </div>
      </Popover>
    )
  },
}
