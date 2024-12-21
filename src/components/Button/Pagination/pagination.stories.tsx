import { useState } from 'react'

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
    rowsPerPageOptions: [5, 10, 25],
    totalPages: 10,
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page) // Обновляем локальное состояние
      args.onPageChange(page) // Вызываем action для Storybook
    }

    return <TablePagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />
  },
}
