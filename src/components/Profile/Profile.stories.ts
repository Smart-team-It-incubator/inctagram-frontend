import type { Meta, StoryObj } from '@storybook/react'

import {Profile} from "@/components/Profile/Profile";

const meta = {
    component: Profile,
    tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    },
}
