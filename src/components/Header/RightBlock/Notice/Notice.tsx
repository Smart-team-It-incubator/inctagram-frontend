import Image from 'next/image'
import s from './Notice.module.scss'

export const Notice = () => {
  return (
    <div className={s.wrapper}>
      <Image src="/Mask.svg" alt="Bell" width={24} height={24} className={s.bell} />
      <span className={s.notice}>3</span>
    </div>
  )
}
