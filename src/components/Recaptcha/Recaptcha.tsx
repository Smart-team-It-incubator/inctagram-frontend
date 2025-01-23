'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { recaptchaApi } from './recaptchaApi'

type Props = {
  callback: (isRecaptcha: boolean) => void
}

export const Recaptcha = ({ callback }: Props) => {
  const handleCaptchaSuccess = (token: string | null) => {
    recaptchaApi(token)

    if (token) {
      callback(true)
    } else {
      callback(false)
    }
  }

  return (
    <ReCAPTCHA
      sitekey="6LdQbb0qAAAAADa934mR08oRGgxKDjfO80qI4j8L"
      onChange={handleCaptchaSuccess}
      size="normal"
      theme="dark"
    />
  )
}
