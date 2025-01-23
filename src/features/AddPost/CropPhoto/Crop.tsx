'use client'
import { useState, useCallback, DetailedHTMLProps, HTMLAttributes } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import styles from './crop.module.scss'
import { type ImageType } from '../AddPhoto/AddPhotoModal'

import { CloseOutline, Expand, Image, Maximize, PlusCircleOutline } from '@/components/icons'

import { IconButton, Slider } from '@radix-ui/themes'
import { CustomSlider } from '../Slider/Slider'

const URL =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

type CropProps = {
  images: ImageType[]
  uploadPhoto: Function
}

type Tools = 'zoom' | 'aspect' | 'image'

type ToolsVisibility = {
  'zoom': boolean 
  'aspect': boolean
  'image': boolean
}

const initToolsVisibility = {
  'zoom': false, 
  'aspect': false,
  'image': false,
}

export const Crop = ({ images, uploadPhoto }: CropProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<number>(1)
  const [selectedImage, setSelectedImage] = useState<number>(0)
  

  const [showTooltip, setShowTooltip] = useState<ToolsVisibility>(initToolsVisibility)
  
  const cropChange = (crop: Point) => {
    setCrop(crop)
  }

  const openImageList = () => {
    setSelectedImage(0)
  }

  const showTooltipHandle = (sourse: Tools): void => {
    console.log('sourse: ', sourse)
    console.log('showTooltip: ', showTooltip)
    console.log('!showTooltip[sourse]}: ', !showTooltip[sourse])
    setShowTooltip({...showTooltip, [sourse]: !showTooltip[sourse]})
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
          onZoomChange={setZoom}
        />

        <div className={styles.controls}>
          <div className={styles.buttons}>
            <div className={styles.buttonsLeft}>
              <div className={styles.iconContainer}>
                <Expand width={24} height={24} className={styles.icon} onClick={() => showTooltipHandle('aspect')}/>
              </div>

              {showTooltip['aspect'] && <div className="aspect">Aspect</div> }

              <div className={styles.iconContainer}>
                <Maximize width={24} height={24} className={styles.icon} onClick={() => showTooltipHandle('zoom')}/>
              </div>

              {showTooltip['zoom'] && <CustomSlider setValue={setZoom} />}

            </div>

            {showTooltip['image'] && <ImageListTooltip
              images={images}
              uploadPhoto={uploadPhoto}
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
              setZoom={setZoom}
            />}

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
  selectedImage: number,
  setZoom?: Function
}

const ImageListTooltip = ({
  images,
  uploadPhoto,
  setSelectedImage,
  selectedImage,
  setZoom
}: TooltipProps) => {
  const addImage = async () => {
    await uploadPhoto()
    setSelectedImage((prev: number) => prev + 1)
    console.log(images)
    setZoom && setZoom(1)
  }

  const selectImageFromTooltip = (id: string) => {}

  return (
    <div className={styles.imagesTooltip}>
      <Slider defaultValue={[50]} />
      <div className={styles.imageList}>
        {images?.map(image => {
          return (
            <div className={styles.imageBlock} key={image.id}>
              <img
                src={image.croppedImageUrl ? image.croppedImageUrl : image.imageUrl}
                alt="image"
                onClick={() => selectImageFromTooltip(image.id)}
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
        </div>
      </div>
    </div>
  )
}
