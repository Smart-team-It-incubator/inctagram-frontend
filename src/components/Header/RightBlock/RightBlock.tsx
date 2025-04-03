'use client'

import s from './RightBlock.module.scss'
import { Dropdown } from './Dropdown/Dropdown'
import { ButtonsAuth } from './ButtonsAuth/ButtonsAuth'
import { Notice } from './Notice/Notice'
import { CustomAccordion } from './CustomAccordion'

type Props = {
  isAuth?: boolean
}

export const RightBlock = ({ isAuth }: Props) => {

  return (
    <div className={s.wrapper}>
      <div className={s.notice}>{isAuth && <Notice />}</div>
      {/*  */}
      <CustomAccordion />
      <div className={!isAuth ? s.btn : ''}>{!isAuth && <ButtonsAuth isAuth={isAuth} />}</div>
      <div className={s.drop}>
        <Dropdown isAuth={isAuth} />
      </div>
    </div>
  )
}
