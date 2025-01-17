import axios from 'axios'

export const instanceAuthAndGithub = axios.create({
  baseURL: 'https://auth.smart-reg.org.ru',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const instance = axios.create({
  baseURL: 'https://smart-reg.org.ru',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
