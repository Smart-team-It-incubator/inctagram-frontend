'use client';

import {useEffect, ComponentType, useState} from 'react';
import {useAuthMeQuery} from '@/common/api/authApi';

export function withAuthMe<T extends object>(Component: ComponentType<T>) {
    return function WrappedComponent(props: T) {
        const [authState, setAuthState] = useState<string | null>(null)

        const {data: auth, refetch} = useAuthMeQuery();

        useEffect(() => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                console.log('withAuthMe useEffect')
                refetch().unwrap().then(() => setAuthState(token));
            }
        }, [refetch, authState]);

        return <Component {...props} auth={auth} trigger={refetch}/>; // refetch?:()=>void
    };
}

