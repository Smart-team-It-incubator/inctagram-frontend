import { Container } from '@/components/shared/Container'
import s from './ProfilePage.module.scss'
import { Avatar } from '@/features/PostModal/Avatar/Avatar'
import { Indicator } from './Indicator/Indicator'
import Image from 'next/image'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { ROUTES } from '@/common/routes/routes'
import { cookies } from 'next/headers'

export const ProfilePage = async () => {
  const token = await cookies()
  console.log(token)

  return (
    <Container maxWidth="972px">
      <div className={s.header}>
        <Avatar
          src="https://i.pinimg.com/736x/71/1b/53/711b5384406f643d21f52e3bc1eeb391.jpg"
          className={s.avatar}
        />

        <div>
          <div className={s.wrapper}>
            <h2>URLProfiele</h2>
            <Link href={ROUTES.PROFILE_SETTINGS}>
              <Button variant="secondary">Profile Settings </Button>
            </Link>
          </div>
          <div className={s.indicator}>
            <Indicator count="2 218" description="Following" />
            <Indicator count="2 218" description="Following" />
            <Indicator count="2 218" description="Following" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className={s.images}>
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
        <Image alt="post" src="/img/defaultAvatar.jpg" width={228} height={234} />
      </div>
    </Container>
  )
}
