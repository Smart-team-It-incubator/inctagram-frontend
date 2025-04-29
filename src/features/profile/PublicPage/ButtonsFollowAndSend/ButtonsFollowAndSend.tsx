'use client'

import { withAuthMe } from '@/common/HOC/WithAuth'
import { Button } from '@/components/Button'
import s from './ButtonsFollowAndSend.module.scss'
import { useEffect, useState } from 'react'

type Props = {
  size?: string
  auth?: any
}

const ButtonsFollowAndSend = ({ size, auth }: Props) => {
  const [userId, setUserId] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserId(Number(window.location.pathname.split('/').pop()))
    }
  }, [])

  // Пока userId не определен, не рендерим ничего
  if (userId === undefined || !auth) return null

  if (auth.userId === userId && !size) {
    return (
      <Button variant="secondary" className={s.settingTablet}>
        Profile Settings
      </Button>
    )
  }

  if (auth.userId !== userId && size) {
    return (
      <div className={`${s.buttons} ${s[size] || ''}`}>
        <Button variant="primary">Follow</Button>
        <Button variant="secondary">Send Message</Button>
      </div>
    )
  }

  return null
}

export default withAuthMe(ButtonsFollowAndSend)
