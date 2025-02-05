import {baseApi} from '@/common/api/baseApi';
import {API_URLS} from '@/common/api/apiURLs';


export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllUsers: build.query<any, void>({
            query: () => {
                return {
                    method: 'GET',
                    url: API_URLS.USER.GET_ALL_USERS
                }
            }
        })
    }),
})

export const {useGetAllUsersQuery} = userApi