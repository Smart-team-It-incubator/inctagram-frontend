import { Container } from '@/components/shared/Container'
import { SignUp } from '@/features/SignUp'

export default function Auth() {
  return (
    <Container margin={'24px auto'} maxWidth={'378px'}>
      <SignUp />
    </Container>
  )
}

// /auth/signUp/