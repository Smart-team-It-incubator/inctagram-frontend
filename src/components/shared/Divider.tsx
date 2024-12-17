import { CSSProperties } from 'react'

type Props = {
  color?: string
  height?: string
  style?: CSSProperties
}

export const Divider = ({ color = '#333', height = '1px', style }: Props) => {
  return <div style={{ height, backgroundColor: color, ...style }} />
}
