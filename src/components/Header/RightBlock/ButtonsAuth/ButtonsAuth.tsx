'use client'

import { Button } from '@/components/Button'
import s from './ButtonsAuth.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import { AUTH } from '@/common/routes/routes'

type Props = {
  isAuth?: boolean
}

export const ButtonsAuth = ({ isAuth }: Props) => {
  const validateButtons = isAuthPage() || isAuth
  const router = useRouter()

  const handleBtn = (path: string) => {
    router.push(path)
  }

  return (
    <>
      {!validateButtons && (
        <div className={s.hideOnMobile}>
          <Button variant="link" onClick={() => handleBtn('/sign-in')}>
            Log in
          </Button>
          <Button onClick={() => handleBtn('/sign-up')}>Sign up</Button>
        </div>
      )}
    </>
  )
}

export const isAuthPage = () => {
  const pathname = usePathname()

  return Object.values(AUTH).some(path => pathname.startsWith(path))
}
