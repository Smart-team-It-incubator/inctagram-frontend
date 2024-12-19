import { Logo } from '../shared/Logo'
import { Divider } from '../shared/Divider'
import { Container } from '../shared/Container'
import { RightBlock } from './RightBlock/RightBlock'

import styles from './Header.module.scss'

type Props = {
  isAuth?: boolean
}

export const Header = ({ isAuth = true }: Props) => {
  return (
    <>
      <Container>
        <header className={styles.wrapper}>
          <Logo />
          <RightBlock isAuth={isAuth} />
        </header>
      </Container>
      <Divider />
    </>
  )
}