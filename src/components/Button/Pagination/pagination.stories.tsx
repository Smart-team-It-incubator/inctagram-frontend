import { Meta, StoryObj } from '@storybook/react'

import { TablePagination } from './Pagination'

const meta: Meta<typeof TablePagination> = {
  argTypes: {
    currentPage: { control: { min: 1, type: 'number' } },
    onPageChange: { action: 'page changed' },
    onRowsPerPageChange: { action: 'rows per page changed' },

    totalPages: { control: { min: 1, type: 'number' } },
  },
  component: TablePagination,
  title: 'Components/TablePagination',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    onPageChange: (page: number) => console.log('Page changed to:', page),
    onRowsPerPageChange: (rows: number) => console.log('Rows per page changed to:', rows),
    rowsPerPageOptions: [5, 10, 25],
    totalPages: 10,
  },
}

export const WithCustomPage: Story = {
  args: {
    currentPage: 5,
    rowsPerPageOptions: [5, 10, 20, 50],
    totalPages: 50,
  },
}
