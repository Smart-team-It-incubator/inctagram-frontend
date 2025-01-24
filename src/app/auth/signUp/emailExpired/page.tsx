'use client'
import React, {useState} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useResendConfirmationCodeMutation } from '@/common/api/authApi'
import { Button } from '@/components/Button'
import { FormInput } from '@/components/FormInput/FormInput'
import { EmailLinkExpired } from '@/features/EmailLinkExpired/EmailLinkExpired'
import { validationRules } from '@/features/SignUp/validationRules'


import styles from './emailExpired.module.scss'

import { ModalSentEmail } from '../../../../features/ModalSentEmail'

type FormValue = {
    email: string
}
export default function EmailExpired() {
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState<string>('')
    const {
        control,
        formState: { isValid },
        handleSubmit,
        trigger,
        reset,
    } = useForm<FormValue>({ mode: 'onChange' })

    const [resendConfirmationCode] = useResendConfirmationCodeMutation()

    const onSubmit: SubmitHandler<FormValue> = formData => {
        resendConfirmationCode({ email: formData.email })
            .unwrap()
            .then(() => {
                setEmail(formData.email)
                setShowModal(true)
                reset()}
            )
    }

    return (
        <>
            {showModal ? (
                <ModalSentEmail
                    email={email}
                    closeHandler={setShowModal}
                />
            ) : (
                <EmailLinkExpired>
                    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            className={styles.formInput}
                            control={control}
                            name={'email'}
                            rules={validationRules.email}
                            textPlaceholder={'epam@epam.com'}
                            title={'Email'}
                            trigger={trigger}
                        />
                        <Button className={styles.resentButtton} disabled={!isValid} type={'submit'}>
                            Resent verification link
                        </Button>
                    </form>
                </EmailLinkExpired>
            )}
        </>
    )
}