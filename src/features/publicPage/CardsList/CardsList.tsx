import {Post, PublicPosts} from '@/common/api/posts/posts.types';
import {Card} from '@/features/publicPage/CardsList/Card';
import styles from './CardsList.module.scss'

export const CardsList = async () => {

    const res = await fetch(`https://inctagram.work/api/v1/public-posts/all?pageSize=4`, {next: {revalidate: 60},})

    const data: PublicPosts = await res.json();
    const posts = data.items

    return (
        <div className={styles.cardsContainer}>
            {posts.map((post: Post) => <Card post={post} key={post.id}/>)}
        </div>
    )
}
