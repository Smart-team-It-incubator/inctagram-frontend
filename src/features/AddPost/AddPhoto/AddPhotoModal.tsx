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
import { PostImage, PostImages } from '@/common/store/types'
import { useAppDispatch, useAppSelector } from '@/common/store/hooks'
import { postReducers } from '@/common/store/slices/postSlice'


// type PropsType = {
//   title: string
// }

export const AddPhotoModal = () => {
  const [images, setImages] = useState<PostImages>([])
  const [showCropForm, setShowCropForm] = useState<boolean>(false)

  const userPosts = useAppSelector(state => state.postSlice.posts)
  const dispatch = useAppDispatch()



  const uploadPhoto = async () => {
    const imageUrl = await openUploadFileWindow()
    if (imageUrl) {
      const newImage: PostImage = { id: v1(), imageUrl: imageUrl, croppedImageUrl: null }
      const newImages = images ? [...images, newImage] : [newImage]
      // setImages(newImages)
      dispatch(postReducers.)
      setShowCropForm(true)
    }
  }

  const nextButtonHandle = () => {}

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Add Photo</h1>
        </div>
        <div className={styles.header_button}>
          <Button variant={'link'} onClick={nextButtonHandle}>
            Next
          </Button>
        </div>
      </div>

      {showCropForm ? (
        <Crop uploadPhoto={uploadPhoto} images={images} />
      ) : (
        <UploadPhoto uploadPhoto={uploadPhoto} />
      )}
    </>
  )
}
