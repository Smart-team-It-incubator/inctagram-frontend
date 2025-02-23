'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Slider.module.scss'
import { ImageType } from '@/common/api/requestsSSR/ssr.types'

type Props = {
  photos: ImageType[]
  description: string
}

export default function Slider({ photos, description }: Props) {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex(prev => (prev + 1) % photos.length)
  const prevSlide = () => setIndex(prev => (prev - 1 + photos.length) % photos.length)

  return (
    <div className={styles.slider}>
      {photos.length > 1 && (
        <button className={styles.arrow} onClick={prevSlide}>
          &#10094;
        </button>
      )}

      <div className={styles.imageContainer}>
        {photos.length > 0 ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={index}
              src={photos[index].url}
              alt={description}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={styles.image}
            />
          </AnimatePresence>
        ) : null}
      </div>
      {photos.length > 1 && (
        <button className={styles.arrow} onClick={nextSlide}>
          &#10095;
        </button>
      )}

      {photos.length > 1 && (
        <div className={styles.dots}>
          {photos.map((_, i) => (
            <span
              key={i}
              className={index === i ? styles.activeDot : styles.dot}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
