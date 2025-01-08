

import { Crop } from '@/features/AddPost/CropPhoto/Crop'
import { PhotoEditor } from '@/features/AddPost/CropPhoto/PhotoEditor'
import { ModalWindow } from '@/features/AddPost/ModalWindow'

export default function Home() {
  return (
    <div>
      main page
     <ModalWindow><Crop /></ModalWindow>
    </div>
  )
}
