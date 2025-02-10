import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostImage, PostImages, PostType, UserPosts } from '../types'

import { v1 } from 'uuid'

type PostInitialState = {
  posts: UserPosts
}

const initialState: PostInitialState = {
  posts: [],
}

export const postSlice = createSlice({
  initialState,
  name: 'postSlice',
  reducers: {
    postInit: (state, action: PayloadAction<string>) => {
      const initPost = {
        id: v1(),
        images: [
          {
            id: v1(),
            imageUrl: action.payload,
            croppedImageUrl: null,
          },
        ],
      }

      state.posts.push(initPost)
      
    },
  },
})

export const postActions = postSlice.actions
export const postReducers = postSlice.reducer
