export type Post = {
    id: string
    avatarOwner: string
    avatarWhoLikes: []
    createdAt: string
    description: string
    images: Image[]
    isLiked: boolean
    likesCount: number
    location: string | null
    owner: {
        firstName: string | null
        lastName: string | null
    }
    ownerId: number
    updatedAt: string
    userName: string
}

export type Image = {
    createdAt: string
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
}

export type PublicPosts = {
    items: Post[]
    pageSize: number
    totalCount: number
    totalUsers: number
}

