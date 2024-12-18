'use client'

import React, { useState } from 'react'

import styles from './CustomSelect.module.css'

interface Option {
  value: string
  label: string
}

interface Props {
  options: Option[]
  title?: string
  placeholder?: string
  onChange?: (option: Option) => void
  disabled?: boolean
  size?: 'sm' | 'default'
}

export const CustomSelect = ({
  options,
  title,
  placeholder = 'Select an option',
  onChange,
  disabled = false,
  size,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const toggleDropdown = () => setIsOpen(prev => !prev)

  const handleSelectOption = (option: Option) => {
    setSelected(option.label)
    setIsOpen(false)
    if (onChange) {
      onChange(option)
    }
  }

  return (
    <div
      className={`${styles.selectWrapper} ${disabled ? styles.disabled : ''} ${size === 'sm' && styles.sm}`}
    >
      {title && <label className={styles.title}>{title}</label>}
      <div
        className={`${styles.select} ${isOpen ? styles.open : ''} ${disabled ? styles.disabled : ''}`}
        onClick={!disabled ? toggleDropdown : () => {}}
        tabIndex={0}
        onBlur={() => setTimeout(() => !disabled && setIsOpen(false), 100)}
      >
        <span>{selected || placeholder}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`} />
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map(option => (
            <li
              key={option.value}
              className={`${styles.option} ${disabled ? styles.disabledOption : ''}`}
              onClick={!disabled ? () => handleSelectOption(option) : () => {}}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
