import { Button } from '@/components/Button'

import { ReactNode } from 'react'
import Image from 'next/image'

import styles from "./publication.module.scss"
import { PublicationForm } from './PublicationForm'

type PropsType = {
  image: string
}
export const Publication = ({ image }: PropsType) => {
  const nextButtonHandle = () => {}
  return (
    <div className={styles.publicationContent}>
      <div className={styles.leftBlock}>
        <Image src={image} alt='croppedImage' width={100} height={100}/>
      </div>
      <div className={styles.rightBlock}>
        Form
        <PublicationForm />
      </div>
    </div>
  )
}


