import { SignIn } from '@/features/SignI'
import { Container } from '@/components/shared/Container'

export default function Auth() {
  return (
    <Container margin={'24px auto'} maxWidth={'378px'}>
      <SignIn />
    </Container>
  )
}
