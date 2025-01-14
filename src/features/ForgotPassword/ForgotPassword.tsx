'use client'

import { Button } from '@/components/Button'
import { CustomInput } from '@/components/CustomInput'
import { Recaptcha } from '@/components/Recaptcha'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'
import s from './ForgotPassword.module.scss'
import { MessageModal } from '@/components/MessageModal/MessageModal'
import { forgotPasswordApi } from '@/app/common/api/forgotPasswordApi'
import { FormEvent } from 'react'

export const ForgotPassword = () => {
  const [textInput, setTextInput] = useState<string>('')
  const [isDataAndCaptchaValid, setIsDataAndCaptchaValid] = useState<boolean>(false)
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [toggleRecaptcha, setToggleRecaptcha] = useState<boolean>(false)
  const [componentLoaded, setComponentLoaded] = useState<boolean>(false)
  const isCaptcha = true

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value)
  }

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(email)
  }

  const onClickHandler = () => {
    setIsOpenModal(!isOpenModal)
  }

  useEffect(() => {
    if (validateEmail(textInput) && isCaptcha) {
      setIsDataAndCaptchaValid(true)
    } else {
      setIsDataAndCaptchaValid(false)
    }
  }, [textInput, isCaptcha])
  // ___________________________________________________________

  const toggleStateBasedOnWidth = () => {
    if (window.innerWidth < 768) {
      setToggleRecaptcha(true)
    } else {
      setToggleRecaptcha(false)
    }
  }

  useEffect(() => {
    setComponentLoaded(true)

    if (typeof window !== 'undefined') {
      setToggleRecaptcha(window.innerWidth < 768)
    }

    window.addEventListener('resize', toggleStateBasedOnWidth)

    return () => {
      window.removeEventListener('resize', toggleStateBasedOnWidth)
    }
  }, [])

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    forgotPasswordApi.sendingMail(textInput)
  }

  return (
    <div className={s.ground}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Forgot Password</h2>
        <form onSubmit={e => sendMail(e)}>
          <CustomInput
            onChange={handleInputChange}
            title="Email"
            textPlaceholder="Epam@epam.com"
            type="email"
            errorMessage=""
            required
          />

          <p className={s.text}>
            Enter your email address and we will send you further instructions
          </p>

          {isEmailSent && (
            <p className={s.information}>
              The link has been sent by email. {toggleRecaptcha && <br />} If you don’t receive an
              email send link again
            </p>
          )}

          {componentLoaded && !isEmailSent && toggleRecaptcha && (
            <div className={`${s.recaptcha} ${s.recaptcha_mob}`}>
              <Recaptcha />
            </div>
          )}

          <Button
            children="Send Link"
            type="submit"
            disabled={!isDataAndCaptchaValid}
            className={s.btn_send}
          />
        </form>

        <Link href="/auth" className={s.link_back}>
          Back to Sign In
        </Link>

        {componentLoaded && !isEmailSent && !toggleRecaptcha && (
          <div className={s.recaptcha}>
            <Recaptcha />
          </div>
        )}
      </div>
      <div style={{ position: 'relative' }}>
        <MessageModal title="Email sent" open={isOpenModal} callback={onClickHandler} />
      </div>
    </div>
  )
}
