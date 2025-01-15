import React, { ButtonHTMLAttributes, PropsWithoutRef, SVGProps } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './icon.module.scss'

export const ImageIcon = () => (
  
    <ReactSVG
      className={`${styles.iconImage}`}
      height={24}
      width={24}
      src={'/crop/image-outline.svg'}
      
    />
 
)

export const ImageButton = () => {
  return (
    
      <ImageIcon />
   
  )
}
