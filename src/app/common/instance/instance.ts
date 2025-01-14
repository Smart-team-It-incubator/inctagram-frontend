import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://auth.smart-reg.org.ru',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
})

// baseURL: 'https://auth.smart-reg.org.ru/',
