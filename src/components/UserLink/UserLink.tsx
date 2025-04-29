import Link from 'next/link';
import styles from './UserLink.module.scss';
import Image from 'next/image';

type Props = {
    userId: number
    avatarUrl: string
    author: string
}
export const UserLink = (props: Props) => {
    const {userId, avatarUrl, author} = props
    return (
        <Link href={`/profile/${userId}`} className={styles.userLink}>
            <Image width={36} height={36} src={avatarUrl || '/img/defaultAvatar.jpg'} className={styles.avatarUser}
                   alt={''}/>
            <div className={styles.userName}>{author}</div>
        </Link>
    )
}