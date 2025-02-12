import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostType, UpdatePostImageActionPayload, UserPosts } from '../types'

import { v1 } from 'uuid'

type PostInitialState = {
  posts: UserPosts
  newPost: PostType
  toPublish: boolean
}

type PostInfo = {
  text: string
  location?: string
}

const initialState: PostInitialState = {
  posts: [],
  newPost: {
    id: v1(),
    images: [],
    text: '',
    location: '',
  },
  toPublish: false,
}

export const postSlice = createSlice({
  initialState,
  name: 'postSlice',
  reducers: {
    postInit: (state, action: PayloadAction<string>) => {
      const newImage = [
        {
          id: v1(),
          imageUrl: action.payload,
          croppedImageUrl: null,
        },
      ]

      state.newPost.id = v1()
      state.newPost.images = newImage
    },

    addImage: (state, action: PayloadAction<string>) => {
      state.newPost.images.push({
        id: v1(),
        imageUrl: action.payload,
        croppedImageUrl: '',
      })
    },

    cropImage: (state, action: PayloadAction<UpdatePostImageActionPayload>) => {
      const updateImage = state.newPost.images.map(image => {
        if (image.id === action.payload.id) {
          return { ...image, croppedImageUrl: action.payload.croppedImageUrl }
        }

        return image
      })
      state.newPost = {
        ...state.newPost,
        images: updateImage,
      }
    },

    addPostInformation: (state, action: PayloadAction<PostInfo>) => {
      state.newPost.text = action.payload.text
      state.newPost.location = action.payload.location ? action.payload.location : ''
    },

    setToPublish: (state, action: PayloadAction<boolean>) => {
      state.toPublish = action.payload
    }
  },
})

export const postActions = postSlice.actions
export const postReducers = postSlice.reducer
