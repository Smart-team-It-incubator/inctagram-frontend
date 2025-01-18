'use client'

import { useGitAuthQuery } from '@/common/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation';

export const GitAuth = () => {
  const router = useRouter()
  //Is nessary RTKQuery here or can use just redirect??
  // const data = useGitAuthQuery()
  
  const handleLogin = () => {
    router.push('https://auth.smart-reg.org.ru/api/v1/auth/github')
   
  };

  // if (isLoading) return <p>Загрузка...</p>;
  // if (error) return <p>Ошибка: {JSON.stringify(error)}</p>;

  return (
    
    <div>
      <h1>Авторизация через GitHub</h1>
      <button onClick={handleLogin}  style={{cursor: 'pointer'}}>
        Войти через GitHub
      </button>
    </div>
  );
}
