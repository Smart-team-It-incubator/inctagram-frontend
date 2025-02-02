'use client'

import { useState } from 'react'

import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal/Modal'

import s from './Modal.module.scss'

type Props = {
  email: string
}
export const LogOut = ({ email }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const logout = () => {
    alert('You is Log Out')
    setShowModal(false)
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>LogOut</Button>
      {
        <Modal
          modalTitle={'LogOut'}
          onClose={() => {
            setShowModal(false)
          }}
          open={showModal}
        >
          <div className={s.question}>
            Are you really want to log out of your account {email || ''}
          </div>
          <div className={s.buttons}>
            <Button className={s.buttonStyle} onClick={logout} variant={'outline'}>
              Yes
            </Button>
            <Button
              className={s.buttonStyle}
              onClick={() => setShowModal(false)}
              variant={'primary'}
            >
              No
            </Button>
          </div>
        </Modal>
      }
    </>
  )
}
