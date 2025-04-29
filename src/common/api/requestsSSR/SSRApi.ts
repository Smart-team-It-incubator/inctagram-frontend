import axios from 'axios'

const api = axios.create({
  baseURL: 'https://inctagram.work',
})

export const getPostById = async (postId: string) => {
  try {
    const { data } = await api.get(`/api/v1/public-posts/${postId}`)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getUserById = async (profileId: string) => {
  try {
    const { data } = await api.get(`https://inctagram.work/api/v1/public-user/profile/${profileId}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
export const getUserPosts = async (profileId: string) => {
  try {
    const { data } = await api.get(`https://inctagram.work/api/v1/public-posts/user/${profileId}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
