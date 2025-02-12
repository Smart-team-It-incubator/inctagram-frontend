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
      <div className={`${styles.block} ${styles.leftBlock}`}>
        <img src={image} alt='croppedImage' />
      </div>
      <div className={`${styles.block} ${styles.rightBlock}`}>
        Form
        <PublicationForm />
      </div>
    </div>
  )
}


