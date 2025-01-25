'use client'

import Link from 'next/link'
import { GitAuth } from '../GitAuth'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { CustomInput } from '@/components/CustomInput'
import { useLoginMutation } from '@/common/api/authApi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GoogleIcon } from '../../../public/icons/GoogleIcon'
import { emailValidation, passwordValidation } from './validators'

import styles from './SignIn.module.scss'

type FormValue = {
  email: string
  password: string
  errors: string
}

export const SignIn = () => {
  const router = useRouter()
  const [login] = useLoginMutation()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>()

  const isApiError = (err: unknown): err is { status: number; data: { message?: string } } => {
    return typeof err === 'object' && err !== null && 'status' in err
  }

  const onSubmit: SubmitHandler<FormValue> = async data => {
    try {
      const response = await login(data).unwrap()
      localStorage.setItem('accessToken', response.accessToken)
      router.push('/home')
    } catch (err) {
      if (isApiError(err)) {
        const { status, data } = err
        if (status === 401) {
          alert('Неверный логин или пароль. Попробуйте снова.')
        } else if (status === 409) {
          alert('Сессия уже существует для этого устройства.')
        } else {
          alert(data?.message || 'Произошла ошибка. Попробуйте позже.')
        }
      } else if (err instanceof Error) {
        console.error('Произошла ошибка:', err.message)
      } else {
        console.error('Неизвестная ошибка:', err)
      }
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
          {...register('email', emailValidation)}
        />
        <div className={styles.inputWrap}>
          <CustomInput
            autoComplete={'new-password'}
            textPlaceholder={'******************'}
            title={'Password'}
            type={'password'}
            icon={'eye'}
            {...register('password', passwordValidation)}
          />
        </div>

        {(errors.password || errors.email) && (
          <p className={styles.error}>{errors.password?.message || errors.email?.message}</p>
        )}

        <p className={styles.forgotPassword}>
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
