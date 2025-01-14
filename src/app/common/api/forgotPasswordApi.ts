import { instance } from '../instance/instance'

export const forgotPasswordApi = {
  sendingMail(email: string) {
    return instance.post('/api/v1/auth/password-reset/request', { email: email })
  },
}

// export const forgotPasswordApi = {
//     async sendingMail(email: { email: string }) {
//       const response = await fetch(
//         'https://auth.smart-reg.org.ru/api/v1/auth/password-reset/request',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(email),
//         }
//       )
//       // return instance.post('/api/v1/auth/password-reset/request', email)
//     },
//   }
