import {useRegistrationMutation} from '@/common/api/authApi';
import {SubmitHandler, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import styles from '@/features/SignUp/signUp.module.scss';
import Link from 'next/link';
import {FormFields} from '@/common/api/auth.types';
import {toast} from 'react-toastify';
import {FormValue} from '@/features/SignUp/SignUp';

export const useSignUp = () => {

    const [registration] = useRegistrationMutation()

    const {
        control,
        formState: { errors, isValid },
        getValues,
        reset,
        setError,
        trigger,
        handleSubmit,
    } = useForm<FormValue>()

    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState<string>('')

    const titleCheckbox = () => {
        return (
            <p className={styles.titleCheckbox}>
                I agree to the{' '}
                <Link className={styles.titleCheckboxLink} href={'signUp/termsOfService'}>
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link className={styles.titleCheckboxLink} href={'signUp/privacyPolicy'}>
                    Privacy Policy
                </Link>
            </p>
        )
    }

    const closeHandler = () => {
        setShowModal(false)
    }

    const onSubmit: SubmitHandler<FormValue> = data => {
        if (getValues('password') === getValues('passwordConfirmation')) {
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
                    } else {
                        toast.error('network error')
                    }
                })
        } else {
            setError('passwordConfirmation', { message: 'Password must match', type: 'manual' })
        }
    }

    return {showModal, email,control,errors,trigger, titleCheckbox,isValid,onSubmit, closeHandler, handleSubmit,}
}