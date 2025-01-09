'use client'
import { useState, useCallback, DetailedHTMLProps, HTMLAttributes } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import styles from './crop.module.scss'

const URL =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

export const Crop = ({ imgUrl }: any) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const cropChange = (crop: Point) => {
    setCrop(crop)
  }

  const imgClick = () => {
    setSelectedImage(0)
  }
  return (
    <div>
      Crop
      <div
        className={styles.cropArea}
        onClick={imgClick}
        style={{ height: '75%', width: '100%', position: 'relative' }}
      >
        {/* <img src={URL} alt="" onClick={imgClick} /> */}
        {selectedImage != null && (
          <Cropper image={URL} zoom={1} crop={crop} aspect={4 / 3} onCropChange={cropChange} />
        )}
      </div>
      <button>1</button>
    </div>
  )
}
