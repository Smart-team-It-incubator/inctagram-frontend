import s from './ProfilePage.module.scss'
import { Avatar } from '@/features/PostModal/Avatar/Avatar'
import { Indicator } from './Indicator/Indicator'
import { Button } from '@/components/Button'
// import Link from 'next/link'
// import { ROUTES } from '@/common/routes/routes'
// import { cookies } from 'next/headers'

export const ProfilePage = async () => {
  // const token = await cookies()
  // console.log(token)

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.avatar}>
          <Avatar src="https://i.pinimg.com/736x/71/1b/53/711b5384406f643d21f52e3bc1eeb391.jpg" />
        </div>

        <div className={s.right}>
          <div className={s.wrapper}>
            <h2 className={s.title}>URLProfiele</h2>
            {/* <Link href={ROUTES.PROFILE_SETTINGS}>
              <Button variant="secondary">Profile Settings </Button>
            </Link> */}
            {buttonsFollowAndSend(`${s.buttons} `)}
          </div>

          <div className={s.indicator}>
            <Indicator count="2 218" description="Following" />
            <Indicator count="2 218" description="Following" />
            <Indicator count="2 218" description="Following" />
          </div>
          {buttonsFollowAndSend(`${s.buttons} ${s.tablet}`)}
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <h2 className={s.title}>URLProfiele</h2>
      {buttonsFollowAndSend(`${s.buttons} ${s.mobile}`)}

      <p className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      {
        <div className={s.images}>
          <img alt="post" src="/img/defaultAvatar.jpg" />
          <img alt="post" src="/img/defaultAvatar.jpg" />
          <img alt="post" src="/img/defaultAvatar.jpg" />
          <img alt="post" src="/img/defaultAvatar.jpg" />
          <img alt="post" src="/img/defaultAvatar.jpg" />
          <img alt="post" src="/img/defaultAvatar.jpg" />
          <img alt="post" src="/img/defaultAvatar.jpg" />
          <img alt="post" src="/img/defaultAvatar.jpg" />
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
