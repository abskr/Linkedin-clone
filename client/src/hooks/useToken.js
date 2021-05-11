// Reusable react hook for login and token helper logic
import { useState } from 'react'

export default function useToken() {
  const [token, setToken] = useState()

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken))
    setToken(userToken.token)
  }

  const getToken = () => {
    const tokenString = localStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
  }

  const removeToken = () => {
    localStorage.removeItem('token')
  }

  return {
    saveToken,
    getToken,
    removeToken,
    token,
  }
}