import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

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
    <div className="flex space-x-6 border-b pb-2">
      {tabs.map(tab => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`px-4 py-2 ${
            activeSegment === tab.segment
              ? 'text-white border-b-2 border-blue-500'
              : 'text-gray-400'
          }`}
        >
          {tab.name}
        </Link>
      ))}{' '}
    </div>
  )
}
