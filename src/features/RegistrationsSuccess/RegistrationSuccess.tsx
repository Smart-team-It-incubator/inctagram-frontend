'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/shared/Container'
import { useRouter } from 'next/navigation'

import styles from './RegistrationSuccess.module.scss'

import { CongratulationsSignUp } from '../../../public/icons/CongratulationsSignUp'
import {ROUTES} from '@/common/routes/routes';

export const RegistrationSuccess = () => {
    const router = useRouter()

    return (
        <Container margin={'24px auto'}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Congratulations</h1>
                <p className={styles.description}>Your email has been confirmed</p>
                <Button
                    className={styles.signInBtn}
                    onClick={() => router.push(ROUTES.SIGN_IN)}
                    variant={'primary'}
                >
                    Sign In
                </Button>
                <CongratulationsSignUp />
            </div>
        </Container>
    )
}