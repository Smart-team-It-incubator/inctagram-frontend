import { ReactNode } from 'react'
import styles from './AddPhoto/addPhotoModal.module.scss'

type Props = {
  children?: ReactNode
  classname?: string
}

export const ModalWindow = ({ classname = styles.modal, children }: Props) => {
  return <div className={classname}>{children}</div>
}
