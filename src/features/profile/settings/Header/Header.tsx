import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import s from './Header.module.scss'

const tabs = [
  { name: 'General Information', href: '/profile/settings/general', segment: 'general' },
  { name: 'Devices', href: '/profile/settings/devices', segment: 'devices' },
  { name: 'Account Management', href: '/profile/settings/account', segment: 'account' },
  { name: 'My Payments', href: '/profile/settings/payments', segment: 'payments' },
]

export const Header = () => {
  const activeSegment = useSelectedLayoutSegment() // Получаем текущий сегмент
  console.log(activeSegment)

  return (
    <div className={s.wrapper}>
      {tabs.map(tab => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`${s.item} ${activeSegment === tab.segment && s.active}`}
        >
          {tab.name}
        </Link>
      ))}{' '}
    </div>
  )
}
