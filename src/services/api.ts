import axios from 'axios'

export const kay = 'c1717208bfb6da7da64338034a530780'
export const baseURL = 'https://api.themoviedb.org/3/movie'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api