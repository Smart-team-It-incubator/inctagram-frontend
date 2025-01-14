'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { CustomInput } from '@/components/CustomInput'
import { useRouter } from 'next/navigation'

import styles from './signUp.module.scss'

import { GithubIcon } from '../../../public/icons/GithubIcon'
import { GoogleIcon } from '../../../public/icons/GoogleIcon'
import { useController } from 'react-hook-form'

type FormValue = {
  email: string
  password: string
  passwordConfirmation: string
  username: string
}

export const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
    control,
  } = useForm<FormValue>()
  console.log('errors:', errors)
  const onSubmit: SubmitHandler<FormValue> = data => console.log(data)
  const router = useRouter()

  const { field, fieldState } = useController({
    name,
    control,
    rules: options,
  })

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
          onBlur={() => trigger('username')}
          errorMessage={errors?.username?.message}
          {...register('username', {
            required: {
              value: true,
              message: 'This field is required',
            },
            maxLength: {
              value: 30,
              message: 'Maximum number of characters 30',
            },
            minLength: {
              value: 6,
              message: 'Minimum number of characters 6',
            },
          })}
        />
        <CustomInput
          autoComplete={'new-password'}
          textPlaceholder={'Epam@epam.com'}
          title={'Email'}
          type={'text'}
          errorMessage={errors?.email?.message}
          {...register('email', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: { value: /@/, message: 'The email must match the format example@example.com' },
          })}
        />
        <CustomInput
          autoComplete={'new-password'}
          textPlaceholder={'******************'}
          title={'Password'}
          type={'password'}
          errorMessage={errors?.password?.message}
          {...register('password', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/,
              message: 'error',
            },
            minLength: {
              value: 6,
              message: 'Minimum number of characters 6',
            },
          })}
        />
        <CustomInput
          autoComplete={'new-password'}
          textPlaceholder={'******************'}
          title={'Password confirmation'}
          type={'password'}
          errorMessage={errors?.passwordConfirmation?.message}
          {...register('passwordConfirmation', {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/,
              message: 'error',
            },
            minLength: {
              value: 6,
              message: 'Minimum number of characters 6',
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
