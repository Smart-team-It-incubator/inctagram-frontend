'use client'

// import { useGitAuthQuery } from '@/common/api/authApi'

import { GithubIcon } from '../../../public/icons/GithubIcon'

export const GitAuth = () => {
  const handleLogin = () => {
    window.location.assign('https://auth.smart-reg.org.ru/api/v1/auth/github')
  }

  return (
    <>
      <GithubIcon onClick={handleLogin} style={{ cursor: 'pointer' }} />
    </>
  )
}
