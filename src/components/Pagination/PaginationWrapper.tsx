'use client'
import React, { useState } from 'react'

import { TablePagination } from './Pagination'

export const PaginationWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const totalPages = 50 // Пример: 20 страниц

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // console.log(`Current page: ${page}`)
  }

  const handleRowsPerPageChange = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage)
    // console.log(`Rows per page: ${rowsPerPage}`)
  }

  return (
    <div>
      <TablePagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]}
        totalPages={totalPages}
      />
    </div>
  )
}
