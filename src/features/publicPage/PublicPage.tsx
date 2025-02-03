import {Container} from '@/components/shared/Container';
import styles from './PublicPage.module.scss';
import {CardsList} from '@/features/publicPage/CardsList';
import React from 'react';
import {RegisteredCounter} from '@/features/publicPage/RegisteredCounter';

export const PublicPage = () => {

    //это серв компо, тут запрос за юзерами и 4 постами.

    return (
        <Container className={styles.container}>
            <RegisteredCounter totalUsersCount={6}/>
            <CardsList/>
        </Container>
    )
}