import axios from 'axios'

export const config = {
  baseUrl: process.env.API_URL,
  isDevelopment: process.env.NODE_ENV === 'development',
}

export const $axios = axios.create({
  baseUrl: config.baseUrl,
})