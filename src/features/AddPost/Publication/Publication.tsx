
import styles from "./publication.module.scss"
import { PublicationForm } from './PublicationForm'

type PropsType = {
  image: string,
 
}
export const Publication = ({ image }: PropsType) => {

  return (
    <div className={styles.publicationContent}>

      <div className={`${styles.block} ${styles.leftBlock}`}>
        <img src={image} alt='croppedImage' />
      </div>
      
      <div className={`${styles.block} ${styles.rightBlock}`}>
        <PublicationForm image={image} />
      </div>
    </div>
  )
}


