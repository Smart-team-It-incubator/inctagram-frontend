'use client'

import ReactCrop, { centerCrop, makeAspectCrop, PixelCrop, type Crop } from 'react-image-crop'
import { useRef, useState } from 'react'
import 'react-image-crop/src/ReactCrop.scss'

type Props = {}

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  )
}

export const PhotoEditor = ({}: Props) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [photos, setPhotos] = useState<string[]>([])
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const [aspect, setAspect] = useState<number | undefined>(undefined)
  const [rotate, setRotate] = useState(0)
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [apply, setApply] = useState<boolean>(false)
  const [crop, setCrop] = useState<Crop>({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  })

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    // Проверяем, чтобы общее количество фотографий не превышало 10
    if (photos.length + files.length > 10) {
      alert('Вы можете загрузить до 10 фотографий.')
      return
    }

    // Преобразуем файлы в base64
    const newPhotos: Promise<string>[] = Array.from(files).map(file => {
      const reader = new FileReader()
      return new Promise<string>(resolve => {
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(file)
      })
    })

    // Сохраняем загруженные фотографии
    Promise.all(newPhotos).then(photoData => {
      setPhotos(prev => [...prev, ...photoData])
    })
  }

  const handleAspectChange = (aspect: number | undefined) => {
    // setAspect(4/5)
    // console.log(imgRef)
    // const { naturalWidth: width, naturalHeight: height } = imgRef.current?.naturalHeight
    let height = Number(imgRef.current?.naturalHeight)
    let width = Number(imgRef.current?.naturalWidth)

    if (aspect) {
      setCrop(centerAspectCrop(width, height, aspect))
    } else {
      setAspect(aspect)
    }

    console.log(crop)
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  const applyCropImg = () => {
    setApply(true)
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoUpload}
        style={{ marginBottom: '20px' }}
      />

      {/* Галерея фотографий */}
      <div style={styles.gallery}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Фото ${index + 1}`}
            style={{
              ...styles.thumbnail,
              border: selectedPhotoIndex === index ? '2px solid blue' : 'none',
            }}
            onClick={() => setSelectedPhotoIndex(index)}
          />
        ))}
      </div>

      {/* Изменение масштаба */}
      <h3>Изменение масштаба</h3>
      <button onClick={() => handleAspectChange(1)}>1:1</button>
      <button onClick={() => handleAspectChange(4 / 5)}>4:5</button>
      <button onClick={() => handleAspectChange(16 / 9)}>16:9</button>
      <button onClick={applyCropImg}>V</button>

      {/* Обрезка изображения */}
      {selectedPhotoIndex !== null && (
        <>
          <ReactCrop crop={crop} aspect={aspect}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            locked>
            {/* <img
            src={photos[selectedPhotoIndex]}
            //   style={{ transform: `scale(${scale}) rotate(${rotate}deg)`}}
            style={{ transform: `scale(${scale})` }}
          /> */}

            <img
              ref={imgRef}
              alt="Crop me"
              src={photos[selectedPhotoIndex]}
              style={{
                transform: `scale(${scale}) rotate(${rotate}deg)`,
              }}
              onLoad={onImageLoad}
            />
          </ReactCrop>

          { (!!completedCrop &&apply) && (
            <img
            //   ref={imgRef}
              alt="Crop me"
              src={photos[selectedPhotoIndex]}
              style={{
                transform: `scale(${scale}) rotate(${rotate}deg)`,
                width: completedCrop.width,
                height: completedCrop.height,
              }}
              onLoad={onImageLoad}
            />
          )}
        </>
      )}
    </>
  )
}

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
    width: '50%',
  } as React.CSSProperties,
  thumbnail: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    cursor: 'pointer',
  } as React.CSSProperties,
  editor: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as React.CSSProperties,
  controls: {
    marginTop: '20px',
  } as React.CSSProperties,
}
