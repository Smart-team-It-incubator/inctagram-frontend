'use client'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { ImageButton, ImageIcon } from './ImageIcon'
import { Button } from '@/components/Button'




export function PreviousValueTracker() {
  const [value, setValue] = useState<string>('') // Указываем тип состояния
  const prevValue = useRef<string | undefined>(undefined) // Типизация useRef
  console.log('Render')
  useEffect(() => {
    prevValue.current = value // Обновляем значение в референсе
    console.log('Start use Effect')
  }, [value])

  return (
    
     <ImageButton />
    
  )
}

export default PreviousValueTracker
