'use client'

import { useAppDispatch, useAppSelector } from '@/common/store/hooks'
import { authActions } from '@/common/store/slices'
// import { useState } from 'react'

import { Button } from '@/components/Button'
// import { Modal } from '@/components/Modal/Modal'

// import s from './Modal.module.scss'

type Props = {
  email?: string
  showModal?: boolean
  setShowModal?: Function
}
export const LogOut = ({ email, showModal = false, setShowModal = () => {} }: Props) => {
  const isAuth = useAppSelector(state => state.authSlice.isAuth)
  const dispatch = useAppDispatch()

  console.log('isAuth', isAuth)

  const logout = () => {
    alert('You is Log Out')
    setShowModal(false)
  }

  return (
    <>
      <Button onClick={() => dispatch(authActions.setIsAuth(true))}>LogOut</Button>
      {/* {
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
      } */}
    </>
  )
}
