'use client'

import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/Button'
import * as Dialog from '@radix-ui/react-dialog'

import styles from './modal.module.scss'



import {CloseIcon} from '../../../public/icons/CloseIcon';

type Props = {
  children?: React.ReactNode | string
  className?: string
  onClose: () => void
  open: boolean
  title?: string
} & ComponentPropsWithoutRef<'div'>

export const ModalRadix = (props: Props) => {
  const { children, onClose, open, title, className } = props

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.modalHeader}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Close asChild >
              <Button aria-label={'Close'} onClick={onClose} className={styles.closeBtn}>
                  <CloseIcon/>
              </Button>
            </Dialog.Close>
          </div>
          <div className={`${styles.modalBody} ${className}`}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
