import {baseApi} from '@/common/api/baseApi';
import {API_URLS} from '@/common/api/apiURLs';
import {User} from '@/common/api/auth.types';


export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllUsers: build.query<any, void>({
            query: () => {
                return {
                    method: 'GET',
                    url: API_URLS.USER.GET_ALL_USERS
                }
            }
        }),
        getPublicProfileByUsername: build.query<User, string>({
            query: (userName) => {
                console.log('пришло в запрос:', userName)
                return {
                    method: 'GET',
                    url: `${API_URLS.USER.GET_PUBLIC_PROFILE_BY_USERNAME}${userName}`
                }
            }
        })
    }),
})

export const {useGetAllUsersQuery, useGetPublicProfileByUsernameQuery} = userApi