'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { FormInput } from '@/components/FormInput/FormInput'
import { validationRules } from '@/features/SignUp/validationRules'
import Link from 'next/link'
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
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    trigger,
  } = useForm<FormValue>({ mode: 'onChange' })

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
      // пойдет запрос на сервер
    }
    console.log(data)
  }
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <div className={styles.iconsContainer}>
        <GoogleIcon />
        <GithubIcon />
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
          textPlaceholder={'******************'}
          title={'Password confirmation'}
          trigger={trigger}
          type={'password'}
        />

        <Checkbox data={[{ disabled: false, id: 'checkboxTerms', title: titleCheckbox() }]} />
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
  )
}

// sI6ltOjVpKOz
