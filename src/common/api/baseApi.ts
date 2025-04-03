'use client'

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            /*      baseUrl: 'smart-reg.org.ru/api/v1',*/
            baseUrl: 'https://inctagram.work/',
            credentials: 'include',
            prepareHeaders: headers => {
                const token = localStorage.getItem('accessToken')
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`)
                }
                // в Хедерс будет добавл 'application/json', если работаем НЕ с FormData
                // для запроса createPost body возвращаем как FormData, у него не должно быть 'Content-Type', 'application/json'
                if (!(args.body instanceof FormData)) {
                    headers.set('Content-Type', 'application/json')
                }
                return headers
            },
        })(args, api, extraOptions)


        if (result.error?.status === 401) {
            console.log('401 ошибка, пойдет запрос на обновл токена');

            // Запрос на обновление токенов
            const refreshResponse = await fetch('https://inctagram.work/api/v1/auth/update-tokens', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (refreshResponse.ok) {
                const {accessToken} = await refreshResponse.json();
                localStorage.setItem('accessToken', accessToken);

                // Повторяем изначальный запрос
                return fetchBaseQuery({
                    baseUrl: 'https://inctagram.work/',
                    credentials: 'include',
                    prepareHeaders: (headers) => {
                        headers.set('Authorization', `Bearer ${accessToken}`);
                        if (!(args.body instanceof FormData)) {
                            headers.set('Content-Type', 'application/json');
                        }
                        return headers;
                    },
                })(args, api, extraOptions);
            }
        }

        return result;
    },
    endpoints: () => ({}),
    reducerPath: 'auth',
    tagTypes: ['auth'],
})

export const baseApiAuthAndGithub = createApi({
    reducerPath: 'authAndGithub',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://inctagram.work/',
        credentials: 'include',

        prepareHeaders: headers => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
    }),
    endpoints: () => ({}),
    tagTypes: [],
})
