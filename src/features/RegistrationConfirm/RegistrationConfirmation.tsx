'use client'

import {useRouter, useSearchParams} from 'next/navigation';
import {useRegistrationConfirmationMutation} from '@/common/api/authApi';
import {useEffect} from 'react';
import {ROUTES} from '@/common/routes/routes';

export default function RegistrationEmailConfirmation() {
    const router = useRouter()
    const code = useSearchParams().get('code')
    const [emailConfirmation, {isLoading}] = useRegistrationConfirmationMutation()

    useEffect(() => {
        if (code) {
            emailConfirmation({confirmationCode: code})
                .unwrap()
                .then((data) => {
                    console.log('редирект с почты, ответ OK', data)
                    router.push(ROUTES.CONGRATULATIONS)
                })
                .catch((error) => {
                    console.log('редирект с почты, ответ error', error)
                    router.push(ROUTES.EMAIL_EXPIRED)
                })
        }
    }, [])

    if (isLoading) {
        return <p>Загрузка...</p>;
    }
    return null
}