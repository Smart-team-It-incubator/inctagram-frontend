'use client'

import { Header } from '@/features/profile/settings/Header/Header'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      {/* Навигация */}
      <Header />
      {/* Контент текущей вкладки */}
      <div className="mt-4">{children}</div>
    </div>
  )
}
