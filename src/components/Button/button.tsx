import { ComponentPropsWithoutRef } from 'react'

import { Slot } from '@radix-ui/react-slot'

import styles from './button.module.scss'

type Variant = 'outline' | 'primary' | 'secondary' | 'text' | 'variant21' | 'withIcon' | 'link'

type Props = {
  asChild?: boolean
  variant?: Variant
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ asChild, className, variant = 'primary', ...rest }: Props) => {
  const Component = asChild ? Slot : 'button'

  return (
    <Component {...rest} className={`${styles.button} ${styles[variant]} ${className}`} {...rest} />
  )
}
