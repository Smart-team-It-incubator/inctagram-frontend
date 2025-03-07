
import { Container } from '@/components/shared/Container'
import SignIn from '@/features/SignIn/SignIn';

export default function Auth() {
  return (
    <Container margin={'24px auto'} maxWidth={'378px'}>
      <SignIn />
    </Container>
  )
}
