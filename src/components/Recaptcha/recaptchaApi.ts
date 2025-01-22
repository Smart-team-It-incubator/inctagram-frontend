export const recaptchaApi = (token: string | null) => {
  const url = 'https://auth.smart-reg.org.ru/api/v1/auth/recaptcha'
  const postData = {
    token,
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  }

  fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response
    })
    .catch(error => {
      console.log('There was a problem with the fetch operation:', error)
    })
}
