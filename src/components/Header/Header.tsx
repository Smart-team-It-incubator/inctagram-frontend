import { Logo } from '../shared/Logo'
import { RightBlock } from './RightBlock'
import s from './Header.module.scss'
import { CustomAccordion } from './RightBlock/CustomAccordion'

export const Header = () => {
  return (
    <div className={s.container}>
      <header className={s.wrapper}>
        <Logo />
        <div className={s.rightSide}>
          <CustomAccordion />
          <RightBlock />
        </div>
      </header>
    </div>
  )
}
