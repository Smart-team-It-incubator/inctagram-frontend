import {Container} from '@/components/shared/Container'
import styles from './PublicPage.module.scss'
import React from 'react'
import {RegisteredCounter} from '@/features/publicPage/RegisteredCounter'
import {CardsList} from '@/features/publicPage/CardsList'
import {TotalUsersCount} from '@/common/api/users/users.types';

export const PublicPage = async () => {
    const res = await fetch('https://inctagram.work/api/v1/public-user', {
        next: {revalidate: 60},
    })

    const data:TotalUsersCount = await res.json()
    const totalUsers = data.totalCount
    const cardsList = await CardsList()

    return (
        <Container maxWidth="972px" className={styles.container}>
            <RegisteredCounter totalUsers={totalUsers}/>
            {cardsList}
        </Container>
    )
}
