export type PostImage = {
  id: string
  imageUrl: string
  croppedImageUrl: string | null
}

export type PostImages = PostImage[]

export type PostType = {
  id: string
  images: PostImages
}

export type UserPosts = PostType[]

export type UpdatePostImageActionPayload = {
    id: string,
    croppedImageUrl: string
}