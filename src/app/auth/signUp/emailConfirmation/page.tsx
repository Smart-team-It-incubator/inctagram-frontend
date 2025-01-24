'use client'

import { useEffect } from 'react'

import { useEmailConfirmationMutation } from '@/common/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'

export default function EmailConfirm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const code = searchParams.get('code')
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