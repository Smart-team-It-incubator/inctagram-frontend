import React from 'react'

import { Button } from '@/components/Button'
import { ModalRadix } from '@/components/ModalRadix/ModalRadix'
import { Divider } from '@/components/shared/Divider'

import styles from './ModalSentEmail.module.scss'

type Props = {
  email: string
  closeHandler: (showModal: boolean) => void
}

export const ModalSentEmail = (props: Props) => {
  const {email, closeHandler } = props

  const closeModalHandler = () => {
    closeHandler(false)
  }

  return (
    <ModalRadix onClose={closeModalHandler} open title={'Email sent'}>
      <div className={styles.modalBody}>
        <Divider color={'#4c4c4c'} style={{ marginBottom: '30px' }} />
        <div className={styles.modalDesctiprion}>
          <p>We have sent a link to confirm your email to {email}</p>
          <div className={styles.btnContainer}>
            <Button className={styles.closeModalBtn} onClick={closeModalHandler}>
              OK
            </Button>
          </div>
        </div>
      </div>
    </ModalRadix>
  )
}