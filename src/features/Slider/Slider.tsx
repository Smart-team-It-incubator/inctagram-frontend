'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Slider.module.scss'

const images = [
  'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
]

export default function Slider() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex(prev => (prev + 1) % images.length)
  const prevSlide = () => setIndex(prev => (prev - 1 + images.length) % images.length)

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={prevSlide}>
        &#10094;
      </button>
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={styles.image}
          />
        </AnimatePresence>
      </div>
      <button className={styles.arrow} onClick={nextSlide}>
        &#10095;
      </button>
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={index === i ? styles.activeDot : styles.dot}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
