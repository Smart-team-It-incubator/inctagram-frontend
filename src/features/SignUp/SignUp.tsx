'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useRegistrationMutation } from '@/common/api/authApi'
import { Button } from '@/components/Button'
import { FormCheckbox } from '@/components/FormCheckbox/FormCheckbox'
import { FormInput } from '@/components/FormInput/FormInput'
import { ModalRadix } from '@/components/ModalRadix/ModalRadix'
import { Divider } from '@/components/shared/Divider'
import { validationRules } from '@/features/SignUp/validationRules'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styles from './signUp.module.scss'

import { GithubIcon } from '../../../public/icons/GithubIcon'
import { GoogleIcon } from '../../../public/icons/GoogleIcon'
import { GitAuth } from '../GitAuth'

type FormValue = {
  checkboxTerms: boolean
  email: string
  password: string
  passwordConfirmation: string
  username: string
}

export const SignUp = () => {
  const [registration] = useRegistrationMutation()

  const {
    control,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    trigger,
  } = useForm<FormValue>({ mode: 'onChange' })

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

  const onSubmit: SubmitHandler<FormValue> = data => {
    if (getValues('password') === getValues('passwordConfirmation')) {
      setEmail(data.email)
      const formData = {
        email: data.email,
        password: data.password,
        username: data.username,
      }

      registration(formData).then(data => {
        console.log('c сервера:', data)
        setShowModal(true)
      })
    }
  }
  const router = useRouter()

  return (
    <>
      {showModal && (
        <ModalRadix onClose={() => setShowModal(false)} open title={'Email sent'}>
          <div className={styles.modalBody}>
            <Divider color={'#4c4c4c'} style={{ marginBottom: '30px' }} />
            <div className={styles.modalDesctiprion}>
              <p>We have sent a link to confirm your email to {email}</p>
              <div className={styles.btnContainer}>
                <Button className={styles.closeModalBtn} onClick={() => setShowModal(false)}>
                  OK
                </Button>
              </div>
            </div>
          </div>
        </ModalRadix>
      )}

      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.iconsContainer}>
          <GoogleIcon />
          <GitAuth />
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
          <FormCheckbox control={control} name={'checkboxTerms'} title={titleCheckbox()} />
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
        <Button onClick={() => router.push('/auth/signIn')} variant={'link'}>
          Sign In
        </Button>
      </div>
    </>
  )
}

// sI6ltOjVpKOz!
