'use client'

import React, { ChangeEvent, FocusEvent, useState, useRef } from 'react'
import { EyeIcon, SearchIcon } from '../../../public/icons'
import styles from './CustomInput.module.scss'

type inputTypes = 'text' | 'password' | 'email'

interface Props {
  title?: string
  textPlaceholder?: string
  onChange: (value: string) => void
  disabled?: boolean
  type?: inputTypes
  icon?: 'search' | 'eye' | ''
  errorMessage?: string
}

export const CustomInput = ({
  title = 'title',
  textPlaceholder = 'placeholder',
  onChange,
  disabled = false,
  type = 'text',
  icon = '',
  errorMessage,
  ...rest
}: Props) => {
  const [active, setActive] = useState(false)
  const [customType, setCustomType] = useState(type)
  const [focus, setFocus] = useState(false)
  const [error, setError] = useState(errorMessage)

  const activateInput = () => {
    setActive(true)
  }

  const deactivateInput = (e: FocusEvent<HTMLLabelElement, Element>) => {
    e.stopPropagation
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActive(false)
      setFocus(false)
    }
  }
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (!active) {
      setActive(true)
    }
    if (error) {
      setError(undefined)
    }
    onChange(e.currentTarget.value)
  }

  const showPassword = () => {
    customType === 'password' ? setCustomType('text') : setCustomType('password')
  }

  const childInputRef = useRef<HTMLInputElement>(null)

  const handleFocus = (e: FocusEvent<HTMLLabelElement, Element>) => {
    if (!disabled) {
      if (childInputRef.current) {
        childInputRef.current.focus()
        if (e.relatedTarget) {
          setFocus(true)
        }
      }
    }
  }
  const classNameLabel = `${styles.wrapperInput} 
  ${disabled ? styles.disabled : ''} 
  ${active ? styles.active : ''} 
  ${error && styles.error} 
  ${focus && styles['wrapperInput-focus']}
  `

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
      {title && <span className={styles.title}>{title}</span>}
      <label
        className={classNameLabel}
        onClick={activateInput}
        tabIndex={0}
        onFocus={e => handleFocus(e)}
        onBlur={e => deactivateInput(e)}
      >
        {icon === 'search' && (
          <div className={`${styles.search} ${active && styles.searchActive}`}>
            <SearchIcon fillColor={active ? 'white' : disabled ? '#4C4C4C' : ''} />
          </div>
        )}
        <input
          onChange={e => onChangeHandle(e)}
          placeholder={textPlaceholder}
          type={customType}
          className={`${styles.input} ${disabled ? styles.disabled : ''}`}
          ref={childInputRef}
          {...rest}
          tabIndex={-1}
        />
        {icon === 'eye' && (
          <div className={styles.eye} onClick={showPassword}>
            <EyeIcon fillColor={disabled ? '#4C4C4C' : ''} />
          </div>
        )}
      </label>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}
