'use client'

import React, {useState} from 'react'
import {Button} from '@/components/Button'
import {FormCheckbox} from '@/components/FormCheckbox/FormCheckbox'
import {FormInput} from '@/components/FormInput/FormInput'
import {validationRules} from '@/features/SignUp/validationRules'
import {useRouter} from 'next/navigation'

import styles from './signUp.module.scss'

import {GoogleIcon} from '../../../public/icons/GoogleIcon'
import {GitAuth} from '../GitAuth'
import {ModalSentEmail} from '@/features/ModalSentEmail';
import {toast, ToastContainer} from 'react-toastify';
import {Container} from '@/components/shared/Container';
import {ROUTES} from '@/common/routes/routes';
import {useRegistrationMutation} from '@/common/api/authApi';
import {SubmitHandler, useForm} from 'react-hook-form';
import Link from 'next/link';
import {FormFields} from '@/common/api/auth.types';

export type FormValue = {
    checkboxTerms: boolean
    email: string
    password: string
    passwordConfirmation: string
    username: string
}

// sI6ltOjVpKOz! pass

export const SignUp = () => {

    const [registration] = useRegistrationMutation()


    const {
        control,
        formState: {errors, isValid},
        getValues,
        reset,
        setError,
        trigger,
        handleSubmit,
    } = useForm<FormValue>()

    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState<string>('')
    let isPasswordsMatch = getValues('password') === getValues('passwordConfirmation')

    const titleCheckbox = () => {
        return (
            <p className={styles.titleCheckbox}>
                I agree to the{' '}
                <Link className={styles.titleCheckboxLink} href={ROUTES.TERMS_OF_SERVICE}>
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link className={styles.titleCheckboxLink} href={ROUTES.PRIVACY_POLICY}>
                    Privacy Policy
                </Link>
            </p>
        )
    }

    const closeHandler = () => {
        setShowModal(false)
    }

    const onSubmit: SubmitHandler<FormValue> = data => {

        if (isPasswordsMatch) {
            setEmail(data.email)

            const formData = {
                email: data.email,
                password: data.password,
                username: data.username,
            }

            registration(formData)
                .unwrap()
                .then(() => {
                    reset()
                    setShowModal(true)
                })
                .catch(error => {
                    if (error.status === 409) {
                        const field = error.data.field as FormFields
                        const message = error.data.message

                        setError(field, {
                            message,
                            type: 'manual',
                        })
                    }
                    else {
                        toast.error('network error')
                    }
                })
        }
        else {
            setError('passwordConfirmation', {message: 'Password must match', type: 'manual'})
        }
    }


    const router = useRouter()

    return (
        <Container className={styles.container}>
            {showModal && (<ModalSentEmail email={email} closeHandler={closeHandler}/>
            )}

            <div className={styles.wrapper}>
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
                <Button onClick={() => router.push(ROUTES.SIGN_IN)} variant={'link'} className={styles.signInButton}>
                    Sign In
                </Button>

                <ToastContainer autoClose={2000} position={'bottom-center'}/>
            </div>
        </Container>
    )
}