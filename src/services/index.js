import { $axios } from '../config/apiConfig'

export const registerUser = async (data) => {
  try {
    const res = await $axios.post('/register')
    return res
  } catch (err) {
    console.error(err)
    return err.message
  }
}