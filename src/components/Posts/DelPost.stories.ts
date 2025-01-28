import type { Meta, StoryObj } from '@storybook/react'

import {DelPost} from "@/components/Posts/DelPost";

const meta = {
    component: DelPost,
    tags: ['autodocs'],
} satisfies Meta<typeof DelPost>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    },
}
