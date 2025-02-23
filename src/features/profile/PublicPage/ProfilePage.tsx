import s from './ProfilePage.module.scss'
import { Avatar } from '@/features/PostModal/Avatar/Avatar'
import { Indicator } from './Indicator/Indicator'
import { Button } from '@/components/Button'
import { Post } from './Post/Post'
import { notFound } from 'next/navigation'
import { getUserById, getUserPosts } from '@/common/api/requestsSSR/SSRApi'
import { Posts, User } from '@/common/api/requestsSSR/ssr.types'
// import Link from 'next/link'
// import { ROUTES } from '@/common/routes/routes'
// import { cookies } from 'next/headers'

type Props = {
  profileId: string
}

export const ProfilePage = async ({ profileId }: Props) => {
  const user: User = await getUserById(profileId)
  const posts: Posts = await getUserPosts(profileId)

  const avatar = user?.avatars.length
    ? user.avatars[0]?.url
    : 'https://rent.5ka.ru/img/media/no_img.png'

  if (!user) {
    notFound()
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.avatar}>
          <Avatar src={avatar} />
        </div>

        <div className={s.right}>
          <div className={s.wrapper}>
            <h2 className={s.title}>{user.userName}</h2>
            {/* <Link href={ROUTES.PROFILE_SETTINGS}>
              <Button variant="secondary">Profile Settings </Button>
            </Link> */}
            {buttonsFollowAndSend(`${s.buttons} `)}
          </div>

          <div className={s.indicator}>
            <Indicator count={user.userMetadata.following} description="Following" />
            <Indicator count={user.userMetadata.followers} description="Followers" />
            <Indicator count={user.userMetadata.publications} description="Publications" />
          </div>
          {buttonsFollowAndSend(`${s.buttons} ${s.tablet}`)}
          <div>
            <p>{user.aboutMe}</p>
          </div>
        </div>
      </div>
      <h2 className={s.title}>{user.userName}</h2>
      {buttonsFollowAndSend(`${s.buttons} ${s.mobile}`)}

      <p className={s.text}>{user.aboutMe}</p>
      {
        <div className={s.images}>
          {posts.items.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      }
    </div>
  )
}

const buttonsFollowAndSend = (className: string) => {
  return (
    true && (
      <div className={className}>
        <Button variant="primary">Follow</Button>
        <Button variant="secondary">Send Message </Button>
      </div>
    )
  )
}
