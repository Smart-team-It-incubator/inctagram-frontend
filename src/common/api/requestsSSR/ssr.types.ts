export type PostType = {
  id: number
  userName: string
  description: string
  location: string
  images: ImageType[]
  createdAt: string
  updatedAt: string
  ownerId: number
  avatarOwner: string
  owner: Owner
  likesCount: number
  isLiked: boolean
  avatarWhoLikes: boolean
}

export type ImageType = {
  url: string
  width: number
  height: number
  fileSize: number
  createdAt: string
  uploadId: string
}

type Owner = {
  firstName: string
  lastName: string
}

export type User = {
  aboutMe: string
  avatars: Avatar[]
  id: number
  userMetadata: { following: number; followers: number; publications: number }
  userName: string
}

type Avatar = { createdAt: string; fileSize: number; height: number; url: string; width: number }

export type Posts = {
  totalCount: number
  pageSize: number
  totalUsers: number
  items: Item[]
}

type Item = {
  id: number
  userName: string
  description: string
  location: string
  images: Image[]
  createdAt: string
  updatedAt: string
  ownerId: number
  avatarOwner: string
  owner: { firstName: string; lastName: string }
  likesCount: number
  isLiked: boolean
  avatarWhoLikes: boolean
}
type Image = {
  url: string
  width: number
  height: number
  fileSize: number
  createdAt: string
  uploadId: string
}
