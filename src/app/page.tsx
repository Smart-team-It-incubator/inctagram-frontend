import { PostModal } from '@/features/PostModal/PostModal'

export default function Home() {
  // return <div>ГЛАВНАЯ СТРАНИЦА</div>
  return <PostModal params={{ postId: 'user' }} />
}
