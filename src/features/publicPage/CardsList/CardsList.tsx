import {Post, PublicPosts} from '@/common/api/posts/posts.types';
import {Card} from '@/features/publicPage/CardsList/Card';

export const CardsList = async () => {

    // Должна быть СЕРВЕРНАЯ КОМПОНЕНТА, возвр 4 поста и подгружать каждую минуту новые

    const res = await fetch('https://smart-reg.org.ru/api/v1/public/posts', {next: {revalidate: 60},})
    const data:PublicPosts = await res.json();
    const posts = data.slice(0, 4)

    return (
        <>
            {posts.map((post: Post) => <Card post={post} key={post.id}/>)}
        </>
    )
}