import axios from 'axios'

const request = axios.create({
  baseURL: 'https://dreamstock-backend-5vag4zydla-el.a.run.app',
})

request.interceptors.request.use(
  request => {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      request.headers.Authorization = token
    }
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

export default request