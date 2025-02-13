export type PublicPosts = Post[]

export type Post = {
  id: string
  author: string
  text: string
  location: string
  createdAt: string
  userId: string
  photos: [
    {
      id: string
      url: string
      photoDescription: string
    }]
}
