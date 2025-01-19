'use client'

// import { useGitAuthQuery } from '@/common/api/authApi'
import { useRouter } from 'next/navigation'
import { GithubIcon } from '../../../public/icons/GithubIcon'

export const GitAuth = () => {
  const router = useRouter()
  //Is nessary RTKQuery here or can use just redirect??
  // const data = useGitAuthQuery()

  const handleLogin = () => {
    router.push('https://auth.smart-reg.org.ru/api/v1/auth/github')
  }

  return (
    <>
      {/* <img src="github.svg" alt="github_auth" onClick={handleLogin} style={{ cursor: 'pointer' }} /> */}
      <GithubIcon onClick={handleLogin} style={{ cursor: 'pointer' }}/>
    </>
  )
}
