import { Meta, StoryObj } from '@storybook/react'
import { Recaptcha } from './Recaptcha'

const meta: Meta<typeof Recaptcha> = {
  title: 'Components/Recaptcha',
  component: Recaptcha,
}

export default meta

export const Default: StoryObj<typeof Recaptcha> = {}
