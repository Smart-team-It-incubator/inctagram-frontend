'use client'

import ReactCrop, { type Crop } from 'react-image-crop'
import { useState } from 'react'
import 'react-image-crop/src/ReactCrop.scss'

type Props = {
 
}
export const PhotoEditor = ({}: Props) => {
  const [photos, setPhotos] = useState<string[]>([])
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const [aspect, setAspect] = useState<number>(16 / 9)
  const [crop, setCrop] = useState<Crop>({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50
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

 const changeAspect = () => {
setAspect(aspect => aspect + 1)
setCrop(crop)
 }
  return (
    <>
     <input
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoUpload}
        style={{ marginBottom: "20px" }}
       
      />

      <button onClick={changeAspect}>changeAspect</button>
      <div>{aspect}</div>
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

      {selectedPhotoIndex !== null && (
        <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={aspect}>
          <img src={photos[selectedPhotoIndex]} 
        //   style={{ transform: `scale(${scale}) rotate(${rotate}deg)`}} 
        style={{ transform: `scale(${scale})`}}
          />
        </ReactCrop>
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
    width: '50%'
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
