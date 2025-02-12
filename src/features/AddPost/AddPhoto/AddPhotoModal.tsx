'use client'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Menu/icon'

import styles from './addPhotoModal.module.scss'
import { Crop } from '../CropPhoto/Crop'
import { UploadPhoto } from './UploadPhoto'
import { useEffect, useState } from 'react'
import { v1 } from 'uuid'
import { openUploadFileWindow } from './openUploadFileWindow'
import { Maximize } from '@/components/icons'
import { PostImage, PostImages, PostType, UpdatePostImageActionPayload } from '@/common/store/types'
import { useAppDispatch, useAppSelector } from '@/common/store/hooks'
import { postActions, postReducers } from '@/common/store/slices/postSlice'
import { Area } from 'react-easy-crop'
import { cropImage } from '../utils/cropImage'
import { Publication } from '../Publication/Publication'
import { CreatePostWrapper } from '../CreatePostWrapper'

// type PropsType = {
//   title: string
// }

export const AddPhotoModal = () => {
  // const [images, setImages] = useState<PostImages>([])
  const [showCropForm, setShowCropForm] = useState<boolean>(false)
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState<PostImage | null>(null)
  const [newImage, setNewImage] = useState<PostImage | null>(null)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [croppedUrl, setCroppedUrl] = useState<string | null>(null)
  const [showEditPost, setShowEditPost] = useState<boolean>(false)

  const newPostImages = useAppSelector(state => state.postSlice.newPost.images)
  const dispatch = useAppDispatch()

  // const [currentPostImage, setCurrentPostImage] = useState<UpdatePostImageActionPayload | null>(
  //   null
  // )

  const uploadPhoto = async () => {
    const imageUrl = await openUploadFileWindow()
    if (imageUrl) {
      // const newImages = images ? [...images, newImage] : [newImage]
      // setImages(newImages)
      const newImage: PostImage = { id: v1(), imageUrl: imageUrl, croppedImageUrl: null }
      setCurrentImage(newImage)
      dispatch(postActions.postInit(imageUrl))
      // setCurrentImage(newPostImages[currentImageIdx])
      setShowCropForm(true)
    }
  }

  useEffect(() => {}, [currentImage, croppedAreaPixels, croppedUrl, showEditPost])

  const nextButtonHandle = async () => {
    // const updatedImage: UpdatePostImageActionPayload = {
    //   id: '1',
    //   croppedImageUrl: ''
    // }

    if (currentImage && croppedAreaPixels) {
      const croppedImageUrl = await cropImage(currentImage.imageUrl, croppedAreaPixels)

      dispatch(
        postActions.cropImage({
          id: currentImage?.id,
          croppedImageUrl: croppedImageUrl ? croppedImageUrl : '',
        })
      )
      setCroppedUrl(croppedImageUrl)
      setShowEditPost(true)
      setShowCropForm(false)

      console.log('newPost, ', newPostImages)
    }
    // if (currentPostImage) dispatch(postActions.cropImage(currentPostImage))
  }

  if (showEditPost) {
    return (
      <CreatePostWrapper>
        <Publication image={croppedUrl ? croppedUrl : ''} />
      </CreatePostWrapper>
    )
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
        <Crop
          images={newPostImages}
          setCurrentImage={setCurrentImage}
          currentImageIdx={currentImageIdx}
          setCurrentImageIdx={setCurrentImageIdx}
          uploadPhoto={uploadPhoto}
          setCroppedAreaPixels={setCroppedAreaPixels}
        />
      ) : (
        <UploadPhoto uploadPhoto={uploadPhoto} />
      )}
    </>
  )
}
