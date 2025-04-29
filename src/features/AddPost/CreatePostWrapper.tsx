import { ReactNode } from 'react'

import styles from './AddPhoto/addPhotoModal.module.scss'
import { Button } from '@/components/Button'
import { CloseOutline } from '@/components/icons'

type WrapperProps = {
  children: ReactNode
  onApply?: () => void
  title: string
  buttonTitle?: string
  className?: string
}
export const CreatePostWrapper = ({
  children,
  title,
  buttonTitle,
  onApply,
  className
}: WrapperProps) => {
  return (
    <div className={className ? className : styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {buttonTitle ? (
          <Button className={styles.headerButton} variant="link" onClick={onApply}>
            {buttonTitle}
          </Button>
        ) : (
          <Button className={styles.headerButton} variant="withIcon">
            <CloseOutline />
          </Button>
        )}
      </div>

      {children}
    </div>
  )
}
