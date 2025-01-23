import React, { ReactNode } from 'react'

type WrapperProps = {
  children: ReactNode
  className?: string // Строка классов для индивидуальной стилизации
}

export const MenuWrapper = ({ children, className }: WrapperProps) => {
  return <div className={className}>{children}</div>
}
