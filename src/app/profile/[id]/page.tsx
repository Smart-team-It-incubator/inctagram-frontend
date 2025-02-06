import {PostModal} from '@/features/PostModal/PostModal';

type Props = {
    userId: string
    searchParams?: { post?: string }
}

export default async function PublicProfilePage(props:Props) {
    const {userId, searchParams} = props

    const postId = searchParams?.post

    return (
        <div>
            <h1>Публичный профиль пользователя {userId}</h1>
            {postId && <>{await PostModal({ params: { postId } })}</>}
        </div>
    )
}