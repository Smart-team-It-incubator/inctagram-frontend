import type { Meta, StoryObj } from '@storybook/react'
import { CustomInput } from '.'

const meta = {
  title: 'Components/Input',
  component: CustomInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { onChange: value => {
      console.log(value)
}
