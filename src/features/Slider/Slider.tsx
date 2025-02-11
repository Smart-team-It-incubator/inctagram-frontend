'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Slider.module.scss'
import { photo } from '../PostModal/PostModal'

type Props = {
  photos: [photo]
}

export default function Slider({ photos }: Props) {
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
        <AnimatePresence mode="wait">
          <motion.img
            key={photos[index].id} // Используем индекс
            src={photos[index].url}
            alt={photos[index].photoDescription}
            // initial={{ opacity: 0, x: 100 }}
            // animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -100 }}
            // transition={{ duration: 0.5 }}
            className={styles.image}
          />
        </AnimatePresence>
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
