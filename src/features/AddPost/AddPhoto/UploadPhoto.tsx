'use client'
import { Button } from '@/components/Button'
import styles from './addPhotoModal.module.scss'

const IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antu_insert-image.svg/768px-Antu_insert-image.svg.png'

type Props = {
  uploadPhoto: Function
}
export const UploadPhoto = ({ uploadPhoto }: Props) => {
  const uploadPhotoClick = () => {
    uploadPhoto()
  }

  return (
    <div className={styles.content}>
      <div className={styles.droparea}>
        <img alt={'upload'} src={IMG_URL} width={'222px'} />
      </div>
      <Button style={{ marginBottom: '24px' }} variant={'primary'} onClick={uploadPhotoClick}>
        Select from Computer
      </Button>
      <Button variant={'outline'}>Open Draft</Button>
    </div>
  )
}
