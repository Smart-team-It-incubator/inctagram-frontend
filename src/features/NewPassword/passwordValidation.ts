const regex =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,20}$/

type Props = {
  firstPassword: string
}

export const passwordValidation = ({ firstPassword }: Props) => {
  if (firstPassword.length < 6 || firstPassword.length > 20) {
    return 'Your password must be between 6 and 20 characters'
  } else if (!regex.test(firstPassword)) {
    return (
      `Пароль должен содержать буквы и цифры в диапазоне [A-Z] [a-z] [0-9] ` +
      'и любой из этих символов' +
      `! " # $ % & ' ( ) * + , - . / : ; < = > ?
    @ [ \ ] ^ _` +
      '` { | } ~'
    )
  }

  return ''
}
