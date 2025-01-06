import { Button } from '@/components/Button'

import styles from './addPhotoModal.module.scss'

const IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antu_insert-image.svg/768px-Antu_insert-image.svg.png'

type PropsType = {
  title: string
}
export const AddPhotoModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>Add Photo</div>
      <div className={styles.content}>
        <div className={'dropbox'}>
          <img alt={'upload'} src={IMG_URL} width={'222px'} />
        </div>
        <Button variant={'primary'}>Select from Computer</Button>
        <Button variant={'outline'}>Open Draft</Button>
      </div>
    </div>
  )
}
