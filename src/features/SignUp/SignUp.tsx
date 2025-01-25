'use client'

import React from 'react'
import {Button} from '@/components/Button'
import {FormCheckbox} from '@/components/FormCheckbox/FormCheckbox'
import {FormInput} from '@/components/FormInput/FormInput'
import {validationRules} from '@/features/SignUp/validationRules'
import {useRouter} from 'next/navigation'

import styles from './signUp.module.scss'

import {GoogleIcon} from '../../../public/icons/GoogleIcon'
import {GitAuth} from '../GitAuth'
import {ModalSentEmail} from '@/features/ModalSentEmail';
import {ToastContainer} from 'react-toastify';
import {useSignUp} from '@/features/SignUp/useSignUp';

export type FormValue = {
    checkboxTerms: boolean
    email: string
    password: string
    passwordConfirmation: string
    username: string
}

// sI6ltOjVpKOz! pass

export const SignUp = () => {
    const {showModal, email, control, errors, trigger, titleCheckbox, isValid, onSubmit, closeHandler, handleSubmit,} = useSignUp()
    const router = useRouter()

    return (
        <>
            {showModal && (<ModalSentEmail email={email} closeHandler={closeHandler}/>
            )}

            <div className={styles.container}>
                <h1 className={styles.title}>Sign Up</h1>
                <div className={styles.iconsContainer}>
                    <GoogleIcon/>
                    <GitAuth/>
                </div>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        className={styles.field}
                        control={control}
                        errorMessage={errors?.username?.message}
                        name={'username'}
                        rules={validationRules.username}
                        textPlaceholder={'Epam11'}
                        title={'Username'}
                        trigger={trigger}
                        type={'text'}
                    />
                    <FormInput
                        className={styles.field}
                        control={control}
                        errorMessage={errors?.email?.message}
                        name={'email'}
                        rules={validationRules.email}
                        textPlaceholder={'Epam11'}
                        title={'Email'}
                        trigger={trigger}
                        type={'text'}
                    />
                    <FormInput
                        className={styles.field}
                        control={control}
                        errorMessage={errors?.password?.message}
                        icon={'eye'}
                        name={'password'}
                        rules={validationRules.password}
                        textPlaceholder={'******************'}
                        title={'Password'}
                        trigger={trigger}
                        type={'password'}
                    />
                    <FormInput
                        className={styles.field}
                        control={control}
                        errorMessage={errors?.passwordConfirmation?.message}
                        icon={'eye'}
                        name={'passwordConfirmation'}
                        rules={validationRules.password}
                        textPlaceholder={'******************'}
                        title={'Password confirmation'}
                        trigger={trigger}
                        type={'password'}
                    />
                    <FormCheckbox control={control} name={'checkboxTerms'} title={titleCheckbox()}/>
                    <Button
                        className={styles.signUpButton}
                        disabled={!isValid}
                        onClick={handleSubmit(onSubmit)}
                        type={'submit'}
                        variant={'primary'}
                    >
                        Sign Up
                    </Button>
                </form>

                <p className={styles.text}>Do you have an account?</p>
                <Button onClick={() => router.push('/auth/signIn')} variant={'link'} className={styles.signInButton}>
                    Sign In
                </Button>

                <ToastContainer autoClose={2000} position={'bottom-center'}/>
            </div>
        </>
    )
}