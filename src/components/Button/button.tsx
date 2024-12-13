import { ComponentPropsWithoutRef } from 'react'

type Variant = 'outline' | 'primary' | 'secondary' | 'text' | 'variant21'

type Props = {
  fullWidth?: boolean
  variant: Variant
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ className, fullWidth, value, variant, ...rest }: Props) => {
  return (
    <button {...rest} className={``}>
      {value}
    </button>
  )
}
