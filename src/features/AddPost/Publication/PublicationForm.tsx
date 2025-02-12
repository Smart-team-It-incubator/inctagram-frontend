import { Textarea } from '@/components/Textarea'
import { FormEvent, useState } from 'react'

export const PublicationForm = () => {
  const [text, setText] = useState<string>('')
  console.log('Text-', text)
  
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form:', e)
  }

  return (
    <form onSubmit={submitForm}>
      <Textarea
        label="Add publication description"
        // value={text}
        // onChange={(value: string) => setText(value)}
      />
      <button type="submit">YES</button>

    </form>
  )
}
