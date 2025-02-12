import { ReactNode } from "react"

import styles from './AddPhoto/addPhotoModal.module.scss'
import { Button } from "@/components/Button"

export const CreatePostWrapper = ({ children }: {children: ReactNode}) => {
    const nextButtonHandle = () => {}
  
    return (
      <>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Publication</h1>
          </div>
          <div className={styles.header_button}>
            <Button variant={'link'} onClick={nextButtonHandle}>
              Next
            </Button>
          </div>
        </div>
  
        {children}
      </>
    )
  }