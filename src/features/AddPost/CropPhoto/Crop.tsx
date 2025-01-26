'use client'
import { useState, useCallback, DetailedHTMLProps, HTMLAttributes } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import styles from './crop.module.scss'
import { type ImageType } from '../AddPhoto/AddPhotoModal'

import { CloseOutline, Expand, Image, Maximize, PlusCircleOutline } from '@/components/icons'

import { IconButton, Slider } from '@radix-ui/themes'
import { CustomSlider } from '../Slider/Slider'
import getCroppedImg from './cropImage'

const URL =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

type CropProps = {
  images: ImageType[]
  uploadPhoto: Function
}

type Tools = 'zoom' | 'aspect' | 'image'

type ToolsVisibility = {
  zoom: boolean
  aspect: boolean
  image: boolean
}

const initToolsVisibility = {
  zoom: false,
  aspect: false,
  image: false,
}

export const Crop = ({ images, uploadPhoto }: CropProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<number>(1)
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [croppedImage, setCroppedImage] = useState<string | null>(null)

  const [showTooltip, setShowTooltip] = useState<ToolsVisibility>(initToolsVisibility)

  const cropChange = (crop: Point) => {
    setCrop(crop)
  }

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const cropImage = async (image: string, croppedAreaPixels: Area) => {
    console.log('crop')
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels)

      console.log('donee', { croppedImage })

      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }
  const openImageList = () => {
    setSelectedImage(0)
  }

  const showTooltipHandle = (sourse: Tools): void => {
    // console.log('sourse: ', sourse)
    // console.log('showTooltip: ', showTooltip)
    // console.log('!showTooltip[sourse]}: ', !showTooltip[sourse])
    setShowTooltip({ ...showTooltip, [sourse]: !showTooltip[sourse] })
  }

  return (
    <>
      <div
        className={styles.cropContainer}
        style={{ position: 'relative', width: '100%', height: '100%' }}
      >
        <Cropper
          image={images[selectedImage].imageUrl}
          zoom={zoom}
          crop={crop}
          aspect={4 / 3}
          onCropChange={cropChange}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />

        <div className={styles.controls}>
          <div className={styles.buttons}>
            <div className={styles.buttonsLeft}>
              <div className={styles.iconContainer}>
                <Expand
                  width={24}
                  height={24}
                  className={styles.icon}
                  onClick={() => showTooltipHandle('aspect')}
                />
              </div>

              {showTooltip['aspect'] && <div className="aspect">Aspect</div>}

              <div className={styles.iconContainer}>
                <Maximize
                  width={24}
                  height={24}
                  className={styles.icon}
                  onClick={() => showTooltipHandle('zoom')}
                />
              </div>

              {showTooltip['zoom'] && <CustomSlider setValue={setZoom} />}
            </div>

            {showTooltip['image'] && (
              <ImageListTooltip
                images={images}
                uploadPhoto={uploadPhoto}
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}
                setZoom={setZoom}
                cropImage={cropImage}
                croppedAreaPixels={croppedAreaPixels}
              />
            )}

            <div className={styles.iconContainer} onClick={() => showTooltipHandle('image')}>
              <Image width={24} height={24} className={styles.icon} onClick={openImageList} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type TooltipProps = {
  images: ImageType[]
  uploadPhoto: Function
  setSelectedImage: Function
  selectedImage: number
  setZoom?: Function
  cropImage: Function
  croppedAreaPixels: Area | null
}

const ImageListTooltip = ({
  images,
  uploadPhoto,
  setSelectedImage,
  selectedImage,
  setZoom,
  cropImage,
  croppedAreaPixels,
}: TooltipProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const addImage = async () => {
    await uploadPhoto()
    setSelectedImage((prev: number) => prev + 1)
    console.log(images)
    setZoom && setZoom(1)
  }

  const selectImageFromTooltip = (index: number) => {
    setSelectedImage(index)
  }

  return (
    <div className={styles.imagesTooltip}>
      <Slider defaultValue={[50]} />
      <div className={styles.imageList}>
        {images?.map((image, index) => {
          return (
            <div className={styles.imageBlock} key={image.id}>
              <img
                src={image.croppedImageUrl ? image.croppedImageUrl : image.imageUrl}
                alt="image"
                onClick={() => selectImageFromTooltip(index)}
              />
              <div className={styles.closeBtn}>
                <div className={`${styles.iconContainer}`}>
                  <CloseOutline className={styles.icon} width={12} height={12} onClick={() => {}} />
                  {/* <IconButton style={{backgroundColor: "darkgray"}}>
                  <CloseOutline
                    className={styles.icon}
                    width={12}
                    height={12}
                    onClick={() => {}}
                  />
</IconButton> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.tooltipControls}>
        <div className={styles.iconContainer}>
          <PlusCircleOutline className={styles.icon} onClick={addImage} />
          <div
            onClick={() => cropImage(images[imageIndex].imageUrl, croppedAreaPixels)}
            style={{ cursor: 'pointer' }}
          >
            V
          </div>
        </div>
      </div>
    </div>
  )
}
