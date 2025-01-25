'use client'

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
      <DynamicComponentWithNoSSR />
  )
}
