import styles from '@/features/publicPage/PublicPage.module.scss';
import React from 'react';

type Props={
    totalUsersCount: number
}

export const RegisteredCounter = (props:Props)=>{

    // Клиентская компон, РТК Квери перезапрашивает каждую минуту новый список юзеров и обновл тоталКаунт

    const {totalUsersCount}=props

    return (
        <div className={styles.registeredBlock}>
            <p>Registered users:</p>
            <div>1 2 3 4 5 6</div>
        </div>
    )
}