'use client'

import { Container } from '@/components/shared/Container'
// import { SignUp } from '@/features/SignUp'
import dynamic from 'next/dynamic'

export default function Auth() {
  const DynamicComponentWithNoSSR = dynamic(
    async () => {
      const module = await import('../../../features/SignUp/SignUp')
      return module.SignUp
    },

    { ssr: false }
  )

  return (
    <Container margin={'24px auto'} maxWidth={'378px'}>
      <DynamicComponentWithNoSSR />
    </Container>
  )
}

// /auth/signUp/
