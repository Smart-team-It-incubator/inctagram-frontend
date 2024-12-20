/* eslint-disable perfectionist/sort-jsx-props */
/* eslint-disable react/button-has-type */
'use client'

import React, { useState } from 'react'

import styles from './pagination.module.scss'

type TablePaginationProps = {
  currentPage: number // Текущая страница
  onPageChange: (page: number) => void // Функция для изменения текущей страницы
  onRowsPerPageChange: (rowsPerPage: number) => void // Функция для изменения количества строк на странице
  rowsPerPageOptions: number[] // Опции для выбора количества строк на странице
  totalPages: number // Общее количество страниц
}

export const TablePagination = ({
  currentPage,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions,
  totalPages,
}: TablePaginationProps) => {
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(rowsPerPageOptions[0])

  // Функция для вычисления диапазона видимых страниц
  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5 // Показываем 5 страниц по умолчанию

    // Если текущая страница близка к начальной
    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
        pages.push(i)
      }
      if (totalPages > 5) {
        pages.push('...', totalPages)
      }
    }
    // Если текущая страница близка к последней
    else if (currentPage >= totalPages - 2) {
      pages.push(1, '...')
      for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
        pages.push(i)
      }
    }
    // Когда текущая страница в середине
    else {
      pages.push(1, '...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i)
        }
      }
      pages.push('...', totalPages)
    }

    return pages
  }

  const paginationRange = getVisiblePages()

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rowsPerPage = parseInt(event.target.value, 10)

    setSelectedRowsPerPage(rowsPerPage)
    onRowsPerPageChange(rowsPerPage)
    onPageChange(1) // Сбрасываем страницу на 1 при изменении количества записей на странице
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.rowsPerPage}>
        <label htmlFor={'rows-per-page'}>Rows per page:</label>
        <select
          id={'rows-per-page'}
          value={selectedRowsPerPage}
          onChange={handleRowsPerPageChange}
          className={styles.select}
        >
          {rowsPerPageOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={styles.button}
      >
        {'<'}
      </button>

      {paginationRange.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className={styles.ellipsis}>
            {page}
          </span>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={styles.button}
      >
        {'>'}
      </button>
    </div>
  )
}
