'use client'
import {createContext, useContext, useEffect, useState} from 'react';
import {useLazyAuthMeQuery} from '@/common/api/authApi';
import {AuthMe} from '@/common/api/auth.types';

type AuthContextType = {
    auth: AuthMe;
    refetchAuth: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: { children: React.ReactNode }) {
    const [fetchAuthMe, {data: auth}] = useLazyAuthMeQuery();
    const [authState, setAuthState] = useState<any>(null);

    console.log('AuthProvider data: auth', auth)

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            fetchAuthMe().unwrap().then(setAuthState);
        }
    }, []);

    const refetchAuth = () => {
        fetchAuthMe().unwrap().then((resAuth) => setAuthState(resAuth));
    };

    return (
        <AuthContext.Provider value={{auth: authState, refetchAuth}}>
            {children}
        </AuthContext.Provider>
    );
}


//хук для компонент const {refetchAuth, auth } = useAuth();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};