'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { CustomInput } from '@/components/CustomInput'
import { useRouter } from 'next/navigation'

import styles from './signUp.module.scss'

import { GithubIcon } from '../../../public/icons/GithubIcon'
import { GoogleIcon } from '../../../public/icons/GoogleIcon'

type FormValue = {
  email: string
  password: string
  passwordConfirmation: string
  username: string
}

export const SignUp = () => {
  const { handleSubmit, register } = useForm<FormValue>()
  const onSubmit: SubmitHandler<FormValue> = data => console.log(data)
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <div className={styles.iconsContainer}>
        <GoogleIcon />
        <GithubIcon />
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          autoComplete={'new-password'}
          className={styles.field}
          textPlaceholder={'Epam11'}
          title={'Username'}
          type={'text'}
          {...register('username', {required: true })}
        />
        <CustomInput
          autoComplete={'new-password'}
          textPlaceholder={'Epam@epam.com'}
          title={'Email'}
          type={'text'}
          {...register('email', { required: true })}
        />
        <CustomInput
          autoComplete={'new-password'}
          textPlaceholder={'******************'}
          title={'Password'}
          type={'password'}
          {...register('password', {  required: true })}
        />
        <CustomInput
          autoComplete={'new-password'}
          textPlaceholder={'******************'}
          title={'Password confirmation'}
          type={'password'}
          {...register('passwordConfirmation', {
            required: true,
          })}
        />
        {/*Checkbox*/}
        <Button
          className={styles.signUpButton}
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
  )
}