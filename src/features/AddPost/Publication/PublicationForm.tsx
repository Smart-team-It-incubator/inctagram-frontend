import { CustomInput } from '@/components/CustomInput'
import { FormInput } from '@/components/FormInput/FormInput'
import { Textarea } from '@/components/Textarea'
import { FormEvent, useState } from 'react'
import styles from './publication.module.scss'

export const PublicationForm = () => {
  const [text, setText] = useState<string>('')
  const [location, setLocation] = useState<string>('Saint-Petersburg')

  console.log('Text-', text)

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form:', e)
  }

  return (
    <div className={styles.form}>
      <div className={styles.profileInfo}></div>
      <div className={styles.formContent}>
        <form onSubmit={submitForm}>
          <Textarea
            label="Add publication description"
            className={styles.formTextarea}
            value={text}
            onChange={(value: string) => setText(value)}
          />

          <div className={styles.formLocation}></div>
          <CustomInput
            title="Add location"
            value={location}
            type="text"
            icon="eye"
            placeholder="Saint-Petersburg"
          />
          <h2>Location</h2>
          <p>{location}</p>
          <button type="submit">YES</button>
        </form>
      </div>
    </div>
  )
}
