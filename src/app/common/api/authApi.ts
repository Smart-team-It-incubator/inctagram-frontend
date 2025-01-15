import { instanceAuthAndGithub } from '../instance/instance'

export const authApi = {
  sendingMail(email: string) {
    return instanceAuthAndGithub.post('/api/v1/auth/password-reset/request', { email: email })
  },
}
