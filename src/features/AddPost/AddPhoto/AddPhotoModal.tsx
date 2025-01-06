import { Button } from '@/components/Button'
import { Icon } from '@/components/Menu/icon'

import styles from './addPhotoModal.module.scss'

const IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antu_insert-image.svg/768px-Antu_insert-image.svg.png'

type PropsType = {
  title: string
}
export const AddPhotoModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Add Photo</h1>
        </div>
        <div className={styles.header_button}>
          <Button variant={'withIcon'}>x</Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.droparea}>
          <img alt={'upload'} src={IMG_URL} width={'222px'} />
        </div>
        <Button style={{ marginBottom: '24px' }} variant={'primary'}>
          Select from Computer
        </Button>
        <Button variant={'outline'}>Open Draft</Button>
      </div>
    </div>
  )
}
