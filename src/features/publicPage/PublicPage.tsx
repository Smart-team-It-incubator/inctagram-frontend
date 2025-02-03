import {Container} from '@/components/shared/Container';
import styles from './PublicPage.module.scss';
import {CardsList} from '@/features/publicPage/CardsList';
import React from 'react';
import {RegisteredCounter} from '@/features/publicPage/RegisteredCounter';


export const PublicPage = async() => {
    const res = await fetch('https://smart-reg.org.ru/api/v1/users', {
        next: { revalidate: 60 },
    })
    const data = await res.json();
    const totalUsers=data.length

    return (
        <Container className={styles.container}>
            <RegisteredCounter totalUsers={totalUsers}/>
            <CardsList/>
        </Container>
    )
}