'use client'

import React from 'react'
import { Control, useController } from 'react-hook-form'

/*
import { Checkbox } from '../Checkbox'

interface FormCheckboxProps {
  autoComplete?: string
  className?: string
  control: Control<any>
  disabled?: boolean
  errorMessage?: string
  icon?: '' | 'eye' | 'search'
  name: string
  rules?: any
  textPlaceholder?: string
  title?: string
  trigger: any
  type?: 'email' | 'password' | 'text'
}

export const FormInput = ({
  autoComplete,
  className,
  control,
  disabled = false,
  errorMessage,
  icon,
  name,
  rules,
  textPlaceholder,
  title,
  trigger,
  type = 'text',
}: FormCheckboxProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    rules,
  })

  const value = field.value ?? ''

  const handleBlur = () => {
    trigger(name)
  }

  return (
    <div>
      <Checkbox
        {...field}
        className={className}
        disabled={disabled}
        errorMessage={errorMessage || error?.message}
        icon={icon}
        onBlur={handleBlur} //сработает валидация
        textPlaceholder={textPlaceholder}
        title={title}
        type={type}
        value={value}
      />
    </div>
  )
}
*/
