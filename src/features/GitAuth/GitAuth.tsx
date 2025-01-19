'use client'

// import { useGitAuthQuery } from '@/common/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'
import { GithubIcon } from '../../../public/icons/GithubIcon'
import { useExchangeGithubCodeMutation, useGetGithubAuthUrlQuery } from '@/common/api/authApi'
import { useEffect } from 'react'

export const GitAuth = () => {
  const { data: authUrl } = useGetGithubAuthUrlQuery();
  const [exchangeCode] = useExchangeGithubCodeMutation();
  const searchParams = useSearchParams();
debugger
  console.log('searchParams', searchParams)
  console.log('authUrl', authUrl)
  console.log('exchangeCode', exchangeCode)
  
  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      exchangeCode({ code }).then((res) => {
        if ('data' in res) {
          console.log('Access token:', res.data);
        } else {
          console.error('Error:', res.error);
        }
      });
    }
  }, [searchParams, exchangeCode]);

  const handleLogin = () => {
      window.location.assign(authUrl ? authUrl : 'https://auth.smart-reg.org.ru/api/v1/auth/github')
  }

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.toString()}</p>;
  // const router = useRouter()
  //Is nessary RTKQuery here or can use just redirect??
  // const data = useGitAuthQuery()

  // const handleLogin = () => {

  //   router.push('https://auth.smart-reg.org.ru/api/v1/auth/github')
  //   window.location.assign('https://auth.smart-reg.org.ru/api/v1/auth/github')
  // }

  return (
    <>
      {/* {isLoading && <p>Загрузка...</p>}
    {error && <p>Ошибка: {error}</p>} */}
      {/* <img src="github.svg" alt="github_auth" onClick={handleLogin} style={{ cursor: 'pointer' }} /> */}
      <GithubIcon onClick={handleLogin} style={{ cursor: 'pointer' }} />
    </>
  )
}
