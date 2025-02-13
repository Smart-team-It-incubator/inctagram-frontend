import styles from './Profile.module.scss'
import {Description} from "@/components/Profile/Description";
import {PostModal} from "@/features/PostModal/PostModal";
import {Avatar} from "@/features/PostModal/Avatar/Avatar";

type Props = {
    params:any
    searchParams:any
}

export default async function PublicProfilePage({params, searchParams}:Props) {
    const {userId} = params
    const postId = searchParams?.post
    return (
        <>
            <h1>Публичный профиль пользователя {userId}</h1>


            <div className={styles.wrapper}>
                <Avatar className={""} src={""} />
                    <Description name={"URLProfile"}
                                 descriptionProfile={'ipsum dolor sit amet, consectetur adipisicing elit Dolore ducimus molestiae'}
                    />
                </div>
            {postId && <>{await PostModal({ params: { postId } })}</>}
        </>
    )
}