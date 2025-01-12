'use client'

import { ReactNode } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/shared/Container'
import { useRouter } from 'next/navigation'

import styles from './layout.module.scss'

import { ArrowBack } from '../../../../../public/icons/ArrowBack'

export default function AuthGroupLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const router = useRouter()

  return (
    <Container style={{ padding: '24px 2px' }}>
      <Button className={styles.button} onClick={() => router.push('/auth')} variant={'withIcon'}>
        <ArrowBack className={styles.iconArrow} />
        <div className={styles.text}>Back to Sign Up</div>
      </Button>
      {children}
    </Container>
  )
}
