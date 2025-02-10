import { createSlice } from '@reduxjs/toolkit'

type PostImage = {
    id: string | null
    imageUrl: string | null
    croppedImageUrl: string | null
}
type PostInitialState = {
  id: string | null
  images: PostImage[]
}
const initialState: PostInitialState = {
    id: null,
    images: []

}
export const postSlice = createSlice({
  initialState,
  name: 'postSlice',
  reducers: {
   
  },
})

export const postActions = postSlice.actions
export const postReducers = postSlice.reducer