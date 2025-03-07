import { Meta, StoryObj } from '@storybook/react'
import Header from '@/components/Header/Header';


const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
      /*{ auth:
         control: { type: 'boolean' },
         description: 'Indicates whether the user is authenticated.',
       },*/
  },
  args: {
    auth: true,
  },
}

export default meta

export const Default: StoryObj<typeof Header> = {}
