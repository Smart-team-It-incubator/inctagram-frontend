import {Container} from '@/components/shared/Container';
import styles from './PublicPage.module.scss';
import React from 'react';
import {RegisteredCounter} from '@/features/publicPage/RegisteredCounter';
import {CardsList} from '@/features/publicPage/CardsList';



export const PublicPage = async() => {
    const res = await fetch('https://smart-reg.org.ru/api/v1/users', {
        next: { revalidate: 60 },
    })
    const data = await res.json();
    const totalUsers=data.length
    const cardsList = await CardsList();

    return (
        <Container maxWidth = '972px' className={styles.container}>
            <RegisteredCounter totalUsers={totalUsers}/>
            {cardsList}
        </Container>
    )
}