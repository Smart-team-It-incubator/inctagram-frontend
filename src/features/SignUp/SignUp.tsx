'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useController } from 'react-hook-form'

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
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    trigger,
  } = useForm<FormValue>()

  console.log('errors:', errors)
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
          errorMessage={errors?.username?.message}
          onBlur={() => trigger('username')}
          textPlaceholder={'Epam11'}
          title={'Username'}
          type={'text'}
          {...register('username', {
            maxLength: {
              message: 'Maximum number of characters 30',
              value: 30,
            },
            minLength: {
              message: 'Minimum number of characters 6',
              value: 6,
            },
            required: {
              message: 'This field is required',
              value: true,
            },
          })}
        />
        <CustomInput
          autoComplete={'new-password'}
          errorMessage={errors?.email?.message}
          textPlaceholder={'Epam@epam.com'}
          title={'Email'}
          type={'text'}
          {...register('email', {
            pattern: { message: 'The email must match the format example@example.com', value: /@/ },
            required: {
              message: 'This field is required',
              value: true,
            },
          })}
        />
        <CustomInput
          autoComplete={'new-password'}
          errorMessage={errors?.password?.message}
          textPlaceholder={'******************'}
          title={'Password'}
          type={'password'}
          {...register('password', {
            minLength: {
              message: 'Minimum number of characters 6',
              value: 6,
            },
            pattern: {
              message: 'error',
              value: /^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/,
            },
            required: {
              message: 'This field is required',
              value: true,
            },
          })}
        />
        <CustomInput
          autoComplete={'new-password'}
          errorMessage={errors?.passwordConfirmation?.message}
          textPlaceholder={'******************'}
          title={'Password confirmation'}
          type={'password'}
          {...register('passwordConfirmation', {
            minLength: {
              message: 'Minimum number of characters 6',
              value: 6,
            },
            pattern: {
              message: 'error',
              value: /^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/,
            },
            required: {
              message: 'This field is required',
              value: true,
            },
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
