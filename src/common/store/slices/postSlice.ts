import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostImage, PostImages, PostType, UserPosts } from '../types'

import { v1 } from 'uuid'

type PostInitialState = {
  posts: UserPosts,
  newPost: PostType
}

const initialState: PostInitialState = {
  posts: [],
  newPost: {
    id: v1(),
    images: []
  }
}

type UpdatePostImages = {
    id: string,
    croppedImageUrl: string
}
export const postSlice = createSlice({
  initialState,
  name: 'postSlice',
  reducers: {
    postInit: (state, action: PayloadAction<string>) => {
      const newImage = [{
            id: v1(),
            imageUrl: action.payload,
            croppedImageUrl: null,
     }]
    
     state.newPost.id = v1()
     state.newPost.images = newImage
    },

    cropImage: (state, action: PayloadAction<UpdatePostImages>) => {
        const updateImage = state.newPost.images.map(image => {
             if (image.id === action.payload.id) {
                return {...image, croppedImageUrl: action.payload.croppedImageUrl }
             }

             return image
        })
        state.newPost = {
            ...state.newPost,
            images: updateImage
        }
      }
  },

 
})

export const postActions = postSlice.actions
export const postReducers = postSlice.reducer
