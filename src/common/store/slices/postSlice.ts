import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostType, UpdatePostImageActionPayload, UserPosts } from '../types'

import { v1 } from 'uuid'

type PostInitialState = {
  posts: UserPosts,
  newPost: PostType
}

const initialState: PostInitialState = {
  posts: [],
  newPost: {
    id: v1(),
    images: [],
    text: '',
    location: 'Saint-Petersburg'
  }
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

    addImage: (state, action: PayloadAction<string>) => {
      state.newPost.images.push({
        id: v1(),
        imageUrl: action.payload,
        croppedImageUrl: ''
      })
    },

    cropImage: (state, action: PayloadAction<UpdatePostImageActionPayload>) => {
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
      },

      addPostText: (state, action: PayloadAction<string>) => {
        state.newPost.text = action.payload
      }
  },

 
})

export const postActions = postSlice.actions
export const postReducers = postSlice.reducer
