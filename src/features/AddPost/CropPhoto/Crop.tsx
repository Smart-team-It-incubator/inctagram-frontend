'use client'
import { useState, useCallback, DetailedHTMLProps, HTMLAttributes } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import styles from './crop.module.scss'
import { type ImageType } from '../AddPhoto/AddPhotoModal'

import { Expand, Image, Maximize } from '@/components/icons'

const URL =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

type Props = {
  images: ImageType[]
}

export const Crop = ({ images }: Props) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const cropChange = (crop: Point) => {
    setCrop(crop)
  }

  const imgClick = () => {
    setSelectedImage(0)
  }

  return (
    <>
      <div
        className={styles.cropContainer}
        onClick={imgClick}
        style={{ position: 'relative', width: '100%', height: '100%' }}
      >
        <Cropper image={URL} zoom={1} crop={crop} aspect={4 / 3} onCropChange={cropChange} />

        <div className={styles.controls}>
          <div className={styles.buttons}>
            <div className={styles.buttonsLeft}>
              <div className={styles.iconContainer}>
                <Expand width={24} height={24} className={styles.icon} />
              </div>

              <div className={styles.iconContainer}>
                <Maximize  width={24} height={24} className={styles.icon} />
              </div>
            </div>

            <div className={styles.iconContainer}>
              <Image width={24} height={24} className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
