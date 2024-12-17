'use client'

import * as React from 'react'
import { ChangeEvent, useState } from 'react'

import style from './textarea.module.scss'

type Props = {
  disabled?: boolean
  label?: string
  onChange?: (value: string) => void
  placeholder?: string
  textError?: string
} & React.ComponentProps<'textarea'>

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, disabled, label, onChange, placeholder, textError, ...rest }, ref) => {
    const [textPlaceholder, setTextPlaceholder] = useState(placeholder)
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e.currentTarget.value)
      }
    }

    return (
      <div className={`${style.wrapper}`}>
        {label && (
          <label className={`${style.label}`} htmlFor={label}>
            {label}
          </label>
        )}
        <textarea
          className={`${style.textarea} ${className} ${textError ? style.error : ''}`}
          disabled={disabled}
          id={label}
          onChange={e => onChangeText(e)}
          onFocus={() => setTextPlaceholder('')}
          placeholder={textPlaceholder}
          ref={ref}
          {...rest}
        />
        {textError && <span className={style.error}>{textError}</span>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
