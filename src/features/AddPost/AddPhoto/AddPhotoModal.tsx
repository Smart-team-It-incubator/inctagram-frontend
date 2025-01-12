'use client'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Menu/icon'

import styles from './addPhotoModal.module.scss'
import { Crop } from '../CropPhoto/Crop'
import { UploadPhoto } from './UploadPhoto'
import { useState } from 'react'
import { v1 } from 'uuid'
import { openUploadFileWindow } from './openUploadFileWindow'
import { Maximize } from '@/components/icons'

const IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antu_insert-image.svg/768px-Antu_insert-image.svg.png'

type PropsType = {
  title: string
}

export type ImageType = {
  id: string
  imageUrl: string
  croppedImageUrl: string | null
}

export type Images = ImageType[]

export const AddPhotoModal = () => {
  const [images, setImages] = useState<ImageType[]>([])
  const [showCropForm, setShowCropForm] = useState<boolean>(false)

  const uploadPhoto = async () => {
    // Вынести загрузку в отдельный хук
    const imageUrl = await openUploadFileWindow()
    if (imageUrl) {
      const newImage: ImageType = { id: v1(), imageUrl: imageUrl, croppedImageUrl: null }
      const newImages = images ? [...images, newImage] : [newImage]
      setImages(newImages)
      setShowCropForm(true)
    }
  }

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Add Photo</h1>
        </div>
        <div className={styles.header_button}>
          <Button variant={'withIcon'}>x</Button>
        </div>
      </div>

      {showCropForm ? <Crop images={images} /> : <UploadPhoto uploadPhoto={uploadPhoto} />}
    </>
  )
}
