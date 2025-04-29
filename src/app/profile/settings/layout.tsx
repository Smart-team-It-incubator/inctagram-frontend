'use client'

import { Container } from '@/components/shared/Container'
import { Header } from '@/features/profile/settings/Header/Header'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container margin={'36px 0 0 24px'} maxWidth="972px">
      {/* Навигация */}
      <Header />
      {/* Контент текущей вкладки */}
      <div className="mt-4">{children}</div>
    </Container>
  )
}
