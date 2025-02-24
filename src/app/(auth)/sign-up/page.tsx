'use client'

import dynamic from 'next/dynamic'

export default function Auth() {
  const DynamicComponentWithNoSSR = dynamic(
    async () => {
      const module = await import('../../../../src/features/SignUp/SignUp')
      return module.SignUp
    },

    { ssr: false }
  )

  return (
      <DynamicComponentWithNoSSR />
  )
}
