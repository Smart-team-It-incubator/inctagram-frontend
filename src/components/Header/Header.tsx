'use client'
import { Logo } from '../shared/Logo'
import s from './Header.module.scss'
import { withAuthMe } from '@/common/HOC/WithAuth'
import { RightBlock } from './RightBlock/RightBlock'

const Header = ({ auth }: { auth?: any }) => {
  return (
    <div className={s.container}>
      <header className={s.wrapper}>
        <Logo />

        <RightBlock isAuth={auth} />
      </header>
    </div>
  )
}

export default withAuthMe(Header)
