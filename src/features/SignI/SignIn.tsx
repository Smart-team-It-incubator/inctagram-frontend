'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { CustomInput } from '@/components/CustomInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GithubIcon } from '../../../public/icons/GithubIcon'
import { GoogleIcon } from '../../../public/icons/GoogleIcon'

import styles from './SignIn.module.scss'
import Link from 'next/link'
import { GitAuth } from '../GitAuth'

type FormValue = {
  email: string
  password: string
  errors: string
}

export const SignIn = () => {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>()

  const onSubmit: SubmitHandler<FormValue> = async data => {
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('AccessToken:', result.accessToken)
        // router.push('/auth/profile')
      } else if (response.status === 401) {
        console.error('Неверный логин или пароль.')
      } else if (response.status === 409) {
        console.error('Сессия уже существует для этого устройства.')
      } else {
        console.error('Произошла ошибка. Попробуйте снова позже.')
      }
    } catch (error) {
      console.error('Ошибка сети или сервера:', error)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.iconsContainer}>
        <GoogleIcon />
        <GitAuth />
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          autoComplete={'new-password'}
          textPlaceholder={'Epam@epam.com'}
          title={'Email'}
          type={'text'}
          {...register('email', {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: 'The email or password are incorrect. Try again please',
            },
          })}
        />
        <div className={styles.inputWrap}>
          <CustomInput
            autoComplete={'new-password'}
            textPlaceholder={'******************'}
            title={'Password'}
            type={'password'}
            icon={'eye'}
            {...register('password', {
              required: true,
              pattern: {
                value: /^[a-z0-9]{6,}$/i,
                message: 'The email or password are incorrect. Try again please',
              },
            })}
          />
        </div>
        {errors.password?.message || errors.email?.message ? (
          <p className={styles.error}>{errors.password?.message || errors.email?.message}</p>
        ) : null}

        <p style={{ fontSize: 14, textAlign: 'end', color: '#8d9094' }}>
          <Link href="/auth/forgotPassword">Forgot Password</Link>
        </p>

        <Button
          className={styles.signInButton}
          onClick={handleSubmit(onSubmit)}
          type={'submit'}
          variant={'primary'}
        >
          Sign In
        </Button>
      </form>

      <p className={styles.text}>Don’t have an account?</p>
      <Button onClick={() => router.push('/auth/signUp')} variant={'link'}>
        Sign Up
      </Button>
    </div>
  )
}
