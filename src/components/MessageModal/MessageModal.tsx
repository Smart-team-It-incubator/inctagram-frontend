import { CloseIcon } from '../../../public/icons'
import s from './messageModal.module.scss'
import { Button } from '@/components/Button'
type Props = {
  title: string
  open?: boolean
  email?: string
  callback: () => void
}

export const MessageModal = ({ title, email, open = true, callback }: Props) => {
  return (
    <>
      {open && (
        <>
          <div className={s.modal}></div>
          <div className={s.modal_content}>
            <div className={s.header}>
              <h2 className={s.title}>{title}</h2>
              <span className={s.close} onClick={callback}>
                <CloseIcon />
              </span>
            </div>

            <div className={s.body}>
              <p className={s.text}>We have sent a link to confirm your email to {email}</p>
              <div className={s.btn}>
                <Button children="ОК" onClick={callback} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
