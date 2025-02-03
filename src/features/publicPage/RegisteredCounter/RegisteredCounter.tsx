import styles from './RegisteredCounter.module.scss';
import React from 'react';

type Props={
    totalUsers: number
}

export const RegisteredCounter = (props:Props)=>{

    // Клиентская компон, РТК Квери перезапрашивает каждую минуту новый список юзеров и обновл тоталКаунт

    const {totalUsers}=props
    const totalUsersCount = totalUsers?.toString().padStart(6, '0').split('') || []
        const mappedCount= totalUsersCount.map((count, index) => (
            <div className={styles.numberContainer} key={index}>{count}</div>
        ))

    return (
        <div className={styles.registeredBlock}>
            <p>Registered users:</p>
            <div className={styles.countContainer}>{mappedCount}</div>
        </div>
    )
}