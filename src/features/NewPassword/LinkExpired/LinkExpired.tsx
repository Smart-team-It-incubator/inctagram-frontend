import { useEffect, useState } from 'react'
import s from './LinkExpired.module.scss'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'

export const LinkExpired = () => {
  const [mobileImg, setMobileImg] = useState<boolean>()
  const [componentLoaded, setComponentLoaded] = useState<boolean>(false)

  const router = useRouter()

  const toggleStateBasedOnWidth = () => {
    if (window.innerWidth < 768) {
      setMobileImg(true)
    } else {
      setMobileImg(false)
    }
  }

  useEffect(() => {
    setComponentLoaded(true)

    if (typeof window !== 'undefined') {
      setMobileImg(window.innerWidth < 768)
    }

    window.addEventListener('resize', toggleStateBasedOnWidth)

    return () => {
      window.removeEventListener('resize', toggleStateBasedOnWidth)
    }
  }, [])

  const imgEmailExpired = <img src="/img/email_expired.png" alt="time" className={s.img} />

  return (
    <div className={s.ground}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Email verification link expired</h2>

        <p className={s.text}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </p>

        {componentLoaded && mobileImg && imgEmailExpired}

        <Button
          children="Resend link"
          type="submit"
          className={s.btn}
          onClick={() => router.push('/auth/forgotPassword')}
        />
      </div>
      {componentLoaded && !mobileImg && imgEmailExpired}
    </div>
  )
}
