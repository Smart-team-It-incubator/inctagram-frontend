"use client"
import { Logo } from '../shared/Logo'
import { RightBlock } from './RightBlock'
import s from './Header.module.scss'
import { CustomAccordion } from './RightBlock/CustomAccordion'
import { withAuthMe } from '@/common/HOC/WithAuth';



const Header = ({ auth }: { auth?: any }) => {

    return (
        <div className={s.container}>
            <header className={s.wrapper}>
                <Logo />
                <div className={s.rightSide}>
                    <CustomAccordion />
                    <RightBlock isAuth={!!auth}/>
                </div>
            </header>
        </div>
    );
};

export default withAuthMe(Header);
