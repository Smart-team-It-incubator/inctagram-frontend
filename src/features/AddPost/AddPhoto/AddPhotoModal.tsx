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
import { PostImage, PostImages, PostType, UpdatePostImageActionPayload } from '@/common/store/types'
import { useAppDispatch, useAppSelector } from '@/common/store/hooks'
import { postActions, postReducers } from '@/common/store/slices/postSlice'


// type PropsType = {
//   title: string
// }

export const AddPhotoModal = () => {
  // const [images, setImages] = useState<PostImages>([])
  const [showCropForm, setShowCropForm] = useState<boolean>(false)
  const newPost = useAppSelector(state => state.postSlice.newPost)
  const dispatch = useAppDispatch()

  const [currentPostImage, setCurrentPostImage] = useState<UpdatePostImageActionPayload | null >(null)


  const uploadPhoto = async () => {
    const imageUrl = await openUploadFileWindow()
    if (imageUrl) {
      // const newImage: PostImage = { id: v1(), imageUrl: imageUrl, croppedImageUrl: null }
      // const newImages = images ? [...images, newImage] : [newImage]
      // setImages(newImages)
      dispatch(postActions.postInit(imageUrl))
      setShowCropForm(true)
    }
  }

  const nextButtonHandle = () => {
    const updatedImage: UpdatePostImageActionPayload = {
      id: '1',
      croppedImageUrl: ''
    }
    console.log('Befor dispatch', currentPostImage)
    if (currentPostImage) dispatch(postActions.cropImage(currentPostImage))
  }

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
        <Crop uploadPhoto={uploadPhoto} setCurrentPostImage = {setCurrentPostImage}/>
      ) : (
        <UploadPhoto uploadPhoto={uploadPhoto} />
      )}
    </>
  )
}
