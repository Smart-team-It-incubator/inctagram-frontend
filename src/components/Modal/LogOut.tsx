'use client'


// import { authActions } from '@/common/store/slices'

import { Button } from '@/components/Button'
import { Modal } from './Modal'

import s from './Modal.module.scss'
import {useAppDispatch, useAppSelector} from "@/common/store/hooks/hooks";
import {authActions} from "@/common/store/slices/authSlice";

export const LogOut = () => {
    // const isAuth = useAppSelector(state => state.authSlice.isAuth)
    const showModal = useAppSelector(state => state.authSlice.showLogoutModal)
    const email = useAppSelector(state => state.authSlice.email)
    const dispatch = useAppDispatch()

    const modalHandle = (visible: boolean) => {
        dispatch(authActions.setShowLogoutModal(visible))
    }

    const logout = () => {
        alert('You is Log Out')
        // Request to LogOut and redirect to HomePage
        dispatch(authActions.setShowLogoutModal(false))
    }

    return (
        <>
            <Modal
                modalTitle={'LogOut'}
                onClose={() => {
                    modalHandle(false)
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
                        onClick={() => modalHandle(false)}
                        variant={'primary'}
                    >
                        No
                    </Button>
                </div>
            </Modal>
        </>
    )
}