import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  baseURL = process.env.REACT_APP_DEV
} else {
  // production code
  baseURL = process.env.REACT_APP_PROD
}

// AXIOS BASE CONFIG
const token = JSON.parse(localStorage.getItem('token'))
// const options = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
// }

const backend = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export { baseURL, backend }