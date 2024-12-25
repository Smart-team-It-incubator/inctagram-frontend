import Image from 'next/image'
import { Button } from '@/components/Button'
import { CustomAccordion } from './CustomAccordion'

import styles from './RightBlock.module.scss'

type Props = {
  isAuth?: boolean
}

export const RightBlock = ({ isAuth }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        {isAuth && (
          <Image src="/Mask.svg" alt="Bell" width={24} height={24} className={styles.bell} />
        )}
        <CustomAccordion />
        {!isAuth && (
          <>
            <div className={styles.hideOnMobile}>
              <Button variant="text">Log in</Button>
              <Button>Sign up</Button>
            </div>
            <span className={styles.ellipsis}>...</span>
          </>
        )}
      </div>
    </div>
  )
}
