import {baseApi} from '@/common/api/baseApi';


export const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
/*        registration: build.query<User, void>({
            query: () => {
                return {
                    method: 'GET',
                    url:API_URLS.USER.GET_ALL_USERS,
                }
            },
        }),*/
    }),
})