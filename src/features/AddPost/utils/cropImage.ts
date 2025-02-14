import { Area } from 'react-easy-crop'

export const blobUrlToFile = async (blobUrl: string, fileName: string, mimeType: string) => {
  const response = await fetch(blobUrl); 
  const blob = await response.blob();
  return new File([blob], fileName, { type: mimeType }); 
};




export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

export function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180
}

export function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation)
  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
): Promise<string | null> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  console.log('imageSrc: ', imageSrc)
  if (!ctx) {
    return null
  }

  const rotRad = getRadianAngle(rotation)

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation)

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  const croppedCanvas = document.createElement('canvas')

  const croppedCtx = croppedCanvas.getContext('2d')

  if (!croppedCtx) {
    return null
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width
  croppedCanvas.height = pixelCrop.height

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // As Base64 string
  // return croppedCanvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    croppedCanvas.toBlob(file => {
      if (file) {
        console.log('URL: ', URL.createObjectURL(file))
        console.log('file: ', file)
        URL.revokeObjectURL
        resolve(URL.createObjectURL(file)) // Если file не null, возвращаем URL
      } else {
        reject(new Error('Failed to create blob from canvas')) // Обрабатываем случай null
      }
    }, 'image/png')
  })
}

export const cropImage = async (image: string, croppedAreaPixels: Area): Promise<string | null> => {
  // const [croppedImage, setCroppedImage] = useState<string | null>(null)
  try {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels)
    // console.log('donee', { croppedImage })
    // setCroppedImage(croppedImage)
    // setCurrentPostImage((prev: UpdatePostImageActionPayload) => ({
    //   ...prev,
    //   croppedImageUrl:  croppedImage
    // }));

    return croppedImage
  } catch (e) {
    console.error(e)
    throw new Error('Failed to crop image')
  }
}
