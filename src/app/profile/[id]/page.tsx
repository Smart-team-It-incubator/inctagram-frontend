import { PostModal } from '@/features/PostModal/PostModal'
import { ProfilePage } from '@/features/profile/PublicPage/ProfilePage'

type Props = {
  params: any
  searchParams: any
}

export default async function PublicProfilePage({ searchParams, params }: Props) {
  const { post: postId } = await searchParams
  const { id: profileId } = await params

  return (
    <>
      {postId && <>{await PostModal({ params: { postId } })}</>}
      {await ProfilePage({ profileId })}
    </>
  )
}
