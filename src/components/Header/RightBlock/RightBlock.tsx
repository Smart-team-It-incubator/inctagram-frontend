'use client'

import { Button } from '@/components/Button'
import s from './RightBlock.module.scss'
import {usePathname, useRouter} from 'next/navigation'
import { AUTH } from '@/common/routes/routes'
import { Notice } from './Notice/Notice'
import { Dropdown } from './Dropdown/Dropdown'

type Props = {
  isAuth?: boolean
}

export const RightBlock = ({ isAuth = false }: Props) => {
  const validateButtons = isAuthPage() || isAuth
  const router=useRouter()

  const handleBtn=(path:string)=>{
    router.push(path)
  }

  return (
    <div className={s.wrapper}>
      {!validateButtons && (
        <>
          {isAuth && <Notice />}

          <div className={s.hideOnMobile}>
            <Button variant="link" onClick={()=>handleBtn("/sign-in")}>Log in</Button>
            <Button onClick={()=>handleBtn("/sign-up")}>Sign up</Button>
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
