import Image from 'next/image'
import styles from './Card.module.scss'
import Link from "next/link"

type Props={
    card:any
}

export const Card = (props:Props) => {
    // Клиентская компонента, экспандит дескрипшен, есть карусель и редирект на профиль юзера

/*    const [expand, setExpand]=useState(false)*/

    return (
        <div className={styles.cardContainer}>
            <Image src="/" width={234} height={24} alt="post" className={styles.photo}/>
            <Link href={"/"} className={styles.useLink}>
                <div className={styles.userAvatar}></div>
                <div className={styles.userName}></div>
            </Link>
            <div className={styles.wasTimeAgo}>22 min ago</div>
            <div className={styles.descriptionPhoto}></div>
        </div>
    )
}

//Вынести в отдельную компоненту, будет переиспользваться
/*
<Link href={"/"} className={styles.userBlock}>
    <div className={styles.userAvatar}></div>
    <div className={styles.userName}></div>
</Link>*/
