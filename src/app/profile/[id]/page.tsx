import {PostModal} from '@/features/PostModal/PostModal';

type Props = {
    params:any
    searchParams:any
}

export default async function PublicProfilePage({params, searchParams}:Props) {
    const {userId} = params

    const postId = searchParams?.post

    return (
        <div>
            <h1>Публичный профиль пользователя {userId}</h1>
            {postId && <>{await PostModal({ params: { postId } })}</>}
        </div>
    )
}