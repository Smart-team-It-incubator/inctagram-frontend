import styles from './RegisteredCounter.module.scss';
import React from 'react';

type Props={
    totalUsers: number
}

export const RegisteredCounter = (props:Props)=>{

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