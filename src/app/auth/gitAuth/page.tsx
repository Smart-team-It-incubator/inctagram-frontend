'use client'
import { useGitAuthQuery, useRecoveryRequestMutation } from '@/common/api/authApi'
import { useState } from 'react'

export const GitAuth = () => {
  const {data} = useGitAuthQuery();
  
  // const [skip, setSkip] = useState<boolean>(true)

  console.log('githQuery-data: ', data)

  return (
    <>
      <div >
        <img src="github.svg" alt="" />
      </div>
    </>
  )
}
