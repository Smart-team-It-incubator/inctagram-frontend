'use client'

import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/components/Button'

import s from './Modal.module.scss'

type Props = {
  children: ReactNode
  modalTitle: string
  onClose?: () => void
  open: boolean
}

export const Modal = ({ children, modalTitle, onClose, open }: Props) => {
  return (
    <>
      {open && (
        <>
          {createPortal(
            <div className={s.overlay}>
              <div className={s.content}>
                <h3 className={s.title}> {modalTitle} </h3>
                <hr />
                <div className={s.children}>{children}</div>
                <Button className={s.closeIcon} onClick={onClose}>
                  x
                </Button>
              </div>
            </div>,
            document.body
          )}
        </>
      )}
    </>
  )
}
