"use client"
import { Logo } from '../shared/Logo'
import { RightBlock } from './RightBlock'
import s from './Header.module.scss'
import { CustomAccordion } from './RightBlock/CustomAccordion'
import {useAuth} from '@/common/providers/AuthProvider';

export const Header = () => {

    const { auth } = useAuth();

  return (
    <div className={s.container}>
      <header className={s.wrapper}>
        <Logo />
        <div className={s.rightSide}>
          <CustomAccordion />
          <RightBlock isAuth={!!auth}/>
        </div>
      </header>
    </div>
  )
}
