'use client'
import { AddPhotoModal } from '@/features/AddPost/AddPhoto/AddPhotoModal'


import { ModalWindow } from '@/features/AddPost/ModalWindow'

export default function Home() {
  return (
    <div>
      main page
      <ModalWindow>
        <AddPhotoModal />
      </ModalWindow>
    </div>
  )
}
