'use client'

import { Suspense, useEffect } from 'react'
import { useEmailConfirmationMutation } from '@/common/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'

function EmailConfirm() {
  const router = useRouter()
  const code = useSearchParams().get('code')
  const [emailConfirmation] = useEmailConfirmationMutation()

  useEffect(() => {
    if (code) {
      emailConfirmation({ code: code })
        .unwrap()
        .then(() => {
          router.push('/auth/signUp/congratulations')
        })
        .catch(() => {
          router.push('/auth/signUp/emailExpired')
        })
    }
  }, [])

  return null
}

// Обертка в границу suspense для использования useSearchParams()

export default function EmailConfirmWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmailConfirm />
    </Suspense>
  )
}
