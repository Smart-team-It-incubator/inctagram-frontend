'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import s from './NewPassword.module.scss'
import { CustomInput } from '@/components/CustomInput'
import { Button } from '@/components/Button'
import { useSearchParams } from 'next/navigation'
import { passwordValidation } from './passwordValidation'
import { useRecoveryConfirmMutation } from '@/common/api/authApi'
import { useRouter } from 'next/navigation'
import { LinkExpired } from './LinkExpired/LinkExpired'

export const NewPassword = () => {
  const [firstPassword, setFirstPassword] = useState<string>('')
  const [secondPassword, setSecondPassword] = useState<string>('')
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLinkExpired, setIsLinkExpired] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  const [recoveryConfirm] = useRecoveryConfirmMutation()

  const router = useRouter()

  const searchParams = useSearchParams()
  const recoveryCode = searchParams.get('recoveryCode')

  const getFirstPass = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstPassword(e.currentTarget.value)
  }
  const getSecondPass = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.currentTarget.value)
  }

  const passwordMathHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errorMessage = passwordValidation({ firstPassword })
    const passwordLength = firstPassword.length

    setErrorMessage(errorMessage)

    !errorMessage && firstPassword !== secondPassword && setIsPasswordMatch(false)

    if (!errorMessage && passwordLength > 0 && firstPassword === secondPassword) {
      try {
        setIsButtonDisabled(true)
        const res = await recoveryConfirm({ recoveryCode, newPassword: firstPassword })
        if (res.error) {
          throw res.error
        }
        router.push('/auth/signUp')
      } catch (err) {
        router.replace('/auth/newPassword')
        setIsLinkExpired(true)
      }
    }
  }

  useEffect(() => {
    setErrorMessage('')
    setIsPasswordMatch(null)
  }, [firstPassword, secondPassword])

  const htmlContent = () => {
    if (isLinkExpired) {
      return <LinkExpired />
    } else {
      return recoveryCode ? (
        <div className={s.ground}>
          <div className={s.wrapper}>
            <h2 className={s.title}>Create New Password</h2>
            <form onSubmit={e => passwordMathHandler(e)}>
              <div className={s.inputs}>
                <CustomInput
                  onChange={getFirstPass}
                  title="New password"
                  textPlaceholder="•••••••••••••••••"
                  type="password"
                  errorMessage={errorMessage}
                  icon="eye"
                />

                <CustomInput
                  onChange={getSecondPass}
                  title="Password confirmation"
                  textPlaceholder="•••••••••••••••••"
                  type="password"
                  errorMessage={isPasswordMatch === false ? 'The passwords must match' : ''}
                  icon="eye"
                />
              </div>

              <p className={s.text}>Your password must be between 6 and 20 characters</p>

              <Button
                children="Create new password"
                type="submit"
                className={s.btn}
                disabled={isButtonDisabled}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className={s.err404}>
          <h2>404</h2>
        </div>
      )
    }
  }

  return <>{htmlContent()}</>
}

// если пароль не совпадает The passwords must match
// StrongPassword123!
