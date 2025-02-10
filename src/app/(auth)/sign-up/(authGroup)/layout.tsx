'use client'

import { ReactNode } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/shared/Container'
import { useRouter } from 'next/navigation'

import styles from './layout.module.scss'

import { ArrowBack } from '../../../../../public/icons/index'
import {ROUTES} from '@/common/routes/routes';

export default function AuthGroupLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const router = useRouter()

  return (
    <Container className={styles.container}>
            <Button className={styles.button} onClick={() => router.push(ROUTES.SIGN_UP)} variant={'withIcon'}>
                <ArrowBack className={styles.iconArrow} />
                <div className={styles.text}>Back to Sign Up</div>
            </Button>
            {children}
    </Container>
  )
}
