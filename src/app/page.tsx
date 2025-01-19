'use client'
export default function Home() {
  // const queryString = 'https://auth.smart-reg.org.ru/api/v1/auth/github/callback'
  // const urlParams = new URLSearchParams(queryString)
  // const accessToken = urlParams.get('access-token')
  // console.log('urlParams ', urlParams)
  const s = window.location.search

  const urlParams = new URLSearchParams(s);
const code = urlParams.get('code');
console.log('Authorization code:', s);


  return <div>Home</div>
}
