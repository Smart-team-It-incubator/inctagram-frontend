'use client'

import { CSSProperties, useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  maxWidth?: string
  margin?: string
}

export const Container = ({ style, maxWidth = '865px', margin = '0 auto', children }: Props) => {
  const [dynamicMaxWidth, setDynamicMaxWidth] = useState(maxWidth)

  useEffect(() => {
    const updateMaxWidth = () => {
      setDynamicMaxWidth(window.innerWidth < 500 ? '360px' : maxWidth)
    }

    updateMaxWidth()
    window.addEventListener('resize', updateMaxWidth)

    return () => {
      window.removeEventListener('resize', updateMaxWidth)
    }
  }, [maxWidth])

  return <div style={{ maxWidth: dynamicMaxWidth, margin, ...style }}>{children}</div>
}
