import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Tabs } from './Tabs';

const meta = {
    title: 'Example/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        backgroundColor: 'black',
        label: 'Tabs',

    },
};

export const Active: Story = {
    args: {
        label: 'Tabs',
        backgroundColor: "#3e3e60"
    },
};

export const Hover: Story = {
    args: {
        label: 'Tabs',
        backgroundColor: "#232336"
    },
};

export const Focus: Story = {
    args: {
        label: 'Tabs',
        backgroundColor: "black",
        primary: true,
        border: "border"
    },
};

export const Disabled: Story = {
    args: {
        label: 'Tabs',
        backgroundColor: "black",
        disabled: true
    },
};
