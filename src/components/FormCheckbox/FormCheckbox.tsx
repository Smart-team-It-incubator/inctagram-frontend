'use client'

import React, { JSX } from 'react'
import { Control, useController } from 'react-hook-form'

import { Checkbox } from '../Checkbox'

interface FormCheckboxProps {
  control: Control<any>
  disabled?: boolean
  name: string
  title: JSX.Element | string
  rules?:any
}

export const FormCheckbox = ({ control, disabled = false, name, title }: FormCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({ control, name, rules:{ required: 'This field is required' }})

  const checkboxData = [
    {
      checked: value,
      disabled,
      id: name,
      onChange: (checked: boolean) => onChange(checked),
      title,
    },
  ]

  return <Checkbox data={checkboxData} />
}

