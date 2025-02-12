import { CustomInput } from '@/components/CustomInput'
import { Textarea } from '@/components/Textarea'
import { FormEvent, useEffect, useState } from 'react'
import styles from './publication.module.scss'
import { useCreatePostMutation } from '@/common/api/posts/postsApi'
import { useAppDispatch, useAppSelector } from '@/common/store/hooks'
import { postActions } from '@/common/store/slices/postSlice'
import { blobUrlToFile } from '../utils/cropImage'

type PublicationFormProps = {
  image: string,
  
}

export const PublicationForm = ({ image }: PublicationFormProps) => {
  const [text, setText] = useState<string>('')
  const [location, setLocation] = useState<string>('Saint-Petersburg')
  const toPublish = useAppSelector(state => state.postSlice.toPublish)

  const dispatch = useAppDispatch()

  const [createPost] = useCreatePostMutation()
  

  const submitForm = async () => {
    
    

    dispatch(postActions.addPostInformation({ text, location }))
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

  useEffect(() => {
    if (toPublish) {
      console.log('useEffect')
      submitForm()
      dispatch(postActions.setToPublish(false))
    }
    return () => {}
   
  },[toPublish])

  return (
    <div className={styles.form}>
      <div className={styles.profileInfo}></div>
      <div className={styles.formContent}>
        <form >
          <Textarea
            label="Add publication description"
            className={styles.formTextarea}
            value={text}
            onChange={(value: any) => setText(value)}
            required
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
        </form>
      </div>
    </div>
  )
}
