import { PostModal } from '@/features/PostModal/PostModal'
import { ProfilePage } from '@/features/profile/PublicPage/ProfilePage'

type Props = {
  params: any
  searchParams: any
}

export default async function PublicProfilePage({ searchParams }: Props) {
  //   const { id } = await params

  const { post: postId } = await searchParams

  return (
    <>
      {postId && <>{await PostModal({ params: { postId } })}</>}
      {await ProfilePage()}
    </>
  )
}
