import {createSlice} from '@reduxjs/toolkit'
import {Post} from "@/common/api/posts/posts.types";





const initialState: Post = {
    id: '',
    text: '',
    location: '',
    createdAt: '',
    userId: '',
    photos: [
        {
            id: '',
            url: '',
            photoDescription: ''
        }]
}



export const postSlice = createSlice({
    initialState,
    name: 'postSlice',
    reducers: {
    },
})

export const postActions = postSlice.actions
export const postReducers = postSlice.reducer