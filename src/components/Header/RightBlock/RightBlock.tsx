'use client'

import { Button } from '@/components/Button'
import s from './RightBlock.module.scss'
import { usePathname } from 'next/navigation'
import { AUTH } from '@/common/routes/routes'
import { Notice } from './Notice/Notice'
import { Dropdown } from './Dropdown/Dropdown'

type Props = {
  isAuth?: boolean
}

export const RightBlock = ({ isAuth = false }: Props) => {
  const validateButtons = isAuthPage() || isAuth

  return (
    <div className={s.wrapper}>
      {!validateButtons && (
        <>
          {isAuth && <Notice />}

          <div className={s.hideOnMobile}>
            <Button variant="link">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </>
      )}
      {!isAuthPage() && <Dropdown />}
    </div>
  )
}

export const isAuthPage = () => {
  const pathname = usePathname()

  return Object.values(AUTH).some(path => pathname.startsWith(path))
}
