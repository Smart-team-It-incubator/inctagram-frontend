'use client'
// import { NewPassword } from '@/features/NewPassword/NewPassword'
import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  async () => {
    const module = await import('../../../features/NewPassword/NewPassword');
    return module.NewPassword;
  },

  { ssr: false }
)




export default function forgotPassword() {
  return (
    <>
      <DynamicComponentWithNoSSR/>
    </>
  )
}
