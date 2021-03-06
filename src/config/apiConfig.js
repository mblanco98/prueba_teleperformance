import axios from 'axios'

export const config = {
  headersPost: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseUrl: process.env.API_URL,
  isDevelopment: process.env.NODE_ENV === 'development',
}

export const $axios = axios.create({
  baseUrl: config.baseUrl,
  timeout: 1000,
})