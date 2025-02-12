import { CustomInput } from '@/components/CustomInput'
import { FormInput } from '@/components/FormInput/FormInput'
import { Textarea } from '@/components/Textarea'
import { FormEvent, useState } from 'react'
import styles from './publication.module.scss'
import { useCreatePostMutation } from '@/common/api/posts/postsApi'
import { useAppDispatch } from '@/common/store/hooks'
import { postActions } from '@/common/store/slices/postSlice'
import { blobUrlToFile } from '../utils/cropImage'

type PublicationFormProps = {
  image: string
}
export const PublicationForm = ({ image }: PublicationFormProps) => {
  const [text, setText] = useState<string>('')
  const [location, setLocation] = useState<string>('Saint-Petersburg')

  const dispatch = useAppDispatch()

  const [createPost] = useCreatePostMutation()

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await dispatch(postActions.addPostText(text))
    console.log('Data: ', text, '\n', location, '\n', image)

    const file = await blobUrlToFile(image, 'image.png', 'image/png')
    

    try {
      await createPost({
        text,
        location,
        files: [file],
      }).unwrap()
      console.log('Пост успешно создан!')
    } catch (error) {
      console.error('Ошибка при создании поста:', error)
    }
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
            onChange={(value: any) => setText(value)}
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
