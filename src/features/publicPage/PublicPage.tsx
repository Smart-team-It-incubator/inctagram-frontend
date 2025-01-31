import {Container} from '@/components/shared/Container';
import styles from './PublicPage.module.scss';

export const PublicPage = () => {


    return (
        <Container className={styles.container}>
            <div className={styles.registeredBlock}>
                <p>Registered users:</p>
                <div>1 2 3 4 5</div>
            </div>
        </Container>
    )
}