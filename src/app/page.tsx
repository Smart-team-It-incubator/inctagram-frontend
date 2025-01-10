import { AddPhotoModal } from '@/features/AddPost/AddPhoto/AddPhotoModal'
import { Crop } from '@/features/AddPost/CropPhoto/Crop'
import { PhotoEditor } from '@/features/AddPost/CropPhoto/PhotoEditor'
import PreviousValueTracker from '@/features/AddPost/CropPhoto/TestUseRef'
import { ModalWindow } from '@/features/AddPost/ModalWindow'

export default function Home() {
  return (
    <div>
      main page
      <PreviousValueTracker />
      <ModalWindow>
        <AddPhotoModal />
      </ModalWindow>
    </div>
  )
}
