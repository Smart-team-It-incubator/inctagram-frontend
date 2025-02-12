'use client'

import styles from './addPhotoModal.module.scss'
import { Crop } from '../CropPhoto/Crop'
import { UploadPhoto } from './UploadPhoto'
import { useEffect, useState } from 'react'
import { v1 } from 'uuid'
import { openUploadFileWindow } from './openUploadFileWindow'

import { PostImage } from '@/common/store/types'
import { useAppDispatch, useAppSelector } from '@/common/store/hooks'
import { postActions } from '@/common/store/slices/postSlice'
import { Area } from 'react-easy-crop'
import { cropImage } from '../utils/cropImage'
import { Publication } from '../Publication/Publication'
import { CreatePostWrapper } from '../CreatePostWrapper'

export const AddPhotoModal = () => {
  const [showCropForm, setShowCropForm] = useState<boolean>(false)
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState<PostImage | null>(null)

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [croppedUrl, setCroppedUrl] = useState<string | null>(null)
  const [showEditPost, setShowEditPost] = useState<boolean>(false)

  const newPostImages = useAppSelector(state => state.postSlice.newPost.images)
  const dispatch = useAppDispatch()

  const uploadPhoto = async () => {
    const imageUrl = await openUploadFileWindow()
    if (imageUrl) {
      const newImage: PostImage = { id: v1(), imageUrl: imageUrl, croppedImageUrl: null }
      setCurrentImage(newImage)
      dispatch(postActions.postInit(imageUrl))
      setShowCropForm(true)
    }
  }

  useEffect(() => {}, [currentImage, croppedAreaPixels, croppedUrl, showEditPost])

  const nextButtonHandle = async () => {
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
    }
  }

  const [publish, setPublish] = useState<boolean>(false)

  const publishHandle = () => {
    dispatch(postActions.setToPublish(true))
  }

  if (showEditPost) {
    return (
      <CreatePostWrapper title={'Publication'} buttonTitle={'Public'} onApply={publishHandle}>
        <Publication image={croppedUrl ? croppedUrl : ''} />
      </CreatePostWrapper>
    )
  }

  return (
    <>
      {showCropForm ? (
        <CreatePostWrapper title={'Add photo'} buttonTitle={'Next'} onApply={nextButtonHandle}>
          <Crop
            images={newPostImages}
            setCurrentImage={setCurrentImage}
            currentImageIdx={currentImageIdx}
            setCurrentImageIdx={setCurrentImageIdx}
            uploadPhoto={uploadPhoto}
            setCroppedAreaPixels={setCroppedAreaPixels}
          />
        </CreatePostWrapper>
      ) : (
        <CreatePostWrapper
          title={'Add photo'}
          onApply={nextButtonHandle}
          className={styles.uploadWrapper}
        >
          <UploadPhoto uploadPhoto={uploadPhoto} />
        </CreatePostWrapper>
      )}
    </>
  )
}
